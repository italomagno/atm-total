"use client"
import { DirectoryContext } from "@/contexts/useDirectoryContext"
import { ReactNode, useState } from "react"

type DirectoryProviderProps ={
  children:ReactNode
}

export function DirectoryProvider({children}:DirectoryProviderProps){
  const [files,setFiles] = useState<File[]>([])
  const [folderName,setFolderName] = useState<string|null>(null)

  const handleFolderPick = async () => {
      try {
          
          const filesFromUser = []
          // @ts-ignore
          const handler = await window.showDirectoryPicker();
          setFolderName(await handler.name)
          for await(const file of handler.values()) {
            if(file.kind === "file") {
              const data = await file.getFile();
              filesFromUser.push(data);
            }
          }
          setFiles(filesFromUser)
      } catch (e) {
          console.error(e);
      }
  };
  function handleEraseFolder(){
    setFiles([])
    setFolderName(null)
  }

return(
  <div>
    <DirectoryContext.Provider value={{files,handleFolderPick,folderName,handleEraseFolder}} >
      {children}
    </DirectoryContext.Provider>
  </div>
)  
  

        }
    
    