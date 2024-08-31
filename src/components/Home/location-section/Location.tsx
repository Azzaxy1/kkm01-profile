import React from "react";
import ListLocation from "./ListLocation";

const LocationSection = () => {
  return (
    <div className="relative text-center md:py-16 px-6 py-16 lg:px-16 2xl:px-72 bg-background">
      <h1 className="text-3xl  sm:text-4xl mb-6 font-medium text-secondary">
        Lokasi Penempatan
      </h1>
      <ListLocation />
      <div className="">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-[400px] hidden md:block"
        >
          <path
            fill="#15803d"
            d="M31,-21.3C43.2,-18.9,58.1,-9.4,60.6,2.5C63.1,14.4,53.1,28.8,41,39.3C28.8,49.9,14.4,56.7,4,52.7C-6.4,48.7,-12.8,33.9,-28.9,23.3C-44.9,12.8,-70.7,6.4,-71,-0.2C-71.2,-6.8,-45.8,-13.6,-29.7,-16C-13.6,-18.4,-6.8,-16.4,1.3,-17.7C9.4,-19.1,18.9,-23.7,31,-21.3Z"
            transform="translate(-5 20)"
          />
        </svg>
      </div>
      <div>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 w-[400px] hidden md:block"
        >
          <path
            fill="#15803d"
            d="M26.8,-34.4C31.7,-21.8,30.8,-10.9,28.6,-2.1C26.5,6.6,23.2,13.2,18.2,29.6C13.2,45.9,6.6,71.9,-0.8,72.7C-8.3,73.5,-16.5,49.1,-32.3,32.8C-48,16.5,-71.2,8.3,-70.5,0.7C-69.8,-6.8,-45.2,-13.7,-29.4,-26.3C-13.7,-38.9,-6.8,-57.3,2,-59.3C10.9,-61.3,21.8,-47,26.8,-34.4Z"
            transform="translate(200 100)"
          />
        </svg>
      </div>
    </div>
  );
};

export default LocationSection;
