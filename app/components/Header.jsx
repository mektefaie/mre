import { outfit, ovo } from '@/app/fonts';
import { assets } from '@/assets/assets';
import { motion } from 'motion/react';
import Image from 'next/image';
import { FaFileDownload } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa6';

const Header = () => {
  return (
    <div className="w-10/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col justify-start pt-32 items-center gap-4">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
      >
        <Image
          src={assets.profile_img}
          alt="Mahmoud Ektefaie"
          className="rounded-full w-48 shadow-lg"
        />
      </motion.div>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          stiffness: 100,
        }}
        viewport={{ once: true }}
        className={`flex items-center gap-2 text-xl md:text-2xl my-6 ${ovo.className}`}
      >
        Hi! I'm Mahmoud Ektefaie
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h2>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          stiffness: 100,
        }}
        viewport={{ once: true }}
        className={`text-3xl sm:text-4xl lg:text-6xl ${ovo.className}`}
      >
        endodontist, soccer referee, web developer & aspiring illustrator.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.7,
          stiffness: 100,
        }}
        viewport={{ once: true }}
        className={`max-w-2xl mx-auto ${ovo.className}`}
      >
        I wear many hats—fixing teeth, teaching dental students, reffing soccer
        games, and coding websites on the side. I also dabble in illustration
        when inspiration hits. Life's more fun when you don't fit in just one
        box.
      </motion.p>
      <div
        className={`flex flex-col sm:flex-row items-center gap-4 mt-4 ${outfit.className}`}
      >
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            stiffness: 100,
          }}
          viewport={{ once: true }}
          href="#contact"
          className="px-8 py-2 border border-black rounded-full bg-black text-white flex items-center gap-2"
        >
          Let's Connect <FaEnvelope className=" w-4 h-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.2,
            stiffness: 100,
          }}
          viewport={{ once: true }}
          href="/sample-resume.pdf"
          download
          className="px-8 py-2 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Download CV <FaFileDownload className=" w-4 h-4" />
        </motion.a>
      </div>
    </div>
  );
};
export default Header;
