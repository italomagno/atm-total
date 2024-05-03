import { NavItemsProps } from "@/types";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { NavItems } from "./NavItems";


export function MenuButton(){

    const [isOpen,setIsOpen] = useState(true)
    const navItems:NavItemsProps[] = [
        {
            category: "Principal",
            links:[
                {
                    href:"/",
                    name:"Home",
                },
                {
                    href:"/errorsSot",
                    name:"Análise de Erros"
                }
            ]
        },
        {
            category: "Sobre",
            links:[
                {
                    href:"/",
                    name:"Sobre o ATM-Total"
                }
            ]
        },

    ]
    return(
        <>
        <button onClick={()=>setIsOpen(!isOpen)}className="text-backgroudBlue-100"><List size={32} weight="bold" /></button>
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
                navItems.map((navItem,i)=>(
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