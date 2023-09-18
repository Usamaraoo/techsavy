import CraftCard from "@/components/CraftCard"
import YellowDot from "@/components/YellowDot"
import Scrolln from "@/components/animation/Scrolln"
import { craftCardsData } from "@/utils/data"

const CraftsList = () => {
  return (
    <>
      <section className=' zinc-bg text-white  px-36'>
        <Scrolln>
          <div className='container mx-auto pb-14 pt-4'>
            <h1 className='text-[10px] color'>home  <span className="mx-2">{`//`}</span>   <span className='yellow-text font-bold '>Our Crafts</span>  </h1>
            <div className='text-5xl pt-8'>

              <h1 className='mt-4 font-[500]'>  Craft Excellence<YellowDot />
              </h1>

            </div>
            <p className='lg:w-6/12 mt-4'>
              We are the world’s largest performance marketing network, with over 3,000 experts in 68 offices in 48 markets. We offer a complete suite of crafts designed to deliver customer-centric performance marketing.
            </p>
          </div>
        </Scrolln>
        {/* crafts */}
        <Scrolln>

          <div className="lg:grid grid-cols-2 mt-16 mb-24 lg:gap-x-20 lg:gap-y-4">
            {craftCardsData && craftCardsData.map((craft, index) => {
              const { title, description } = craft
              return (
                <div key={index}>
                  <CraftCard {...craft} />
                </div>
              )
            })}
          </div>
        </Scrolln>

      </section>

    </>
  )
}

export default CraftsList
