import React from 'react'
import { assets } from '../assets/assets'

const Fooder = () => {
    return (
        <div id='fooder' className='bg-[#000000] text-zinc-300 border-t border-zinc-800 animate-slide-up mt-40'>
            {/* Main Footer Content */}
            <div className='w-full px-3 md:px-7 lg:px-12 py-12 md:py-16 lg:py-20'>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 md:mb-12'>
                    {/* Brand Section */}
                    <div className='flex flex-col gap-5'>
                        <img src={assets.logo_me} alt="Sapadu Logo" className='w-[140px]' />
                        <p className='text-zinc-400 text-sm leading-relaxed max-w-xs'>
                            Delivering delicious meals right to your door with premium ingredients and exceptional service.
                        </p>
                        {/* Social Icons */}
                        <div className='flex gap-4 mt-2'>
                            <a href='#' className='w-10 h-10 rounded-full bg-zinc-900 hover:bg-[#F7B41A] flex items-center justify-center transition duration-300'>
                                <img className='w-5 brightness-0 invert hover:invert-0 hover:brightness-150' src={assets.facebook_icon} alt="Facebook" />
                            </a>
                            <a href='#' className='w-10 h-10 rounded-full bg-zinc-900 hover:bg-[#F7B41A] flex items-center justify-center transition duration-300'>
                                <img className='w-5 brightness-0 invert hover:invert-0 hover:brightness-150' src={assets.twitter_icon} alt="Twitter" />
                            </a>
                            <a href='#' className='w-10 h-10 rounded-full bg-zinc-900 hover:bg-[#F7B41A] flex items-center justify-center transition duration-300'>
                                <img className='w-5 brightness-0 invert hover:invert-0 hover:brightness-150' src={assets.linkedin_icon} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    {/* Company Section */}
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-white text-lg font-bold tracking-wide'>COMPANY</h3>
                        <ul className='space-y-3'>
                            <li><a href='#' className='text-zinc-400 hover:text-[#F7B41A] transition duration-300 text-sm'>Home</a></li>
                            <li><a href='#' className='text-zinc-400 hover:text-[#F7B41A] transition duration-300 text-sm'>About Us</a></li>
                            <li><a href='#' className='text-zinc-400 hover:text-[#F7B41A] transition duration-300 text-sm'>Delivery</a></li>
                            <li><a href='#' className='text-zinc-400 hover:text-[#F7B41A] transition duration-300 text-sm'>Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-white text-lg font-bold tracking-wide'>GET IN TOUCH</h3>
                        <ul className='space-y-3'>
                            <li className='text-zinc-400 hover:text-[#F7B41A] transition duration-300 cursor-pointer text-sm'>📞 +91 9659390517</li>
                            <li className='text-zinc-400 hover:text-[#F7B41A] transition duration-300 cursor-pointer text-sm break-words'>📧 susilkumar2006nano@gmail.com</li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-white text-lg font-bold tracking-wide'>NEWSLETTER</h3>
                        <p className='text-zinc-400 text-sm'>Subscribe to get special offers and latest updates</p>
                        <div className='flex gap-2'>
                            <input 
                                type='email' 
                                placeholder='Your email' 
                                className='flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#F7B41A] transition'
                            />
                            <button className='bg-[#F7B41A] text-[#000000] font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition text-sm'>Send</button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className='w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-8'></div>

                {/* Bottom Footer */}
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                    <p className='text-zinc-500 text-sm'>© {new Date().getFullYear()} Sapadu. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <a href='#' className='text-zinc-500 hover:text-[#F7B41A] transition text-sm'>Terms of Service</a>
                        <a href='#' className='text-zinc-500 hover:text-[#F7B41A] transition text-sm'>Privacy Policy</a>
                        <a href='#' className='text-zinc-500 hover:text-[#F7B41A] transition text-sm'>Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fooder