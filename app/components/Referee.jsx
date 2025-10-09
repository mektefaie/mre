import { ovo } from '@/app/fonts';
import { soccerList } from '@/assets/assets';
import Image from 'next/image';
import YearsSince from './YearsSince';

const Referee = () => {
  return (
    <div
      id="referee"
      className="w-full relative px-[12%] py-10 scroll-mt-6 md:scroll-mt-9"
    >
      <div className="w-[70%] border-t border-gray-300 mx-auto"></div>
      <h4 className={`text-center mt-10 mb-2 text-lg ${ovo.className}`}>
        B.C. Soccer, <YearsSince startYear={2013} />
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>
        Soccer Referee
      </h2>

      <p
        className={`text-center max-w-3xl mx-auto mt-5 mb-12 ${ovo.className}`}
      >
        I am a regional soccer referee in British columbia, Canada. I have been
        an active soccer referee since 2013.
      </p>
      <div className="flex w-full flex-col lg:flex-row  items-center justify-center gap-20 my-20">
        <div className="">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {soccerList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover-light hover:transition-colors"
              >
                <Image src={icon} alt={title} className="w-9 mt-2" />
                <h3 className="my-4 font-semibold test-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={'/mahmoud-referee.jpg'}
            width={350}
            height={350}
            alt="Mahmoud Ektefaie in soccer referee uniform"
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};
export default Referee;
