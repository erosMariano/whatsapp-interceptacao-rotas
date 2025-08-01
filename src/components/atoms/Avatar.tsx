import React from "react";
import Perfil from "@/assets/img/perfil.png";
import Image, { StaticImageData } from "next/image";

interface AvatarProps {
  image: string | StaticImageData;
  alt: string;
}
function Avatar({ image, alt }: AvatarProps) {
  return (
    <div className="px-3.5">
      <Image
        src={image}
        className="rounded-full w-12 h-12 block border border-[##a5a5a5] object-cover"
        alt={alt}
      />
    </div>
  );
}

export default Avatar;
