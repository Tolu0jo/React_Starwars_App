import CharacterDetails from "../components/characterDetails/CharacterDetails";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

const CharacterPage = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="main-section">
        <Sidebar />
        <CharacterDetails />
      </div>
    </div>
  );
};

export default CharacterPage;
