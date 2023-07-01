import { useTranslation } from "react-i18next";
import logoHome from "../Assets/logo/logoHomeWhiteSmall.png";
import "./Footer.css";

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.booking.com/hotel/it/il-belvedere-gravina-in-puglia.it.html#tab-reviews"
      >
        <div className="ribbon">
          <span>
            <div className="booking">
              Booking<div>.com</div>
            </div>
            <div className="rate">9.4</div>
          </span>
        </div>
      </a>
      <div className="footer-logo">
        <img alt="logo" src={logoHome} />
      </div>
      <div className="footer-info">{t("footer.title")}</div>
      <div className="footer-sites">
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
        <div style={{ float: "right", marginTop: "10px" }}>
          Cell.: <span>(+39) 327 577 7844</span> <br />
          Email: <span>ilbelvederegravina@outlook.it</span>
        </div>
      </div>
      <div className="footer-copy">{`©${year} ${t("footer.cpyr")}`}</div>
    </div>
  );
};
