'use client';

import { ovo } from '@/app/fonts';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useState } from 'react';

const Contact = () => {
  // using Web3Forms
  // https://docs.web3forms.com/how-to-guides/static-site-generators/next.js
  const [resultMessage, setResultMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: 'd0962fee-fed0-4a5b-83c1-046ef95fd1c4',
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setResultMessage(
        <>
          🎉 Thanks for reaching out — your message just landed in my inbox!
          <br />
          I'll get back to you soon (unless your message was just to say hi —
          then hi right back! 👋)
        </>
      );
    } else {
      setResultMessage(
        <>
          😕 Uh-oh… something went wrong and your message didn't make it
          through.
          <br />
          Try again in a bit — or blame the internet gremlins and refresh the
          page. 🧌🔌
        </>
      );
    }
  }

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-3 sm:py-18 scroll-mt-6 md:scroll-mt-9 bg-rose-50"
    >
      <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
        Connect with <b className={`${ovo.className}`}>ME</b>
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>Get in touch</h2>
      <p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className}`}
      >
        I'd love to hear from you — whether it's about my work, a cool project
        idea, or just to say hi. Feel free to reach out anytime!
      </p>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="email"
            required
          />
        </div>
        <textarea
          rows="4"
          placeholder="Enter your message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          name="message"
          required
        ></textarea>
        <button
          type="submit"
          className={`py-2 px-8 w-max flex items-center justify-between gap-3 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 ${ovo.className}`}
        >
          Send Message{' '}
          <Image
            src={assets.right_arrow_white}
            alt="send icon"
            className="w-4"
          />
        </button>

        {/* ✅ Updated to use state safely */}
        {resultMessage && (
          <p className="mt-4 text-center text-sm text-gray-700">
            {resultMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
