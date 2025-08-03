import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
interface LinkButtonWithIconProps {
  image: StaticImageData;
  alt: string;
  link: string;
  isActive?: boolean
}
function LinkButtonWithIcon({ alt, image, link, isActive}: LinkButtonWithIconProps) {
    const linkActive = isActive && 'bg-active-links'
  return (
    <Link
      href={link}
      className={`p-2 transition hover:bg-active-links rounded-full ${linkActive}`}
    >
      <Image alt={alt} src={image} />
    </Link>
  );
}

export default LinkButtonWithIcon;
