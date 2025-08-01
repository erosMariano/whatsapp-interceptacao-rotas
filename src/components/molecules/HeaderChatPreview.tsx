import React from "react";
import NameUserChat from "../atoms/NameUserChat";
import HourChat from "../atoms/HourChat";

interface HeaderChatPreviewProps{
  nameUser: string;
  hourMessage: string  
}
function HeaderChatPreview({nameUser, hourMessage}: HeaderChatPreviewProps) {
  return (
    <div className="flex justify-between">
      <NameUserChat name={nameUser} />
      <HourChat hour={hourMessage} />
    </div>
  );
}

export default HeaderChatPreview;
