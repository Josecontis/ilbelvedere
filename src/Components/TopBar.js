import "./TopBar.css";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlinePhotograph } from "react-icons/hi";
import logoHome from "../Assets/logo/logoHomeWhiteSmall.png";
import { AiOutlinePhone } from "react-icons/ai";

const TopBar = () => {
  return (
    <div className="top-bar">
      <img alt="logo" src={logoHome} />
      <div className="info">
        <HiOutlineHome />
        <a href="/">Home</a>
      </div>
      <div className="info">
        <HiOutlinePhotograph />
        <a href="#places-slideshow">Itinerari</a>
      </div>
      <div className="info">
        <HiOutlineLocationMarker />
        <a href="#location">Dove Siamo</a>
      </div>
      <div className="info">
        <AiOutlinePhone />
        <a href="#contacts">Contattaci</a>
      </div>
      <button>
        <a
          rel="noreferrer"
          href="https://www.booking.com/hotel/it/il-belvedere-gravina-in-puglia.it.html"
          target="_blank"
        >
          PRENOTA
        </a>
      </button>
    </div>
  );
};

export default TopBar;
