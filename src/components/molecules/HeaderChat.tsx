import { CardItem } from "@/@types/types";
import React from "react";
import Avatar from "../atoms/Avatar";

import CamImage from "@/assets/img/cam.svg";

import SearchImage from "@/assets/img/searchActive.svg";
import MaisOpcoes from "@/assets/img/mais-opcoes.svg";
import LinkButtonWithIcon from "../atoms/LinkButtonWithIcon";

interface HeaderChatProps {
  user: CardItem;
}

function HeaderChat({ user }: HeaderChatProps) {
  const {
    hasMessage,
    id,
    last_message,
    name,
    photo_url,
    quantity_message,
    update_at,
  } = user;
  return (
    <header className="cursor-pointer px-4 py-2.5 bg-primary-black w-full flex justify-between items-center">
      <div className="flex items-center">
        <Avatar alt={name} image={photo_url} />
        <p className="font-semibold text-primary-strong">{name}</p>
      </div>

      <div className="flex gap-1">
        <LinkButtonWithIcon alt="CamImage" image={CamImage} link="/cam" />
        <LinkButtonWithIcon alt="Search" image={SearchImage} link="/search" />
        <LinkButtonWithIcon
          alt="MaisOpcoes"
          image={MaisOpcoes}
          link="/more-options"
        />
      </div>
    </header>
  );
}

export default HeaderChat;
