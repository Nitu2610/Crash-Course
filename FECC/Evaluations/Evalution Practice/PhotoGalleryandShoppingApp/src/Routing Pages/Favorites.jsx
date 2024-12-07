import { useFavorites } from "../context/FavoritesContext";

function Favorites(){
    const {favorites,removeFavorites}=useFavorites();

    return (
        <div>
            <h2>Favorites</h2>
            {favorites.length===0?(<p> No Favorites yet!</p>):
             (<div> 
                {favorites.map((favorite,index)=>(
                    <div key={index}>
                        <h3> {favorite.title || favorite.author}</h3>
                            {favorites.imageUrl?(<img src={favorite.download_Url} alt={favorite.title} width='150' />):
                        (
                            <img src={favorite.download_url} alt={favorite.author} width='150' />
                        )}
                        <button onClick={()=>removeFavorites(favorite)}> Remove from Favorite </button>
                    </div>
                ))}
            </div>
            )}
            </div>
    )
}

export default Favorites;