export async function handleHtmlFile(selectedFile: File): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function (event) {
            try {
                //@ts-ignore
                const htmlContent = event.target.result as string;
                const result = processHTML(htmlContent);
                console.log(result)
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

function processHTML(htmlContent: string): string[] {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    
    const paragraphs = doc.querySelectorAll('p');
    const texts = Array.from(paragraphs).map(p => p.textContent || '');

    return texts; // Retorna um array de textos dos parágrafos
}
