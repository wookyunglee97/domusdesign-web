import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../assets/styles/ContactForm.css";
import {
  FormGroup,
  Label,
  Col,
  Input,
  Spinner,
  Button,
  FormFeedback,
} from "reactstrap";

const SERVICE_ID = "domusdesign_main";
const TEMPLATE_ID = "template_51bbb6l";
const USER_ID = "user_s4uTwUNu8KKc2PaCpUwrN";

const ContactForm = ({ onSent, onError }) => {
  const form = useRef();

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        setSending(false);
        setSent(true);
        if (onSent !== null) {
          onSent(result);
        }
      },
      (error) => {
        setSending(false);
        setError(true);
        if (onError !== null) {
          onError(error);
        }
      }
    );
  };

  const buttonContent = sent ? (
    "Submitted"
  ) : sending ? (
    <Spinner size="sm" />
  ) : error ? (
    "Error"
  ) : (
    "Submit"
  );

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <FormGroup row>
        <Label sm={3}>
          First name<span className="required-field">*</span>
        </Label>
        <Col sm={9}>
          <Input
            className="field-box"
            type="text"
            name="first_name"
            placeholder="John"
            required
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={3}>
          Last name<span className="required-field">*</span>
        </Label>
        <Col sm={9}>
          <Input
            className="field-box"
            type="text"
            name="last_name"
            placeholder="Doe"
            required
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={3}>
          Work email<span className="required-field">*</span>
        </Label>
        <Col sm={9}>
          <Input
            className="field-box"
            type="text"
            name="email"
            placeholder="john.doe@example.com"
            required
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={3}>Job location</Label>
        <Col sm={9}>
          <Input
            className="field-box"
            type="text"
            name="location"
            placeholder="Queens, NYC"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={3}>
          Message<span className="required-field">*</span>
        </Label>
        <Col sm={9}>
          <Input
            type="textarea"
            className="message-box"
            name="message"
            placeholder="I'm interested in working with Domus Design..."
            required
          />
        </Col>
      </FormGroup>
      <Button type="submit" disabled={sending || sent || error}>
        {buttonContent}
      </Button>
    </form>
  );
};

export default ContactForm;
