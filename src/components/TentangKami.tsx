import images from "@/assets/image";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const TentangKami = () => {
  return (
    <Card className="mb-8 p-4" radius="sm">
      <CardHeader className="flex justify-center">
        <Image src={images.FotoBersama} alt="Kelompok 1" width={500} />
      </CardHeader>
      <CardBody>
        <p>
          KKM 01 adalah kelompok mahasiswa dari Universitas Banten Jaya (UNBAJA)
          yang menjalankan program Kuliah Kerja Mahasiswa (KKM) di Desa
          Panyabrangan, Kecamatan Cikeusal. Kami berfokus pada berbagai program
          kerja yang bertujuan untuk memberdayakan masyarakat desa, meningkatkan
          kesejahteraan, dan menciptakan lingkungan yang lebih baik. Dengan
          semangat kebersamaan dan kolaborasi, kami berupaya memberikan
          kontribusi nyata melalui kegiatan seperti digitalisasi UMKM,
          penghijauan lingkungan, pengurangan angka stunting, dan
          program-program lainnya yang berorientasi pada pembangunan desa yang
          berkelanjutan. Kami percaya bahwa perubahan besar dimulai dari
          langkah-langkah kecil bersama masyarakat.
        </p>
      </CardBody>
    </Card>
  );
};

export default TentangKami;
