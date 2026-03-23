import React, { useEffect, useState, useContext } from 'react'
import { assets, food_list } from '../assets/assets.js'
import { useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart, cartItems } = useContext(StoreContext);

  const [menu, setMenu] = useState("home");
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Calculate total cart items
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  };

  const sectionToMenu = {
    "explore-menu": "menu",
    "food-display": "menu",
    "app-download": "mobile-app",
    fooder: "contact",
  };

  // Handle search input
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = food_list.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    if (!location.hash) {
      setMenu("home");
      return;
    }

    const sectionId = location.hash.slice(1);
    if (sectionToMenu[sectionId]) {
      setMenu(sectionToMenu[sectionId]);
    }

    const target = document.getElementById(sectionId);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }, [location.pathname, location.hash]);

  const goToSection = (sectionId, menuKey) => {
    setMenu(menuKey);

    if (sectionId === "home") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFoodClick = (foodId) => {
    addToCart(foodId);
    setSearchActive(false);
    setSearchQuery("");
  };

  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-50 bg-[#000000] py-5 px-4 md:px-7 lg:px-8 flex justify-between items-center'>
          <img className='w-[120px] lg:w-[150px]' src={assets.logo_me} alt="Sapadu Logo"  />
          {/* menu bar creation */}
        <ul className='hidden md:flex md:gap-5 lg:gap-10 text-zinc-300'>
          <button type='button' onClick={() => goToSection("home", "home")} className={menu==="home"?"border-b-[2px] pb-[2px] border-[#F7B41A] text-white cursor-pointer transition-all duration-300":"border-b-[2px] pb-[2px] border-transparent hover:text-white cursor-pointer transition-all duration-300"}>Home</button>
          <button type='button' onClick={() => goToSection("explore-menu", "menu")} className={menu==="menu"?"border-b-[2px] pb-[2px] border-[#F7B41A] text-white cursor-pointer transition-all duration-300":"border-b-[2px] pb-[2px] border-transparent hover:text-white cursor-pointer transition-all duration-300"}>Menu</button>
          <button type='button' onClick={() => goToSection("app-download", "mobile-app")} className={menu==="mobile-app"?"border-b-[2px] pb-[2px] border-[#F7B41A] text-white cursor-pointer transition-all duration-300":"border-b-[2px] pb-[2px] border-transparent hover:text-white cursor-pointer transition-all duration-300"}>Mobile App</button>
          <button type='button' onClick={() => goToSection("fooder", "contact")} className={menu==="contact"?"border-b-[2px] pb-[2px] border-[#F7B41A] text-white cursor-pointer transition-all duration-300":"border-b-[2px] pb-[2px] border-transparent hover:text-white cursor-pointer transition-all duration-300"}>Contact</button>
          </ul>

          {/* Navbar right side */}
          <div className=' flex gap-2 lg:gap-10 items-center'>
            <button onClick={() => setSearchActive(!searchActive)} className='cursor-pointer hover:opacity-100 transition'>
              <img className='w-[18px] md:w-[20px] lg:w-[22px] opacity-90 invert brightness-200'  src={assets.search_icon} alt="Search" />
            </button>

              <button onClick={() => navigate('/cart')} className=' relative cursor-pointer hover:opacity-100 transition'>
                  <img className='w-[18px] md:w-[20px] lg:w-[22px] opacity-90 invert brightness-200' src={assets.basket_icon} alt="Cart"  />
                  {getTotalCartItems() > 0 && (
                    <div className='absolute min-w-[20px] h-[20px] flex items-center justify-center top-[-8px] right-[-8px] rounded-full bg-[#F7B41A] text-[#000000] text-xs font-bold'>
                      {getTotalCartItems()}
                    </div>
                  )}
              </button>
                <button onClick={()=>setShowLogin(true)} className='bg-transparent text-zinc-100 border border-[#F7B41A] py-[3px] text-sm px-[12px] md:py-[7px] md:px-[20px] lg:py-[8px] lg:px-[25px] rounded-[50px] cursor-pointer transition duration-300 hover:bg-[#F7B41A]/10 md:text-[15px]' type="button">Login</button>
          </div>
      </div>

      {/* Search Modal */}
      {searchActive && (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-40 bg-[#000000]/95 backdrop-blur-sm animate-slide-up pt-20 md:pt-24'>
          <div className='max-w-4xl mx-auto px-3 md:px-4 h-full overflow-y-auto'>
            {/* Search Input */}
            <div className='flex gap-2 md:gap-3 mb-4 md:mb-6 sticky top-20 md:top-24 bg-[#000000]/95 py-3'>
              <input
                type='text'
                placeholder='Search food...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className='flex-1 bg-zinc-900 border-2 border-[#F7B41A] rounded-lg px-4 md:px-5 py-2 md:py-3 text-white placeholder-zinc-600 focus:outline-none text-sm md:text-lg'
              />
              <button
                onClick={() => {
                  setSearchActive(false);
                  setSearchQuery("");
                }}
                className='bg-zinc-800 hover:bg-zinc-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition text-sm'
              >
                ✕
              </button>
            </div>

            {/* Search Results */}
            {searchQuery.trim() && (
              <div className='pb-6'>
                {searchResults.length > 0 ? (
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4'>
                    {searchResults.map((item) => (
                      <div
                        key={item._id}
                        className='bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-[#F7B41A] transition group cursor-pointer animate-slide-up'
                        onClick={() => handleFoodClick(item._id)}
                      >
                        <div className='relative overflow-hidden h-32 md:h-40'>
                          <img
                            src={item.image}
                            alt={item.name}
                            className='w-full h-full object-cover group-hover:scale-110 transition duration-300'
                          />
                          <div className='absolute top-2 right-2 bg-[#F7B41A] text-[#000000] px-2 py-1 rounded-full text-xs md:text-sm font-semibold'>
                            ${item.price}
                          </div>
                        </div>
                        <div className='p-3 md:p-4'>
                          <h3 className='text-white font-bold mb-1 text-sm md:text-base line-clamp-1'>{item.name}</h3>
                          <p className='text-zinc-400 text-xs mb-1'>{item.category}</p>
                          <p className='text-zinc-300 text-xs line-clamp-1 mb-2'>{item.description}</p>
                          <div className='flex items-center justify-between'>
                            <img src={assets.rating_starts} alt="rating" className='w-12 md:w-16' />
                            <button className='bg-[#F7B41A] text-[#000000] px-3 py-1 text-xs md:text-sm rounded-lg font-semibold hover:brightness-110 transition'>
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='text-center py-8'>
                    <p className='text-zinc-400 text-lg mb-2'>No food items found</p>
                    <p className='text-zinc-500 text-sm'>Try searching with different keywords</p>
                  </div>
                )}
              </div>
            )}

            {!searchQuery.trim() && (
              <div className='text-center py-8'>
                <p className='text-zinc-400 text-lg'>Start typing to search</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {searchActive && (
        <div
          className='fixed top-0 left-0 right-0 bottom-0 z-30'
          onClick={() => {
            setSearchActive(false);
            setSearchQuery("");
          }}
        />
      )}
    </>
  )
}

export default Navbar