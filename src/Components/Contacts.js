import React, { useEffect, useState } from "react";
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

  const sendEmail = () => {
    let templateParams = {
      from_name: name,
      subject: object,
      to_name: "ilbelvederegravina@gmail.com",
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
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          setTestFlag(-1);
          console.log("FAILED...", error);
        }
      );
  };

  const renderAlert = () => {
    return testFlag === 1 ? (
      <AlertNotification Success={true} />
    ) : testFlag === -1 ? (
      <AlertNotification Success={false} />
    ) : null;
  };

  return (
    <div className="form-contacts-container">
      <div className="alert-container">{renderAlert()}</div>
      <div>
        <div className="name-form">
          <label className="form-label">{t("contacts.name")}</label>
          <input
            id="name"
            className="form-input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="email-form">
          <label className="form-label">{t("contacts.email")}</label>
          <input
            id="email"
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="subject-form">
        <label className="form-label">{t("contacts.object")}</label>
        <input
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
          name && email && object && message
            ? "form-button"
            : "form-button-disabled"
        }
        onClick={(e) => {
          sendEmail(e);
          renderAlert();
        }}
      >
        {t("contacts.send")}
      </button>
    </div>
  );
};