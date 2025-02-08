import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingSpinner from "@/utils/LoadingSpinner";
import baseUrl from "@/utils/baseUrl";

const INITIAL_STATE = {
	name: "",
	email: "",
	phone: "",
	subject: "",
	message: "",
};

const ContactForm = () => {
	const [contact, setContact] = useState(INITIAL_STATE);
	const [disabled, setDisabled] = React.useState(true);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		const isContact = Object.values(contact).every((el) => Boolean(el));
		isContact ? setDisabled(false) : setDisabled(true);
	}, [contact]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContact((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const url = `${baseUrl}/api/contact`;
			const payload = { ...contact };
			const response = await axios.post(url, payload);
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
			setContact(INITIAL_STATE);
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
			<div className="contact-form">
				<h2> শুরু করতে প্রস্তুত? </h2>
				<p>
				আপনার ইমেইল ঠিকানা প্রচার করা হবে না. প্রয়োজনীয় ক্ষেত্র
চিহ্নিত করা হয় *
				</p>

				<form id="contactForm" onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div className="form-group">
								<input
									type="text"
									placeholder="তোমার নাম"
									name="name"
									value={contact.name}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="col-lg-6 col-md-6">
							<div className="form-group">
								<input
									type="text"
									placeholder=" আপনার ইমেইল ঠিকানা "
									name="email"
									value={contact.email}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="col-lg-12 col-md-6">
							<div className="form-group">
								<input
									type="text"
									placeholder=" আপনার ফোন নম্বর "
									name="phone"
									value={contact.phone}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="col-lg-12 col-md-12">
							<div className="form-group">
								<input
									type="text"
									name="subject"
									value={contact.subject}
									onChange={handleChange}
									placeholder=" আপনার বিষয় "
								/>
							</div>
						</div>

						<div className="col-lg-12 col-md-12">
							<div className="form-group">
								<textarea
									cols="30"
									rows="5"
									placeholder=" আপনার বার্তা লিখুন... "
									name="message"
									value={contact.message}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="col-lg-12 col-sm-12 text-center">
							<button
								type="submit"
								className="default-btn"
								disabled={disabled}
							>
								 বার্তা পাঠান {loading ? <LoadingSpinner /> : ""}
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
