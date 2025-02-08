import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import Link from "next/link";
import CourseCreateForm from "@/components/Instructor/CourseCreateForm";

const OrderHistory = ({ user }) => {

    // const allCourses = ["course1", "course2", "course3", "course4"]
    // const result = allCourses.filter(data => data == "course4" ? data : "")
    // console.log("all courses list", allCourses)
    // console.log("filtered courses", result)

	return (
		<>
			<Navbar user={user} />

			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4"> Order History </h2>
					<table className="table table-striped">
						<thead>
							<tr>
								<th>SL</th>
								<th>Order ID</th>
								<th>Customer Name</th>
								<th>Regular Price</th>
								<th>Discount Price</th>
								<th>Total Price</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>01</td>
								<td>#007ADD99</td>
								<td>Demo customer name</td>
								<td className="text-center">5869</td>
								<td className="text-center">458</td>
								<td className="text-center">5100</td>
							</tr>
							<tr>
								<td>01</td>
								<td>#007ADD99</td>
								<td>Demo customer name</td>
								<td className="text-center">5869</td>
								<td className="text-center">458</td>
								<td className="text-center">5100</td>
							</tr>
							<tr>
								<td>01</td>
								<td>#007ADD99</td>
								<td>Demo customer name</td>
								<td className="text-center">5869</td>
								<td className="text-center">458</td>
								<td className="text-center">5100</td>
							</tr>
							<tr>
								<td>01</td>
								<td>#007ADD99</td>
								<td>Demo customer name</td>
								<td className="text-center">5869</td>
								<td className="text-center">458</td>
								<td className="text-center">5100</td>
							</tr>
							<tr>
								<td>01</td>
								<td>#007ADD99</td>
								<td>Demo customer name</td>
								<td className="text-center">5869</td>
								<td className="text-center">458</td>
								<td className="text-center">5100</td>
							</tr>
							<tr>
								<td>01</td>
								<td>#007ADD99</td>
								<td>Demo customer name</td>
								<td className="text-center">5869</td>
								<td className="text-center">458</td>
								<td className="text-center">5100</td>
							</tr>
							<tr>
								<td>01</td>
								<td>#007ADD99</td>
								<td>Demo customer name</td>
								<td className="text-center">5869</td>
								<td className="text-center">458</td>
								<td className="text-center">5100</td>
							</tr>
							<tr>
								<td>01</td>
								<td>#007ADD99</td>
								<td>Demo customer name</td>
								<td className="text-center">5869</td>
								<td className="text-center">458</td>
								<td className="text-center">5100</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<th colSpan={5} className="text-right">Total</th>
								<th>859685</th>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default OrderHistory;
