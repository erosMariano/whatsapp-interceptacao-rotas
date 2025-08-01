import { StaticImageData } from "next/image";

export interface NavBarItem {
  id: number;
  url: string;
  image: StaticImageData;
  alt: string;
  smallPadding?: boolean;
}

export interface CardItem {
  id: number;
  photo_url: StaticImageData | string;
  name: string;
  last_message: string;
  hasMessage: boolean;
  quantity_message: number;
  update_at: string;
}
