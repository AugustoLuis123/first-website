
const Videos = () => {
  return (
    <section id="videos" className="py-20 px-10 bg-dark-gray max-container-no-margin">
      <div data-aos="fade-up">
        <h2 className="lg:px-20 text-4xl font-nunito font-bold bg-gradient-to-b from-hero1 to-hero3 bg-clip-text text-transparent">Videos</h2>
        <p className="pb-10 lg:px-20 text-lg text-white-400 font-poppins text-justify leading-relaxed">
          Dive into the latest music videos from The Weeknd. Explore his newest releases and iconic hits, all in one place. Experience the artistry and vision behind each captivating visual journey.
        </p>
        <h1 className="lg:px-20 mb-8 text-2xl font-nunito font-bold bg-gradient-to-b from-purple-600 to-fuchsia-800 bg-clip-text text-transparent">Latest Music Video</h1>
      </div>

      
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-full mb-8 flex-1 lg:ml-10" >
          <iframe 
            className="w-full aspect-video rounded-xl"
            src="https://www.youtube.com/embed/vt0i6nuqNEo" 
            title="The Weeknd, Madonna, Playboi Carti - Popular (Official Music Video)" 
            allowFullScreen
            data-aos="zoom-in"
          ></iframe>
        </div>
                
        <div className="flex-1/3 w-auto px-10" data-aos="zoom-in">
          <button href="https://www.youtube.com/channel/UC0WP5P-ufpRfjbNrmOWwLBQ" className="bg-hero3 border-hero3 px-7 py-4 border text-white text-lg text-center font-poppins font-semibold rounded-full hover:bg-hero2 hover:border-hero2 transition duration-200 ease-in-out">
            See More Videos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Videos;
