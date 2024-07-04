import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Menus from '../components/Menus'
import CategoryMenu from '../components/CategoryMenu'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <CategoryMenu/>
      <Menus/>
    </div>
  )
}

export default Home
