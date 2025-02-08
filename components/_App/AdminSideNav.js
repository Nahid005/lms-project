import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import StickyBox from "react-sticky-box";
import { motion } from "framer-motion";

const AdminSideNav = ({ user }) => {
	const isAdmin = user.role === "admin";
	const router = useRouter();
	const currentRoute = router.pathname;

	useEffect(() => {
		if (!isAdmin) {
			router.replace("/");
		}
	}, [user]);

	// Sidebar Nav
	const [isActiveSidebarNav, setActiveSidebarNav] = useState("false");
	const handleToggleSidebarNav = () => {
		setActiveSidebarNav(!isActiveSidebarNav);
	};

	return (
		<>
			{/* For mobile device */}
			<div className="text-end d-md-none">
				<div
					className="sidebar-menu-button"
					onClick={handleToggleSidebarNav}
				>
					Sidebar Menu
				</div>
			</div>

			<div
				className={`side-nav-wrapper ${
					isActiveSidebarNav ? "" : "active"
				}`}
			>
				<StickyBox
					className="sticky-box"
					offsetTop={50}
					offsetBottom={20}
				>
					{/* Close button */}
					<div
						className="close d-md-none"
						onClick={handleToggleSidebarNav}
					>
						<i className="bx bx-x"></i>
					</div>

					{/* Nav */}
					<div className="side-nav">
						<ul>
							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link href="/admin/">
									<a
										className={
											currentRoute === "/admin"
												? "active"
												: ""
										}
									>
										<i class='bx bxs-dashboard' ></i> {" "}
										Dashboard
									</a>
								</Link>
							</motion.li>

							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link href="/admin/courses/">
									<a
										className={
											currentRoute === "/admin/courses" ||
											currentRoute ===
												"/admin/courses/new-arrival"
												? "active"
												: ""
										}
									>
										<i class='bx bxs-videos'></i> {" "}
										Courses
									</a>
								</Link>
							</motion.li>

							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link href="/admin/instructor/">
									<a
										className={
											currentRoute ===
												"/admin/instructor" ||
											currentRoute ===
												"/admin/instructor/requests"
												? "active"
												: ""
										}
									>
										<i class='bx bxs-user-detail'></i> {" "}
										Instructors
									</a>
								</Link>
							</motion.li>

							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link href="/admin/students/">
									<a
										className={
											currentRoute ===
												"/admin/students" ||
											currentRoute ===
												"/admin/students/site-admins"
												? "active"
												: ""
										}
									>
										<i class='bx bxs-user-detail'></i> {" "}
										Students
									</a>
								</Link>
							</motion.li>

							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link href="/admin/partners/">
									<a
										className={
											currentRoute ===
												"/admin/partners" ||
											currentRoute ===
												"/admin/partners/create"
												? "active"
												: ""
										}
									>
										<i class='bx bxs-user-detail'></i> {" "}
										Partners
									</a>
								</Link>
							</motion.li>

							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link href="/admin/testimonials/">
									<a
										className={
											currentRoute ===
												"/admin/testimonials" ||
											currentRoute ===
												"/admin/testimonials/create"
												? "active"
												: ""
										}
									>
										<i class='bx bx-images'></i> {" "}
										Testimonials Management
									</a>
								</Link>
							</motion.li>

							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link href="/admin/categories/">
									<a
										className={
											currentRoute ===
												"/admin/categories" ||
											currentRoute ===
												"/admin/categories/create"
												? "active"
												: ""
										}
									>
										<i class='bx bxs-category'></i> {" "}
										Categories Management
									</a>
								</Link>
							</motion.li>
							
							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link href="/admin/coupons/">
									<a
										className={
											currentRoute === "/admin/coupons" ||
											currentRoute ===
												"/admin/coupons/create"
												? "active"
												: ""
										}
									>
										<i class='bx bx-gift'></i> {" "}
										Coupon Management
									</a>
								</Link>
							</motion.li>
							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link href="/profile/basic-information/">
									<a
										className={
											currentRoute === "/admin/coupons" ||
											currentRoute ===
												"/admin/coupons/create"
												? "active"
												: ""
										}
									>
										<i class='bx bxs-cog'></i> 
										{" "} Account Setting
									</a>
								</Link>
							</motion.li>
						</ul>
					</div>
				</StickyBox>
			</div>
		</>
	);
};

export default AdminSideNav;
