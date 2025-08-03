import React from "react";
import ChatSidebarList from "@/components/organisms/ChatSidebarList";
import ChatSidebarHeader from "@/components/organisms/ChatSidebarHeader";

function Home() {
  return (
    <div className="w-sm border-r border-white/10">
      <ChatSidebarHeader />
      <ChatSidebarList />
      <div>Oiii</div>
    </div>
  );
}

export default Home;
