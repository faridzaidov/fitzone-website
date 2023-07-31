import React from 'react'
import HeroBannerImage from './../assets/images/HeroBannerImage.jpg'

export default function HeroBanner() {
    return (
        <div className='relative p-4 sm:p-12 md:p-20 text-center md:text-left'>
            <div className="hero-left flex flex-col">
                <p className='text-indigo-500 font-bold text-xl mb-4'>FitZone</p>
                <h2 className='font-bold md:w-4/12 text-4xl mb-6 overflow-hidden'>
                    Sweat, smile
                    and repeat
                </h2>
                <p className='mb-4'>Check out the most effective exercises</p>

            </div>
            <a href='#exercises-section' className='self-center md:self-auto sm:w-1/2 md:w-4/12 rounded bg-indigo-500 hover:bg-indigo-700 
                transition duration-300 text-indigo-50 px-4 py-2 text-center 
                uppercase shadow'>
                Explore exercises</a>
            <span className='hidden md:block w-full text-zinc-200 text-9xl font-bold mt-10'>Exercise</span>
            <div className="hero-right w-5/12 h-full hidden md:block absolute -top-20 right-12">
                <img className='w-full h-full object-cover object-top rounded-bl-3xl' src={HeroBannerImage} alt="HeroBanner image" />
            </div>
        </div>
    )
}
