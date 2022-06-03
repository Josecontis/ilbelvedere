import "./Home.css";
import coffeImg from "../Assets/cropped/352260130crop.jpg";
import bedImg from "../Assets/cropped/336261885crop.jpg";
import gravImg from "../Assets/places/grav.png";
import bathImg from "../Assets/cropped/342667958crop.jpg";
import Splitter from "../Components/Splitter";
import { IoBedOutline, IoCompassOutline } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { GiBoatPropeller } from "react-icons/gi";
import { BsDoorClosedFill, BsSafe2Fill } from "react-icons/bs";
import {
  MdDryCleaning,
  MdLocalLaundryService,
  MdLuggage,
} from "react-icons/md";
import { FaWifi, FaShower } from "react-icons/fa";
import { useEffect } from "react";
import { ServicesImageViewer } from "../Components/ServicesImageViewer";
import { useTranslation } from "react-i18next";
import { Contacts } from "../Components/Contacts";
import { PlacesImageViewer } from "../Components/PlacesImageViewer";

const Home = () => {
  let slideIndex = 0;

  useEffect(() => {
    showSlides();
  });
  const { t } = useTranslation();

  function showSlides() {
    let i = 0;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length) {
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex && slideIndex > slides.length) {
        slideIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1] &&
        (slides[slideIndex - 1].style.display = "block");
      dots[slideIndex - 1] && (dots[slideIndex - 1].className += " active");
    }
    setTimeout(showSlides, 7000);
  }

  const services = [
    {
      icon: <GiBoatPropeller />,
      label: t("services.air"),
      description:
        "Ogni camera dispone di impianti d’aria condizionata di ultima generazione per garantire soggiorni freschi e piacevoli.",
    },
    {
      icon: <FaShower />,
      label: t("services.bath"),
      description:
        "Ogni camera dispone di impianti d’aria condizionata di ultima generazione per garantire soggiorni freschi e piacevoli.",
    },
    {
      icon: <MdDryCleaning />,
      label: t("services.towel"),
      description: "Enjoy fresh linens and towels. Change daily upon request.",
    },
    {
      icon: <FaWifi />,
      label: t("services.wifi"),
      description:
        "Ospitalità, connessione e condivisione. Per questa ragione l’intera struttura è dotata di Wi-Fi libero per tutti gli ospiti.",
    },
    {
      icon: <RiComputerFill />,
      label: t("services.tv"),
      description:
        "Per un'esperienza di ospitalità davvero superiore, ogni camera è dotata di televisore digitale per offrire intrattenimento, svago e informazione.",
    },
    {
      icon: <BsDoorClosedFill />,
      label: t("services.entry"),
      description:
        "Ogni camera dispone di impianti d’aria condizionata di ultima generazione per garantire soggiorni freschi e piacevoli.",
    },
    {
      icon: <AiFillEye />,
      label: t("services.view"),
      description:
        "Ogni camera dispone di impianti d’aria condizionata di ultima generazione per garantire soggiorni freschi e piacevoli.",
    },
    {
      icon: <MdLocalLaundryService />,
      label: t("services.clean"),
      description:
        "Ogni camera dispone di impianti d’aria condizionata di ultima generazione per garantire soggiorni freschi e piacevoli.",
    },
    {
      icon: <BsSafe2Fill />,
      label: t("services.safe"),
      description:
        "Ogni camera dispone di impianti d’aria condizionata di ultima generazione per garantire soggiorni freschi e piacevoli.",
    },
    {
      icon: <MdLuggage />,
      label: t("services.bagage"),
      description:
        "Ogni camera dispone di impianti d’aria condizionata di ultima generazione per garantire soggiorni freschi e piacevoli.",
    },
  ];

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img alt="env" src={bedImg} style={{ width: "100%" }} />
          <div className="welcome-text">{t("imgSlider.welcome")}</div>
          <div className="label">{t("imgSlider.label")}</div>
          <div className="sub-label">{t("imgSlider.subLabel")}</div>
        </div>
        <div className="mySlides fade">
          <img alt="bed" src={coffeImg} style={{ width: "100%" }} />
          <div className="review-label-coffe">
            {t("imgSlider.reviewCoffe")}
            <br />
            <div className="review-author-coffe">
              (Veronika - Booking.com 10/10)
            </div>
          </div>
        </div>
        <div className="mySlides fade">
          <img alt="bath" src={bathImg} style={{ width: "100%" }} />
          <div className="review-label-bath">
            {t("imgSlider.reviewBath")}
            <br />
            <div className="review-author-bath">
              (Simona - Booking.com 10/10)
            </div>
          </div>
        </div>
        <div className="dot-container">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <Splitter
        icon={<IoBedOutline />}
        title={t("splitter.servicesTitle")}
        subtitle={t("splitter.servicesSubTitle")}
        subtitleServices={services}
      />
      <ServicesImageViewer />
      <div id="places-slideshow" style={{ paddingTop: "40px" }}>
        <Splitter
          icon={<IoCompassOutline />}
          title={t("splitter.placesTitle")}
          subtitle={t("splitter.placesSubTitle")}
          hasButton={true}
        />
      </div>
      <PlacesImageViewer />
      <div id="location" style={{ paddingTop: "40px" }}>
        <Splitter
          icon={<IoCompassOutline />}
          title={t("splitter.locationTitle")}
          subtitle={t("splitter.locationSubTitle")}
        />
        <img
          src={gravImg}
          alt="place"
          width="1400"
          height="400"
          style={{ marginBottom: "20px" }}
        />
        <iframe
          title="googleMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.446977623438!2d16.4111989654082!3d40.818144829320566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13387ba0607a842f%3A0xfbeb000071a1ac0c!2sIl%20Belvedere%20casa%20vacanze%20a%20Gravina%20in%20Puglia%20(Ba)!5e0!3m2!1sen!2sit!4v1652805766745!5m2!1sen!2sit"
          width="1400"
          height="400"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          output="embed"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div id="contacts" style={{ paddingTop: "40px" }}>
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
