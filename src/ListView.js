import './Store.css';
import React from 'react';
import {uid} from 'react-uid';
import ShopItem from './ShopItem'
import PropTypes from 'prop-types'

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

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired)
}

export default ListView;
