import { NavItemsProps } from "@/types";
import { NavItems } from "./NavItems";

type NavMenuProps={
    title:string;
    asideMenu: NavItemsProps[]
    bgColor?:string
    bgCategory?:string
    bgHover?:string
    textColor?:string
}

export function NavMenu({asideMenu,title,bgColor="bg-gray-700",bgCategory,bgHover,textColor}:NavMenuProps){
    
    return(
        <>
        <div>
            <p>{title}</p>
        </div>
        <nav
            className={ `flex w-3/4 flex-col overflow-y-auto ${bgColor}  sm:max-w-xs lg:w-80`}>
                {asideMenu.map((navItem, i) => (
                    <NavItems
                        bgCategory={bgCategory}
                        bgHover={bgHover}
                        textColor={textColor}
                        key={i}
                        {...navItem} />

                ))}
            </nav>
            </>
    )
}