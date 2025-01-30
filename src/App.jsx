import React, { useState, useEffect } from "react";
import Main from "./pages/Main";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideUp(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader Screen */}
      {isLoading && (
        <div
          className={`fixed inset-0 bg-black w-full min-h-screen transition-transform duration-1000 ${
            slideUp ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          {/* Radial Gradient + Grid Lines */}
          <div
            className="absolute inset-0 bg-black"
            style={{
              backgroundImage: `
                radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 45%, rgba(0, 0, 0, 0.8) 75%, rgba(0, 0, 0, 0.95) 85%, black 100%),
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100% 100%, 40px 40px, 40px 40px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat, repeat, repeat",
            }}
          ></div>

          {/* Main Content */}
          <div className="relative flex flex-col items-center justify-center h-screen z-10 px-4 sm:px-8 md:px-12">
            {/* Animated Title */}
            <h1 className="flex text-4xl sm:text-5xl md:text-7xl font-bold text-white gap-4 sm:gap-5">
              <span className="animate-bounce-delay font-extrabold">Shop</span>
              <span className="animate-bounce-delay [animation-delay:0.66s] font-extrabold">
                Worthy
              </span>
              <span className="animate-bounce-delay [animation-delay:1.33s] font-extrabold">
                Finds
              </span>
            </h1>

            {/* Gradient Loader */}
            <div className="w-3/4 sm:w-1/2 md:w-1/4 h-2 sm:h-2.5 mt-6 bg-gray-200 rounded overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-400 animate-load"></div>
            </div>
          </div>
        </div>
      )}

      {/* Main Section */}
      <Main isLoading={isLoading} />
    </>
  );
}

export default App;
