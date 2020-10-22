import React from 'react'
import './InfoBar.css'

import closeIcon  from '../../icons/closeIcon.png'
import onlineIcon  from '../../icons/onlineIcon.png'

const InforBar = ({room}) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onLineIcon" src={onlineIcon} alt = "onLine"/>
                <h3>&nbsp;<i className="fas fa-user-circle m-2"></i>&nbsp;</h3>
                <h4>{room}</h4>
            </div> 

            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt = "close"/></a>
            </div>  
        </div>
    )
}

export default InforBar
