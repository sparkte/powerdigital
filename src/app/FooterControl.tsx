"use client";

import { usePathname } from "next/navigation";
import Footer from "../components/Home/footer";

export default function FooterControl({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideFooter = pathname === "/the-power-circuit-v1";
      if (typeof document !== "undefined") {
    document.body.classList.toggle("circuit-page", pathname === "/the-power-circuit-v1");
  }
    if (typeof document !== "undefined") {
    document.body.classList.toggle("company-page", pathname === "/company");
  }

  return (
    <>
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
