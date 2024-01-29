import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css"
import { useDispatch } from "react-redux";
import { fetchSearchedCharacterAsync } from "../../api/apiCall";
import { AppDispatch } from "../../features/store";

const Header = () => {
    const navigate =useNavigate()
    const[search,setSearch]=useState("")
    const dispatch = useDispatch<AppDispatch>()
    
    const handleSubmit =(e: { preventDefault: () => void })=>{
    e.preventDefault();
    if(!search) return alert("Please enter a search")
    navigate(`/`)
    dispatch(fetchSearchedCharacterAsync(search))
    setSearch("")
    }
    return (
  <div className="header">

    <div className="logo">  <Link className="link" to="/">Star Wars </Link></div>
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