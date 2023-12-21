"use client"
import { DirectoryContext } from "@/contexts/useDirectoryContext"
import { ReactNode, useState } from "react"

type DirectoryProviderProps ={
  children:ReactNode
}

export function DirectoryProvider({children}:DirectoryProviderProps){
  const [files,setFiles] = useState<File[]>([])
  const [folderName,setFolderName] = useState("")

  const handleFolderPick = async () => {
      try {
          // Mostra um seletor de diretórios e espera o usuário escolher uma pasta
          
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
          // Itera sobre os arquivos na pasta escolhida
      } catch (e) {
          console.error(e);
      }
  };

return(
  <div>
    <DirectoryContext.Provider value={{files,handleFolderPick,folderName}} >
      {children}
    </DirectoryContext.Provider>
    
  </div>
)  
  

        }
    
    