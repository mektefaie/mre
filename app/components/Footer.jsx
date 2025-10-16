import { assets } from '@/assets/assets';
import Image from 'next/image';
import SocialIcons from './sub/SocialIcons';

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-28 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          info@ektefaie.ca
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© {new Date().getFullYear()} DRe | All rights reserved.</p>
        {/* <ul className="flex items-center gap-5 justify-center mt-4 sm:mt-0">
          <li> */}
        <SocialIcons gap={10} />
        {/* </li>
        </ul> */}
      </div>
    </div>

    // <div
    //   id="illustrator"
    //   className="w-full px-[12%] py-10 scroll-mt-20 bg-rose-900"
    // >
    //   <footer className={`text-center text-md text-rose-50 ${ovo.className}`}>
    //     © {new Date().getFullYear()} | Designed & developed by{' '}
    //     <a
    //       href="#top"
    //       className={`text-rose-50 hover:underline underline underline-offset-3 ${ovo.className}`}
    //     >
    //       DRe
    //     </a>
    //   </footer>
    // </div>
  );
};
export default Footer;
