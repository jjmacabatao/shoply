import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Footer = ( ) => {
  return (
    <footer className='flex flex-col mt-50 p-8 border-t border-[#E5E7EB] shadow-sm'>
        <section className='grid grid-cols-12 '>
            <section className='col-start-1 col-end-5 flex flex-col pl-8 pt-5'>
                <div className='flex flex-col gap-2'>
                    <p className='text-3xl font-semibold'>Stay up to date!</p>
                    <p>Subscribe to our newsletter for the latest offers and products update.</p>
                    <div className='flex flex-col justify-between gap-2 2xl:flex-row xl:flex-row lg:flex-row md:flex-row'>
                        <input type='text' placeholder='Enter your email' className='border border-gray-300 p-2 rounded-lg w-full'/>
                        <Button variant={'success'}>Subscribe</Button>
                    </div>
                </div>
            </section>
            <section className='flex flex-col gap:1 col-start-6 col-end-13 justify-start gap-20 py-8 w-full 2xl:flex-row xl:flex-row lg:flex-row md:flex-row'>
                <section className='border-l pl-15 w-full border-[#E5E7EB]'>
                    <p className='text-2xl font-semibold'>Shop</p>
                    <div className='mt-5 flex flex-col gap-2'>
                        <Link>New Arrivals</Link>
                        <Link>Best Offers</Link>
                        <Link>Special Offers</Link>
                        <Link>Gifts Cards</Link>
                    </div>
                </section>
                <section className='w-full pl-15 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0'>
                    <p className='text-2xl font-semibold'>Support</p>
                    <div className='mt-5 flex flex-col gap-2'>
                        <Link>Help Center</Link>
                        <Link>Shipping Info</Link>
                        <Link>Return Policy</Link>
                        <Link>Contact Us</Link>
                    </div>
                </section>
                <section className='w-full pl-15 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-0'>
                    <p className='text-2xl font-semibold'>About</p>
                    <div className='mt-5 flex flex-col gap-2'>
                        <Link>About Us</Link>
                        <Link>Careers</Link>
                        <Link>Terms of Service</Link>
                        <Link>Privacy Policy</Link>
                    </div>
                </section>
            </section>
        </section>
        <section className='flex flex-row justify-center border-t mt-8 pt-8 border-[#E5E7EB]'>
            <section>
                2026 Shoply. All rights reserved.
            </section>
        </section>
        
    </footer>
  )
}

export default Footer