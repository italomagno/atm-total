export type folderType = {
    folderName:string,
    files: newFileType[]
}

type ErrorFileType = {
    ObjectWithError:{},
    line:number
}
type ErrorFileTypeObj = {}



export type newFileType = {
        filesWithError:ErrorFileType[],
        filesWithoutError:ErrorFileTypeObj[],
}

