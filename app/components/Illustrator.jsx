import { ovo } from '@/app/fonts';
import YearsSince from './YearsSince';

const Illustrator = () => {
  return (
    <div
      id="illustrator"
      className="relative w-full px-[12%] py-10 scroll-mt-6 md:scroll-mt-9 "
    >
      <div className="w-[70%] border-t border-gray-300 mx-auto"></div>
      <h4 className={`text-center mt-10 mb-2 text-lg ${ovo.className}`}>
        In Training, <YearsSince startYear={2025} />
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>
        Biomedical Illustrator
      </h2>
    </div>
  );
};
export default Illustrator;
