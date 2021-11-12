import './Store.css';
import {productsData} from './productData';
import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView'
import CardsView from './CardsView'

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

export default Store;