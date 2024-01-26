import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
    const[search,setSearch]=useState("")

    const handleSubmit =(e: { preventDefault: () => void })=>{
    e.preventDefault();
    
    setSearch("")
    }
    return (
  <div className="header">
  
    <div className="logo">  <Link to="/">Star Wars </Link></div>
    <div className="search-bar">
    <form onSubmit={handleSubmit}>
      <input type="text" value={search} placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
    </div>
  </div>
    )
  }
  
  export default Header;