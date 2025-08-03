import React from "react";

interface ItemFiltersChatProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

function ItemTabFiltersChat({ text, onClick, isActive }: ItemFiltersChatProps) {
  const isActiveStyle = isActive
    ? "text-nav-green bg-nav-green-bg"
    : "text-secondary bg-primary-background";

  return (
    <li
      onClick={onClick}
      className={`cursor-pointer text-sm px-3 py-1.5 rounded-full shadow-inset-white-1px transition ${isActiveStyle}`}
    >
      {text}
    </li>
  );
}

export default ItemTabFiltersChat;
