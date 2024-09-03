import { ProgramKerjaUnggulan, ProgramKerjaLainnya } from "@/libs/utils";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

const DetailProgramKerja = () => {
  const { query } = useRouter();
  const { id } = query;

  const programKerja =
    ProgramKerjaUnggulan.find((item) => item.id === Number(id)) ||
    ProgramKerjaLainnya.find((item) => item.id === Number(id));

  if (!programKerja) {
    return (
      <div>
        <h1>Program kerja tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <Card
      className="flex m-7 md:m-10 px-3 py-1 md:px-6 md:py-3 flex-col items-center"
      radius="sm"
    >
      <CardHeader className="flex justify-center">
        <h1 className="text-lg sm:text-2xl font-medium text-primary">
          {programKerja.title}
        </h1>
      </CardHeader>
      <CardBody className="flex justify-center items-center">
        <Image
          src={programKerja.image}
          alt={programKerja.title}
          width={500}
          height={300}
        />
      </CardBody>
      <CardFooter>
        <p>{programKerja.description}</p>
      </CardFooter>
    </Card>
  );
};

export default DetailProgramKerja;
