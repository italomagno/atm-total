
import { Card } from "./Card";



export function CardSection(){

  return(
    <section className="container mx-auto grid grid-cols-3 p-4">

      <Card
      title="Selecione uma pasta"
      type="input"
      />
      

    </section>
  )
}