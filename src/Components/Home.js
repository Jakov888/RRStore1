import { useState } from "react";
import ProductCard from "./ProductCard";

function Home({ proizvodi }) {
  const [ime, setIme] = useState("");
  const [toast, setToast] = useState("");

  function prijava(e) {
    e.preventDefault();

    setToast(`Dobrodošao, ${ime}!`);

    setTimeout(() => {
      setToast("");
    }, 3000);

    setIme("");
  }

  return (
    <div className="page">
      <section className="hero">
        <h1>Luxury Streetwear Collection</h1>

        <p>Moderna premium odjeća inspirirana luksuznim streetwear stilom.</p>

        <form onSubmit={prijava} className="form">
          <input
            type="text"
            placeholder="Unesi svoje ime"
            value={ime}
            onChange={(e) => setIme(e.target.value)}
            required
          />

          <button>Prijavi se</button>
        </form>

        {toast && <div className="toast">{toast}</div>}
      </section>

      <section className="products">
        {proizvodi.map((item, index) => (
          <ProductCard key={index} proizvod={item} />
        ))}
      </section>
    </div>
  );
}

export default Home;
