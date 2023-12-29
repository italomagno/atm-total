"use client"

import { useModalContext } from "@/contexts/useModalContext"
import { CardSection } from "./CardSections"
import { Header } from "./shared/Header"
import { ShowFilesSection } from "./ShowFilesComponent"
import { Modal } from "./shared/Modal"



export function MainComponent(){
  const {isOpen} = useModalContext()


  return(
    <main className=" bg-backgroudWhite-100 min-h-screen">
    <Header />
    <CardSection/>
    <ShowFilesSection />
    
    {
      isOpen?
      <Modal />
      :null 
    }

  </main>
  )
}