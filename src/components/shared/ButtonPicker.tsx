
import { useDirectoryContext } from "@/contexts/useDirectoryContext"
import { X } from "@phosphor-icons/react"
import { ButtonHTMLAttributes } from "react";


type ButtonPickerProps = {
  fileName:string
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
        <button onClick={folder.handleEraseFolder}>
          <p>
            <X size={29} weight="bold"/>
          </p>
        </button>
      </div>
      </>
      :
      <button {...rest} onClick={()=>folder?.handleFolderPick(fileName)} disabled={disabled} className={`gap-2 w-full bg-white rounded-lg px-2 py-2 ${disabled && "cursor-not-allowed bg-red-300"}`}>
        <div> {!disabled? "Escolher Pasta": "Não Disponível"}</div>
      </button>
      
      
 
  )
}