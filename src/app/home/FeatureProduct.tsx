import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';

const FeatureProduct = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-start items-start gap-10">
        <div className="w-full flex justify-between">
          <h2 className="text-5xl">Fetured Products</h2>
          <Button href="/products" className="text-white ">
            see all Product
          </Button>
        </div>

        <div className="wrapper w-full flex justify-between items-center text-xl">
          <div className="card w-full h-fit flex flex-col justify-center items-center gap-4">
            <Image src="/images/product/1.jpg" alt="" width={200} height={200} className="rounded-full shadow-lg" />
            <p>Tuna</p>
          </div>
          <div className="card w-full h-fit flex flex-col justify-center items-center gap-4">
            <Image src="/images/product/2.jpg" alt="" width={200} height={200} className="rounded-full shadow-lg" />
            <p>Salmon</p>
          </div>
          <div className="card w-full h-fit flex flex-col justify-center items-center gap-4">
            <Image src="/images/product/3.jpg" alt="" width={200} height={200} className="rounded-full shadow-lg" />
            <p>Cabbage</p>
          </div>
          <div className="card w-full h-fit flex flex-col justify-center items-center gap-4">
            <Image src="/images/product/4.jpg" alt="" width={200} height={200} className="rounded-full shadow-lg" />

            <p>Peanut</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
