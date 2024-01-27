import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import CharacterList from "../components/characterListing/CharacterList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../features/store";
import { fetchCharactersAsync } from "../api/apiCall";

const Homepage = () => {
 const dispatch = useDispatch<AppDispatch>()

  useEffect(()=>{
    dispatch(fetchCharactersAsync())

  },[dispatch])
  return (
    <div className="home-page">
      <Header />
      <div className="main-section">
        <Sidebar />
        <CharacterList />
      </div>
    </div>
  );
};

export default Homepage;
