import './Store.css';
import React from 'react';
import {uid} from 'react-uid';
import ShopItem from './ShopItem'

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

export default ListView;