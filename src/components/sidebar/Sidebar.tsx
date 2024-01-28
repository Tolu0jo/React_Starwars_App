import { useEffect, useState } from "react";
import "./sidebar.css"
import { Favorite } from "../characterDetails/CharacterDetails";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFavorite } from "../../features/favorite/favoriteSlice";

const Sidebar=()=> {

   

  // const [favorites, setFavorites] = useState<Favorite[]>([]);

  
  // useEffect(() => {
  //   const storedFavorites = JSON.parse(localStorage.getItem('favorites') as string);
  //   setFavorites(storedFavorites);
  // }, [favorites]);

  const favorites = useSelector(getFavorite);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="sidebar">
       
      <h1>Favorites</h1>
      <hr/>
      <ul className='favorite'>
     {favorites && favorites.map((favorite:Favorite)=><li><Link to={`/character/${favorite.id}`}> {favorite.name}</Link></li>)}
      
    </ul>
    </div>
    
  );
}

export default Sidebar;