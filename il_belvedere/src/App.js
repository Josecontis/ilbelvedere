import { AiOutlineWhatsApp } from "react-icons/ai";
import "./App.css";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <div className="App">
        <header className="App-header"></header>
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
      </div>
    </>
  );
}

export default App;
