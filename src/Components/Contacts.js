import React, { useState } from "react";
import emailjs from "emailjs-com";
import { t } from "i18next";
import { AlertNotification } from "./AlertNotification";
import "./Contacts.css";

export const Contacts = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
  const [testFlag, setTestFlag] = useState(0);
  const [validation, setValidation] = useState(false);

  const sendEmail = () => {
    let templateParams = {
      from_name: name,
      subject: object,
      to_name: "ilbelvederegravina@outlook.it",
      message_html: message,
      from_email: email,
      reply_to: email,
    };

    emailjs
      .send(
        "service_71tircc",
        "template_7iyx15d",
        templateParams,
        "YRrKkrPNpgyEoqK3o"
      )
      .then(
        function (response) {
          setTestFlag(1);
          renderAlert();
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          setTestFlag(-1);
          renderAlert();
          console.log("FAILED...", error);
        }
      );
  };

  const renderAlert = () => {
    if (testFlag === 1) {
      return (
        <div className="alert-container">
          <AlertNotification Success={true} />
        </div>
      );
    } else if (testFlag === -1) {
      return (
        <div className="alert-container">
          <AlertNotification Success={false} />
        </div>
      );
    }
  };

  return (
    <div className="form-contacts-container">
      {renderAlert()}
      <div>
        <div className="name-form">
          <label className="form-label">{t("contacts.name")}</label>
          <input
            autoComplete="off"
            id="name"
            className="form-input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="email-form">
          <label className="form-label">{t("contacts.email")}</label>
          {!validation && email !== "" && (
            <label className="form-label-error">{t("validation.email")}</label>
          )}
          <input
            autoComplete="off"
            id="email"
            className={
              email === "" || validation ? "form-input" : "form-input-error"
            }
            onChange={(e) => {
              setEmail(e.target.value);
              let emailTest = new RegExp(
                "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})"
              );
              email !== "" && setValidation(emailTest.test(e.target.value));
            }}
          />
        </div>
      </div>
      <div className="subject-form">
        <label className="form-label">{t("contacts.object")}</label>
        <input
          autoComplete="off"
          id="subject"
          className="form-input"
          onChange={(e) => setObject(e.target.value)}
        />
      </div>
      <div className="message-form">
        <label className="form-label">{t("contacts.message")}</label>
        <textarea
          id="message"
          className="form-text-area"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        className={
          name && email && object && message && validation
            ? "form-button"
            : "form-button-disabled"
        }
        onClick={(e) => {
          name && email && object && message && validation && sendEmail(e);
        }}
      >
        {t("contacts.send")}
      </button>
    </div>
  );
};
