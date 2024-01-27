
import "./App.css"
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CharacterPage from "./pages/CharacterPage";
function App() {


  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/character/:id" element={<CharacterPage/>}/>
          </Routes>
        </Router>
   
    </>
  )
}

export default App
