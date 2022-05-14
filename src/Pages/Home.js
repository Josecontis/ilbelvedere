import "./Home.css";
import coffeImg from "../Assets/cropped/352260130crop.jpg";
import bedImg from "../Assets/cropped/336261885crop.jpg";
import img18 from "../Assets/multiview/277590579_109031505100742_5854193538793875700_n.jpg";
import img17 from "../Assets/multiview/277581948_109031998434026_2889768993433374264_n.jpg";
import img16 from "../Assets/multiview/277589816_109031765100716_1818497939950045169_n.jpg";
import img15 from "../Assets/multiview/352259719.jpg";
import img14 from "../Assets/multiview/277810455_109032015100691_4577438248796085368_n.jpg";
import img13 from "../Assets/multiview/333730240.jpg";
import img12 from "../Assets/multiview/277585418_109031981767361_5713350924353364172_n.jpg";
import img11 from "../Assets/multiview/277566551_109031935100699_155358525707831072_n.jpg";
import img10 from "../Assets/multiview/277671058_109031791767380_7074109831175754723_n.jpg";
import img9 from "../Assets/multiview/277581948_109032288433997_4982052542321704997_n.jpg";
import img8 from "../Assets/multiview/277579413_109032205100672_6309431047501740192_n.jpg";
import img7 from "../Assets/multiview/277570340_109031698434056_6490037133906561689_n.jpg";
import img6 from "../Assets/multiview/342668405.jpg";
import img5 from "../Assets/multiview/277536006_109031748434051_8791200465492750750_n.jpg";
import img4 from "../Assets/multiview/352259883.jpg";
import img2 from "../Assets/multiview/277526957_109031591767400_1756184234998720918_n.jpg";
import img3 from "../Assets/multiview/352259783.jpg";
import img1 from "../Assets/multiview/336253142.jpg";

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

  const homeImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
  ];
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
            Non abbiamo mai soggiornato in un ambiente così pulito e curato nei
            dettagli! tutto impeccabile dalla A alla Z. accoglienza e
            disponibilità assuluta ci ritorneremo sicuramente
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
