import { useEffect, useState } from "react";
import "./characterDetails.css";
import { useParams } from "react-router-dom";
import {
  getSelectedCharacter,
  removeSelectedCharacter,
} from "../../features/character/characterSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCharacter } from "../../api/apiCall";
import { AppDispatch, RootState } from "../../features/store";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { addFavorite, getFavorite, removeFavorite } from "../../features/favorite/favoriteSlice";

export interface Favorite {
  id: string;
  name: string;
}

const CharacterDetails = () => {
  const { id } = useParams();
  const data = useSelector(getSelectedCharacter);
  const dispatch = useDispatch<AppDispatch>();

  const favorites = useSelector(getFavorite);
  const isFavorite = favorites.some((favorite:Favorite) => favorite.id === id);

  useEffect(() => {
    dispatch(fetchSingleCharacter(id!));
    return () => {
      dispatch(removeSelectedCharacter());
    };
  }, [dispatch, id]);

  const handleAddToFavorite = () => {
    const newFavorite = { id: id || '', name: data?.name || '' };
    dispatch(addFavorite(newFavorite));
    alert(`${data.name} is successfully added to favorites`);
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(id!));
    alert(`${data.name} is successfully removed from favorites`);
  };

  useEffect(() => {
    dispatch(fetchSingleCharacter(id!));
    return () => {
      dispatch(removeSelectedCharacter());
    };
  }, [dispatch, id]);

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="main-content1">
            <h1>
              {data.name}{" "}
              {isFavorite ? (
                <MdOutlineFavoriteBorder
                  className="unfavor-icon"
                  onClick={handleRemoveFavorite}
                />
              ) : (
                <MdOutlineFavoriteBorder
                  className="favor-icon"
                  onClick={handleAddToFavorite}
                />
              )}
            </h1>
            <div className="character-details">
              <div className="list-item">
                <span className="label">Height:</span> {data.height}
              </div>
              <div className="list-item">
                <span className="label">Mass:</span> {data.mass}
              </div>
              <div className="list-item">
                <span className="label">Hair Color:</span> {data.hair_color}
              </div>
              <div className="list-item">
                <span className="label">Skin Color:</span> {data.skin_color}
              </div>
              <div className="list-item">
                <span className="label">Eye Color:</span> {data.eye_color}
              </div>
              <div className="list-item">
                <span className="label">Birth Year:</span> {data.birth_year}
              </div>
              <div className="list-item">
                <span className="label">Gender:</span> {data.gender}
              </div>
              <div className="list-item">
                <span className="label">Homeworld:</span>{" "}
                <a href={data.homeworld}>Homeworld</a>
              </div>
              <div className="list-item">
                <span className="label">Films:</span>
                {data.films.map((film: string) => (
                  <ul>
                    <li key={film}>
                      <a href={film}>{film}</a>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CharacterDetails;
