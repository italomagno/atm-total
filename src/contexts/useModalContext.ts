import { ReactNode, createContext, useContext } from "react"


type TModalContext = {
    handleToggleModal: ()=>void,
    isOpen: boolean,
}


export const ModalContext = createContext<TModalContext>({
    handleToggleModal:()=>{},
    isOpen:false
})


export function useModalContext(){
    return useContext(ModalContext)
}