import { CardItem } from "@/@types/types";
import User1 from "@/assets/img/perfis/perfil.png"
import User2 from "@/assets/img/perfis/user2.jpeg"
import User3 from "@/assets/img/perfis/user3.jpg"
import User4 from "@/assets/img/perfis/user4.jpg"


export const listChat: CardItem[] = [
  {
    id: 1,
    photo_url: User1,
    name: "Eros Mariano",
    last_message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    hasMessage: true,
    quantity_message: 3,
    update_at: "12:00"
  },
  {
    id: 2,
    photo_url: User2,
    name: "João Pedro",
    last_message: "Cheguei",
    hasMessage: false,
    quantity_message: 0,
    update_at: "13:00"
  },
  {
    id: 3,
    photo_url: User3,
    name: "Carlos Lima",
    last_message: "kkkkkkkkkkkk",
    hasMessage: false,
    quantity_message: 0,
    update_at: "14:00"
  },
  {
    id: 4,
    photo_url: User4,
    name: "Juliana Silva",
    last_message: "O projeto está entregue, rolou as 10 da manhã",
    hasMessage: false,
    quantity_message: 0,
    update_at: "10:00"
  },
];
