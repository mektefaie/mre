'use client';

import Contact from './components/Contact';
import Educator from './components/Educator';
import Endodontist from './components/Endodontist';
import Footer from './components/Footer';
import Frontender from './components/Frontender';
import Header from './components/Header';
import Illustrator from './components/Illustrator';
import Navbar from './components/Navbar';
import Referee from './components/Referee';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Endodontist />
      <Educator />
      <Referee />
      <Frontender />
      <Illustrator />
      <Contact />
      <Footer />
    </>
  );
}
