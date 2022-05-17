import "./ImageView2.css";
import { IoClose } from "react-icons/io5";

export const ImageView2 = ({ img }) => {
  function openModal() {
    document.getElementById("image-viewer").style.display = "block";
  }

  function closeModal() {
    document.getElementById("image-viewer").style.display = "none";
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
    var slides = document.getElementsByClassName("slides");
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
    <div className="card-images">
      {img.map((el, index) => (
        <img
          src={el}
          onClick={() => {
            openModal();
            currentSlide(index + 1);
          }}
          alt=""
          width="200"
          height="300"
        />
      ))}

      <div id="image-viewer" className="modal">
        <div className="modal-content">
          <div className="modal-close" onClick={() => closeModal()}>
            <IoClose />
          </div>
          {img.map((elm, idx) => (
            <div className="slides">
              <div className="numbertext">
                {idx + 1}/ {img.length}
              </div>
              <img src={elm} />
            </div>
          ))}
          <a className="prev-img" onClick={() => plusSlides(-1)}>
            &#10094;
          </a>
          <a className="next-img" onClick={() => plusSlides(1)}>
            &#10095;
          </a>
        </div>
      </div>
    </div>
  );
};
