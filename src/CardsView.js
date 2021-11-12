import './Store.css';
import React from 'react'
import {uid} from 'react-uid'
import ShopCard from './ShopCard'

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

export default CardsView