import Image from 'next/image'
import logo from '../public/techsavy-logo.png'
import { RxHamburgerMenu } from 'react-icons/rx';
import { TechSavy } from '@/utils/data';

const Navbar = () => {
    return (
        <div className='zinc-bg'>
            <div className=' container mx-auto flex justify-between items-center'>
                <Image
                    src={logo}
                    width={130}
                    height={50}
                    alt={TechSavy}
                />
                <div>
                    <RxHamburgerMenu size={25} className='text-white cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Navbar