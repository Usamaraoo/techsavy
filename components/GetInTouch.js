import React from 'react'
import Scrolln from './animation/Scrolln'
import YellowDot from './YellowDot'
import { BiRightArrowAlt } from 'react-icons/bi'
import Link from 'next/link';

const GetInTouch = () => {
    return (
        <section className='zinc-bg text-center  py-24'>
            <Scrolln width='100%'>
                <div className='container mx-auto'>
                    <h1 className='text-4xl font-[600]'>
                        Get in touch today<YellowDot />
                    </h1>
                    <p className='text-xl w-11/12  md:w-7/12  mx-auto mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur</p>
                    <div className='flex justify-center mt-8'>
                        <Link href='/' className='btn mt-4 yellow-bg text-white text-lg flex justify-center items-center gap-2 group' >Get In Touch <BiRightArrowAlt size={25} className='transition-all duration-700 group-hover:translate-x-3' /></Link>
                    </div>
                </div>
            </Scrolln>
        </section>
    )
}

export default GetInTouch
