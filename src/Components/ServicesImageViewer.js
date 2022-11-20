import img23 from "../Assets/multiview/277590579_109031505100742_5854193538793875700_n.jpg";
import img22 from "../Assets/multiview/277581948_109031998434026_2889768993433374264_n.jpg";
import img21 from "../Assets/multiview/277589816_109031765100716_1818497939950045169_n.jpg";
import img20 from "../Assets/multiview/352259719.jpg";
import img19 from "../Assets/multiview/277810455_109032015100691_4577438248796085368_n.jpg";
import img18 from "../Assets/multiview/333730240.jpg";
import img17 from "../Assets/multiview/277585418_109031981767361_5713350924353364172_n.jpg";
import img16 from "../Assets/multiview/277566551_109031935100699_155358525707831072_n.jpg";
import img15 from "../Assets/multiview/277566551_109031935100699_155358525707832272_n.jpg";
import img14 from "../Assets/multiview/277566551_109031935100699_155358525707831272_n.jpg";
import img13 from "../Assets/multiview/277581948_109032288433997_4982052542321704997_n.jpg";
import img12 from "../Assets/multiview/277579413_109032205100672_6309431047501740192_n.jpg";
import img11 from "../Assets/multiview/277570340_109031698434056_6490037133906561689_n.jpg";
import img10 from "../Assets/multiview/342668405.jpg";
import img9 from "../Assets/multiview/277536006_109031748434051_8791200465492750750_n.jpg";
import img8 from "../Assets/multiview/352259883.jpg";
import img7 from "../Assets/multiview/333730194.jpg";
import img6 from "../Assets/multiview/352259785.jpg";
import img4 from "../Assets/multiview/277526957_109031591767400_1756184234998720918_n.jpg";
import img3 from "../Assets/multiview/336253141.jpg";
import img2 from "../Assets/multiview/336253144.jpg";
import img1 from "../Assets/multiview/336253143.jpg";
import "./ServicesImageViewer.css";
import { IoClose } from "react-icons/io5";

export const ServicesImageViewer = () => {
  const homeImages = [
    img1,
    img2,
    img3,
    img4,
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
    img19,
    img20,
    img21,
    img22,
    img23,
  ];

  function openModal() {
    document.getElementById("image-viewer-services").style.display = "block";
  }

  function closeModal() {
    document.getElementById("image-viewer-services").style.display = "none";
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
    var slides = document.getElementsByClassName("slides-services");
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
    <div className="card-images-services">
      {homeImages.map((el, index) => (
        <img
          src={el}
          onClick={() => {
            openModal();
            currentSlide(index + 1);
          }}
          alt=""
        />
      ))}
      <div id="image-viewer-services" className="modal-services">
        <div className="modal-content-services">
          <div className="modal-close-services" onClick={() => closeModal()}>
            <IoClose />
          </div>
          {homeImages.map((elm, idx) => (
            <div key={idx} className="slides-services">
              <div className="numbertext-services">
                {idx + 1}/ {homeImages.length}
              </div>
              <img src={elm} alt="" />
            </div>
          ))}
          <button className="prev-img-services" onClick={() => plusSlides(-1)}>
            &#10094;
          </button>
          <button className="next-img-services" onClick={() => plusSlides(1)}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};
