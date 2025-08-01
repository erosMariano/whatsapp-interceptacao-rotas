import { listChat } from "@/constants/listChat";
import React from "react";
import CardMessagePreview from "./CardMessagePreview";

function ChatList() {
  return (
    <div>
      {listChat.map((card) => (
        <React.Fragment key={card.id}>
          <CardMessagePreview card={card} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default ChatList;
