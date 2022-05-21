import { useState } from "react";
import "./Splitter.css";
import { InfoModal } from "./InfoModal";
import { t } from "i18next";

const Splitter = ({ icon, title, subtitle, subtitleServices, hasButton }) => {
  const [infoModal, setInfoModal] = useState("");
  return (
    <div className="splitter-container">
      <div className="splitter-bar">{icon}</div>
      <div className="splitter-title">
        {hasButton && (
          <div className="splitter-title-button">
            <button>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.google.com/maps/@40.818847,16.4134954,3a,75y,342.87h,81.7t/data=!3m8!1e1!3m6!1sAF1QipPoF0DnhDuqz71-771kufrtAsxpFtGBIW0c80z5!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPoF0DnhDuqz71-771kufrtAsxpFtGBIW0c80z5%3Dw203-h100-k-no-pi0-ya281.5996-ro-0-fo100!7i2508!8i1254"
              >
                {t("splitter.button")}
              </a>
            </button>
          </div>
        )}
        <div className="splitter-title-label">{title}</div>
      </div>

      <div className="splitter-subtitle">{subtitle}</div>
      {subtitleServices && (
        <div
          className="splitter-subtitle-services"
         
        >
          {subtitleServices.map((el, index) => (
            <div key={index} className="services" onClick={() => setInfoModal(el.label)}>
              {el.icon}
              {el.label}
            </div>
          ))}
          <InfoModal
            closeAction={() => setInfoModal("")}
            title={infoModal}
          />
        </div>
      )}
    </div>
  );
};

export default Splitter;
