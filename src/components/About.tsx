import React from "react";
import { MdArrowForward } from 'react-icons/md';

const About = () => {
  return (
    <>
      <div className="py-16">
        <div className="flex flex-row justify-center align-middle text-[#d0d0d0]">
          {/* left box start  */}
          <div className="left-box w-1/2">
            <div className="h-32 mt-10">
              <p className="text-[#808080]">(01)</p>
              <p>About Us</p>
            </div>
            <div className="w-[60%] py-10 text-justify text-[#969595]">
              We Ardently Strive To Envapsulate life's Most Precious Moments,
              Weaving A Tapestry Of Artistry And A Hint Of Enchanting Magic With
              The Timeless Essence Of The Human Experience.
            </div>
          </div>
          {/* right box start  */}
          <div className="right-box w-1/2">
            <article className=" text-[40px] mt-10  mb-5 leading-snug text-[#808080]">
              <span className="text-[#e7e7e7]">Photography</span> is driven by a deep passion for <span className="text-[#e7e7e7]"> capturing life's </span> most
              <span className="text-[#e7e7e7]"> precious moments </span> with artistry and a touch of magic.
            </article>
            <div className="buttons flex flex-row">
              <button className="capitalize border-2 border-[#8f8f8f] rounded-[50px] px-6 py-2 hover:bg-[#808080] hover:text-black hover:border-[#808080]">Learn More </button>
              <button className="bg-white rounded-[20px] w-10 h-10 flex flex-row items-center justify-center rotate-[-45deg]"> <MdArrowForward size={24} color="#000000" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
