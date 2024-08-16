
import { Card } from "./Card";
import { ButtonPicker } from "./shared/ButtonPicker";

type CardSectionProps = {
  sect?: boolean;
  flights?: boolean;
  config?: boolean;
}

export function CardSection( {sect, flights, config}: CardSectionProps){

  return(
    <section className=" w-dvh relative grid grid-cols-1 p-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-2">
      
     { 
     sect &&
     <Card
      title="Selecione a pasta do com arquivos sect_config.csv"
      children={<ButtonPicker 
        disabled={true}
        fileName="sect"/>}
      />}

     { 
      flights &&
      <Card
      title="Selecione a pasta do com arquivos flights.csv"
      children={<ButtonPicker
        disabled={true}
        fileName="flights.csv"/>}
      />}
     { 
      config &&
      <Card
      title="Selecione a pasta do com arquivos config.csv"
      children={<ButtonPicker 
        disabled={false}
        fileName="config.csv"/>}
      />}
    </section>
  )
}