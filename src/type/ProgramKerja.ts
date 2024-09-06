import { StaticImageData } from "next/image";

export type ProgramKerjaItem = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
};

export type ListAnggotaItem = {
  id: number;
  image: StaticImageData;
  name: string;
  major?: string;
};

export type ListAnggotaType = ListAnggotaItem[];

export type ProgramKerjaType = ProgramKerjaItem[];
