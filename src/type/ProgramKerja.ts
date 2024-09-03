import { StaticImageData } from "next/image";

export type ProgramKerjaItem = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
};

export type ProgramKerjaType = ProgramKerjaItem[];
