import React, { useState } from 'react'
import Header from '../../component/Header'
import ExploreMenu from '../../component/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay';
import AppDownload from '../../component/AppDownload';
import Navbar from '../../component/Navbar';

const Home = ({setShowLogin}) => {

  const [category,setCategory] = useState("All");
  return (
    <div className='space-y-12'>
        <div className='bg-[#000000] px-4 md:px-7 lg:px-8 pb-4 md:pb-6 min-h-screen pt-20'>
          <Navbar setShowLogin={setShowLogin} />
          <Header/>
        </div>

        <div className='w-full'>
          <ExploreMenu category={category} setCategory={setCategory}  />
          <FoodDisplay category={category}/>
          <AppDownload/>
        </div>
    </div>
  )
}

export default Home