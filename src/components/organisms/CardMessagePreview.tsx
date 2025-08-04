import React from "react";
import Avatar from "../atoms/Avatar";
import { CardItem } from "@/@types/types";
import LastSeen from "../atoms/LastSeen";
import HeaderChatPreview from "../molecules/HeaderChatPreview";
import MessageChatPreviewLine from "../molecules/MessageChatPreviewLine";
import Link from "next/link";

interface ChatCardMessageProps {
  card: CardItem;
}
function CardMessagePreview({ card }: ChatCardMessageProps) {
  const {
    id,
    hasMessage,
    last_message,
    name,
    photo_url,
    quantity_message,
    update_at,
  } = card;

  return (
    <Link
      href={`/chat/${id}`}
      className="mx-2.5 transition hover:bg-active-links rounded-xl h-[72px] cursor-pointer flex items-center"
    >
      <Avatar alt={name} image={photo_url} />

      <div className="w-[calc(100%-84px)]">
        <HeaderChatPreview hourMessage={update_at} nameUser={name} />

        <div className="flex items-center gap-1">
          <LastSeen />
          <MessageChatPreviewLine
            hasMessage={hasMessage}
            quantity_message={quantity_message}
            last_message={last_message}
          />
        </div>
      </div>
    </Link>
  );
}

export default CardMessagePreview;
