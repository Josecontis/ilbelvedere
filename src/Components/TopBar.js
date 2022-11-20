import "./TopBar.css";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlinePhotograph } from "react-icons/hi";
import logoHome from "../Assets/logo/logoHomeWhiteSmall.png";
import { AiOutlinePhone } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import itFlag from "../Assets/flags/it.png";
import enFlag from "../Assets/flags/en.png";
import { useState } from "react";

const TopBar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("it");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <section class="top-nav">
        <div>
          <img alt="logo" src={logoHome} />
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" htmlFor="menu-toggle">
          <div class="menu-button"></div>
        </label>
        <ul class="menu">
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
          title="Translate to english"
          onClick={() => {
            changeLanguage("en");
            setActive("en");
          }}
          style={{
            border: "none",
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

      {/* <div className="top-bar">
        <img alt="logo" src={logoHome} />
        <input type="checkbox" id="nav-check" />
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="info">
          <HiOutlineHome />
          <a href="/">{t("topBar.home")}</a>
        </div>
        <div className="info">
          <HiOutlinePhotograph />
          <a href="#places-slideshow">{t("topBar.places")}</a>
        </div>
        <div className="info">
          <HiOutlineLocationMarker />
          <a href="#location">{t("topBar.location")}</a>
        </div>
        <div className="info">
          <AiOutlinePhone />
          <a href="#contacts">{t("topBar.contacts")}</a>
        </div>
        <div className="info">
          <button>
            <a
              rel="noreferrer"
              href="https://www.booking.com/hotel/it/il-belvedere-gravina-in-puglia.it.html"
              target="_blank"
            >
              {t("topBar.book")}
            </a>
          </button>
        </div>
      </div>
      */}
    </>
  );
};

export default TopBar;
