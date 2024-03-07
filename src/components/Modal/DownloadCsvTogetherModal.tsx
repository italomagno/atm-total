
import { useDirectoryContext } from "@/contexts/useDirectoryContext";
import { FileHeaderType } from "@/types";
import { ChangeEvent, useState } from "react";
import { exportCsv } from "@/hooks/useCsv";
import { ModalBody } from "./shared/ModalBody";
import { SelectHeadersComponent } from "../SelectHeadersComponent";
import { ModalHeader } from "./shared/ModalHeader";
import { ModalBackground } from "./shared/ModalBackGround";
import { ModalFooter } from "./shared/ModalFooter";
import { ButtonDownloadCsv } from "../shared/ButtonDownloadCsv";



export function DownloadCsvTogetherModal() {

    const folder = useDirectoryContext()


    const [fileHeader, setFileHeader] = useState<FileHeaderType[]>(() => {
        return (Object.keys(folder?.folders[0].files[0].filesWithoutError[0]!).map(h => ({
            header: h,
            isChecked: true
        })))
    })

    function handleCheckedBox(e: ChangeEvent<HTMLInputElement>, headerFromWindow: string) {
        const newFileHeader = fileHeader.map(header => {
            if (headerFromWindow === header.header) {
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

        // Agora, use este URL para forçar o download
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${folder?.folderName}.csv`);
        document.body.appendChild(link);
        link.click();
        //@ts-ignore
        link.parentNode.removeChild(link);
    }




    return (
        <ModalBackground>
            <ModalHeader
                title="Download arquivo Csv"
            />
            <ModalBody>
                <SelectHeadersComponent
                    fileHeader={fileHeader}
                    handleCheckedBox={handleCheckedBox}
                />
            </ModalBody>
            <ModalFooter>
                <ButtonDownloadCsv
                handleDownload={handleDownload}/>
            </ModalFooter>
        </ModalBackground>

    )
}