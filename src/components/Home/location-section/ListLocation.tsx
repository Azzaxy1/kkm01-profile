import React from "react";
import LocationIcon from "@/assets/2.png";
import Image from "next/image";
import Maps from "@/assets/maps1.jpg";
import Calender from "@/assets/calender.png";
import { motion } from "framer-motion";

const ListLocation = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-5">
      <article className="flex flex-col justify-center items-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <Image
            src={LocationIcon}
            alt="Location Icon"
            width={100}
            className="w-[180px]"
          />
        </motion.div>
        <p className="text-sm sm:text-base md:text-lg font-normal">
          Desa Panyabrangan - Kecamatan Cikeusal
        </p>
      </article>
      <motion.div
        className="flex justify-center"
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <Image src={Maps} alt="Maps Image" width={100} className="w-[200px]" />
      </motion.div>
      <article className="flex justify-center z-20 flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <Image
            src={Calender}
            alt="Calender"
            width={100}
            className="w-[180px]"
          />
        </motion.div>
        <h4 className="text-sm sm:text-base md:text-lg font-normal">
          1 Agustus - 5 September 2024
        </h4>
      </article>
    </div>
  );
};

export default ListLocation;
