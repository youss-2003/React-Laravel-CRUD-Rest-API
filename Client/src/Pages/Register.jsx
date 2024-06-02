import React, { useEffect, useState } from 'react';
import { axiosClient } from '../API/axios';
import { toast, Toaster } from 'react-hot-toast';

function Register() {
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

  const handleDelete = async (productId) => {
    try {
      await axiosClient.delete(`/produit/${productId}`);
      setProducts(products.filter(product => product.id !== productId));
      toast.success('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Failed to delete the product.');
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <Toaster />
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold text-indigo-600 sm:text-3xl">Manage Products</h1>
        <p className="mt-4 text-gray-500">
          Here you can see all products and delete them if necessary.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
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
            <button
              onClick={() => handleDelete(product.id)}
              className="block w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white mt-4"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Register;
