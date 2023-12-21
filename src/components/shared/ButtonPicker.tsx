import { useDirectoryContext } from "@/contexts/useDirectoryContext"


export function ButtonPicker(){
  const {handleFolderPick} = useDirectoryContext()

  return(
    <button onClick={handleFolderPick} className=" gap-2 w-full bg-white rounded-lg px-2 py-2">
      <div>Escolher Pasta</div>
    </button>
  )
}