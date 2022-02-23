import './Store.css';
import React from 'react'
import {uid} from 'react-uid'
import ShopCard from './ShopCard'
import PropTypes from 'prop-types'

function CardsView({cards}){
  return(
    <div className="cards-view">
      {cards.map((card) => {
        return(
          <ShopCard card = {card}  key={uid(card)}/>
        )
      })}
    </div>
  )
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired)
}

export default CardsView
