import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center bg-opacity-10 py-20  ">
    <div className="container mx-auto flex justify-around h-full">
      {/* text */}
      <div className="flex flex-col justify-center">
        <div className="font-semibold flex items-center uppercase text-white">
          <div className="w-10 h-[2px] mr-3 bg-white " ></div >UP TO 50% OFF
        </div>
        <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4 text-white">EVERYTHING YOU NEED,<br />
        <span className="font-light">AVAILABLE HERE</span></h1>
        <Link to={'/product'} className='self-start uppercase font-bold border-b-2  text-white border-white hover:border-blue-500 text-[20px] md:text-[30px] hover:text-blue-500'>SHOP NOW!</Link>
      </div>
    </div>
  </section>
  );
};

export default Hero;
