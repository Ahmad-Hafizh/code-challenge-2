import React from 'react';
import Link from 'next/link';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="container mx-auto px-[5%] md:px-10 border-t-2 mt-20 py-10 flex items-center">
      <div className="w-[50%] flex flex-col gap-10">
        <div className="flex flex-col">
          <Link href="/" className="text-5xl text-green-950 font-black">
            GGSJ
          </Link>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-bold">Contact</p>
              <div className="flex flex-col">
                <Link href="/">Business@ggsj.store</Link>
                <Link href="/">+62 858-2498-2913</Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Reach Out</p>
              <div className="flex">
                <Link href="/">Instagram</Link>
                <Link href="/">Whatsapp</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Menu</p>
            <div className="flex flex-col">
              <Link href="/">about us</Link>
              <Link href="/">products</Link>
              <Link href="/">teams</Link>
              <Link href="/">faq</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[50vh] bg-green-950 rounded-xl text-white p-10">
        <div className="w-full h-full flex flex-col justify-between">
          <div>
            <p className="text-5xl">lets cooperate</p>
            <p>we will contact you as soon as possible</p>
          </div>
          <div className="flex flex-col">
            <input type="text" placeholder="name" className="bg-transparent border-b-2 border-white p-4" />
            <input type="text" placeholder="email" className="bg-transparent border-b-2 border-white p-4" />
          </div>
          <Button href="/" className="bg-white text-green-950">
            Send
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
