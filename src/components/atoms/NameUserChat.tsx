import React from "react";

interface NameUserChatProps {
  name: string;
}
function NameUserChat({ name }: NameUserChatProps) {
  return <p className="text-base text-primary-strong">{name}</p>;
}

export default NameUserChat;
