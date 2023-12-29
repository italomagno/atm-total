export type folderType = {
    folderName:string,
    files: newFileType[]
}

export type ErrorFileType = {
    ObjectWithError:{},
    line:number
}
export type ErrorFileTypeObj = {}

export type FileHeaderType = {
    
       header:string,
        isChecked:boolean
    
}

export type newFileType = {
        name:string,
        filesWithError:ErrorFileType[],
        filesWithoutError:ErrorFileTypeObj[],
}

