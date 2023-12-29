
import { useDirectoryContext } from "@/contexts/useDirectoryContext"
import { FileArrowDown, X } from "@phosphor-icons/react"
import { Modal } from "./Modal"
import { useModalContext } from "@/contexts/useModalContext"



export function ButtonPicker() {
  const folder = useDirectoryContext()
  const {handleToggleModal} = useModalContext()




  return (
 
   folder?.folderName
      ?
      <>
      <div className="gap-2 w-full bg-white rounded-lg px-2 py-2 flex itens-center justify-between">
        <div className="my-auto">
          <button className="flex justify-between w-full" onClick={handleToggleModal}>
            <div>
            <p className="text-3xl align-center">
            {folder.folderName}
          </p>
          </div>
            <div className="flex itens-center my-auto ">
            <FileArrowDown size={29} />
            </div>
          </button>

        </div>
        <button onClick={folder.handleEraseFolder}>
          <p>
            <X size={29} weight="bold"/>
          </p>
        </button>
      </div>
      </>
      :
      <button onClick={folder?.handleFolderPick} className="gap-2 w-full bg-white rounded-lg px-2 py-2  ">
        <div>Escolher Pasta</div>
      </button>
      
      
 
  )
}