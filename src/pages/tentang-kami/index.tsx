import TentangKami from "@/components/TentangKami";
import React from "react";

const TentangKamiPage = () => {
  return (
    <section className="pages flex flex-col  ">
      <header className="text-center mb-7">
        <h1 className="text-2xl underline underline-offset-8 sm:text-3xl mt-6 font-medium text-primary">
          Tentang KKM 01
        </h1>
      </header>
      <TentangKami />
    </section>
  );
};

export default TentangKamiPage;
