function sumar10(numero){
    let numerosSiguientes = [];
    for (let i = 0; i <= 10; i++) {
        numerosSiguientes.push(numero + i)
    }
    
    return numerosSiguientes.join(', ')

}
console.log(sumar10(45))