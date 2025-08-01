import React from "react";
import MessagePreviewText from "../atoms/MessagePreviewText";
import QuantityMessage from "../atoms/QuantityMessage";

interface MessageChatPreviewLineProps {
  last_message: string;
  hasMessage: boolean;
  quantity_message: number;
}
function MessageChatPreviewLine({
  last_message,
  hasMessage,
  quantity_message,
}: MessageChatPreviewLineProps) {
  return (
    <div className="flex truncate overflow-hidden whitespace-nowrap text-sm text-secondary justify-between w-full">
      <MessagePreviewText text={last_message} />

      {hasMessage && <QuantityMessage quantity={quantity_message} />}
    </div>
  );
}

export default MessageChatPreviewLine;
