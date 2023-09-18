import YellowDot from '@/components/YellowDot'
import Image from 'next/image'
import Scrolln from '@/components/animation/Scrolln'
import { BiRightArrowAlt } from 'react-icons/bi'

const stategy = () => {
  return (
    <>
      <section className=' zinc-bg text-white  px-36'>
        <Scrolln>
          <div className='container mx-auto pb-14 pt-4'>
            <h1 className='text-[10px] color'>home <span className="mx-2">{`//`}</span>  Our Crafts  <span className="mx-2">{`//`}</span>   <span className='yellow-text font-bold '>Crafts One</span>  </h1>
            <div className='text-5xl pt-8'>

              <h1 className='mt-4 font-[500]'>  Craft One<YellowDot />
              </h1>

            </div>
            <p className='lg:w-6/12 mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam
            </p>
          </div>
        </Scrolln>
      </section>
      <section className='section  py-1'>
        <Scrolln width='100%'>
          <div className='container mx-auto'>
            <h1 style={{ lineHeight: "75px" }} className=' text-center lg:text-5xl text-4xl zinc-text lg:w-8/12  font-bold mx-auto '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae <YellowDot />
            </h1>
          </div>

        </Scrolln>
        <Scrolln width='100%'>

          <div className='container mx-auto flex justify-center gap-9 items-center mt-10'>
            <div className='w-6/12 flex justify-end'>
              <Image
                src={'/assets/examImg.jpg'}
                height={500}
                width={400}
                alt='seo'
              />
            </div>

            <div>
              <div className='lg:w-8/12 '>
                <p className='text-lg'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae
                </p>
                <p className='font-medium'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae
                </p>
              </div>

            </div>
          </div>
        </Scrolln>

      </section >
      <section className='zinc-bg text-center  py-24'>
        <Scrolln>
          <div className='container mx-auto'>
            <h1 className='text-4xl font-[600]'>
              Get in touch today<YellowDot />
            </h1>
            <p className='text-xl w-11/12  md:w-7/12  mx-auto mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur</p>
            <div className='flex justify-center mt-8'>
              <button className='btn mt-4 yellow-bg text-white text-lg flex justify-center items-center gap-2 group' >Get In Touch <BiRightArrowAlt size={25} className='transition-all duration-700 group-hover:translate-x-3' /></button>
            </div>
          </div>
        </Scrolln>
      </section>
    </>

  )
}

export default stategy
