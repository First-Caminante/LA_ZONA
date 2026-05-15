// let heroe = "batman";
// console.log(heroe.toUpperCase()); // "BATMAN"
//
// console.log(heroe);
//
// heroe = heroe.toUpperCase();
//
// console.log(heroe);
//
/////////////////////////////////////////////////////////////////// INMUTABLE NO INMUTABLE
// CASO A
// let jefe = "Bruce";
// jefe.empresa = "Wayne Enterprises";
// console.log(jefe.empresa);
//
// // CASO B
// let villano = { nombre: "Joker" };
// let clon = villano;
// clon.nombre = "Arthur";
// console.log(villano.nombre);
//
function foo() {
  var a = 2;
  this.bar();
}
function bar() {
  console.log(this.a);
}
foo();
