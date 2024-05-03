import { NavItemsProps } from "@/types"
import Link from "next/link"

export function NavItems({category,links}:NavItemsProps){
    
    return(
        <div className="px-4 pb-6">
        <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
            {category}
        </h3>
        <ul  className="mb-8 text-sm font-medium">

        {
            links.map(link=>(
            <li key={link.name}>
                <Link className="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
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