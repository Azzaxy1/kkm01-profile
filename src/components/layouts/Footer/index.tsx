import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
