
import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../components/Products'
import 'reactjs-popup/dist/index.css';
import { motion } from "framer-motion";
import {useEffect, useState } from 'react'
import SeachFilter from '../components/SeachFilter';
import Footer from '../components/Footer';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);  // Adjust page size according to property API response
  const API_KEY = 'propertygWC91AJPrXEHpZci9LFoZ1pJ6eAbAFgJ0hoaqm6bMU748pcL3jvDBQbWD8CugZFxaO3wDMTRCWQmyNKA0hTfSwLwP7iROuK7CPA0n0TGY3VuRBINPjRL4ZAN';

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': "application/json",
    }
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    fetch(`https://localhost:7007/api/Rental?apikey=12345`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Only read the response here
      })
      .then(data => {
        setProperties(data.properties);
        setLoading(false); // Set loading state to false
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false); // Ensure loading is false on error
      });
  }, [currentPage, pageSize]);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNextClick = () => {
    if (properties?.next?.page) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width : "100%"}}
        exit={{ x : window.innerWidth }}
        className='hero py-16'>
        <div className='w-full px-6 mx-auto text-[#0a8051] flex items-center justify-between'>
          <div className='w-1/2 mx-auto text-center sm:text-left'>
            <h6 className='text-lg'><em>Are you Looking Rental Property?</em></h6>
            <h1 className='text-3xl md:text-6xl font-bold'>Find The Perfect Property!</h1>
            <h6 className='text-lg mt-4'><em>Discover the perfect property that suits your needs.</em></h6>
          
          </div>
          <div className='w-1/2 hidden sm:block'>
            <img className='w-4/5 rounded-lg' src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cc44ed72969113.5bfae0c6087d8.gif' alt=''></img>
          </div>
        </div>
        <SeachFilter data={properties} />
      </motion.div>
      <div className='pd-24'>
        {/* {loading && <p>Loading properties...</p>}
        {!loading && properties.length === 0 && <p>No properties found.</p>}
        {!loading  && properties.length > 0 && (
          <> */}
            <Products properties={properties} />
            {/* Pagination Component */}
            <div className="pagination">
              <button onClick={() => handlePreviousClick(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
              <span>Page {currentPage}</span>
              <button onClick={() => handleNextClick(currentPage + 1)}>Next</button>
            </div>
          {/* </>
        )} */}
      </div>
      <div className='-mt-20'>
      
     </div>
      <Footer />
    </>
  )
}

export default Home
