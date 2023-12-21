import {  createContext, useContext } from "react";

type TDirectoryContext={
  folderName:string
  files: File[],
  handleFolderPick:()=>void;
}

  export const DirectoryContext = createContext<TDirectoryContext|null>(null)

  export function useDirectoryContext(){
    return useContext(DirectoryContext)
  }









