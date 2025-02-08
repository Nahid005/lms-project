import React, { useState, useEffect } from "react";
import CourseSkeletonLoader from "@/utils/CourseSkeletonLoader";
import { useRouter } from "next/router";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import Link from "next/link";

const CategoryList = ({ user }) => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	const fetchCategories = async () => {
		setLoading(true);
		const response = await axios.get(`${baseUrl}/api/categories/featured`);
		setCategories(response.data.categories);
		setLoading(false);
	};

	useEffect(() => {
		fetchCategories(); 
	}, []);
	

	return (
		<>
            <div className="category_lsit pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title"> প্রত্যয় একাডেমীতে আপনাকে স্বাগতম </span>
                        <h2> আমাদের সমস্ত <span> ক্যাটাগরি </span>  </h2>
                    </div>
                    <div className="row">
			            { loading ? ( <CourseSkeletonLoader/>) : (
                            categories && categories.map(category => (
                                <div className="col-lg-2 col-md-3 col-sm-6" key={category.id}>
                                    <div className="single-language-courses-box">
                                        <Link href={`/category/${category.slug}`}>
                                            <img src={category.image} alt="image" />
                                        </Link>
                                        
                                        <Link href={`/category/${category.slug}`}>
                                            <h3> {category.name} </h3>
                                        </Link>
                                    </div>
                                </div>
                            ))

                            ) 
                        }
                    </div>
                </div>
            </div>
		</>
	);
};



export default CategoryList;
