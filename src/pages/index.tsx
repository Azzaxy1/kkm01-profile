import Image from "next/image";

import Grup1 from "@/assets/group1.png";
import Blob from "@/assets/shapes.svg";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] bg-white grid md:py-0 items-center grid-cols-1 gap-4 px-6 lg:px-16 2xl:px-72 border-2 place-items-center lg:grid-cols-2">
        <article className="flex flex-col mt-10">
          <h1 className="text-2xl mb-2 uppercase text-secondary font-semibold md:text-4xl 2xl:text-5xl ">
            KKM 01 Desa Panyabrangan
          </h1>
          <h2 className="text-base md:text-lg 2xl:text-xl ">
            🏢 : Universitas Banten Jaya
          </h2>
          <h4>👨‍💼 : Dr. Ade Sumiardi, S.Si., M.Si</h4>
          <p>🗓️ : 1 Agustus - 5 September 2024</p>
          <p>
            📌 : Desa Panyabrangan, Kecamatan Cikeusal, Kabupaten Serang,
            Provinsi Banten
          </p>
        </article>
        <article className="relative flex w-full h-full">
          {/* <Image
            src={Blob}
            alt="shape"
            width={300}
            className="absolute bottom-[-320px] right-[-330px] hidden md:block w-[280px] sm:w-[330px] md:w-[380px] lg:w-[1200px] 2xl:w-[630px]"
          /> */}
          {/* <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-[-320px] right-[-330px] hidden md:block w-[280px] sm:w-[330px] md:w-[380px] lg:w-[1200px] 2xl:w-[630px]"
          >
            <path
              fill="#675527"
              d="M33.9,20.5C20.9,42.1,-28.6,43.6,-40.3,22.7C-52,1.8,-26,-41.4,-1.3,-42.2C23.4,-42.9,46.9,-1.1,33.9,20.5Z"
              transform="translate(100 100)"
            />
          </svg> */}
          <div className="flex items-end  w-full ">
            <Image
              src={Grup1}
              alt="hero"
              width={280}
              className="absolute bottom-0 md:top-28 md:right-4 z-10 w-[440px] md:w-[330px] lg:w-[550px] 2xl:w-[550px]"
            />
            <h4 className="absolute bottom-32 md:right-40 text-primary font-semibold text-4xl hidden md:block">
              Group Team One
            </h4>
            {/* <Image
              src={Grup1}
              alt="hero"
              width={280}
              className="absolute bottom-0 right-0 z-10 w-[440px] md:w-[330px] lg:w-[600px] 2xl:w-[550px]"
            /> */}
          </div>
        </article>
      </section>
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
    </>
  );
}

