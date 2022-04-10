import { AiOutlineWhatsApp } from "react-icons/ai";
import "./App.css";
import TopBar from "./Components/TopBar";

function App() {
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
        <div className="App-content"></div>
        <a
          class="watsapp-button"
          data-action="open"
          data-phone="222"
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
          Top
        </button>
      </div>
    </>
  );
}

export default App;
