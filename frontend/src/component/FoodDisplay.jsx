import React, { useContext, useState, useEffect } from 'react'
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
    const [animationDelays, setAnimationDelays] = useState({});

    useEffect(() => {
      const delays = {};
      let index = 0;
      food_list.forEach((item) => {
        if(category === 'All' || category === item.category) {
          delays[item._id] = `${(index % 10) * 0.08}s`;
          index++;
        }
      });
      setAnimationDelays(delays);
    }, [category, food_list]);

  return (
  <div className='mt-8' id="food-display" >
    <div className='flex flex-col gap-4 md:gap-6 lg:gap-8 rounded-2xl border border-zinc-800 bg-[#050505] px-3 md:px-6 lg:px-8 py-6 md:py-8'>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center mt-2 gap-4 md:gap-6 lg:gap-8'>
        {food_list.map((item,index)=>{
          if(category ==='All' || category===item.category)
          {
            return <div key={index} style={{animationDelay: animationDelays[item._id] || '0s'}} className='animate-slide-up'>
              <FoodItem id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}/>
            </div>
          }
        })}
      </div>
        </div>
    </div>
  )
}

export default FoodDisplay