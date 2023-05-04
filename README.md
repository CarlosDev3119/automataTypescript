# Automata

Este proyecto contiene la implementación de un autómata que reconoce la sintaxis de una asignación de variable con un valor de tipo string en un lenguaje de programación ficticio.

## Instalación

Para instalar las dependencias del proyecto, ejecute el siguiente comando:npm install


## Uso

Para utilizar el autómata, importe la función `runAutomata` del archivo `src/automata.ts`. Esta función toma como entrada una cadena que representa la asignación de una variable con un valor de tipo string. Devuelve un objeto con tres propiedades: `resp` (un booleano que indica si la cadena es válida), `charRecorridos` (los caracteres leídos antes de que se encontrara un error o se completara la cadena) y `cadena` (la cadena de entrada).

Aquí hay algunos ejemplos de uso:


## Uso

Para utilizar el autómata, importe la función `runAutomata` del archivo `src/automata.ts`. Esta función toma como entrada una cadena que representa la asignación de una variable con un valor de tipo string. Devuelve un objeto con tres propiedades: `resp` (un booleano que indica si la cadena es válida), `charRecorridos` (los caracteres leídos antes de que se encontrara un error o se completara la cadena) y `cadena` (la cadena de entrada).

Aquí hay algunos ejemplos de uso:

```typescript
import { runAutomata } from './src/automata';

console.log(runAutomata('amo2r="hola"')); // { resp: false, charRecorridos: 'a', cadena: 'amo2r="hola"' }
console.log(runAutomata('nombre="JuancZX"')); // { resp: true, charRecorridos: 'nombre="JuancZX"', cadena: 'nombre="JuancZX"' }
console.log(runAutomata('variable1 = "Hola mundo"')); // { resp: true, charRecorridos: 'variable1 = "Hola mundo"', cadena: 'variable1 = "Hola mundo"' }
console.log(runAutomata('123var = "Hola"')); // { resp: false, charRecorridos: '1', cadena: '123var = "Hola"' }
console.log(runAutomata('a="a')); // { resp: false, charRecorridos: 'a="', cadena: 'a="a' }
console.log(runAutomata('a= hola')); // { resp: false, charRecorridos: 'a=', cadena: 'a= hola' }
console.log(runAutomata('a= "hola')); // { resp: false, charRecorridos: 'a= "', cadena: 'a= "hola' }

```
