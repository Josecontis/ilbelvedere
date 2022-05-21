import React from "react";
import "./InfoModal.css";
import { IoClose } from "react-icons/io5";

export const InfoModal = ({ closeAction, title, desc }) => {
  return (
    title && (
        <>
        <div className="modal-background"></div>
      <div className="info-modal">
        <div className="info-modal-close">
          <IoClose onClick={closeAction} />
        </div>
        <div className="title">{title}</div>
        <div className="body">{desc}</div>
      </div>
      </>
    )
  );
};
