"use client"

import { CardSection } from "./CardSections"
import { Header } from "./shared/Header"



export function MainComponent(){
  return(
    <main className=" bg-backgroudWhite-100 min-h-screen">
    <Header />
    <CardSection/>
  
  </main>
  )
}