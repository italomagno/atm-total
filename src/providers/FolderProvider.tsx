"use client";
import { DirectoryContext } from "@/contexts/useDirectoryContext";
import { handleFiles } from "@/hooks/useCsv";
import { yearSotBuilder } from "@/lib/utils";
import { ErrorFileType, folderType, newFileType } from "@/types";
import { ReactNode, useState } from "react";
import { useToast } from "@/components/ui/use-toast"


type DirectoryProviderProps = {
  children: ReactNode;
};

export function DirectoryProvider({ children }: DirectoryProviderProps) {
    const { toast } = useToast()
  const [folders, setFolders] = useState<folderType[]>([]);
  const [mainFolderName, setMainFolderName] = useState("");
  const [selectedFileType, setSelectedFileType] = useState("");

  const handleFolderPick = async (fileEndingName: string) => {
    setSelectedFileType(fileEndingName);
    try {
      const folderObject: folderType = {
        folderName: "",
        files: [],
      };
      // @ts-ignore
      const handler = await window.showDirectoryPicker();
      setMainFolderName(handler.name);

      for await (const folder of handler.values()) {
        if (folder.kind === "directory") {
          let folderObjectInsideDirectory: folderType = {
            folderName: folder.name,
            files: [],
          };
          for await (const file of folder.values()) {
            const parsedName = file.name.split("_");
            const isConfigAtPosition3 = parsedName[3]?.includes(fileEndingName);
            if (isConfigAtPosition3 && file.kind === "file") {
              const data = await file.getFile();
              const dataAnalyzedWithoutName = await handleFiles(data);
              const dataAnalyzed = {
                ...dataAnalyzedWithoutName,
                name: file.name,
              };
              folderObjectInsideDirectory.files.push(dataAnalyzed);
            }
          }
          setFolders((oldFolders) => [...oldFolders, folderObjectInsideDirectory]);
        } else {
          const file = folder;
          const folderName = handler.name;
          folderObject.folderName = folderName;
          const parsedName = file.name.split("_");
          const isConfigAtPosition3 = parsedName[3]?.includes(fileEndingName);
          if (isConfigAtPosition3 && file.kind === "file") {
            const data = await file.getFile();
            const dataAnalyzed = await handleFiles(data);
            folderObject.files.push(dataAnalyzed);
          }
        }
        if (folderObject.folderName) {
          setFolders((oldFolders) => [...oldFolders, folderObject]);
        }
      }
    } catch (e) {
      const error = e as Error;
      console.log(error)
      if (error.name === "AbortError") {
        toast({
            title: "Erro",
            description: "Nenhuma pasta selecionada."
        });
      } else {
        toast({
            title: "Erro",
            description: `Esse navegador não é suportado. Tente utilizar o Google Chrome. Erro do servidor: ${error}`
        });
      }
      console.error(e);
    }
  };

  function handleEraseFolder() {
    setFolders([]);
    setMainFolderName("");
  }

  const handleCheckFolder = async () => {
    try {
      const folderObject: folderType = {
        folderName: "",
        files: [],
      };
      // @ts-ignore
      const handler = await window.showDirectoryPicker();
      setMainFolderName(handler.name);
      const yearTotal = yearSotBuilder(2023);
  
      for await (const folder of handler.values()) {
        if (folder.kind === "directory") {
          let folderObjectInsideDirectory: folderType = {
            folderName: folder.name,
            files: [],
          };
  
          for await (const file of folder.values()) {
            const parsedName = file.name.split("_");
            const month = Number(parsedName[1]);
            const day = Number(parsedName[2]);
            const type = parsedName[3];
            
            const findIndexMonth = yearTotal.findIndex(
              (indexToFind) => indexToFind.month === month
            );
            if (findIndexMonth >= 0) {
              const findIndexDay = yearTotal[findIndexMonth].days.findIndex(
                (indexToFind) => indexToFind.day === day
              );
              if (findIndexDay >= 0) {
                const files = yearTotal[findIndexMonth].days[findIndexDay].files.filter(
                  (file) => file !== type
                );
                yearTotal[findIndexMonth].days[findIndexDay].files = files;
                if (files.length === 0) {
                  yearTotal[findIndexMonth].days.splice(findIndexDay, 1);
                }
                if (yearTotal[findIndexMonth].days.length === 0) {
                  yearTotal.splice(findIndexMonth, 1);
                }
              }
            }
          }
  
          // Creating the newYearTotalToNewFiles outside of the loop
          const newYearTotalToNewFiles = yearTotal.map((month) => {
            const errorFiles: ErrorFileType[] = month.days.map((day) => ({
              line: 0,
              ObjectWithError: {
                day: day.day,
                files: day.files,
              },
            }));
  
            const filesWithoutError = month.days.map((day) => ({
              day: day.day,
              files: day.files.filter(
                //@ts-ignore
                (file) => !errorFiles.some((error) => error.ObjectWithError.files.includes(file))
              ),
            }));
  
            // Note: `day` is now in the correct scope here as it comes from `month.days`
            const fileType: newFileType = {
              name: `${2024}_${month.month}_${month.days[0]?.day || 1}`,
              filesWithError: errorFiles,
              filesWithoutError,
            };
  
            return fileType;
          });
  
          setFolders((oldFolders) => [...oldFolders, folderObjectInsideDirectory]);
        } else {
          throw new Error("Selecione Pastas contendo os arquivos .csv");
        }
  
        if (folderObject.folderName) {
          setFolders((oldFolders) => [...oldFolders, folderObject]);
        }
      }
    } catch (e) {
      const error = e as Error;
      
      if (error.message === "Selecione Pastas contendo os arquivos .csv") {
        toast({
          title: "Erro",
          description: "Selecione a pasta raiz contendo meses, e dentro dos meses os arquivos .csv"
        });
      } else if (error.name === "AbortError") {
        toast({
          title: "Erro",
          description: "Nenhuma pasta selecionada."
        });
      } else {
        toast({
          title: "Erro",
          description: `Esse navegador não é suportado. Tente utilizar o Google Chrome. Erro do servidor: ${error}`
        });
      }
      console.error(e);
    }
  }

  /*
  const handleCheckFolder = async () => {
    try {
      const folderObject: folderType = {
        folderName: "",
        files: [],
      };
      // @ts-ignore
      const handler = await window.showDirectoryPicker();
      setMainFolderName(handler.name);
      const yearTotal = yearSotBuilder(2023);

      for await (const folder of handler.values()) {
        if (folder.kind === "directory") {
          let folderObjectInsideDirectory: folderType = {
            folderName: folder.name,
            files: [],
          };

          for await (const file of folder.values()) {
            const parsedName = file.name.split("_");
            const month = Number(parsedName[1]);
            console.log(month)
            const day = Number(parsedName[2]);
            const type = parsedName[3];
            const findIndexMonth = yearTotal.findIndex(
              (indexToFind) => indexToFind.month === month
            );
            if (findIndexMonth >= 0) {
              const findIndexDay = yearTotal[findIndexMonth].days.findIndex(
                (indexToFind) => indexToFind.day === day
              );
              if (findIndexDay >= 0) {
                const files = yearTotal[findIndexMonth].days[findIndexDay].files.filter(
                  (file) => file !== type
                );
                yearTotal[findIndexMonth].days[findIndexDay].files = files;
                if (files.length === 0) {
                  yearTotal[findIndexMonth].days.splice(findIndexDay, 1);
                }
                if (yearTotal[findIndexMonth].days.length === 0) {
                  yearTotal.splice(findIndexMonth, 1);
                }
              }
            }
          }

          const newYearTotalToNewFiles = yearTotal.map((month) => {
            const errorFiles: ErrorFileType[] = month.days.map((day) => ({
              line: 0,
              ObjectWithError: {
                day: day.day,
                files: day.files,
              },
            }));

            const filesWithoutError = month.days.map((day) => ({
              day: day.day,
              files: day.files.filter(
                //@ts-ignore
                (file) => !errorFiles.some((error) => error.ObjectWithError.files.includes(file))
              ),
            }));

            const fileType: newFileType = {
                //@ts-ignore
              name: `${2024}_${month.month}_${day.day}`,
              filesWithError: errorFiles,
              filesWithoutError,
            };

            return fileType;
          });

          setFolders((oldFolders) => [...oldFolders, folderObjectInsideDirectory]);
        } else {
          throw new Error("Selecione Pastas contendo os arquivos .csv");
        }

        if (folderObject.folderName) {
          setFolders((oldFolders) => [...oldFolders, folderObject]);
        }
      }
    } catch (e) {
      const error = e as Error;
      
      if (error.message === "Selecione Pastas contendo os arquivos .csv") {
        toast({
            title: "Erro",
            description: "Selecione a pasta raiz contendo meses, e dentro dos meses os arquivos .csv"
        });
       
      } else if (error.name === "AbortError") {
        toast({
            title: "Erro",
            description: "Nenhuma pasta selecionada."
        });
      } else {
        toast({
            title: "Erro",
            description: `Esse navegador não é suportado. Tente utilizar o Google Chrome. Erro do servidor: ${error}`
        });
      }
      console.error(e);
    }
  };
  */

  return (
    <div>
      <DirectoryContext.Provider
        value={{
          selectedFileType,
          folders,
          handleCheckFolder,
          handleFolderPick,
          handleEraseFolder,
          folderName: mainFolderName,
        }}
      >
        {children}
      </DirectoryContext.Provider>
    </div>
  );
}
