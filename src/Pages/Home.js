import { useTranslation } from "react-i18next";
import { AiFillEye } from "react-icons/ai";
import { BsDoorClosedFill, BsSafe2Fill } from "react-icons/bs";
import { FaShower, FaWifi } from "react-icons/fa";
import { GiBoatPropeller } from "react-icons/gi";
import { IoBedOutline, IoCompassOutline } from "react-icons/io5";
import {
  MdDryCleaning,
  MdLocalLaundryService,
  MdLuggage,
} from "react-icons/md";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import bathImg from "../Assets/cropped/342667958crop.jpg";
import coffeImg from "../Assets/cropped/352260130crop.jpg";
import bedImg from "../Assets/cropped/DSC08166.jpg";
import gravImg from "../Assets/places/ponte.png";
import { Contacts } from "../Components/Contacts";
import { PlacesImageViewer } from "../Components/PlacesImageViewer";
import { ServicesImageViewer } from "../Components/ServicesImageViewer";
import Splitter from "../Components/Splitter";
import "./Home.css";

const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <GiBoatPropeller />,
      label: t("services.air"),
      description: t("modal.air"),
    },
    {
      icon: <FaShower />,
      label: t("services.bath"),
      description: t("modal.bath"),
    },
    {
      icon: <MdDryCleaning />,
      label: t("services.towel"),
      description: t("modal.towel"),
    },
    {
      icon: <FaWifi />,
      label: t("services.wifi"),
      description: t("modal.wifi"),
    },
    {
      icon: <BsDoorClosedFill />,
      label: t("services.entry"),
      description: t("modal.entry"),
    },
    {
      icon: <AiFillEye />,
      label: t("services.view"),
      description: t("modal.view"),
    },
    {
      icon: <MdLocalLaundryService />,
      label: t("services.clean"),
      description: t("modal.clean"),
    },
    {
      icon: <BsSafe2Fill />,
      label: t("services.safe"),
      description: t("modal.safe"),
    },
    {
      icon: <MdLuggage />,
      label: t("services.bagage"),
      description: t("modal.bagage"),
    },
  ];

  return (
    <>
      <div className="slideshow-container">
        <Fade
          arrows={false}
          infinite={true}
          duration={5000}
          transitionDuration={2000}
          pauseOnHover={false}
        >
          <div className="each-slide">
            <img alt="env" src={bedImg} style={{ width: "100%" }} />
            <div className="welcome-text">{t("imgSlider.welcome")}</div>
            <div className="label">{t("imgSlider.label")}</div>
            <div className="sub-label">{t("imgSlider.subLabel")}</div>
          </div>

          <div className="each-slide">
            <img alt="bed" src={coffeImg} style={{ width: "100%" }} />
            <div className="review-label-coffe">
              {t("imgSlider.reviewCoffe")}
              <br />
              <div className="review-author-coffe">
                (Veronika - Booking.com 10/10)
              </div>
            </div>
          </div>
          <div className="each-slide">
            <img alt="bath" src={bathImg} style={{ width: "100%" }} />
            <div className="review-label-bath">
              {t("imgSlider.reviewBath")}
              <br />
              <div className="review-author-bath">
                (Simona - Booking.com 10/10)
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Splitter
        icon={<IoBedOutline />}
        title={t("splitter.servicesTitle")}
        subtitle={t("splitter.servicesSubTitle")}
        subtitleServices={services}
      />
      <div className="informations">{t("informations.rooms")}</div>
      <ServicesImageViewer />
      <div id="places-slideshow" style={{ paddingTop: "50px" }}>
        <Splitter
          icon={<IoCompassOutline />}
          title={t("splitter.placesTitle")}
          subtitle={t("splitter.placesSubTitle")}
          hasButton={true}
        />
      </div>
      <PlacesImageViewer />
      <div id="location" style={{ paddingTop: "50px" }}>
        <Splitter
          icon={<IoCompassOutline />}
          title={t("splitter.locationTitle")}
          subtitle={t("splitter.locationSubTitle")}
        />
        <div className="informations">{t("informations.place")}</div>
        <img src={gravImg} alt="place" />
        <iframe
          title="googleMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.446977623438!2d16.4111989654082!3d40.818144829320566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13387ba0607a842f%3A0xfbeb000071a1ac0c!2sIl%20Belvedere%20casa%20vacanze%20a%20Gravina%20in%20Puglia%20(Ba)!5e0!3m2!1sen!2sit!4v1652805766745!5m2!1sen!2sit"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          output="embed"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div id="contacts" style={{ paddingTop: "50px" }}>
        <Splitter
          icon={<IoCompassOutline />}
          title={t("splitter.contactsTitle")}
          subtitle={
            <div>
              {t("splitter.contactsSubTitle1")}
              <a href="callto:3275777844">Cell.: (+39) 327 577 7844</a>{" "}
              {t("splitter.contactsSubTitle2")}
              <a href="mailto:ilbelvederegravina@outlook.it">
                ilbelvederegravina@outlook.it
              </a>
            </div>
          }
        />
        <Contacts />
      </div>
    </>
  );
};

export default Home;
