"use client"

import Image from 'next/image'
import seoIcon from '../../public/assets/service-icons/SEO_Icon.webp'
import svg from '../../public/u.svg'
import { BiRightArrowAlt } from 'react-icons/bi'
import YellowDot from '../YellowDot'
import Scrolln from '../animation/Scrolln'

const Services = () => {
    return (
        <Scrolln width='100%'>

            <section data-aos="flip-left" className=' section pt-24'>
                <div className='container mx-auto text-center'>
                    <h1 className='text-3xl font-bold zinc-text'>Our Crafts <YellowDot /> </h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10 md:gap-4 lg:gap-14 mt-10 w-8/12 mx-auto'>

                        <div className='px-6 py-4 hover:shadow-md   '>
                            <Image
                                className='mx-auto'
                                src={'/u.svg'}
                                height={50}
                                width={50}
                                alt='seo'
                            />
                            <p className='zinc-text text-lg'>Strategy</p>
                        </div>
                        <div className='px-6 py-4 hover:shadow-md   '>
                            <Image
                                className='mx-auto'
                                src={'/u.svg'}
                                height={50}
                                width={50}
                                alt='seo'
                            />
                            <p className='zinc-text text-lg'>Search</p>
                        </div>
                        <div className='px-6 py-4 hover:shadow-md   '>
                            <Image
                                className='mx-auto'
                                src={'/u.svg'}
                                height={50}
                                width={50}
                                alt='seo'
                            />
                            <p className='zinc-text text-lg'>Social</p>
                        </div>
                        <div className='px-6 py-4 hover:shadow-md   '>
                            <Image
                                className='mx-auto'
                                src={'/u.svg'}
                                height={50}
                                width={50}
                                alt='seo'
                            />
                            <p className='zinc-text text-lg'>Seo</p>
                        </div>
                        <div className='px-6 py-4 hover:shadow-md   '>
                            <Image
                                className='mx-auto'
                                src={'/u.svg'}
                                height={50}
                                width={50}
                                alt='seo'
                            />
                            <p className='zinc-text text-lg'>eCommerece</p>
                        </div>
                        <div className='px-6 py-4 hover:shadow-md   '>
                            <Image
                                className='mx-auto'
                                src={'/u.svg'}
                                height={50}
                                width={50}
                                alt='seo'
                            />
                            <p className='zinc-text text-lg'>Creative</p>
                        </div>
                        <div className='px-6 py-4 hover:shadow-md   '>
                            <Image
                                className='mx-auto'
                                src={'/u.svg'}
                                height={50}
                                width={50}
                                alt='seo'
                            />
                            <p className='zinc-text text-lg'>CRO</p>
                        </div>
                        <div className='px-6 py-4 hover:shadow-md   '>
                            <Image
                                className='mx-auto'
                                src={'/u.svg'}
                                height={50}
                                width={50}
                                alt='seo'
                            />
                            <p className='zinc-text text-lg'>Analytics</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='btn text-sm mt-10 yellow-bg text-white text-lg flex justify-center items-center gap-2 group' >Our Crafts<BiRightArrowAlt size={24} className='text-xl transition-all duration-700 group-hover:translate-x-3' /></button>
                    </div>
                </div>
            </section>
        </Scrolln>

    )
}

export default Services
