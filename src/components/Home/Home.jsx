import React from "react";
import "./Home.styles.scss";

const Home = () => {
  return (
    <>
      <h1>Mi Tienda Online</h1>

      <section className="products">
        <div className="product">
          <img src="../img/hotwheels.jpg" alt="Producto 1" />
          <h2>Producto 1</h2>
          <p>Descripción del producto 1</p>
          <p>Precio: $10.00</p>
          <button>Comprar</button>
        </div>

        <div className="product">
          <img src="../img/hotwheels.jpg" alt="Producto 1" />
          <h2>Producto 1</h2>
          <p>Descripción del producto 1</p>
          <p>Precio: $10.00</p>
          <button>Comprar</button>
        </div>

        <div className="product">
          <img src="../img/hotwheels.jpg" alt="Producto 1" />
          <h2>Producto 1</h2>
          <p>Descripción del producto 1</p>
          <p>Precio: $10.00</p>
          <button>Comprar</button>
        </div>

        <div className="product">
          <img src="../img/hotwheels.jpg" alt="Producto 1" />
          <h2>Producto 1</h2>
          <p>Descripción del producto 1</p>
          <p>Precio: $10.00</p>
          <button>Comprar</button>
        </div>

        <div className="product">
          <img src="../img/hotwheels.jpg" alt="Producto 1" />
          <h2>Producto 1</h2>
          <p>Descripción del producto 1</p>
          <p>Precio: $10.00</p>
          <button>Comprar</button>
        </div>
      </section>
    </>
  );
};

export default Home;
