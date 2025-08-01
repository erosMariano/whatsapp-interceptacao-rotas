import React from "react";
interface MessagePreviewTextProps {
  text: string;
}
function MessagePreviewText({ text }: MessagePreviewTextProps) {
  return (
    <p className="truncate overflow-hidden whitespace-nowrap text-sm text-secondary">
      {text}
    </p>
  );
}

export default MessagePreviewText;
