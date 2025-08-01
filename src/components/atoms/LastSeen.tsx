import Image from "next/image";
import React from "react";
import VistoImage from "@/assets/img/visto.svg";

function LastSeen() {
  return (
    <Image src={VistoImage} alt="Visto" className="w-4 h-4" quality={100} />
  );
}

export default LastSeen;
