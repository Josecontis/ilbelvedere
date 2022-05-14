import "./Home.css";
import coffeImg from "../Assets/Image/352260130crop.jpg";
import bedImg from "../Assets/Image/336261885crop.jpg";
import img from "../Assets/Image/352259719.jpg";
import bathImg from "../Assets/Image/342667958crop.jpg";
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
import ImageViewer from "../Components/ImageViewer";
import { useEffect } from "react";

const Home = () => {
  let slideIndex = 0;

  useEffect(() => {
    showSlides();
  });

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
      label: "Aria condizionata",
    },
    {
      icon: <FaShower />,
      label: "Bagno con doccia e asciugacapelli",
    },
    {
      icon: <MdDryCleaning />,
      label: "Biancheria da letto e da bagno",
    },
    {
      icon: <FaWifi />,
      label: "Free WI-FI",
    },
    {
      icon: <RiComputerFill />,
      label: "Tv LCD",
    },
    {
      icon: <BsDoorClosedFill />,
      label: "Ingresso indipendente",
    },
    {
      icon: <AiFillEye />,
      label: "Vista panormaica",
    },
    {
      icon: <MdLocalLaundryService />,
      label: "Pulizie giornaliere",
    },
    {
      icon: <BsSafe2Fill />,
      label: "Cassaforte",
    },
    {
      icon: <MdLuggage />,
      label: "Deposito bagagli",
    },
  ];

  const homeImages = [bedImg, img];
  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img alt="env" src={bedImg} style={{ width: "100%" }} />
          <div className="welcome-text">Benvenuti</div>
          <div className="label">
            Trascorri i tuoi momenti di relax al centro di gravina in puglia
          </div>
          <div className="sub-label">
            L'appartamento è arredato con gusto ed eleganza
          </div>
        </div>
        <div className="mySlides fade">
          <img alt="bed" src={coffeImg} style={{ width: "100%" }} />
          <div className="review-label-coffe">
            Tutto perfetto. La posizione nelle immediate vicinanze del ponte e a
            pochi passi dal centro un sogno. Era pulito, la padrona di casa è
            stata molto disponibile.
            <br />
            <div className="review-author-coffe">
              (Veronika - Booking.com 10/10)
            </div>
          </div>
        </div>
        <div className="mySlides fade">
          <img alt="bath" src={bathImg} style={{ width: "100%" }} />
          <div className="review-label-bath">
            Eccezionale.
            <br />
            <div className="review-author-bath">
              (Sansone - Booking.com 10/10)
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
        title="servizi"
        subtitle="Tutte le nostre camere sono arredate con gusto, eleganza e dotate di:"
        subtitleServices={services}
      />
      <ImageViewer img={homeImages} />
      <div id="places-slideshow">
        <Splitter
          icon={<IoCompassOutline />}
          title="Posti da visitare"
          subtitle="Cosa vedere a Gravina in puglia"
        />
      </div>
      <div id="location">
        <Splitter
          icon={<IoCompassOutline />}
          title="Dove siamo"
          subtitle="Via Giudice Montea 3, 70024 Gravina in Puglia, Italia"
        />
      </div>
      <div id="contacts">
        <Splitter
          icon={<IoCompassOutline />}
          title="Contattaci"
          subtitle="Compila il form qui sotto. In alternativa, contattaci al +393358237988 o scrivi a ilBelvedere@gmail.com"
        />
      </div>
    </>
  );
};

export default Home;
