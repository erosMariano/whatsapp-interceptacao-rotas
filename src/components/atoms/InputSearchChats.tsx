import Image from "next/image";
import React from "react";
import SearchImage from "@/assets/img/search.svg";

function InputSearchChats() {
  return (
    <div className="flex relative">
      <Image
        src={SearchImage}
        alt="search"
        className="absolute top-2.5 left-4"
      />
      <input
        className="text-sm text-primary-strong bg-primary-background h-10 rounded-full w-full pl-11.5 outline-none border border-primary-background hover:shadow-inset-white-1px focus:shadow-inset-accent-2px"
        type="text"
        placeholder="Pesquisar ou começar uma nova conversa"
      />
    </div>
  );
}

export default InputSearchChats;
