import Image from 'next/image'
import seoIcon from '../../public/assets/service-icons/SEO_Icon.webp'
import svg from '../../public/u.svg'
import { BiRightArrowAlt } from 'react-icons/bi'
import YellowDot from '../yellowDot'

const Services = () => {
    return (
        <section className=' section'>
            <div className='container mx-auto text-center'>
                <h1 className='text-3xl font-bold zinc-text'>Our Crafts <YellowDot/> </h1>
                <div className='grid grid-cols-4 gap-14 mt-10'>

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
                    <button className='btn text-sm mt-10 yellow-bg text-white text-lg flex justify-center items-center gap-2' >Our Crafts<BiRightArrowAlt /></button>
                </div>
            </div>
        </section>
    )
}

export default Services
