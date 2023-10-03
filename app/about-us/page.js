import Scrolln from '@/components/animation/Scrolln'
import { BiRightArrowAlt } from 'react-icons/bi'
import Link from 'next/link';

const page = () => {
    return (
        <>
            <section className=' zinc-bg text-white py-8'>
                <Scrolln>
                    <div className='container mx-auto lg:px-36 md:px-20 px-10 pb-14 pt-4'>
                        <h1 className='text-[10px] color'><Link href='/' className='hover:underline'>home</Link> <span className="mx-2">{`//`}</span> <span className='yellow-text font-bold'>about</span>  </h1>
                        <div className='text-5xl pt-8 lg:w-8/12 w-full lg:text-left md:text-left text-center'>
                            <h1 style={{ lineHeight: '55px' }} className='dot-title'>
                                Empowering Success in the Digital Realm</h1>
                        </div>
                        <p className='lg:w-6/12 mt-4 lg:text-left md:text-left text-center'>
                            At TechSavy Group, we are your strategic partners on the journey to achieving online excellence. We
                            don&#39;t just provide digital solutions; we empower your success in the digital realm.
                        </p>
                    </div>
                </Scrolln>
            </section>
            <section className='section lg:py-22 md:py-20 py-4 lg:px-0 px-10'>
                <Scrolln width='100%'>
                    <div className='container mx-auto'>
                        <h1 className='dot-title lg:leading-[90px] text-center lg:text-7xl text-4xl zinc-text mx-auto lg:w-8/12  font-medium mx-auto '>
                            Catalyzing your digital dreams into reality,
                            one innovation at a time
                        </h1>
                    </div>
                </Scrolln>
            </section>
            <section className='zinc-bg text-center  py-20'>
                <Scrolln width='100%'>
                    <div className='container mx-auto'>
                        <h1 className='dot-title text-4xl font-[600] lg:w-8/12 mx-auto md:w-10/12 w-full'>
                            Crafting Seamless Customer Journeys, Igniting Your Business Success 
                        </h1>
                        <p className='text-xl w-11/12  md:w-7/12  mx-auto mt-10'>At TechSavy Group, we specialize in crafting seamless customer journeys that ignite your
                            business success. Our purpose is to keep your customers flowing smoothly along the path to
                            purchase, ensuring your business thrives in the digital landscape. Discover how we can

                            transform your customer flow and drive exceptional results.</p>
                        <div className='flex justify-center mt-8'>
                            <button className='btn mt-4 yellow-bg text-white text-lg flex justify-center items-center gap-2 group' >LEARN MORE<BiRightArrowAlt size={25} className='transition-all duration-700 group-hover:translate-x-3' /></button>
                        </div>
                    </div>
                </Scrolln>
            </section>
        </>

    )
}

export default page
