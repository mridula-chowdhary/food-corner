import React from 'react'
import Banner from '../components/Banner'
import Menus from '../components/Menus'
import CategoryMenu from '../components/CategoryMenu'

function Home() {
  return (
    <div>
      <Banner/>
      <CategoryMenu/>
      <Menus/>
    </div>
  )
}

export default Home
