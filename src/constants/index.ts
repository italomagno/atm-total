import { NavItemsProps } from "@/types";

export const asideMenu:NavItemsProps[] = [
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
                href:"/about",
                name:"Sobre o ATM-Total"
            }
        ]
    },

]


