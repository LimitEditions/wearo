import React, { useState, useEffect } from 'react';
import { IProduct } from '../../types/interfaces/IProduct';
import useApi from '../../hooks/useApi';


const Product = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [data, loading, error]  = useApi('productsList', []);

  useEffect(() => {
    if (data) {
      // setProducts(data);
    }
  }, [data]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
