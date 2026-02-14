export default function Cart({ cart, decrementFromCart, addToCart, removeFromCart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(({ plant, qty }) => (
            <li key={plant.id} style={{ marginBottom: "0.75rem" }}>
              <span style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}>
                {plant.image}
              </span>

              <strong>{plant.name}</strong>
              <span style={{ marginLeft: "0.5rem" }}>Qty: {qty}</span>

              <div style={{ marginTop: "0.5rem" }}>
                <button onClick={() => decrementFromCart(plant.id)}>-</button>

                <button
                  onClick={() => addToCart(plant)}
                  style={{ marginLeft: "0.5rem" }}
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(plant.id)}
                  style={{ marginLeft: "0.5rem" }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
