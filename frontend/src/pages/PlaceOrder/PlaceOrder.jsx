import React, { useState, useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('qr');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipcode: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  // Calculate totals
  const calculateSubtotal = () => {
    return food_list.reduce((total, item) => {
      if (cartItems[item._id]) {
        return total + (item.price * cartItems[item._id]);
      }
      return total;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.05;
  const deliveryFee = subtotal > 0 ? 2.99 : 0;
  const total = subtotal + tax + deliveryFee;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill in all required fields');
      return;
    }

    if (paymentMethod === 'card') {
      if (!formData.cardNumber || !formData.cardName || !formData.expiry || !formData.cvv) {
        alert('Please fill in all card details');
        return;
      }
    }

    alert(`Order placed successfully via ${paymentMethod === 'qr' ? 'QR Code' : paymentMethod === 'card' ? 'Card' : 'Cash on Delivery'}!`);
    navigate('/');
  };

  return (
    <div className='min-h-screen bg-[#000000]'>
      {/* Navbar Spacing */}
      <div className='pt-24 pb-8'></div>

      <div className='w-full px-3 md:px-7 lg:px-12 py-6 md:py-8'>
        <h1 className='text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12'>Checkout</h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8'>
          {/* Delivery & Payment Info */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Delivery Information */}
            <div className='bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 md:p-8 animate-slide-up'>
              <h2 className='text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2'>
                📍 Delivery Information
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
                <input
                  type='text'
                  name='name'
                  placeholder='Full Name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F7B41A] transition md:col-span-2'
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F7B41A] transition'
                />
                <input
                  type='tel'
                  name='phone'
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={handleInputChange}
                  className='bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F7B41A] transition'
                />
                <input
                  type='text'
                  name='address'
                  placeholder='Delivery Address'
                  value={formData.address}
                  onChange={handleInputChange}
                  className='bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F7B41A] transition md:col-span-2'
                />
                <input
                  type='text'
                  name='city'
                  placeholder='City'
                  value={formData.city}
                  onChange={handleInputChange}
                  className='bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F7B41A] transition'
                />
                <input
                  type='text'
                  name='zipcode'
                  placeholder='Zip Code'
                  value={formData.zipcode}
                  onChange={handleInputChange}
                  className='bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F7B41A] transition'
                />
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className='bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 animate-slide-up' style={{animationDelay: '0.1s'}}>
              <h2 className='text-2xl font-bold text-white mb-8 flex items-center gap-2'>
                💳 Payment Method
              </h2>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
                {/* QR Code Payment */}
                <label className={`relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-300 ${
                  paymentMethod === 'qr' 
                    ? 'ring-2 ring-[#F7B41A] shadow-lg shadow-[#F7B41A]/20' 
                    : 'border-2 border-zinc-700 hover:border-zinc-600'
                }`}>
                  <input
                    type='radio'
                    name='payment'
                    value='qr'
                    checked={paymentMethod === 'qr'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className='hidden'
                  />
                  <div className={`relative p-8 text-center transition-all ${
                    paymentMethod === 'qr' 
                      ? 'bg-gradient-to-br from-[#F7B41A]/20 to-[#F7B41A]/5' 
                      : 'bg-zinc-800/30 group-hover:bg-zinc-800/50'
                  }`}>
                    <div className='text-5xl mb-3'>📱</div>
                    <p className='text-white font-bold text-sm mb-1'>QR Payment</p>
                    <p className='text-zinc-400 text-xs'>Fast & Secure</p>
                    {paymentMethod === 'qr' && (
                      <div className='absolute top-3 right-3 w-6 h-6 bg-[#F7B41A] rounded-full flex items-center justify-center'>
                        <span className='text-[#000000] font-bold text-sm'>✓</span>
                      </div>
                    )}
                  </div>
                </label>

                {/* Card Payment */}
                <label className={`relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-300 ${
                  paymentMethod === 'card' 
                    ? 'ring-2 ring-[#F7B41A] shadow-lg shadow-[#F7B41A]/20' 
                    : 'border-2 border-zinc-700 hover:border-zinc-600'
                }`}>
                  <input
                    type='radio'
                    name='payment'
                    value='card'
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className='hidden'
                  />
                  <div className={`relative p-8 text-center transition-all ${
                    paymentMethod === 'card' 
                      ? 'bg-gradient-to-br from-[#F7B41A]/20 to-[#F7B41A]/5' 
                      : 'bg-zinc-800/30 group-hover:bg-zinc-800/50'
                  }`}>
                    <div className='text-5xl mb-3'>💳</div>
                    <p className='text-white font-bold text-sm mb-1'>Card</p>
                    <p className='text-zinc-400 text-xs'>Credit/Debit</p>
                    {paymentMethod === 'card' && (
                      <div className='absolute top-3 right-3 w-6 h-6 bg-[#F7B41A] rounded-full flex items-center justify-center'>
                        <span className='text-[#000000] font-bold text-sm'>✓</span>
                      </div>
                    )}
                  </div>
                </label>

                {/* Cash on Delivery */}
                <label className={`relative overflow-hidden rounded-2xl cursor-pointer group transition-all duration-300 ${
                  paymentMethod === 'cash' 
                    ? 'ring-2 ring-[#F7B41A] shadow-lg shadow-[#F7B41A]/20' 
                    : 'border-2 border-zinc-700 hover:border-zinc-600'
                }`}>
                  <input
                    type='radio'
                    name='payment'
                    value='cash'
                    checked={paymentMethod === 'cash'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className='hidden'
                  />
                  <div className={`relative p-8 text-center transition-all ${
                    paymentMethod === 'cash' 
                      ? 'bg-gradient-to-br from-[#F7B41A]/20 to-[#F7B41A]/5' 
                      : 'bg-zinc-800/30 group-hover:bg-zinc-800/50'
                  }`}>
                    <div className='text-5xl mb-3'>💵</div>
                    <p className='text-white font-bold text-sm mb-1'>Cash</p>
                    <p className='text-zinc-400 text-xs'>On Delivery</p>
                    {paymentMethod === 'cash' && (
                      <div className='absolute top-3 right-3 w-6 h-6 bg-[#F7B41A] rounded-full flex items-center justify-center'>
                        <span className='text-[#000000] font-bold text-sm'>✓</span>
                      </div>
                    )}
                  </div>
                </label>
              </div>

              {/* Card Form - Show only when card is selected */}
              {paymentMethod === 'card' && (
                <div className='mt-8 p-6 bg-zinc-800/30 rounded-xl border border-zinc-700 space-y-4'>
                  <p className='text-zinc-300 text-sm mb-4'>Card Details</p>
                  <input
                    type='text'
                    name='cardName'
                    placeholder='Cardholder Name'
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className='w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F7B41A] transition'
                  />
                  <input
                    type='text'
                    name='cardNumber'
                    placeholder='Card Number (16 digits)'
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    maxLength='16'
                    className='w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F7B41A] transition font-mono'
                  />
                  <div className='grid grid-cols-2 gap-4'>
                    <input
                      type='text'
                      name='expiry'
                      placeholder='MM/YY'
                      value={formData.expiry}
                      onChange={handleInputChange}
                      maxLength='5'
                      className='bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F7B41A] transition'
                    />
                    <input
                      type='text'
                      name='cvv'
                      placeholder='CVV'
                      value={formData.cvv}
                      onChange={handleInputChange}
                      maxLength='3'
                      className='bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F7B41A] transition'
                    />
                  </div>
                </div>
              )}

              {/* QR Code Display - Show only when QR is selected */}
              {paymentMethod === 'qr' && (
                <div className='mt-8 p-8 bg-white rounded-xl flex flex-col items-center'>
                  <div className='w-48 h-48 bg-gradient-to-br from-[#F7B41A] to-[#c9920e] rounded-lg flex items-center justify-center mb-4'>
                    <div className='text-white text-center'>
                      <p className='text-3xl mb-2'>📱</p>
                      <p className='text-sm font-bold'>SCAN QR CODE</p>
                      <p className='text-xs mt-2'>₹{total.toFixed(2)}</p>
                    </div>
                  </div>
                  <p className='text-zinc-700 text-sm text-center'>Scan this code with any UPI app to complete payment</p>
                </div>
              )}

              {/* Cash on Delivery Info */}
              {paymentMethod === 'cash' && (
                <div className='mt-8 p-6 bg-green-900/20 border border-green-800 rounded-xl'>
                  <p className='text-green-300 text-sm'>✓ Payment can be made in cash when your order arrives. Please have exact amount ready.</p>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-1'>
            <div className='bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 md:p-6 sticky top-24 animate-slide-up' style={{animationDelay: '0.2s'}}>
              <h2 className='text-xl font-bold text-white mb-6'>Order Summary</h2>

              <div className='space-y-3 mb-6 pb-6 border-b border-zinc-800 max-h-[300px] overflow-y-auto'>
                {food_list.map((item) => {
                  if (cartItems[item._id] && cartItems[item._id] > 0) {
                    return (
                      <div key={item._id} className='flex justify-between text-sm'>
                        <span className='text-zinc-300'>
                          {item.name} <span className='text-zinc-500'>x{cartItems[item._id]}</span>
                        </span>
                        <span className='text-white font-semibold'>
                          ${(item.price * cartItems[item._id]).toFixed(2)}
                        </span>
                      </div>
                    );
                  }
                })}
              </div>

              <div className='space-y-3 mb-6 pb-6 border-b border-zinc-800'>
                <div className='flex justify-between text-zinc-300 text-sm'>
                  <span>Subtotal</span>
                  <span className='text-white font-semibold'>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between text-zinc-300 text-sm'>
                  <span>Tax (5%)</span>
                  <span className='text-white font-semibold'>${tax.toFixed(2)}</span>
                </div>
                <div className='flex justify-between text-zinc-300 text-sm'>
                  <span>Delivery</span>
                  <span className='text-white font-semibold'>${deliveryFee.toFixed(2)}</span>
                </div>
              </div>

              <div className='flex justify-between mb-6'>
                <span className='text-white font-bold'>Total</span>
                <span className='text-[#F7B41A] font-bold text-2xl'>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                className='w-full bg-[#F7B41A] text-[#000000] font-bold py-3 rounded-lg hover:brightness-110 transition mb-3'
              >
                Place Order
              </button>

              <button
                onClick={() => navigate('/cart')}
                className='w-full bg-zinc-800 text-white font-semibold py-2 rounded-lg hover:bg-zinc-700 transition'
              >
                Back to Cart
              </button>

              <div className='mt-6 p-4 bg-zinc-800/30 rounded-lg'>
                <p className='text-zinc-400 text-xs text-center'>
                  🔒 Your payment information is secure and encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder