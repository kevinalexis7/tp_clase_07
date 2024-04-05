/* function tablaDeMultiplicar(numero) {
    let i = 1
    while (i <= 10) {
        let resultado = i * numero
        console.log(`${numero} * ${i} = ${resultado}`);
        i++
    }

}tablaDeMultiplicar(5) */


function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = [];
    for (let i = 0; i < unPeriodo.length;i++) {
      if(unPeriodo[i] > 0){
        cantidad.push(unPeriodo[i])
      }
    }
    return cantidad;
  }console.log(cantidadDeMesesConGanancia([0, 3, -1, 5]));
  