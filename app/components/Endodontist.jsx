import { ovo } from '@/app/fonts';
import { assets, infoList } from '@/assets/assets';
import Image from 'next/image';
import YearsSince from './YearsSince';

const Endodontist = () => {
  return (
    <div
      id="endodontist"
      className="relative w-full px-[12%] pt-10 scroll-mt-6 md:scroll-mt-9"
    >
      <div className="w-[70%] border-t border-gray-300 mx-auto"></div>
      <h4 className={`text-center mt-10 mb-2 text-lg ${ovo.className}`}>
        VanEndo, <YearsSince startYear={2009} />
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>Endodontist</h2>

      <div className="flex w-full flex-col lg:flex-row  items-center justify-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.profile_img}
            alt="About Mahmoud Ektefaie"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="">
          <p className={`mb-10 max-w-2xl ${ovo.className}`}>
            I am an experienced Frontend Developer with over 4 years of
            professional expertise in the field.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover-light hover:transition-colors"
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold test-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Endodontist;
