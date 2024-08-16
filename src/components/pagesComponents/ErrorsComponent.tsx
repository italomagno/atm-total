"use client"

import { useModalContext } from "@/contexts/useModalContext"
import { CardSection } from "../CardSections"
import { ShowFilesSection } from "../ShowFilesComponent"
import { DownloadCsvTogetherModal } from "../Modal/DownloadCsvTogetherModal"
import { ActionSection } from "../ActionSection"
import { Layout } from "../shared/Layout"
import { SharedBody } from "./shared/SharedBody"
import { NavItemsProps } from "@/types"
import { useNavMenu } from "@/hooks/useNavMenu"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { NavBody } from "../NavBody"
import { ButtonPicker } from "../shared/ButtonPicker"



export function ErrorsComponent(){
  const {isOpen} = useModalContext()
  const pathName = usePathname()

  const navMenu:NavItemsProps[] = [{
    category:"Procurar Erros no SOT",
    links:[
      {
        href:"/errorsSot/sot",
      name:"Sot",
      isActive:true,
      node: <>
      <CardSection
      config={true}
      />
      
      <ShowFilesSection />
      {
        isOpen
        ?
        <DownloadCsvTogetherModal />
        :
        null 
      }
      </>
      },
      {
      href:"/errorsSot/miss",
      name:"Verificar falta de arquivos",
      isActive:false,
      node:<>
          <div className="flex p-4 w-full bg-gray-600 rounded-md mb-4">
            <p>Selecione a pasta dos arquivos para verificar se há arquivos faltantes.</p>
          </div>
          <ButtonPicker
          disabled={false}
          >
          </ButtonPicker> 
      </>
      },
      
    ]
  }]
  const {handleSelectedNavItem,nav} = useNavMenu(navMenu[0])
    
    useEffect(()=>{
        const index = nav.links.findIndex(index=>index.href === pathName)
        handleSelectedNavItem(index)
    },[])


  return(
    <Layout>
      <SharedBody
      asideMenu={[nav]}
      >
        <NavBody 
        nav={nav}
      />
      </SharedBody>
   

</Layout>
  )
}