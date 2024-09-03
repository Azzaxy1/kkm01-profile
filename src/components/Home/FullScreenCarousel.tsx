import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "@/assets/images/kantor-desa.jpg";
import Slider2 from "@/assets/images/bendung-lama.jpg";
import Slider3 from "@/assets/images/bendungan-baru.jpg";
import { motion } from "framer-motion";
import { useFollowPointer } from "./UseFollowPointer";

const images = [Slider1, Slider2, Slider3];

const FullScreenCarousel: React.FC = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    fade: true,
  };

  return (
    <>
      <motion.div
        className="fixed top-0 z-20 left-0 w-14 h-14 bg-secondary rounded-full pointer-events-none"
        style={{ x, y }}
        ref={ref}
      />
      <div className="relative w-full h-screen overflow-hidden">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="w-full h-screen">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white p-4">
            <h2 className="text-4xl md:text-6xl font-bold text-primary">
              KKM 01 Desa Panyabrangan
            </h2>
            <p className="text-lg md:text-2xl mt-4">
              Desa Panyabrangan merupakan salah satu desa yang berada di wilayah
              Kecamatan Cikuesal, Kabupaten Serang
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullScreenCarousel;
