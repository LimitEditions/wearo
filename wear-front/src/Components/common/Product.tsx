import React, { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch.tsx';
import { IProduct } from '../../types/interfaces/IProduct.ts'


const Product = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { data, loading, error } = useFetch('/api/products', {});

  useEffect(() => {
    if (data) {
      setProducts(data);
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
