"use client";

import React, { useState } from "react";
import ItemTabFiltersChat from "../atoms/ItemTabFiltersChat";
const tabs = ["Tudo", "Não Lidas", "Favoritas", "Grupos"];

function ChatFilterTabs() {
  const [activeTab, setActiveTab] = useState("Tudo");
  return (
    <nav>
      <ul className="flex gap-2">
        {tabs.map((tab) => (
          <ItemTabFiltersChat
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            text={tab}
            key={tab}
          />
        ))}
      </ul>
    </nav>
  );
}

export default ChatFilterTabs;
