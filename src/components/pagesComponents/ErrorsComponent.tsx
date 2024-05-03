"use client"

import { useModalContext } from "@/contexts/useModalContext"
import { CardSection } from "../CardSections"
import { ShowFilesSection } from "../ShowFilesComponent"
import { DownloadCsvTogetherModal } from "../Modal/DownloadCsvTogetherModal"
import { ActionSection } from "../ActionSection"
import { Layout } from "../shared/Layout"



export function ErrorsComponent(){
  const {isOpen} = useModalContext()

  return(
    <Layout>

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

</Layout>
  )
}