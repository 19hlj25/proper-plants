import { useState } from "react";
import plantList from "./data";
import PlantCard from "./components/PlantCard";
import Cart from "./components/Cart";

export default function App() {
  const [plants] = useState(plantList);
  const [selectedPlant, setSelectedPlant] = useState(null);

  // cart items look like: { plant, qty }
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((prev) => {
      const existing = prev.find((item) => item.plant.id === plant.id);

      if (existing) {
        return prev.map((item) =>
          item.plant.id === plant.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { plant, qty: 1 }];
    });
  }

  function decrementFromCart(plantId) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.plant.id === plantId ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  }

  function removeFromCart(plantId) {
    setCart((prev) => prev.filter((item) => item.plant.id !== plantId));
  }

  function PlantList() {
  return (
    <section className="plants">
      <h2>Plants</h2>

      <div className="plant-grid">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

           

  return (
    <>
      <header>
        <h1>Plant Shop</h1>
      </header>

      <main>
        <PlantList />

        <section className="details">
          {selectedPlant ? (
            <PlantCard plant={selectedPlant} addToCart={addToCart} />
          ) : (
            <p>Select a plant to see details</p>
          )}
        </section>

        <Cart
          cart={cart}
          addToCart={addToCart}
          decrementFromCart={decrementFromCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}

