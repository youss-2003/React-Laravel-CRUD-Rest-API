import React, { useEffect, useState } from 'react';
import { axiosClient } from '../API/axios';

function Users() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosClient.get('/produits');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
          {products.map(product => (
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900" key={product.id}>
              <img
                src="https://source.unsplash.com/random/300x300/?1"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
                  {product.description} MAD
                </span>
                <h2 className="text-xl font-semibold tracking-wide">{product.libelle}</h2>
              </div>
              <p className="dark:text-gray-800">{product.prix}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default Users;
