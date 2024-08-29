
"use client"
import { useDirectoryContext } from "@/contexts/useDirectoryContext"
import { UploadIcon, X } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import { Button } from "./button";


type ButtonPickerProps = {
  fileName?:string
  disabled:boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function ButtonPicker({fileName,disabled,...rest}:ButtonPickerProps) {
  const folder = useDirectoryContext()

  return (
 
   folder?.folderName && folder.selectedFileType === fileName
      ?
      <>
      <div className="gap-2 w-full bg-white rounded-lg px-2 py-2 flex itens-center justify-between">
        <div className="my-auto">
          <div className="flex justify-between w-full">
            <div>
            <p className="text-base align-center">
            {folder.folderName}
            </p>
            </div>
          </div>
        </div>
        <Button  onClick={folder.handleEraseFolder}>
            <X size={29} />
        </Button>
      </div>
      </>
      :
      <Button variant={"default"}  {...rest} onClick={()=>{
        fileName? folder?.handleFolderPick(fileName): folder?.handleCheckFolder()
        }} disabled={disabled} className={`gap-2 w-full  rounded-lg px-2 py-2 ${disabled && "cursor-not-allowed bg-red-300"}`}>
           <UploadIcon/> 
           {!disabled? "Selecionar pasta": "Não Disponível"}
      </Button>
      
      
 
  )
}