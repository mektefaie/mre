import { ovo } from '@/app/fonts';
import SocialIcons from './sub/SocialIcons';

const Footer = () => {
  return (
    <div className="w-full px-[12%] pt-12 pb-14 sm:p-y-12 bg-rose-900">
      <footer
        className={`text-center flex flex-col sm:flex-row items-center justify-between text-md  text-rose-50 ${ovo.className} space-y-4 sm:space-y-0`}
      >
        <span className={`${ovo.className}`}>
          © {new Date().getFullYear()} Ektefaie.ca | All rights reserved.{' '}
        </span>
        <SocialIcons size={18} gap={13} />
      </footer>
    </div>
  );
};
export default Footer;
