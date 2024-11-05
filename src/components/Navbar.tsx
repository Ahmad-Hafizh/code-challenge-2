'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full h-fit py-5 px-[5%] lg:px-10 fixed top-0 z-40 bg-white border-b-2 grid lg:grid-cols-3 grid-cols-2">
        <div className="logo flex ">
          <Link href="/" className="text-xl text-green-950 font-black">
            GGSJ
          </Link>
        </div>
        <div className="menu-desktop hidden lg:flex gap-4 items-center justify-center ">
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/teams">Teams</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="cta-lang hidden lg:flex gap-2 justify-end">
          <div className="flex gap-2">
            <button>EN</button>
            <button>ID</button>
          </div>
          <Button href="/" className="text-white ">
            Contact Us
          </Button>
        </div>
        <div className="menu-mobile lg:hidden flex items-center gap-4 justify-end">
          <div className="flex gap-2">
            <button>EN</button>
            <button>ID</button>
          </div>
          <button type="button" onClick={() => setIsMenuOpen(true)}>
            Menu
          </button>
        </div>
      </nav>
      <div className="mobile-menu-open w-full h-screen bg-green-950 fixed z-50 px-[5%] flex-col justify-start items-start" style={isMenuOpen ? { display: 'flex' } : { display: 'none' }}>
        <div className="w-full flex justify-between items-center text-white">
          <div className="logo">
            <Link href="/" className="text-xl font-black">
              GGSJ
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="navbar-mobile flex w-full justify-between h-20 items-center">
              <div className="close w-full">
                <button type="button" onClick={() => setIsMenuOpen(false)}>
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul className="text-5xl text-white font-semibold flex flex-col justify-start items-start mt-5 gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/teams">Teams</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/faq">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
