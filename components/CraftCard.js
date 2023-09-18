import Link from 'next/link'
import { BsPlus } from 'react-icons/bs'
const CraftCard = ({ title, description,link }) => {
    return (
        <div className='bg-white px-5 py-8 rounded relative overflow-hidden h-full  ' >
            <div className='absolute top-0 left-0 bottom-0 w-1 yellow-bg'></div>
            <Link href={`${link}`}>
                <h2 className='transition-all duration-1000 hover:scale-105 yellow-text text-xl  font-bold'>
                    {title}
                </h2>
            </Link>

            <p className='text-black mt-4'>
                {description}
            </p>
            <Link href={`${link}`} className='mt-4 block'>
                <BsPlus className='yellow-text font-[800]  cursor-pointer transition-all duration-1000 hover:rotate-90 hover:scale-125' size={20} />
            </Link>
        </div >
    )
}

export default CraftCard
