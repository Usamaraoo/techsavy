import CraftCard from "@/components/CraftCard"
import Scrolln from "@/components/animation/Scrolln"
import { craftCardsData } from "@/utils/data"
import Link from 'next/link';

export const metadata = {
  title: "Services || TechSavy Group",
  description:
    "We are the world’s largest performance marketing network, with over 3,000 experts in 68 offices in 48 markets. We offer a complete suite of crafts designed to deliver customer-centric performance marketing.",
};

const CraftsList = () => {
  return (
    <>
      <section className=' zinc-bg text-white lg:px-36 md:px-20 px-10 pb-14 pt-8'>
        <Scrolln>
          <div className='container mx-auto pb-14 pt-4'>
            <h1 className='text-[10px] color'><Link href='/' className='hover:underline'>home</Link>  <span className="mx-2">{`//`}</span>   <span className='yellow-text font-bold '>Our Services</span>  </h1>
            <div className='text-5xl pt-8'>
              <h1 className='dot-title mt-4 font-[500]'>  Services Excellence  
              </h1>
            </div>
            <p className='lg:w-6/12 mt-4'>
              We are the world’s largest performance marketing network, with over 3,000 experts in 68 offices in 48 markets. We offer a complete suite of crafts designed to deliver customer-centric performance marketing.
            </p>
          </div>
        </Scrolln>
        {/* crafts */}

        <div className="lg:grid grid-cols-2  md:grid-col-2 mt-16 mb-24 lg:gap-x-20 lg:gap-y-4">
          {craftCardsData && craftCardsData.map((craft, index) => {
            const { title, description } = craft
            return (
              <div className="mb-10 lg:mb-0 " key={index}>
                <CraftCard {...craft} />
              </div>
            )
          })}
        </div>

      </section>

    </>
  )
}

export default CraftsList
