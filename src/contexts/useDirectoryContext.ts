import { folderType } from "@/types";
import {  createContext, useContext } from "react";

type TDirectoryContext={
  folderName:string
  folders: folderType[],
  handleFolderPick:(fileEndingName:string)=>void;
  handleEraseFolder:()=>void;
  selectedFileType:string
}
  export const DirectoryContext = createContext<TDirectoryContext|null>(null)
  export function useDirectoryContext(){
    return useContext(DirectoryContext)
  }









