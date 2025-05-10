import "../src/css/App.css";
import "../src/css/slick.css";
import "../src/css/slick-theme.css";
import "../src/css/carousel.css";
import CastlePage from "./pages/CastlePage";
import VideoboothPage from "./pages/VideoboothPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CGV from "./components/CGV";

function App() {
  async function sendMessageToAgent(message) {
    const response = await fetch(
      "http://localhost:5678/webhook/64fdb240-a670-4c16-b073-ae4b4b07e510/c!nhat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }
    );

    const data = await response.json();
    return data.answer;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation-videobooth" element={<VideoboothPage />} />
          <Route path="/reservation-chateau" element={<CastlePage />} />
          <Route path="/cvg" element={<CGV />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
