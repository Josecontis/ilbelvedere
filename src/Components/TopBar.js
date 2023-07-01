import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlinePhone } from "react-icons/ai";
import {
  HiOutlineHome,
  HiOutlineLocationMarker,
  HiOutlinePhotograph,
} from "react-icons/hi";
import enFlag from "../Assets/flags/en.png";
import frFlag from "../Assets/flags/fr.png";
import itFlag from "../Assets/flags/it.png";
import logoHome from "../Assets/logo/logoHomeWhiteSmall.png";
import "./TopBar.css";

const TopBar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("it");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <section className="top-nav">
        <div>
          <img alt="logo" src={logoHome} />
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <HiOutlineHome />
            <a href="/">{t("topBar.home")}</a>
          </li>
          <li>
            <HiOutlinePhotograph />
            <a href="#places-slideshow">{t("topBar.places")}</a>
          </li>
          <li>
            <HiOutlineLocationMarker />
            <a href="#location">{t("topBar.location")}</a>
          </li>
          <li>
            <AiOutlinePhone />
            <a href="#contacts">{t("topBar.contacts")}</a>
          </li>
          <li>
            <button>
              <a
                rel="noreferrer"
                href="https://www.booking.com/hotel/it/il-belvedere-gravina-in-puglia.it.html"
                target="_blank"
              >
                {t("topBar.book")}
              </a>
            </button>
          </li>
        </ul>
      </section>

      <div className="button-translation">
        <button
          title="Translate to french"
          onClick={() => {
            changeLanguage("fr");
            setActive("fr");
          }}
        >
          <img
            className={active === "fr" ? "button-active" : ""}
            src={frFlag}
            alt="frFlag"
          />
        </button>
        <button
          title="Translate to english"
          onClick={() => {
            changeLanguage("en");
            setActive("en");
          }}
        >
          <img
            className={active === "en" ? "button-active" : ""}
            src={enFlag}
            alt="enFlag"
          />
        </button>
        <button
          title="Translate to italian"
          onClick={() => {
            changeLanguage("it");
            setActive("it");
          }}
        >
          <img
            className={active === "it" ? "button-active" : ""}
            src={itFlag}
            alt="itFlag"
          />
        </button>
      </div>
    </>
  );
};

export default TopBar;
