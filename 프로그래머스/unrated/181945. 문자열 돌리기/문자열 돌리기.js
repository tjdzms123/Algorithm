const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input += line + '\n';
}).on('close', function () {
    rotateString90Degrees(input.trim());
});

function rotateString90Degrees(inputStr) {
    const lines = inputStr.split('\n');
    const maxLength = Math.max(...lines.map(line => line.length));

    const rotatedLines = [];
    for (let i = 0; i < maxLength; i++) {
        const rotatedLine = lines.map(line => (i < line.length ? line[i] : ' ')).join('');
        rotatedLines.push(rotatedLine);
    }

    const rotatedOutput = rotatedLines.join('\n');
    console.log(rotatedOutput);
}
