import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const SearchFilter = () => {
  const [wordEntered, setWordEntered] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setWordEntered(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the product page with search data
    navigate(`/products?${wordEntered}`, {
      state: { wordEntered, selectedType },
    });
    // console.log(wordEntered);
    // console.log(selectedType);  
  };

  return (
    <form
      className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center"
      onSubmit={handleSubmit}
    >
      {/* Input and Select elements as before */}
      <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
        <label htmlFor="location" className="sr-only">Location</label>
        <input
          type="text"
          id="location"
          placeholder="Enter Keyword or Location"
          value={wordEntered}
          onChange={handleSearch}
          className="w-full px-4 py-3 text-[#0a8051] rounded-lg bg-white border border-green-800 focus:outline-none focus:ring focus:ring-green-500"
        />
      </div>
      <div className="w-full md:w-2/5 md:pl-2">
        <label htmlFor="property-type" className="sr-only">Property Type</label>
        <select
          id="property-type"
          value={selectedType}
          onChange={handleTypeChange}
          className="w-full px-4 py-3 rounded-lg bg-white border border-green-800 text-[#0a8051] focus:outline-none focus:ring focus:ring-green-500"
        >
          <option value="All">All</option>
          <option value="Apartment">Apartment</option>
          <option value="Studio">Studio</option>
          <option value="Condo">Condo</option>
          <option value="House">House</option>
          <option value="Cabin Or Cottage">Cabin or Cottage</option>
          <option value="Loft">Loft</option>
          <option value="Room">Room</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-green-700 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchFilter;
