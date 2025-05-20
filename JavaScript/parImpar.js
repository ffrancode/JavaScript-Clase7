// Print("Estoy cansado jefe") Fecha: 19/5/25
//Comprobar si un numero es par o impar

const leer = require("readline").createInterface({ input: process.stdin, output: process.stdout });

leer.question("Ingresa un número: ", respuesta => {
  const numero = Number(respuesta);
  if (numero % 2 === 0) {
    console.log("Tu número es par");
  } else {
    console.log("Tu número es impar");
  }
  leer.close();
});
