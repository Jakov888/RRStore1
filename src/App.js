import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Majice from "./Components/Majica";
import Hlace from "./Components/Hlace";
import Dodaci from "./Components/Dodaci";
import Patike from "./Components/Patike";

function App() {
  const proizvodi = [
    {
      naziv: "Luxury Black Tee",
      cijena: "49€",
      slika: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      naziv: "Premium Pants",
      cijena: "79€",
      slika: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a",
    },
    {
      naziv: "Street Hoodie",
      cijena: "89€",
      slika: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    },
  ];

  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home proizvodi={proizvodi} />} />
          <Route path="/majice" element={<Majice />} />
          <Route path="/hlace" element={<Hlace />} />
          <Route path="/patike" element={<Patike />} />
          <Route path="/dodaci" element={<Dodaci />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
