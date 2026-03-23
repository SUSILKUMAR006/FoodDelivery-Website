import React, { useState, useEffect } from 'react'
import { menu_list } from '../assets/assets.js'
const ExploreMenu = ({ category, setCategory }) => {
    const [animationDelays, setAnimationDelays] = useState({});

    useEffect(() => {
      const delays = {};
      menu_list.forEach((item, index) => {
        delays[index] = `${(index % 8) * 0.1}s`;
      });
      setAnimationDelays(delays);
    }, []);

    return (
        <div className='mt-4' id='explore-menu'>
            <div className='flex flex-col gap-6 rounded-2xl border border-zinc-800 bg-[#050505] px-4 md:px-6 lg:px-8 py-8 animate-slide-up'>
                <div className='flex flex-col items-center text-center'>
                    <h1 className='text-[#F7B41A] font-bold text-[24px] md:text-[32px] lg:text-[36px] animate-slide-up'>Explore our menu</h1>
                    <p className='text-sm md:text-base lg:text-lg max-w-[98%] lg:max-w-[65%] text-zinc-400 mt-3 leading-relaxed animate-slide-up' style={{animationDelay: '0.15s'}}>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients to satisfy your cravings, and elevate your dining experience one delicious meal at a time.</p>
                </div>
                <div className='overflow-x-auto overflow-y-visible menu py-2'>
                    <div className='flex w-max min-w-full justify-center items-center gap-4 md:gap-6 px-1 text-center'>
                        {menu_list.map((item, index) => {
                            return (
                                <div key={index} style={{animationDelay: animationDelays[index] || '0s'}} className='animate-pop-bounce'>
                                  <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className='min-w-[96px] md:min-w-[112px] flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-110 group'>
                                    <img className={`w-24 h-24 md:w-28 md:h-28 rounded-full border-4 object-cover transition-all duration-300 ${category === item.menu_name ? "border-[#F7B41A] ring-2 ring-[#F7B41A] ring-opacity-70 ring-offset-2 ring-offset-[#050505]" : "border-zinc-700 hover:border-[#F7B41A] shadow-[0_0_15px_rgba(247,180,26,0.2)]"}`} src={item.menu_image} alt={item.menu_name}/>
                                    <p className={`text-sm md:text-base font-medium transition-colors duration-300 ${category === item.menu_name ? "text-[#F7B41A]" : "text-zinc-300 group-hover:text-[#F7B41A]"}`}>{item.menu_name}</p>
                                  </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ExploreMenu