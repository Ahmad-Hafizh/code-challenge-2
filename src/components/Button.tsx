import Link from 'next/link';
import React, { FC } from 'react';

interface IButton {
  href: string;
  // text: string;
  className?: string;
  children?: React.ReactNode;
}
const Button: FC<IButton> = ({ href, className, children }) => {
  return (
    <button type="button" className={`${className}  px-3 py-1 rounded-full bg-green-950  w-fit  `}>
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default Button;
