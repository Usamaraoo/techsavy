import YellowDot from '@/components/YellowDot'
import Scrolln from '@/components/animation/Scrolln'
import { BiRightArrowAlt } from 'react-icons/bi'
import Link from 'next/link';

const page = () => {
    return (
        <>
            <section className=' zinc-bg text-white'>
                <Scrolln>
                    <div className='container mx-auto px-36 pb-14 pt-4'>
                        <h1 className='text-[10px] color'><Link href='/' className='hover:underline'>home</Link> <span className="mx-2">{`//`}</span> <span className='yellow-text font-bold'>about</span>  </h1>
                        <div className='text-5xl pt-8'>
                            <h1 className=''>
                                Reinventing </h1>
                            <h1 className='mt-4'>  Performance Marketing<YellowDot />
                            </h1>

                        </div>
                        <p className='lg:w-6/12 mt-4'>
                            We are the world’s largest performance marketing network, with over 3,000 experts in 68 offices in 48 markets. We offer a complete suite of crafts designed to deliver customer-centric performance marketing.
                        </p>
                    </div>
                </Scrolln>
            </section>
            <section className='section py-24'>
                <Scrolln>
                    <div className='container mx-auto'>
                        <h1 className='lg:leading-[84px] text-center lg:text-7xl text-4xl zinc-text lg:w-8/12  font-medium mx-auto '>
                            We are the Performance Marketing Agency of
                            Mediabrands<YellowDot />
                        </h1>
                    </div>
                </Scrolln>
            </section>
            <section className='zinc-bg text-center  py-24'>
                <Scrolln>
                    <div className='container mx-auto'>
                        <h1 className='text-4xl font-[600]'>
                            How can we help improve your Customer Flow <YellowDot />
                        </h1>
                        <p className='text-xl w-11/12  md:w-7/12  mx-auto mt-10'>The continuous movement of your customers along the path to purchase is vital to your business success. Our purpose is to help you build and accelerate Customer Flow.</p>
                        <div className='flex justify-center mt-8'>
                            <button className='btn mt-4 yellow-bg text-white text-lg flex justify-center items-center gap-2 group' >Find out more <BiRightArrowAlt size={25} className='transition-all duration-700 group-hover:translate-x-3' /></button>
                        </div>
                    </div>
                </Scrolln>
            </section>
        </>

    )
}

export default page
