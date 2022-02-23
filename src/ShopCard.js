import './Store.css';
import React from 'react';
import PropTypes from 'prop-types'

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

ShopCard.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}).isRequired
}

export default ShopCard;
