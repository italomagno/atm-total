import { useDirectoryContext } from "@/contexts/useDirectoryContext"
import { handleFiles } from "@/hooks/useCsv"
import { ErrorFileType, ErrorFileTypeObj, newFileType, } from "@/types"
import { Eye, EyeClosed } from "@phosphor-icons/react"
import { useState } from "react"
import { FolderComponent } from "./FolderComponent"





export function ShowFilesSection() {
    const folder = useDirectoryContext()
    const [files, setFiles] = useState<newFileType[]>([])
    const [selectedFolder, setSelectedFolder] = useState("")
    const [selectedFilesWithout, setSelectedFileWithoutError] = useState("")

    const [selectedFileWithError, setSelectedFileWithError] = useState("")

    function handleShowFiles(filesFromFolder: newFileType[], folderName: string) {
        setSelectedFolder(folderName)
        if (files.length > 0) {
            setFiles([])
        } else {
            setFiles(filesFromFolder)
        }
    }

    function handleShowLinesWithError(file: ErrorFileType[], selectedFileFromWindow: string) {
        if (selectedFileFromWindow === selectedFileWithError) {
            setSelectedFileWithError("")
        } else {
            setSelectedFileWithError(selectedFileFromWindow)
        }
    }
    function handleShowLinesWithoutError(file: ErrorFileTypeObj[], selectedFileFromWindow: string) {
        if (selectedFileFromWindow === selectedFilesWithout) {
            setSelectedFileWithoutError("")
        } else {
            setSelectedFileWithoutError(selectedFileFromWindow)
        }
    }

    return (
        <div className="container mx-auto">
            {
                folder?.folders.map((file, i) => {
                    const hasErrors = file.files.map(file => file.filesWithError.length).reduce((prev, curr) => prev + curr, 0) > 0
                    return <div key={i} >
                        {
                            <>
                                <FolderComponent
                                    hasErrors={hasErrors}
                                    selectedFolder={selectedFolder}
                                    file={file}
                                    handleShowFiles={handleShowFiles}
                                    files={files}
                                />
                                {
                                    file.folderName === selectedFolder &&
                                    files.map((file) => {

                                        const hasError = file.filesWithError.length > 0

                                        return (
                                            <div key={file.name} className={` ${hasError ? "bg-red-200" : "bg-white"}  w-full rounded px-4 py-2 mb-2 hover:-translate-y-2  transition-all duration-500 ease-in-out`}>

                                                <div className="flex justify-between items-center gap-2">
                                                    <div>
                                                        {file.name}
                                                    </div>
                                                    {
                                                        hasError &&
                                                        <button className="flex gap 2 justify-center items-center" onClick={() => { handleShowLinesWithError(file.filesWithError, file.name) }} disabled={!hasError}>
                                                            <div className="mr-4">
                                                                Verificar erro
                                                            </div> {(selectedFileWithError === file.name) ? <EyeClosed /> : <Eye />}
                                                        </button>
                                                    }
                                                </div>

                                                {

                                                    (selectedFileWithError === file.name) &&
                                                    file.filesWithError.map(file => <div>
                                                        <div className="flex w-full justify-between">
                                                            <div>
                                                                Linha: {file.line}
                                                            </div>
                                                            <div>

                                                                {/*@ts-ignore*/}
                                                                repetição da hora: {file.ObjectWithError["time"]}
                                                            </div>

                                                        </div>
                                                    </div>)}
                                            </div>

                                        )
                                    })
                                }

                            </>
                        }
                    </div>
                })}

        </div>
    )

}