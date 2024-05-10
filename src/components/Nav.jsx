import { headerLogo } from '../assets/images';

const Nav = () => {
  return (
    <header className="padding-x py-5 relative z-30 w-full bg-dark-gray">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo}
          alt="Logo"
          width={30}
          height={30}
          
          />

          
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">

            <li>
              <a className="font-nunito leading-normal text-lg font-bold text-white hover:text-hero2" 
                  href="#home">Home</a>
            </li>
            <li>
              <a className="font-nunito leading-normal text-lg font-bold text-white hover:text-hero2" 
                  href="#albums">Albums</a>
            </li>
            <li>
              <a className="font-nunito leading-normal text-lg font-bold text-white hover:text-hero2" 
                  href="#videos">Videos</a>
            </li>
            <li>
              <a className="font-nunito leading-normal text-lg font-bold text-white hover:text-hero2" 
                  href="#contact-us">Contact Us</a>
            </li>

        </ul>
      </nav>
    </header>
  )
}

export default Nav