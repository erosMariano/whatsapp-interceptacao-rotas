import { NavBarItem } from "../@types/types";
import ImageCanais from "@/assets/img/canais.svg";
import ImageChat from "@/assets/img/chat.svg";
import ImageComunidade from "@/assets/img/comunidade.svg";
import ImageStatus from "@/assets/img/status.svg";

export const itemsNavBar: NavBarItem[] = [
  {
    id: 1,
    url: "/",
    image: ImageChat,
    alt: "Imagem Chat",
  },
  {
    id: 2,
    url: "#",
    image: ImageStatus,
    alt: "Imagem status",
  },

  {
    id: 3,
    url: "#",
    image: ImageCanais,
    alt: "Imagem canais",
  },

  {
    id: 4,
    url: "#",
    image: ImageComunidade,
    alt: "Imagem Comunidade",
    smallPadding: true,
  },
];
