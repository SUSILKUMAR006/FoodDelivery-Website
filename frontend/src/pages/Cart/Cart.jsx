import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, addToCart, removeFromCart, setCartItems } = useContext(StoreContext);
  const navigate = useNavigate();

  // Calculate subtotal and totals
  const calculateSubtotal = () => {
    return food_list.reduce((total, item) => {
      if (cartItems[item._id]) {
        return total + (item.price * cartItems[item._id]);
      }
      return total;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.05; // 5% tax
  const deliveryFee = subtotal > 0 ? 2.99 : 0;
  const total = subtotal + tax + deliveryFee;

  // Get cart items
  const getCartItems = () => {
    return food_list.filter(item => cartItems[item._id] && cartItems[item._id] > 0);
  };

  const cartItemsList = getCartItems();

  const handleContinueShopping = () => {
    navigate('/#explore-menu');
  };

  return (
    <div className='min-h-screen bg-[#000000]'>
      {/* Navbar Spacing */}
      <div className='pt-24 pb-8'></div>

      <div className='w-full px-3 md:px-7 lg:px-12 py-6 md:py-8'>
        <h1 className='text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8'>Shopping Cart</h1>

        {cartItemsList.length === 0 ? (
          // Empty Cart
          <div className='flex flex-col items-center justify-center py-20 bg-zinc-900/50 rounded-2xl border border-zinc-800'>
            <img src={assets.basket_icon} alt="empty cart" className='w-24 h-24 opacity-50 invert brightness-200 mb-6' />
            <p className='text-zinc-300 text-xl mb-4'>Your cart is empty</p>
            <button
              onClick={handleContinueShopping}
              className='bg-[#F7B41A] text-[#000000] font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition'
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          // Cart with Items
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8'>
            {/* Cart Items */}
            <div className='lg:col-span-2'>
              <div className='bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden'>
                {/* Header - Hidden on mobile */}
                <div className='hidden md:grid bg-zinc-800/50 px-6 py-4 grid-cols-12 gap-4 items-center border-b border-zinc-800'>
                  <div className='col-span-5 text-zinc-300 font-semibold text-sm'>Product</div>
                  <div className='col-span-2 text-center text-zinc-300 font-semibold text-sm'>Qty</div>
                  <div className='col-span-3 text-right text-zinc-300 font-semibold text-sm'>Price</div>
                  <div className='col-span-2 text-right text-zinc-300 font-semibold text-sm'>Action</div>
                </div>

                {/* Cart Items List */}
                <div className='divide-y divide-zinc-800'>
                  {cartItemsList.map((item) => (
                    <div key={item._id} className='hidden md:grid px-6 py-4 grid-cols-12 gap-4 items-center hover:bg-zinc-800/30 transition'>
                      {/* Product Info */}
                      <div className='col-span-5 flex gap-3'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='w-16 h-16 rounded-lg object-cover'
                        />
                        <div className='flex flex-col justify-center'>
                          <p className='text-white font-semibold text-sm'>{item.name}</p>
                          <p className='text-zinc-400 text-xs'>{item.category}</p>
                        </div>
                      </div>

                      {/* Quantity Control */}
                      <div className='col-span-2 flex items-center justify-center'>
                        <div className='flex items-center gap-2 bg-zinc-800 rounded-lg px-3 py-1'>
                          <button
                            onClick={() => removeFromCart(item._id)}
                            className='text-[#F7B41A] hover:text-white transition font-bold'
                          >
                            −
                          </button>
                          <span className='text-white text-sm w-6 text-center'>{cartItems[item._id]}</span>
                          <button
                            onClick={() => addToCart(item._id)}
                            className='text-[#F7B41A] hover:text-white transition font-bold'
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className='col-span-3 text-right'>
                        <p className='text-[#F7B41A] font-bold text-lg'>
                          ${(item.price * cartItems[item._id]).toFixed(2)}
                        </p>
                        <p className='text-zinc-500 text-xs'>${item.price.toFixed(2)} each</p>
                      </div>

                      {/* Remove Button */}
                      <div className='col-span-2 text-right'>
                        <button
                          onClick={() => setCartItems(prev => ({ ...prev, [item._id]: 0 }))}
                          className='bg-red-900/30 hover:bg-red-900/50 text-red-400 px-3 py-1 rounded transition text-sm'
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Card View */}
                <div className='md:hidden divide-y divide-zinc-800'>
                  {cartItemsList.map((item) => (
                    <div key={item._id} className='px-4 py-4 space-y-3'>
                      <div className='flex gap-3'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='w-20 h-20 rounded-lg object-cover'
                        />
                        <div className='flex-1 flex flex-col justify-between'>
                          <div>
                            <p className='text-white font-semibold text-sm'>{item.name}</p>
                            <p className='text-zinc-400 text-xs'>{item.category}</p>
                          </div>
                          <p className='text-[#F7B41A] font-bold'>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                        </div>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2 bg-zinc-800 rounded-lg px-3 py-2'>
                          <button
                            onClick={() => removeFromCart(item._id)}
                            className='text-[#F7B41A] hover:text-white transition font-bold text-sm'
                          >
                            −
                          </button>
                          <span className='text-white text-sm w-6 text-center'>{cartItems[item._id]}</span>
                          <button
                            onClick={() => addToCart(item._id)}
                            className='text-[#F7B41A] hover:text-white transition font-bold text-sm'
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => setCartItems(prev => ({ ...prev, [item._id]: 0 }))}
                          className='bg-red-900/30 hover:bg-red-900/50 text-red-400 px-3 py-2 rounded transition text-xs'
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Shopping */}
              <button
                onClick={handleContinueShopping}
                className='mt-6 text-[#F7B41A] hover:text-white transition font-semibold flex items-center gap-2'
              >
                ← Continue Shopping
              </button>
            </div>

            {/* Order Summary */}
            <div className='lg:col-span-1'>
              <div className='bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 md:p-6 sticky top-24'>
                <h2 className='text-white font-bold text-xl mb-6'>Order Summary</h2>

                <div className='space-y-4 mb-6 pb-6 border-b border-zinc-800'>
                  <div className='flex justify-between text-zinc-300 text-sm'>
                    <span>Subtotal</span>
                    <span className='text-white font-semibold'>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between text-zinc-300 text-sm'>
                    <span>Tax (5%)</span>
                    <span className='text-white font-semibold'>${tax.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between text-zinc-300 text-sm'>
                    <span>Delivery Fee</span>
                    <span className='text-white font-semibold'>${deliveryFee.toFixed(2)}</span>
                  </div>
                </div>

                <div className='flex justify-between mb-6 pb-6 border-b border-zinc-800'>
                  <span className='text-white font-bold'>Total</span>
                  <span className='text-[#F7B41A] font-bold text-2xl'>${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => navigate('/order')}
                  className='w-full bg-[#F7B41A] text-[#000000] font-bold py-3 rounded-lg hover:brightness-110 transition mb-3'
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={handleContinueShopping}
                  className='w-full bg-zinc-800 text-white font-semibold py-2 rounded-lg hover:bg-zinc-700 transition'
                >
                  Add More Items
                </button>

                {/* Promo Code */}
                <div className='mt-6 pt-6 border-t border-zinc-800'>
                  <p className='text-zinc-400 text-sm mb-2'>Have a promo code?</p>
                  <div className='flex gap-2'>
                    <input
                      type='text'
                      placeholder='Enter code'
                      className='flex-1 bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#F7B41A]'
                    />
                    <button className='bg-[#F7B41A] text-[#000000] font-semibold px-4 py-2 rounded hover:brightness-110 transition text-sm'>
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart