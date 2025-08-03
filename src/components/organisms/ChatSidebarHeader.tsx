import React from "react";
import WhatsappLogo from "@/assets/img/whatsapp-logo.svg";
import MaisOpcoesLogo from "@/assets/img/mais-opcoes.svg";
import NovaConversaLogo from "@/assets/img/nova-conversa.svg";

import Image from "next/image";
import LinkButtonWithIcon from "@/components/atoms/LinkButtonWithIcon";
import ChatFilterTabs from "@/components/molecules/ChatFilterTabs";
import InputSearchChats from "@/components/atoms/InputSearchChats";
import ArchivierteChats from "@/components/atoms/ArchivierteChats";
function ChatSidebarHeader() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mx-5 my-2.5">
        <Image alt="" src={WhatsappLogo} />
        <div className="flex gap-2">
          <LinkButtonWithIcon image={NovaConversaLogo} link={""} alt="" />
          <LinkButtonWithIcon image={MaisOpcoesLogo} link={""} alt="" />
        </div>
      </div>

      <div className="mx-5">
        <InputSearchChats />

        <div className="mt-3">
          <ChatFilterTabs />
        </div>
        <div className="flex mt-5 mb-5 pl-4 items-center gap-5 cursor-pointer">
          <ArchivierteChats />
        </div>
      </div>
    </div>
  );
}

export default ChatSidebarHeader;
