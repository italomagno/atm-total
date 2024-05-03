
import { Card } from "./Card";
import { ButtonPicker } from "./shared/ButtonPicker";
import Image from "next/image";
import aviation from "@/assets/aviao-clouds.jpg"



export function CardSection(){

  return(
    <section className="pt-56 w-dvh relative grid grid-cols-1 p-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-2">
   
      <Image 
      src={aviation}
      alt="Aviation Image"
      sizes="auto"
      className="w-dvw h-dvh absolute -z-[1]"
      />

      <Card
      title="Selecione a pasta dos dados SOT"
      children={<ButtonPicker/>}
      />
      
      
    </section>
  )
}