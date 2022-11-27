import "./Footer.css";
import logoHome from "../Assets/logo/logoHomeWhiteSmall.png";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-logo">
        <img alt="logo" src={logoHome} />
      </div>
      <div className="footer-info">{t("footer.title")}</div>
      <div className="footer-sites">
        <div className="booking-badge">
          <span>Booking.com</span>
          <div className="booking-rate">9.3</div>
        </div>
        <div style={{ float: "left" }}>
          <iframe
            title="faceboog-badge"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPatriziaLorussoBeb&tabs=eventi&width=250&height=60&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="250"
            height="60"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div style={{ float: "right", textAlign: "left" }}>
          Cell.: <span>(+39) 327 577 7844</span> <br />
          Email: <span>ilbelvederegravina@outlook.it</span>
        </div>
      </div>
      <div className="footer-copy">{`©${year} ${t("footer.cpyr")}`}</div>
    </div>
  );
};
