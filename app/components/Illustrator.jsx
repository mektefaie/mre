import { motion } from 'motion/react';
import Image from 'next/image';
import Heading from './sub/Heading';

const Illustrator = () => {
  return (
    <div
      id="illustrator"
      className="relative w-full min-h-screen px-[12%] pt-10 scroll-mt-6 md:scroll-mt-9 "
    >
      <Heading
        location={'In Training'}
        title={'Biomedical Illustrator'}
        startYear={2025}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.3 }}
        className="w-full mx-auto  overflow-hidden py-10 sm:w-lg "
      >
        <Image
          src="/training.jpg"
          width={300}
          height={300}
          alt="In Training"
          className="w-full rounded-3xl object-cover shadow-md"
        />
      </motion.div>
    </div>
  );
};
export default Illustrator;
