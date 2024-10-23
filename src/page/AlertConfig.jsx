// src/components/UserAlertConfigForm.jsx
import React, { useState } from 'react';
import { createUserAlertSerivce } from '../service/alert';

const AlertConfig = () => {
  const [formData, setFormData] = useState({
    user_email: '',
    temp_threshold: 30,
    city: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await createUserAlertSerivce(formData)
      alert('create alert',result)

    } catch (error) {
      setMessage('Failed to save alert configuration.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold text-center mb-6">User Alert Configuration</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">User Email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            value={formData.user_email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="temp_threshold" className="block text-sm font-medium text-gray-700">Temperature Threshold</label>
          <input
            type="number"
            name="temp_threshold"
            id="temp_threshold"
            value={formData.temp_threshold}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter temperature threshold"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="city"
            id="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your city"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-500 transition duration-200"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  );
};

export default AlertConfig;
