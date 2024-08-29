

import { useState } from "react";
import { NavItemsProps } from "@/types";




export function useNavMenu(e:NavItemsProps){
    const [nav,setNav]= useState<NavItemsProps>(e)

    function handleSelectedNavItem(index:number){
        setNav(prevNav => ({
            ...prevNav,
            links: prevNav.links.map((link, i) => ({
                ...link,
                isActive: i === index
            }))
        }));
    }

    return{
        handleSelectedNavItem,
        nav
    }
}