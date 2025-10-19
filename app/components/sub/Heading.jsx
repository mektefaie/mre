import { ovo } from '@/app/fonts';
import { motion } from 'motion/react';
import YearsSince from './YearsSince';

const Heading = ({ location, title, startYear }) => {
  return (
    <div className="w-[70%] py-8 border-t border-gray-300 mx-auto">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className={`text-center mt-10 mb-2 text-lg ${ovo.className}`}
      >
        {location}, <YearsSince startYear={startYear} />
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={`text-center text-5xl ${ovo.className}`}
      >
        {title}
      </motion.h2>
    </div>
  );
};
export default Heading;
