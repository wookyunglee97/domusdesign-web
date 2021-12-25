import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import "../assets/styles/ContactForm.css"
import { FormGroup, Label, Col, Input, Spinner, Button } from "reactstrap";

const SERVICE_ID = 'domusdesign_main'
const TEMPLATE_ID = 'template_51bbb6l'
const USER_ID = 'user_s4uTwUNu8KKc2PaCpUwrN'

const ContactForm = ({ onSent, onError }) => {
    const form = useRef()

    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)
    
    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true)        
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
          .then((result) => {
              setSending(false)
              setSent(true)
              if (onSent !== null) {
                onSent(result)
              }
          }, (error) => {
            setSending(false)
            setError(true)
            if (onError !== null) {
                onError(error)
              }
          });
    };
    
    const buttonContent = sent ? "Submitted" : sending ? <Spinner size="sm"/> : error ? "Error" : "Submit"

    return (
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <FormGroup row>
                <Label sm={4}>First name</Label>
                <Col sm={8}>
                    <Input type="text" name="first_name" placeholder="John"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={4}>Last name</Label>
                <Col sm={8}>
                    <Input type="text" name="last_name" placeholder="Doe"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={4}>Work email</Label>
                <Col sm={8}>
                    <Input type="text" name="email" placeholder="john.doe@example.com"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={4}>Job location</Label>
                <Col sm={8}>
                    <Input type="text" name="location" placeholder="Queens, NYC"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={4}>Message</Label>
                <Col sm={8}>
                    <Input type="textarea" name="message" placeholder="I'm interested in working with Domus Design..."/>
                </Col>
            </FormGroup>
            <Button type="submit" disabled={sending || sent || error}>{buttonContent}</Button>
        </form>
    );
}

export default ContactForm