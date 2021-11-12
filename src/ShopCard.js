import './Store.css';
import React from 'react';

function ShopCard ({card}) {
  return(
    <div className="shop-card" style={{backgroundImage: "url("+card.img+")"}}>
      <h1>{card.name}</h1>
      <h3>{card.color}</h3>
      <div className="price">
        ${card.price}
        <button className="cart-button" style={{marginLeft: '80px'}}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ShopCard;