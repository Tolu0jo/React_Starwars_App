
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Homepage from './pages/Homepage';
function App() {


  return (
    <>
        <Router>
        <Homepage/>
        </Router>
   
    </>
  )
}

export default App
