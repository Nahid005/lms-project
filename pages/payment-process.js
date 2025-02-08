import React from "react";
import Navbar from "@/components/_App/Navbar";
import LoginForm from "@/components/Authentication/LoginForm";
import Footer from "@/components/_App/Footer";

export default function AuthenticationPage({ user }) {
  return (
    <>
      <Navbar user={user} />
        <section className="min-vh-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1> please payment this number </h1>
                    </div>
                </div>
            </div>
        </section>
      <Footer />
    </>
  );
}
