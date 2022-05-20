import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";

import "./App.css";
import { Footer } from "./Components/Footer";
import TopBar from "./Components/TopBar";
import Home from "./Pages/Home";
import "./translations/i18next";

const App = () => {
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <>
      <TopBar />
      <div className="App">
        <div className="App-content">
          <Home />
        </div>
        <a
          className="watsapp-button"
          data-action="open"
          data-phone="222"
          rel="noreferrer"
          data-message="Salve! La contatto per maggiori informazioni"
          href="https://web.whatsapp.com/send?phone=222&amp;text=Salve! La contatto per maggiori informazioni"
          target="_blank"
        >
          <AiOutlineWhatsApp />
        </a>
        <button
          className="button-to-top"
          onClick={topFunction}
          id="myBtn"
          title="Go to top"
        >
          <IoIosArrowUp />
        </button>
      </div>
      <Footer />
    </>
  );
};

export default App;
