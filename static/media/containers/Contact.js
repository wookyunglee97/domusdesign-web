import React from "react";
import ContactForm from "../components/ContactForm";
import "../assets/styles/Contact.css";
import logo from "../assets/images/LOGO.png";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <h1>
          <img src={logo} alt="domus design logo"></img>Contact Us
        </h1>
        <ContactForm onSent={() => {}} onError={() => {}} />
      </div>
    </div>
  );
};

export default Contact;
