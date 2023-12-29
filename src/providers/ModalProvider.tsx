"use client"
import { ModalContext } from "@/contexts/useModalContext";
import { ReactNode, useState } from "react";

type DirectoryProviderType = {
    children: ReactNode
  }


export function ModalProvider({children}:DirectoryProviderType){
    const [isOpen,setIsOpen] = useState(false)

 function handleToggleModal (){
  setIsOpen(!isOpen)
}

return(
  <ModalContext.Provider value={{handleToggleModal,isOpen}}>
    {children}
  </ModalContext.Provider>
)

}