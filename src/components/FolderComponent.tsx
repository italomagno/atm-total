import { folderType, newFileType } from "@/types"
import { Eye, EyeClosed } from "@phosphor-icons/react"

type FolderComponentType = {
    hasErrors: boolean
    selectedFolder:string
    file:folderType
    handleShowFiles:(filesFromFolder: newFileType[],folderName:string)=>void;
    files:newFileType[]
    
}
export function FolderComponent({file,files,selectedFolder,hasErrors,handleShowFiles}:FolderComponentType){

    return(
        <div className={`flex justify-between items-center gap-2 ${ hasErrors ? "bg-red-200": "bg-gray-300"} w-full rounded px-4 py-2 mb-2 hover:-translate-y-2  transition-all duration-500 ease-in-out`}>
                                <div>
                                    {file.folderName}
                                </div>
                                <button onClick={() => handleShowFiles(file.files,file.folderName)}>
                                    {(files.length > 0 && file.folderName === selectedFolder) ? <EyeClosed  /> : <Eye /> }
                                </button>
                            </div>
    )
}