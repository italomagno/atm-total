import { NavItemsProps } from "@/types"

type NavBodyProps={
    nav:NavItemsProps
}

export function NavBody({nav}:NavBodyProps){
    return(
        <>
        {
            [nav].map((nav,key)=>{
              const index = nav.links.findIndex(link=>link.isActive===true)
              if(nav.links[index]){ return <div key={`component-navbody-${key}`}>{nav.links[index].node}</div>}else{
                return null
              }
            })
        }
        </>

    )
}