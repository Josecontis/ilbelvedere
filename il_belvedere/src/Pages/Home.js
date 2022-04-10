import "./Home.css";
import bedImg from "../Assets/Image/336261885crop.jpg";
import bathImg from "../Assets/Image/342667958crop.jpg";

const Home = () => {
  var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (x && myIndex && myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1] && (x[myIndex - 1].style.display = "block");

    setTimeout(carousel, 6000);
  }

  return (
    <>
      <div className="w3-content w3-section">
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
      </div>
    </>
  );
};

export default Home;
