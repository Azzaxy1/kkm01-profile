import Image from "next/image";
import { ProgramKerjaItem as ProgramKerjaItemType } from "@/type/ProgramKerja";
import { Card, CardBody, Divider } from "@nextui-org/react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

type ProgramKerjaItemProps = {
  item: ProgramKerjaItemType;
  index: number;
};

const ProgramKerjaItem: React.FC<ProgramKerjaItemProps> = ({ item, index }) => {
  return (
    <Card
      className="flex p-5 gap-0 md:gap-10 flex-col md:flex-row"
      radius="sm"
      data-aos={index % 2 === 0 ? "zoom-in-left" : "zoom-in-right"}
    >
      <article className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          className="rounded-md"
        />
      </article>
      <CardBody className="max-w-[100%]  md:max-w-[65%] order-1">
        <h4 className="text-lg sm:text-2xl font-medium text-primary">
          {item.title}
        </h4>
        <Divider className="my-2" />
        <p className="line-clamp-3 md:line-clamp-4">{item.description}</p>
        <Link
          href={`/program-kerja/${item.id}`}
          className="underline text-primary flex items-center gap-1"
        >
          Baca Selengkapnya
          <FiExternalLink width={100} />
        </Link>
      </CardBody>
    </Card>
  );
};

export default ProgramKerjaItem;
