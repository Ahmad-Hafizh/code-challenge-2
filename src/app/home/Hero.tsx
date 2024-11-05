import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full mt-20">
      <div className="top h-fit py-10 flex flex-col justify-start items-center lg:flex-row lg:justify-between lg:items-end border-b-2 gap-5 lg:gap-0">
        <div className="lg:w-[60%] h-full">
          <h1 className="font-black text-green-950 text-center text-3xl md:text-5xl lg:text-7xl lg:text-left xl:text-8xl uppercase">Connecting Farmer, Fisher & Buyers</h1>
        </div>
        <div className="lg:w-[40%] h-full flex flex-col gap-4 justify-center items-center lg:items-end lg:justify-end mb-4">
          <p className="text-center lg:text-right w-full md:w-[500px]">Directly linking farmers and fishermen with consumers, Gistara Geya Samasta Jaya ensures quality, sustainable produce and seafood from source to table.</p>
          <div className="flex gap-4">
            <Button href="/" className="text-white">
              Be our Buyer
            </Button>
            <Button href="/" className="bg-transparent border-2 border-green-950 text-green-950">
              Be our Supplier
            </Button>
          </div>
        </div>
      </div>
      <div className="bottom relative w-full h-[500px] lg:h-[700px] mt-10 rounded-xl overflow-hidden flex justify-center items-center">
        <Image src="/images/hero.jpg" width={1536} height={500} alt="hero image" className="object-cover w-full h-full " />
        <p className="absolute text-xl md:text-3xl lg:text-5xl text-white font-semibold">Gistara Geya Samasta Jaya</p>
      </div>
    </div>
  );
};

export default Hero;
