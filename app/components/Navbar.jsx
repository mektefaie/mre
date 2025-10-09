import { ovo } from '@/app/fonts';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaMoon,
} from 'react-icons/fa';
import SocialIcon from './SocialIcon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sideMenuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-70%] blur-3xl">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-6 lg:px-10 xl:px-[10%] py-1 flex items-center justify-between z-50 ${
          isScrolled ? 'bg-rose-50/90 backdrop-blur-md shadow-sm' : ''
        }`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt="site logo"
            className="w-22 md:w-24 lg:w-28 cursor-pointer md:mr-12 lg:mr-16"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-5 lg:gap-8 rounded-full px-8 md:px-10 lg:px-16 xl:px-22 py-1.5 transition-all duration-300 ease-in-out ${
            isScrolled ? '' : 'bg-white shadow-sm'
          } `}
        >
          <li>
            <a href="#endodontist" className={ovo.className}>
              Endodontist
            </a>
          </li>
          <li>
            <a href="#educator" className={ovo.className}>
              Educator
            </a>
          </li>
          <li>
            <a href="#referee" className={ovo.className}>
              Referee
            </a>
          </li>
          <li>
            <a href="#frontender" className={ovo.className}>
              Frontender
            </a>
          </li>
          <li>
            <a href="#illustrator" className={ovo.className}>
              Illustrator
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4 ml-2">
          <button>
            <FaMoon className="w-5 h-5 text-[#8b0835]" />
          </button>
          {/* <a
            href="#contact"
            className={`hidden lg:flex items-center gap-3 px-6 py-1 border border-grey-500 rounded-full ml-4 ${ovo.className}`}
          >
            Contact{' '}
            <Image src={assets.arrow_icon} alt="contact icon" className="w-3" />
          </a> */}

          <div className="flex items-center gap-3">
            <SocialIcon
              href="https://www.linkedin.com/in/ektefaie/"
              Icon={FaInstagramSquare}
              label="Instagram"
              className="text-gray-800 hover:text-rose-600 "
            />
            <SocialIcon
              href="https://www.linkedin.com/in/ektefaie/"
              Icon={FaLinkedin}
              label="LinkedIn"
              className="text-gray-800 hover:text-sky-700 "
            />
            <SocialIcon
              href="https://www.facebook.com/ektefaie"
              Icon={FaFacebook}
              label="Facebook"
              className="text-gray-800 hover:text-blue-600"
            />
            <SocialIcon
              href="https://github.com/mektefaie"
              Icon={FaGithub}
              label="GitHub"
              className="text-gray-800 hover:text-slate-600"
            />
          </div>
          <button className="block md:hidden ml-3" onClick={toggleMenu}>
            <Image src={assets.menu_black} alt="menu icon" className="w-5" />
          </button>
        </div>

        {/* mobile menu  */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col px-10 py-20 gap-4 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-200 shadow-lg transition-all duration-500 ease-in-out right-0 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="absolute top-6 right-6" onClick={toggleMenu}>
            <Image
              src={assets.close_black}
              alt="mobile menu icon"
              className="w-4 pt-3 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" className={ovo.className} onClick={toggleMenu}>
              ME
            </a>
          </li>
          <li>
            <a
              href="#endodontist"
              className={ovo.className}
              onClick={toggleMenu}
            >
              Endodontist
            </a>
          </li>
          <li>
            <a href="#educator" className={ovo.className} onClick={toggleMenu}>
              Educator
            </a>
          </li>
          <li>
            <a href="#referee" className={ovo.className} onClick={toggleMenu}>
              Referee
            </a>
          </li>
          <li>
            <a
              href="#frontender"
              className={ovo.className}
              onClick={toggleMenu}
            >
              Frontender
            </a>
          </li>
          <li>
            <a
              href="#illustrator"
              className={ovo.className}
              onClick={toggleMenu}
            >
              Illustrator
            </a>
          </li>
          <li>
            <a href="#contact" className={ovo.className} onClick={toggleMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
