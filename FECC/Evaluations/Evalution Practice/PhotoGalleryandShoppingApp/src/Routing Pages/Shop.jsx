import React,{useState,useEffect} from "react";
import axios from 'axios';
import { useFavorites } from "../context/FavoritesContext";

const Shop=()=>{
    const [products,setProducts]=useState([]);
   {/*  const [favorites,setFavorites]=useState([]); */ }
    const {favorites,addFav,removeFav}= useFavorites();

    useEffect(()=>{
axios.get('https://fakestoreapi.com/products')
.then(resp=>setProducts(resp.data));
    },[])

    const toggleFavorites=(product)=>{
        setFavorites(prevFavorites=>{
            if(prevFavorites.includes(product)){
                return prevFavorites.filter(fav=> fav!==product);
            }
            return[...prevFavorites,pruduct];
        })
    }
    return(
        <div>
            <h2>Shop</h2>
            <div>
                {products.map(product=>(
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <button onClick={()=>toggleFavorites(product)}>{favorites.includes(product)?'Remove from Favorites' : 'Add to Favorite'}</button>
                    </div> 
                ))}
            </div>
        </div>
    )
}
export {Shop}