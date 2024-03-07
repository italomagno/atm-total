import { FileArrowDown } from "@phosphor-icons/react";
import { useModalContext } from "@/contexts/useModalContext"
import { useDirectoryContext } from "@/contexts/useDirectoryContext";



export function ActionSection(){

    const {handleToggleModal} = useModalContext()
    const folder = useDirectoryContext()
    
    return(
        folder?.folderName
        ?
        <section className="my-4 px-4 py-3 flex justify-left items-center border shadow bg-white">
            <button className="px-4 py-2 text-black shadow rounded border-r flex gap-2 hover:-translate-y-2  transition-all duration-500 ease-in-out" onClick={handleToggleModal}>
             <div>
             <p>Download de dados em um único arquivo </p>
             </div>
            <div className="flex itens-center my-auto ">
            <FileArrowDown size={29} />
            </div>
            </button>
        </section>
        : 
        null
    )
}