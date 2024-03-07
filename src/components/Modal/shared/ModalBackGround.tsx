import { useModalContext } from "@/contexts/useModalContext"
import { ReactNode } from "react"


type ModalBackgroundProps = {
children: ReactNode
}


export function ModalBackground({children}:ModalBackgroundProps){
const {handleToggleModal} = useModalContext()

    return(
        <div className="absolute w-full h-full z-10 top-0 left-0  bg-black/[.3]  " onClick={handleToggleModal}>
        <div className="w-full h-full flex justify-center items-center" >
        <div className="container relative h-2/3 bg-white py-4 rounded-lg relative z-[15]" onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
        </div>

    </div>

    )
}