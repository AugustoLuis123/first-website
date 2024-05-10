import { socialMedia } from "../constants"
import { footerLogo } from "../assets/images"

const Footer = () => {
  return (
    <footer className="relative py-8 padding-x bg-dark-gray w-full">
      <div className="flex justify-center items-center max-container-no-margin">
          <a>
            <img 
              src={footerLogo}
              width={35}
              height={35}
            />  
          </a>
      </div>
      
      <div className="flex justify-center items-center  gap-10 mt-5">
          {socialMedia.map((icon) => (
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <img 
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                  className="cursor-pointer"
              />
            </div>
            ))}
      </div> 
      
      <div className="flex justify-center items-center font-poppins text-white mt-5">
        <p>© Copyright. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer