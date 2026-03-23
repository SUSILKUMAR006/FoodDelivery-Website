import React from 'react'
import 'animate.css';
import { assets, food_list } from '../assets/assets';



const Header = () => {
  const chefPick = food_list[24];

  return (
    <div id='about' className='relative my-0 mx-auto h-[calc(100vh-80px)] min-h-[700px] lg:min-h-[600px]'>
         <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#141414_0%,#050505_48%,#000000_100%)]'></div>
         <div className='relative animate__animated animate__fadeIn animate__slow h-full px-3 md:px-6 lg:px-8 py-6 md:py-8 lg:py-0 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 md:gap-6 lg:gap-4'>
             <div className='w-full lg:w-[52%] flex flex-col gap-5 md:gap-6 lg:pl-0'>
                <h2 className='font-semibold text-white leading-tight text-[42px] md:text-[56px] lg:text-[64px] animate-slide-left' style={{animationDuration: '0.8s', animationDelay: '0s'}}>
                  Grab Big Deals
                  <br />
                  on <span className='text-[#F7B41A]'>Yummy Meals!</span>
                </h2>
                <p className='text-zinc-300 max-w-[480px] text-[15px] md:text-[16px] leading-relaxed animate-slide-left' style={{animationDuration: '0.8s', animationDelay: '0.15s'}}>
                  Lorem ipsum dolor sit amet consectetur. Aenean mauris nam risus tortor curabitur phasellus.
                </p>
                <button className='text-[#131313] font-semibold py-3 px-8 bg-[#F7B41A] text-[16px] rounded-[50px] w-fit hover:brightness-110 transition duration-300 animate-slide-left' style={{animationDuration: '0.8s', animationDelay: '0.3s'}}>Get Started</button>
                <div className='flex items-center gap-4 pt-3 animate-slide-left' style={{animationDuration: '0.8s', animationDelay: '0.45s'}}>
                  <div className='flex -space-x-2'>
                    <img className='w-10 h-10 rounded-full border-2 border-[#000000] object-cover' src={food_list[2].image} alt='' />
                    <img className='w-10 h-10 rounded-full border-2 border-[#000000] object-cover' src={food_list[7].image} alt='' />
                    <img className='w-10 h-10 rounded-full border-2 border-[#000000] object-cover' src={food_list[10].image} alt='' />
                  </div>
                  <div>
                    <p className='text-zinc-100 text-sm font-medium'>Our Happy Customers</p>
                    <p className='text-zinc-400 text-xs'>⭐ 4.8 (18.5k Review)</p>
                  </div>
                </div>
             </div>

             <div className='w-full lg:w-[48%] relative flex-1 lg:flex-none lg:min-h-[480px] flex items-center justify-center'>
               <img src={assets.home_image} alt='featured food' className='relative h-auto w-auto max-w-full max-h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] animate-slide-right' style={{animationDuration: '0.9s', animationDelay: '0.2s'}}/>

               <div className='hidden md:block absolute bottom-4 left-2 md:left-4 lg:left-6 bg-[#111111]/95 backdrop-blur-sm border border-zinc-700 rounded-2xl px-4 py-3 shadow-xl animate-slide-left' style={{animationDuration: '0.7s', animationDelay: '0.6s'}}>
                 <p className='text-zinc-100 text-sm font-medium'>Jon Williamson</p>
                 <p className='text-zinc-400 text-xs'>Food Courier</p>
               </div>

               <div className='hidden md:flex absolute bottom-4 right-2 md:right-4 lg:right-6 bg-[#111111]/95 backdrop-blur-sm border border-zinc-700 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 animate-slide-right' style={{animationDuration: '0.7s', animationDelay: '0.6s'}}>
                 <img src={chefPick.image} alt={chefPick.name} className='w-14 h-14 rounded-lg object-cover' />
                 <div>
                   <p className='text-zinc-100 text-sm font-medium'>{chefPick.name}</p>
                   <p className='text-[#F7B41A] text-xs'>★★★★★</p>
                   <p className='text-zinc-200 text-sm font-semibold'>${chefPick.price}/-</p>
                 </div>
               </div>

               <div className='hidden lg:block absolute top-6 right-8 text-2xl animate-float'>🔥</div>
               <div className='hidden lg:block absolute top-16 left-8 text-xl animate-float'>😋</div>
             </div>
         </div>
    </div>
  )
}

export default Header