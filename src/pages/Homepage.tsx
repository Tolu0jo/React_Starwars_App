import React from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'

const Homepage = () => {
  return (
<div className="home-page">
      <Header />
      <div className="content">
        <Sidebar />
</div>
<div className="main-content">
          {/* Your paginated list of characters goes here */}
          <p>Character 1</p>
          <p>Character 2</p>
          {/* ... */}
        </div>
</div>
  )
}

export default Homepage