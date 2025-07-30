"use client";

import { NavBarItem } from "@/@types/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ItemNavBarProps {
  item?: NavBarItem;
  className?: string;
  primary?: boolean;

  secondary?: {
    image: StaticImageData;
    alt: string;
    url: string;
  };
}
function ItemNavBar({ className, item, primary, secondary }: ItemNavBarProps) {
  const pathName = usePathname();
  let isActive = false;
  if (item) {
    isActive =
      pathName === item.url ||
      (pathName.startsWith(item.url) && item.url !== "/");
  } else if (secondary) {
    isActive =
      pathName === secondary.url ||
      (pathName.startsWith(secondary.url) && secondary.url !== "/");
  }

  const styleActive = isActive && `bg-active-links`;

  return primary && item ? (
    <Link
      aria-current="page"
      href={item.url}
      key={item.id}
      className={`${className} ${styleActive}`}
    >
      <Image
        width={32}
        height={32}
        alt={item.alt}
        src={item.image}
        quality={100}
      />
    </Link>
  ) : (
    secondary && (
      <Link
        href={secondary.url}
        key={secondary.alt}
        className={`${className} ${styleActive}`}
      >
        <Image
          width={32}
          height={32}
          alt={secondary.alt}
          src={secondary.image}
          quality={100}
        />
      </Link>
    )
  );
}

export default ItemNavBar;
