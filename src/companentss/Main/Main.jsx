import React from "react";
import { useNavigate } from "react-router-dom"; 
import { FaHeart } from "react-icons/fa";
import "./main.css";

const products = [
    { id: 1, title: "Apple iPhone 14 Pro", price: "$999", img: "https://images.pexels.com/photos/5082587/pexels-photo-5082587.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 2, title: "Samsung Galaxy S23", price: "$899", img: "https://images.pexels.com/photos/5082575/pexels-photo-5082575.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 3, title: "Xiaomi 13 Pro", price: "$799", img: "https://images.pexels.com/photos/5082580/pexels-photo-5082580.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 4, title: "MacBook Air M2", price: "$1199", img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400" },
    { id: 5, title: "Apple Watch Series 9", price: "$399", img: "https://images.pexels.com/photos/276751/pexels-photo-276751.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 6, title: "Samsung Galaxy Tab S9", price: "$699", img: "https://images.pexels.com/photos/5082594/pexels-photo-5082594.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 7, title: "Sony WH-1000XM5 Headphones", price: "$349", img: "https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 8, title: "Dell XPS 13 Laptop", price: "$1099", img: "https://images.pexels.com/photos/18105/pexels-photo-18105.jpeg?auto=compress&cs=tinysrgb&w=400" }
];

function Main({ addToCart, addToLike }) {
    const navigate = useNavigate();

    const handleAdd = (item) => {
        addToCart(item);  
        navigate("/shop"); 
    };

    const handleLike = (item) => {
        if (addToLike) addToLike(item);
        navigate("/like");  
    };

    return (
        <section className="main">
            <div className="container">
                <h2 className="section-title">Featured Products</h2>
                <div className="products-grid">
                    {products.map((item) => (
                        <div key={item.id} className="product-card">
                            <div className="product-img">
                                <img src={item.img} alt={item.title} />
                                <button
                                    className="like-btn"
                                    onClick={() => handleLike(item)}
                                >
                                    <FaHeart />
                                </button>
                            </div>
                            <h3 className="product-title">{item.title}</h3>
                            <p className="product-price">{item.price}</p>
                            <button className="add-btn" onClick={() => handleAdd(item)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Main;