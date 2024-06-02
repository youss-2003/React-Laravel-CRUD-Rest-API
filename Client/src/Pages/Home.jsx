import React, { useEffect, useState } from 'react';
import { axiosClient } from '../API/axios';
import { toast, Toaster } from 'react-hot-toast';

function Home() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [libelle, setLibelle] = useState('');
  const [prix, setPrix] = useState('');
  const [description, setDescription] = useState('');

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

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axiosClient.put(`/produit/${editingProduct.id}`, { libelle, prix, description });
      setProducts(products.map(product => 
        product.id === editingProduct.id ? { ...product, libelle, prix, description } : product
      ));
      setEditingProduct(null);
      setLibelle('');
      setPrix('');
      setDescription('');
      toast.success('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Failed to update the product.');
    }
  };

  const openEditForm = (product) => {
    setEditingProduct(product);
    setLibelle(product.libelle);
    setPrix(product.prix);
    setDescription(product.description);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <Toaster />
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold text-indigo-600 sm:text-3xl">Manage Products</h1>
        <p className="mt-4 text-gray-500">
          Here you can see all products and update them if necessary.
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
              onClick={() => openEditForm(product)}
              className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white mt-4"
            >
              Update
            </button>
          </div>
        ))}
      </div>
      {editingProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-medium mb-4">Edit Product</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label htmlFor="libelle" className="sr-only">Libelle</label>
                <input
                  id="libelle"
                  name="libelle"
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                  placeholder="Enter libelle"
                  value={libelle}
                  onChange={(e) => setLibelle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="description" className="sr-only">Enter prix</label>
                <input
                type='number'
                  id="description"
                  name="description"
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                  placeholder="Enter prix"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="prix" className="sr-only">Enter description</label>
                <textarea
                  id="prix"
                  name="prix"
                  className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                  placeholder="Enter description"
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-green-600 px-5 py-3 text-sm font-medium text-white"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditingProduct(null)}
                className="w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white mt-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;