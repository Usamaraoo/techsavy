"use client"
import { RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'
import Image from 'next/image'
import logo from '../public/techsavy-logo.png'
import { RxHamburgerMenu } from 'react-icons/rx';
import { TechSavy } from '@/utils/data';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';
import {HiMenuAlt3} from 'react-icons/hi'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='zinc-bg overflow-hidden  '>
            <div className=' container px-8 md:px-0 mx-auto flex justify-between items-center'>
                <Image
                    src={logo}
                    width={130}
                    height={50}
                    alt={TechSavy}
                />
                <div>
                    <HiMenuAlt3 onClick={() => setOpen(!open)} size={30} className='text-white cursor-pointer transition-all duration-1000 hover:-skew-y-12 hover:scale-125' />
                </div>
            </div>

            {/* sidebar */}
            <div className={` side-bar fixed lg:w-3/12 w-6/12  transition-all duration-1000   ${open ? 'translate-x-0 ' : '  translate-x-[30rem]'} bg-white zinc-text top-0 bottom-0 right-0  px-4 sm:px-10 z-20`}>
                <AiOutlineClose onClick={() => setOpen(!open)} className='my-6 cursor-pointer' />

                <div className='text-xl flex mt-24 flex-col gap-6'>
                    <Link href={'/'} className={` nav-link  `}>Home</Link>
                    <Link href={'/'} className={` nav-link  `}>Our Model</Link>
                    <Link href={'/'}  className={` nav-link  `}>Our Crafs</Link>
                    <Link href={'/'} className={` nav-link  `}>About Us</Link>
                    <Link href={'/'} className='nav-link  transition-all duration-700 '>Careers</Link>


                    <div>
                        <Link href={'/'} className='nav-link '>Contact Us</Link>
                        <div className='flex justify-start gap-4 mt-4 ml-6'>
                            <Link href='/'> <RiLinkedinFill size={16} /> </Link>
                            <Link href='/'> <BsInstagram size={16} /> </Link>
                            <Link href='/'> <RiTwitterXFill size={16} /> </Link>
                        </div>
                    </div>
                </div>
              
                {/* top right */}
                {/* <Image className='absolute -top-5 right-3' src={logo} width={100}
                    height={30}
                    alt={TechSavy} /> */}
                {/* bottom right */}
                <Image className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={logo} width={100}
                    height={30}
                    alt={TechSavy} />
            </div>
            {/* sidebar overlay */}
            {open && <div onClick={() => setOpen(false)} className=' absolute top-0 bottom-0 left-0 right-0  z-10'></div>}
        </nav>
    )
}

export default Navbar