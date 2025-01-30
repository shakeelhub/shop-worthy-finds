import React from "react";
import Hero from "../components/HeroSection";;
import Products from "../components/Products";
import Footer from "../components/Footer";

const Main = ({ isLoading }) => {
  return (
    <>
      <Hero isLoading={isLoading} />
      <Products isLoading={isLoading} />
      <Footer isLoading={isLoading}/>
    </>
  );
};

export default Main;
