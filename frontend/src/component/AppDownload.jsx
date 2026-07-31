import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='text-center m-auto mt-[100px] text-[max(3vw,20px)] font-bold text-zinc-100' id='app-download'>
        <p className='animate-slide-up'>For Better Experience Download <br /> Sapadu App</p>
        <div className=' flex justify-center gap-[max(2vw,10px)] mt-[40px]'>
            <img className=' w-[max(30vw,120px)] max-w-[180px] transition duration-[0.5s] cursor-pointer hover:scale-[1.05] animate-slide-left' style={{animationDelay: '0.2s'}} src={assets.play_store} alt=""  />
            <img className=' w-[max(30vw,120px)] max-w-[180px] transition duration-[0.5s] cursor-pointer hover:scale-[1.05] animate-slide-right' style={{animationDelay: '0.2s'}} src={assets.app_store} alt=""  />
        </div>
    </div>
  )
}

export default AppDownload
