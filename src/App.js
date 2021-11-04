import './App.css';
import {productsData} from './productData';
import React, { useState } from 'react'
import {uid} from 'react-uid'

function IconSwitch({icon, onSwitch}){
  return(
    <button className="switch" onClick={onSwitch}>
      <span className="material-icons" style={{fontSize: 50 +'px', color: '#808080'}}>
        {icon}
      </span>
    </button>
  )
}

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

function ListView({items}){
  return(
    <div className="list-view">
      {items.map((item) => {
        return(
          <ShopItem item = {item} key={uid(item)}/>
        )
      })}
    </div>
  )
}

function Store(){
  const products = productsData;
  const [icon, setIcon] = useState("view_list");

  const onSwitch = () => {
    setIcon((icon==="view_list") ? "view_module" : "view_list");
  };

  return(
    <div>
      <div>
        <IconSwitch icon={icon} onSwitch={onSwitch}/>
      </div>
      <div>
        {icon === 'view_module' && <ListView items = {products}/>}
        {icon === 'view_list' && <CardsView cards = {products}/>}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Store/>
    </div>
  );
}

export default App;
