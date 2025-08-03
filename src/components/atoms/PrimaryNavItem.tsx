"use client";

import { NavBarItem } from "@/@types/types";
import { useIsActivePath } from "@/hooks/useIsActivePath";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PrimaryNavItemProps {
  item: NavBarItem;
  className: string;
}
function PrimaryNavItem({ className, item }: PrimaryNavItemProps) {
  const { alt, id, image, url } = item;
  const isActive = useIsActivePath(url);

  const styleActive = isActive && `bg-active-links`;

  return (
    <Link
      aria-current="page"
      href={url}
      key={id}
      className={`${className} ${styleActive}`}
    >
      <Image width={32} height={32} alt={alt} src={image} quality={100} />
    </Link>
  );
}

export default PrimaryNavItem;
