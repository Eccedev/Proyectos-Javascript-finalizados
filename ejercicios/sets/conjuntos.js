//Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
//- Un nuevo Set con los nombres de tu familia
//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

const nombresFamilia = ["jon", "fati", "fe", "ton"];
const familiaSet = new Set(nombresFamilia);
console.log(familiaSet); // {'jon', 'fati', 'fe', 'ton'}

familiaSet.add("jon");
console.log(familiaSet); // {'jon', 'fati', 'fe', 'ton'}  // los sets no repiten valores!

familiaSet.add("JavasScript");
console.log(familiaSet);  //{'jon', 'fati', 'fe', 'ton', 'JavasScript'}  //javascript no está duplicado y sí puede entrar al conjunto

// si new Set() se utilizara en la 1ª línea no se necesitaría la declracion en la 2ª (const nombresFamilia = new Set(["jon",...]) )
