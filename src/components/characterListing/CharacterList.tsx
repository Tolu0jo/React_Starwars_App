import { useDispatch, useSelector } from "react-redux";
import "./characterList.css";
import { getAllCharacters } from "../../features/character/characterSlice";
import { useNavigate } from "react-router-dom";

import { fetchCharactersByPage } from "../../api/apiCall";

const CharacterList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const characters = useSelector(getAllCharacters);

  const handleNavigation = (url: string) => {
    const match = url.match(/\/(\d+)\/$/);
    const id = match ? match[1] : null;
    navigate(`/character/${id}`);
  };

  const handlePreviousPage = (url: string) => {
    dispatch(fetchCharactersByPage(url));
  };

  const handleNextPage = (url: string) => {
    dispatch(fetchCharactersByPage(url));
  };
  return (
    <div className="main-content">
      <h1>Star wars Characters</h1>
      <div className="list-container">
        {Object.keys(characters).length === 0 ? (
          <div className="loader"></div>
        ) : characters.count == 0 ? (
          <div className="not_found">Opps! No Character found.</div>
        ) : (
          <>
            <table className="table">
              <tr>
                <th>Name</th>
                <th>gender</th>
              </tr>
              {characters.results.map(
                (character: { name: string; gender: string; url: string }) => (
                  <tr
                    key={character.name}
                    onClick={() => handleNavigation(character.url)}
                  >
                    <td>{character.name}</td>
                    <td>{character.gender}</td>
                  </tr>
                )
              )}
            </table>
          </>
        )}
      </div>
      <div className="pagination">
        <button
          onClick={() => handlePreviousPage(characters.previous)}
          disabled={!characters.previous}
        >
          Prev
        </button>
        <button
          onClick={() => handleNextPage(characters.next)}
          disabled={!characters.next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
