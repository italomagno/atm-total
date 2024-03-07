"use client"

import { useModalContext } from "@/contexts/useModalContext"
import { CardSection } from "./CardSections"
import { Header } from "./shared/Header"
import { ShowFilesSection } from "./ShowFilesComponent"
import { DownloadCsvTogetherModal } from "./Modal/DownloadCsvTogetherModal"
import { ActionSection } from "./ActionSection"



export function MainComponent(){
  const {isOpen} = useModalContext()


  return(
    <main className=" bg-backgroudWhite-100 min-h-screen">
    <Header />
    <CardSection/>
    <ActionSection/>
    <ShowFilesSection />
    {
      isOpen
      ?
      <DownloadCsvTogetherModal />
      :
      null 
    }

  </main>
  )
}