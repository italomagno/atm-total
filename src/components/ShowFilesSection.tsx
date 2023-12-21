"use client"

import { CardSection } from "./CardSections"
import { Header } from "./shared/Header"
import { ShowFilesSection } from "./ShowFilesComponent"



export function MainComponent(){
  return(
    <main className=" bg-backgroudWhite-100 min-h-screen">
    <Header />
    <CardSection/>
    <ShowFilesSection />
  </main>
  )
}