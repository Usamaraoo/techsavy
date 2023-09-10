"use client"
import React from 'react'
import YellowDot from '../YellowDot'
import Fade from 'react-reveal/Fade';


export const Hero = () => {
    return (
        <section className='zinc-bg pb-32 pt-16  '>
            <div className='container mx-auto text-center px-8 md:px-0'>
                {/* <Fade left > */}
                <h1 className=' home-hero-title '>TechSavy Group</h1>
                {/* </Fade> */}
                {/* <Fade right > */}
                <p className='lg:text-3xl text-xl font-normal pt-4'>Empowering Brands Digitally! <YellowDot /> </p>
                {/* </Fade> */}

            </div>
        </section>
    )
}
