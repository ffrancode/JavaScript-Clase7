// Print("Estoy cansado jefe") Fecha: 19/5/25
// Averiguar si el usuario es mayor de edad o no
const leer = require("readline").createInterface({ input: process.stdin, output: process.stdout });

leer.question("¿Qué edad tenes? ", respuesta => {
  const edad = Number(respuesta);
  if (edad >= 18) {
    console.log("Sos mayor de edad");
  } else {
    console.log("Sos menor de edad");
  }
  leer.close();
});

