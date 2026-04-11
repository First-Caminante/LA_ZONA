

# TEMA: REFERENCE/OPERATORS



--- SUBTEMA: addition_assignment ---


{{jsSidebar("Operators")}}

El **operador de asignación de adición (`+=`)** realiza una [suma](/es/docs/Web/JavaScript/Reference/Operators/Addition) (que puede ser una suma numérica o una concatenación de cadenas) en los dos operandos y asigna el resultado al operando izquierdo.

{{InteractiveExample("JavaScript Demo: Expressions - Addition assignment operator")}}

```js interactive-example
let a = 2;
let b = "hello";

console.log((a += 3)); // Addition
// Expected output: 5

console.log((b += " world")); // Concatenation
// Expected output: "hello world"
```

## Sintaxis

```js-nolint
x += y
```

## Descripción

`x += y` es equivalente a `x = x + y`, exepto que la expresión `x` se evalúa solo una vez.

## Ejemplos

### Usando el operador de asignación de adición

```js
let baz = true;

// Booleano + Número -> adición
baz += 1; // 2

// Número + Booleano -> adición
baz += false; // 2
```

```js
let foo = "foo";

// Cadena de texto + Booleano -> concatenación
foo += false; // "foofalse"

// Cadena de texto + Cadena de texto -> concatenación
foo += "bar"; // "foofalsebar"
```

```js
let bar = 5;

// Número + Número -> adición
bar += 2; // 7

// Número + Cadena de texto -> concatenación
bar += "foo"; // "7foo"
```

```js
let x = 1n;

// BigInt + BigInt -> adición
x += 2n; // 3n

// BigInt + Número -> devuelve TypeError
x += 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Operadores de asignación en la guía JS](/es/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Adición (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Addition)


--- SUBTEMA: addition ---


{{jsSidebar("Operators")}}

El operador de adición (`+`) produce la suma de operandos numéricos o la concatenación de (cadenas) string.

{{InteractiveExample("JavaScript Demo: Expressions - Addition operator")}}

```js interactive-example
console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log("hello " + "everyone");
// Expected output: "hello everyone"

console.log(2001 + ": A Space Odyssey");
// Expected output: "2001: A Space Odyssey"
```

## Sintaxis

```
Operator: x + y
```

## Ejemplos

### Adición numérica

```js
// Número + Número -> adición
1 + 2; // 3

// Booleano + Número -> adición
true + 1; // 2

// Booleano + Booleano -> adición
false + false; // 0
```

### Concatenación de (cadenas) String

```js
// String + String -> concatenación
"fut" + "bol"; // "futbol"

// Número + String -> concatenación
5 + "oh"; // "5oh"

// String + Booleano -> concatenación
"fut" + false; // "futfalse"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## También revisa

- [Subtraction operator](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/es/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/es/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/es/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)


--- SUBTEMA: assignment ---


{{jsSidebar("Operators")}}

El operador de asignación (=) se utiliza para asignar un valor a una variable. La operación de asignación evalúa el valor asignado. Es posible encadenar el operador de asignación para asignar un solo valor a múltiples variables

{{InteractiveExample("JavaScript Demo: Expressions - Assignment")}}

```js interactive-example
let x = 2;
const y = 3;

console.log(x);
// Expected output: 2

console.log((x = y + 1)); // 3 + 1
// Expected output: 4

console.log((x = x * y)); // 4 * 3
// Expected output: 12
```

## Sintaxis

```
Operador: x = y
```

## Ejemplos

### Asignación

```js
// Asumimos las siguientes variables
//  x = 5
//  n = 10
//  z = 25

x = n; // La variable x contiene el valor 10
x = n = z; // x = n (es decir 10) y z pisa el valor total remplazandolo por 25
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Assignment operators in the JS guide](/es/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment)


--- SUBTEMA: async_function ---


{{jsSidebar("Operators")}}

La palabra clave **`async function`** puede ser utilizada para definir funciones `async` dentro de expresiones.

También se pueden definir funciones asíncronas utilizando un [enunciado de función asíncrona](/es/docs/Web/JavaScript/Reference/Statements/async_function).

## Sintaxis

```
async function [nombre]([param1[, param2[, ..., paramN]]]) {
  enunciados
}
```

A partir de ES2015 (ES6), también se pueden emplear [funciones flecha.](/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### Parámetros

- `name`
  - : El nombre de la función. Puede ser omitida, en cuyo caso la función es _anónima_. El nombre es sólo local al cuerpo de la función.
- `paramN`
  - : El nombre de un argumento a ser pasado a la función.
- `statements`
  - : Los enunciados que componen el cuerpo de la función.

## Descripción

Una expresión `async function` es muy similar, y casi tiene la misma sintaxis que, una {{jsxref('Statements/async_function', 'async function statement')}}. La principal diferencia entre una expresión `async function` y un enunciado `async function` es el _nombre de la función_, que puede ser omitido en una expresión `async function` para crear funciones _anonymous_. Una expresión `async function` puede ser utilizada como un {{Glossary("IIFE")}} (Expresión de función inmediatamente invocada, Immediately Invoked Function Expression) que se ejecuta tan rápido como es definida. Ver el capítulo sobre [funciones](/es/docs/Web/JavaScript/Reference/Functions) para tener más información.

## Ejemplos

### Ejemplo sencillo

```js
function resuelve2SegundosDespues(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const agregar = async function (x) {
  // Expresión de una función asíncrona asignada a una variable
  let a = await resuelve2SegundosDespues(20);
  let b = await resuelve2SegundosDespues(30);
  return x + a + b;
};

agregar(10).then((v) => {
  console.log(v); // imprime 60 después de 4 segundos.
});

(async function (x) {
  // expresión de una función asíncrona utilizada como una IIFE
  let p_a = resuelve2SegundosDespues(20);
  let p_b = resuelve2SegundosDespues(30);
  return x + (await p_a) + (await p_b);
})(10).then((v) => {
  console.log(v); // imprime 60 después de 2 segundos.
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad de los navegadores

{{Compat}}

## Ver también

- {{jsxref("Statements/async_function", "async function")}}
- Objeto {{jsxref("AsyncFunction")}}
- {{jsxref("Operators/await", "await")}}


--- SUBTEMA: await ---


{{jsSidebar("Operators")}}El operador `await` es usado para esperar a una {{jsxref("Promise")}}. Sólo puede ser usado dentro de una función {{jsxref("Statements/async_function", "async function")}}.

## Sintaxis

```
[rv] = await expression;
```

- `expression`
  - : Una {{jsxref("Promise")}} o cualquier otro valor por el cual haya que esperar.
- `rv`
  - : Regresa el valor terminado de la promesa o solamente un valor si no es una `Promise`.

## Descripción

La expresión `await` provoca que la ejecución de una función `async` sea pausada hasta que una `Promise` sea terminada o rechazada, y regresa a la ejecución de la función `async` después del término. Al regreso de la ejecución, el valor de la expresión `await` es la regresada por una promesa terminada.

Si la `Promise` es rechazada, el valor de la expresión `await` tendrá el valor de rechazo.

Si el valor de la expresión seguida del operador `await` no es una promesa, será convertido a una [resolved Promise](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve).

## Ejemplos

Si una `Promise` se pasa a una expresión `await`, espera a que la `Promise` se resuelva y devuelve el valor resuelto.

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
```

Si el valor no es una `Promise`, convierte el valor a una `Promise` resuelta, y espera por dicho valor.

```js
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();
```

Si la `Promise` es rechazada, se lanza una excepción con dicho el valor.

```js
async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("AsyncFunction")}} object


--- SUBTEMA: class ---


{{jsSidebar("Operators")}}

La **expresión class** es una forma de definir una clase en ECMAScript 2015 (ES6). Similar a las [funciones](/es/docs/Web/JavaScript/Reference/Operators/function), las expresiones de clase pueden ser nombradas o no. Si se nombran, el nombre de la clase es local sólo en el cuerpo de la clase. Las clases en JavaScript utilizan herencia basada en prototipos.

## Sintaxis

```
var MyClass = class [className] [extends] {
  // class body
};
```

## Descripción

Una expresión de clase tiene una sintaxis similar a la [declaración de una clase](/es/docs/Web/JavaScript/Reference/Statements/class). Sin embargo, con las expresiones de clases, está permitido omitir el nombre de la clase ("identificador de enlace"), cosa que no se puede hacer con las declaraciones de clases. Además, las expresiones de clases permiten redefinir/redeclarar clases y **no lanzar** ningún tipo de error como las [declaraciones de clases](/es/docs/Web/JavaScript/Reference/Statements/class). La propiedad `constructor` es opcional. Y el _typeof_ de las clases generadas con esta palabra clave siempre será "function".

Tal y como en la declaración de clases, el cuerpo de la expresión de clase se ejecuta en [modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode).

```js
"use strict";
var Foo = class {}; // la propiedad constructor es opcional
var Foo = class {}; // Se permite repetir declaraciones

typeof Foo; // devuelve "function"
typeof class {}; // devuelve "function"

Foo instanceof Object; // true
Foo instanceof Function; // true
class Foo {} // Lanza TypeError, no permite volver a declararla
```

## Ejemplo

### Una clase sencilla

Esta es una sencilla expresión de clase anónima a la que se puede hacer referencia utilizando la variable "Foo".

```js
var Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

var instance = new Foo();
instance.bar(); // "Hello World!"
Foo.name; // "Foo"
```

### Expresiones de clase con nombre

Si se quiere hacer referencia a la clase actual dentro del cuerpo de la clase, se puede crear una expresión de clase con nombre. Este nombre sólo será visible en el mismo contexto de la expresión de clase.

```js
var Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
};
var bar = new Foo();
bar.whoIsThere(); // "NamedFoo"
NamedFoo.name; // ReferenceError: NamedFoo no está definido
Foo.name; // "NamedFoo"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [expresión `function`](/es/docs/Web/JavaScript/Reference/Operators/function)
- [`declaración class`](/es/docs/Web/JavaScript/Reference/Statements/class)
- [Clases](/es/docs/Web/JavaScript/Reference/Classes)


--- SUBTEMA: comma_operator ---


{{jsSidebar("Operators")}}

El operador coma evalua cada uno de sus operandos (de izquierda a derecha) y retorna el valor del último operando.

## Sintaxis

```
expr1, expr2, expr3...
```

## Parámetros

- `expr1`, `expr2, expr3...`
  - : Cualquier expresión.

## Descripción

Puede usar el operador coma cuando deseé mútiples expresiones en una localización que requiere una sola expresión. El uso más común de este operador es proveer múltiples parámetros en un búcle for

## Ejemplo

Si a es un array de dos dimensiones con 10 elementos en un lado, el siguiente código usa el operador coma para incrementar dos variables a la vez. Note que la coma en la sentencia var **no** es el operador coma, porque no existe adentro de una expresión.Más bien, es un carácter especial en sentencias var para combinar a múltiples de ellas en una sola. Sin embargo, esa coma se comporta casi igual que el operador coma. El código imprime los valores de los elementos diagonales en el array:

```
for (var i = 0, j = 9; i <= 9; i++, j--)
  document.writeln("a[" + i + "][" + j + "] = " + a[i][j]);
```

### Procesar y luego retornar

Otro ejemplo de lo que se puede hacer con el operador coma es procesar antes de retornar. Como se mencionó, solo el último elemento será retornado pero todos los otros también van a ser evaluados. Así, se puede hacer:

```js
function myFunc() {
  var x = 0;

  return ((x += 1), x); // the same as return ++x;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [for loop](/es/docs/Web/JavaScript/Reference/Statements/for)


--- SUBTEMA: conditional_operator ---


{{jsSidebar("Operators")}}El **operador condicional** (**ternario**) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción [if](/es/docs/Web/JavaScript/Reference/Statements/if...else).

## Sintaxis

```
condición ? expr1 : expr2
```

### Parámetros

- `condición`
  - : Una expresión que se evalúa como true o false.
- `expr1`, `expr2`
  - : Expresión con valores de algún tipo.

## Descripción

Si la `condición` es `true`, el operador retorna el valor de la `expr1`; de lo contrario, devuelve el valor de `expr2`. Por ejemplo, para mostrar un mensaje diferente en función del valor de la variable _`isMember,`_ se puede usar esta declaración:

```js
"La Cuota es de:  " + (isMember ? "$2.00" : "$10.00");
```

También puedes asignar variables dependiendo del resultado de la condición ternaria:

```js
var elvisLives = Math.PI > 4 ? "Sip" : "Nop";
```

También es posible realizar evaluaciones ternarias múltiples (Nota: El operador condicional es asociativo):

```js
var firstCheck = false,
  secondCheck = false,
  access = firstCheck
    ? "Acceso Denegado"
    : secondCheck
      ? "Acceso Denegado"
      : "Acceso Permitido";

console.log(access); // muestra "Acceso Permitido"
```

También puede usar operaciones ternarias en espacio vacío con el propósito de realizar diferentes operaciones:

```js
var stop = false,
  age = 16;

age > 18 ? location.assign("continue.html") : (stop = true);
```

También puede realizar más de una operación por caso, separándolas con una coma:

```js
var stop = false,
  age = 23;

age > 18
  ? (alert("OK, puedes continuar."), location.assign("continue.html"))
  : ((stop = true), alert("Disculpa, eres menor de edad!"));
```

También puede realizar más de una operación durante la asignación de un valor. En este caso, **_el último valor separado por una coma del paréntesis_ será el valor asignado**.

```js
var age = 16;

var url =
  age > 18
    ? (alert("OK, puedes continuar."),
      // alert devuelve "undefined", pero será ignorado porque
      // no es el último valor separado por comas del paréntesis
      "continue.html") // el valor a ser asignado si age > 18
    : (alert("Eres menor de edad!"),
      alert("Disculpa :-("),
      // etc. etc.
      "stop.html"); // el valor a ser asignado si !(age > 18)

location.assign(url); // "stop.html"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [if statement](/es/docs/Web/JavaScript/Reference/Statements/if...else)


--- SUBTEMA: decrement ---


{{jsSidebar("Operators")}}

El operador de decremento (--) disminuye (o resta de a uno) su operando y retorna un valor.

{{InteractiveExample("JavaScript Demo: Expressions - Decrement operator")}}

```js interactive-example
let x = 3;
const y = x--;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:2, y:3"

let a = 3;
const b = --a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:2, b:2"
```

## Sintaxis

```
Operadores: x-- o --x
```

## Descripción

Si usamos la forma de sufijo, operador después del operando (por ejemplo, `x--`), el operador de disminución disminuye y devuelve el valor antes de disminuir.

Si se usamos la forma de prefijo, operador antes del operando (por ejemplo, `--x`), el operador de disminución disminuye y devuelve el valor después de disminuir.

## Ejemplos

### Usando Sufijo

```js
let x = 3;
y = x--;

// y = 3
// x = 2
```

### Usando Prefijo

```js
let a = 2;
b = --a;

// a = 1
// b = 1
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Addition operator](/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/es/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/es/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/es/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Unary negation operator](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)


--- SUBTEMA: delete ---


{{jsSidebar("Operators")}}

El **operador `delete`** de JavaScript remueve una propiedad de un objeto; si no se
mantienen más referencias a la misma propiedad, eventualmente se libera automáticamente.

{{InteractiveExample("JavaScript Demo: Expressions - delete operator")}}

```js interactive-example
const Employee = {
  firstname: "Maria",
  lastname: "Sanchez",
};

console.log(Employee.firstname);
// Expected output: "Maria"

delete Employee.firstname;

console.log(Employee.firstname);
// Expected output: undefined
```

## Sintaxis

```js
delete expresion;
```

Donde `expresion` debe evaluarse como una referencia a la [propiedad](/es/docs/Glossary/property/JavaScript), por ejemplo:

```js
delete object.property;
delete object["property"];
```

### Parámetros

- `object`
  - : El nombre de un objeto, o una expresión que evalúa a un objeto.
- `property`
  - : La propiedad a eliminar.

### Valor de retorno

`true` para todos los casos excepto cuando es una propiedad {{jsxref("Object.hasOwnProperty", "propia")}} {{jsxref("Errors/Cant_delete", "no configurable")}}, en cuyo caso, se retorna `false` en modo no estricto.

### Excepciones

Arroja un {{jsxref("TypeError")}} en [modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode) si la propiedad es una propiedad directa no configurable.

## Descripción

Al contrario de lo que se podría pensar (tal vez debido a otros lenguajes de programación como
[delete in C++](https://docs.microsoft.com/en-us/cpp/cpp/delete-operator-cpp?view=msvc-170)), el operador `delete` no tiene **nada** que ver con liberar memoria.
La gestión de memoria se hace de manera indirecta eliminando referencias. Véase la página [gestión de memoria](/es/docs/Web/JavaScript/Guide/Memory_management) para más detalles.

El operador **`delete`** remueve una propiedad dada de un objeto.
En caso de que la eliminación sea exitosa, retornará `true`, en otro caso
se retornará `false`.

Sin embargo, es importante considerar los siguientes escenarios:

- Si la propiedad que está intentando eliminar no existe, `delete`
  no tendrá ningún efecto y retornará `true`.
- Si una propiedad con el mismo nombre existe en la cadena de prototipos del objeto,
  entonces, luego de la eliminación, el objeto usará la propiedad de la cadena de prototipos
  (en otras palabras, `delete` sólo tiene efecto en los propiedades propias).
- Cualquier propiedad declarada con {{jsxref("Statements/var","var")}} no puede ser eliminada
  desde el ámbito global o desde el ámbito de una función.
  - Del mismo modo, `delete` no puede eliminar ninguna función en el ámbito global (ya sea parte de una definición de una función o una expresión de función).
  - Funciones que son partes de un objeto (y no sean del ámbito global) sí pueden ser eliminadas con `delete`.

- Las propiedades declaradas con {{jsxref("Statements/let","let")}} o
  {{jsxref("Statements/const","const")}} no pueden ser eliminadas dentro del
  ámbito en el cual fueron definidas.
- Las propiedades no configurables no pueden ser removidas. Esto incluye las
  propiedades de objetos incorporados a JavaScript como {{jsxref("Math")}},
  {{jsxref("Array")}}, {{jsxref("Object")}} y propiedades que son creadas como
  no configurables con métodos como {{jsxref("Object.defineProperty()")}}.

El siguiente bloque de código muestra un ejemplo simple:

```js
var Employee = {
  age: 28,
  name: "abc",
  designation: "desarrollador",
};

console.log(delete Employee.name); // retorna true
console.log(delete Employee.age); // retorna true

// Cuando se trata de eliminar una propiedad
// que no existe, retorna true
console.log(delete Employee.salary); // retorna true
```

### Propiedades no configurables

Cuando una propiedad es marcada como no configurable, `delete` no tendrá
ningún efecto, y retornará `false`. En modo estricto esta situación
arrojará un `TypeError`.

```js
var Employee = {};
Object.defineProperty(Employee, "name", { configurable: false });

console.log(delete Employee.name); // retorna false
```

{{jsxref("Statements/var","var")}}, {{jsxref("Statements/let","let")}}, y
{{jsxref("Statements/const","const")}} crean propiedades no configurables
que no pueden ser eliminadas con el operador `delete`:

```js
var nameOther = "XYZ";

// Podemos acceder a esta propiedad global usando:
Object.getOwnPropertyDescriptor(window, "nameOther");

// salida: Object {value: "XYZ",
//                  writable: true,
//                  enumerable: true,
//                  configurable: false}

// Debido a que "nameOther" es añadido usando la palabra
// reservada var, es marcada como "no configurable"

delete nameOther; // retorna false
```

En modo estricto, esto hubiese arrojado una excepción.

### Modo estricto vs. no estricto

En modo estricto, si `delete` es usado en referencia directa a una variable,
un argumento de función o un nombre de función, arrojará un
{{jsxref("SyntaxError")}}. Por lo tanto, para evitar errores de sintaxis
en modo estricto, debe usar el operador `delete` en la forma de
`delete object.property` o `delete object['property']`.

```js
Object.defineProperty(globalThis, "variable1", {
  value: 10,
  configurable: true,
});
Object.defineProperty(globalThis, "variable2", {
  value: 10,
  configurable: false,
});

// SyntaxError en modo estricto.
console.log(delete variable1); // true

// SyntaxError en modo estricto.
console.log(delete variable2); // false
```

```js
function func(param) {
  // SyntaxError en modo estricto.
  console.log(delete param); // false
}

// SyntaxError en modo estricto.
console.log(delete func); // false
```

### Notas entre navegadores

Según la especificación moderna de ECMAScript, el orden de recorrido de las
propiedades de un objeto está bien definido y es estable a través de las
implementaciones. No obstante, en el caso de Internet Explorer, cuando uno
usa `delete` en una propiedad, resulta en un comportamiento confuso,
impidiendo que otros navegadores utilicen objetos simples como
literales de objeto como si fuesen arreglos asociativos ordenados.
En Internet Explorer, mientras que la propiedad _value_ es de hecho establecida
como `undefined`, si uno luego añade una propiedad con el mismo nombre, la
propiedad será iterada en su posición _anterior_ y no al final de la secuencia como
uno esperaría luego de haber eliminado la propiedad y agregarla nuevamente.

Si usted desea usar un arreglo asociativo ordenado con soporte para
implementaciones antiguas, use un objeto {{jsxref("Map")}} si está disponible
(a través de un [_polyfill_](/es/docs/Glossary/Polyfill), por ejemplo), o simule esta estructura con dos
arreglos separados (uno para las claves y otro para los valores), o construya
un arreglo de objetos con una única propiedad, etc.

## Ejemplos

```js
// Crea la propiedad adminName en el ámbito global.
adminName = "xyz";

// Crea la propiedad empCount en el ábmti global.
// Como se usa var, es marcada como no configurable.
// Lo mismo es cierto para let y const.
var empCount = 43;

EmployeeDetails = {
  name: "xyz",
  age: 5,
  designation: "Developer",
};

// adminName es una propiedad del ámbito global.
// Puede ser eliminada debido a que es declarada sin usar var,
// y por lo tanto es configurable.
delete adminName; // retorna true

// Por el contrario, empCount no es configurable
// debido a que fue usado var al declararla.
delete empCount; // retorna false

// delete puede ser usado para eliminar propiedades de objetos.
delete EmployeeDetails.name; // retona true

// Incluso cuando la propiedad no existe, delete retorna "true".
delete EmployeeDetails.salary; // retorna true

// delete no afecta propiedades estáticas propias del lenguaje.
delete Math.PI; // retorna false

// EmployeeDetails es una propiedad del ámbito global.
// Debido a que fue definida sin "var", se marca como configurable.
delete EmployeeDetails; // retorna true

function f() {
  var z = 44;

  // delete no afecta nombres de variables locales
  delete z; // retorna false
}
```

### `delete` y la cadena de prototipos

En el siguiente ejemplo, se elimina una propiedad directa de un objeto mientras
que una propiedad con el mismo nombre está disponible en la cadena de
prototipos:

```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

var foo = new Foo();

// foo.bar está asociado con la
// propiedad directa.
console.log(foo.bar); // 10

// Eliminar la propiedad directa
// del objeto foo.
delete foo.bar; // retorna true

// foo.bar aún está disponible en
// la cadena de prototipos.
console.log(foo.bar); // 42

// Eliminar la propiedad en el prototipo.
delete Foo.prototype.bar; // retorna true

// La propiedad "bar" ya no puede ser heredada
// de foo ya que ha sido eliminada.

console.log(foo.bar); // undefined
```

### Eliminando elementos de arreglos

Cuando se elimina un elemento de un arreglo, la propiedad `length` no se ve
afectada. Se mantiene incluso si se elimina el último elemento del arreglo.

Cuando el operador `delete` elimina un elemento de un array, ese elemento
no se encuentra más en el mismo. En el siguiente ejemplo, `trees[3]` es
eliminado con el uso de `delete`.

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
if (3 in trees) {
  // esto no se ejecuta
}
```

Si desea que un elemento de un arreglo exista pero que no tenga un valor
definido, use el valor `undefined` en lugar del operador `delete`. En el
siguiente ejmeplo, `trees[3]` recibe el valor `undefined`, pero el elemento
del arreglo aún existe:

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees[3] = undefined;
if (3 in trees) {
  // esto sí se ejecuta
}
```

Si en lugar de eso, usted desea eliminar un elemento de un arreglo cambiando
los contenidos del mismo, use el método
{{jsxref("Array.splice()", "splice()")}}. En el siguiente ejemplo,
se elimina completamente `trees[3]` del arreglo usando
{{jsxref("Array.splice()", "splice()")}}:

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
trees.splice(3, 1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Análisis en profundidad del operador delete](http://perfectionkills.com/understanding-delete/)
- {{jsxref("Reflect.deleteProperty()")}}
- {{jsxref("Map.prototype.delete()")}}


--- SUBTEMA: destructuring ---


{{jsSidebar("Operators", "Operadores")}}

La sintaxis de **desestructuración** es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

{{InteractiveExample("JavaScript Demo: Expressions - Destructuring assignment", "taller")}}

```js interactive-example
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]
```

## Sintaxis

```js
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Propuesta de etapa 4 (terminada)
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

## Descripción

Las expresiones de objetos y arreglos literales proporcionan una manera fácil de crear paquetes de datos _ad hoc_.

```js
const x = [1, 2, 3, 4, 5];
```

La desestructuración utiliza una sintaxis similar, pero en el lado izquierdo de la asignación para definir qué valores desempacar de la variable origen.

```js
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

Esta capacidad es similar a las características presentes en lenguajes como Perl y Python.

## Ejemplos

### Desestructuración de arreglos

#### Asignación básica de variables

```js
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

#### Asignación separada de la declaración

A una variable se le puede asignar su valor mediante una desestructuración separada de la declaración de la variable.

```js
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

#### Valores predeterminados

A una variable se le puede asignar un valor predeterminado, en el caso de que el valor desempacado del arreglo sea `undefined`.

```js
let a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7
```

#### Intercambio de variables

Los valores de dos variables se pueden intercambiar en una expresión de desestructuración.

Sin desestructurar la asignación, intercambiar dos valores requiere una variable temporal (o, en algunos lenguajes de bajo nivel, el algoritmo del [truco XOR-swap](https://en.wikipedia.org/wiki/XOR_swap_algorithm)).

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
```

#### Analizar un arreglo devuelto por una función

Siempre ha sido posible devolver un arreglo desde una función. La desestructuración puede hacer que trabajar con un valor de retorno de arreglo sea más conciso.

En este ejemplo, `f()` devuelve los valores `[1, 2]` como su salida, que se puede procesar en una sola línea con desestructuración.

```js
function f() {
  return [1, 2];
}

let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

#### Ignorar algunos valores devueltos

Puedes ignorar los valores de retorno que no te interesan:

```js
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1
```

También puedes ignorar todos los valores devueltos:

```js
[, ,] = f();
```

#### Asignar el resto de un arreglo a una variable

Al desestructurar un arreglo, puedes desempacar y asignar la parte restante a una variable usando el patrón `rest` o:

```js
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

Ten en cuenta que se lanzará un {{jsxref("SyntaxError")}} si se usa una coma final en el lado derecho con un elemento `rest` o:

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];

// SyntaxError: el elemento rest no puede tener una coma al final
// Siempre considera usar el operador rest como último elemento
```

#### Desempacar valores coincidentes con una expresión regular

Cuando el método de expresión regular {{jsxref("Global_Objects/RegExp/exec", "exec()", "", 1)}} encuentra una coincidencia, devuelve un arreglo que contiene primero toda la parte coincidente de la cadena y luego las partes de la cadena que coinciden con cada grupo entre paréntesis en la expresión regular. La desestructuración te permite desempacar fácilmente las partes de este arreglo, ignorando la coincidencia completa si no es necesaria.

```js
function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/es/Web/JavaScript",
      "https", "developer.mozilla.org", "es/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/es/Web/JavaScript'));
// "https"
```

### Desestructuración de objetos

#### Asignación básica

```js
const user = {
  id: 42,
  is_verified: true,
};

const { id, is_verified } = user;

console.log(id); // 42
console.log(is_verified); // true
```

#### Asignación sin declaración

A una variable se le puede asignar su valor con desestructuración separada de su declaración.

```js
let a, b;

({ a, b } = { a: 1, b: 2 });
```

> [!NOTE]
> Los paréntesis `(...)` alrededor de la declaración de asignación son obligatorios cuando se usa la desestructuración de un objeto literal sin una declaración.
>
> `{a, b} = {a: 1, b: 2}` no es una sintaxis independiente válida, debido a que `{a, b}` en el lado izquierdo se considera un bloque y no un objeto literal.
>
> Sin embargo, `({a, b} = {a: 1, b: 2})` es válido, al igual que `const {a, b} = {a: 1, b: 2}`
>
> tu expresión `( ... )` debe estar precedida por un punto y coma o se puede usar para ejecutar una función en la línea anterior.

#### Asignar a nuevos nombres de variable

Una propiedad se puede desempacar de un objeto y asignar a una variable con un nombre diferente al de la propiedad del objeto.

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

Aquí, por ejemplo, `const {p: foo} = o` toma del objeto `o` la propiedad llamada `p` y la asigna a una variable local llamada `foo`.

#### Valores predeterminados

A una variable se le puede asignar un valor predeterminado, en el caso de que el valor desempacado del objeto sea `undefined`.

```js
const { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5
```

#### Asignar nombres a nuevas variables y proporcionar valores predeterminados

Una propiedad puede ser ambas

- Desempacada de un objeto y asignada a una variable con un nombre diferente.
- Se le asigna un valor predeterminado en caso de que el valor desempacado sea `undefined`.

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

#### Desempacar campos de objetos pasados como parámetro de función

```js
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

function userId({ id }) {
  return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} es ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user)); // "jdoe es John"
```

Esto desempaca el `id`, `displayName` y `firstName` del objeto `user` y los imprime.

#### Establecer el valor predeterminado de un parámetro de función

```js
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // haz un dibujo de gráfico
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});
```

> [!NOTE]
> En la firma de la función para **`drawChart`** anterior, el lado izquierdo desestructurado se asigna a un objeto literal vacío en el lado derecho: `{size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}`. También podrías haber escrito la función sin la asignación del lado derecho. Sin embargo, si omites la asignación del lado derecho, la función buscará al menos un argumento para ser proporcionado cuando se invoca, mientras que en su forma actual, simplemente puedes llamar a **`drawChart()`** sin proporcionar ningún parámetro. El diseño actual es útil si deseas poder llamar a la función sin proporcionar ningún parámetro, el otro puede ser útil cuando deseas asegurarte de que se pase un objeto a la función.

#### Desestructuración de arreglos y objetos anidados

```js
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2020-08-29T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/es/docs/Tools/Scratchpad",
};

let {
  title: englishTitle, // renombrar
  translations: [
    {
      title: localeTitle, // renombrar
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
```

#### Iteración "`for...of`" y desestructuración

```js
const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const {
  name: n,
  family: { father: f },
} of people) {
  console.log("Nombre: " + n + ", Padre: " + f);
}

// "Nombre: Mike Smith, Padre: Harry Smith"
// "Nombre: Tom Jones, Padre: Richard Jones"
```

#### Nombres de propiedades de objetos calculados y desestructuración

Los nombres de propiedad calculados, como en un {{jsxref("Operators/Object_initializer", "Objeto literal", "#Computed_property_names", 1)}}, se pueden usar con la desestructuración.

```js
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

#### `Rest` en la desestructuración de objetos

La propuesta [Propiedades `rest`/propagación para ECMAScript](https://github.com/tc39/proposal-object-rest-spread) (etapa 4) agrega la sintaxis {{jsxref("Functions/rest_parameters", "rest", "", 1)}} para desestructurar. Las propiedades de `rest` recopilan las claves de propiedades enumerables restantes que aún no han sido seleccionadas por el patrón de desestructuración.

```js
let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
a; // 10
b; // 20
rest; // { c: 30, d: 40 }
```

#### Identificador de JavaScript no válido como nombre de propiedad

La desestructuración se puede utilizar con nombres de propiedad que no son {{Glossary("Identifier", "identificadores")}} válidos en JavaScript proporcionando un identificador alternativo que sea válido.

```js
const foo = { "fizz-buzz": true };
const { "fizz-buzz": fizzBuzz } = foo;

console.log(fizzBuzz); // "true"
```

#### Desestructuración combinada de arreglos y objetos

La desestructuración de arreglos y objetos se puede combinar. Supongamos que deseas manipular el tercer elemento del siguiente arreglo `props`, y luego deseas la propiedad `name` en el objeto, puedes hacer lo siguiente:

```js
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
```

#### Se busca la cadena de prototipos al desestructurar el objeto

Al deconstruir un objeto, si no se accede a una propiedad en sí misma, continuará buscando a lo largo de la cadena de prototipos.

```js
let obj = { self: "123" };
obj.__proto__.prot = "456";
const { self, prot } = obj;
// self "123"
// prot "456" (Acceso a la cadena de prototipos)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{jsxref("Operators/Assignment_Operators", "Operadores de asignación", "", 1)}}
- ["ES6 en profundidad: Desestructuración" en hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)


--- SUBTEMA: division ---


{{jsSidebar("Operators")}}

El operador de división (`/`) produce el cociente de sus operandos donde el operando izquierdo es el dividendo y el operando derecho es el divisor.

{{InteractiveExample("JavaScript Demo: Expressions - Division operator")}}

```js interactive-example
console.log(12 / 2);
// Expected output: 6

console.log(3 / 2);
// Expected output: 1.5

console.log(6 / "3");
// Expected output: 2

console.log(2 / 0);
// Expected output: Infinity
```

## Sintaxis

```
Operador: x / y
```

## Ejemplos

### Division basica

```js
1 / 2; // 0.5

Math.floor(3 / 2); // 1

1.0 / 2.0; // 0.5
```

### Division por cero

```js
2.0 / 0; // Retorna Infinity

2.0 / 0.0; // Retorna Infinity, Dado que 0.0 === 0

2.0 / -0.0; // Retorna -Infinity
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Addition operator](/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Multiplication operator](/es/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/es/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)


--- SUBTEMA: equality ---


{{jsSidebar("Operators")}}

El operador de comparacion (`==`) comprueba si sus dos operandos son iguales y devuelve un resultado booleano. A diferencia del operador de igualdad estricta (`===`), es que este convierte y compara operandos que son de diferentes tipos.

{{InteractiveExample("JavaScript Demo: Expressions - Equality operator")}}

```js interactive-example
console.log(1 == 1);
// Expected output: true

console.log("hello" == "hello");
// Expected output: true

console.log("1" == 1);
// Expected output: true

console.log(0 == false);
// Expected output: true
```

## Sintaxis

```
x == y
```

## Descripción

Los operadores de igualdad (`==` y `!=`) Utilizan el algoritmo de comparación de igualdad abstracta para comparar dos operandos. Esto se puede resumir a grandes rasgos como:

- Si los operandos ambos son objetos, devuelve `true`solo si ambos operandos hacen referencia al mismo objeto.
- Si un operando es `null` y el otro `undefined`, devuelve verdadero(`true`).
- Si los operandos son de diferente tipos, intenta convertirlos al mismo tipo antes de comparar:
  - Al comparar un número con una cadena, convierte la cadena en un valor numérico.
  - Si uno de los operandos es booleano, convierte el operando booleano en 1 si es verdadero y en 0 en el caso de falso.
  - Si uno de los operandos es un objeto y el otro es un número o una cadena, convierte el objeto en una primitiva utilizando los métodos `valueOf()` y `toString()` del objeto.

- Si los operandos tienen el mismo tipo, se comparan de la siguiente manera:
  - `String`: devuelve verdadero solo si ambos operandos tienen los mismos caracteres y en el mismo orden.
  - `Number`: devuelve verdadero solo si ambos operandos tienen el mismo valor. `+0` y `-0` se tratan como el mismo valor. Si alguno de los operandos es `NaN`, devuelve falso.
  - `Boolean`: retorna verdadero solo si ambos operandos son verdaderos o falsos.

La diferencia más notable entre este operador y el operador de igualdad estricta (`===`) es que el operador de igualdad estricta no realiza la conversión de tipos.

## Ejemplos

### Comparación sin conversión de tipo

```js
1 == 1; // true
"Hola" == "Hola"; // true
```

### Comparación con conversión de tipos

```js
"1" == 1; // true
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true, Operador Logico NOT
0 == !!undefined; // true, Operador Logico NOT
null == undefined; // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3; // true
number1 == number2; // false
```

### Comparación de objetos

```js
const object1 = { key: "value" };
const object2 = { key: "value" };

object1 == object2; // false
object2 == object2; // true
```

### Comparar String y objetos String

Tenga en cuenta que las cadenas construidas con `new String()`son objetos. Si compara uno de estos con un String literal, el objeto String se convertirá en un `String` literal y se comparará el contenido. Sin embargo, si ambos operandos son objetos de tipo String, entonces se comparan como objetos y deben hacer referencia al mismo objeto para que la comparación sea exitosa:

```js
const string1 = "Hola";
const string2 = String("Hola");
const string3 = new String("Hola");
const string4 = new String("Hola");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true
```

### Comparación de fechas y cadenas

```js
const d = new Date("December 17, 1995 03:24:00");
const s = d.toString(); // Por ejemplo: "Sun Dec 17 1995 03:24:00 GMT-0800 (Hora estándar del Pacífico)"
console.log(d == s); //true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Inequality operator](/es/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strict equality operator](/es/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Strict inequality operator](/es/docs/Web/JavaScript/Reference/Operators/Strict_inequality)


--- SUBTEMA: exponentiation ---


{{jsSidebar("Operators")}}

El operador de **exponenciación (`**`)\*\* retorna el resultado de elevar el primer operando a la potencia del segundo operando. Es equivalente a {{jsxref("Math.pow()")}}, exepto que también acepta [BigInts](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt) como operandos.

{{InteractiveExample("JavaScript Demo: Expressions - Exponentiation operator")}}

```js interactive-example
console.log(3 ** 4);
// Expected output: 81

console.log(10 ** -2);
// Expected output: 0.01

console.log(2 ** (3 ** 2));
// Expected output: 512

console.log((2 ** 3) ** 2);
// Expected output: 64
```

## Sintaxis

```js-nolint
x ** y
```

## Descripción

El operador `**` acepta dos tipos de operandos: número y [BigInt](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Primero [intenta transformar los operandos a un valor numérico](/es/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) y prueba sus tipos. Realiza una exponenciación BigInt si el operando se convirtió en un BigInt; de lo contrario, realiza la negación de número. Se genera un {{jsxref("TypeError")}} si un operando es convertido a BigInt pero el otro se convierte en un número.

Tanto para números como para BigInts, `0` elevado a una potencia positiva devuelve `0` y `0` elevado a una potencia de `0` devuelve `1`. Para números, `0` elevado a un número negativo devuelve `Infinity`, mientras que `-0` elevado a un número negativo devuelve `-Infinity`.

`NaN ** 0` (y su equivalente `Math.pow(NaN, 0)`) es el único caso en el que {{jsxref("NaN")}} no se propaga a través de operaciónes matemáticas: devuelve `1` a pesar de que el operando sea `NAN`. Además, cuando la base es 1 y el exponente no es infinito, (±Infinity o `NaN`) el comportamiento es diferente a IEEE 754, el cual especifica que el resultado debería ser 1, sin embargo JavaScript retorna `NAN` para preservar la compatibilidad con versiones anteriores con su comportamiento original.

Para exponenciación con BigInt, un {{jsxref("RangeError")}} es generado si el exponente `y` es negativo. Esto es porque cualquier exponente negativo probablemente daría como resultado un valor entre 0 y 1 (a menos que la base sea `1`, `-1` o `0`), que se redondea a cero y probablemente sea un error del desarrollador.

El operador de exponenciación es [asociativo derecho](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence): `a ** b ** c` es igual a `a ** (b ** c)`.

En muchos lenguajes como PHP, Python y otros que tienen un operador de exponenciación (`**`), el operador de exponenciación está definido que el operador de exponenciación tiene una precedencia mayor que los operadores unarios, como el unario `+` y el unario `-`, pero existen algunas exepciones. Por ejemplo, en Bash, `**` se define que el operador tiene una precedencia menor que los operadores unarios.

En JavaScript es imposible escribir una expresión de exponenciación ambigua. Es decir, no se puede colocar un operador unario (con [precedencia 14](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), incluyendo `+`/`-`/`~`/`!`/`++`/`--`/`delete`/`void`/`typeof`/`await`) inmediatamente antes de el número base; [hacerlo provocará un error de sintaxis](/es/docs/Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation).

Por ejemplo, `-2 ** 2` es 4 en Bah, pero es -4 en otros lenguajes (como Python). Esto es inválido en JavaScript, ya que la operación es ambigua. Se tiene que poner entre paréntesis cada lado (`-(2 ** 2)` por ejemplo) para que la intención no sea ambigua.

Tenga en cuenta que algunos lenguajes de programación usan el símbolo de intercalación ^para la exponenciación, pero JavaScript usa ese símbolo para el [operador XOR bit a bit](/es/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

## Ejemplos

### Exponenciación básica

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
2 ** 1024; // Infinity
NaN ** 2; // NaN
NaN ** 0; // 1
1 ** Infinity; // NaN

2n ** 3n; // 8n
2n ** 1024n; // Un número muy grande, pero no infinito.

2n ** 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions

// Para hacer una exponenciación con un BigInt y un elemento que no es un BigInt, convierta cualquiera de los dos operandos
2n ** BigInt(2); // 4n
Number(2n) ** 2; // 4
```

### Asociatividad

```js-nolint
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
```

### Uso con operadores unarios

Para invertir el signo del resultado de una expresión de exponenciación:

```js
-(2 ** 2); // -4
```

Para forzar que la base de una expresión de exponenciación sea un número negativo:

```js
(-2) ** 2; // 4
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Adición (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [Sustracción (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [División (`/`)](/es/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplicación (`*`)](/es/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Resto (`%`)](/es/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Incremento (`++`)](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decremento (`--`)](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Negación unaria (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unario más (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)


--- SUBTEMA: function ---


{{jsSidebar("Operators")}}

## Resumen

El operador `function` define una función dentro de una expresión.

## Sintaxis

```
function [name]([param1, param2, ..., paramN]) {
   statements
}
```

## Parámetros

- `name`
  - : El nombre de la función. Puede ser omitido, en cuyo caso la función es _anonymous_. El nombre sólo es local para el cuerpo de la función.

- `paramN`
  - : El nombre de un argumento que será pasado a la función. Una función puede tener hasta 255 argumentos.

- `statements`
  - : Las declaraciones que conforman el cuerpo de la función.

## Descripción

La expresión de una función es muy similar y tiene casi la misma sintaxis que la declaración de una función (véase {{jsxref("Sentencias/function", "function")}} para más detalles). Véase [Funciones](/es/docs/Web/JavaScript/Reference/Functions) para ver más información sobre las diferencias entre declaraciones de funciones y expresiones de funciones.

## Ejemplos

El siguiente ejemplo define una función sin nombre y se le asigna a la variable x. La función devuelve como resultado el cuadrado de su argumento:

```js
var x = function (y) {
  return y * y;
};
```

### Expresión de función nombrada

Si quiere referirse a la función actual dentro del cuerpo de la función, debe crear una expresión de función nombrada. Luego, este nombre será local solo para el cuerpo de la función (alcance). Esto también evita usar la propiedad no estándar {{jsxref("Funciones/arguments/callee", "arguments.callee")}}.

```js
var math = {
  factorial: function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  },
};
```

## Consulte también

- [Funciones](/es/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Function")}}
- Sentencias {{jsxref("Sentencias/function", "function")}}


--- SUBTEMA: function_star_ ---


{{jsSidebar("Operators")}}

La palabra clave **`function*`** puede ser utilizada para definir una función generadora en una expresión.

{{InteractiveExample("JavaScript Demo: Expressions - function* expression")}}

```js interactive-example
const foo = function* () {
  yield "a";
  yield "b";
  yield "c";
};

let str = "";
for (const val of foo()) {
  str = str + val;
}

console.log(str);
// Expected output: "abc"
```

## Sintaxis

```
function* [nombre]([param1[, param2[, ..., paramN]]]) {
   sentencias
}
```

### Parámetros

- `nombre`
  - : Nombre de la función. Puede ser omitido, en cuyo caso la función es _anínima_. El nombre sólo es local al cuerpo de la función.
- `paramN`
  - : Nombre de un parámetro a ser pasado a la función. Una función puede tener hasta 255 argumentos.
- `sentencias`
  - : Sentencias que componen el cuerpo de la función.

## Descripción

Una expresión `function*` es muy similar y tiene casi la misma sintaxis que una {{jsxref('Statements/function*', 'function* statement')}}. La principal diferencia entre una expresión `function*` y una sentencia `function*` es el _nombre de la función_, que en expresiones `function*` puede ser omitido para creaar funciones generadoras _anónimas_. Para más información vea también el capítulo acerca de [funciones](/es/docs/Web/JavaScript/Reference/Functions).

## Ejemplos

El siguiente ejemplo define una función generadora sin nombre y la asigna a `x`. La función produce el cuadrado de su argumento:

```js
var x = function* (y) {
  yield y * y;
};
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Statements/function*", "Sentencia function*")}}
- Objeto {{jsxref("GeneratorFunction")}}
- [El protocolo iterable](/es/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- Objeto {{jsxref("Function")}}
- {{jsxref("Statements/function", "Sentencia function")}}
- {{jsxref("Operators/function", "Expresión function")}}
- {{jsxref("Functions_and_function_scope", "Funciones y alcance de funciones")}}


--- SUBTEMA: grouping ---


{{jsSidebar("Operators")}}

El operador de agrupación `( )` controla la precedencia de las expresiones a evaluar.

## Sintaxis

```
( )
```

## Descripción

El operador de agrupación consiste en un par de paréntesis alrededor de la expresión (o sub-expresión) que sobrescribe el comportamiento por defecto de la [precedencia de operadores](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence), lo que causa que expresiones con menor precedencia puedan ser evaluadas antes que expresiones con una mayor precedencia.

## Ejemplos

Sobrescribir la precedencia de operadores aritméticos por defecto para que se evalúe primero la adición y luego la multiplicación.

```js-nolint
var a = 1;
var b = 2;
var c = 3;

// precedencia por defecto
a + b * c; // 7
// es evaluada por defecto como:
a + (b * c); // 7

// ahora se sobrescribe la precedencia
// para que la adición se evalúe antes que la multiplicación
(a + b) * c; // 9

// que es equivalente a:
a * c + b * c; // 9
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Temas relacionados

- [Precedencia de operadores](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}


--- SUBTEMA: import.meta ---


{{JSSidebar("Statements")}}

El objeto **`import.meta`** expone el contenido especifico de la metadata al módulo JavaScript. Este contiene informacion sobre el módulo, como por ejemplo, la URL del mismo.

## Syntax

```
import.meta
```

## Descripción

La sintasis consiste de la palabra clave {{JSxRef("Statements/import","import")}},un punto, y un identificador `meta`. Normalmente, la parte a la izquierda del punto es el objeto sobre el cual la accion es realizada, pero aqui `import` no es realmente un objeto.

El objeto `import.meta` es creado por la implementacion ECMAScript , con un prototipo {{JSxRef("null")}} . El objeto es extensible y sus propiedades son grabables, editables y enumerables.

## Ejemplos

### Usando import.meta

Dado un módulo `my-module.js`

```html
<script type="module" src="my-module.js"></script>
```

puedes acceder a la meta información sobre el módulo usando el objeto `import.meta`.

```js
console.log(import.meta); // { url: "file:///home/user/my-module.js" }
```

Este retorna un objeto con una propiedad `url` indicando la URL base del módulo.Esta será la URL de la que el script fue obtenido, por scripts externos, o la URL base del documento que contiene el documento, por scripts inline.

Nota que este incluirá parametros de la consulta y/o el hash (ej: seguido del `?` or `#`).

Por ejemplo, con el siguiente HTML:

```html
<script type="module">
  import "./index.mjs?someURLInfo=5";
</script>
```

..El siguiente archivo JavaScript registrará el parámetro `someURLInfo`:

```js
// index.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

Lo mismo aplica cuando un archivo importa otro:

```js
// index.mjs
import "./index2.mjs?someURLInfo=5";

// index2.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

Nota que mientras Node.js pasa en la consulta los parámetros (o el hash ) como en el último ejemplo, a partir de Node 14.1.0, una URL con parametros en la consulta fallará cuando se carguen en el formato `node --experimental-modules index.mjs?someURLInfo=5` (es tratado como un archivo en lugar de una URL en este contexto).

Tal argumento específico del archivo podria ser complementario al usado en toda la aplicacion `location.href` (con consultas strings o hash añadidas despues de la ruta HTML) (o en Node.js, mediante `process.argv`).

## Especificaciones

{{Specifications}}

## Browser compatibility

{{Compat}}

## Ver también

- {{JSxRef("Statements/import", "import")}}
- {{JSxRef("Statements/export", "export")}}


--- SUBTEMA: increment ---


{{jsSidebar("Operators")}}

El operador de **incremento (`++`)** incrementa (agrega uno a) su operando y retorna el valor antes o despues del incremento, dependiendo de dónde está posicionado el operador.

{{InteractiveExample("JavaScript Demo: Expressions - Increment operator")}}

```js interactive-example
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
```

## Sintaxis

```js-nolint
x++
++x
```

## Descripción

El operador `++` acepta dos tipos de operandos: número y [BigInt](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Primero [intenta transformar ambos operandos a valores numéricos](/es/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) y prueba sus tipos. Realiza una incremento con BigInt si ambos operandos se convierten en BigInts; de lo contrario, realiza el incremento de números.

Si se usa postfijo, con el operador después del operando (por ejemplo, `x++`), el operador de incremento incrementa y devuelve el valor antes de incrementar.

Si se usa prefijo, con un operador antes del operando (por ejemplo, `++x`), el operador de incremento incrementa y devuelve el valor después del incremento.

El operador de incremento solo se puede aplicar a operandos que son referencias (variables y propiedades de objetos; es decir, [objetivos de asignación](/es/docs/Web/JavaScript/Reference/Operators/Assignment) válidos). `++x` se evalúa como un valor, no como una referencia, por lo que no se pueden encadenar varios operadores de incremento.

```js-nolint example-bad
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Ejemplos

### Incremento postfijo

```js
let x = 3;
const y = x++;
// x es 4; y es 3

let x2 = 3n;
const y2 = x2++;
// x2 es 4n; y2 es 3n
```

### Incremento prefijo

```js
let x = 3;
const y = ++x;
// x es 4; y es 4

let x2 = 3n;
const y2 = ++x2;
// x2 es 4n; y2 es 4n
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Adición (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [Sustracción (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [División (`/`)](/es/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplicación (`*`)](/es/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Resto (`%`)](/es/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponciación (`**`)](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Decremento (`--`)](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Negación Unaria (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unario más (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)


--- SUBTEMA: operators ---


{{jsSidebar("Operators", "Operadores")}}

Este capítulo documenta todos los operadores, expresiones y palabras clave del lenguaje JavaScript.

## Expresiones y operadores por categoría

Para obtener una lista alfabética, consulta la barra lateral de la izquierda.

### Expresiones primarias

Palabras clave básicas y expresiones generales en JavaScript.

- {{jsxref("Operators/this", "this")}}
  - : La palabra clave `this` se refiere a una propiedad especial de un contexto de ejecución.
- {{jsxref("Operators/function", "function")}}
  - : La palabra clave `function` define una expresión de función.
- {{jsxref("Operators/class", "class")}}
  - : La palabra clave `class` define una expresión de clase.
- {{jsxref("Operators/function", "function")}}
  - : La palabra clave `function*` define una expresión de función generadora.
- {{jsxref("Operators/yield", "yield")}}
  - : Pausar y reanudar una función generadora.
- {{jsxref("Operators/yield*", "yield*")}}
  - : Delegar a otra función generadora u objeto iterable.
- {{jsxref("Operators/async_function", "async function")}}
  - : La `async function` define una expresión de función asíncrona.
- {{jsxref("Operators/await", "await")}}
  - : Pausa y reanuda una función asíncrona y espera la resolución/rechazo de la promesa.
- {{jsxref("Global_Objects/Array", "[]")}}
  - : Iniciador de arreglo/sintaxis literal.
- {{jsxref("Operators/Object_initializer", "{}")}}
  - : Iniciador de objeto/sintaxis literal.
- {{jsxref("Global_Objects/RegExp", "/ab+c/i")}}
  - : Sintaxis de expresión regular literal.
- {{jsxref("Operators/Grouping", "( )")}}
  - : Operador de agrupación.

### Expresiones del lado izquierdo

Los valores de la izquierda son el destino de una asignación.

- {{jsxref("Operators/Property_accessors", "Propiedad accessors", "", 1)}}
  - : Los operadores miembro proporcionan acceso a una propiedad o método de un objeto
    (`object.property` y `object["property"]`).
- {{jsxref("Operators/new", "new")}}
  - : El operador `new` crea una instancia auxiliado por un constructor.
- {{jsxref("Operators/new%2Etarget", "new.target")}}
  - : En los constructores, `new.target` se refiere al constructor que fue invocado por {{jsxref("Operators/new", "new")}}.
- {{jsxref("Operators/super", "super")}}
  - : La palabra clave `super` llama al constructor padre.
- {{jsxref("Operators/Spread_syntax", "...obj")}}
  - : La sintaxis de extensión permite expandir una expresión en lugares donde se esperan múltiples argumentos (para llamadas a funciones) o múltiples elementos (para arreglos literales).

### Incremento y decremento

Operadores de incremento sufijo/prefijo y decremento sufijo/prefijo.

- {{jsxref("Operators/Increment", "A++")}}
  - : Operador de incremento sufijo.
- {{jsxref("Operators/Decrement", "A--")}}
  - : Operador de decremento sufijo.
- {{jsxref("Operators/Increment", "++A")}}
  - : Operador de incremento prefijo.
- {{jsxref("Operators/Decrement", "--A")}}
  - : Operador de decremento prefijo.

### Operadores unarios

Una operación unaria es una operación con un solo operando.

- {{jsxref("Operators/delete", "delete")}}
  - : El operador `delete` elimina una propiedad de un objeto.
- {{jsxref("Operators/void", "void")}}
  - : El operador `void` descarta el valor de retorno de una expresión.
- {{jsxref("Operators/typeof", "typeof")}}
  - : El operador `typeof` determina el tipo de un objeto dado.
- {{jsxref("Operators/Unary_plus", "+")}}
  - : El operador unario `más` convierte su operando al tipo `Number`.
- {{jsxref("Operators/Unary_negation", "-")}}
  - : El operador unario de negación convierte su operando al tipo `Number` y luego lo niega.
- {{jsxref("Operators/Bitwise_NOT", "~")}}
  - : Operador `NOT` bit a bit.
- {{jsxref("Operators/Logical_NOT", "!")}}
  - : Operador `NOT` lógico.

### Operadores aritméticos

Los operadores aritméticos toman valores numéricos (ya sean literales o variables) como sus operandos y devuelven un solo valor numérico.

- {{jsxref("Operators/Addition", "+")}}
  - : Operador de adición o suma.
- {{jsxref("Operators/Subtraction", "-")}}
  - : Operador de sustracción o resta.
- {{jsxref("Operators/Division", "/")}}
  - : Operador de división.
- {{jsxref("Operators/Multiplication", "*")}}
  - : Operador de multiplicación.
- {{jsxref("Operators/Remainder", "%")}}
  - : Operador de residuo.
- {{jsxref("Operators/Exponentiation", "**")}}
  - : Operador de exponenciación.

### Operadores relacionales

Un operador de comparación compara sus operandos y devuelve un valor `Boolean` basado en si la comparación es verdadera o no.

- {{jsxref("Operators/in", "in")}}
  - : El operador `in` determina si un objeto tiene una determinada propiedad.
- {{jsxref("Operators/instanceof", "instanceof")}}
  - : El operador `instanceof` determina si un objeto es una instancia de otro objeto.
- {{jsxref("Operators/Less_than", "&lt;")}}
  - : Operador menor que.
- {{jsxref("Operators/Greater_than", "&gt;")}}
  - : Operador mayor que.
- {{jsxref("Operators/Less_than_or_equal", "&lt;=")}}
  - : Operador menor o igual a.
- {{jsxref("Operators/Greater_than_or_equal", "&gt;=")}}
  - : Operador mayor o igual a.

> [!NOTE]
> `=>` no es un operador, sino la notación para {{jsxref("Functions/Arrow_functions", "Funciones de flecha")}}.

### Operadores de igualdad

El resultado de evaluar un operador de igualdad siempre es de tipo `Boolean` basado en si la comparación es verdadera.

- {{jsxref("Operators/Equality", "==")}}
  - : Operador de igualdad.
- {{jsxref("Operators/Inequality", "!=")}}
  - : Operador de desigualdad.
- {{jsxref("Operators/Strict_equality", "===")}}
  - : Operador de igualdad estricta.
- {{jsxref("Operators/Strict_inequality", "!==")}}
  - : Operador de desigualdad estricta.

### Operadores de desplazamiento de bits

Operaciones para cambiar todos los bits del operando.

- {{jsxref("Operators/Left_shift", "&lt;&lt;")}}
  - : Operador de desplazamiento bit a bit a la izquierda.
- {{jsxref("Operators/Right_shift", "&gt;&gt;")}}
  - : Operador de desplazamiento bit a bit a la derecha.
- {{jsxref("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : Operador de desplazamiento bit a bit a la derecha sin signo.

### Operadores binarios bit a bit

Los operadores bit a bit tratan a sus operandos como un conjunto de 32 bits (ceros y unos) y devuelven valores numéricos estándar de JavaScript.

- {{jsxref("Operators/Bitwise_AND", "&amp;")}}
  - : `AND` bit a bit.
- {{jsxref("Operators/Bitwise_OR", "|")}}
  - : `OR` bit a bit.
- {{jsxref("Operators/Bitwise_XOR", "^")}}
  - : `XOR` bit a bit.

### Operadores lógicos binarios

Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelven un valor booleano.

- {{jsxref("Operators/Logical_AND", "&amp;&amp;")}}
  - : `AND` lógico.
- {{jsxref("Operators/Logical_OR", "||")}}
  - : `OR` lógico.

### Operador condicional (ternario)

- {{jsxref("Operators/Conditional_Operator", "(condition ? ifTrue : ifFalse)")}}
  - : El operador condicional devuelve uno de dos valores según el valor lógico de la condición.

### Operadores de asignación

Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho.

- {{jsxref("Operators/Assignment", "=")}}
  - : Operador de asignación.
- {{jsxref("Operators/Multiplication_assignment", "*=")}}
  - : Asignación de multiplicación.
- {{jsxref("Operators/Division_assignment", "/=")}}
  - : Asignación de división.
- {{jsxref("Operators/Remainder_assignment", "%=")}}
  - : Asignación de residuo.
- {{jsxref("Operators/Addition_assignment", "+=")}}
  - : Asignación de suma.
- {{jsxref("Operators/Subtraction_assignment", "-=")}}
  - : Asignación de sustracción
- {{jsxref("Operators/Left_shift_assignment", "&lt;&lt;=")}}
  - : Asignación de desplazamiento a la izquierda.
- {{jsxref("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : Asignación de desplazamiento a la derecha.
- {{jsxref("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : Asignación de desplazamiento a la derecha sin signo.
- {{jsxref("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : Asignación de `AND` bit a bit.
- {{jsxref("Operators/Bitwise_XOR_assignment", "^=")}}
  - : Asignación de `XOR` bit a bit.
- {{jsxref("Operators/Bitwise_OR_assignment", "|=")}}
  - : Asignación de `OR` bit a bit.
- {{jsxref("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : Asignación de `AND` lógico.
- {{jsxref("Operators/Logical_OR_assignment", "||=")}}
  - : Asignación de `OR` lógico.
- {{jsxref("Operators/Logical_nullish_assignment", "??=")}}
  - : Asignación de anulación lógica.
- {{jsxref("Operators/Destructuring_assignment", "[a, b] = [1, 2]")}}
  {{jsxref("Operators/Destructuring_assignment", "{a, b} = {a:1, b:2}")}}
  - : La desestructuración te permite asignar las propiedades de un arreglo u objeto a variables utilizando una sintaxis que se parece a los arreglos u objetos literales.

### Operador coma

- {{jsxref("Operators/Comma_Operator", ",")}}
  - : El operador `coma` permite evaluar múltiples expresiones en una sola declaración y devuelve el resultado de la última expresión.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{jsxref("Operators/Operator_Precedence", "Operator de precedencia")}}


--- SUBTEMA: in ---


{{jsSidebar("Operators")}}El **operador `in`** devuelve `true` si la propiedad especificada está en el objeto especificado o su prototipo.

## Sintaxis

```
prop in object
```

### Parámetros

- `prop`
  - : Una cadena o expresión númerica que representa el nombre de una propiedad o el índice de un array (lo que no sea un símbolo se forzará a string).

- `object`
  - : El objeto (o su cadena de prototipo) sobre el que comprobar si contiene la propiedad con el nombre especificado.

## Descripción

Los siguientes ejemplos muestran algunos de los usos del operador `in`.

```js
// Arrays
var arboles = new Array("secoya", "pino", "cedro", "roble", "arce");
0 in arboles; // devuelve true
3 in arboles; // devuelve true
6 in arboles; // devuelve false
"pino" in arboles; // devuelve false (debe especificar el número de índice,
// no el valor del índice)
"length" in arboles; // devuelve true (length es una propiedad de Array)

// Objetos predefinidos
"PI" in Math; // devuelve true

// Objetos personalizados
var micoche = { marca: "Honda", modelo: "Accord", año: 1998 };
"marca" in micoche; // devuelve true
"modelo" in micoche; // devuelve true
```

Debe especificar un objeto en el lado derecho del operador `in`. Por ejemplo, puede especificar una cadena creada con el constructor `String` , pero no puede especificar una cadena literal.

```js
var color1 = new String("verde");
"length" in color1; // devuelve true

var color2 = "coral";
"length" in color2; // genera un error (color2 no es un objeto String)
```

### Usando `in` con propiedades eliminadas o no definidas

Si se elimina una propiedad con el operador {{jsxref("Operadores/delete", "delete")}}, el operador `in` devuelve `false` para esa propiedad.

```js
var micoche = { marca: "Honda", modelo: "Accord", año: 1998 };
delete micoche.marca;
"marca" in micoche; // devuelve false

var arboles = new Array("secoya", "pino", "cedro", "roble", "arce");
delete arboles[3];
3 in arboles; // devuelve false
```

Si se cambia una propiedad a {{jsxref("Objetos_globales/undefined", "undefined")}} pero no se elimina, el operador `in` devuelve true para esa propiedad.

```js
var micoche = { marca: "Honda", modelo: "Accord", año: 1998 };
micoche.marca = undefined;
"marca" in micoche; // devuelve true
```

```js
var arboles = new Array("secayo", "pino", "cedro", "roble", "arce");
arboles[3] = undefined;
3 in arboles; // devuelve true
```

### Propiedades heredadas

El operador `in` devuelve `true` para propiedades en la cadena del prototipo.

```js
"toString" in {}; // devuelve true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- [`for...in`](/es/docs/Web/JavaScript/Reference/Statements/for...in)
- [`delete`](/es/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Reflect.has()")}}
- [Enumerability and ownership of properties](/es/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)


--- SUBTEMA: instanceof ---


{{jsSidebar("Operators")}}

## Resumen

El operador **`instanceof`** verifica si un objeto en su cadena de prototipos contiene la propiedad `prototype` de un constructor.

## Sintaxis

```
objeto instanceof constructor
```

### Parámetros

- `objeto`
  - : Objeto a verificar.

- `constructor`
  - : Función contra la que se hará la verificación.

## Descripción

Utilice `instanceof` cuando necesite confirmar el tipo de un objeto en tiempo de ejecución. Por ejemplo, cuando controle excepciones, puede recurrir a diferentes códigos de manipulación de excepciones dependiendo del tipo de excepción tomada.

Debe especificar un objeto en el lado derecho del operador `instanceof`. Por ejemplo, puede especificar una cadena creada con el constructor `String`, pero no puede especificar un literal de cadena.

```js
color1 = new String("verde");
color1 instanceof String; // devuelve verdadero (true)
color2 = "coral";
color2 instanceof String; // devuelve falso (color2 no es un objeto String)
```

### Ejemplos

También vea los ejemplos de {{jsxref("Sentencias/throw", "throw")}}.

#### Ejemplo: Determinando si `elDia` es un objeto `Date`

El siguiente código utiliza `instanceof` para determinar si `elDia` es un objeto `Date`. Debido a que `elDia` es un objeto `Date`, las instrucciones de la sentencia if se ejecutan.

```js
elDia = new Date(1995, 12, 17);
if (elDia instanceof Date) {
  // instrucciones a ejecutar
}
```

#### Ejemplo: Demostrando que `String` y `Date` son del tipo `Object`

El siguiente código utiliza `instanceof` para demostrar que los objetos `String` y `Date` son también del tipo `Object` (éstos se derivan de `Object`).

```js
miCadena = new String();
miFecha = new Date();

miCadena instanceof String; // devuelve true
miCadena instanceof Object; // devuelve true
miCadena instanceof Date; // devuelve false

miFecha instanceof Date; // devuelve true
miFecha instanceof Object; // devuelve true
miFecha instanceof String; // devuelve false
```

#### Ejemplo: Demostrando que `miCoche` es del tipo `Coche` y del tipo `Object`

El siguiente código crea un objeto del tipo `Coche` y una instancia de ese tipo de objeto, `miCoche`. El operador `instanceof` demuestra que el objeto `miCoche` es del tipo `Coche` y del tipo `Object`.

```js
function Coche(fabricante, modelo, ejercicio) {
  this.fabricante = fabricante;
  this.modelo = modelo;
  this.ejercicio = ejercicio;
}
miCoche = new Coche("Honda", "Accord", 1998);
a = miCoche instanceof Coche; // devuelve verdadero (true)
b = miCoche instanceof Object; // devuelve verdadero (true)
```


--- SUBTEMA: logical_and ---


{{jsSidebar("Operators")}}

El **operador lógico AND (`&&`)** (conjunción lógica) será `true` para un conjunto de operandos booleanos si y solo si todos los operandos son `true`. En caso contrario, será `false`.

Generalmente, el operador retorna el valor del primer operando _{{Glossary("falsy")}}_ encontrado cuando evalúa de izquierda a derecha, o el valor del último operando si todos ellos son _{{Glossary("truthy")}}_.

{{InteractiveExample("JavaScript Demo: Expressions - Logical AND", "shorter")}}

```js interactive-example
const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
// Expected output: false
```

## Sintaxis

```js-nolint
x && y
```

## Descripción

El operador lógico AND (`&&`) evalúa operandos de izquierda a derecha, regresando inmediatamente el valor del primer operando _{{Glossary("falsy")}}_ que encuentre; si todos los valores son _{{Glossary("truthy")}}_, el valor del último operando es retornado.

Si un valor puede ser convertido a `true`, el valor es conocido como _{{Glossary("truthy")}}_. Si un valor puede ser convertido a `false`, el valor es conocido como _{{Glossary("falsy")}}_.

Ejemplos de expresiones que pueden ser convertidas a `false` son:

- `false`;
- `null`;
- `NaN`;
- `0`;
- cadena vacía (`""` o `''` o ` `` `);
- `undefined`.

El operador AND preserva valores no booleanos y los retorna como estén:

```js
result = "" && "foo"; // "" (cadena vacía) es asignada a result
result = 2 && 0; // 0 es asignado a result
result = "foo" && 4; // 4 es asignado a result
```

Aunque el operador `&&` puede ser usado con operandos que no son valores booleanos, aún puede ser considerado un operador booleano ya que su valor de retorno siempre puede ser convertido a un [booleano primitivo](/es/docs/Web/JavaScript/Guide/Data_structures#boolean_type).
Para explícitamente convertir su valor de retorno (o cualquier expresión en general) al correspondiente valor booleano, se debe usar un doble ({{JSxRef("Operators/Logical_NOT", "operador lógico NOT", "", 1)}}) o el contructor del objeto {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}}.

### Evaluación de cortocircuito (Short-circuit)

La expresión lógica AND es un operador de cortocircuito (_short-circuit_).
Como cada operando es convertido a un booleano, si el resultado de una conversión es `false`, el operador AND se detiene y retorna el valor original del operando _falsy_; **no** evalúa ninguno de los operandos restantes.

Considere el siguiente pseudocódigo.

```plain
(alguna expresión _falsy_) && expresión
```

La parte de la `expresión` **nunca es evaluada** porque el primer operando <code>(alguna expresión _falsy_)</code> es evaluado como _{{Glossary("falsy")}}_.
Si la `expresión` es una función, la función nunca es llamada.
Veamos el siguiente ejemplo:

```js
function A() {
  console.log("llamada a A");
  return false;
}
function B() {
  console.log("llamada a B");
  return true;
}

console.log(A() && B());
// Imprime "llamada a A" en la consola por la llamada a la función A,
// `&&` evalúa a `false` (la función A retorna `false`), después `false` es impreso en la consola;
// el operador AND realiza un cortocircuito aquí e ignora la función B
```

### Precedencia de operadores

El operador AND tiene más alta precedencia que el operador OR, esto significa que el operador `&&` es ejecutado antes del operador `||` (vea [precedencia de operadores](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // true
true && (false || false); // false
(2 === 3) || (4 < 0) && (1 === 1); // false
```

## Ejemplos

### Usando el operador lógico AND

El siguiente código muestra ejemplos del operador lógico AND (`&&`).

```js
a1 = true && true; // t && t retorna `true`
a2 = true && false; // t && f retorna `false`
a3 = false && true; // f && t retorna `false`
a4 = false && 3 === 4; // f && f retorna `false`
a5 = "Cat" && "Dog"; // t && t retorna "Dog"
a6 = false && "Cat"; // f && t retorna `false`
a7 = "Cat" && false; // t && f retorna `false`
a8 = "" && false; // f && f retorna ""
a9 = false && ""; // f && f retorna `false`
```

### Reglas de conversión para booleanos

#### Convirtiendo el operador lógico AND al operador lógico OR

La siguiente operación involucra booleanos:

```js-nolint
bCondition1 && bCondition2
```

es siempre igual a:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### Convirtiendo el operador lógico OR al operador lógico AND

La siguiente operación involucra booleanos:

```js-nolint
bCondition1 || bCondition2
```

es siempre igual a:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Removiendo paréntesis anidados

Ya que las expresiones lógicas son evaluadas de izquierda a derecha, siempre es posible remover los paréntesis de una expresión compleja siguiendo las siguientes reglas.

La siguiente operación compuesta involucra booleanos:

```js-nolint
bCondition1 || (bCondition2 && bCondition3)
```

es siempre igual a:

```js-nolint
bCondition1 || bCondition2 && bCondition3
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}


--- SUBTEMA: logical_or ---


{{jsSidebar("Operators")}}

El **operador lógico OR (`||`)** (disyunción lógica) es verdadero para un conjunto de operandos si y solo si uno o más de sus operandos es verdadero. Es normalmente usado con valores booleanos (lógicos). Cuando es así, retorna un valor booleano. Sin embargo, el operador `||` puede retornar el valor de uno de los operandos especificados, por lo que si este operador es usado con valores no booleanos, retornará un valor no booleano.

{{InteractiveExample("JavaScript Demo: Expressions - Logical OR", "shorter")}}

```js interactive-example
const a = 3;
const b = -2;

console.log(a > 0 || b > 0);
// Expected output: true
```

## Sintaxis

```js-nolint
x || y
```

## Descripción

Si `x` puede ser convertida a `true`, retorna `x`; en caso contrario, retorna `y`.

Si un valor puede ser convertido a `true`, el valor es conocido como _{{Glossary("truthy")}}_. Si un valor puede ser convertido a `false`, el valor es conocido como _{{Glossary("falsy")}}_.

Ejemplos de expresiones que pueden ser convertidas a `false` son:

- `null`;
- `NaN`;
- `0`;
- cadena vacía (`""` o `''` o ` `` `);
- `undefined`.

Aunque el operador `||` puede ser usado con operandos que no son valores booleanos, aún puede ser considerado un operador booleano ya que su valor de retorno siempre puede ser convertido a un [booleano primitivo](/es/docs/Web/JavaScript/Guide/Data_structures#boolean_type).
Para explícitamente convertir su valor de retorno (o cualquier expresión en general) al correspondiente valor booleano, se debe usar un doble ({{JSxRef("Operators/Logical_NOT", "operador lógico NOT", "", 1)}}) o el contructor del objeto {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}}.

### Evaluación de cortocircuito (Short-circuit)

La expresión lógica OR es evaluada de izquierda a derecha, es posible una evaluación de cortocircuito (_short-circuit_) usando la siguiente regla:

<code>(alguna expresión _truthy_) || expresión</code> es evaluada por cortocircuito (_short-circuit_) a la expresión _truthy_.

Cortocircuito (_Short-circuit_) significa que la parte de la `expresión` de arriba **no es evaluada**, por lo que ningún efecto secundario resultante de ella es realizado (por ejemplo, si la `expresión` es una llamada a una función, la llamada nunca es realizada). Esto ocurre porque el valor del operador ya está determinado después de la evaluación del primer operando. Veamos un ejemplo:

```js
function A() {
  console.log("llamada a A");
  return false;
}
function B() {
  console.log("llamada a B");
  return true;
}

console.log(B() || A());
// Imprime "llamada a B" por la llamada a la función,
// después imprime `true` (que es el valor resultante del operador)
```

### Precedencia de operadores

Las siguientes expresiones pueden parecer equivalentes, pero no lo son, porque el operador `&&` es ejecutado antes del operador `||` (véase [precedencia de operadores](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

```js-nolint
true || false && false; // retorna `true`, porque `&&` es ejecutado primero
(true || false) && false; // retorna `false`, porque la agrupación tiene la más alta precedencia
```

## Ejemplos

### Usando el operador lógico OR

El siguiente código muestra ejemplos del operador lógico OR (`||`).

```js
true || true; // t || t retorna `true`
false || true; // f || t retorna `true`
true || false; // t || f retorna `true`
false || 3 === 4; // f || f retorna `false`
"Cat" || "Dog"; // t || t retorna "Cat"
false || "Cat"; // f || t retorna "Cat"
"Cat" || false; // t || f retorna "Cat"
"" || false; // f || f retorna `false`
false || ""; // f || f retorna ""
false || varObject; // f || objeto retorna varObject
```

> [!NOTE]
> Si se usa este operador para proveer un valor por defecto a alguna variable, se debe ser consciente que cualquier valor _falsy_ no será usado. Si solo se necesita filtrar [`null`](/es/docs/Web/JavaScript/Reference/Operators/null) o {{jsxref("undefined")}}, considere usar [el operador de coalescencia nula (??)](/es/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing).

### Reglas de conversión para booleanos

#### Convirtiendo el operador lógico AND al operador lógico OR

La siguiente operación involucra booleanos:

```js-nolint
bCondition1 && bCondition2
```

es siempre igual a:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### Convirtiendo el operador lógico OR al operador lógico AND

La siguiente operación involucra booleanos:

```js-nolint
bCondition1 || bCondition2
```

es siempre igual a:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Removiendo paréntesis anidados

Ya que las expresiones lógicas son evaluadas de izquierda a derecha, siempre es posible remover los paréntesis de una expresión compleja siguiendo las siguientes reglas.

La siguiente operación compuesta involucra booleanos:

```js-nolint
bCondition1 && (bCondition2 || bCondition3)
```

es siempre igual a:

```js-nolint
!(!bCondition1 || !bCondition2 && !bCondition3)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Operador de coalescencia nula (??)](/es/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}


--- SUBTEMA: multiplication ---


{{jsSidebar("Operators")}}

El operador de **multiplicación (`*`)** produce el producto de dos operandos.

{{InteractiveExample("JavaScript Demo: Expressions - Multiplication operator")}}

```js interactive-example
console.log(3 * 4);
// Expected output: 12

console.log(-3 * 4);
// Expected output: -12

console.log("3" * 2);
// Expected output: 6

console.log("foo" * 2);
// Expected output: NaN
```

## Sintaxis

```js-nolint
x * y
```

## Descripción

El operador `*` acepta dos tipos de operandos: número y [BigInt](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Primero [intenta transformar ambos operandos a valores numéricos](/es/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) y prueba sus tipos. Realiza una multiplicación BigInt si ambos operandos se convierten en BigInts; de lo contrario, realiza la multiplicación de números. Se genera un {{jsxref("TypeError")}} si un operando es convertido a BigInt pero el otro se convierte en un número.

## Ejemplos

### Multiplicación usando números

```js
2 * 2; // 4
-2 * 2; // -4
```

### Multiplicación usando Infinito

```js
Infinity * 0; // NaN
Infinity * Infinity; // Infinity
```

### Multiplicación con elementos que no son números

```js
"foo" * 2; // NaN
"2" * 2; // 4
```

### Multiplicación usando BigInts

```js
2n * 2n; // 4n
-2n * 2n; // -4n

2n * 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions

// Para multiplicar un BigInt por un elemento que no es un BigInt, convierta cualquiera de los dos operandos
2n * BigInt(2); // 4n
Number(2n) * 2; // 4
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Adición (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [Sustracción (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [División (`/`)](/es/docs/Web/JavaScript/Reference/Operators/Division)
- [Resto (`%`)](/es/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponenciación (`**`)](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Incremento (`++`)](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decremento (`--`)](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Negación Unaria (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unario más (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)


--- SUBTEMA: new ---


{{jsSidebar("Operators", "Operadores")}}

El **operador `new`** permite a los desarrolladores crear una instancia de un tipo de objeto definido por el usuario o de uno de los tipos de objeto integrados que tiene un función constructora.

{{InteractiveExample("JavaScript Demo: Expressions - new operator")}}

```js interactive-example
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Eagle", "Talon TSi", 1993);

console.log(car1.make);
// Expected output: "Eagle"
```

## Sintaxis

```
new constructor[([arguments])]
```

### Parámetros

- `constructor`
  - : Una clase o función que especifica el tipo de instancia del objeto.

- `arguments`
  - : Una lista de valores con los que se llamará al `constructor`.

## Descripción

La palabra clave **`new`** hace lo siguiente:

1. Crea un objeto JavaScript simple y en blanco;
2. Vincula (establece el constructor de) este objeto a otro objeto;
3. Pasa el objeto recién creado del _Paso 1_ como el contexto `this`;
4. Devuelve `this` si la función no devuelve un objeto.

La creación de un objeto definido por el usuario requiere dos pasos:

1. Defina el tipo de objeto escribiendo una función.
2. Crea una instancia del objeto con `new`.

Para definir un tipo de objeto, crea una función para el tipo de objeto que especifique su nombre y propiedades. Un objeto puede tener una propiedad que en sí misma es otro objeto. Ve los siguientes ejemplos.

Cuando se ejecuta el código `new Foo(...)`, sucede lo siguiente:

1. Se crea un nuevo objeto, heredado de `Foo.prototype`.
2. La función constructora `Foo` se llama con los argumentos especificados y con {{JSxRef("Operators/this", "this")}} vinculado al objeto recién creado. `new Foo` es equivalente a `new Foo()`, es decir, si no se especifica una lista de argumentos, `Foo` se llama sin argumentos.
3. El objeto (no nulo, `false`, 3.1415 u otros tipos primitivos) devuelto por la función constructora se convierte en el resultado de toda la expresión `new`. Si la función constructora no devuelve explícitamente un objeto, en su lugar se utiliza el objeto creado en el paso 1. (Normalmente, los constructores no devuelven un valor, pero pueden elegir hacerlo si quieren redefinir el proceso normal de creación de objetos).

Siempre puedes agregar una propiedad a un objeto definido previamente. Por ejemplo, la instrucción `car1.color = "black"` agrega una propiedad `color` a `car1` y le asigna un valor de "`black`". Sin embargo, esto no afecta a ningún otro objeto. Para agregar la nueva propiedad a todos los objetos del mismo tipo, debes agregar la propiedad a la definición del tipo de objeto `Car`.

Puedes agregar una propiedad compartida a un tipo de objeto definido previamente mediante la propiedad {{JSxRef("Global_Objects/Function/prototype", "Function.prototype")}}. Esto define una propiedad que comparten todos los objetos creados con esa función, en lugar de solo una instancia del tipo de objeto. El siguiente código agrega una propiedad de color con el valor `"color original"` a todos los objetos de tipo `Car`, y luego redefine ese valor con la cadena "`black`" solo en la instancia `car1` del objeto. Para obtener más información, consulta {{JSxRef("Global_Objects/Function/prototype", "prototype")}}.

```js
function Car() {}
car1 = new Car();
car2 = new Car();

console.log(car1.color); // undefined

Car.prototype.color = "color original";
console.log(car1.color); // 'color original'

car1.color = "black";
console.log(car1.color); // 'black'

console.log(Object.getPrototypeOf(car1).color); // 'color original'
console.log(Object.getPrototypeOf(car2).color); // 'color original'
console.log(car1.color); // 'black'
console.log(car2.color); // 'color original'
```

> [!NOTE]
> Si no escribiste el operador `new`, **la función `constructor` se invocará como cualquier función normal**, _sin crear un objeto._ En este caso, el valor de `this` también es diferente.

## Ejemplos

### Tipo de objeto e instancia de objeto

Supongamos que deseas crear un tipo de objeto para `cars`. Quieres que este tipo de objeto se llame `Car`, y quieres que tenga propiedades para marca, modelo y año (`make`, `model` y `year` en inglés respectivamente). Para ello, podrías escribir la siguiente función:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Ahora puedes crear un objeto llamado `myCar` de la siguiente manera:

```js
var myCar = new Car("Eagle", "Talon TSi", 1993);
```

Esta declaración crea `myCar` y le asigna los valores especificados para sus propiedades. Entonces el valor de `myCar.make` es la cadena "Eagle", `myCar.year` es el entero 1993, y así sucesivamente.

Puedes crear cualquier número de objetos `car` mediante llamadas a `new`. Por ejemplo:

```js
var kensCar = new Car("Nissan", "300ZX", 1992);
```

### Propiedad del objeto que en sí mismo es otro objeto

Supongamos que defines un objeto llamado `Person` de la siguiente manera:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

Y luego creas una instancia de dos nuevos objetos `Person` de la siguiente manera:

```js
var rand = new Person("Rand McNally", 33, "M");
var ken = new Person("Ken Jones", 39, "M");
```

Luego, puedes reescribir la definición de `Car` para incluir una propiedad para `owner` (propietario en español) que tome un objeto `Person`, de la siguiente manera:

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

Para crear instancias de los nuevos objetos, utiliza lo siguiente:

```js
var car1 = new Car("Eagle", "Talon TSi", 1993, rand);
var car2 = new Car("Nissan", "300ZX", 1992, ken);
```

En lugar de pasar una cadena literal o un valor entero al crear los nuevos objetos, las declaraciones anteriores pasan los objetos `rand` y `ken` como parámetros para los propietarios. Para conocer el nombre del propietario de `car2`, puedes acceder a la siguiente propiedad:

```js
car2.owner.name;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{JSxRef("Function", "Funciones")}}
- {{jsxref("Reflect.construct()")}}
- {{jsxref("Object.prototype")}}


--- SUBTEMA: new.target ---


{{JSSidebar("Operators")}}

La propiedad **`new.target`** te permite detectar si una función o constructor fue llamado usando el operador [new](/es/docs/Web/JavaScript/Reference/Operators/new). En constructores y funciones instanciadas con el operador [new](/es/docs/Web/JavaScript/Reference/Operators/new), `new.target` devuelve una referencia al constructor o función. En llamadas a funciones normales, `new.target` es {{jsxref("undefined")}}.

## Sintaxis

```
new.target
```

## Descripción

La sintaxis `new.target` consiste en el keyword `"new`", un punto, y el nombre de propiedad `"target"`. Normalmente "`new."` sirve como contexto para el acceso a la propiedad, pero aquí, `"new."` no es realmente un objeto. En llamadas a constructores, sin embargo, `new.target` hace referencia al constructor invocado por new por lo que "`new.`" se convierte en un contexto virtual.

La propiedad `new.target` es una meta propiedad que está disponible para todas las funciones. En [funciones flecha](/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions), `new.target` se refiere al `new.target` de la función que la contiene.

## Ejemplos

### new\.target en llamadas a funciones

En llamadas a funciones normales (en contraposición a llamadas a constructores), `new.target` es {{jsxref("undefined")}}. Esto te permite detectar si la función fue llamada con [new](/es/docs/Web/JavaScript/Reference/Operators/new) como constructor.

```js
function Foo() {
  if (!new.target) throw "Foo() debe ser llamado con new";
  console.log("Foo instanciado con new");
}

Foo(); // Lanza "Foo() debe ser llamado con new"
new Foo(); // escribe en el log "Foo instanciado con new"
```

### new\.target en constructores

En constructores de clase, `new.target` hace referencia al constructor que fue directamente invocado por `new`. Este también es el caso si el constructor está en una clase padre y fue delegado desdes el constructor hijo.

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

var a = new A(); // escribe en el log "A"
var b = new B(); // escribe en el log "B"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Funciones](/es/docs/Web/JavaScript/Guide/Functions)
- [Clases](/es/docs/Web/JavaScript/Reference/Classes)
- [`new`](/es/docs/Web/JavaScript/Reference/Operators/new)
- [`this`](/es/docs/Web/JavaScript/Reference/Operators/this)


--- SUBTEMA: null ---


{{jsSidebar("Objects")}}

## Resumen

El valor `null` es un literal de Javascript que representa intencionalmente un valor nulo o "vacío". Es uno de los {{Glossary("Primitive", "valores primitivos")}} de Javascript.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - Null")}}

```js interactive-example
function getVowels(str) {
  const m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
}

console.log(getVowels("sky"));
// Expected output: 0
```

## Sintaxis

```
null
```

## Descripción

El valor `null` es un literal (no una propiedad del objeto global como podría ser {{jsxref("undefined", "undefined")}}). En APIs, se devuelve `null` normalmente dónde se espera un objeto pero éste no es relevante. Al comparar con `null` o {{jsxref("undefined", "undefined")}} hay que tener en cuenta las [diferencias entre los operadores de igualdad (==) e identidad (===)](/es/docs/Web/JavaScript/Referencia/Operadores/Comparison_Operators) (con el primero se realiza una conversión de tipo).

```js
// foo no existe, no está definido y nunca ha sido inicializado:
> foo
"ReferenceError: foo is not defined"

// foo existe, pero no tiene tipo ni valor:
> var foo = null; foo
"null"
```

### Diferencias entre `null` y `undefined`

```js
typeof null; // object (bug en ECMAScript, debería ser null)
typeof undefined; // undefined
null === undefined; // false
null == undefined; // true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("undefined", "undefined")}}
- {{jsxref("NaN", "NaN")}}


--- SUBTEMA: nullish_coalescing ---


{{JSSidebar("Operators")}}

El operador **nullish coalescing (`??`)** (de coalescencia nula) es un operador lógico que retorna el operando de lado derecho cuando el operando de lado izquierdo es [`null`](/es/docs/Web/JavaScript/Reference/Operators/null) o {{jsxref("undefined")}},
y en caso contrario retorna el operando de lado izquierdo.

{{InteractiveExample("JavaScript Demo: Expressions - Nullish coalescing operator")}}

```js interactive-example
const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0
```

## Sintaxis

```js-nolint
expresionIzquierda ?? expresionDerecha
```

## Descripción

El operador _nullish coalescing_ puede ser visto como un caso especial del [operador lógico OR (`||`)](/es/docs/Web/JavaScript/Reference/Operators/Logical_OR). Este último retorna el operando de lado derecho si el operando izquierdo es _cualquier_ valor {{Glossary("falsy")}}, no solo `null` o `undefined`. En otras palabras, si se usa `||` para proveer algún valor por defecto a otra variable `foo`, se puede encontrar comportamientos inesperados si se considera algún valor _falsy_ como usable (por ejemplo, `''` o `0`). Consulte [a continuación](#asignación_de_un_valor_por_defecto_a_una_variable) para más ejemplos.

El operador _nullish coalescing_ tiene la quinta más baja [precedencia de operadores](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence), directamente por debajo de `||` y por arriba del [operador condicional (ternario)](/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

No es posible combinar ambos operadores AND (`&&`) y OR (`||`) directamente con `??`. Un [error de sintasix](/es/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized) será lanzado en tales casos.

```js example-bad
null || undefined ?? "foo"; // lanza un error de sintasix (SyntaxError)
true && undefined ?? "foo"; // lanza un error de sintasix (SyntaxError)
```

En su lugar, agregue paréntesis para explícitamente indicar la precedencia:

```js example-good
(null || undefined) ?? "foo"; // retorna "foo"
```

## Ejemplos

### Usando el operador nullish coalescing

En este ejemplo, proveeremos valores por defecto pero mantendremos los valores que no sean `null` o `undefined`.

```js
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "predeterminado para A";
const valB = emptyText ?? "predeterminado para B";
const valC = someNumber ?? 0;

console.log(valA); // "predeterminado para A"
console.log(valB); // "" (ya que el valor vacío no es null ni undefined)
console.log(valC); // 42
```

### Asignación de un valor por defecto a una variable

Antes, cuando se quería asignar un valor por defecto a una variable, un patrón común era usar el operador lógico OR ([`||`](/es/docs/Web/JavaScript/Reference/Operators/Logical_OR)):

```js
let foo;

// nunca es asignado un valor a foo por lo que se mantiene undefined
const someDummyText = foo || "¡Hola!";
```

Sin embargo, debido a que `||` es un operador lógico booleano, el operando de lado izquierdo fue convertido a un booleano para la evaluación y cualquier valor _falsy_ (incluyendo `0`, `''`, `NaN`, `false`, etc.) no fue retornado. Este comportamiento puede causar consecuencias inesperadas si se considera `0`, `''`, o `NaN` como valores válidos.

```js
const count = 0;
const text = "";

const qty = count || 42;
const message = text || "¡hola!";
console.log(qty); // 42 y no 0
console.log(message); // "¡hola!" y no ""
```

El operador _nullish coalescing_ evita esta trampa ya que solo retorna el segundo operando cuando el primero evalúa a `null` o `undefined` (pero ningún otro valor _falsy_):

```js
const myText = ""; // Un texto vacío (que también es un valor falsy)

const notFalsyText = myText || "Hola mundo";
console.log(notFalsyText); // Hola mundo

const preservingFalsy = myText ?? "Hola vecino";
console.log(preservingFalsy); // '' (porque myText no es undefined ni null)
```

### Cortocircuito (Short-circuiting)

Así como los operadores OR y AND, la expresión de lado derecho no es evaluada si el lado izquierdo no es `null` ni `undefined`.

```js
function A() {
  console.log("A fue ejecutada");
  return undefined;
}
function B() {
  console.log("B fue ejecutada");
  return false;
}
function C() {
  console.log("C fue ejecutada");
  return "foo";
}

console.log(A() ?? C());
// Muestra "A fue ejecutada" después "C fue ejecutada" y después "foo"
// ya que como A() retornó undefined ambas expresiones fueron evaluadas

console.log(B() ?? C());
// Muestra "B fue ejecutada" después "false"
// ya que como B() retornó false (y no null ni undefined),
// la expresión de lado derecho no fue evaluada
```

### Relación con el operador de encadenamiento opcional (?.)

El operador _nullish coalescing_ trata `undefined` y `null` como valores específicos. Así como lo hace el [operador de encadenamiento opcional (`?.`)](/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining), el cual es útil para acceder a una propiedad de un objeto que puede ser `null` o `undefined`. Combinándolos, se puede acceder de manera segura a una propiedad de un objeto que puede ser nulo y proveer un valor por defecto si lo es.

```js
const foo = { someFooProp: "hola" };

console.log(foo.someFooProp?.toUpperCase() ?? "no disponible"); // "hola"
console.log(foo.someBarProp?.toUpperCase() ?? "no disponible"); // "no disponible"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Veáse también

- [Operador de asignación de coalescencia nula (`??=`)](/es/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [Operador de encadenamiento opcional (`?.`)](/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Operador lógico OR (`||`)](/es/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Parámetros predeterminados](/es/docs/Web/JavaScript/Reference/Functions/Default_parameters)


--- SUBTEMA: operator_precedence ---


{{jsSidebar("Operators")}}

La **precedencia de operadores** determina el orden en el cual los operadores son evaluados uno respecto del otro. Los operadores con mayor precedencia se convierten en los operandos de los operadores con menor precedencia.

{{InteractiveExample("JavaScript Demo: Expressions - Operator precedence")}}

```js interactive-example
console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

let a;
let b;

console.log((a = b = 5));
// Expected output: 5
```

## Precedencia y Asociatividad

Considere la expresión descrita debajo. Note que `OP1` y `OP2` son ambos ejemplos de operadores.

```js
a OP1 b OP2 c
```

Si `OP1` y `OP2` tienen diferente niveles de precedencia (véase la tabla debajo), el operador
con la precedencia más alta va primero y la asociatividad no importa. Observe como la multiplicación
tiene mayor precedencia que la suma y se ejecuta primero, a pesar de que la suma se escribe primero en el código.

```js-nolint
console.log(3 + 10 * 2); // muestra 23
console.log(3 + (10 * 2)); // muestra 23 porque los paréntesis son superfluos
console.log((3 + 10) * 2); // muestra 26 porque los paréntesis cambian el orden
```

La asociatividad a la izquierda (de izquierda a derecha) significa que es procesado como
`(a OP1 b) OP2 c`, mientras que la asociatividad a la derecha (de derecha a izquierda) significa que es interpretado como
`a OP1 (b OP2 c)`. Los opearadores de asignación son de asociatividad a la derecha, entonces se puede escribir:

```js
a = b = 5; // es igual a escribir a = (b = 5);
```

con el resultado esperado de que `a` y `b` obtienen el valor 5. Esto
es porque el operador de asignación retorna el valor que es asignado. Primero,
`b` es establecido en 5. Luego `a` también es establecida en 5, el valor de retorno
de `b = 5`, también conocido como el operando de la derecha de la asignación.

Como otro ejemplo, el operador de exponenciación tiene la particularidad de tener asociatividad a la derecha,
a diferencia de los restantes operadores aritméticos que poseen asociatividad a la izquierda. Es interesante notar que,
el order de evaluación siempre es de izquierda a derecha sin importar la asociatividad y la precedencia.

<table class="standard-table">
  <tbody>
    <tr>
      <td>Código</td>
      <td>Salida</td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(nombre, num) {
    console.log("Evaluando el lado " + nombre);
    return num;
}
// Nótese el operador división (/)
console.log(echo("izquierdo", 6) / echo("derecho", 2));
</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluando el lado izquierdo
Evaluando el lado derecho
3
</pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(nombre, num) {
    console.log("Evaluando el lado " + nombre);
    return num;
}
// Nótese el operador potencia (**)
console.log(echo("izquierdo", 2) ** echo("derecho", 3));</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluando el lado izquierdo
Evaluando el lado derecho
8</pre
        >
      </td>
    </tr>
  </tbody>
</table>

La diferencia en asociatividad entra en juego cuando hay múltiples operadores con la
misma precedencia. Con un único operador u operadores con diferente precedencia,
la asociatividad no afecta la salida, como puede verse en el ejemplo de arriba. En el ejemplo
debajo, observe como la asociatividad afecta la salida cuando múltiples operadores idénticos
son usados.

<table class="standard-table">
  <tbody>
    <tr>
      <td>Código</td>
      <td>Saludo</td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(nombre, num) {
    console.log("Evaluando el lado " + nombre);
    return num;
}
// Nótese el operador división (/)
console.log(echo("izquierdo", 6) / echo("medio", 2) / echo("derecho", 3));
</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluando el lado izquierdo
Evaluando el lado medio
Evaluando el lado derecho
1
</pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(nombre, num) {
    console.log("Evaluando el lado " + nombre);
    return num;
}
// Nótese el operador potencia (**)
console.log(echo("izquierdo", 2) ** echo("medio", 3) ** echo("derecho", 2));
</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluando el lado izquierdo
Evaluando el lado medio
Evaluando el lado derecho
512
</pre
        >
      </td>
    </tr>
    <tr>
      <td>
        <pre class="brush: js">
function echo(nombre, num) {
    console.log("Evaluando el lado " + nombre);
    return num;
}
// Nótese los paréntesis alrededor de las potencias de la izquierda y el medio
console.log((echo("izquierdo", 2) ** echo("medio", 3)) ** echo("derecho", 2));</pre
        >
      </td>
      <td>
        <pre class="brush: plain">
Evaluando el lado izquierdo
Evaluando el lado medio
Evaluando el lado derecho
64</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Viendo los fragmentos de códigos de arriba, `6 / 2 / 3` es lo mismo que
`(6 / 2) / 3` porque la división es asociativa a la izquierda. La potencia, por otro lado,
es asociativa a la derecha, entonces `2 ** 3 ** 2` es lo mismo que
`2 ** (3 ** 2)`. Por lo tanto, hacer `(2 ** 3) ** 2` cambia el orden
y el resultado en el 64 que se ve en la tabla de arriba.

Recuerde que la precedencia viene antes de la asociatividad. Entonces, mezclando
división y potencia, esta última precede a la división. Por ejemplo,
`2 ** 3 / 3 ** 2` resulta en 0.8888888888888888 porque es lo mismo que hacer
`(2 ** 3) / (3 ** 2)`.

### Nota sobre agrupamiento y operadores de cortocircuito

En la tabla debajo, **Agrupamiento** se lista con la mayor precedencia.
Sin embargo, esto no siempre significa que la expresión dentro de los símbolos
de agrupación `( … )` es evaluada primero, especialmente cuando se trata de
cortocircuitos.

Cortocircuitar es una jerga para la evaluación condicional. Por ejemplo, en la expresión
`a && (b + c)`, si `a` es {{Glossary("falsy")}}, entonces
la expresión `(b + c)` no será evaluada, incluso si está dentro de
paréntesis. Se podría decir que el operador de conjunción lógica ("&&") está
"cortocircuitado". Junto con la conjunción lógica, otros operadores cortocircuitados
son la disyunción lógica ("||"), la coalescencia nula ("??"), el encadenamiento opcional ("?."),
y el operador condicional ternario. A continuación, algunos ejemplos.

```js-nolint
a || (b * c); // evalúa primero `a`, luego produce `a` si `a` es "truthy"
a && (b < c); // evalúa primero `a`, luego produce `a` si `a` es "falsy"
a ?? (b || c); // evalúa primero `a`, luego produce `a` si `a` no es `null` ni `undefined`
a?.b.c; // evalúa primero `a`, luego produce `undefined` si `a` es `null` ó `undefined`
```

## Ejemplos

```js
3 > 2 && 2 > 1;
// Retorna `true`

3 > 2 > 1;
// Retorna `false` porque 3 > 2 es `true`, luego `true` es convertido a 1
// por coerción de tipos, luego `true` > 1 se convierte en 1 > 1, que es
// `false`. Agregar paréntesis hace que las cosas se vean claras: (3 > 2) > 1.
```

## Tabla

La siguiente tabla lista los operadores en orden de mayor precedencia (19) a menor precedencia (1).

Nótese que la [sintaxis spread](/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax) está intencionalmente excluída de la tabla — porque, citando
una [respuesta en Stack Overflow](https://stackoverflow.com/questions/48656338/operator-precedence-for-js-spread-and-rest-operators/48656377), "[la sintaxis spread no es un operador](https://stackoverflow.com/questions/44934828/is-it-spread-syntax-or-the-spread-operator) y por lo tanto no tiene una precedencia. Es parte de la sintaxis de arreglos literales y llamadas a funciones (y objetos literales)."

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Precedencia</th>
      <th>Tipo de operador</th>
      <th>Asociatividad</th>
      <th>Operadores individuales</th>
    </tr>
    <tr>
      <td>19</td>
      <td>
        {{jsxref("Operators/Grouping", "Agrupamiento", "", 1)}}
      </td>
      <td>n/a</td>
      <td><code>( … )</code></td>
    </tr>
    <tr>
      <td rowspan="5">18</td>
      <td>
        {{jsxref("Operators/Property_Accessors", "Acceso a propiedades (notación por punto)", "#notaci.c3.b3n_por_punto", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… . …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Property_Accessors", "Acceso a propiedades (notación por corchetes)","#notaci.c3.b3n_por_corchetes", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… [ … ]</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/new","new")}} (con lista de argumentos)</td>
      <td>n/a</td>
      <td><code>new … ( … )</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Functions","Llamada a función", "", 1)}}
      </td>
      <td>a la izquierda</td>
      <td>
        <code>… ( … )</code>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Optional_chaining","Encadenamiento opcional", "", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>?.</code></td>
    </tr>
    <tr>
      <td>17</td>
      <td>
        {{jsxref("Operators/new","new")}} (sin lista de argumentos)
      </td>
      <td>a la derecha</td>
      <td><code>new …</code></td>
    </tr>
    <tr>
      <td rowspan="2">16</td>
      <td>
        {{jsxref("Operators","Incremento sufijo","#incremento_y_decremento", 1)}}
      </td>
      <td rowspan="2">n/a</td>
      <td><code>… ++</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators","Decremento sufijo","#incremento_y_decremento", 1)}}
      </td>
      <td><code>… --</code></td>
    </tr>
    <tr>
      <td rowspan="10">15</td>
      <td>
        {{jsxref("Operators/Logical_NOT","NOT lógico (!)", "", 1)}}
      </td>
      <td rowspan="10">a la derecha</td>
      <td><code>! …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Bitwise_NOT","NOT a nivel de bits (~)","", 1)}}
      </td>
      <td><code>~ …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unary_plus","Suma unaria (+)", "", 1)}}
      </td>
      <td><code>+ …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unary_plus","Negación unaria (-)", "", 1)}}
      </td>
      <td><code>- …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators","Incremento prefijo","#incremento_y_decremento", 1)}}
      </td>
      <td><code>++ …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators","Decremento prefijo","#incremento_y_decremento", 1)}}
      </td>
      <td><code>-- …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/typeof", "typeof")}}</td>
      <td><code>typeof …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/void", "void")}}</td>
      <td><code>void …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/delete", "delete")}}</td>
      <td><code>delete …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/await", "await")}}</td>
      <td><code>await …</code></td>
    </tr>
    <tr>
      <td>14</td>
      <td>
        {{jsxref("Operators/Exponentiation","Potenciación (**)","", 1)}}
      </td>
      <td>a la derecha</td>
      <td><code>… ** …</code></td>
    </tr>
    <tr>
      <td rowspan="3">13</td>
      <td>
        {{jsxref("Operators/Multiplication","Multiplicación (*)","", 1)}}
      </td>
      <td rowspan="3">a la izquierda</td>
      <td><code>… * …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Division","División (/)","", 1)}}
      </td>
      <td><code>… / …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Remainder","Resto (%)","", 1)}}
      </td>
      <td><code>… % …</code></td>
    </tr>
    <tr>
      <td rowspan="2">12</td>
      <td>
        {{jsxref("Operators/Addition","Adición (+)","", 1)}}
      </td>
      <td rowspan="2">a la izquierda</td>
      <td><code>… + …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Subtraction","Sustracción (-)","", 1)}}
      </td>
      <td><code>… - …</code></td>
    </tr>
    <tr>
      <td rowspan="3">11</td>
      <td>
        {{jsxref("Operators/Left_shift","Desplazamiento de bits a la izquierda (&#x3C;&#x3C;)","", 1)}}
      </td>
      <td rowspan="3">a la izquierda</td>
      <td><code>… &#x3C;&#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Right_shift","Desplazamiento de bits a la derecha (&#x3E;&#x3E;)","", 1)}}
      </td>
      <td><code>… &#x3E;&#x3E; …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Unsigned_right_shift","Desplazamiento de bits a la derecha sin signo (&#x3E;&#x3E;&#x3E;)","", 1)}}
      </td>
      <td><code>… &#x3E;&#x3E;&#x3E; …</code></td>
    </tr>
    <tr>
      <td rowspan="6">10</td>
      <td>
        {{jsxref("Operators/Less_than","Menor a (&#x3C;)","", 1)}}
      </td>
      <td rowspan="6">a la izquierda</td>
      <td><code>… &#x3C; …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Less_than_or_equal","Menor o igual a (&#x3C;&#x3D;)","", 1)}}
      </td>
      <td><code>… &#x3C;&#x3D; …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Greater_than","Mayor a (&#x3E;)","", 1)}}
      </td>
      <td><code>… &#x3E; …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Greater_than_or_equal","Mayor o igual a (&#x3E;&#x3D;)","", 1)}}
      </td>
      <td><code>… &#x3E;&#x3D; …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/in", "in")}}</td>
      <td><code>… in …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/instanceof", "instanceof")}}</td>
      <td><code>… instanceof …</code></td>
    </tr>
    <tr>
      <td rowspan="4">9</td>
      <td>
        {{jsxref("Operators/Equality","Igualdad (&#x3D;&#x3D;)","", 1)}}
      </td>
      <td rowspan="4">a la izquierda</td>
      <td><code>… == …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Inequality","Desigualdad (!&#x3D;)","", 1)}}
      </td>
      <td><code>… != …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Strict_equality","Igualdad estricta (&#x3D;&#x3D;&#x3D;)","", 1)}}
      </td>
      <td><code>… === …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Strict_inequality","Desigualdad estricta (!&#x3D;&#x3D;)","", 1)}}
      </td>
      <td><code>… !== …</code></td>
    </tr>
    <tr>
      <td>8</td>
      <td>
        {{jsxref("Operators/Bitwise_AND","AND a nivel de bits (&#x26;)","", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… &#x26; …</code></td>
    </tr>
    <tr>
      <td>7</td>
      <td>
        {{jsxref("Operators/Bitwise_XOR","XOR a nivel de bits (^)","", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… ^ …</code></td>
    </tr>
    <tr>
      <td>6</td>
      <td>
        {{jsxref("Operators/Bitwise_OR","OR a nivel de bits (|)","", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… | …</code></td>
    </tr>
    <tr>
      <td>5</td>
      <td>
        {{jsxref("Operators/Logical_AND","AND lógico (&#x26;&#x26;)","", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tr>
    <tr>
      <td rowspan="2">4</td>
      <td>
        {{jsxref("Operators/Logical_OR","OR lógico (||)","", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… || …</code></td>
    </tr>
    <tr>
      <td>
        {{jsxref("Operators/Nullish_coalescing_operator","Operador de coalescencia nula (??)","", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… ?? …</code></td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        {{jsxref("Operators/Conditional_Operator","Operador condicional (ternario)","", 1)}}
      </td>
      <td>a la derecha</td>
      <td><code>… ? … : …</code></td>
    </tr>
    <tr>
      <td rowspan="18">2</td>
      <td rowspan="16">
        {{jsxref("Operators","Asignación","#operadores_de_asignaci%C3%B3n", 1)}}
      </td>
      <td rowspan="16">a la derecha</td>
      <td><code>… = …</code></td>
    </tr>
    <tr>
      <td><code>… += …</code></td>
    </tr>
    <tr>
      <td><code>… -= …</code></td>
    </tr>
    <tr>
      <td><code>… **= …</code></td>
    </tr>
    <tr>
      <td><code>… *= …</code></td>
    </tr>
    <tr>
      <td><code>… /= …</code></td>
    </tr>
    <tr>
      <td><code>… %= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x3C;&#x3C;= …</code></td>
    </tr>
    <tr>
      <td><code>… >>= …</code></td>
    </tr>
    <tr>
      <td><code>… >>>= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x26;= …</code></td>
    </tr>
    <tr>
      <td><code>… ^= …</code></td>
    </tr>
    <tr>
      <td><code>… |= …</code></td>
    </tr>
    <tr>
      <td><code>… &#x26;&#x26;= …</code></td>
    </tr>
    <tr>
      <td><code>… ||= …</code></td>
    </tr>
    <tr>
      <td><code>… ??= …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/yield", "yield")}}</td>
      <td rowspan="2">a la derecha</td>
      <td><code>yield …</code></td>
    </tr>
    <tr>
      <td>{{jsxref("Operators/yield*", "yield*")}}</td>
      <td><code>yield* …</code></td>
    </tr>
    <tr>
      <td>1</td>
      <td>
        {{jsxref("Operators/Comma_Operator","Operador coma","", 1)}}
      </td>
      <td>a la izquierda</td>
      <td><code>… , …</code></td>
    </tr>
  </tbody>
</table>


--- SUBTEMA: optional_chaining ---


{{JSSidebar("Operators")}}

El operador de **encadenamiento opcional** **`?.`** permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que cada referencia en la cadena sea válida. El operador `?.` funciona de manera similar a el operador de encadenamiento `.`, excepto que en lugar de causar un error si una referencia es [casi-nula](/es/docs/Glossary/nullish) ({{JSxRef("null")}} o {{JSxRef("undefined")}}), la expresión hace una evaluación de circuito corto con un valor de retorno de `undefined`. Cuando se usa con llamadas a funciones, devuelve `undefined` si la función dada no existe.

Esto da como resultado expresiones más cortas y simples cuando se accede a propiedades encadenadas dónde existe la posibilidad de que falte una referencia. También puede ser útil al explorar el contenido de un objeto cuando no hay una garantía conocida de qué propiedades se requieren.

{{InteractiveExample("JavaScript Demo: Expressions - Optional chaining operator", "taller")}}

```js interactive-example
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```

## Sintaxis

```
obj?.prop
obj?.[expr]
arr?.[index]
func?.(args)
```

## Descripción

El operador de encadenamiento opcional proporciona una forma de simplificar el acceso a los valores a través de objetos conectados cuando es posible que una referencia o función sea `undefined` o `null`.

Por ejemplo, considere un objeto `obj` que tiene una estructura anidada. Sin encadenamiento opcional, buscar una subpropiedad profundamente anidada requiere validar las referencias intermedias, como:

```js
let nestedProp = obj.first && obj.first.second;
```

Se confirma que el valor de `obj.first` no es `null` (y no es `undefined`) antes de acceder al valor de `obj.first.second`. Esto evita el error que ocurriría si simplemente accediera a `obj.first.second` directamente sin probar `obj.first`.

Sin embargo, con el operador de encadenamiento opcional (`?.`), No tiene que probar explícitamente, ni realizar una evaluación de circuito corto basada en el estado de `obj.first` antes de intentar acceder a `obj.first.second`:

```js
let nestedProp = obj.first?.second;
```

Al usar el operador `?.` en lugar de solo el `.`, JavaScript sabe verificar implícitamente para asegurarse de que `obj.first` no es `null` o `undefined` antes de intentar acceder `obj.first.second`. Si `obj.first` es `null` o `undefined`, la expresión hace una evaluación de circuito corto automáticamente y retorna `undefined`.

Esto es equivalente a lo siguiente, excepto que la variable temporal es de hecho no creada:

```js-nolint
let temp = obj.first;
let nestedProp = ((temp === null || temp === undefined) ? undefined : temp.second);
```

### Encadenamiento opcional con llamadas a funciones

Puede usar el encadenamiento opcional cuando intente llamar a un método que puede no existir. Esto puede ser útil, por ejemplo, cuando se usa una API en la que un método podría no estar disponible, ya sea debido a la antigüedad de la implementación o debido a una característica que no está disponible en el dispositivo del usuario.

El uso de encadenamiento opcional con llamadas a funciones hace que la expresión regrese automáticamente `undefined` en lugar de lanzar una excepción si no se encuentra el método:

```js
let result = someInterface.customMethod?.();
```

> [!NOTE]
> Si hay una propiedad con ese nombre y que no es una función, usar `?.` aún levantará una excepción {{JSxRef("TypeError")}} (`x.y is not a function`).

#### Manejo de callbacks opcionales o manejadores de eventos

Si utiliza callbacks o métodos de recuperación de un objeto con[una asignación de desestructuración](/es/docs/Web/JavaScript/Reference/Operators/Destructuring#object_destructuring), es posible que tenga valores inexistentes que no puede llamar como funciones a menos que haya probado su existencia. Usando `?.`, Puede evitar esta prueba adicional:

```js
// Escrito a partir de ES2019
function doSomething(onContent, onError) {
  try {
    // ... hacer algo con los datos
  } catch (err) {
    if (onError) {
      // Probando si onError realmente existe
      onError(err.message);
    }
  }
}
```

```js
// Usando encadenamiento opcional con llamado de funciones
function doSomething(onContent, onError) {
  try {
    // ... hacer algo con los datos
  } catch (err) {
    onError?.(err.message); // Sin excepción si onError esta undefined
  }
}
```

### Encadenamiento opcional con expresiones

También puede usar el operador de encadenamiento opcional al acceder a propiedades con una expresión usando [la notación de corchetes](/es/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation):

```js
let nestedProp = obj?.["prop" + "Name"];
```

### El encadenamiento opcional no es válido al lado izquierdo de una asignación

```js
let object = {};
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
```

### Acceso a elementos de un arreglo con encadenamiento opcional

```js
let arrayItem = arr?.[42];
```

## Ejemplos

### Ejemplo básico

Este ejemplo busca el valor de la propiedad `name` para el miembro `bar` en un mapa cuando no existe dicho miembro. El resultado es por lo tanto es `undefined`.

```js
let myMap = new Map();
myMap.set("foo", { name: "baz", desc: "inga" });

let nameBar = myMap.get("bar")?.name;
```

### Evaluación de circuito corto

Cuando se usa el encadenamiento opcional con expresiones, si el operando izquierdo es `null` o `undefined`, la expresión no se evaluará. Por ejemplo:

```js
let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];

console.log(x); // 0 como x no se incrementó
```

### Apilando el operador de encadenamiento opcional

Con estructuras anidadas, es posible usar encadenamiento opcional varias veces:

```js
let customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls", // "detailed address" es desconocida
  },
};
let customerCity = customer.details?.address?.city;

// … esto también funciona con la función opcional de encadenamiento
let duration = vacations.trip?.getTime?.();
```

### Combinando con el operador de fusión nulo

El {{JSxRef("Operators/Nullish_Coalescing_Operator", "operador de fusión nulo", '', 1)}} se puede usar después del encadenamiento opcional para generar un valor predeterminado cuando no se encontró ninguno:

```js
let customer = {
  name: "Carl",
  details: { age: 82 },
};
const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- El {{JSxRef("Operators/Nullish_Coalescing_Operator", "Nullish Coalescing Operator", '', 1)}}


--- SUBTEMA: property_accessors ---


{{jsSidebar("Operators")}}

## Resumen

Los operadores de miembros proporcionan acceso a las propiedades y métodos de un objeto.

Un objeto es en realidad un _arreglo asociativo_ (por ejemplo _map_ ,_dictionary_ ,_hash_ ,_lookup table_ ). Las _claves_ en este arreglo son los nombres de las propiedades y los métodos (propiedades que hacen referencia a funciones). Hay dos modos de acceder a estas propiedades: notación por punto y notación por corchete (es decir, operador de subscripción).

Nota: La especificación [ECMAScript](/es/docs/Glossary/ECMAScript) etiqueta estos operadores como "property accessors" en vez de "operadores de miembro" (member operators).

### Notación por punto

```js
get = objeto.propiedad;
objeto.propiedad = set;
```

`propiedad` debe ser un identificador válido de JavaScript, esto es, una secuencia alfanumérica de caracteres, incluyendo también el guión bajo ("`_`") y el signo dolar ("`$`"), que no puede comenzar por un número. Por ejemplo, `objeto.$1` es válido, mientras que `objeto.1` no lo es.

Ejemplo:

```js
document.createElement("pre");
```

Aquí, el método llamado "createElement" se recupera de `document` y se le llama.

### Notación por corchetes

```js
get = objeto[nombre_propiedad];
objeto[nombre_propiedad] = set;
```

`nombre_propiedad` es una cadena. La cadena no tiene que ser un identificador válido; puede tener cualquier valor, por ejemplo "1foo", "!bar!", o incluso " " (un espacio).

Ejemplo:

```js
document["createElement"]("pre");
```

Esto hace exactamente lo mismo que el ejemplo anterior.

### Nombres de propiedades

Los nombres de propiedades deben ser cadenas. Esto significa que no pueden usarse objetos distintos a cadenas como claves en un objeto. Cualquier objeto que no sea una cadena, incluyendo números, se convierte al tipo cadena a través de su método {{jsxref("Object.toString")}}.

Ejemplos:

```js
var objeto = {};
objeto["1"] = "valor";
alert(objeto[1]);
```

Ésto tendrá como resultado "valor", ya que 1 se convertirá por tipo a '1'.

```js
var foo = { propiedad_unica: 1 },
  bar = { propiedad_unica: 2 },
  objeto = {};
objeto[foo] = "valor";
alert(objeto[bar]);
```

Ésto también tiene como resultado "valor", ya que tanto foo como bar se convierten a la misma cadena. En el motor de JavaScript [SpiderMonkey](/es/docs/Mozilla/SpiderMonkey), esta cadena sería `[objeto Object]`.

### Enlace a métodos

Un método no está enlazado al objeto del que es método. Específicamente, `this` no está establecido en un método, es decir, `this` no se refiere necesariamente a un objeto conteniendo el método. `this`, en cambio, se "pasa" mediante la llamada de función.

Vea [enlace a métodos](/es/docs/Web/JavaScript/Reference/Operators/this#funciones_enlazadas).

### Nota sobre `eval`

Los principiantes en JavaScript a menudo tienen el error de usar {{jsxref("eval")}} cuando la notación por corchetes puede usarse a cambio. Por ejemplo, la siguiente sintaxis se ve a menudo en muchos scripts.

```js
x = eval("document.nombre_formulario." + cadenaControlFormulario + ".value");
```

`eval` es lenta y se debería evitar en la medida de lo posible. Es mejor usar la notación por corchetes a cambio:

```js
x = document.nombre_formulario[cadenaControlFormulario].value;
```


--- SUBTEMA: remainder ---


{{jsSidebar("Operators")}}

El operador resto (`%`) devuelve el resto de la división entre dos operandos. Siempre toma el signo del dividendo.

{{InteractiveExample("JavaScript Demo: Expressions - Remainder operator")}}

```js interactive-example
console.log(13 % 5);
// Expected output: 3

console.log(-13 % 5);
// Expected output: -3

console.log(4 % 2);
// Expected output: 0

console.log(-4 % 2);
// Expected output: -0
```

Tener en cuenta que en la mayoría de los lenguajes de programación, el operador de resto es '%', pero en otros (como [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages)) es el operador módulo. Ambos son iguales para valores positivos, pero cuando el divisor y el dividendo son de signos distintos, se obtienen distintos resultados. Para obtener el módulo en JavaScript, en lugar de `a % n`, usa `((a % n ) + n ) % n`.

## Sintaxis

```
Operador: var1 % var2
```

## Ejemplos

### Resto con dividendo positivo

```js
12 % 5; //  2
1 % -2; //  1
1 % 2; //  1
2 % 3; //  2
5.5 % 2; // 1.5
```

### Resto con dividendo negativo

```js-nolint
-12 % 5 // -2
-1 % 2  // -1
-4 % 2  // -0
```

### Resto con NaN

```js
NaN % 2; // NaN
```

### Resto con Infinity

```js
Infinity % 2; // NaN
Infinity % 0; // NaN
Infinity % Infinity; // NaN
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Addition operator](/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/es/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/es/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Exponentiation operator](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)


--- SUBTEMA: spread_syntax ---


{{jsSidebar("Operators")}}

**La sintaxis extendida o spread** **syntax** permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos (para llamadas de función) o elementos (para [Array literales](/es/docs/Web/JavaScript/Guide/Grammar_and_types#literales_array)) son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para [literales Tipo Objeto](/es/docs/Web/JavaScript/Guide/Grammar_and_types#literales)) son esperados.

{{InteractiveExample("JavaScript Demo: Expressions - Spread syntax")}}

```js interactive-example
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6
```

## Sintaxis

Para llamadas de funciones:

```
myFunction(...iterableObj);
```

Para arreglos literales o cadenas de caracteres:

```
[...iterableObj, '4', 'five', 6];
```

Para objetos literales (nuevo en ECMAScript 2018):

```
let objClone = { ...obj };
```

## Ejemplos

### Spread en llamadas de función

#### Reemplaza "apply"

Es frecuente usar {{jsxref( "Function.prototype.apply")}} en casos donde quieres usar los elementos de un arreglo como argumentos de una función.

```js
function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction.apply(null, args);
```

Con la sintaxis expandida (spread syntax), el código anterior puede ser escrito como:

```js
function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction(...args);
```

Cualquier argumento en la lista de argumentos puede usar la sintáxis expandida y esto puede ser usado varias veces.

```js
function myFunction(v, w, x, y, z) {}
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### "Apply" para "new"

Cuando se llama un constructor con `new`, no es posible usar **directamente** un arreglo y `apply` (`apply` hace un `[[Call]]` y no un `[[Construct]]`). Sin embargo, un arreglo puede ser fácilmente usado con un new gracias a la sintáxis expandida:

```js
var dateFields = [1970, 0, 1]; // 1 Jan 1970
var d = new Date(...dateFields);
```

Para usar **new** con un arreglo de parámetros sin la sintáxis expandida, podrías tener que hacerlo **indirectamente** a través de una aplicación parcial:

```js
function applyAndNew(constructor, args) {
  function partial() {
    return constructor.apply(this, args);
  }
  if (typeof constructor.prototype === "object") {
    partial.prototype = Object.create(constructor.prototype);
  }
  return partial;
}

function myConstructor() {
  console.log("arguments.length: " + arguments.length);
  console.log(arguments);
  this.prop1 = "val1";
  this.prop2 = "val2";
}

var myArguments = ["hi", "how", "are", "you", "mr", null];
var myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments());
// (internal log of myConstructor):           arguments.length: 6
// (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
// (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}
```

### Expandir Array literales

#### Un literal Array más poderoso

Sin **`sintaxis expandida (spread syntax)`**, para crear un nuevo arreglo usando un arreglo existente como parte de él,no es suficiente la sintaxis de Array literal y en su lugar se debe usar código imperativo con una combinación de `push`, `splice`, `concat`, etc. Con la sintaxis expandida, esto se vuelve mucho mas práctico:

```js
var parts = ["shoulders", "knees"];
var lyrics = ["head", ...parts, "and", "toes"];
// ["head", "shoulders", "knees", "and", "toes"]
```

Así como para expandir listas de argumentos, `...` puede ser usado en cualquier parte dentro del Array literal, y múltiples veces.

#### Copiar un arreglo

```js
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

**Nota:** La sintaxis expandida efectivamente va a un nivel de profundidad mientras copia un arreglo. Por lo tanto, esto no permite copiar arreglos multidimensionales como se muestra en los siguientes ejemplos (es lo mismo con {{jsxref("Object.assign()")}} y sintaxis spread).

```js
var a = [[1], [2], [3]];
var b = [...a];
b.shift().shift(); // 1
// Now array a is affected as well: [[], [2], [3]]
```

#### Una forma mejor para concatenar arreglos

{{jsxref("Array.concat")}} es usada a menudo para concatenar un arreglo al final de un arreglo ya existente. Sin la sintaxis spread se realiza:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

Con la sintaxis spread se transforma en:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
```

{{jsxref("Array.unshift")}} es a menudo usada para insertar un arreglo de valores al inicio de un arreglo existente. Sin la sintáxis spread, esto es hecho como:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2); // arr1 is now [3, 4, 5, 0, 1, 2]
```

Con la sintaxis spread se convierte en \[Observa, sin embargo, que esto crea un nuevo arreglo `arr1`. Diferente a {{jsxref("Array.unshift")}}, esto no modifica el arreglo original en sitio `arr1`]:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2]
```

### Spread en literales tipo Objeto

La propuesta [Propiedades Rest/Spread para ECMAScript](https://github.com/tc39/proposal-object-rest-spread) (etapa 4) agrega propiedades spread a los [literales Tipo Objeto](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer). Esto copia sus propiedades enumerables desde un objeto provisto dentro de un nuevo objeto.

Shallow-cloning (excluyendo prototype) o la combinación de objetos es ahora posible usando una sintaxis más corta que {{jsxref("Object.assign()")}}.

```js
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

Observa que {{jsxref("Object.assign()")}} desencadena [setters](/es/docs/Web/JavaScript/Reference/Functions/set) mientras que la sintaxis spread no lo hace.

Observa que tú no puedes reemplazar o replicar la función {{jsxref("Object.assign()")}}:

```js
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

var mergedObj = merge(obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

var mergedObj = merge({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

En el ejemplo de arriba, el operador spread no trabaja como uno podría esperar: este dispersa un _arreglo_ de argumentos en el literal Tipo Objeto, debido al parámetro rest.

### Sólo para iterables

La sintaxis Spread (otra que en el caso de las propiedades spread) puede ser aplicada sólo a los objetos [iterables](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator):

```js
var obj = { key1: "value1" };
var array = [...obj]; // TypeError: obj is not iterable
```

### Spread con muchos valores

Cuando se usa la sintaxis spread para llamados de funciones, tenga en cuenta la posibilidad de exceder el límite de longitud de argumentos del motor de JavaScript. Vea [`apply()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) para más detalles.

## Sintaxis Rest (parámetros)

La sintaxis Rest luce exactamente como la sintaxis spread, pero esto es usado por la desestructuración de arreglos y objetos. De cierta forma, la sintaxis rest es la opuesta a la sintaxis spread: spread 'expande' un arreglo en sus elementos, mientras rest agrupa múltiples elementos y los 'condensa' en un único elemento. Consulta [parámetros rest.](/es/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- [Rest parameters](/es/docs/Web/JavaScript/Reference/Functions/rest_parameters) (también '`...`')


--- SUBTEMA: strict_equality ---


{{jsSidebar("Operators")}}

El operador de estricta igualdad (`===`) revisa si dos operandos son iguales y produce un resultado Booleano. A diferencia del operador de igualdad regular (==), el operador de estricta igualdad siempre considera que los operandos de distinto tipo de valor son diferentes y nunca similares.

{{InteractiveExample("JavaScript Demo: Expressions - Strict equality operator")}}

```js interactive-example
console.log(1 === 1);
// Expected output: true

console.log("hello" === "hello");
// Expected output: true

console.log("1" === 1);
// Expected output: false

console.log(0 === false);
// Expected output: false
```

## Sintaxis

```
x === y
```

## Descripción

Los operadores de estricta igualdad (`===` y `!==`) usan el [Algoritmo Estricto Comparativo de Igualdad](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6)para comparar dos operandos:

- Si los operandos son de diferente tipo de valor, produce `false`.
- Si ambos operandos son objetos, produce `true` solo si se refiere al mismo objeto.
- Si ambos operandos son de tipo `null` o ambos operandos son `undefined`, produce `true`.
- Si cualquier operando es de tipo NaN, produce `false`.
- En otros casos, compara los valores de ambos operandos:
  - Los números deben tener el mismo valor numérico, aunque `+0` y `-0` son considerados como del mismo valor.
  - Los strings deben tener los mismos caracteres en el mismo orden.
  - Los booleanos deben ambos ser `true` o ambos ser `false`.

La diferencia más notable entre este operador y el operador de [igualdad](/es/docs/Web/JavaScript/Reference/Operators/Equality) regular (`==`) es que si los operandos son de distinto tipo de valor, el operador `==` intenta convertir los valores a un mismo tipo de dato antes de compararlos.

## Ejemplos

### Comparando operandos del mismo tipo

```js
console.log("hello" === "hello"); // true
console.log("hello" === "hola"); // false

console.log(3 === 3); // true
console.log(3 === 4); // false

console.log(true === true); // true
console.log(true === false); // false

console.log(null === null); // true
```

### Comparando operandos de distinto tipo

```js
console.log("3" === 3); // false

console.log(true === 1); // false

console.log(null === undefined); // false
```

### Comparando objetos

```js
const object1 = {
  name: "hello",
};

const object2 = {
  name: "hello",
};

console.log(object1 === object2); // false
console.log(object1 === object1); // true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## También revisa

- [Operador de igualdad](/es/docs/Web/JavaScript/Reference/Operators/Equality)
- [Operador de desigualdad](/es/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Operador de estricta desigualdad](/es/docs/Web/JavaScript/Reference/Operators/Strict_inequality)


--- SUBTEMA: subtraction_assignment ---


{{jsSidebar("Operators")}}

El **operador de asignación de sustracción (`-=`)** realiza una [resta](/es/docs/Web/JavaScript/Reference/Operators/Subtraction) en los dos operandos y asigna el resultado al operando izquierdo.

{{InteractiveExample("JavaScript Demo: Expressions - Subtraction assignment operator")}}

```js interactive-example
let a = 2;

console.log((a -= 3));
// Expected output: -1

console.log((a -= "Hello"));
// Expected output: NaN
```

## Sintaxis

```js-nolint
x -= y
```

## Descripción

`x -= y` es equivalente a `x = x - y`, exepto que la expresión `x` se evalúa una sola vez.

## Ejemplos

### Usando el operador de asignación de sustracción

```js
let bar = 5;

bar -= 2; // 3
bar -= "foo"; // NaN

let foo = 3n;
foo -= 2n; // 1n
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Operadores de asignación en la guía JS](/es/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Sustracción (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)


--- SUBTEMA: subtraction ---


{{jsSidebar("Operators")}}

El operador de sustracción (`-`) sustrae dos operandos, produciendo su diferencia.

{{InteractiveExample("JavaScript Demo: Expressions - Subtraction operator")}}

```js interactive-example
console.log(5 - 3);
// Expected output: 2

console.log(3.5 - 5);
// Expected output: -1.5

console.log(5 - "hello");
// Expected output: NaN

console.log(5 - true);
// Expected output: 4
```

## Sintaxis

```
Operator: x - y
```

## Ejemplos

### Sustracción con números

```js
5 - 3; // 2
3 - 5; // -2
```

### Sustracción de no numéricos

```js
"foo" - 3; // NaN
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## También revisa

- [Addition operator](/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [Division operator](/es/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/es/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/es/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)


--- SUBTEMA: super ---


{{jsSidebar("Operators")}}

La palabra clave **super** es usada para acceder y llamar funciones del padre de un objeto.

Las expresiones `super.prop` y `super[expr]` son válidas en cualquier [definición de método](/es/docs/Web/JavaScript/Reference/Functions/Method_definitions) tanto para [clases](/es/docs/Web/JavaScript/Reference/Classes) como para [objetos literales](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Sintaxis

```
// llama al método constructor del objeto padre.
super([arguments]);

// llama cualquier otro método del objeto padre.
super.functionOnParent([arguments]);
```

## Descripción

Cuando es usado en un constructor, la palabra clave `super` aparece sola lo cual invoca el constructor del objeto padre. En este caso debe usarse antes de que la palabra clave `this` sea usada. La palabra clave `super` también puede utilizarse para llamar otras funciones del objeto padre.

## Ejemplo

### Usando `super` en clases

Este fragmento de código se toma del [ejemplo de clases](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([demo en vivo](https://googlechrome.github.io/samples/classes-es6/index.html)). Aquí se llama a `super()` para evitar la duplicación de las partes del constructor que son comunes entre `Rectangle` y `Square`.

```js
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log("Hi, I am a ", this.name + ".");
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.height = this.width = Math.sqrt(value);
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super necesita ser llamado primero!

    // Aquí, llama al constructor de la clase padre con las longitudes
    // previstas para el ancho y la altura de Rectangle
    super(length, length);

    // Nota: En las clases derivadas, se debe llamar a super() antes de
    // poder usar 'this'. Salir de esto provocará un error de referencia.
    this.name = "Square";
  }
}
```

### Super-llamando a métodos estáticos

También puede llamar a super en métodos estáticos.

```js
class Rectangle {
  constructor() {}
  static logNbSides() {
    return "Tengo 4 lados";
  }
}

class Square extends Rectangle {
  constructor() {}
  static logDescription() {
    return super.logNbSides() + " que son todos iguales";
  }
}
Square.logDescription(); // 'Tengo 4 lados que son todos iguales'
```

### Eliminar propiedades `super` generará un error

No puede usar el [operador de eliminación](/es/docs/Web/JavaScript/Reference/Operators/delete) y `super.prop` o `super[expr]` para eliminar la propiedad de una clase principal, lanzará {{jsxref("ReferenceError")}}.

```js
class Base {
  constructor() {}
  foo() {}
}
class Derived extends Base {
  constructor() {}
  delete() {
    delete super.foo; // esto es malo
  }
}

new Derived().delete(); // ReferenceError: eliminación no válida que implica 'super'.
```

### `super.prop` no puede sobrescribir las propiedades no modificables

Al definir propiedades que no se pueden escribir, p. Ej. {{jsxref("Object.defineProperty")}}, `super` no puede sobrescribir el valor de la propiedad.

```js
class X {
  constructor() {
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1,
    });
  }
  f() {
    super.prop = 2;
  }
}

var x = new X();
x.f(); // TypeError: "prop" es de solo lectura
console.log(x.prop); // 1
```

### Usando `super.prop` en objetos literales

Super también se puede usar en el [inicializador de objetos / notación literal](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer). En este ejemplo, dos objetos definen un método. En el segundo objeto, `super` llama al primer método del objeto. Esto funciona con la ayuda de {{jsxref("Object.setPrototypeOf()")}} con el que podemos establecer el prototipo de `obj2` en `obj1`, de modo que `super` pueda encontrar el `method1` en `obj1`.

```js
var obj1 = {
  method1() {
    console.log("method 1");
  },
};

var obj2 = {
  method2() {
    super.method1();
  },
};

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Clases](/es/docs/Web/JavaScript/Reference/Classes)


--- SUBTEMA: this ---


{{jsSidebar("Operators")}}

## Introducción

La palabra clave **`this`** de una función se comporta un poco diferente en Javascript en comparación con otros lenguajes. Además tiene algunas diferencias entre el [modo estricto](/es/docs/Web/JavaScript/Referencia/Funciones/Modo_estricto) y el modo no estricto.

En general, el valor de `this` está determinado por cómo se invoca a la función. No puede ser establecida mediante una asignación en tiempo de ejecución, y puede ser diferente cada vez que la función es invocada. ES5 introdujo el método {{jsxref("Function.bind()", "bind()")}} para [establecer el valor de la función `this` independientemente de como es llamada](#funciones_enlazadas), y ES2015 introdujo las [funciones flecha](/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions) que no proporcionan su propio "binding" de `this` (se mantiene el valor de `this` del contexto léxico que envuelve a la función).

{{InteractiveExample("JavaScript Demo: Expressions - this")}}

```js interactive-example
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
// Expected output: 42
```

## Sintaxis

```
this
```

### Valor

El objeto contexto de JavaScript en el cual se está ejecutando el código actual.

## Contexto global

En el contexto de ejecución global (fuera de cualquier función), **`this`** se refiere al objeto global, ya sea en modo estricto o no.

```js
console.log(this.document === document); // true

// En los navegadores web, el objeto window también es un objeto global:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```

> [!NOTE]
> Puedes obtener el objeto global usando la propieda global `globalThis`, no importa el contexto donde se ejecute esta propiedad, siempre hará referencia al objeto global.

## Contexto de la función

Dentro de una función, el valor de this depende de cómo la función es llamada.

### Llamada simple

```js
function f1() {
  return this;
}

f1() === window; // objeto global
```

En este caso, el valor de **this** no está establecido por la llamada. Dado que el código no está en modo estricto, el valor de this debe ser siempre un objeto por lo que por defecto es el objeto global.

```js
function f2() {
  "use strict"; // consultar modo estricto
  return this;
}

f2() === undefined;
```

En modo estricto, el valor de **this** se mantiene en lo que está establecida al entrar en el contexto de ejecución. Si no está definido, permanece undefined. También se puede ajustar a cualquier valor, tales como **null** o **42** o "**Yo no soy this**".

> [!NOTE]
> En el segundo ejemplo, **`this`** debería ser {{jsxref("undefined")}}, porque `f2` fue llamado sin proporcionar ninguna base (ej. `window.f2()`). Esta característica no fue implementada en algunos navegadores cuando se comenzó a dar soporte al [modo estricto](/es/docs/Web/JavaScript/Referencia/Funciones/Modo_estricto). Como resultado, retorna incorrectamente el objeto window.

Como un método de un objeto

Cuando una función es llamada como un método de un objeto, el **`this`** cambia por el metodo del objeto llamado.

En el siguiente ejemplo, cuando **`o.f()`** es invocado, dentro de la función **`this`** es ligado al objeto **`o`**.

```js
var o = {
  prop: 37,
  f: function () {
    return this.prop;
  },
};

console.log(o.f()); // logs 37
```

Note que el comportamiento no es del todo afectado por cómo o dónde la función fue definida. En el ejemplo anterior, nosotros definimos la función en línea como el elemento `f` durante la definición de `o`. Sin embargo, podriamos haber definido con la misma facilidad la primera función y luego adjuntarlo a `o.f`. Hacerlo da como resultado el mismo comportamiento.

```js
var o = { prop: 37 };

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // logs 37
```

Esto demuestra que sólo importa que la función fue invocada del elemento `f` de `o`.

Asimismo, el enlace `this` sólo se ve afectado por la referencia del miembro más inmediata. En el siguiente ejemplo, cuando invocamos a la función, lo llamamos como metodo `g` del objeto `o.b`. Esta vez durante la ejecución, `this` dentro de la función se referirá a `o.b`. El hecho de que el objeto es en sí mismo un elemento de `o` no tiene ninguna consecuencia, la referencia más inmediata es todo lo que importa.

```js
o.b = { g: independent, prop: 42 };
console.log(o.b.g()); // logs 42
```

#### ... en la cadena de prototipo

El mismo concepto es válido para los métodos definidos en alguna parte de la cadena de prototipo del objeto. Si el método esta sobre una cadena de prototipo del objeto, `this` se referirá al objeto donde está el método de donde fue llamado. Como si ese método estuviera dentro del objeto.

```js
var o = {
  f: function () {
    return this.a + this.b;
  },
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

En este ejemplo, el objeto asignado a la variable `p` no tiene su propia propiedad `f`, esto lo hereda de su prototipo. Pero no importa que la búsqueda de `f` eventualmente encuentre un elemento con ese nombre en `o`; la búsqueda comenzó como una referencia a `p.f`, asi `this` dentro de la funcion toma el valor del objeto referido como `p`. Es decir, desde que `f` es llamado como método de `p`, su `this` refiere a `p`. Esto es una interesante característica de la herencia de prototipo de JavaScript.

#### ... o como un getter o setter

Nuevamente, el mismo concepto es válido cuando una función es invocada de un getter o un setter. Una función usado como getter o setter tiene su enlace `this` al objeto desde el cual la propiedad esta siendo establecida u obtenida.

```js
function modulus() {
  return Math.sqrt(this.re * this.re + this.im * this.im);
}

var o = {
  re: 1,
  im: -1,
  get phase() {
    return Math.atan2(this.im, this.re);
  },
};

Object.defineProperty(o, "modulus", {
  get: modulus,
  enumerable: true,
  configurable: true,
});

console.log(o.phase, o.modulus); // logs -0.78 1.4142
```

### Como un constructor

Cuando una función es usada como un constructor (con la palabra clave {{jsxref("Operadores/new", "new")}}), su `this` es enlazado al nuevo objeto en construcción, a menos que la ejecución de los resultados del constructor en el motor JavaScript encuentren una instrucción de retorno donde el valor de retorno sea un objeto.

```js
/*
 * Los constructores trabajan algo asi:
 *
 * function MyConstructor(){
 *   // El cuerpo del código de la función actual va aquí.  Crear las propiedades en |this| como
 *   // se desee mediante la asignación a los mismos.  E.g.,
 *   this.fum = "nom";
 *   // etcetera...
 *
 *   // Si la función tiene una sentencia de retorno este retorna un objeto,
 *   // este objeto será el resultado de la expresión |new|.  Por otro lado, el
 *   // resultado de la expresión es el objeto actualmente enlazado a |this|
 *   // (i.e., el caso más común suele verse).
 * }
 */

function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // logs 38
```

En el último ejemplo (`C2`), debido a que un objeto fue devuelto durante la construcción, el nuevo objeto que fue enlazado a `this` simplemente se descarta.( Esto esencialmente hace de la declaración "`this.a = 37;`" codigo muerto. No esta exactamente muerto,porque es ejecutado pero se puede eliminar sin efectos externos.)

### `call` y `apply`

Cuando una función usa la plabra clave `this` en su cuerpo, su valor puede ser enlazado a un objeto particular durante la ejecución del método {{jsxref("Function.call()", "call()")}} or {{jsxref("Function.apply()", "apply()")}} que todas las funciones hereden de `Function.prototype`.

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

// El primer parámetro es el objeto a usar como 'this', parámetros posteriores se pasan como argumentos
// en la llamada a la función
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

//El primer parámetro es el objeto a usar como 'this''this', la segunda es una matriz cuyos elementos
//  se utilizan como argumentos en la llamada a la función
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
```

### Funciones enlazadas

ECMAScript 5 introduce {{jsxref("Function.prototype.bind()")}}. Llamando a `f.bind(someObject)` crea una nueva función con el mismo cuerpo y alcance de `f`, pero donde `this` se produce en la función original, en la nueva función esto esta permanentemente ligado al primer argumento de `bind`, independientemente de cómo la función está siendo utilizada.

```js
function f() {
  return this.a;
}

var g = f.bind({ a: "azerty" });
console.log(g()); // azerty

var o = { a: 37, f: f, g: g };
console.log(o.f(), o.g()); // 37, azerty
```

### Como un controlador de eventos DOM

Cuando una función es usada como un controlador de eventos, su `this` es cambiado desde el elemento del evento disparado (algunos navegadores no siguen esta convención para los listeners agregados dinámicamente con otros métodos `addEventListener`).

```js
// Cuando se llama como un listener, convierte en azul el elemento
// relacionado
function bluify(e) {
  console.log(this === e.currentTarget); // Siempre true
  console.log(this === e.target); // true cuando currentTarget y target son el mismo objeto
  this.style.backgroundColor = "#A5D9F3";
}

// Consigue una lista de cada elemento en un documento
var elements = document.getElementsByTagName("*");

// Añade bluify como un click listener asi cuando se hace click sobre el elemento,
// este cambia a azul
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", bluify, false);
}
```


--- SUBTEMA: typeof ---


{{jsSidebar("Operators")}}

## Resumen

El operador `typeof` se usa en cualquiera de los siguientes modos:

1. `typeof operando`
2. `typeof (operando)`

El operador `typeof` devuelve una cadena que indica el tipo del operando sin evaluarlo. `operando` es la cadena, variable, palabra clave u objeto para el que se devolverá su tipo. Los paréntesis son opcionales.

Suponga que define las siguientes variables:

```js
var miFuncion = new Function("5+2");
var forma = "redonda";
var tamano = 1;
var hoy = new Date();
```

El operador `typeof` devuelve los siguientes resultados para estas variables

```js
typeof miFuncion === "function";
typeof forma === "string";
typeof tamano === "number";
typeof hoy === "object";
typeof noExiste === "undefined";
```

Para las palabras clave `true` y `null`, el operador `typeof` devuelve los siguientes resultados:

```js
typeof true === "boolean";
typeof null === "object";
```

Para un número o una cadena, el operador `typeof` devuelve los siguientes resultados:

```js
typeof 62 === "number";
typeof "Hola mundo" === "string";
```

Para valores de propiedades, el operador `typeof` devuelve el tipo del valor que contiene la propiedad:

```js
typeof document.lastModified === "string";
typeof window.length === "number";
typeof Math.LN2 === "number";
```

Para métodos y funciones, el operador `typeof` devuelve los resultados siguientes:

```js
typeof blur === "function";
typeof eval === "function";
typeof parseInt === "function";
typeof shape.split === "function";
```

Para objetos predefinidos, el operador `typeof` devuelve los siguientes resultados:

```js
typeof Date === "function";
typeof Function === "function";
typeof Math === "object";
typeof Object === "function";
typeof String === "function";
```


--- SUBTEMA: unary_negation ---


{{jsSidebar("Operators")}}

El operador de **negación unaria (`-`)** precede a su operando y lo niega.

{{InteractiveExample("JavaScript Demo: Expressions - Unary negation operator")}}

```js interactive-example
const x = 4;
const y = -x;

console.log(y);
// Expected output: -4

const a = "4";
const b = -a;

console.log(b);
// Expected output: -4
```

## Sintaxis

```js-nolint
-x
```

## Descripción

El operador `-` acepta dos tipos de operandos: número y [BigInt](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Primero [intenta transformar el operando a un valor numérico](/es/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) y prueba su tipo. Realiza una negación BigInt si elo operando se convirtió en un BigInt; de lo contrario, realiza la negación de número.

## Ejemplos

### Negando números

```js
const x = 3;
const y = -x;
// y es -3; x es 3
```

### Negando elementos que no son números

El operador de negación unaria puede convertir elementos que no son números en números.

```js
const x = "4";
const y = -x;

// y es -4
```

Los BigInt pueden ser negados usando el operador de negación unaria.

```js
const x = 4n;
const y = -x;

// y is -4n
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Adición (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [Sustracción (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [División (`/`)](/es/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplicación (`*`)](/es/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Resto (`%`)](/es/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponenciación (`**`)](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Incremento (`++`)](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decremento (`--`)](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unario más (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)


--- SUBTEMA: unary_plus ---


{{jsSidebar("Operators")}}

El operador **unario más (`+`)** precede a su operando y evalúa a su operando intentando [convertirlo en un número](/es/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), si aún no lo es.

{{InteractiveExample("JavaScript Demo: Expressions - Unary plus operator", "taller")}}

```js interactive-example
const x = 1;
const y = -1;

console.log(+x);
// Expected output: 1

console.log(+y);
// Expected output: -1

console.log(+"");
// Expected output: 0

console.log(+true);
// Expected output: 1

console.log(+false);
// Expected output: 0

console.log(+"hello");
// Expected output: NaN
```

## Sintaxis

```js-nolint
+x
```

## Descripción

Aunque la negación unaria (`-`) también puede convertir elementos que no sean números, el operador unario más es la forma más rápida y la preferida de convertir algo en un número, porque no realiza ninguna otra operación con el número.

El operador unario más sigue exactamente los mismos pasos que la [coerción numérica](/es/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) normal utilizada por la mayoría de los métodos integrados que esperan números. Puede convertir las representaciónes en cadenas de textos de enteros y flotantes, así como también valores que no son cadenas de texto como `true`, `false` y `null`. Se admiten números enteros en formato decimal y hexadecimal (con prefijo `0x`). Se admiten números negativos (aunque no los hexadecimales). Si no puede analizar un valor en particular, lo evaluará como {{jsxref("NaN")}}.A diferencia de otros operadores aritméticos, que funcionan tanto con números como con [BigInts](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt), el uso del operador `+` en valores BigInt genera un {{jsxref("TypeError")}}.

## Ejemplos

### Uso con números

```js
const x = 1;
const y = -1;

console.log(+x);
// 1
console.log(+y);
// -1
```

### Uso con elementos que no sean números

```js-nolint
+true  // 1
+false // 0
+null  // 0
+[]    // 0
+function (val) { return val; } // NaN
+1n    // throws TypeError: Cannot convert BigInt value to number
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Adición (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [Sustracción (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [División (`/`)](/es/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplicación (`*`)](/es/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Resto (`%`)](/es/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponenciación (`**`)](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Incremento (`++`)](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decremento (`--`)](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Negación unaria (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)


--- SUBTEMA: void ---


{{jsSidebar("Operators")}}

## Resumen

El operador `void` se usa en cualquiera de los siguientes modos:

1. `void (expresion )`
2. `void expresion`

El operador `void` especifica una expresión que se evalúa sin devolver un valor. `expresion` es una expresión JavaScript para evaluar. El paréntesis rodeando la expresión es opcional, pero usarlos es una buena práctica al programar.

Puede usar el operador `void` para especificar una expresión como un enlace de hipertexto. La expresión se evalúa pero no se carga en lugar del documento actual.

El siguiente código crea un enlace de hipertexto que no hace nada cuando el usuario hace click en él. Cuando el usuario hace click en el enlace, void(0) se evalúa como 0, pero eso no tiene ningún efecto en JavaScript.

```html
<a href="javascript:void(0)">Haga click aquí para no hacer nada</a>
```

El siguiente código crea un enlace de hipertexto que envía un formulario cuando el usuario hace click en él.

```html
<a href="javascript:void(document.forms["miFormulario"].submit())">
Haga click aquí para enviar</a>
```


--- SUBTEMA: yield ---


{{jsSidebar("Operadores")}}

La palabra clave `yield` se usa para pausar y reanudar una función generadora ({{jsxref("Statements/function*", "function*")}} o {{jsxref("Statements/Legacy_generator_function", "función generadora heredada")}}).

{{InteractiveExample("JavaScript Demo: Expressions - yield", "taller")}}

```js interactive-example
function* foo(index) {
  while (index < 2) {
    yield index;
    index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value);
// Expected output: 0

console.log(iterator.next().value);
// Expected output: 1
```

## Sintaxis

```
[rv] = yield [expression]
```

- `expression` {{optional_inline}}
  - : Define el valor que se devolverá desde la función generadora a través del {{jsxref("Iteration_protocols", "protocolo iterador", "#El_protocolo_iterador")}}. Si se omite, devuelve `undefined` en su lugar.
- `rv` {{optional_inline}}
  - : Recupera el valor opcional pasado al método `next()` del generador para reanudar su ejecución.

## Descripción

La palabra clave `yield` detiene la ejecución de la función del generador y el valor de la expresión que sigue a la palabra clave `yield` se devuelve al llamador del generador. Se puede considerar como una versión basada en un generador de la palabra clave `return`.

`yield` solo se puede llamar directamente desde la función generadora que la contiene. No se puede llamar desde funciones anidadas o retrollamadas.

La palabra clave `yield` hace que la llamada al método `next()` del generador devuelva un objeto `IteratorResult` con dos propiedades: `value` y `done`. La propiedad `value` es el resultado de evaluar la expresión `yield`, y `done` es `false`, lo cual indica que la función generadora no se ha completado completamente.

Una vez en pausa en una expresión `yield`, la ejecución del código del generador permanece en pausa hasta que se llama al método `next()` del generador. Cada vez que se llama al método `next()` del generador, el generador reanuda la ejecución y se ejecuta hasta que alcanza uno de los siguientes:

- Un `yield`, el cual hace que el generador vuelva a pausar y devuelva el nuevo valor del generador. La próxima vez que se llame a `next()`, la ejecución se reanudará con la instrucción inmediatamente después de `yield`.
- {{jsxref("Statements/throw", "throw")}} se usa para lanzar una excepción desde el generador. Esta detiene la ejecución del generador por completo y la ejecución se reanuda en el llamador (como suele ser el caso cuando se lanza una excepción).
- Se alcanza el final de la función generadora. En este caso, la ejecución del generador finaliza y se devuelve un `IteratorResult` al llamador en el que el `value` es {{jsxref("undefined")}} y `done` es `true`.
- Se alcanza una instrucción {{jsxref("Statements/return", "return")}}. En este caso, la ejecución del generador finaliza y se devuelve un `IteratorResult` al llamador en el que el `value` es el valor especificado por la instrucción `return` y `done` es `true`.

Si se pasa un valor opcional al método `next()` del generador, ese valor se convierte en el valor devuelto por la operación `yield` actual del generador.

Entre la ruta del código del generador, sus operadores `yield` y la capacidad de especificar un nuevo valor inicial pasándolo a {{jsxref("Generator.prototype.next()")}}, los generadores ofrecen enorme poder y control.

> [!WARNING]
> Desafortunadamente, `next()` es asimétrico, pero eso no se puede evitar: siempre envía un valor al `yield` actualmente suspendido, pero devuelve el operando del siguiente `yield`.

## Ejemplos

### Usar `yield`

El siguiente código es la declaración de una función generadora de ejemplo.

```js
function* countAppleSales() {
  let saleList = [3, 7, 5];
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}
```

Una vez que se define una función generadora, se puede usar construyendo un iterador como el siguiente.

```js
let appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

También puedes enviar un valor con `next(value)` al generador. '`step`' se evalúa como un valor de retorno en esta sintaxis \[_rv_] = **yield** \[_expression_]

```js
function* counter(value) {
  let step;

  while (true) {
    step = yield ++value;

    if (step) {
      value += step;
    }
  }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value); // 1
console.log(generatorFunc.next().value); // 2
console.log(generatorFunc.next().value); // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value); // 15
console.log(generatorFunc.next(10).value); // 26
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- [El protocolo `Iterator`](/es/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield*", "yield*")}}


--- SUBTEMA: yield_star_ ---


{{jsSidebar("Operators")}}

`La expresión` **`yield*`** es usada para delegar a otro {{jsxref("Statements/function*", "generator")}} u objeto iterable.

## Sintaxis

```
yield* [[expression]];
```

- `expression`
  - : La expresión que retorna un objeto iterable

## Descripción

La expresión `yield*` itera sobre el operador realizando yield de cada valor retornado por este.

El valor de la expresion `yield*` es el valor retornado por el iterador en si mismo cuando es finalizado (ej., cuando `done` es true).

## Ejemplos

### Delegando a otro generator

En el siguiente código, los valores declarados con yield en `g1()` son devueltos por las llamadas a `next()` al igual que en `g2()`.

```js
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

var iterator = g2();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### Otros objetos iterables

Además de los objetos generator, `yield*` también se puede usar `yield sobre otros tipos de iterables`, ej. arrays, strings u objetos arguments.

```js
function* g3() {
  yield* [1, 2];
  yield* "34";
  yield* Array.from(arguments);
}

var iterator = g3(5, 6);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: "3", done: false }
console.log(iterator.next()); // { value: "4", done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### El valor de la expresión `yield*`

`yield*` es una expresión, no una declaración, por lo que se evalua como un valor.

```js
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

var result;

function* g5() {
  result = yield* g4();
}

var iterator = g5();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true },
// g4() returned { value: "foo", done: true } at this point

console.log(result); // "foo"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Protocolos de iteración](/es/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield", "yield")}}
