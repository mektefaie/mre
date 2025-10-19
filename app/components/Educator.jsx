import { ovo } from '@/app/fonts';
import { assets, serviceData } from '@/assets/assets';
import { motion } from 'motion/react';
import Image from 'next/image';
import Heading from './sub/Heading';

const Educator = () => {
  return (
    <motion.div
      id="educator"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="relative w-full min-h-screen px-[12%] pt-10 scroll-mt-6 md:scroll-mt-9 "
    >
      <Heading
        location={'UBC Dentistry'}
        title={'Clinical Associate Professor'}
        startYear={2009}
      />
      <p
        className={`text-center max-w-3xl mx-auto mt-5 mb-12 ${ovo.className}`}
      >
        I am a Clinical Associate Professor at the University of British
        Columbia, Canada, where I teach both undergraduate and graduate-level
        courses and provide clinical supervision during patient care.
      </p>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover-light hover:transition-colors"
          >
            <Image src={icon} alt="" className="w-12" />
            <h3 className="text-lg font-medium tracking-wider my-4 text-gray-700">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a
              href="{link}"
              className="flex items-center gap-2 text-sm text-rose-800 mt-5"
            >
              Read more{' '}
              <Image src={assets.right_arrow} className="w-4" alt="" />{' '}
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default Educator;
