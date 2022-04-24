import "./TopBar.css";
import { HiOutlineHome, HiOutlineMail } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlinePhotograph } from "react-icons/hi";
import logoHome from "../Assets/Image/logoHomeWhiteSmall.png";
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
        <HiOutlineLocationMarker />
        <a href="mailto:ilBelvedere@gmail.com">Dove Siamo</a>
      </div>
      <div className="info">
        <HiOutlinePhotograph />
        <a href="callto:3281349208">Itinerari</a>
      </div>
      <div className="info">
        <AiOutlinePhone />
        <a href="callto:3281349208">Cell.: (+39) 328 1349208</a>
      </div>
      <div className="info">
        <HiOutlineMail />
        <a href="mailto:ilBelvedere@gmail.com">ilBelvedere@gmail.com</a>
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
