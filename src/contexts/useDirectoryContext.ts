import { folderType } from "@/types";
import {  createContext, useContext } from "react";

type TDirectoryContext={
  folders: folderType[],
  handleFolderPick:()=>void;
  handleEraseFolder:()=>void;
}
  export const DirectoryContext = createContext<TDirectoryContext|null>(null)
  export function useDirectoryContext(){
    return useContext(DirectoryContext)
  }









