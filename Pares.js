function noParesDeContarImparesHasta(numero) {
    let cantidadDeInpares = 0;
    for (let i = 0; i <= numero; i++){
        if (i % 2 !== 0){
            cantidadDeInpares = cantidadDeInpares + 1
        }
    }return cantidadDeInpares
}
console.log(noParesDeContarImparesHasta(101))