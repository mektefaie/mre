import { outfit, ovo } from '@/app/fonts';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { FaFileDownload } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa6';

const Header = () => {
  return (
    <div className="w-10/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col justify-start pt-32 items-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="Mahmoud Ektefaie"
          className="rounded-full w-48 shadow-lg"
        />
      </div>
      <h2
        className={`flex items-center gap-2 text-xl md:text-2xl mb-6 ${ovo.className}`}
      >
        Hi! I'm{' '}
        <span
          className={`first-letter:text-2xl first-letter:font-semibold first-letter:text-gray-800 ${ovo.className}`}
        >
          Mahmoud
        </span>
        <span
          className={`first-letter:text-2xl first-letter:font-semibold first-letter:text-gray-800 ${ovo.className}`}
        >
          R.
        </span>
        <span
          className={`first-letter:text-2xl first-letter:font-semibold first-letter:text-gray-800 ${ovo.className}`}
        >
          Ektefaie
        </span>
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h2>
      <h1 className={`text-3xl sm:text-4xl lg:text-6xl ${ovo.className}`}>
        endodontist, soccer referee, web developer & aspiring illustrator.
      </h1>
      <p className={`max-w-2xl mx-auto ${ovo.className}`}>
        I wear many hats—fixing teeth, teaching students, reffing soccer games,
        and coding websites on the side. I also dabble in illustration when
        inspiration hits. Life's more fun when you don't fit in just one box.
      </p>
      <div
        className={`flex flex-col sm:flex-row items-center gap-4 mt-4 ${outfit.className}`}
      >
        <a
          href="#contact"
          className="px-8 py-2 border border-black rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me <FaEnvelope className=" w-4 h-4" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-8 py-2 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Res&uuml;m&eacute; <FaFileDownload className=" w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
export default Header;
