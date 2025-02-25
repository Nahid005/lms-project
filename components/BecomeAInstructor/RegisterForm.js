import React, { useState } from "react";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import LoadingSpinner from "@/utils/LoadingSpinner";
import toast from "react-hot-toast";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";

const RegisterForm = ({
	user: {
		first_name,
		last_name,
		email,
		phone,
		instructor_request,
		email_confirmed,
	},
}) => {
	const INITIAL_REQUEST = {
		name: `${first_name} ${last_name}`,
		email: email,
		phone: phone,
		instructor_subject: "",
		instructor_description: "",
	};

	const router = useRouter();
	const { nptl_users_token } = parseCookies();

	const [instructor, setInstructor] = useState(INITIAL_REQUEST);
	const [disabled, setDisabled] = React.useState(true);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		const isInstructor = Object.values(instructor).every((el) =>
			Boolean(el)
		);
		isInstructor ? setDisabled(false) : setDisabled(true);
	}, [instructor]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInstructor((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const url = `${baseUrl}/api/instructor/new`;
			const payload = { ...instructor };
			const payloadAuth = {
				headers: { Authorization: nptl_users_token },
			};
			const response = await axios.put(url, payload, payloadAuth);
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

			router.push("/");
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
			<div className="teacher-register-area ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="d-none d-lg-block">
								<video
									style={{ maxWidth: "100%", width: "100%", margin: "0 auto" }}
									playsInline
									loop
									autoPlay
									muted
									controls
									alt="All the devices"
									src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
								/>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="teacher-register-box">
								{!email_confirmed && (
									<div
										className="alert alert-danger"
										role="alert"
									>
										Please confirm your email first.{" "}
										<a href="/send-confirmation-email">
											Didn't receive a confirmation email?
										</a>
									</div>
								)}

								{instructor_request && (
									<div
										className="alert alert-danger"
										role="alert"
									>
										Already sent a request, please wait.
									</div>
								)}
								<h2> একজন প্রশিক্ষক হতে নিবন্ধন করুন </h2>
								<p>
								আপনার ইমেইল ঠিকানা প্রচার করা হবে না. সমস্ত ক্ষেত্র প্রয়োজন.
								</p>

								<form onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<input
													type="text"
													name="name"
													placeholder=" তোমার নাম "
													value={instructor.name}
													onChange={handleChange}
												/>
											</div>
										</div>

										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<input
													type="text"
													name="email"
													placeholder=" আপনার ইমেইল ঠিকানা "
													value={instructor.email}
													onChange={handleChange}
												/>
											</div>
										</div>

										<div className="col-lg-12 col-md-6">
											<div className="form-group">
												<input
													type="text"
													name="phone"
													placeholder=" আপনার ফোন নম্বর "
													value={instructor.phone}
													onChange={handleChange}
												/>
											</div>
										</div>

										<div className="col-lg-12 col-md-6">
											<div className="form-group">
												<input
													type="text"
													name="instructor_subject"
													placeholder=" আপনার বিষয় "
													value={
														instructor.instructor_subject
													}
													onChange={handleChange}
												/>
											</div>
										</div>

										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<textarea
													name="instructor_description"
													cols="30"
													rows="5"
													placeholder=" আপনার বার্তা লিখুন... "
													value={
														instructor.instructor_description
													}
													onChange={handleChange}
												/>
											</div>
										</div>

										<div className="col-lg-12 col-sm-12 text-center">
											<button
												type="submit"
												className="default-btn"
												disabled={
													disabled ||
													!email_confirmed ||
													instructor_request
												}
											>
												 অনুরোধ জমা দিন
												{loading ? (
													<LoadingSpinner />
												) : (
													""
												)}
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RegisterForm;
