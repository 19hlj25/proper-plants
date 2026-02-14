export default function PlantCard({ plant, addToCart }) {
  return (
    <section className="plant-card">
      <h3 style={{ fontSize: "2rem" }}>{plant.image}</h3>
      <h4>{plant.name}</h4>
      <button onClick={() => addToCart(plant)}>Add To Cart</button>
    </section>
  );
}
