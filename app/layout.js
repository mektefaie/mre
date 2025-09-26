import { outfit } from './fonts';
import './globals.css';

export const metadata = {
  title: 'Portfolio | Mahmoud Ektefaie',
  description:
    "Welcome to my portfolio website! I'm Mahmoud Ektefaie, a passionate software developer specializing in web development and design. Explore my projects, skills, and experience as you navigate through my site. Let's build something amazing together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
