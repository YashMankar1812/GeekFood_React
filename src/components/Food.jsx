import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FoodPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const foodItems = [
    { id: 1, name: 'Pizza', category: 'Italian', image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg', price: '$12', rating: 4.5, description: 'Delicious cheesy pizza with fresh toppings.' },
    { id: 2, name: 'Burger', category: 'American', image: 'https://www.foodandwine.com/thmb/jldKZBYIoXJWXodRE9ut87K8Mag=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg', price: '$8', rating: 4.2, description: 'Juicy burger with crispy fries and a soft bun.' },
    { id: 3, name: 'Pasta', category: 'Italian', image: 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2021/10/roasted-tomato-sauce-portion-800x1200.jpg', price: '$10', rating: 4.7, description: 'Authentic Italian pasta with rich tomato sauce.' },
    { id: 4, name: 'Sushi', category: 'Japanese', image: 'https://www.southernliving.com/thmb/mHeBJgNyRLx11Ia-ws042Vw7t7I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sushi-roll-chopsticks-gettyimages-691112817-2000-af3b017bbbb041f9b382e8f285dd9828.jpg', price: '$15', rating: 4.8, description: 'Fresh sushi rolls with the finest ingredients.' },
    {id: 5, name: 'Salad', category: 'American', image: 'https://www.familyfoodonthetable.com/wp-content/uploads/2023/03/Marinated-veggie-salad-1200-4.jpg',price: '$6', rating: 4.3, description: 'Healthy and delicious salad with fresh lettuce, tomatoes, and cucumber.' },
    { id: 6, name: 'Tacos', category: 'Mexican', image: 'https://feelgoodfoodie.net/wp-content/uploads/2017/04/Ground-Beef-Tacos-9.jpg', price: '$10', rating: 4.7, description: 'Mexican tacos with beef, cheese, and lettuce.' },
    { id: 7 , name: 'Sandwich', category: 'American', image: 'https://www.watermelon.org/wp-content/uploads/2023/02/Sandwich_2023.jpg', price: '$8', rating: 4.5, description: 'Tasty sandwich with ham, bread, and cheese.' },
    { id: 8 , name: 'VadaPav', category: 'Indian', image: 'https://ministryofcurry.com/wp-content/uploads/2024/06/vada-pav-9.jpg', price: '$25', rating: 4.9, description: 'Vada pav is a vegetarian fast food dish from India ' },
    {id: 9 , name: 'Rice and Vegetables', category: 'American', image: 'https://www.joyousapron.com/wp-content/uploads/2019/01/Easy-Mixed-Vegetable-Rice-Pic-2.jpg', price: '$10', rating: 4.5, description: 'Healthy rice and vegetables with a side of steamed broccoli.' },
    { id: 10 , name: 'Lasagna', category: 'Italian', image: 'https://www.southernliving.com/thmb/aF5ditmc5n-HNd-uUKh7dZyjezc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Extra_Easy_Lasagna_006_4x3-41b0a478514c43e9baed0659bd362625.jpg', price: '$20', rating: 4.8, description: 'Authentic Italian lasagna with fresh tomatoes, mozzarella, and bas  il.' },
    { id: 11, name: 'Pork Chops', category: 'American', image: 'https://evuecezehrh.exactdn.com/wp-content/uploads/2023/05/Best-Damn-Oven-Baked-Boneless-Pork-Chops-2-1152x1536.jpg?strip=all&lossy=1&ssl=1', price: '$20', rating: 4.7, description: 'Tender pork chops with fresh onions, garlic, and bell pep '},
    { id: 12, name: 'Samosa', category: 'Indian', image: 'https://paattiskitchen.com/wp-content/uploads/2023/03/kmc_20230226_234026-1536x864.jpg', price: '$18', rating: 4.9, description: 'A fried South Asian and West Asian snack. '},

  ];

  const categories = ['All', 'Indian','Italian', 'American', 'Japanese'];

  // Filter items based on the selected category
  const filteredItems = selectedCategory === 'All'
    ? foodItems
    : foodItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black p-8">

      {/* Categories Filter */}
      <div className="flex justify-center mt-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 mx-2 rounded-full text-white ${
              selectedCategory === category ? 'bg-green-600' : 'bg-green-400'
            } hover:bg-green-500 transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Food Items */}
      <main className="max-w-6xl mx-auto p-8">
        <h2 className="text-2xl font-bold text-gray-200 mb-6">{selectedCategory} Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img className="w-full h-48 object-cover" src={item.image} alt={item.name} />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-gray-600">{item.price}</p>
                <p className="text-sm mt-2 text-gray-500">{item.description}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 mr-2">★ {item.rating}</span>
                  <span className="text-gray-600 text-sm">({Math.floor(Math.random() * 100)} reviews)</span>
                </div>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>


    </div>
  );
};

export default FoodPage;
