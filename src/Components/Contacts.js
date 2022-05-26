import React, { useState } from "react";
import emailjs from "emailjs-com";
import { t } from "i18next";
import CustomAlert from "./Alert";
import "./Contacts.css";

export const Contacts = () => {
  const [emailFlag, setEmailFlag] = useState(false);
  const [nameFlag, setnameFlag] = useState(false);
  const [txtFlag, setTxtFlag] = useState(false);
  const [testFlag, setTestFlag] = useState(0);

  const sendEmail = (e) => {
    let templateParams = {
      from_name: document.getElementById("name").value,
      subject: document.getElementById("subject").value,
      to_name: "ilbelvederegravina@gmail.com",
      message_html: document.getElementById("message").value,
      from_email: document.getElementById("email").value,
      reply_to: document.getElementById("email").value,
    };

    if (templateParams.from_email === "") setTestFlag(-1);
    else {
      setTestFlag(1);
      emailjs.send(
        "service_99az9cx",
        "template_gvo47pi",
        templateParams,
        "NbgnqDLtBnj2y-Hs4"
      );
    }
  };

  const emailConstraints = (content) => {
    setEmailFlag(content.target.value !== "");
  };
  const nameConstraints = (content) => {
    setnameFlag(content.target.value !== "");
  };
  const txtConstraints = (content) => {
    setTxtFlag(content.target.value !== "");
  };

  return (
    <div className="form-contacts-container">
      {/* <div>
        {testFlag === 1 ? (
          <CustomAlert Success={true} />
        ) : testFlag === -1 ? (
          <CustomAlert Success={false} />
        ) : null}
      </div> */}
      <div>
        <div className="name-form">
          <label className="form-label">{t("contacts.name")}</label>
          <input id="name" className="form-input" onChange={nameConstraints} />
        </div>
        <div className="email-form">
          <label className="form-label">{t("contacts.email")}</label>
          <input
            id="email"
            className="form-input"
            onChange={emailConstraints}
          />
        </div>
      </div>
      <div className="subject-form">
        <label className="form-label">{t("contacts.object")}</label>
        <input id="subject" className="form-input" />
      </div>
      <div className="message-form">
        <label className="form-label">{t("contacts.message")}</label>
        <input
          id="message"
          className="form-text-area"
          onChange={txtConstraints}
        />
      </div>
      <button
        disabled={txtFlag && nameFlag && emailFlag}
        className="form-button"
        onClick={(e) => sendEmail(e)}
      >
        {t("contacts.send")}
      </button>
    </div>
  );
};
