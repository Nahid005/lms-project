import React from "react";
import Navbar from "@/components/_App/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import RegisterForm from "@/components/Authentication/RegisterForm";
import Footer from "@/components/_App/Footer";

export default function AuthenticationPage({ user }) {
  return (
    <>
      <Navbar user={user} />
      <div className="profile-authentication-area ptb-100 min-vh-100">
        <div className="container">
          <div className="row justify-content-center" >
            <div className="col-lg-6 col-md-12">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
