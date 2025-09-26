import { ovo } from '@/app/fonts';
import YearsSince from './YearsSince';

const Referee = () => {
  return (
    <div
      id="referee"
      className="w-full relative px-[12%] py-10 scroll-mt-6 md:scroll-mt-9"
    >
      <div className="w-[70%] border-t border-gray-300 mx-auto"></div>
      <h4 className={`text-center mt-10 mb-2 text-lg ${ovo.className}`}>
        BC Soccer, <YearsSince startYear={2013} />
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>
        Soccer Referee
      </h2>
    </div>
  );
};
export default Referee;
