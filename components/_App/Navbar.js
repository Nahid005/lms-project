import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { motion } from "framer-motion";
import Link from "@/utils/ActiveLink";
import ProfileDropdown from "./ProfileDropdown";
import Cart from "./Cart";
import SearchForm from "./SearchForm";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Navbar = ({ user }) => {
	const [menu, setMenu] = React.useState(true);

	const toggleNavbar = () => {
		setMenu(!menu);
	};

	React.useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky");
			} else {
				elementId.classList.remove("is-sticky");
			}
		});
	});

	const classOne = menu
		? "collapse navbar-collapse"
		: "collapse navbar-collapse show";
	const classTwo = menu
		? "navbar-toggler navbar-toggler-right collapsed"
		: "navbar-toggler navbar-toggler-right";

	return (
		<>
			<div id="navbar" className="navbar-area">
				<div className="nptl-nav">
					<div className="container-fluid">
						<div className="navbar navbar-expand-lg navbar-light align-items-center">
							<Link href="/">
								<a
									className="navbar-brand"
								>
									<img src="/images/main-logo.png" alt="logo" />
								</a>
							</Link>

							

							{/* <button
								onClick={toggleNavbar}
								className={classTwo}
								type="button"
							>
								<span className="icon-bar top-bar"></span>
								<span className="icon-bar middle-bar"></span>
								<span className="icon-bar bottom-bar"></span>
							</button> */}

							<div
								className={classOne}
								id="navbarSupportedContent"
							>
								<SearchForm />

								<ul className="navbar-nav">
									<motion.li
										className="nav-item"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
									>
										<Link href="/" activeClassName="active">
											<a
												onClick={toggleNavbar}
												className="nav-link"
											>
												হোম
											</a>
										</Link>
									</motion.li>

									<motion.li
										className="nav-item"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
									>
										<Link
											href="/courses"
											activeClassName="active"
										>
											<a
												onClick={toggleNavbar}
												className="nav-link"
											>
												কোর্সসমূহ
											</a>
										</Link>
									</motion.li>

									{/* {user ? (
										!user.instructor_request && (
											<motion.li
												className="nav-item"
												whileHover={{
													scale: 1.1,
													transition: {
														duration: 0.5,
													},
												}}
												whileTap={{ scale: 0.9 }}
											>
												<Link
													href="/become-an-instructor"
													activeClassName="active"
												>
													<a
														onClick={toggleNavbar}
														className="nav-link"
													>
														প্রশিক্ষক হতে চান ?
													</a>
												</Link>
											</motion.li>
										)
									) : (
										<motion.li
											className="nav-item"
											whileHover={{
												scale: 1.1,
												transition: { duration: 0.5 },
											}}
											whileTap={{ scale: 0.9 }}
										>
											<Link
												href="/become-an-instructor"
												activeClassName="active"
											>
												<a
													onClick={toggleNavbar}
													className="nav-link"
												>
													প্রশিক্ষক হতে চান ?
												</a>
											</Link>
										</motion.li>
									)} */}
								</ul>
							</div>

							<div className="others-option d-flex align-items-center">
								<div className="option-item">
									{user ? (
										<ProfileDropdown {...user} />
									) : (
										<Link href="/login">
											<a className="default-btn">
												<i className="flaticon-user"></i>{" "}
												লগইন/রেজিস্ট্রেশন <span></span>
											</a>
										</Link>
									)}
								</div>
								<Cart />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
