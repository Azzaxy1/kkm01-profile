import images from "@/assets/image";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const TentangKami = () => {
  return (
    <Card className="m-5">
      <CardHeader className="flex justify-center">
        <Image src={images.Group1} alt="Kelompok 1" width={500} />
      </CardHeader>
      <CardBody>
        <p>
          KKM 01 merupakan Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Blanditiis at officiis nobis quae rem deserunt! Quae at dicta
          suscipit voluptas.
        </p>
      </CardBody>
    </Card>
  );
};

export default TentangKami;
