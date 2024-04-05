function sumarHasta100(){
    let arrayDeSumas = []
    for (let i = 0; i < 100; i++) {
        arrayDeSumas.push(`${i} + ${i+1} = ${i + i + 1}`);
    }return console.log(arrayDeSumas.join(`
    `))
}

sumarHasta100()
