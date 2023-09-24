import Scrolln from "@/components/animation/Scrolln"
import Image from "next/image";
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi'

const Page = () => {
  return (
    <>
      <section className=' zinc-bg text-white py-8'>
        <Scrolln width="100%">
          <div className='container mx-auto lg:px-36 md:px-20 px-10 pb-14 pt-4'>
            <h1 className='text-[10px] color'><Link href='/' className='hover:underline'>home</Link> <span className="mx-2">{`//`}</span> <span className='yellow-text font-bold'>contact us</span>  </h1>
            <div className='text-5xl pt-8 lg:w-8/12 w-full lg:text-left md:text-left text-center'>
              <h1 style={{ lineHeight: '55px' }}>
                Empowering Success in the Digital Realm</h1>
            </div>
            <p className='lg:w-6/12 mt-4 lg:text-left md:text-left text-center'>
              At TechSavy Group, we are your strategic partners on the journey to achieving online excellence. We
              don&#39;t just provide digital solutions; we empower your success in the digital realm.
            </p>
          </div>
        </Scrolln>
      </section>
      <section className="section py-20">
        <Scrolln width="100%" >

          <div className="container mx-auto lg:px-10 md:flex" >
            <div className="lg:w-6/12 w-full hidden md:block ">
              <Image
                className="mx-auto"
                src={'/assets/examImg.jpg'}
                height={500}
                width={400}
                alt='seo'
              />
            </div>
            <div className=" lg:w-6/12 w-full px-10 ">
              <h1 className="text-2xl font-bold text-center md:text-left">Contact Us</h1>
              <form className="mt-2">
                <div className="flex flex-col  py-2">
                  <labe className=" py-2 ml-2 text-xs text-gray-700 font-bold ">Email</labe>
                  <input type="Email" className="rounded px-5 py-2 border lg:w-8/12 " placeholder="Email" />
                </div>
                <div className="flex flex-col py-2 ">
                  <labe className=" py-2 text-xs ml-2 text-gray-700 font-bold ">Subject</labe>

                  <input className="rounded px-5 py-2 border lg:w-8/12 " placeholder="Subject" />
                </div>
                <div className="flex flex-col py-2 ">
                  <labe className=" py-2 text-xs ml-2 text-gray-700 font-bold ">Query</labe>
                  <textarea rows={4} type="text" className="rounded px-5 py-2 border lg:w-8/12 " placeholder="Query" />
                </div>
                <div className=" flex justify-center">

                  <button className='btn  lg:mt-10 mt-5 yellow-bg text-white  text-sm  md:text-lg flex  justify-center items-center gap-2 group ' >Send  <BiRightArrowAlt size={22} className='transition-all duration-700 group-hover:translate-x-3' /></button>
                </div>

              </form>
            </div>

          </div>
        </Scrolln>

      </section>
    </>

  )
}


export function generateMetadata({params}){
  return({
    title:'Contact Us',
    description:"Feel free to reach out to us"
  })
}

export default Page
