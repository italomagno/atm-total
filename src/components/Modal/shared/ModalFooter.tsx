import { ReactNode } from "react"

type ModalFooterProps={
    children:ReactNode
}


export function ModalFooter({children}:ModalFooterProps){
    return(
        <div className="absolute bottom-0 h-24  border-t w-full left-0 flex justify-evenly   shadow-t-lg items-center">
                {children}
            </div>
    )
}