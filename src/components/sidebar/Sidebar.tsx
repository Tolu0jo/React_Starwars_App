import React from 'react';
import "./sidebar.css"
const Sidebar=()=> {
  return (
    <div className="sidebar">
       
      <h1>Favorites</h1>
      <hr/>
      {/* Your favorites list goes here */}
      <ul className='favorite'>
      <li>Favorite 1</li>
      <li>Favorite 2</li>
    </ul>
    </div>
    
  );
}

export default Sidebar;