'use client'
import React from 'react';

const CarFilter = ({ uniqueBrands, uniqueModels }) => {
  return (
    <div className="p-4 bg-emerald-200">
      <h3 className="text-lg font-semibold mb-2">Filter Cars</h3>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Price:</label>
        <select className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500">
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Type:</label>
        <select className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500">
        <option value="">Sedan</option>
          <option value="low">SUV</option>
          <option value="medium">Hatchback</option>
          <option value="high">Coupe</option>
          <option value="">Convertible</option>
          {/* {uniqueModels.map(model => (
            <option key={model} value={model}>{model}</option>
          ))} */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Brand:</label>
        <select className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500">
          <option value="">BMW</option>
          <option value="">Honda</option>
          <option value="low">Toyota</option>
          <option value="medium">ford</option>
          <option value="high">Mercedes-Benz</option>
          {/* {uniqueBrands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))} */}
        </select>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Apply Filters
      </button>
    </div>
  );
};

export default CarFilter;
