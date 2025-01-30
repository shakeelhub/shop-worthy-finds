import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1e] py-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center cursor-pointer">
        ShopWorthyFinds
        <ShoppingBag className="text-white ml-2" size={24} />
      </h2>
      <div className="flex justify-center px-4 md:px-0">
        <p className="text-gray-400 text-sm mt-4 md:mt-2 w-full sm:w-2/3 lg:w-1/3 text-center cursor-pointer leading-relaxed">
          As an affiliate, I earn commissions on qualifying purchases made through the links and recommendations provided, which helps support the ongoing operation and maintenance of this platform.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
