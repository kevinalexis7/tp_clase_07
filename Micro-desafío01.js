/* Micro-desafío01 */

let operacionesCliente = [100,-50,400,-80,60,-200,-70]

function operaciones(operacionesCliente){
    let retiros = 0;
    let depositos = 0;
    let total = 0;
    let movimientos = [retiros, depositos, total]

    for (let i = 0; i < operacionesCliente.length; i++) {

         movimientos[2] = movimientos[2] + operacionesCliente[i];

        if(operacionesCliente[i] > 0){
         movimientos[1] = movimientos[1] + operacionesCliente[i];
        }
        else 
         movimientos[0] = movimientos[0] + operacionesCliente[i];
    }
    return movimientos
}


function mensaje(nombre, apellido, callback){
    let msj = 
`Estimado/a ${nombre.toUpperCase()} ${apellido.toUpperCase()}:
El monto total de los depósitos es de: $${callback[1]}.
El monto total de los retiros es de: $${callback[0]}.
por lo tanto, su saldo actual de la cuenta es de: $${callback[2]}.`
return msj
}
console.log(mensaje('kevin', 'espinola', operaciones(operacionesCliente)))