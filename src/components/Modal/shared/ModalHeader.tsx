import { X } from "phosphor-react"
import { useModalContext } from "@/contexts/useModalContext";


type ModalHeaderProps = {
    title:string
}

export function ModalHeader({title}:ModalHeaderProps){
const {handleToggleModal} = useModalContext()

    return(
        <div className="flex justify-between items-center px-5 border-b p-4">
                <div><p className="text-xl">{title}</p> </div>
                <button className="flex justify-center items-center" onClick={()=>handleToggleModal()}><X size={32}/></button>
            </div>
    )
}