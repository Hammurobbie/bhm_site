import { React, useState } from "react";
import utilStyles from "../styles/utils.module.scss";
import { motion } from "framer-motion";

export default function ContactForm() {
  const defaultFormValues = {
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
    coc: false,
    application: false,
    emailLab: false,
  };
  const [formInput, setFormInput] = useState(defaultFormValues);
  const [errorMessages, setErrorMessages] = useState([]);

  const validate = (e) => {
    e.preventDefault();
    if (
      !/[a-zA-Z]/.test(formInput.firstName) ||
      !/[a-zA-Z]/.test(formInput.lastName) ||
      !/[a-zA-Z]/.test(formInput.subject) ||
      !/[a-zA-Z]/.test(formInput.message)
    ) {
      const errs = [];
      if (!/[a-zA-Z]/.test(formInput.firstName)) {
        errs.push("Please include a first name");
      }
      if (!/[a-zA-Z]/.test(formInput.lastName)) {
        errs.push("Please include a last name");
      }
      if (!/[a-zA-Z]/.test(formInput.subject)) {
        errs.push("Please include a subject");
      }
      if (!/[a-zA-Z]/.test(formInput.message)) {
        errs.push("Please include a message");
      }
      setErrorMessages(errs);
    } else submitForm();
  };

  const submitForm = () => {
    const name = `${
      formInput?.firstName?.charAt(0)?.toUpperCase() +
      formInput?.firstName?.slice(1) +
      " " +
      formInput?.lastName?.charAt(0)?.toUpperCase() +
      formInput?.lastName?.slice(1)
    }`;
    const body = `Hello, %0D%0A %0D%0A My name is ${name}. ${
      formInput?.message?.charAt(0)?.toUpperCase() +
      formInput?.message?.slice(1)
    }${formInput?.message?.slice(-1) !== "." ? "." : ""} ${
      formInput?.coc && formInput?.application
        ? "I would like a Chain of Custody form and an application."
        : formInput?.coc
        ? "I would like a Chain of Custody form."
        : formInput?.application
        ? "I would like an application."
        : ""
    }
    %0D%0A %0D%0A Best, %0D%0A ${name}`;

    window.open(
      `mailto:${
        formInput?.emailLab
          ? "bhmlabservices@gmail.com"
          : "bhm@bhmenvironmental.com"
      }?subject=${formInput?.subject}&body=${body}`
    );
    setFormInput(defaultFormValues);
    setErrorMessages([]);
  };

  const handleToggle = () => {
    setFormInput({
      ...formInput,
      emailLab: !formInput["emailLab"],
    });
  };

  const formChange = (e) => {
    if (e.target.name === "coc") {
      setFormInput({
        ...formInput,
        [e.target.name]: !formInput["coc"],
      });
    } else if (e.target.name === "application") {
      setFormInput({
        ...formInput,
        [e.target.name]: !formInput["application"],
      });
    } else {
      setFormInput({
        ...formInput,
        [e.target.name]: e.target.value,
      });
    }

    if (
      e.target.name === "firstName" &&
      formInput.firstName &&
      errorMessages.includes("Please include a first name")
    ) {
      const errs = errorMessages.filter(
        (e) => e !== "Please include a first name"
      );
      setErrorMessages(errs);
    } else if (
      e.target.name === "lastName" &&
      formInput.lastName &&
      errorMessages.includes("Please include a last name")
    ) {
      const errs = errorMessages.filter(
        (e) => e !== "Please include a last name"
      );
      setErrorMessages(errs);
    } else if (
      e.target.name === "subject" &&
      formInput.subject &&
      errorMessages.includes("Please include a subject")
    ) {
      const errs = errorMessages.filter(
        (e) => e !== "Please include a subject"
      );
      setErrorMessages(errs);
    } else if (
      e.target.name === "message" &&
      formInput.message &&
      errorMessages.includes("Please include a message")
    ) {
      const errs = errorMessages.filter(
        (e) => e !== "Please include a message"
      );
      setErrorMessages(errs);
    }
  };

  return (
    <motion.div
      className={utilStyles.contactForm}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <form onSubmit={validate}>
        <label htmlFor="firstName">First Name</label>
        {errorMessages.includes("Please include a first name") && (
          <em>Please include a first name</em>
        )}
        <input
          className={
            errorMessages.includes("Please include a first name")
              ? utilStyles.errorBorder
              : ""
          }
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formInput?.firstName}
          onChange={formChange}
        />
        <label htmlFor="lastName">Last Name</label>
        {errorMessages.includes("Please include a last name") && (
          <em>Please include a last name</em>
        )}
        <input
          className={
            errorMessages.includes("Please include a last name")
              ? utilStyles.errorBorder
              : ""
          }
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formInput?.lastName}
          onChange={formChange}
        />
        <label htmlFor="subject">Subject</label>
        {errorMessages.includes("Please include a subject") && (
          <em>Please include a subject</em>
        )}
        <input
          className={
            errorMessages.includes("Please include a subject")
              ? utilStyles.errorBorder
              : ""
          }
          type="text"
          name="subject"
          placeholder="Subject"
          value={formInput?.subject}
          onChange={formChange}
        />
        <label htmlFor="message">Message</label>
        {errorMessages.includes("Please include a message") && (
          <em>Please include a message</em>
        )}
        <textarea
          className={
            errorMessages.includes("Please include a message")
              ? utilStyles.errorBorder
              : ""
          }
          type="text"
          name="message"
          placeholder="Your message"
          value={formInput?.message}
          onChange={formChange}
        />
        <div>
          <input
            className={utilStyles.checkBox}
            type="checkbox"
            name="coc"
            checked={formInput?.coc}
            onChange={formChange}
          />
          <label htmlFor="coc">I would like a Chain of Custody form</label>
        </div>
        <div>
          <input
            className={utilStyles.checkBox}
            type="checkbox"
            name="application"
            checked={formInput?.application}
            onChange={formChange}
          />
          <label htmlFor="application">I would like an Application form</label>
        </div>
        <div>
          <div className={utilStyles.toggleDiv}>
            <div
              onClick={handleToggle}
              className={
                !formInput?.emailLab
                  ? utilStyles.toggledStyle
                  : utilStyles.toggleStyle
              }
            >
              <div
                className={
                  !formInput?.emailLab ? utilStyles.toggled : utilStyles.toggle
                }
              />
            </div>
            <p>{`Email ${formInput?.emailLab ? "Lab" : "Office"}`}</p>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </motion.div>
  );
}
