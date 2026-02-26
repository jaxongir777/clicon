import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import "./section.css";

const products = [
  {
    id: 1,
    title: "Xbox Series S - 512GB SSD",
    price: 442.12,
    oldPrice: 865.99,
    img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    discount: "32% OFF",
    hot: true,
  },
  {
    id: 2,
    title: "Wireless Earbuds Bluetooth",
    price: 2300,
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80",
    sold: true,
  },
  {
    id: 3,
    title: "4G LTE Smartphone",
    price: 220,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "4K UHD Smart TV",
    price: 150,
    oldPrice: 865,
    discount: "19% OFF",
    img: "https://picsum.photos/id/1050/800/600",
  },
  {
    id: 5,
    title: "DSLR Camera",
    price: 1200,
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "All-in-One Monitor",
    price: 299,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Portable Drone",
    price: 70,
    oldPrice: 865,
    img: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Bluetooth Speaker",
    price: 250,
    oldPrice: 360,
    discount: "32% OFF",
    img: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=800&q=80",
  },
];

function Section({ addToCart, addToLike }) {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    if (addToCart) addToCart(item); // Savatchaga qo‘shish
    navigate("/shop");              // Shop sahifaga o‘tish
  };

  const handleLike = (item) => {
    if (addToLike) addToLike(item); // Like ga qo‘shish
    navigate("/like");              // Like sahifaga o‘tish
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-container">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-img">
                <img
                  src={`https://picsum.photos/200/200?random=${item.id}`}
                  alt={item.title}
                />
                <div className="hover-icons">
                  <button className="icon-btn" onClick={() => handleLike(item)}>
                    <FaHeart />
                  </button>
                  <button className="icon-btn" onClick={() => handleAddToCart(item)}>
                    <FaShoppingCart />
                  </button>
                  <button className="icon-btn">
                    <FaEye />
                  </button>
                </div>
              </div>

              <div className="card-body">
                <h3>{item.title}</h3>
                <span className="price">${item.price}</span>
                <button
                  className="add-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  <FaShoppingCart /> ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section;