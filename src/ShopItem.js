import './Store.css';
import React from 'react'

function ShopItem ({item}) {
  return(
    <div className="shop-item" style={{backgroundImage: "url("+item.img+")"}}>
      <h1 style={{marginLeft:"100px"}}>{item.name}</h1>
      <h3>{item.color}</h3>
      <div className="list-price">${item.price}</div>
      <button className="cart-button">ADD TO CART</button>
    </div>
  )
}

export default ShopItem