import "./Home.css";
import envImg from "../Assets/Image/333730246crop.jpg";
import bedImg from "../Assets/Image/336261885crop.jpg";
import bathImg from "../Assets/Image/342667958crop.jpg";

const Home = () => {
  let slideIndex = 0;
  showSlides();

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
    setTimeout(showSlides, 7000); // Change image every 2 seconds
  }

  return (
    <>
      <div class="slideshow-container">
        <div class="mySlides fade">
          <img alt="env" src={bedImg} style={{ width: "100%" }} />
          <div class="welcome-text">Benvenuti</div>
          <div class="label">
            Trascorri i tuoi momenti di relax al centro di gravina in puglia
          </div>
          <div class="sub-label">
            Le nostre stanze sono arredate con gusto ed eleganza
          </div>
        </div>
        <div class="mySlides fade">
          <img alt="bed" src={envImg} style={{ width: "100%" }} />
        </div>
        <div class="mySlides fade">
          <img alt="bath" src={bathImg} style={{ width: "100%" }} />
        </div>

        <div className="dot-container">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
    </>
  );
};

export default Home;
