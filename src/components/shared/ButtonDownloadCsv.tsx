import { FileArrowDown } from "phosphor-react"

type ButtonDownloadCsvProps={
    handleDownload:()=>void
}

export function ButtonDownloadCsv({handleDownload}:ButtonDownloadCsvProps){
    
    return(
        <button className="w-1/3 bg-green-600/[.6] rounded-lg py-2 hover:bg-green-600 transition-all flex justify-evenly items-center"
                    onClick={handleDownload}>
                    <FileArrowDown size={48} />
       </button>
    )
}