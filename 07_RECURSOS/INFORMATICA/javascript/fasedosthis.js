//let a = 2;
//alert("hola");
function foo() {
  var a = 2;
  this.bar();
}
function bar() {
  console.log(this.a);
}

let c = {
  funcion: foo,
  a: 1,
  bar: bar,
};

foo(); //
c.funcion(); // reference type = base , object ,strict;
// console.log(a);
//
//    prototype
