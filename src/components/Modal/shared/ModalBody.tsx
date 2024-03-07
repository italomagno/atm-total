import { ReactNode } from "react"

type ModalBodyProps = {
    children: ReactNode
}


export function ModalBody({children}:ModalBodyProps){
    return(
        <div className="px-4 py-2 w-full flex flex-col items-center">
            {children}
        </div>
    )
}