import FooterChat from "@/components/molecules/FooterChat";
import HeaderChat from "@/components/molecules/HeaderChat";
import { listChat } from "@/constants/listChat";
import React from "react";
function ChatId({ params }: { params: { id: string } }) {
  const user = listChat.filter((el) => String(el.id) === params.id)[0];

  return (
    <div className="w-full bg-[url('/img/bg-chat.jpg')] flex flex-col">
      <HeaderChat user={user} />
      <div className="flex-1">Fala comigo bebe</div>
      <FooterChat />
    </div>
  );
}

export default ChatId;
