import { StaticImageData } from "next/image";

export interface NavBarItem {
  id: number;
  url: string;
  image: StaticImageData;
  alt: string;
  smallPadding?: boolean
}
