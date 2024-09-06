import CardAnggotaItem from "@/components/StrukturAnggota/CardAnggotaItem";
import React from "react";
import { listAnggota } from "@/libs/utils";
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
        <CardAnggotaItem
          name="Dr. Ade Sumiardi, S.Si., M.Si"
          images={images.Azis}
          position="DPL"
        />
      </article>
      <Divider className="h-1 bg-background" />
      <article className="flex my-8 justify-center gap-8 md:gap-0 md:justify-between items-center flex-wrap">
        <div className="order-3 md:order-1">
          <CardAnggotaItem
            name="Epi Safitri"
            images={images.Azis}
            position="SEKRETARIS"
            major="Teknik Informatika"
          />
        </div>
        <div className="order-1 md:order-2">
          <CardAnggotaItem
            name="M. Jaka Agus Setiawan"
            images={images.Azis}
            position="KETUA"
            major="Teknik Informatika"
          />
        </div>
        <div className="order-2 md:order-3">
          <CardAnggotaItem
            name="Abdurrohman Azis"
            images={images.Azis}
            position="Wakil Ketua"
            major="Teknik Informatika"
          />
        </div>
        <div className="order-4 md:order-4">
          <CardAnggotaItem
            name="Siti Haniawati"
            images={images.Azis}
            position="Bendahara"
            major="Administrasi Kesehatan"
          />
        </div>
      </article>
      <Divider className="h-1 bg-background" />
      <article className="flex my-8  justify-around gap-8 md:gap-0 items-center flex-wrap">
        <CardAnggotaItem
          name="Ahmad Ali Firdaus"
          images={images.Azis}
          position="Divisi Acara"
          major="Teknik Industri"
        />
        <CardAnggotaItem
          name="Della Maulia Putri"
          images={images.Azis}
          position="Divisi Acara"
          major="Pendidikan Akuntansi"
        />
        <CardAnggotaItem
          name="Ihsanuddin Adi Pangestu"
          images={images.Azis}
          position="Divisi Acara"
          major="Teknik Informatika"
        />
      </article>
      <Divider className="h-1 bg-background" />
      <article className="flex my-8 justify-center md:justify-between gap-8 md:gap-0 items-center flex-wrap">
        <CardAnggotaItem
          name="Rija Baihaqi"
          images={images.Azis}
          position="Divisi PDD"
          major="Pendidikan Pancasila"
        />
        <CardAnggotaItem
          name="Dita Della"
          images={images.Azis}
          position="Divisi PDD"
          major="Sistem Informasi"
        />
        <CardAnggotaItem
          name="Rico Triyantara"
          images={images.Azis}
          position="Divisi PDD"
          major="Teknik Industri"
        />
        <CardAnggotaItem
          name="Aditya Wardhono P"
          images={images.Azis}
          position="Divisi PDD"
          major="Teknik Industri"
        />
      </article>
      <Divider className="h-1 bg-background" />
      <article className="flex my-8 justify-center md:justify-between gap-8 md:gap-0 flex-wrap">
        <CardAnggotaItem
          name="Aji Eka Saputra"
          images={images.Azis}
          position="Divisi Humas"
          major="Teknik Sipil"
        />
        <CardAnggotaItem
          name="Rifqi Maulana"
          images={images.Rifki}
          position="Divisi Humas"
          major="Teknik Sipil"
        />
        <CardAnggotaItem
          name="Sandy Ruliandy"
          images={images.Azis}
          position="Divisi Humas"
          major="Sistem Informasi"
        />
        <CardAnggotaItem
          name="Fadly Oktapriadi"
          images={images.Azis}
          position="Divisi Humas"
          major="Teknik Informatika"
        />
      </article>
    </section>
  );
};

export default StrukturAnggotaPage;
