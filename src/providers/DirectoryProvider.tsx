"use client"
import { DirectoryContext } from "@/contexts/useDirectoryContext"
import { handleFiles } from "@/hooks/useCsv"
import { folderType } from "@/types"
import { ReactNode, useState } from "react"
import { toast } from "react-toastify"

type DirectoryProviderProps = {
  children: ReactNode
}


export function DirectoryProvider({ children }: DirectoryProviderProps) {
  const [folders, setFolders] = useState<folderType[]>([])
  const [mainFolderName,setMainFolderName] = useState("")
  const [selectedFileType,setSelectedFileType] = useState("")

  const handleFolderPick = async (fileEndingName:string) => {
    setSelectedFileType(fileEndingName)
    try {
      const folderObject: folderType = {
        folderName: "",
        files: []
      }
      // @ts-ignore
      const handler = await window.showDirectoryPicker();
      setMainFolderName(await handler.name)

      for await (const folder of handler.values()) {
        if (folder.kind === "directory") {
          let folderObjectInsideDirectory: folderType = {
            folderName: folder.name,
            files: []
          }
          for await (const file of folder.values()) {
            const parsedName = (file.name.split("_"))
            const isConfigAtPosition3 = parsedName[3].includes(fileEndingName)
            if (isConfigAtPosition3) {
              if (file.kind === "file") {
                const isHtml = file.name.includes(".html")
                
                const data = await file.getFile();
                const dataAnalyzedWithoutName = await handleFiles(data)
                const dataAnalyzed = {
                  ...dataAnalyzedWithoutName,
                  name: file.name
                }
                folderObjectInsideDirectory.files.push(dataAnalyzed);
              }
            }
          }
          setFolders(oldFolder => [...oldFolder, folderObjectInsideDirectory])
        } else {
          const file = folder
          const folderName = await handler.name
          folderObject.folderName = folderName
          const parsedName = (file.name.split("_"))
          const isConfigAtPosition3 = parsedName[3] === "config.csv"
          if (isConfigAtPosition3) {
            if (file.kind === "file") {
              const data = await file.getFile();
              const dataAnalyzed = await handleFiles(data)
              folderObject.files.push(dataAnalyzed);
            }
          }
        }
        const hasSetNameOnFolderObject = folderObject.folderName !== ""
        if (hasSetNameOnFolderObject) {
          setFolders([...folders, folderObject])
        }
      }
    } catch (e) {
      const error = e
      if(String(error).includes("AbortError")){
        toast.error("Nenhuma pasta selecionada.",{position: "bottom-center"})
      }else{
      toast.error("Esse navegador não é suportado. Tente utilizar o Google Chrome.",{position: "bottom-center"})
      }
      console.error(e);
    }
  };
  function handleEraseFolder() {
    setFolders([])
    setMainFolderName("")
  }

  return (
    <div>
      <DirectoryContext.Provider value={{selectedFileType, folders, handleFolderPick, handleEraseFolder,folderName:mainFolderName }} >
        {children}
      </DirectoryContext.Provider>
    </div>
  )
}

