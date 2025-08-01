import React from "react";

interface HourChatProps {
  hour: string;
}
function HourChat({ hour }: HourChatProps) {
  return <span className="text-xs text-secondary">{hour}</span>;
}

export default HourChat;
