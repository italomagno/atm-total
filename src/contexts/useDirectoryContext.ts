import {  createContext, useContext } from "react";

type TDirectoryContext={
  folderName:string|null
  files: File[],
  handleFolderPick:()=>void;
  handleEraseFolder:()=>void;
}

  export const DirectoryContext = createContext<TDirectoryContext|null>(null)

  export function useDirectoryContext(){
    return useContext(DirectoryContext)
  }









