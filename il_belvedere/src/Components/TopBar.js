import "./TopBar.css";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

import logoHome from "../Assets/Image/logoHomeWhiteSmall.png";

function TopBar() {
  return (
    <div className="top-bar">
      <img src={logoHome} />
      <div className="info">
        <HiOutlineMail />
        <a href="mailto:ilBelvedere@gmail.com">ilBelvedere@gmail.com</a>
      </div>
      <div className="info">
        <HiOutlineLocationMarker />
        <a href="mailto:ilBelvedere@gmail.com">Dove Siamo</a>
      </div>
      <div className="info">
        <FiPhoneCall />
        <a href="callto:3281349208">Cell.: (+39) 328 1349208</a>
      </div>
      <div className="info">
        <HiOutlinePhotograph />
        <a href="callto:3281349208">Itinerari</a>
      </div>
      <button>PRENOTA</button>
    </div>
  );
}

export default TopBar;
