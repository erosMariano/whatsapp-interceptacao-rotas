import React from "react";

interface QuantityMessageProps {
  quantity: number;
}
function QuantityMessage({ quantity }: QuantityMessageProps) {
  return (
    <span className="ml-1 min-w-5 min-h-5 bg-unread-timestamp flex items-center justify-center rounded-full text-content-on-accent text-xs">
      {quantity}
    </span>
  );
}

export default QuantityMessage;
