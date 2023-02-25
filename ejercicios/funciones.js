//- Una función sin parámetros que devuelva siempre "true"
function siempreTrue() {
return true;
};

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const promesaFiveLater = setTimeout(async function(){  
    console.log("Hola soy una promesa");
}, 5000);

//- Una función generadora de índices pares automáticos 
function* generaId() {       
    let id = 0;
    while(id < 10) {             // evitar el loop infinito
        yield id += 2;  
    }
}
console.log(generaId());      // { [Generator]}
let gen = generaId();

console.log(gen.next().value) //2
console.log(gen.next().value) //4
console.log(gen.next().value) //6
console.log(gen.next().value) //8
console.log(gen.next().value) //10
console.log(gen.next().value) //undefined



