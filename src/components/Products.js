import ProductList from "./ProductList"; // Import the ProductList component
import { useState, useEffect } from "react"; // Import hooks from React
import { motion } from "framer-motion"; // Import motion for animations
import { useParams } from "react-router-dom"; // Import useParams for routing

const Products = () => {
  const { searchTerm } = useParams(); // Get search term from URL params
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [properties, setProperties] = useState([]); // State for properties data
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [pageSize] = useState(10); // Define the number of properties per page
console.log(searchTerm);
  // Fetch properties from the API
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://localhost:7007/api/Rental?apikey=12345&${searchTerm}`); // API endpoint to fetch properties
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // Handle HTTP errors
        }
        const data = await response.json(); // Parse the response to JSON
        setProperties(data); // Update state with fetched properties
      } catch (err) {
        console.error("Fetch error:", err); // Log any errors
      } finally {
        setLoading(false); // Set loading state to false after fetching
      }
    };

    fetchProperties(); // Call the fetch function
  }, [searchTerm, currentPage]); // Fetch properties when searchTerm or currentPage changes

  // Handle previous page click
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Decrement current page
    }
  };

  // Handle next page click
  const handleNextClick = () => {
    // Assuming properties.length gives total properties and pageSize is the number of items per page
    if (properties.length === pageSize) {
      setCurrentPage(currentPage + 1); // Increment current page
    }
  };

  // Loading state
  if (loading) {
    return (
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth }}
        className="mx-auto h-screen flex items-center justify-center">
        <div className="flex flex-col">
          <img className="h-64 w-auto" src="https://cdn.dribbble.com/users/2035064/screenshots/4599692/____.gif" alt="loading" />
          <button disabled type="button" className="py-2.5 px-5 mr-2 text-2xl font-medium text-gray-900">
            Loading...
          </button>
        </div>
      </motion.div>
    );
  }

  // Render properties
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      className="container mx-auto mt-12 pb-24">
      
      <h1 className="text-2xl font-bold py-8">Properties</h1>
      <div className="grid grid-cols-2 my-5 gap-8 sm:grid-cols-2 md:grid-cols-4 gap-10 transition duration-300 ease-in-out">
        {properties.map((property) => (
          <ProductList key={property._id} property={property} /> // Pass each property to ProductList
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700">
          Showing page <span className="font-semibold text-gray-900">{currentPage}</span> of <span className="font-semibold text-gray-900">{Math.ceil(properties.length / pageSize)}</span> Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          {currentPage > 1 && (
            <button onClick={handlePreviousClick} className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900">
              Prev
            </button>
          )}
          {properties.length === pageSize && (
            <button onClick={handleNextClick} className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-r hover:bg-gray-900">
              Next
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
