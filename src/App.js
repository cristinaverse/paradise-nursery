import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft, Leaf } from 'lucide-react';

// Sample plant data
const plantsData = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 25.99,
    category: 'Low Light',
    image: 'https://images.unsplash.com/photo-1631377819268-d716cd610cd2?w=300&h=300&fit=crop',
    description: 'Perfect for beginners, thrives in low light'
  },
  {
    id: 2,
    name: 'Monstera Deliciosa',
    price: 39.99,
    category: 'Tropical',
    image: 'https://images.unsplash.com/photo-1545239705-1564e58b9e4c?w=300&h=300&fit=crop',
    description: 'Beautiful split leaves, instagram favorite'
  },
  {
    id: 3,
    name: 'Pothos',
    price: 18.99,
    category: 'Low Light',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop',
    description: 'Trailing vine, very easy to care for'
  },
  {
    id: 4,
    name: 'Fiddle Leaf Fig',
    price: 65.99,
    category: 'Statement',
    image: 'https://images.unsplash.com/photo-1509423350716-97f2360af0e4?w=300&h=300&fit=crop',
    description: 'Large dramatic leaves, perfect statement piece'
  },
  {
    id: 5,
    name: 'Peace Lily',
    price: 28.99,
    category: 'Flowering',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop',
    description: 'Beautiful white flowers, air purifying'
  },
  {
    id: 6,
    name: 'Rubber Plant',
    price: 34.99,
    category: 'Statement',
    image: 'https://images.unsplash.com/photo-1559251606-c623743a6d76?w=300&h=300&fit=crop',
    description: 'Glossy leaves, grows into impressive tree'
  },
  {
    id: 7,
    name: 'Bird of Paradise',
    price: 75.99,
    category: 'Tropical',
    image: 'https://images.unsplash.com/photo-1581595220975-119360b1324c?w=300&h=300&fit=crop',
    description: 'Stunning tropical plant with large leaves'
  },
  {
    id: 8,
    name: 'Anthurium',
    price: 42.99,
    category: 'Flowering',
    image: 'https://images.unsplash.com/photo-1524876904649-be0b5dbc327e?w=300&h=300&fit=crop',
    description: 'Heart-shaped red flowers, exotic beauty'
  }
];

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [cart, setCart] = useState([]);

  // Calculate total items in cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calculate total cost
  const getTotalCost = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Add item to cart
  const addToCart = (plant) => {
    const existingItem = cart.find(item => item.id === plant.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === plant.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  // Update item quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item =>
        item.id === id
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Check if plant is in cart
  const isInCart = (plantId) => {
    return cart.some(item => item.id === plantId);
  };

  // Header component
  const Header = () => (
    <header className="bg-green-800 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Paradise Nursery</h1>
        </div>
        <nav className="flex items-center space-x-6">
          {currentPage !== 'products' && (
            <button
              onClick={() => setCurrentPage('products')}
              className="hover:text-green-200 transition-colors"
            >
              Shop Plants
            </button>
          )}
          {currentPage !== 'cart' && (
            <button
              onClick={() => setCurrentPage('cart')}
              className="flex items-center space-x-2 hover:text-green-200 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">
                {getTotalItems()}
              </span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );

  // Landing page component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div 
        className="min-h-screen bg-cover bg-center bg-blend-overlay bg-green-900 bg-opacity-60"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=800&fit=crop")'
        }}
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center text-white max-w-4xl px-6">
            <div className="flex justify-center mb-6">
              <Leaf className="h-20 w-20 text-green-300" />
            </div>
            <h1 className="text-6xl font-bold mb-6 text-shadow-lg">
              Paradise Nursery
            </h1>
            <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              Welcome to Paradise Nursery, where we bring nature's beauty into your home. 
              We specialize in premium houseplants that transform your living space into a 
              green paradise. Our carefully curated collection features plants perfect for 
              every skill level and lighting condition. From stunning statement pieces to 
              easy-care companions, we have the perfect plant waiting for you.
            </p>
            <button
              onClick={() => setCurrentPage('products')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Product listing page component
  const ProductListingPage = () => {
    const categories = [...new Set(plantsData.map(plant => plant.category))];
    
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Premium Plant Collection
          </h2>
          
          {categories.map(category => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold text-green-800 mb-6 border-b-2 border-green-200 pb-2">
                {category} Plants
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plantsData.filter(plant => plant.category === category).map(plant => (
                  <div key={plant.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img 
                      src={plant.image} 
                      alt={plant.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        {plant.name}
                      </h4>
                      <p className="text-gray-600 mb-4 text-sm">
                        {plant.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-green-600">
                          ${plant.price}
                        </span>
                        <button
                          onClick={() => addToCart(plant)}
                          disabled={isInCart(plant.id)}
                          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                            isInCart(plant.id)
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : 'bg-green-600 hover:bg-green-700 text-white'
                          }`}
                        >
                          {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Shopping cart page component
  const ShoppingCartPage = () => (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center mb-8">
          <button
            onClick={() => setCurrentPage('products')}
            className="flex items-center text-green-600 hover:text-green-700 mr-4"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            Continue Shopping
          </button>
          <h2 className="text-3xl font-bold text-gray-800">Shopping Cart</h2>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
            <button
              onClick={() => setCurrentPage('products')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Shop Plants
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total Items: {getTotalItems()}</span>
                <span className="text-green-600">Total Cost: ${getTotalCost().toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-gray-600">Unit Price: ${item.price}</p>
                      <p className="text-green-600 font-semibold">
                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 bg-gray-100 rounded-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg ml-4"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => setCurrentPage('products')}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => alert('Coming Soon! Checkout functionality will be available soon.')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  // Main render
  return (
    <div className="min-h-screen">
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'products' && <ProductListingPage />}
      {currentPage === 'cart' && <ShoppingCartPage />}
    </div>
  );
};

export default App;
