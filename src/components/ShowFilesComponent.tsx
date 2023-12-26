import { useDirectoryContext } from "@/contexts/useDirectoryContext"
import { handleFiles } from "@/hooks/useCsv"
import { newFileType } from "@/types"
import { Eye, EyeClosed } from "@phosphor-icons/react"
import {useState } from "react"





export function ShowFilesSection() {
3
    const folder = useDirectoryContext()
    const [files,setFiles] = useState<newFileType[]>([])
    const [selectedFolder,setSelectedFolder] = useState("")
    const [ selectedFile,setSelectedFile] = useState("")
    function handleShowFiles(filesFromFolder: newFileType[],folderName:string) {
        setSelectedFolder(folderName)
        if(files.length > 0){
            setFiles([])
        }else{
            console.log(filesFromFolder)
            setFiles(filesFromFolder)
        }
    }

    function handleShowDataInsideOfAFile(file:File,selectedFileFromWindow:string){
        if(selectedFileFromWindow === selectedFile){
            setSelectedFile("")

        }else{
            setSelectedFile(selectedFileFromWindow)
            handleFiles(file)
        }
    }

    return (
        <div className="container mx-auto">
            {
                folder?.folders.map((file, i) =>{
                const hasErrors = file.files.map(file=>file.filesWithError.length).reduce((prev,curr)=>prev+curr,0) > 0
                    return <div key={i} >
                        {
                            <>
                            <div className={`flex justify-between items-center gap-2 ${ hasErrors ? "bg-red-200": "bg-gray-300"} w-full rounded px-4 py-2 mb-2 hover:-translate-y-2  transition-all duration-500 ease-in-out`}>
                                <div>
                                    {file.folderName}
                                </div>
                                <button onClick={() => handleShowFiles(file.files,file.folderName)}>
                                    {(files.length > 0 && file.folderName === selectedFolder) ? <EyeClosed  /> : <Eye /> }
                                </button>
                            </div>
                            {/* {
                            files.map((file)=>
                            <div key={file.name} className="flex justify-between items-center gap-2 bg-white w-full rounded px-4 py-2 mb-2 hover:-translate-y-2  transition-all duration-500 ease-in-out">
                                <div>
                                    {file.name}
                                    </div>
                                    <button onClick={()=>{handleShowDataInsideOfAFile(file,file.name)}}>
                                    {(selectedFile === file.name) ? <EyeClosed  /> : <Eye /> }
                                </button>

                            </div>
                            )
                            } */}

                            </>
                        }
                    </div>
                })}
            
        </div>
    )

}