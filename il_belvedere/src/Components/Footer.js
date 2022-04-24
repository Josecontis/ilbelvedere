import "./Footer.css";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlinePhotograph } from "react-icons/hi";
import logoHome from "../Assets/Image/logoHomeWhiteSmall.png";
import { AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
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
      <div className="info">
        <AiOutlinePhone />
        <a
          target="_blank"
          href="https://www.google.com/maps/@40.818847,16.4134954,3a,75y,342.87h,81.7t/data=!3m8!1e1!3m6!1sAF1QipPoF0DnhDuqz71-771kufrtAsxpFtGBIW0c80z5!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPoF0DnhDuqz71-771kufrtAsxpFtGBIW0c80z5%3Dw203-h100-k-no-pi0-ya281.5996-ro-0-fo100!7i2508!8i1254"
        >
          punto panoramico vicino
        </a>
      </div>
      {/* <div className="info">
        <AiOutlinePhone />
        <a href="callto:3281349208">Cell.: (+39) 328 1349208</a>
      </div>
      <div className="info">
        <HiOutlineMail />
        <a href="mailto:ilBelvedere@gmail.com">ilBelvedere@gmail.com</a>
      </div> */}
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

export default Footer;
