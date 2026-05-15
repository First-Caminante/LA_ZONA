/*foo(); // ¿Qué se imprime aquí?

var foo;

function foo() {
  console.log(1);
}

foo = function () {
  console.log(2);
};

foo();*/

//   var a = 2;
//   function hija() {
//     console.log(a);
//   }
//
//   return hija; // ¡NO LA ESTAMOS EJECUTANDO! La estamos devolviendo como valor.
// }
//
// var miVariable = padre(); // Línea X
// miVariable(); // Línea Y

//
// function padre() {
//
//

function fabricarContador() {
  let cuenta = 0;

  return function () {
    cuenta = cuenta + 1;
    console.log(cuenta);
  };
}

let contadorA = fabricarContador();
let contadorB = fabricarContador();

contadorA();
contadorA();
contadorB();
