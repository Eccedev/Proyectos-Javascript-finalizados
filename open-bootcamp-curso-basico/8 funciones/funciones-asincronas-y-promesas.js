// Funciones asíncronas  y definición de promesas

function miAsinc() {
    // Hace una llamada a una base de datos externa
    // Puede darnos algún error
}

const miPromesa = new Promise((resolve, reject) => {   //funciones que puede o no ejecutarse con exito
    const i = Math.floor(Math.random() * 2)
    // Si está todo correcto
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))

// async await       //esto es una forma diferente de consumir funciones asíncronas
