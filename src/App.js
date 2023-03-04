import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { Footer } from "./Components/Footer";
import TopBar from "./Components/TopBar";
import Home from "./Pages/Home";
import "./translations/i18next";

const App = () => {
  const { t } = useTranslation();
  // When the user scrolls down 20px from the top of the document, show the button
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  window.addEventListener("scroll", handleScroll);

  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    setWhatsappUrl(
      `https://web.whatsapp.com/send?phone=3275777844&text=${encodeURIComponent(
        t("whatsapp.message")
      )}`
    );
  }, [t]);
  return (
    <>
      <TopBar />
      <div className="App">
        <div className="App-content">
          <Home />
        </div>
        <a
          className="whatsapp-button"
          data-action="open"
          rel="noopener noreferrer"
          href={whatsappUrl}
          target="_blank"
        >
          <AiOutlineWhatsApp />
        </a>
        {showButton && (
          <button
            className="button-to-top"
            onClick={scrollToTop}
            id="myBtn"
            title="Go to top"
          >
            <IoIosArrowUp />
          </button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
