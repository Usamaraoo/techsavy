import YellowDot from '@/components/YellowDot'
import { Hero } from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Image from 'next/image'
import { BiRightArrowAlt } from 'react-icons/bi'


export default function Home() {
  return (
    <main className="">
      <Hero />
      <section className='text-center section py-16'>
        <div className='container mx-auto'>
          <h1 className='text-7xl zinc-text w-7/12 font-medium mx-auto '>
            We are obsessed with Customer Flow <YellowDot />
          </h1>
          <p className='text-xl   w-7/12  mx-auto mt-10'>The continuous movement of your customers along the path to purchase is vital to your business success. Our purpose is to help you build and accelerate Customer Flow.</p>
          <div className='flex justify-center mt-8'>
            <button className='btn mt-4 yellow-bg text-white text-lg flex justify-center items-center gap-2' >Find out more <BiRightArrowAlt /></button>
          </div>
        </div>
      </section>
      <section className='zinc-bg  py-20 h-full'>
        <div className='container gap-10 flex mx-auto  justify-center'>
          <div className='w-4/12 '>
            <h1 className='text-3xl font-bold'>How the FLOW OS can help your business</h1>
            <p className='mt-6 leading-8'> Reorganizing performance marketing to focus on Customer Flow unlocks a wealth of opportunities to drive real business results.</p>
            <button className='btn text-sm mt-10 yellow-bg text-white text-lg flex justify-center items-center gap-2' >Find out more <BiRightArrowAlt /></button>
          </div>
          <div className='flex flex-col justify-around gap-0'>
            <p>Imporve sales +</p>
            <p>Drive lead generation </p>
            <p>Engage in the mid-funnel +</p>
            <p>Bridge brand and performance efforts +</p>
          </div>
          <div className='flex flex-col justify-around gap-0'>
            <p>Increase ROI or ROAS +</p>
            <p>Grow eCommerce + </p>
            <p>Lower cost per acquisition +</p>
            <p>Lower cost per acquisition +</p>
          </div>
        </div>
      </section>
      <Services />

      <section className='section text-zinc py-24'>
        <div className='container mx-auto text-center '>
          <h1 className='text-4xl font-[600] zinc-text'>Performance marketing at a global scale<YellowDot /> </h1>
          <div className='flex justify-center my-20 gap-14'>
            <div>
              <h1 className='text-8xl font-[600] grad-text'>68</h1>
              <p className='zinc-text text-xl'>Offices in 48 countries</p>
            </div>
            <div>
              <h1 className='text-8xl font-[600] grad-text'>3k</h1>
              <p className='zinc-text text-xl'>Digital marketing experts</p>
            </div>
            <div>
              <h1 className='text-8xl font-[600] grad-text'>$3bn</h1>
              <p className='zinc-text text-xl'>Digital spend</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
