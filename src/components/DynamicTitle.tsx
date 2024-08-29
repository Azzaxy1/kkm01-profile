import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const DynamicTitle: React.FC = () => {
  const router = useRouter();

  const titles: { [key: string]: string } = {
    "/": "Home - KKM 01 Desa Panyabrangan",
    "/program-kerja": "Program Kerja - KKM 01 Desa Panyabrangan",
    "/struktur-anggota": "Struktur Anggota - KKM 01 Desa Panyabrangan",
    "/tentang-kami": "Tentang Kami - KKM 01 Desa Panyabrangan",
  };

  const title = titles[router.pathname] || "KKM 01 - Desa Panyabrangan";

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Head>
      <link rel="icon" href="/logo.png" type="image/x-icon" />
      <title>{title}</title>
    </Head>
  );
};

export default DynamicTitle;
