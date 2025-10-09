import { ovo } from '@/app/fonts';

const Footer = () => {
  return (
    <div
      id="illustrator"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-rose-900"
    >
      <footer className={`text-center text-md text-rose-50 ${ovo.className}`}>
        © {new Date().getFullYear()} | Designed & developed by{' '}
        <a
          href="#top"
          className={`text-rose-50 hover:underline underline underline-offset-3 ${ovo.className}`}
        >
          DRe
        </a>
      </footer>
    </div>
  );
};
export default Footer;
