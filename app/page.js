import { Hero } from '@/components/home/Hero'
import Image from 'next/image'
import { BiRightArrowAlt } from 'react-icons/bi'

export default function Home() {
  return (
    <main className="">
      <Hero />

      <section className='text-center section py-16'>
        <div>
          <h1 className='text-7xl zinc-text w-6/12 font-medium mx-auto '>
            We are obsessed with Customer Flow<span className='text-7xl text-yellow-400 font-extrabold'> .</span>
          </h1>
          <p className='text-xl   w-7/12  mx-auto mt-10'>The continuous movement of your customers along the path to purchase is vital to your business success. Our purpose is to help you build and accelerate Customer Flow.</p>
          <div className='flex justify-center mt-8'>
            <button className='btn mt-4 yellow-bg text-white text-lg flex justify-center items-center gap-2' >Find out more <BiRightArrowAlt /></button>
          </div>
        </div>
      </section>
    </main>
  )
}
