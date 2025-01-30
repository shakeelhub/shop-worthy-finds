import React from 'react';
import { ShoppingBag, Mail, Youtube, Instagram } from 'lucide-react';
import HeroImg from '../assets/HeroImg.png';

const Hero = ({ isLoading }) => {
 const handleExploreClick = () => {
   window.scrollBy({
     top: window.innerHeight,
     behavior: 'smooth',
   });
 };

 return (
   <div
     className={`relative h-screen bg-cover bg-center transition-opacity duration-1000 ${
       isLoading ? 'opacity-0' : 'opacity-100'
     }`}
     style={{
       backgroundImage: `url(${HeroImg})`,
     }}
   >
     <div className="absolute top-8 left-8 z-20 flex items-center">
       <span className="text-white flex space-x-2 text-xl sm:text-2xl font-bold tracking-wide hover:text-gray-300 transition-colors cursor-pointer max-w-xs sm:max-w-none">
         Shop Worthy Finds
         <ShoppingBag />
       </span>
     </div>

     {/* <div className="absolute top-1/3 -translate-y-12 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 px-4 py-2 rounded-full text-sm sm:text-base font-medium flex items-center space-x-2">
       <span className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse relative">
         <span className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-75"></span>
       </span>
       <span className='text-white'>New picks added daily</span>
     </div> */}

     <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
       <h1 className="text-4xl pt-7 sm:text-5xl md:text-6xl font-bold max-w-4xl mx-auto">
         Discover curated premium finds with{' '}
         <span
           className="text-transparent bg-clip-text animate-gradient"
           style={{
             backgroundImage: 'linear-gradient(to bottom, #9ca3af, #ffffff)',
             backgroundSize: '100% 200%',
             animation: 'gradient 2s ease-in-out infinite',
           }}
         >
           Shop Worthy
         </span>
         Insights
       </h1>

       <p className="mt-4 text-lg sm:text-xl max-w-2xl">
         We hunt down the best products so you don't have to. Expert reviews,
         amazing deals, and trusted recommendations.
       </p>

       <div className="mt-1">
         <button
           className="btn mt-3"
           onClick={handleExploreClick}
         >
           Explore Top Picks
         </button>

         <div className="flex justify-center space-x-4 mt-4">
         <a
             href="mailto:shopworthyfinds@gmail.com"
             className="text-white hover:text-gray-300 transform hover:rotate-180 transition-all duration-500 ease-in-out"
           >
             <Mail size={24} />
           </a>
           <a
             href="https://youtube.com/@shopworthyfinds?si=Nr6k0IeFERQ6q9Yn"
             target="_blank"
             rel="noopener noreferrer"
             className="text-white hover:text-gray-300 transform hover:rotate-180 transition-all duration-500 ease-in-out"
           >
             <Youtube size={24} />
           </a>
           <a
             href="https://www.instagram.com/shopworthy_finds?igsh=MXZnOWwzaHluY2E0MA=="
             target="_blank"
             rel="noopener noreferrer"
             className="text-white hover:text-gray-300 transform hover:rotate-180 transition-all duration-500 ease-in-out"
           >
             <Instagram size={24} />
           </a>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Hero;