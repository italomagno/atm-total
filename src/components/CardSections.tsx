
import { Card } from "./Card";
import { ButtonPicker } from "./shared/ButtonPicker";



export function CardSection(){

  return(
    <section className="container mx-auto grid grid-cols-1 p-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-2">

      <Card
      title="Selecione a pasta dos dados SOT"
      children={<ButtonPicker/>}
      />
      
      
    </section>
  )
}