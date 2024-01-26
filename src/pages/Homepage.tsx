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
</div>
  )
}

export default Homepage