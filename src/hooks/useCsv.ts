import { newFileType } from "@/types";

export async function handleFiles(selectedFile: File): Promise<newFileType> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function (event) {
            try {
                //@ts-ignore
                const text = event.target.result as string;
                const result = processCSV(text);
                resolve(result); // Resolve a Promise com o resultado
            } catch (error) {
                reject(error); // Rejeita a Promise em caso de erro
            }
        };

        reader.onerror = function (error) {
            reject(error); // Rejeita a Promise em caso de erro no FileReader
        };

        reader.readAsText(selectedFile);
    });
}

function processCSV(text: string) {
    // Dividir o texto em linhas
    const lines = text.split('\n');

    const result:newFileType = {
        filesWithError:[],
        filesWithoutError:[]
    }

    // Obter os cabeçalhos
    let headers: {
        header: string[],
        indice?: number
    } = {
        header: []
    }
    
    for (let i = lines.length-1; i > 0; i--) {
        if (lines[i].length !== 0 ) {
            headers.header = lines[i].split(";")
            headers.indice = i
            break
        }
    }

    if (!headers.indice) {
        throw Error("pequitio azul"+JSON.stringify(headers,null,2))
    }

    const linesSliced = lines.slice(0,headers.indice)

    for (let i = 0; i < linesSliced.length; i++) {
        const obj = {};
        let currentlineTest = lines[i]
        if (currentlineTest.length !== 0) {
            let currentline = lines[i].split(';');
            for (let j = 0; j < headers.header.length; j++) {
                //@ts-ignore
                obj[headers.header[j]] = currentline[j];
            }

                //@ts-ignore
            const hasRepetition = result.filesWithoutError.find(row=>row["time"] === obj["time"])
            if(hasRepetition){
                result.filesWithError.push({ObjectWithError:obj,line:i})
            }else{
                result.filesWithoutError.push(obj);
            }
        } else {
            throw Error("pequitio verde")
        }
    }

    return result


}
