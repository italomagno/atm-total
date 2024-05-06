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

export type NavItemsProps = {
    category:string,
    bgCategory?:string,
    textColor?:string,
    bgHover?:string,
    links:{name:string,
        href:string,
    isActive?:boolean
    }[]
}

