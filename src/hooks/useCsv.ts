export async function handleFiles(selectedFile: File) {
    const reader = new FileReader();

    reader.onload = function (event) {
        //@ts-ignore
        const text = event.target.result as string;
        processCSV(text);
    };

    reader.readAsText(selectedFile);
}

function processCSV(text: string) {
    // Dividir o texto em linhas
    const lines = text.split('\n');


    const result = [];

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

    for (let i = headers.indice-1; i > 0; i--) {
        const obj = {};
        let currentlineTest = lines[i]
        if (currentlineTest.length !== 0) {
            let currentline = lines[i].split(';');
            for (let j = 0; j < headers.header.length; j++) {
                //@ts-ignore
                obj[headers.header[j]] = currentline[j];
            }
            result.push(obj);
        } else {
            throw Error("pequitio verde")
        }
    }
    console.log(result)

    // Exibir o resultado
}
