import React, { useContext} from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='w-full m-auto rounded-[15px] bg-[#121212] border border-zinc-800 shadow-lg shadow-black/30 animate-slide-up cursor-pointer transition duration-200 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-[0_0_20px_rgba(247,180,26,0.1)]'   >
        <div className=' relative '>
            <img  className=' w-full rounded-t-[15px] ' src={image} alt={name} />
            {
                !cartItems[id]? <img className=' w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" srcset="" />
                :<div className='absolute bottom-[15px] right-[15px] bg-[#1f1f1f] border border-zinc-700 rounded-[50px] flex justify-center items-center gap-[10px] py-[6px] px-[6px]'>
                    <img className='w-[30px]' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" srcset="" />
                    <p className='text-zinc-100'>{cartItems[id]}</p>
                    <img className='w-[30px]' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" srcSet="" />
                </div>
            }
        </div>
        <div className='p-[20px] '>
            <div className=' flex justify-between items-center mb-[10px]'>
                <p className='text-md font-semibold text-zinc-100'>{name}</p>
                <img className='w-[98px]' src={assets.rating_starts} alt=""/>
            </div>
            <p className='text-zinc-400 text-[12px]'>{description}</p>
            <p className='text-[#F7B41A] text-[22px] font-semibold my-[10px]'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem