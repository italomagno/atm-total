
import { List } from "@phosphor-icons/react";
import Logo from "@/assets/logo-ATM-B-Barra-Menu-150x70-1.png"

import Image from "next/image";


export function Header(){
  return(
    <header className=" w-full bg-backgroudBlue-100 h-28 px-6 py-8 border-b-1 shadow-2xl  border-black flex justify-between items-center">
      <div>
        <Image
        src={Logo}
        alt="Logo"
        fill={false}
        width={120}
        height={45}
        />
      </div>
      <div className="text-backgroudBlue-100"><List size={32} weight="bold" /></div>
    </header>
  )
}