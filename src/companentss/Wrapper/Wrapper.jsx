import React from 'react';
import { useNavigate } from 'react-router-dom';
import './wrapper.css'
import { ShoppingCart, Heart, Eye } from 'lucide-react';

const productsData = [
  {
    id: 1,
    name: "TOZO T6 True Wireless Earbuds Bluetooth",
    price: 70,
    rating: 5,
    reviews: 739,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=400&q=80",
    badge: "HOT",
    badgeColor: "bg-red-500"
  },
  {
    id: 2,
    name: "Samsung Galaxy S21 5G 128GB",
    price: 2300,
    rating: 5,
    reviews: 536,
    image: "https://images.pexels.com/photos/4042800/pexels-photo-4042800.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: null
  },
  {
    id: 3,
    name: "Amazon Basics High-Speed HDMI Cable",
    price: 360,
    rating: 5,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1580910051072-c46a71b5ab7a?auto=format&fit=crop&w=400&q=80",
    badge: "BEST DEALS",
    badgeColor: "bg-blue-500"
  },
  {
    id: 4,
    name: "Portable Washing Machine 11lbs",
    price: 80,
    rating: 5,
    reviews: 816,
    image: "https://images.unsplash.com/photo-1597600151447-3f9c5d0ef85b?auto=format&fit=crop&w=400&q=80",
    badge: null
  },
  {
    id: 5,
    name: "Wired Over Ear Gaming Headphones",
    price: 1500,
    rating: 5,
    reviews: 647,
    image: "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: null
  },
  {
    id: 6,
    name: "Polaroid 57 Inch Photo/Video Tripod",
    price: 1200,
    oldPrice: 1600,
    rating: 5,
    reviews: 877,
    image: "https://images.pexels.com/photos/276024/pexels-photo-276024.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: "25% OFF",
    badgeColor: "bg-yellow-400"
  },
  {
    id: 7,
    name: "Dell Optiplex 7000x7480 All-in-One",
    price: 250,
    rating: 5,
    reviews: 426,
    image: "https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&w=400",
    badge: null
  },
  {
    id: 8,
    name: "4K UHD LED Smart TV Built-in",
    price: 220,
    rating: 5,
    reviews: 1583,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80",
    badge: "SALE",
    badgeColor: "bg-green-500"
  }
];

function Wrapper({ addToCart, addToLike }) {
  const navigate = useNavigate();

  const handleAdd = (product) => {
    if (addToCart) addToCart(product);
    navigate("/shop");
  };

  const handleLike = (product) => {
    if (addToLike) addToLike(product);  // Like ga qo‘shish
    navigate("/like");                  // Like sahifaga o‘tish
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white flex flex-col md:flex-row gap-6 font-sans">
      
      {/* Chap tomondagi Banner */}
      <div className="w-full md:w-1/4 bg-[#F2C94C] p-8 flex flex-col items-center text-center justify-between rounded-sm relative overflow-hidden">
        <div>
          <p className="text-red-600 text-xs font-bold uppercase tracking-wider">
            Computer & Accessories
          </p>
          <h2 className="text-3xl font-bold mt-2">32% Discount</h2>
          <p className="text-gray-700 mt-2">For all electronics products</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-sm">Offers ends in:</span>
            <span className="bg-white px-2 py-1 text-xs font-bold">
              ENDS OF CHRISTMAS
            </span>
          </div>
          <button className="mt-6 bg-[#FA8232] text-white px-8 py-3 rounded-sm font-bold flex items-center gap-2 hover:bg-orange-600 transition-all mx-auto">
            SHOP NOW <span>→</span>
          </button>
        </div>
        <div
          className="mt-8 w-full h-48 bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url('https://via.placeholder.com/200')" }}
        ></div>
      </div>

      {/* O'ng tomondagi Mahsulotlar */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Featured Products</h3>
          <div className="flex gap-4 text-sm text-gray-500 font-medium items-center">
            <span className="text-black border-b-2 border-orange-500 pb-1 cursor-pointer">
              All Product
            </span>
            <span className="hover:text-black cursor-pointer">Smart Phone</span>
            <span className="hover:text-black cursor-pointer">Laptop</span>
            <span className="hover:text-black cursor-pointer">Headphone</span>
            <span className="hover:text-black cursor-pointer text-orange-500">
              Browse All Product → 
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-100">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="group p-4 border-r border-b border-gray-100 relative hover:shadow-xl transition-shadow cursor-pointer"
            >
              {product.badge && (
                <span
                  className={`absolute top-2 left-2 ${product.badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10`}
                >
                  {product.badge}
                </span>
              )}

              <div className="relative h-40 flex items-center justify-center mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain"
                />

                <div className="absolute inset-0 bg-black/5 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="p-2 bg-white rounded-full hover:bg-orange-500 hover:text-white"
                    onClick={() => handleLike(product)}
                  >
                    <Heart size={18} />
                  </button>
                  <button
                    className="p-2 bg-white rounded-full hover:bg-orange-500 hover:text-white"
                    onClick={() => handleAdd(product)}
                  >
                    <ShoppingCart size={18} />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-orange-500 hover:text-white">
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              <div>
                <div className="flex text-yellow-400 mb-1 text-xs">
                  {"★".repeat(product.rating)}
                  <span className="text-gray-400 ml-1">({product.reviews})</span>
                </div>
                <h4 className="text-sm text-gray-800 line-clamp-2 mb-2 leading-tight h-10">
                  {product.name}
                </h4>
                <div className="flex items-center gap-2">
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ${product.oldPrice}
                    </span>
                  )}
                  <span className="text-blue-500 font-bold">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Wrapper;