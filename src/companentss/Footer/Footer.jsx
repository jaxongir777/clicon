import React from 'react';
import './Footer.css'; // Pastdagi CSS ni shu faylga solasiz

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand Section */}
          <div className="footer-col">
            <div className="logo-wrapper">
              <div className="logo-circle"></div>
              <h2 className="logo-text">CLICON</h2>
            </div>
            <div className="contact-info">
              <span className="label">Customer Supports:</span>
              <a href="tel:6295550129" className="phone">(629) 555-0129</a>
              <p className="address">
                4517 Washington Ave.<br />
                Manchester, Kentucky 39495
              </p>
              <a href="mailto:info@kinbo.com" className="email">info@kinbo.com</a>
            </div>
          </div>

          {/* Top Category */}
          <div className="footer-col">
            <h4 className="col-title">TOP CATEGORY</h4>
            <ul className="footer-links">
              <li><a href="#">Computer & Laptop</a></li>
              <li><a href="#">SmartPhone</a></li>
              <li><a href="#">Headphone</a></li>
              <li className="active-link"><a href="#">Accessories</a></li>
              <li><a href="#">Camera & Photo</a></li>
              <li><a href="#">TV & Homes</a></li>
              <li className="browse-all">
                <a href="#">Browse All Product <span>→</span></a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="col-title">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><a href="#">Shop Product</a></li>
              <li><a href="#">Shopping Cart</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Compare</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Customer Help</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          {/* Download App */}
          <div className="footer-col">
            <h4 className="col-title">DOWNLOAD APP</h4>
            <div className="app-btns">
              <button className="app-btn">
                <i className="fab fa-google-play"></i>
                <div className="btn-text">
                  <span>Get it now</span>
                  <strong>Google Play</strong>
                </div>
              </button>
              <button className="app-btn">
                <i className="fab fa-apple"></i>
                <div className="btn-text">
                  <span>Get it now</span>
                  <strong>App Store</strong>
                </div>
              </button>
            </div>
          </div>

          {/* Popular Tag */}
          <div className="footer-col">
            <h4 className="col-title">POPULAR TAG</h4>
            <div className="tags-container">
              {["Game", "iPhone", "TV", "Asus Laptops", "Macbook", "SSD", "Graphics Card", "Power Bank", "Smart TV", "Speaker", "Tablet", "Microwave", "Samsung"].map((tag) => (
                <span key={tag} className={tag === "Graphics Card" ? "tag-item active-tag" : "tag-item"}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
      </div>
    </footer>
  );
};

export default Footer;