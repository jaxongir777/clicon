import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './companentss/Header/Header';
import Hero from './companentss/Hero/Hero';
import Section from './companentss/Section/Section';
import Article from './companentss/Article/Article';
import Main from './companentss/Main/Main';
import Wrapper from './companentss/Wrapper/Wrapper';
import Latest from './companentss/Latest/Latest';
import Footer from './companentss/Footer/Footer';
import Shop from './companentss/Header/shop/shop';
import Like from './companentss/Header/Like/Like';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find(item => item.id === product.id);
      if (exist) return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const addToLike = (product) => {
    setLikedItems((prev) => {
      const exist = prev.find(item => item.id === product.id);
      if (!exist) return [...prev, product];
      return prev;
    });
  };

  const updateQty = (id, type) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, qty: type === "inc" ? item.qty + 1 : item.qty - 1 }
          : item
      ).filter(item => item.qty > 0)
    );
  };

  const resetCart = () => setCartItems([]);
  const resetLike = () => setLikedItems([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Section addToCart={addToCart} addToLike={addToLike} />
              <Article />
              <Main addToCart={addToCart} addToLike={addToLike} />
              <Wrapper addToCart={addToCart} addToLike={addToLike} />
              <Latest />
              <Footer />
            </>
          } 
        />

        <Route 
          path="/shop" 
          element={
            <Shop cartItems={cartItems} updateQty={updateQty} resetCart={resetCart} />
          } 
        />

        <Route 
          path="/like" 
          element={<Like likedItems={likedItems} resetLike={resetLike} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;