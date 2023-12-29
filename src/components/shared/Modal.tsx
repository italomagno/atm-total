
import { useDirectoryContext } from "@/contexts/useDirectoryContext";
import { useModalContext } from "@/contexts/useModalContext";
import { FileArrowDown, X } from "@phosphor-icons/react";
import { CheckBoxInput } from "./CheckBoxInput";
import { FileHeaderType, newFileType } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";
import { exportCsv } from "@/hooks/useCsv";



export function Modal(){
 
const {handleToggleModal} = useModalContext()
const folder = useDirectoryContext()

const [fileHeader, setFileHeader] = useState<FileHeaderType[]>(()=>{
    return(Object.keys(folder?.folders[0].files[0].filesWithoutError[0]!).map(h=>({
        header:h,
        isChecked:true
    })))
})
const [urlToDownload,setUrlToDownload] = useState("")

function handleCheckedBox(e:ChangeEvent<HTMLInputElement>,headerFromWindow:string){
    const newFileHeader = fileHeader.map(header=>{
        if(headerFromWindow === header.header){
            return {
                ...header,
                    isChecked: e.target.checked
            }
        }
        return header
    })
    setFileHeader(newFileHeader)
}

async function handleDownload() {
    const newFolder: any = [];
    folder?.folders.forEach(f => {
        f.files.forEach(file => newFolder.push(file));
    });
    const newHeaders = fileHeader.filter(h => h.isChecked).map(h => h.header);
    const url = await exportCsv({ folder: newFolder, headers: newHeaders });
    setUrlToDownload(url);

    // Agora, use este URL para forçar o download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${folder?.folderName}.csv`);
    document.body.appendChild(link);
    link.click();
    //@ts-ignore
    link.parentNode.removeChild(link);
}




    return(
      <div className="absolute w-full h-full z-10 top-0 left-0  bg-black/[.3]  " onClick={handleToggleModal}>
        <div className="w-full h-full flex justify-center items-center" >
        <div className="container relative h-2/3 bg-white py-4 rounded-lg relative z-[15]" onClick={(e)=>e.stopPropagation()}>


            {/* header */}
            <div className="flex justify-between items-center px-2 border-b p-4">
                <div>Download arquivo Csv </div>
                <button onClick={()=>handleToggleModal()}><X /></button>
            </div>
                <div className="px-4 py-2 w-full flex flex-col items-center">
                    <div className="my-5">
                        Selectione os Headers que deseja emitir o CSV
                    </div>
                    {
                        fileHeader ? 
                        fileHeader.map(({isChecked,header})=>{
                            return(
                                <div className="mb-4">
                                {
                                    <CheckBoxInput
                                    isChecked={isChecked}
                                    name={header}
                                    onChange={(e)=>handleCheckedBox(e,header)}
                                    />
                                }
                                </div>
                            )
                        })
                        :
                        <div>
                            Houve um Erro Ao carregar os Headers. Pelo visto existe algum dos arquivos em que o header não se encontra na ultima linha. por favor verificar.
                        </div>
                    }
                </div>
            <div className="absolute bottom-0 h-24  border-t w-full left-0 flex justify-evenly   shadow-t-lg items-center">
            <a className="w-1/3 bg-green-600/[.6] rounded-lg py-2 hover:bg-green-600 transition-all flex justify-evenly items-center" 
            onClick={handleDownload}>
            <FileArrowDown size={48} />
        </a>
        

            
            </div>
            
        </div>
        </div>

    </div>
    )
}