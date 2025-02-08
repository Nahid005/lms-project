import React, { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import AdminSideNav from "@/components/_App/AdminSideNav";
import Link from "next/link";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import LoadingSpinner from "@/utils/LoadingSpinner";
import toast from "react-hot-toast";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";

const INITIAL_VALUE = {
	name: "",
	image: "",
	is_featured: "",
};

const Create = ({ user }) => {
  const router = useRouter();
  const { nptl_users_token } = parseCookies();
  // const [cat, setCat] = useState({ category: "" });
  const [cat, setCat] = useState(INITIAL_VALUE);
  const [loading, setLoading] = React.useState(false);
  const [isFeatured, setFeatured] = React.useState('No');
  const [imagePreview, setImagePreview] = React.useState("");

  const handleChange = (e) => {
		const { name, value, files } = e.target;

		if (name === "image") {
			const image = files[0].size / 1024 / 1024;
			if (image > 2) {
				toast.error(
					"The photo size greater than 2 MB. Make sure less than 2 MB.",
					{
						style: {
							border: "1px solid #ff0033",
							padding: "16px",
							color: "#ff0033",
						},
						iconTheme: {
							primary: "#ff0033",
							secondary: "#FFFAEE",
						},
					}
				);
				e.target.value = null;
				return;
			}
			setCat((prevState) => ({
				...prevState,
				image: files[0],
			}));
			setImagePreview(window.URL.createObjectURL(files[0]));
		}else if(name === "is_featured") {
      if (isFeatured === "No") {
				setFeatured("Yes")
			}else{
        setFeatured("No")
      }
    }else {
      setCat((prevState) => ({ ...prevState, [name]: value }));
		}
	};

	const handleImageUpload = async () => {
		const data = new FormData();
		data.append("file", cat.image);
		data.append("upload_preset", process.env.UPLOAD_PRESETS);
		data.append("cloud_name", process.env.CLOUD_NAME);
		let response;
		if (cat.image) {
			response = await axios.post(process.env.CLOUDINARY_URL, data);
		}
		const imageUrl = response.data.url;

		return imageUrl;
	};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let photo;
			if (cat.image) {
				photo = await handleImageUpload();

				photo = photo.replace(/^http:\/\//i, "https://");
			}

      const url = `${baseUrl}/api/categories/create`;
      const payload = {
        headers: { Authorization: nptl_users_token },
      };

      const payloadData = {
        name: cat.name,
        image: photo,
        is_featured: isFeatured,
      };

      const response = await axios.post(url, payloadData, payload);
      toast.success(response.data.message, {
        style: {
          border: "1px solid #4BB543",
          padding: "16px",
          color: "#4BB543",
        },
        iconTheme: {
          primary: "#4BB543",
          secondary: "#FFFAEE",
        },
      });
      router.push("/admin/categories");
    } catch (err) {
      let {
        response: {
          data: { message },
        },
      } = err;
      toast.error(message, {
        style: {
          border: "1px solid #ff0033",
          padding: "16px",
          color: "#ff0033",
        },
        iconTheme: {
          primary: "#ff0033",
          secondary: "#FFFAEE",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar user={user} />

      <div className="main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-4">
              <AdminSideNav user={user} />
            </div>

            <div className="col-lg-10 col-md-8">
              <div className="main-content-box">
                {/* Nav */}
                <ul className="nav-style1">
                  <li>
                    <Link href="/admin/categories/">
                      <a>Categories</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/categories/create/">
                      <a className="active">Create</a>
                    </Link>
                  </li>
                </ul>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label fw-semibold">
                          Categories
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={cat.name}
                          onChange={handleChange}
                          required={true}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label fw-semibold">
                          Categories Image
                        </label>
                        <input
                          type="file"
                          className="form-control file-control"
                          name="image"
                          onChange={handleChange}
                          required={true}
                        />
                        <div className="form-text">
                          Upload image recommended size 120x100!
                        </div>

                        <div className="mt-2">
                          <img
                            src={
                              imagePreview
                                ? imagePreview
                                : "/images/empty-image.jpg"
                            }
                            alt="image"
                            className="img-thumbnail w-100px me-2"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 pb-3">
                      <div className="form-check form-switch">
                        <input className="form-check-input" 
                        type="checkbox" 
                        name="is_featured"
                        value={cat.is_featured}
                        onChange={handleChange}
                        required={false}  
                        />
                        <label className="form-check-label">Featured</label>
                      </div>

                    </div>

                    <div className="col-12">
                      <button type="submit" className="default-btn">
                        <i className="flaticon-right-arrow"></i>
                        Save <span></span>
                        {loading ? <LoadingSpinner /> : ""}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Create;
