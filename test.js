//comienzo de la función
function adivina() {
  let numeroAleatorio = Math.floor(Math.random() * 5 + 1);
  console.log("Número obtenido", numeroAleatorio);
  let num,
    intentos = 3;
  do {
    //Si no acertamos damos pistas si es un numero alto o bajo
    if (numeroAleatorio > num) {
      alert("Intenta un numero mas alto");
    } else if (numeroAleatorio < num) {
      alert("Intenta un numero mas bajo");
    }
    num = parseInt(prompt(`Ingrese un número del 1 al 5 (quedan ${intentos} intentos)`));
    console.log(`El numero elegido es: ${num}`);
    //Salimos del bucle si no nos quedan mas intentos o acertamos el número
  } while (numeroAleatorio != num && --intentos > 0);
  if (numeroAleatorio == num) {
    alert("Has acertado el número!");
  } else {
    alert("Has perdido");
  }
}
//fin de la función
//Comienza el juego dando la bienvenida y preguntando si queremos comenzar, si no es así finaliza.
function jugar() {
  alert(
    "Bienvenidos al juego donde debes adivinar el número, en este test aplicamos funciones, bucles y condicionales"
  );
  let validator = true;
  while (validator) {
    let mensaje = prompt("Quieres comenzar? (SI/NO)");
    //si el jugador elige si, la condición es true y llama a la función adivina y comienza el juego
    if (mensaje.toLowerCase() == "si") {
      validator = false;
      adivina();
      //si el jugador elige no, la condición es false y sale del juego
    } else if (mensaje.toLowerCase() == "no") {
      alert("Vuelve pronto");
      validator = false;
    } else {
      alert("Ingreso un dato incorrecto");
    }
  }
}
jugar();
