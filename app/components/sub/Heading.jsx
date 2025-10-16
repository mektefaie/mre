import { ovo } from '@/app/fonts';
import YearsSince from './YearsSince';

const Heading = ({ location, title, startYear }) => {
  return (
    <div className="w-[70%] border-t border-gray-300 mx-auto">
      <h4 className={`text-center mt-10 mb-2 text-lg ${ovo.className}`}>
        {location}, <YearsSince startYear={startYear} />
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>{title}</h2>
    </div>
  );
};
export default Heading;
