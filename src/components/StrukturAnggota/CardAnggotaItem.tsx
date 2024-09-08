import images from "@/assets/image";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import React from "react";

type CardAnggotaItemProps = {
  position: string;
  name: string;
  images: StaticImageData;
  major?: string;
};

const CardAnggotaItem: React.FC<CardAnggotaItemProps> = ({
  position,
  name,
  images,
  major,
}) => {
  return (
    <Card className="w-[300px] md:max-w-[270px] flex justify-center items-center">
      <CardHeader className="text-center flex justify-center items-center">
        <h1 className="text-2xl uppercase sm:text-2xl text-secondary font-semibold">
          {position}
        </h1>
      </CardHeader>
      <CardBody className="flex justify-center items-center">
        <Image src={images} alt="Azis" width={200} />
      </CardBody>
      <CardFooter className="flex flex-col">
        <h2 className="text-base sm:text-lg text-primary font-semibold">
          {name}
        </h2>
        <Divider className="my-1 bg-gray-400" />
        <h4 className="text-sm sm:text-base mb-2">{major}</h4>
      </CardFooter>
    </Card>
  );
};

export default CardAnggotaItem;
