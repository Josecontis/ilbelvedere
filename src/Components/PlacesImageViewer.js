import { IoClose } from "react-icons/io5";
import imgPlaces10 from "../Assets/places/335223262.jpg";
import imgPlaces4 from "../Assets/places/351791653.jpg";
import imgPlaces7 from "../Assets/places/352014813.jpg";
import imgPlaces8 from "../Assets/places/352014814.jpg";
import imgPlaces9 from "../Assets/places/352014815.jpg";
import imgPlaces12 from "../Assets/places/352272261.jpg";
import imgPlaces3 from "../Assets/places/352277259.jpg";
import imgPlaces5 from "../Assets/places/352277260.jpg";
import imgPlaces6 from "../Assets/places/352277261.jpg";
import imgPlaces1 from "../Assets/places/352277262.jpg";
import imgPlaces2 from "../Assets/places/352277267.jpg";
import imgPlaces11 from "../Assets/places/353277262.jpg";
import "./PlacesImageViewer.css";

export const PlacesImageViewer = () => {
  const placeImages = [
    {
      image: imgPlaces1,
      description: "La Cattedrale di Gravina di Puglia",
    },
    {
      image: imgPlaces2,
      description: "Biblioteca finya",
    },
    {
      image: imgPlaces3,
      description: "Ponte Acquedotto",
    },
    {
      image: imgPlaces4,
      description: "Ponte Acquedotto",
    },
    {
      image: imgPlaces5,
      description: "Chiesa Madonna della Stella",
    },
    {
      image: imgPlaces6,
      description: "Chiesa Madonna della Stella",
    },
    {
      image: imgPlaces7,
      description: "Torre dell'orologio con monumento ai caduti",
    },
    {
      image: imgPlaces8,
      description: "San Vito vecchio",
    },
    {
      image: imgPlaces9,
      description: "San Michele delle Grotte",
    },
    {
      image: imgPlaces10,
      description: "Cola Cola",
    },
    {
      image: imgPlaces11,
      description: "Museo Fondazione Santomasi",
    },
    {
      image: imgPlaces12,
      description: "Castello Svevo di Federico II",
    },
  ];

  function openModal() {
    document.getElementById("image-viewer-places").style.display = "block";
  }

  function closeModal() {
    document.getElementById("image-viewer-places").style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides-places");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = "block";
  }

  return (
    <div className="card-images-places">
      {placeImages.map((el, index) => (
        <div
          className="card-images-container"
          onClick={() => {
            openModal();
            currentSlide(index + 1);
          }}
        >
          <img src={el.image} alt="" width="350" height="250" />
          <div className="overlay">{el.description}</div>
        </div>
      ))}

      <div id="image-viewer-places" className="modal-places">
        <div className="modal-content-places">
          <div className="modal-close-places" onClick={() => closeModal()}>
            <IoClose />
          </div>
          {placeImages.map((elem, indx) => (
            <div key={indx} className="slides-places">
              <div className="numbertext-places">
                {indx + 1}/ {placeImages.length}
              </div>
              <img src={elem.image} alt="" />
            </div>
          ))}
          <button className="prev-img-places" onClick={() => plusSlides(-1)}>
            &#10094;
          </button>
          <button className="next-img-places" onClick={() => plusSlides(1)}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};
