import { ChangeEvent } from "react"
import { CheckBoxInput } from "./shared/CheckBoxInput"
import { FileHeaderType } from "@/types"

type SelectHeaderComponent = {
    fileHeader:FileHeaderType[]
    handleCheckedBox:(e:ChangeEvent<HTMLInputElement>,header:string)=>void
}

export function SelectHeadersComponent({fileHeader,handleCheckedBox}:SelectHeaderComponent){
   
    return(
        <>
        <div className="my-5">
                        Selectione os Headers que deseja emitir o CSV
                    </div>
                    {
                        fileHeader ? 
                        fileHeader.map(({isChecked,header})=>{
                            return(
                                <div className="mb-4">
                                {
                                    <CheckBoxInput
                                    isChecked={isChecked}
                                    name={header}
                                    onChange={(e)=>handleCheckedBox(e,header)}
                                    />
                                }
                                </div>
                            )
                        })
                        :
                        <div>
                            Houve um Erro Ao carregar os Headers. Pelo visto existe algum dos arquivos em que o header não se encontra na ultima linha. por favor verificar.
                        </div>
                    }
                    </>
        
    )
}