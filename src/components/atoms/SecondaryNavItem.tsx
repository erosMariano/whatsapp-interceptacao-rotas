"use client";

import { useIsActivePath } from "@/hooks/useIsActivePath";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SecondaryNavItemProps {
  image: StaticImageData;
  alt: string;
  url: string;
  className: string;
}
function SecondaryNavItem({
  className,
  alt,
  image,
  url,
}: SecondaryNavItemProps) {
  const isActive = useIsActivePath(url);
  const styleActive = isActive && `bg-active-links`;

  return (
    <Link href={url} key={alt} className={`${className} ${styleActive}`}>
      <Image
        alt={alt}
        className="rounded-full"
        src={image}
        quality={100}
      />
    </Link>
  );
}

export default SecondaryNavItem;
