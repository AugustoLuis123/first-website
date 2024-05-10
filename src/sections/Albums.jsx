import Carousel from '../components/Carousel';
import { albums } from '../constants';

const Albums = () => {
  return (
    <section id="albums" className="relative bg-black py-20 px-10 max-container-no-margin flex flex-col items-center">
      <div>
        <h2 className="lg:px-20 text-4xl font-nunito font-bold bg-gradient-to-b from-hero1 to-hero3 bg-clip-text text-transparent">Albums</h2>
        <p className="pb-10 lg:px-20 text-lg text-white-400 font-poppins text-justify leading-relaxed">
          Explore The Weeknd's musical journey through a curated collection of his iconic albums. Dive into his discography and experience the sounds that have captivated audiences worldwide.
        </p>
      </div>

      <div className="max-w-lg " >
        <Carousel>
          {albums.map((album) =>(
            <img src={album.imgURL} alt="image carousel" className="w-full h-full rounded-lg object-cover" />
            
          ))}
        </Carousel>
        </div>
    </section>
  )
}

export default Albums;