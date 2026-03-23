import React, { useState } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Fooder from './component/Fooder'
import LoginPopUp from './component/LoginPopUp'

const App = () => {

  const [showLogin, setShowLogin]= useState(false);

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className='w-full min-h-[calc(100vh-120px)] text-zinc-100'>
        <Routes>
          <Route path='/' element={<Home setShowLogin={setShowLogin} />} />
          <Route path='/cart' element={<><Navbar setShowLogin={setShowLogin}/><Cart /></>} />
          <Route path='/order' element={<><Navbar setShowLogin={setShowLogin}/><PlaceOrder /></>} />
        </Routes>
      </div>
      <Fooder />
    </>
  )
}

export default App