import React, { useState } from 'react';
import data from '../data.json'; // Import the JSON data

const RestaurantPage = () => {
  const itemsPerPage = 4; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [minRating, setMinRating] = useState(0); // State for minimum rating

  // Filter restaurants based on search term and minimum rating
  const filteredRestaurants = data.restaurants.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    item.rating >= minRating
  );

  // Calculate total pages based on filtered results
  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);

  // Get the current items to display
  const currentItems = filteredRestaurants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* <h2 className="text-2xl font-bold text-gray-800 mb-6">Restaurants</h2> */}

      {/* Search and Rating Filter */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded px-4 py-2 mr-2"
        />
        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="border rounded px-4 py-2"
        >
          <option value={0}>All Ratings</option>
          <option value={1}>1 Star & Up</option>
          <option value={2}>2 Stars & Up</option>
          <option value={3}>3 Stars & Up</option>
          <option value={4}>4 Stars & Up</option>
          <option value={5}>5 Stars</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="mt-2 text-gray-600">Rating: {item.rating} ⭐</p>
              <p className="mt-1 text-gray-600">{item.address}</p>
              <p className="mt-1 text-gray-600">{item.postal_code}</p>
              <p className="mt-1 text-green-600">{item.cuisine}</p>
              <a 
                href={item.menu_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
              >
                Visit Menu
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
