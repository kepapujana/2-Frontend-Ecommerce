import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import "./Products.styles.scss";

const Products = () => {
  const { getProducts, products, addCart, cart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="container products">
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <div className="product">
              <img src="../img/hotwheels.jpg" alt="Producto 1" />
              <h2>{product.name}</h2>
              <p className="smallfont">Descripción del producto...</p>
              <p>Precio: ${product.price.toFixed(2)}</p>
              <button onClick={() => addCart(product)}>Agregar al Carrito</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
