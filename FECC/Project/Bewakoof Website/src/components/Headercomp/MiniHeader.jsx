import React from "react";
import '../../styles/MiniHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond,faMobile } from '@fortawesome/free-solid-svg-icons';


const MiniHeader=()=>{
    return (
        <div id="MiniheaderOuterBox">
            <div className="MiniheaderInnerBox">
            <div id="Leftoptions" >
            <ul>
                    <li>Offer</li>
                    <li>FanBook</li>
                    <li>  <FontAwesomeIcon icon={faMobile} style={{color: "#141414",}} /> Download App</li>
                    <li>Find a store near me</li>
                </ul>
            </div>
            <div id="Rightoptions" style={{paddingRight:"50px"}}>
                <ul>
                    <li>Contact Us</li>
                    <li>Track Order</li>
                </ul>

            </div>
            </div>
        </div>
    )
}

export {MiniHeader}