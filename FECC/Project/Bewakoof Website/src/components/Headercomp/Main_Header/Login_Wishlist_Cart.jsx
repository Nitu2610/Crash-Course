import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Login } from "./Login";

const Login_Wishlist_Cart=()=>{
    return(
        <>
        <Login/>
        <FontAwesomeIcon icon={faHeart} size='2xl' style={{margin:'10px'}} />
        <FontAwesomeIcon icon={faBagShopping} size='2xl' style={{margin:'10px'}} />
        </>
    )

}

export {Login_Wishlist_Cart}