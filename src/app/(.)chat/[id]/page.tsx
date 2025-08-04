import HeaderChat from "@/components/molecules/HeaderChat";
import { listChat } from "@/constants/listChat";
import React from "react";

function ChatIntercepted({ params }: { params: { id: string } }) {
  const user = listChat.filter((el) => String(el.id) === params.id)[0];

  return <HeaderChat user={user} />;
}

export default ChatIntercepted;
