"use client"

import { useModalContext } from "@/contexts/useModalContext"
import { CardSection } from "../CardSections"
import { ShowFilesSection } from "../ShowFilesComponent"
import { DownloadCsvTogetherModal } from "../Modal/DownloadCsvTogetherModal"
import { ActionSection } from "../ActionSection"
import { Layout } from "../shared/Layout"
import { SharedBody } from "./shared/SharedBody"
import { NavItemsProps } from "@/types"



export function ErrorsComponent(){
  const {isOpen} = useModalContext()
  const navMenu:NavItemsProps[] = [{
    category:"Procurar Erros no SOT",
    links:[
      {href:"",
      name:"Seleção de arquivos",
      isActive:true
      }
    ]
  }]


  return(
    <Layout>
      <SharedBody
      asideMenu={navMenu}
      >
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

      </SharedBody>
   

</Layout>
  )
}