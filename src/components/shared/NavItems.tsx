import { NavItemsProps } from "@/types"
import Link from "next/link"

export function NavItems({category,links,bgCategory="bg-gray-700",textColor="text-gray-50",bgHover="bg-gray-600"}:NavItemsProps){
    
    return(
        <div className="px-4 pb-6">
        <h3 className={`mb-2 text-xs font-medium uppercase ${bgCategory}`}>
            {category}
        </h3>
        <ul  className="mb-8 text-sm font-medium">

        {
            links.map(link=>(
            <li key={link.name}>
                <Link className={`active flex items-center rounded py-3 pl-3 pr-4 ${textColor} hover:${bgHover}`}
                    href={link.href}>
                    <span className="select-none">{link.name}</span>
                </Link>
            </li>
            ))
        }

        </ul>
    </div>
    )
}