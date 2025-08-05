import Image from "next/image";
import React from "react";
import Plus from "@/assets/img/plus.svg";
import Fig from "@/assets/img/fig.svg";
import Audio from "@/assets/img/audio.svg";

function FooterChat() {
  return (
    <div className="relative mb-3 mx-3">
      <div className="absolute flex left-2 top-1.5">
        <div className="p-2  rounded-full transition hover:bg-hover-light cursor-pointer">
          <Image src={Plus} alt="" />
        </div>
        <div className="p-2 rounded-full transition hover:bg-hover-light cursor-pointer">
          <Image src={Fig} alt="" />
        </div>
      </div>
      <input
        className="pr-1.5 pl-24 py-4 text-sm text-primary-strong bg-primary-background rounded-full w-full outline-none border border-primary-background hover:shadow-inset-white-1px focus:shadow-inset-accent-2px"
        type="text"
      />
      <Image
        src={Audio}
        alt=""
        className="absolute right-6 top-4 cursor-pointer"
      />
    </div>
  );
}

export default FooterChat;
