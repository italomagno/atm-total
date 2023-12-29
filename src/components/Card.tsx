
import Image from "next/image";
import Logo from "@/assets/logo-ATM-B-Barra-Menu-150x70-1.png"
import { ReactNode } from "react";
type CardProps = {
  title:string
  children?: ReactNode
}

export function Card({title,children}:CardProps){
  
  return(
    <div className={`px-4 py-4 border shadow-sm rounded  border-gray-300 hover:border-gray-300 hover:border hover:-translate-y-2  transition-all duration-500 ease-in-out  items-center justify-center bg-backgroudBlue-100`
  }
    >
      <div className="relative">
          <div className="absolute z-[1] top-1 left-4 ">
            <Image
            src={Logo}
            fill={false}
            alt="Logo ATM"
            width={36}
            height={36}
            />
            </div>
          <div className="h-10">

          </div>
        </div>
        <div className="flex flex-col py-4 pt-0 justify-between min-h-14">
        <div>
          <div className="mt-3">
            <h1 className="text-1xl font-serif font-bold text-gray-300">
              {title}
            </h1>
            </div>
            <div className="mt-3">
            {children}
            </div>
          
          </div>

        </div>


    </div>
  )
}