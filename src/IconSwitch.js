import './Store.css';
import React from 'react'

function IconSwitch({icon, onSwitch}){
  return(
    <button className="switch" onClick={onSwitch}>
      <span className="material-icons" style={{fontSize: 50 +'px', color: '#808080'}}>
        {icon}
      </span>
    </button>
  )
}

export default IconSwitch