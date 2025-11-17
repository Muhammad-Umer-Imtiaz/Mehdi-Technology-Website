// Client wrapper
"use client";
import { usePathname } from "next/navigation";
import ContactUs from "./LandingPage/ContactUs";

export default function LayoutWrapper() {
  const pathname = usePathname();
  const hideNavbar = pathname === "/contact-us";

  return <>{!hideNavbar && <ContactUs />}</>;
}
