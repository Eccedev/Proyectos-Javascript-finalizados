function* generaId() {        //se le añade un asterisco a function
    let id = 0;
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
}

const gen = generaId();              //guardamos la funcion generadora dentro de una constante

console.log(gen.next().value)   //1
console.log(gen.next().value)   //2
console.log(gen.next().value)   //3...hasta 10 que es cuando aplica return y para la ejecución
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
