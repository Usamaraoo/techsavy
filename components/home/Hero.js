import YellowDot from '../YellowDot'
import ScrolIn from '../animation/Scrolln'


export const Hero = () => {
    return (
        <section className='zinc-bg pb-32 pt-16  '>
            <div className='container mx-auto text-center '>
                <ScrolIn width={"100%"}>
                    <h1 data-aos="fade-down" className=' home-hero-title'>TechSavy Group</h1>
                    <p className='text-3xl font-normal pt-4'>Empowering Brands Digitally! <YellowDot /> </p>
                </ScrolIn>

            </div>
        </section>
    )
}
