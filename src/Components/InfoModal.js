import React from "react";
import "./InfoModal.css";
import { IoClose } from "react-icons/io5";

export const InfoModal = ({ closeAction, title, description }) => {
  return (
    title && (
      <>
        <div className="modal-background"></div>
        <div className="info-modal">
          <div className="info-modal-close">
            <IoClose onClick={closeAction} />
          </div>
          <div className="title">{title}</div>
          <div className="body">{description}</div>
        </div>
      </>
    )
  );
};
