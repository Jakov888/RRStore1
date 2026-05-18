function ProductCard({ proizvod }) {
  return (
    <div className="card">
      <img src={proizvod.slika} alt={proizvod.naziv} />

      <h2>{proizvod.naziv}</h2>

      <p>{proizvod.cijena}</p>

      <button>Kupi sada</button>
    </div>
  );
}

export default ProductCard;
