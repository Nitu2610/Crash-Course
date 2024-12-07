import React,{createContext,useState,useContext, Children} from "react";

const FavoritesContext=createContext();

export function useFavorites(){
    return useContext(FavoritesContext);
}

export const FavoritesProvider=({Children})=>{
    const [fav,setFav]=useState([]);

    const addFav=(product)=>{
        setFav(prevFav=> [...prevFav,product]);
    }
    const removeFav=(product)=>{
        setFav(prevFav=> prevFav.filter(item=>item!==product))
    };

    return (
        <FavoritesContext.Provider value={{favorites,addFav,removeFav}}>{Children} </FavoritesContext.Provider>
    )
}