
import { useDirectoryContext } from "@/contexts/useDirectoryContext"
import { X } from "@phosphor-icons/react"

export function ButtonPicker() {
  const folder = useDirectoryContext()



  return (
    folder?.folderName
      ?
      <div className="gap-2 w-full bg-white rounded-lg px-2 py-2 flex itens-center justify-between">
        <div className="my-auto">
          <p className="text-3xl align-center">
            {folder?.folderName}
          </p>
        </div>
        <button onClick={folder.handleEraseFolder}>
          <p>
            <X size={29} weight="bold"/>
          </p>
        </button>
      </div>
      :
      <button onClick={folder?.handleFolderPick} className="gap-2 w-full bg-white rounded-lg px-2 py-2  ">
        <div>Escolher Pasta</div>
      </button>



  )
}