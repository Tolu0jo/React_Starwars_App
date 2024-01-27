import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import CharacterList from "../components/characterListing/CharacterList";

const Homepage = () => {
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
