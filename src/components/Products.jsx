import React, { useState, useEffect } from "react";
import item1 from "../assets/i1.png";
import item2 from "../assets/i2.jpeg";
import item3 from "../assets/i3.jpeg";
import item4 from "../assets/i4.jpeg";
import item5 from "../assets/i5.jpeg";
import item6 from "../assets/i6.jpeg";
import item7 from "../assets/i7.jpeg";
import item8 from "../assets/i8.jpeg";
import item9 from "../assets/i9.jpeg";
import search from "../assets/search.png";

const productData = [
  { 
    id: 1, 
    name: "Rubber Bath Mat",
    image: item1,
    link: "https://www.amazon.in/gp/product/B0B9KB26BH/ref=ox_sc_act_image_3?smid=A12M9W7LRNHY1A&th=1"
  },
  {
    id: 2,
    name: "Spiral Charger Cable Protector", 
    image: item2,
    link: "https://www.amazon.in/gp/product/B07T6LPYQZ/ref=ox_sc_act_title_1?smid=A1WYWER0W24N8S&th=1"
  },
  {
    id: 3, 
    name: "Electronic Cleaner Kit",
    image: item3,
    link: "https://www.amazon.in/gp/product/B0D2XZQ92R/ref=ox_sc_act_image_2?smid=A12TS1O421BPXA&th=1"
  },
  {
    id: 4,
    name: "Bucket Spin Mop",
    image: item4,
    link: "https://www.amazon.in/gp/product/B07LDKFM2Y/ref=ox_sc_act_image_12?smid=AJ6SIZC8YQDZX&th=1"
  },
  {
    id: 5,
    name: "PTron bassbuds duo pro tws",
    image: item5, 
    link: "https://www.amazon.in/gp/product/B0CNZFG4M6/ref=ox_sc_act_image_10?smid=A1WYWER0W24N8S&th=1"
  },
  {
    id: 6,
    name: "Trimmer for Men",
    image: item6,
    link: "https://www.amazon.in/gp/product/B0DQGYWFK1/ref=ox_sc_act_image_4?smid=A3QN6GA16ZUI8H&th=1"
  },
  {
    id: 7,
    name: "Smart Night Lamp",
    image: item7,
    link: "https://www.amazon.in/gp/product/B08YWZ62QZ/ref=ox_sc_act_image_8?smid=AP6OKJXLEUXML&th=1"
  },
  {
    id: 8,
    name: "Gaming Mouse",
    image: item8,
    link: "https://www.amazon.in/gp/product/B0CLS6F44T/ref=ox_sc_act_title_9?smid=A2GTG1HPYW8M2P&psc=1"
  },
  {
    id: 9,
    name: "Foldable Laptop Table",
    image: item9,
    link: "https://www.amazon.in/gp/product/B0BP71RWGF/ref=ox_sc_act_title_11?smid=AJ6SIZC8YQDZX&th=1"
  }
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (searchTerm === "") {
        setAnimate(true);
        setTimeout(() => {
          setAnimate(false);
          setCurrentPlaceholder((prevIndex) => (prevIndex + 1) % productData.length);
        }, 500);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [searchTerm]);

  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen w-full">
      <div className="relative w-full min-h-screen p-8">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-black via-[#2d1414] to-[#d4a088]"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradientMove 5s ease infinite",
          }}
        />
        <div className="relative z-10">
          <div className="max-w-5xl mx-auto mb-8">
            <div className="relative h-12">
              <img
                src={search}
                alt="Search Icon"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-20"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-full pl-12 pr-4 rounded-lg bg-black/20 border border-gray-500 
                         text-white placeholder-transparent focus:outline-none focus:ring-2 
                         focus:ring-[#d4a088] backdrop-blur-sm"
              />
              {searchTerm === "" && (
                <div
                  className={`absolute left-12 top-1/2 -translate-y-1/2 text-gray-400 
                             flex items-center transition-all duration-500 pointer-events-none
                             ${animate ? "opacity-0 -translate-y-full" : "opacity-100"}`}
                >
                  {`Try Searching "${productData[currentPlaceholder].name}"`}
                </div>
              )}
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <a
                key={product.id}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden 
                         border border-gray-700 hover:border-[#d4a088] transition-all 
                         duration-300 hover:shadow-lg hover:shadow-[#d4a088]/20"
              >
                <div className="p-3 sm:p-4">
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-2 sm:mt-4 text-center text-gray-200 text-sm sm:text-base font-medium">
                    {product.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center text-gray-300 mt-8">
              No products found matching "{searchTerm}"
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Products;