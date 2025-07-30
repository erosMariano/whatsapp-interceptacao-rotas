import { usePathname } from "next/navigation";

export function useIsActivePath(target: string): boolean {
  const pathName = usePathname();

  return pathName === target || (pathName.startsWith(target) && target !== "/");
}
