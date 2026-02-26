import React from "react";
import "./article.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Computer & Laptop",
    img: "https://images.unsplash.com/photo-1587831990711-23ca6441447b",
  },
  {
    id: 2,
    title: "SmartPhone",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 3,
    title: "Headphones",
    img: "https://images.unsplash.com/photo-1580894908361-967195033215",
  },
  {
    id: 4,
    title: "Accessories",
    img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  },
  {
    id: 5,
    title: "Camera & Photo",
    img: "https://images.unsplash.com/photo-1519183071298-a2962be90b8e",
  },
  {
    id: 6,
    title: "TV & Homes",
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
  },
];

function Article() {
  return (
    <section className="article">
      <div className="container">
        <h2 className="article-title">Shop with Categories</h2>

        <div className="article-wrapper">
          
          <button className="arrow left">
            <FaArrowLeft />
          </button>

          <div className="marquee">
            <div className="marquee-content">
              {categories.concat(categories).map((item, index) => (
                <div className="category-card" key={index}>
                  <img src={item.img} alt={item.title} />
                  <h4>{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <button className="arrow right">
            <FaArrowRight />
          </button>

        </div>
      </div>
    </section>
  );
}

export default Article;