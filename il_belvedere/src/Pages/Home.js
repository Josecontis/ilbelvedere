import "./Home.css";
import bedImg from "../Assets/Image/336261885crop.jpg";
import bathImg from "../Assets/Image/342667958crop.jpg";

const Home = () => {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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
    slides[slideIndex - 1] && (slides[slideIndex - 1].style.display = "block");
    dots[slideIndex - 1] && (dots[slideIndex - 1].className += " active");
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }

  return (
    <>
      {/* <div className="w3-content w3-section">
        <div className="mySlides">
          <img
            alt="cc1"
            className="w3-animate-fading"
            src={bedImg}
            style={{ width: "100%" }}
          />
        </div>
        <div className="mySlides">
          <img
            alt="cc"
            className="w3-animate-fading"
            src={bathImg}
            style={{ width: "100%" }}
          />
        </div>
      </div> */}
      <div class="slideshow-container">
        <div class="mySlides fade">
          <img alt="cc" src={bedImg} style={{ width: "100%" }} />
          <div class="text">Benvenuti</div>
        </div>
        <div class="mySlides fade">
          <img alt="cc1" src={bathImg} style={{ width: "100%" }} />
        </div>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </>
  );
};

export default Home;
