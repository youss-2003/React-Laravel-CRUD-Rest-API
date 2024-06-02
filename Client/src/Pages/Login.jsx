import React, { useState } from 'react';
import { axiosClient } from '../API/axios';
import { toast, Toaster } from 'react-hot-toast';

function Login() {
    const [libelle, setLibelle] = useState('');
    const [prix, setPrix] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axiosClient.post('/produit', { libelle, prix, description });
            console.log(response.data);
            setLibelle('');
            setPrix('');
            setDescription('');
            toast.success('Product submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Failed to submit the product.');
        }
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <Toaster />
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>
                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
                    inventore quaerat mollitia?
                </p>
                <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <p className="text-center text-lg font-medium">Submit your product</p>
                    <div>
                        <label htmlFor="libelle" className="sr-only">Libelle</label>
                        <div className="relative">
                            <input
                                required
                                id="libelle"
                                name="libelle"
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter libelle"
                                value={libelle}
                                onChange={(e) => setLibelle(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="prix" className="sr-only">Description</label>
                        <div className="relative">
                            <textarea
                                required
                                id="prix"
                                name="prix"
                                type='text'
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter description"
                                value={prix}
                                onChange={(e) => setPrix(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="description" className="sr-only">Prix</label>
                        <div className="relative">
                            <input
                                required
                                type='number'
                                id="description"
                                name="description"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter prix"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
