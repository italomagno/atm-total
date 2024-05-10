
import { Card } from "./Card";
import { ButtonPicker } from "./shared/ButtonPicker";



export function CardSection(){

  return(
    <section className=" w-dvh relative grid grid-cols-1 p-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-2">
      <Card
      title="Selecione a pasta do com arquivos sect_config.csv"
      children={<ButtonPicker 
        disabled={true}
        fileName="config.csv"/>}
      />
      <Card
      title="Selecione a pasta do com arquivos flights.csv"
      children={<ButtonPicker
        disabled={true}
        fileName="flights.csv"/>}
      />
      <Card
      title="Selecione a pasta do com arquivos config.csv"
      children={<ButtonPicker 
        disabled={false}
        fileName="sect"/>}
      />
    </section>
  )
}