import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';

const Products = () => {
  const { getProducts, products } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <span>{product.name} </span>
            <span>${product.price.toFixed(2)}</span>
          </div>
        ))}
    </>
  );
};

export default Products;
