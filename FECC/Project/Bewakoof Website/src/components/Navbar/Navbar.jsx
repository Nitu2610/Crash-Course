import React from "react";
import '../../styles/navbar.css'

const Navbar=()=>{
    const Titels=["DEALS HUB",'MEN','WOMEN','WINTERWEAR','ACCESSORIES','SNEAKERS', "BEWAKOOF AIR", 'HEAVY DUTY', 'CUSTOMIZATION',  'OFFICIAL MERCH', 'PLUS SIZE']
    return(
        <>
        <ul>
        {Titels.map((item,index)=>{
            return <li key={index}>{item}</li>
        })}
        </ul>
        </>
    )
}

export{Navbar}