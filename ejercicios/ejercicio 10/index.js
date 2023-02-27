import { suma, multiplica } from './controller.js';   // es la forma de importar de ES6
import chalk from 'chalk';          // esta línea viene determinada por la documentación de la librería Chalk (https://www.npmjs.com/package/chalk)                         

console.log(multiplica(suma(1, 2), suma(4, 5)))               // los dos parámetros de multiplica son los resultados de los parametros de las sumas
console.log(chalk.green(multiplica(suma(1, 2), suma(4, 5))))  // ahora lo pasa en color verde
