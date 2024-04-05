/* Micro-desafío0 */

function tablaDeMultiplicar(){
    let calculadora = [];
    for (let i = 1; i <= 10; i++) {
        
        let multiplicando = 1;
        while(multiplicando <= 10){
            calculadora.push(`${i} * ${multiplicando} = ${multiplicando * i}`);
            multiplicando++
        }

        
    }return console.log(`Tabla de multiplicar
-----------------------------
${calculadora.join(`
`)}`)
     
} tablaDeMultiplicar()