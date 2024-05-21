import { hero1 } from '../assets/images';

const Hero = () => {
  return (
    <section id="home" className="w-full justify-center max-container-no-margin ">
        <div className="relative h-[475px] sm:h-[600px] lg:h-[600px] xl:h-[700px]  w-full " >
          <img 
              src={hero1} 
              alt="hero-theweeknd"
              className="absolute inset-0 w-full h-full object-cover "
            />
      <div className="absolute z-20 max-container-no-margin px-6 py-20 flex flex-col justify-center w-full h-full text-center bg-black bg-opacity-60" >
        <h1 className="text-4xl sm:text-7xl md:text-7xl lg:text-8xl bg-gradient-to-b from-hero1 via-hero2 to-hero3 bg-clip-text text-transparent font-bold font-poppins" data-aos="fade-up">
          THIS IS<br/> THE WEEKND
        </h1>
      </div>
    </div>

    </section>
  )
}

export default Hero