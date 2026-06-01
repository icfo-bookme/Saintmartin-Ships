"use client"
import { usePathname } from "next/navigation";
import BookMeHeader from "./Header";
import Header from "@/components/shared/Navbar";

const HeaderDession = () => {
    const pathname = usePathname();
  return (
    <div className="h-[98%]">
        {pathname === "/" || pathname === "/payment" || pathname === "/contact" ? <BookMeHeader /> : <Header />}
    </div>
  )
}

export default HeaderDession