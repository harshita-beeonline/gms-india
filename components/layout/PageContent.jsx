"use client";
import { usePathname } from "next/navigation";
const PageContent = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  if (isHome) {
    return <main>{children}</main>;
  }
  return <main className="page-content">{children}</main>;
};
export default PageContent;
