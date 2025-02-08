import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutUs from "../components/AboutUs/AboutUs";
import FunFacts from "@/components/Index/FunFacts";
import FeedbackSlider from "@/components/Index/FeedbackSlider";
import CourseAdvisor from "../components/Common/CourseAdvisor";
import Partner from "@/components/Index/Partner";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";

export default function AbourUsPage({ user }) {
  return (
    <>
      <Navbar user={user} />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
      />

      <AboutUs />

      <FunFacts />

      <FeedbackSlider />

      <CourseAdvisor />

      <Partner />

      <SubscribeForm />

      <Footer />
    </>
  );
}
