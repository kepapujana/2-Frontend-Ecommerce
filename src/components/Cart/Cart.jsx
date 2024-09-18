import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { useEffect } from "react";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="cart" key={i}>
        <span>{cartItem.name}</span>
        <span>{cartItem.price.toFixed(2)} €</span>
      </div>
    );
  });
  return (
    <>
      {cartItem}
      <button onClick={() => clearCart()}>Clear cart</button>
    </>
  );
};
export default Cart;
