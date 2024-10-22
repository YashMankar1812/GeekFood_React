import React, { useState } from 'react';
import data from '../data.json'; // Import the JSON data

const RestaurantPage = () => {
  const itemsPerPage = 12; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [minRating, setMinRating] = useState(0); // State for minimum rating
  const [selectedRestaurant, setSelectedRestaurant] = useState(null); // State for selected restaurant
  const [order, setOrder] = useState([]); // State to store the user's order

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

  // Handle showing the restaurant menu
  const handleShowMenu = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  // Handle closing the menu
  const handleCloseMenu = () => {
    setSelectedRestaurant(null);
  };

  // Handle adding items to the order
  const handleAddToOrder = (menuItem) => {
    setOrder([...order, menuItem]);
  };

  return (
    <div className="min-h-screen bg-gray-300 p-8">
      {/* Search and Rating Filter */}
      <div className="mb-6 flex justify-between">
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
    <div
      key={index}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="p-6">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="mt-2 text-gray-600 font-semibold ">Rating: {item.rating} ⭐</p>
        <p className="mt-1 text-gray-500">{item.address}</p>
        <p className="mt-1 text-gray-500">{item.postal_code}</p>
        <p className="mt-1 text-green-600">{item.cuisine}</p>
        <button
          onClick={() => handleShowMenu(item)}
          className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
        >
          Visit Menu
        </button>
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

      {/* Menu Modal */}
      {selectedRestaurant && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">{selectedRestaurant.name}'s Menu</h2>
            <ul className="space-y-2">
              {selectedRestaurant.menu.map((menuItem, index) => (
                <li key={index} className="flex justify-between items-center text-gray-700">
                  <span>{menuItem.name} - ${menuItem.price}</span>
                  <button
                    onClick={() => handleAddToOrder(menuItem)}
                    className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-400"
                  >
                    Add to Order
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={handleCloseMenu}
              className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
            >
              Close Menu
            </button>
          </div>
        </div>
      )}

      {/* Display Order */}
      {order.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Your Order</h3>
          <ul>
            {order.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">
            Total: ${order.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;
