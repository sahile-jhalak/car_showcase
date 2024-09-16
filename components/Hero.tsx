'use client'
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
    const handleScroll=()=>{}
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 pddding-x'>
            <h1 className='hero__title'>
                Find Book, or rent a car - quickly and easily!
            </h1>
            <p className="hero__subtitle">
                Stream your car rental exprience with our effortless booking process.
            </p>
            <CustomButton 
                title='Explore cars'
                handleClick={handleScroll}
                containerStyles='bg-primary-blue text-white rounded-full mt-10'
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image
                    src='/hero.png'
                    alt='hero'
                    fill
                    className='object-contain'
                />
                </div>
                <div className='hero__image-overlay'/>
            
        </div>
    </div>
  )
}

export default Hero