import logo from '../public/techsavy-logo.png'
import Image from 'next/image'
import Link from 'next/link';
import { RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'
import { TechSavy } from '@/utils/data';

const Footer = () => {
    return (
        <footer className='zinc-bg py-20 px-32'>
            <div className='container mx-auto flex justify-between'>
                <div className='flex flex-col justify-between h-full gap-6'>
                    <Image
                        src={logo}
                        width={110}
                        height={50}
                        alt={TechSavy}
                    />
                    <div className=' text-lg items-center'>
                        <p>Global Headquarter</p>
                        <p className='mt-2'>100 West 33rd Street New York NY, 10001</p>
                    </div>
                </div>
                <div>
                    <div className='text-lg flex flex-col justify-between h-full gap-6'>
                        <Link href='/'> About</Link>
                        <Link href='/'> Our Model</Link>
                        <Link href='/'> Our Crafts</Link>
                        <Link href='/'> Techsavy commerce</Link>
                    </div>
                </div>
                <div>
                    <div className=' text-lg flex flex-col justify-between h-full gap-6'>
                        <Link href='/'> Insights</Link>
                        <Link href='/'> Join us</Link>
                        <Link href='/'> Contact us</Link>
                        <div className='flex justify-between'>
                            <Link href='/'> <RiLinkedinFill /> </Link>
                            <Link href='/'> <BsInstagram /> </Link>
                            <Link href='/'> <RiTwitterXFill /> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer