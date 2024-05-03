"use client"

import Logo from "@/assets/logo-ATM-B-Barra-Menu-150x70-1.png"
import { useWindowScroll } from "@uidotdev/usehooks";

import Image from "next/image";
import { MenuButton } from "./MenuButton";
import Link from "next/link";


export function Header(){
  const [{ y }] = useWindowScroll();

  return(
    <header className={`fixed top-0  z-[1] left-0 w-full  h-28 ${y && y>0 ?  "bg-white" :""} transition-all px-6 py-8 border-b-1  
     flex justify-between items-center`}>
      <div>
        <Link
        href={"/"}>
        <Image
        src={Logo}
        alt="Logo"
        fill={false}
        className="mt-5"
        width={120}
        height={45}
        />
        </Link>
      </div>
      <MenuButton/>
    </header>
  )
}