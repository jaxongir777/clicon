import React from 'react';
import './Like.css';

function Like({ likedItems, resetLike }) {
  if (likedItems.length === 0) {
    return (
      <section className="like">
        <div className="container">
          <h2>Liked Products</h2>
          <p>You have not liked any products yet!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="like">
      <div className="container">
        <h2>Liked Products</h2>
        <div className="liked-grid">
          {likedItems.map((item) => (
            <div key={item.id} className="liked-card">
              {item.badge && (
                <span className={`badge ${item.badgeColor || ''}`}>{item.badge}</span>
              )}
              <div className="card-img">
                <img src={item.img || item.image} alt={item.title || item.name} />
              </div>
              <div className="card-body">
                <h3>{item.title || item.name}</h3>
                {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
                <span className="price">${item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="reset-btn" onClick={resetLike}>Reset Likes</button>
      </div>
    </section>
    
  );
}

export default Like;