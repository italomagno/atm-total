import { NavMenu } from "@/components/shared/NavMenu"
import { NavItemsProps } from "@/types"
import { ReactNode } from "react"


type SharedBodyProps={
    children:ReactNode,
    asideMenu:NavItemsProps[]
    title?:string
}

export function SharedBody({asideMenu,children,title="ATM Total | Recife"}:SharedBodyProps){


    return(
        <div className=" w-full flex items-center justify-center col-span-2">
            <div className="w-fit bg-white rounded-l-lg p-6 bg-opacity-70 h-full">
                <NavMenu
                bgColor="bg-opacity-70"
                textColor="text-black"
                title={title}
                asideMenu={asideMenu}
                />
                </div>
                    <div className="w-[700px] h-[440px] bg-white bg-opacity-70  rounded-r-md shadow-md p-6 overflow-y-auto">
                    {children}
                </div>
            </div>
    )
}