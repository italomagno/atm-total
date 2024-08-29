import { Button } from "@/components/ui/button";
import { ButtonPicker } from "@/components/ui/ButtonPicker";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { UploadIcon } from "lucide-react";



export function UploadFileCard(){
    return(
        <Card
        className="sm:col-span-2" x-chunk="dashboard-05-chunk-0"
      >
        <CardHeader className="pb-3">
          <CardTitle>Carregar arquivo config.csv</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Selecione no seu computador a pasta com todos os arquivos sot.
          </CardDescription>
        </CardHeader>
        <CardFooter>
        <ButtonPicker disabled={false}/>
        </CardFooter>
      </Card>
    )
}