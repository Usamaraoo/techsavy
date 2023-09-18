"use client"

import Image from 'next/image'
import { BiRightArrowAlt } from 'react-icons/bi'
import YellowDot from '../YellowDot'
import Scrolln from '../animation/Scrolln'
import Link from 'next/link';

const Services = () => {
    return (
        <Scrolln width='100%'>

            <section data-aos="flip-left" className=' section pt-20'>
                <div className='container mx-auto text-center'>
                    <h1 className='text-3xl font-bold zinc-text'>Our Services <YellowDot /> </h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10 md:gap-4 py-8 lg:gap-14 mt-10 w-8/12 mx-auto'>

                        <Link href='/services/seo' className='px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:font-bold  shadow-md rounded  '>
                            <Image
                                className='mx-auto'
                                src={'/assets/service-icons/seo.png'}
                                height={50}
                                width={50}
                                alt='Seo'
                            />
                            <p className='zinc-text mt-6 text-sm font-medium'>SEO</p>
                        </Link>
                        <Link href='/services/media-buying' className='px-8 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:font-bold py-6  shadow-md  rounded '>
                            <Image
                                className='mx-auto'
                                src={'/assets/service-icons/Ppc.png'}
                                height={50}
                                width={50}
                                alt='Media Buying'
                            />
                            <p className='zinc-text mt-6 text-sm font-medium'>Media Buying</p>
                        </Link>
                        <Link href='/services/ui-ux' className='px-8 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:font-bold py-6  shadow-md   '>
                            <Image
                                className='mx-auto'
                                src={'/assets/service-icons/uiux.png'}
                                height={50}
                                width={50}
                                alt='UI-UX'
                            />
                            <p className='zinc-text mt-6 text-sm font-medium'>UI/UX</p>
                        </Link>
                        <Link href='/services/social-media-marketing' className='px-8 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:font-bold py-6  shadow-md   '>
                            <Image
                                className='mx-auto'
                                src={'/assets/service-icons/Social-media-marketing.png'}
                                height={50}
                                width={50}
                                alt='Social Media Marketing'
                            />
                            <p className='zinc-text mt-6 text-sm font-medium'>Social Media Marketing</p>
                        </Link>
                        <Link href='/services/web-development' className='px-8 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:font-bold py-6  shadow-md   '>
                            <Image
                                className='mx-auto'
                                src={'/assets/service-icons/Web-development.png'}
                                height={50}
                                width={50}
                                alt='Web Development'
                            />
                            <p className='zinc-text mt-6 text-sm font-medium'>Web Development</p>
                        </Link>
                        <Link href='/services/content-writing' className='px-8 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:font-bold py-6  shadow-md   '>
                            <Image
                                className='mx-auto'
                                src={'/assets/service-icons/Content-writing.png'}
                                height={50}
                                width={50}
                                alt='Content Writing'
                            />
                            <p className='zinc-text mt-6 text-sm font-medium'>Content Writing</p>
                        </Link>
                        <Link href='/services/graphic-designing' className='px-8 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:font-bold py-6  shadow-md   '>
                            <Image
                                className='mx-auto'
                                src={'/assets/service-icons/Graphic-designing.png'}
                                height={50}
                                width={50}
                                alt='Graphic Designing'
                            />
                            <p className='zinc-text mt-6 text-sm font-medium'>Graphic Designing</p>
                        </Link>
                        <Link href='/services/email-marketing' className='px-8 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:font-bold py-6  shadow-md   '>
                            <Image
                                className='mx-auto'
                                src={'/assets/service-icons/Email-Marketing.png'}
                                height={50}
                                width={50}
                                alt='Email-Marketing'
                            />
                            <p className='zinc-text mt-6 text-sm font-medium'>Email Marketing</p>
                        </Link>
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
