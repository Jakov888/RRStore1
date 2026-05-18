import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [ime, setIme] = useState("");
  const [toast, setToast] = useState("");

  function login(e) {
    e.preventDefault();

    setToast(`Dobrodošao ${ime}!`);

    setTimeout(() => {
      setToast("");
    }, 3000);

    setIme("");
  }

  return (
    <>
      <header className="header">
        <div>
          <h1 className="logo">RR Store</h1>
          <p className="autor">Red | Luxury Fashion</p>
        </div>

        <nav>
          <Link to="/">Početna</Link>
          <Link to="/majice">Majice</Link>
          <Link to="/hlace">Hlače</Link>
          <Link to="/patike">Patike</Link>
          <Link to="/dodaci">Dodaci</Link>
        </nav>
      </header>

      {toast && <div className="header-toast">{toast}</div>}
    </>
  );
}

export default Header;
