import { useEffect, useState } from "react";
import "./sidebar.css"
import { Favorite } from "../characterDetails/CharacterDetails";
import { Link } from "react-router-dom";

const Sidebar=()=> {

   

  const [favorites, setFavorites] = useState<Favorite[]>([]);

  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') as string);
    setFavorites(storedFavorites);
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