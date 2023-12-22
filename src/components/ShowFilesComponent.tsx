import { useDirectoryContext } from "@/contexts/useDirectoryContext"
import { handleFiles } from "@/hooks/useCsv"
import { Eye } from "@phosphor-icons/react"





export function ShowFilesSection(){
    const folder = useDirectoryContext()


    return(
        <div className="container mx-auto">
        {
        folder?.files.map((file,i)=>
           <div key={i} className="flex justify-between items-center gap-2 bg-white w-full rounded px-4 py-2 mb-2 hover:-translate-y-2  transition-all duration-500 ease-in-out">
             {
                file.type === "text/csv" ?
                <>
                <div>
                            {file.name}
                        </div>
                        <button onClick={() => { handleFiles(file) } }>
                                <Eye />
                            </button>
                            </>
            :
            <div >
               {`O arquivo ${file.name} Não é um arquivo csv Válido.`}
            </div>
            


             }
           </div>
            )}
        </div>
    )

}