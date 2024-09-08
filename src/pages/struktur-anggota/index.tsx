import CardAnggotaItem from "@/components/StrukturAnggota/CardAnggotaItem";
import React from "react";
import images from "@/assets/image";
import { Divider } from "@nextui-org/react";

const StrukturAnggotaPage = () => {
  return (
    <section className="pages flex flex-col px-10 mb-8">
      <header className="text-center mb-7">
        <h1 className="text-2xl underline underline-offset-8 sm:text-3xl mt-6 font-medium text-primary">
          Struktur Anggota
        </h1>
      </header>
      <article className="flex mb-8 justify-center items-center">
        <div data-aos="flip-right">
          <CardAnggotaItem
            name="Dr. Ade Sumiardi, S.Si., M.Si"
            images={images.PaAde}
            position="DPL"
          />
        </div>
      </article>
      <Divider className="h-1 bg-background" />
      <article className="flex my-8 justify-center gap-8 md:gap-0 md:justify-between items-center flex-wrap">
        <div className="order-3 md:order-1" data-aos="flip-right">
          <CardAnggotaItem
            name="Epi Safitri"
            images={images.Epi}
            position="SEKRETARIS"
            major="Teknik Informatika"
          />
        </div>
        <div className="order-1 md:order-2" data-aos="flip-left">
          <CardAnggotaItem
            name="M. Jaka Agus Setiawan"
            images={images.Jaka}
            position="KETUA"
            major="Teknik Informatika"
          />
        </div>
        <div className="order-2 md:order-3" data-aos="flip-right">
          <CardAnggotaItem
            name="Abdurrohman Azis"
            images={images.Azis}
            position="Wakil Ketua"
            major="Teknik Informatika"
          />
        </div>
        <div className="order-4 md:order-4" data-aos="flip-left">
          <CardAnggotaItem
            name="Siti Haniawati"
            images={images.Heni}
            position="Bendahara"
            major="Administrasi Kesehatan"
          />
        </div>
      </article>
      <Divider className="h-1 bg-background" />
      <article className="flex my-8  justify-around gap-8 md:gap-0 items-center flex-wrap">
        <div data-aos="flip-right">
          <CardAnggotaItem
            name="Ahmad Ali Firdaus"
            images={images.Daus}
            position="Divisi Acara"
            major="Teknik Industri"
          />
        </div>
        <div data-aos="flip-left">
          <CardAnggotaItem
            name="Della Maulia Putri"
            images={images.Della}
            position="Divisi Acara"
            major="Pendidikan Akuntansi"
          />
        </div>
        <div data-aos="flip-right">
          <CardAnggotaItem
            name="Ihsanuddin Adi Pangestu"
            images={images.Ihsan}
            position="Divisi Acara"
            major="Teknik Informatika"
          />
        </div>
      </article>
      <Divider className="h-1 bg-background" />
      <article className="flex my-8 justify-center md:justify-between gap-8 md:gap-0 items-center flex-wrap">
        <div data-aos="flip-left">
          <CardAnggotaItem
            name="Rija Baihaqi"
            images={images.Rija}
            position="Divisi PDD"
            major="Pendidikan Pancasila"
          />
        </div>
        <div data-aos="flip-right">
          <CardAnggotaItem
            name="Dita Della"
            images={images.Dita}
            position="Divisi PDD"
            major="Sistem Informasi"
          />
        </div>
        <div data-aos="flip-left">
          <CardAnggotaItem
            name="Rico Triyantara"
            images={images.Rico}
            position="Divisi PDD"
            major="Teknik Industri"
          />
        </div>
        <div data-aos="flip-right">
          <CardAnggotaItem
            name="Aditya Wardhono P"
            images={images.Adit}
            position="Divisi PDD"
            major="Teknik Industri"
          />
        </div>
      </article>
      <Divider className="h-1 bg-background" />
      <article className="flex my-8 justify-center md:justify-between gap-8 md:gap-0 flex-wrap">
        <div data-aos="flip-right">
          <CardAnggotaItem
            name="Aji Eka Saputra"
            images={images.Aji}
            position="Divisi Humas"
            major="Teknik Sipil"
          />
        </div>
        <div data-aos="flip-left">
          <CardAnggotaItem
            name="Rifqi Maulana"
            images={images.Rifki}
            position="Divisi Humas"
            major="Teknik Sipil"
          />
        </div>
        <div data-aos="flip-right">
          <CardAnggotaItem
            name="Sandy Ruliandy"
            images={images.Sandy}
            position="Divisi Humas"
            major="Sistem Informasi"
          />
        </div>
        <div data-aos="flip-left">
          <CardAnggotaItem
            name="Fadly Oktapriadi"
            images={images.Fadly}
            position="Divisi Humas"
            major="Teknik Informatika"
          />
        </div>
      </article>
    </section>
  );
};

export default StrukturAnggotaPage;
