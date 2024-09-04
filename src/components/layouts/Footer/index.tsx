import images from "@/assets/image";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <section className="grid py-6 text-white bg-gradient-to-t from-yellow-900 to-amber-900 px-6 lg:px-16 gap-4 2xl:px-72 grid-cols-1 md:grid-cols-3">
        <article className="flex flex-row items-center">
          <Image src={images.Logo} alt="Logo Image" width={60} />
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-semibold">
              KKM 01 UNBAJA
            </h1>
            <h4>Desa Panyabrangan, Kecamatan Cikeusal</h4>
          </div>
        </article>
        <article>
          <h2 className="text-3xl underline decoration-dashed underline-offset-8 mb-2 sm:text-3xl text-white font-semibold">
            Alamat Posko
          </h2>
          <h4 className="text-sm font-normal md:text-base 2xl:text-xl">
            Kampung Tipar, RT/RW 005/001 Desa Panyabrangan, Kecamatan Cikeusal
            Kabupaten Serang Provinsi Banten
          </h4>
        </article>
        <article>
          <h2 className="text-3xl underline decoration-dashed underline-offset-8 mb-2 sm:text-3xl text-white font-semibold">
            Sosial Media
          </h2>
          <div className="flex flex-row">
            <Link
              href={"https://www.instagram.com/kkm1_panyabrangan_unbaja2024/"}
            >
              <FaSquareInstagram className="w-10 h-10" />
            </Link>
            <Link
              href={
                "https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCCRsVHnWBrmRfkDkjhdcMxBnvBpvKcnWRDPkGZzKtqhjTznKxpqFPdvVXzJKjlGmRJsXq"
              }
            >
              <MdEmail className="w-10 h-10" />
            </Link>
            <Link
              href={
                "https://www.tiktok.com/@kkm.1.unbaja.2024?_t=8o6U5zceR3k&_r=1"
              }
            >
              <AiFillTikTok className="w-10 h-10" />
            </Link>
          </div>
        </article>
      </section>
      <section className="bg-secondary py-4 px-20 text-white text-center font-normal">
        <h1 className="text-white text-sm md:text-base text-center font-normal">
          © {new Date().getFullYear()} KKM 01 - Desa Panyabrangan.
        </h1>
        <Divider className="bg-white my-2" />
        <h2 className="text-sm md:text-base">
          Create with Next.js + Typescript -{" "}
          <Link
            className="underline underline-offset-4"
            target="_blank"
            href={"https://github.com/Azzaxy1"}
          >
            Azzaxy
          </Link>
        </h2>
      </section>
    </>
  );
};

export default Footer;
