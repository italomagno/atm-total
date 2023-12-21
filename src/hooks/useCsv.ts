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
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentline = lines[i].split(',');

        for (let j = 0; j < headers.length; j++) {
            //@ts-ignore
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    }
    console.log(result)

    // Exibir o resultado
}
