import React from "react";
import ContactForm from '../components/ContactForm';
import "../assets/styles/Contact.css";

const Contact = () => {

  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <h1>contact us</h1>
        <ContactForm onSent={() => {}} onError={() => {}}/>
      </div>
    </div>
  )
}

export default Contact;
