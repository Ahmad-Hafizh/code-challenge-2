import Button from '@/components/Button';
import React from 'react';

const AboutSection = () => {
  return (
    <div className="w-full h-full relative flex justify-start items-start gap-10 border-b-2 pb-10">
      <h2 className="text-5xl capitalize w-[50%] text-green-950  ">over 10 tons of commodities sended to buyers</h2>
      <div className="w-[50%] h-full flex flex-col gap-10">
        <p className="w-full"> We deliver top-quality agriculture Product and seafood, ensuring a seamless connection between local growers, fishers, and you—creating a truly exceptional shopping experience.</p>
        <Button href="/about" className="text-white">
          learn more
        </Button>
      </div>
    </div>
  );
};

export default AboutSection;

export const AboutSectionBento = () => {
  return (
    <div className="h-fit w-full mt-10">
      <div className="w-full grid grid-cols-3 h-[50vh] gap-4">
        <div className="row-span-2 w-full bg-gray-400 rounded-xl flex flex-col justify-center items-center p-4">
          <p>Our mission is to support eco-friendly practices while ensuring you receive the best quality products, straight from the source.</p>
        </div>
        <div className="w-full bg-gray-400 rounded-xl flex flex-col justify-center items-center p-4">
          <p>3+ years</p>
          <p>years of experiences</p>
        </div>
        <div className="w-full bg-gray-400 rounded-xl flex flex-col justify-center items-center p-4">
          <p>10</p>
          <p>supplier Companies Across the region</p>
        </div>
        <div className="w-full bg-gray-400 rounded-xl flex flex-col justify-center items-center p-4">
          <p>3,000</p>
          <p>Kg of Seafood Sended</p>
        </div>
        <div className="w-full bg-gray-400 rounded-xl flex flex-col justify-center items-center p-4">
          <p>4,000</p>
          <p>Kg of Agriculture Product Sended</p>
        </div>
      </div>
    </div>
  );
};
export const ValueType1 = () => {
  return (
    <div className="w-full h-fit mt-10 flex flex-col relative gap-10 border-t-2 pt-10">
      <h2 className="w-fit h-full text-5xl capitalize  text-green-950  ">we value our product</h2>
      <div className="cards flex justify-center items-start h-full gap-4">
        <div className="card h-fit w-full flex flex-col gap-4 p-2">
          <h3 className="text-3xl">Quality</h3>
          <p>We offer a high-quality selection of farm-fresh produce and seafood</p>
        </div>
        <div className="card h-fit w-full flex flex-col gap-4 p-2">
          <h3 className="text-3xl">Sustainability</h3>
          <p>We committed to sustainability by partnering with local farmers and fishermen who adhere to eco-friendly standards</p>
        </div>
        <div className="card h-fit w-full flex flex-col gap-4 p-2">
          <h3 className="text-3xl">Price</h3>
          <p>We offers a variety of fruits, vegetables, and seafood with competitive prices</p>
        </div>
        <div className="card h-fit w-full flex flex-col gap-4 p-2">
          <h3 className="text-3xl">Delivery</h3>
          <p>We offers quick, reliable delivery that keeps products fresh for both domestic and international shipping</p>
        </div>
      </div>
    </div>
  );
};
export const ValueType2 = () => {
  return (
    <div className="w-full h-fit mt-10  gap-0 relative border-b-2 hidden">
      <div className="w-[50%] h-fit  flex flex-col gap-4 pb-4 sticky top-1/2 ">
        <h2 className="w-fit h-full text-5xl capitalize  text-green-950  ">we value our product-</h2>
        <p className="text-transparent">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="cards w-[50%] h-full">
        <div className="card h-fit  flex flex-col gap-4 pb-4 border-b-2">
          <h3 className="text-5xl">Quality</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, commodi eos consequatur laborum nulla dolorem.</p>
        </div>
        <div className="card h-fit  flex flex-col gap-4 py-4 border-b-2">
          <h3 className="text-5xl">Sustainability</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, commodi eos consequatur laborum nulla dolorem.</p>
        </div>
        <div className="card h-fit  flex flex-col gap-4 py-4 border-b-2">
          <h3 className="text-5xl">Price</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, commodi eos consequatur laborum nulla dolorem.</p>
        </div>
        <div className="card h-fit  flex flex-col gap-4 py-4 ">
          <h3 className="text-5xl">Delivery</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, commodi eos consequatur laborum nulla dolorem.</p>
        </div>
      </div>
    </div>
  );
};
