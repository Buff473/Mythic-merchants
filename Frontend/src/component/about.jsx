import React from 'react';

export const About = () => {
  return (
    <div className="relative flex flex-col text-[#333] min-h-screen">
      <div className="container block max-lg:m-auto  pt-10 px-4">
        <div className="lg:w-1/2  md:w-ful float-left lg:pl-24">
          <strong>
            <h1 className="text-4xl max-lg:text-center uppercase font-bold">About us</h1>
          </strong>
          <p className="text-lg max-lg:text-center mt-5">
            Welcome to the Mythic Merchant, the ultimate destination for all things quirky and downright impossible!
            At Mythic Merchant, we believe that the world is far too ordinary. That's why we curated a collection of extraordinary items that defy logic, challenge reality, and spark your imagination. Our story began with a simple dream to create a marketplace for the extraordinary. Tired of the boring ordinary life, our founders scoured the multiverse to bring back treasures that push the boundaries of what's possible.
          </p>
        </div>
        <div className="lg:w-2/5  md:w-full pb-10 h-3/4 float-right lg:pr-12 justify-center">
          <img
            src="images/about.jpg"
            alt="About Mythic Merchant"
            className="rounded-xl w-full h-full mt-5 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
