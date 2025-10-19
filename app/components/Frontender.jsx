import { ovo } from '@/app/fonts';
import { assets, toolsData, workData } from '@/assets/assets';
import { motion } from 'motion/react';
import Image from 'next/image';
import Heading from './sub/Heading';

const Frontender = () => {
  return (
    <motion.div
      id="frontender"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="relative w-full min-h-screen px-[12%] pt-10 scroll-mt-6 md:scroll-mt-9 "
    >
      <Heading
        location={'Freelancer'}
        title={'Web Designer & Developer'}
        startYear={2021}
      />
      <p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className}`}
      >
        Explore a curated collection of projects that highlight my expertise in
        front-end development and user-focused design.
      </p>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-7 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border border-gray-200"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-rose-100 w-10/12 rounded-md border border-gray-400 absolute bottom-5 left-1/2 -translate-x-1/2 pt-1 pb-2 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                {/* <p className="text-sm text-gray-700">{project.description}</p> */}
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-amber-300 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4 className={`my-6 text-gray-700 ${ovo.className}`}>Tools I use</h4>
      <ul className="flex items-center gap-3 sm:gap-5">
        {toolsData.map((tool, index) => (
          <li
            key={index}
            className="flex items-center justify-center w-12 sm:w-14 aspect-square border-[0.5px] border-gray-400 p-2 rounded-lg cursor-pointer hover-light hover:transition-colors"
          >
            <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
export default Frontender;
