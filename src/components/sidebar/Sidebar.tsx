import { useEffect, useState } from "react";
import "./sidebar.css"
import { Favorite } from "../characterDetails/CharacterDetails";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFavorite } from "../../features/favorite/favoriteSlice";

const Sidebar=()=> {

   

  const favorites = useSelector(getFavorite);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="sidebar">
       
      <h1>Favorites</h1>
      <hr/>
      <ul className='favorite'>
     {favorites && favorites.map((favorite:Favorite)=><Link className= "link" to={`/character/${favorite.id}`}> <li>{favorite.name}</li></Link>)}
      
    </ul>
    </div>
    
  );
}

export default Sidebar;