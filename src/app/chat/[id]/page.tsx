import FooterChat from "@/components/molecules/FooterChat";
import HeaderChat from "@/components/molecules/HeaderChat";
import { listChat } from "@/constants/listChat";
import { messagesChat } from "@/constants/messagesChat";
import React from "react";
function ChatId({ params }: { params: { id: string } }) {
  const user = listChat.filter((el) => String(el.id) === params.id)[0];
  const chatID = Number(params.id);

  const chat = messagesChat.find((chat) => chat.chatId === chatID);

  return (
    <div className="w-full bg-[url('/img/bg-chat.jpg')] flex flex-col">
      <HeaderChat user={user} />
      <div className="px-16 h-full flex justify-end flex-col">
        {chat?.messages.length === 0 ? (
          <>Sem mensagem</>
        ) : (
          chat?.messages.map((message, index) => {
            const isUserMessage = message.id_user === 1;
            const styleText = isUserMessage
              ? "bg-chat-primary ml-auto"
              : "mr-auto  bg-chat-secondary";
            return (
              <p
                className={`p-2 ${styleText} w-max max-w-1/2 rounded mb-4`}
                key={message.content}
              >
                {message.content}
              </p>
            );
          })
        )}
      </div>
      <FooterChat />
    </div>
  );
}

export default ChatId;
