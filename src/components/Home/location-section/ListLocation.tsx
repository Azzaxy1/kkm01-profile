import React from "react";
import Image from "next/image";
import images from "@/assets/image";

const ListLocation = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-5">
      <article className="flex flex-col justify-center items-center">
        <Image
          src={images.LocationIcon}
          alt="Location Icon"
          width={100}
          className="w-[180px]"
        />
        <p className="text-sm sm:text-base md:text-lg font-normal">
          Desa Panyabrangan - Kecamatan Cikeusal
        </p>
      </article>
      <div className="flex justify-center">
        <Image
          src={images.Maps}
          alt="Maps Image"
          width={100}
          className="w-[200px]"
        />
      </div>
      <article className="flex justify-center  flex-col items-center">
        <Image
          src={images.Calender}
          alt="Calender"
          width={100}
          className="w-[180px]"
        />
        <h4 className="text-sm sm:text-base md:text-lg font-normal">
          1 Agustus - 5 September 2024
        </h4>
      </article>
    </div>
  );
};

export default ListLocation;
