const Contact = () => {
  return (
    <section id="contact-us" className="py-20 px-10 bg-dark-gray max-container-no-margin flex justify-between items-center max-lg:flex-col gap-10">
      <div data-aos="fade-up">
        <h2 className="lg:px-20 text-4xl font-nunito font-bold bg-gradient-to-b from-hero1 to-hero3 bg-clip-text text-transparent ">
          Get Updates and Join the XO Community
        </h2>
      </div>
      
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-white rounded-full" data-aos="fade-up">
        <input type="text"
        placeholder="example@email.com"
        className="input bg-transparent text-white"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
        <a href="/" className="bg-hero3 border-hero3 px-7 py-4 border text-white text-md text-center font-poppins font-bold rounded-full hover:bg-hero2 hover:border-hero2 transition duration-200 ease-in-out w-full">
            Sign Up
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact