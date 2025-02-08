import React from "react";
import Navbar from "@/components/_App/Navbar";
import MainBanner from "@/components/Index/MainBanner";
import Partner from "@/components/Index/Partner";
import PopularCourses from "@/components/Index/PopularCourses";
import FunFacts from "@/components/Index/FunFacts";
import FeedbackSlider from "@/components/Index/FeedbackSlider";
import SubscribeForm from "@/components/Common/SubscribeForm";
import Footer from "@/components/_App/Footer";
import baseUrl from "@/utils/baseUrl";
import HowToApply from "@/components/Index/HowToApply";
import CategoryList from "@/components/Category/CategoryList";

function Index({ courses, user }) {

  return (
    <>
      <Navbar user={user} />
      <MainBanner user={user} />
      <CategoryList />
      <PopularCourses user={user} courses={courses} courseTitle ={"আমাদের জনপ্রিয় কোর্স"} />
      <PopularCourses user={user} courses={courses} courseTitle ={"আমাদের নতুন কোর্স"} />
      <HowToApply />
      <FeedbackSlider />
      <FunFacts />
      <SubscribeForm />
      <Partner />
      <Footer />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${baseUrl}/api/popular-courses`);
  const { courses } = await res.json();

  // Pass data to the page via props
  return { props: { courses: courses || [] } };
}

export default Index;
 