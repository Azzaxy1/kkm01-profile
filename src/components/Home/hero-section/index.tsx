import images from "@/assets/image";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-[90vh] bg-white grid md:py-0 items-center grid-cols-1 gap-4 px-6 lg:px-16 2xl:px-72  place-items-center lg:grid-cols-2">
        <article data-aos="fade-up-right" className="flex flex-col mt-10">
          <h1 className="text-2xl mb-2 uppercase text-primary font-semibold sm:text-3xl md:text-4xl 2xl:text-5xl ">
            KKM 01 Desa Panyabrangan
          </h1>
          <h2 className="text-sm font-normal md:text-lg 2xl:text-xl ">
            🏢 : Universitas Banten Jaya
          </h2>
          <h4 className="text-sm font-normal md:text-lg 2xl:text-xl ">
            👨‍💼 : Dr. Ade Sumiardi, S.Si., M.Si
          </h4>
          <p className="text-sm font-normal md:text-lg 2xl:text-xl ">
            🗓️ : 1 Agustus - 5 September 2024
          </p>
          <p className="text-sm font-normal md:text-lg 2xl:text-xl ">
            📌 : Desa Panyabrangan, Kecamatan Cikeusal, Kabupaten Serang,
            Provinsi Banten
          </p>
        </article>
        <article className="relative flex w-full h-full">
          <div
            data-aos="fade-left"
            className="flex w-full flex-col  justify-center items-center"
          >
            <Image
              src={images.Group1}
              alt="hero"
              width={280}
              className="absolute md:relative bottom-0 z-10 w-[440px] md:w-[330px] lg:w-[550px] 2xl:w-[550px]"
            />
            <h4 className="absolute md:relative z-20 bottom-36 sm:bottom-0 text-secondary font-semibold text-3xl sm:text-4xl">
              Group Team One
            </h4>
          </div>
        </article>
        <div className="custom-shape-divider-bottom-1724919880 block md:hidden">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
