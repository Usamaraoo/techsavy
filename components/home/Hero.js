import NavHome from '../NavHome'
import ScrolIn from '../animation/Scrolln'


export const Hero = () => {
    return (
        <section className='relative zinc-bg lg:pb-32 pb-24  hm-hero  '>
            {/* overlay */}
            <div className=' overlay '></div>
            <div className=' mx-10 '>
                <ScrolIn width={"100%"}>
                    <NavHome />
                    <div className='container mx-auto  text-center mt-10 '>
                        <h1  className=' home-hero-title'>TechSavy Group</h1>
                        <p className='lg:text-3xl text-sm font-normal pt-4 flex justify-center gap-2'>Empowering Brands Digitally! <span className='animate-bounce dot-title'></span>  </p>
                    </div>
                </ScrolIn>
            </div>
        </section>
    )
}
