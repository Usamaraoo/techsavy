"use client"

import Image from 'next/image'
import { BiRightArrowAlt } from 'react-icons/bi'
import YellowDot from '../YellowDot'
import Scrolln from '../animation/Scrolln'
import Link from 'next/link';
import CraftCard from '../CraftCard'
import { craftCardsData } from '@/utils/data'

const Services = () => {
    return (
        <Scrolln width='100%'>
            <section data-aos="flip-left" className=' section pt-20'>
                <div className='container mx-auto text-center'>
                    <h1 className='text-2xl font-bold zinc-text'>Our Services <YellowDot /> </h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10 md:gap-4 py-8 lg:gap-14 mt-10 w-8/12 mx-auto'>
                        {craftCardsData && craftCardsData.map((craft, index) => {
                            const { title, link, img } = craft
                            return (
                                <Link key={index} href={`${link}`} className='px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:font-bold  shadow-md rounded  '>
                                    <Image
                                        className='mx-auto'
                                        src={img}
                                        height={50}
                                        width={50}
                                        alt='Seo'
                                    />
                                    <p className='zinc-text mt-6 text-sm font-medium'>{title}</p>
                                </Link>
                            )
                        })}
                    </div>
                    <div className='flex justify-center'>
                        <Link href='/services' className='btn  text-sm mt-10 yellow-bg text-white mt-6 text-sm font-medium flex justify-center items-center gap-2 group' >Our Services<BiRightArrowAlt size={24} className='text-xl transition-all duration-700 group-translate-x-3' /></Link>
                    </div>
                </div>
            </section>
        </Scrolln>

    )
}

export default Services
