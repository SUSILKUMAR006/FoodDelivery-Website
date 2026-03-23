import React, { useState } from 'react'
import { assets } from '../assets/assets';

const LoginPopUp = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className='fixed inset-0 z-20 w-full h-full bg-[#00000095] backdrop-blur-sm grid'>
        <form action="" className='justify-self-center self-center w-[max(23vw,330px)] text-zinc-400 bg-[#111111] border border-zinc-700 flex flex-col gap-[25px] py-[25px] px-[30px] rounded-xl text-[14px] animate__animated animate__fadeIn animate__slow'>
            <div className='flex justify-between items-center text-zinc-100'>
                <h2 className='text-xl font-semibold'>{currState}</h2>
                <img className=' w-[16px] cursor-pointer' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""  />
            </div>
            <div className=' flex flex-col gap-[20px]'>
                {currState ==="Login"?<></>:<input className='outline-0 border border-zinc-700 bg-[#1a1a1a] text-zinc-100 p-[10px] rounded placeholder:text-zinc-500'  type="text" name="" id="" placeholder='Your Name' required />}
               
                <input className='outline-0 border border-zinc-700 bg-[#1a1a1a] text-zinc-100 p-[10px] rounded placeholder:text-zinc-500' type="email" name='' id='' placeholder=' Your email' required />
                <input className='outline-0 border border-zinc-700 bg-[#1a1a1a] text-zinc-100 p-[10px] rounded placeholder:text-zinc-500' type="password" name="" id="" placeholder='Password' required />

            </div>
            <button className='p-[10px] rounded bg-[#F7B41A] text-[#131313] font-bold hover:brightness-110 transition'>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className=' flex items-start gap-[8px] mt-[15px]'>
                <input className=' mt-[5px]' type="checkbox" required/>
                <p>By Continuing i agree to the terms of use & privacy policy.</p>

            </div>
            {currState ==="Login"?
            <p>Create a new account ? <span onClick={()=> setCurrState("Sign Up" )} className='cursor-pointer text-[#F7B41A] font-semibold'>Click here</span></p>
            :<p>Already have an account ? <span onClick={()=> setCurrState("Login")}  className='cursor-pointer text-[#F7B41A] font-semibold'>Login here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopUp