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

export const asideAboutMenu:NavItemsProps[] = [
    {
        category: "",
        links:[
            {
                href:"/",
                name:"Retornar Para Página Inicial",
            },
            {
                href:"/about",
                name:"Sobre"
            },
            {
                href:"/about/integrantes",
                name:"Integrantes"
            }
        ]
    },
    

]

