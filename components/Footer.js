import logo from '../public/techsavy-logo-white.png'
import Image from 'next/image'
import Link from 'next/link';
import { RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'
import { TechSavy } from '@/utils/data';
import Scrolln from './animation/Scrolln';

const Footer = () => {
    return (
        <footer className='zinc-bg py-10 px-10 md:px-32'>
            <div width='100%'>
            {/* <Scrolln width='100%'> */}

                <div className='container mx-auto flex flex-col md:flex-row justify-between md:gap-10 gap-0'>
                    <div className='flex flex-col  justify-between h-full gap-7'>
                        <Image
                            src={logo}
                            width={100}
                            height={50}
                            alt={TechSavy}
                        />
                        <div className=' text-lg items-center'>
                            <p className='mt-2'>NewYork, NY, 10001</p>
                        </div>
                    </div>
                    <div className='md:hidden py-5'>
                        <hr />
                    </div>
                    <div>
                        <div className='text-lg flex flex-col  gap-3 justify-between h-full '>
                            <Link href='/' className='nav-link-footer '> About</Link>
                            <Link href='/' className='nav-link-footer '> Our Model</Link>
                            <Link href='/services' className='nav-link-footer '> Our Services</Link>
                            <Link href='/' className='nav-link-footer '> Techsavy commerce</Link>
                        </div>
                    </div>
                    <div className='md:hidden py-5'>
                        <hr />
                    </div>
                    <div>
                        <div className=' text-lg flex  flex-col gap-3 justify-between h-full '>
                            <Link className='nav-link-footer ' href='/'> Insights</Link>
                            <Link className='nav-link-footer ' href='/about-us'> About us</Link>
                  

                            <Link href='/contact-us'> Contact us</Link>
                            <div className='flex justify-start items-center  md:justify-between lg:gap-3 lg:justify-start ml-1 gap-5 md:gap-3'>
                                <Link className='nav-link-footer ' href='/'> <RiLinkedinFill size={16} /> </Link>
                                <Link className='nav-link-footer ' href='/'> <BsInstagram size={13} /> </Link>
                                <Link className='nav-link-footer ' href='/'> <RiTwitterXFill size={13} /> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 text-xs flex flex-col sm:flex-row  gap-2 md:gap-0'>
                    <Link href='/' >&copy; TechSavy Group 2023</Link>
                    <p className='mx-6  divider'>|</p>
                    <Link href='/' > Privacy Notice</Link>
                    <p className='mx-6 divider'>|</p>
                    <Link href='/' > Cookie Settings</Link>
                    <p className='mx-6 divider'>|</p>
                    <Link href='/' > Careers</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer