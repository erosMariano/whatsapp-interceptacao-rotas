import React from "react";
import ArquivadaLogo from "@/assets/img/arquivida.svg";
import Image from "next/image";

function ArchivierteChats() {
  return (
    <>
      <Image src={ArquivadaLogo} alt="Arquivadas" />
      <p>Arquivadas</p>
    </>
  );
}

export default ArchivierteChats;
