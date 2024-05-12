import { about1 } from '../assets/images';

const Aboutus = () => {
  return (
    <section className="py-20 px-10 bg-dark-gray max-container-no-margin">
      <div className="flex items-center max-lg:flex-col gap-10">
        <div className="flex-1 flex justify-center">
        <img 
              src={about1}
              width={"400px"}
              height={"400px"} 
              alt="about-theweeknd"
              className="rounded-lg" 
        />
        </div>
                
        <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-nunito font-bold bg-gradient-to-b from-hero1 to-hero3 bg-clip-text text-transparent">About</h2>
        <p className="text-lg lg:max-w-lg text-white-400 font-poppins text-justify leading-relaxed">
          Abel Makkonen Tesfaye, known as the Weeknd, is a Canadian singer-songwriter. Tesfaye began releasing music in 2009. The Weeknd has solidified his status as one of the most influential figures in contemporary pop and R&B music.
        </p>
        </div>

      </div>
    </section>
  )
}

export default Aboutus