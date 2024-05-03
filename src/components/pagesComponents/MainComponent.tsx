"use client"

import { Header } from "../shared/Header"
import Image from "next/image";
import aviation from "@/assets/aviao-clouds.jpg"

export function MainComponent(){

  return(
    <main className=" min-h-screen">
    <Header />
    <section className="pt-56 w-dvh relative grid grid-cols-1 p-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-2">
      <Image 
      src={aviation}
      alt="Aviation Image"
      sizes="auto"
      className="w-dvw h-dvh absolute -z-[1]"/>
    </section>
   

  </main>
  )
}