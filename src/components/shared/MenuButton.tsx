import { NavItemsProps } from "@/types";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { NavItems } from "./NavItems";
import { asideMenu } from "@/constants";

export function MenuButton(){

    const [isOpen,setIsOpen] = useState(false)
  
    return(
        <>
        <button onClick={()=>setIsOpen(!isOpen)}className="text-gray-700 hover:text-gray-900"><List size={38} weight="bold" /></button>
        <aside onClick={(e)=>e.stopPropagation()} className={`fixed left z-40 top-0 right-0 ${isOpen? " w-80 visible":"w-0 invisible"} bg-gray-700  h-dvh p-4 opacity-100 transition-all transition-duration-1000`}>
            <div className="p-4 flex justify-between w-full text-gray-50 ">
            <div><p>Atm Total - Recife</p></div>
            <div>
            <button className="text-gray-50" onClick={()=>setIsOpen(!isOpen)}><X size={20}/></button>
            </div>
            </div>
            <nav 
            className=" flex w-3/4 flex-col overflow-y-auto bg-gray-700  sm:max-w-xs lg:w-80">
            {
                asideMenu.map((navItem,i)=>(
                    <NavItems
                    key={i} 
                    {...navItem}
                    />

                ))
            }
        </nav>
        </aside>        
        {
            isOpen &&
            <div onClick={()=>setIsOpen(!isOpen)} className="fixed top-0 right-0 opacity-25 bg-slate-50 blur-lg h-dvh w-dvw">
            </div>
        }
            
            
            </>

    )
}