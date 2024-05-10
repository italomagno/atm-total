"use client"

import { Header } from "../shared/Header"
import Image from "next/image";
import aviation from "@/assets/aviao-clouds.jpg"
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode
}


export function Layout({children}:LayoutProps){
    return(
    <main className=" min-h-screen">
    <Header />
    <section className="pt-56 w-dvh relative grid grid-cols-1 p-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-2">
      <Image 
      src={aviation}
      alt="Aviation Image"
      sizes="auto"
      className="w-dvw h-dvh absolute -z-[1]"/>
      {children}
    </section>

  </main>
    )
}