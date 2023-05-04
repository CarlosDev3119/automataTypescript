"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lenguage_1 = require("./data/lenguage");
const vocabulary = [{ digitos: lenguage_1.digitos, signos: lenguage_1.signos, numeros: lenguage_1.numeros }];
const digitosLetra = [...vocabulary[0].digitos, ...vocabulary[0].numeros];
const runAutomata = (input) => {
    let state = 0;
    let variableName = '';
    for (let i = 0; i < input.length + 1; i++) {
        const char = input[i];
        switch (state) {
            case 0:
                let case0 = vocabulary[0].digitos.find(word => word === char);
                if (case0) {
                    state = 1;
                    variableName += char;
                }
                else {
                    return { resp: false, charRecorridos: variableName, cadena: input };
                }
                break;
            case 1:
                let case1 = digitosLetra.find(word => word === char);
                if (case1) {
                    variableName += char;
                }
                else if (char === '=') {
                    variableName += char;
                    state = 2;
                }
                else {
                    return { resp: false, charRecorridos: variableName, cadena: input };
                }
                break;
            case 2:
                if (char === '"') {
                    variableName += char;
                    state = 3;
                }
                else {
                    return { resp: false, charRecorridos: variableName, cadena: input };
                }
                break;
            case 3:
                let case3 = digitosLetra.find(word => word === char);
                if (case3) {
                    variableName += char;
                    state = 4;
                }
                else if (char === '"') {
                    variableName += char;
                    state = 5;
                }
                break;
            case 4:
                if (char === '"') {
                    variableName += char;
                    state = 5;
                }
                else {
                    variableName += char;
                    state = 3;
                }
                break;
            case 5:
                if (variableName.length > 0) {
                    return { resp: true, charRecorridos: variableName, cadena: input };
                }
                else {
                    return { resp: false, charRecorridos: variableName, cadena: input };
                }
            default:
                return { resp: false, charRecorridos: null, cadena: input };
                ;
        }
    }
    return { resp: false, charRecorridos: null, cadena: null };
};
// Ejemplos de uso
console.log(runAutomata('amo2r="hola"'));
console.log(runAutomata('nombre="JuancZX"'));
console.log(runAutomata('variable1 = "Hola mundo"'));
console.log(runAutomata('123var = "Hola"'));
console.log(runAutomata('a="a'));
console.log(runAutomata('a= hola'));
console.log(runAutomata('a= "hola'));
