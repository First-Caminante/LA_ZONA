

# TEMA: REFERENCE/FUNCTIONS



--- SUBTEMA: callee ---


{{jsSidebar("Functions")}}

## Resumen

Especifica la función que se está ejecutando actualmente.

## Descripción

`callee` es una propiedad de la variable local `arguments` disponible dentro de todos los objetos function; `callee` como una propiedad de {{jsxref("Funciones/arguments", "Function.arguments")}} ya no se utiliza. (`Function.arguments` en sí mismo está también desaconsejado.)

`arguments.callee` permite a funciones anónimas referirse a ellas mismas, lo cual es necesario en funciones anónimas recursivas.

La palabra clave `this` no se refiere a la función que se ejecuta actualmente. Use la propiedad `callee` para referirse a la función dentro del cuerpo de la función.

## Ejemplos

### Ejemplo: Usando `arguments.callee` en funciones anónimas recursivas

Una función recursiva debe ser capaz de referirse a sí misma. Típicamente, una función se refiere a sí misma por su nombre. Sin embargo, una función anónima no tiene nombre y por tanto es una variable de referencia para ella, es decir, si la función no está asignada a ninguna variable, la función no puede referirse a sí misma. (Se pueden crear funciones anónimas mediante una expresión {{jsxref("Operadores/function", "function")}} o el constructor {{jsxref("Function")}}.) Aquí es donde entra `arguments.callee`.

El siguiente ejemplo define una función, la cuál, en cada turno, define y devuelve una función factorial.

```js
function makeFactorialFunc() {
  alert("making a factorial function!");
  return function (x) {
    if (x <= 1) return 1;
    return x * arguments.callee(x - 1);
  };
}

var result = makeFactorialFunc()(5); // returns 120 (5 * 4 * 3 * 2 * 1)
```

this example isn't very practical, but then again, there are few practical cases where arguments.callee is necessary, and most of the those cases involve closures


--- SUBTEMA: arguments ---


{{jsSidebar("Functions", "Funciones")}}

**`arguments`** es un objeto similar a `Array` accesible dentro de [funciones](/es/docs/Web/JavaScript/Guide/Functions) que contiene los valores de los argumentos pasados a esa función.

{{InteractiveExample("JavaScript Demo: Functions Arguments")}}

```js interactive-example
function func1(a, b, c) {
  console.log(arguments[0]);
  // Expected output: 1

  console.log(arguments[1]);
  // Expected output: 2

  console.log(arguments[2]);
  // Expected output: 3
}

func1(1, 2, 3);
```

## Descripción

> [!NOTE]
> Si estás escribiendo código compatible con ES6, entonces se deben preferir los {{jsxref("Functions/rest_parameters", "parámetros resto")}}.

> [!NOTE]
> "Similar a Array" significa que `arguments` tiene una propiedad {{jsxref("Functions/arguments/length", "lenght")}} y propiedades indexadas desde cero, pero no tiene métodos integrados de {{jsxref("Array")}} como {{jsxref("Array.forEach", "forEach()")}} o {{jsxref("Array.map", "map()")}}. Ve la [§Descripción](#descripción) para obtener más detalles.

El objeto `arguments` es una variable local disponible en todas las funciones que no son {{jsxref("Functions/Arrow_functions", "funciones flecha")}}. Puedes hacer referencia a los argumentos de una función dentro de esa función utilizando su objeto `arguments`. Tiene entradas para cada argumento con el que se llamó a la función, con el índice de la primera entrada en `0`.

Por ejemplo, si a una función se le pasan 3 argumentos, puedes acceder a ellos de la siguiente manera:

```js
arguments[0]; // primer argumento
arguments[1]; // segundo argumento
arguments[2]; // tercer argumento
```

También puedes establecer o reasignar cada argumento:

```js
arguments[1] = "new value";
```

El objeto `arguments` no es un {{jsxref("Array")}}. Es similar, pero carece de todas las propiedades de `Array` excepto de {{jsxref("Array.length", "length")}}. Por ejemplo, no tiene el método {{jsxref("Array.pop", "pop()")}}.

Sin embargo, se puede convertir en un `Array` real:

```js
var args = Array.prototype.slice.call(arguments);
// El uso de un arreglo literal es más corto que el anterior pero asigna un arreglo vacío
var args = [].slice.call(arguments);
```

Así como puedes hacer con cualquier objeto tipo `Array`, puedes usar el método {{jsxref("Array.from()")}} de ES2015 o la {{jsxref("Operators/Spread_syntax", "propagación de sintaxis")}} para convertir `arguments` en un arreglo real:

```js
let args = Array.from(arguments);
// o
let args = [...arguments];
```

El objeto `arguments` es útil para funciones llamadas con más argumentos de los que declara aceptar formalmente. Esta técnica es útil para funciones a las que se les puede pasar un número variable de argumentos, como {{jsxref("Math.min()")}}. Esta función de ejemplo acepta cualquier número de argumentos de cadena y devuelve la más larga:

```js
function longestString() {
  var longest = "";
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}
```

Puedes usar {{jsxref("Functions/arguments/lenght", "arguments.length")}} para contar con cuántos argumentos se llamó a la función. Si, en cambio, deseas contar cuántos parámetros se declara que acepta una función, inspecciona la propiedad {{jsxref("Function.length", "length")}} de esa función.

### Usar `typeof` con `arguments`

El operador {{jsxref("Operators/typeof", "typeof")}} devuelve `'object'` cuando se usa con `arguments`

```js
console.log(typeof arguments); // 'object'
```

El tipo de argumentos individuales se puede determinar indexando `arguments`:

```
console.log(typeof arguments[0]); // devuelve el tipo del primer argumento
```

## Propiedades

- {{jsxref("Functions/arguments/callee", "arguments.callee")}}
  - : Referencia a la función en ejecución a la que pertenecen los argumentos. Prohibida en modo estricto.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : El número de argumentos que se pasaron a la función.
- {{jsxref("Functions/arguments/@@iterator", "arguments[@@iterator]")}}
  - : Devuelve un nuevo objeto {{jsxref("Array/@@iterator", "Array iterator", "", 0)}} que contiene los valores de cada índice en `arguments`.

## Ejemplos

### Definición de una función que concatena varias cadenas

Este ejemplo define una función que concatena varias cadenas. El único argumento formal de la función es una cadena que contiene los caracteres que separan los elementos a concatenar.

```js
function myConcat(separator) {
  let args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

Puedes pasar tantos argumentos como desees a esta función. Devuelve una lista de cadenas usando cada argumento en la lista:

```js
// returns "red, orange, blue"
myConcat(", ", "red", "orange", "blue");

// devuelve "elephant; giraffe; lion; cheetah"
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// devuelve "sage. basil. oregano. pepper. parsley"
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
```

### Definición de una función que crea listas HTML

Este ejemplo define una función que crea una cadena que contiene HTML para una lista. El único argumento formal para la función es una cadena que es "`u`" si la lista debe estar {{htmlelement("ul", "desordenada (con viñetas)")}}, u "`o`" si la lista es {{htmlelement("ol", "ordenada (numerada)")}}. La función se define de la siguiente manera:

```js
function list(type) {
  var html = "<" + type + "l><li>";
  var args = Array.prototype.slice.call(arguments, 1);
  html += args.join("</li><li>");
  html += "</li></" + type + "l>"; // fin de la lista
  return html;
}
```

Puedes pasar cualquier número de argumentos a esta función y agregar cada argumento como un elemento de lista a una lista del tipo indicado. Por ejemplo:

```js
let listHTML = list("u", "One", "Two", "Three");

/* la listHTML es:
"<ul><li>One</li><li>Two</li><li>Three</li></ul>"
*/
```

### Parámetros `rest`, predeterminados y desestructurados

El objeto `arguments` se puede utilizar junto con parámetros {{jsxref("Functions/rest_parameters", "rest")}}, {{jsxref("Functions/Default_parameters", "predeterminados")}} y {{jsxref("Operators/Destructuring_assignment", "desestructurados")}}.

```js
function foo(...args) {
  return args;
}
foo(1, 2, 3); // [1, 2, 3]
```

Si bien la presencia de parámetros `rest`, predeterminados o desestructurados no altera [el comportamiento del objeto `arguments` en el código de modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode#haciendo_eval_y_arguments_más_simples), existen sutiles diferencias para el código no estricto.

En el código de modo estricto, el objeto `arguments` se comporta de la misma manera independientemente de que se pasen parámetros `rest`, predeterminados o desestructurados a una función. Es decir, asignar nuevos valores a las variables en el cuerpo de la función no afectará al objeto `arguments`. La asignación de nuevas variables al objeto `arguments` tampoco afectará el valor de las variables.

> [!NOTE]
> No puedes escribir una directiva `"use strict";` en el cuerpo de una definición de función que acepte parámetros `rest`, predeterminados o desestructurados. Si lo haces, generará un {{jsxref("Errors/Strict_Non_Simple_Params", "error de sintaxis")}}.

Las funciones no estrictas a las que se les pasan solo parámetros simples (es decir, no parámetros `rest`, predeterminados o desestructurados) sincronizarán el valor de los nuevos valores de las variables en el cuerpo de la función con el objeto `arguments`, y viceversa:

```js
function func(a) {
  arguments[0] = 99; // actualiza arguments[0] además actualiza a
  console.log(a);
}
func(10); // 99
```

Y también:

```js
function func(a) {
  a = 99; // la actualización también actualiza arguments[0]
  console.log(arguments[0]);
}
func(10); // 99
```

Por el contrario, las funciones no estrictas a las que **se les pasan** parámetros `rest`, predeterminados o desestructurados **no** sincronizarán los nuevos valores asignados a las variables de los argumentos en el cuerpo de la función con el objeto `arguments`. En cambio, el objeto `arguments` en funciones no estrictas con parámetros complejos **siempre** reflejarán los valores pasados a la función cuando se invocó (este es el mismo comportamiento exhibido por todas las funciones en modo estricto, independientemente del tipo de variables que se le pasen):

```js
function func(a = 55) {
  arguments[0] = 99; // actualizar arguments[0] tampoco actualiza a
  console.log(a);
}
func(10); // 10
```

Y también:

```js
function func(a = 55) {
  a = 99; // actualizar a tampoco actualiza arguments[0]
  console.log(arguments[0]);
}
func(10); // 10
```

Y también:

```js
// Un parámetro predeterminado sin seguimiento
function func(a = 55) {
  console.log(arguments[0]);
}
func(); // undefined
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{jsxref("Function", "Función")}}
- {{jsxref("Functions/rest_parameters", "Parámetros resto")}}


--- SUBTEMA: length ---


{{jsSidebar("Functions")}}

La propiedad **`arguments.length`** contiene el número de argumentos pasados a una función.

## Sintaxis

```
arguments.length
```

## Descripción

La propiedad arguments.length devuelve el número total de argumentos pasados a una función. Esto puede ser más o menos que el número de parametros definidos. (Véase {{jsxref("Function.length")}}).

## Ejemplos

### Usando `arguments.length`

En este ejemplo definimos una función que puede sumar dos o más números.

```js
function adder(base /*, n2, ... */) {
  base = Number(base);
  for (var i = 1; i < arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
```

> [!NOTE]
> Tenga en cuenta la diferencia entre {{jsxref("Function.length")}} y arguments.length

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Function")}}
- {{jsxref("Function.length")}}


--- SUBTEMA: arrow_functions ---


{{jsSidebar("Functions", "Funciones")}}

Una **expresión de función flecha** es una alternativa compacta a una {{JSxRef("Operadores/function", "expresión de función")}} tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

**Diferencias y limitaciones:**

- No tiene sus propios enlaces a {{JSxRef("Operadores/this", "this")}} o {{JSxRef("Operadores/super", "super")}} y no se debe usar como {{Glossary("Method", "métodos")}}.
- No tiene {{JSxRef("Funciones/arguments", "argumentos")}} o palabras clave {{JSxRef("../Operadores/new.target", "new.target")}}.
- No apta para los métodos {{JSxRef("Objetos_globales/Function/call", "call")}}, {{JSxRef("Objetos_globales/Function/apply", "apply")}} y {{JSxRef("Objetos_globales/Function/bind", "bind")}}, que generalmente se basan en establecer un {{Glossary("Scope", "ámbito o alcance")}}
- No se puede utilizar como {{Glossary("constructor", "constructor")}}.
- No se puede utilizar {{JSxRef("Operadores/yield", "yield")}} dentro de su cuerpo.

{{InteractiveExample("JavaScript Demo: Functions =>")}}

```js interactive-example
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]
```

### Comparación de funciones tradicionales con funciones flecha

Observa, paso a paso, la descomposición de una "función tradicional" hasta la "función flecha" más simple:
**Nota**: Cada paso a lo largo del camino es una "función flecha" válida

```js
// Función tradicional
function (a){
  return a + 100;
}

// Desglose de la función flecha

// 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
(a) => {
  return a + 100;
}

// 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
(a) => a + 100;

// 3. Suprime los paréntesis de los argumentos
a => a + 100;
```

> [!NOTE]
> Como se muestra arriba, los { corchetes }, ( paréntesis ) y "return" son opcionales, pero pueden ser obligatorios.

Por ejemplo, si tienes **varios argumentos** o **ningún argumento**, deberás volver a introducir paréntesis alrededor de los argumentos:

```js
// Función tradicional
function (a, b){
  return a + b + 100;
}

// Función flecha
(a, b) => a + b + 100;

// Función tradicional (sin argumentos)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// Función flecha (sin argumentos)
let a = 4;
let b = 2;
() => a + b + 100;
```

Del mismo modo, si el cuerpo requiere **líneas de procesamiento adicionales**, deberás volver a introducir los corchetes **Más el "return"** (las funciones flecha no adivinan mágicamente qué o cuándo quieres "volver"):

```js
// Función tradicional
function (a, b){
  let chuck = 42;
  return a + b + chuck;
}

// Función flecha
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}
```

Y finalmente, en las **funciones con nombre** tratamos las expresiones de flecha como variables

```js
// Función tradicional
function bob(a) {
  return a + 100;
}

// Función flecha
let bob = (a) => a + 100;
```

## Sintaxis

### Sintaxis básica

Un parámetro. Con una expresión simple no se necesita `return`:

```js-nolint
param => expression;
(param) => expression;
```

Varios parámetros requieren paréntesis. Con una expresión simple no se necesita `return`:

```js
(param1, paramN) => expression;
```

Las declaraciones de varias líneas requieren corchetes y `return`:

```js
(param) => {
  let a = 1;
  return a + b;
};
```

Varios parámetros requieren paréntesis. Las declaraciones de varias líneas requieren corchetes y `return`:

```js
(param1, paramN) => {
  let a = 1;
  return a + b;
};
```

### Sintaxis avanzada

Para devolver una expresión de objeto literal, se requieren paréntesis alrededor de la expresión:

```js
(params) => ({ foo: "a" }); // devuelve el objeto {foo: "a"}
```

Los {{JSxRef("Funciones/parametros_rest", "parámetros rest")}} son compatibles:

```js
(a, b, ...r) => expression;
```

Se admiten los {{JSxRef("Funciones/Parametros_por_defecto", "parámetros predeterminados")}}:

```js
(a = 400, b = 20, c) => expression;
```

{{JSxRef("Operadores/Destructuring_assignment", "Desestructuración")}} dentro de los parámetros admitidos:

```js
([a, b] = [10, 20]) => a + b; // el resultado es 30
({ a, b } = { a: 10, b: 20 }) => a + b; // resultado es 30
```

## Descripción

Consulta también ["ES6 en profundidad: funciones flecha" en hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/).

### "`this`" y funciones flecha

Una de las razones por las que se introdujeron las funciones flecha fue para eliminar complejidades del ámbito ({{JSxRef("Operadores/this", "this")}}) y hacer que la ejecución de funciones sea mucho más intuitiva.

> [!NOTE]
> Si `this` es un misterio para ti, consulta {{JSxRef("Operadores/this", "este documento")}} para obtener más información sobre cómo funciona `this`. Para resumir, `this` se refiere a la instancia. Las instancias se crean cuando se invoca la palabra clave `new`. De lo contrario, `this` se establecerá —de forma predeterminada— en el {{Glossary("Scope", "ámbito o alcance")}} de window.

En las **funciones tradicionales** de manera predeterminada `this` está en el ámbito de `window`:

```js
window.age = 10; // <-- ¿me notas?
function Person() {
  this.age = 42; // <-- ¿me notas?
  setTimeout(function () {
    // <-- La función tradicional se está ejecutando en el ámbito de window
    console.log("this.age", this.age); // genera "10" porque la función se ejecuta en el ámbito de window
  }, 100);
}

var p = new Person();
```

Las **funciones flecha** **no** predeterminan `this` al {{Glossary("Scope", "ámbito o alcance")}} de `window`, más bien se ejecutan en el {{Glossary("Scope", "ámbito o alcance")}} en que se crean:

```js
window.age = 10; // <-- ¿me notas?
function Person() {
  this.age = 42; // <-- ¿me notas?
  setTimeout(() => {
    // <-- Función flecha ejecutándose en el ámbito de "p" (una instancia de Person)
    console.log("this.age", this.age); // genera "42" porque la función se ejecuta en el ámbito de Person
  }, 100);
}

var p = new Person();
```

En el ejemplo anterior, la función flecha no tiene su propio `this`. Se utiliza el valor `this` del {{Glossary("Scope", "ámbito")}} léxico adjunto; las funciones flecha siguen las reglas normales de búsqueda de variables. Entonces, mientras busca `this` que no está presente en el {{Glossary("Scope", "ámbito")}} actual, una función flecha termina encontrando el `this` de su {{Glossary("Scope", "ámbito")}} adjunto.

### Relación con el modo estricto

Dado que `this` proviene del contexto léxico circundante, en el {{JSxRef("Modo_estricto", "modo estricto")}} se ignoran las reglas con respecto a `this`.

```js
var f = () => {
  "use strict";
  return this;
};

f() === window; // o el objeto global
```

Todas las demás reglas del {{JSxRef("Modo_estricto", "modo estricto")}} se aplican normalmente.

> [!WARNING]
> Comprueba las notas sobre el {{JSxRef("Modo_estricto", "modo estricto")}}.

### Funciones flecha utilizadas como métodos

Como se indicó anteriormente, las expresiones de función flecha son más adecuadas para funciones que no son métodos. Observa qué sucede cuando intentas usarlas como métodos:

```js
"use strict";

var obj = {
  // no crea un nuevo ámbito
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  },
};

obj.b(); // imprime indefinido, Window {...} (o el objeto global)
obj.c(); // imprime 10, Object {...}
```

Las funciones flecha no tienen su propio `this`. Otro ejemplo que involucra {{JSxRef("Object.defineProperty()")}}:

```js
"use strict";

var obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this); // indefinida 'undefined' Window {...} (o el objeto global)
    return this.a + 10; // representa el objeto global 'Window', por lo tanto 'this.a' devuelve 'undefined'
  },
});
```

### `call`, `apply` y `bind`

Los métodos {{JSxRef("Objetos_globales/Function/call", "call")}}, {{JSxRef("Objetos_globales/Function/apply", "apply")}} y {{JSxRef("Objetos_globales/Function/bind", "bind")}} **NO son adecuados** para las funciones flecha, ya que fueron diseñados para permitir que los métodos se ejecuten dentro de diferentes ámbitos, porque **las funciones flecha establecen "`this`" según el ámbito dentro del cual se define la función flecha.**

Por ejemplo, {{JSxRef("Objetos_globales/Function/call", "call")}}, {{JSxRef("Objetos_globales/Function/apply", "apply")}} y {{JSxRef("Objetos_globales/Function/bind", "bind")}} funcionan como se esperaba con las funciones tradicionales, porque establecen el ámbito para cada uno de los métodos:

```js
// ----------------------
// Ejemplo tradicional
// ----------------------
// Un objeto simplista con su propio "this".
var obj = {
  num: 100,
};

// Establece "num" en window para mostrar cómo NO se usa.
window.num = 2020; // ¡Ay!

// Una función tradicional simple para operar en "this"
var add = function (a, b, c) {
  return this.num + a + b + c;
};

// call
var result = add.call(obj, 1, 2, 3); // establece el ámbito como "obj"
console.log(result); // resultado 106

// apply
const arr = [1, 2, 3];
var result = add.apply(obj, arr); // establece el ámbito como "obj"
console.log(result); // resultado 106

// bind
var result = add.bind(obj); // estable el ámbito como "obj"
console.log(result(1, 2, 3)); // resultado 106
```

Con las funciones flecha, dado que la función `add` esencialmente se crea en el ámbito del `window` (global), asumirá que `this` es window.

```js
// ----------------------
// Ejemplo de flecha
// ----------------------

// Un objeto simplista con su propio "this".
var obj = {
  num: 100,
};

// Establecer "num" en window para mostrar cómo se recoge.
window.num = 2020; // ¡Ay!

// Función flecha
var add = (a, b, c) => this.num + a + b + c;

// call
console.log(add.call(obj, 1, 2, 3)); // resultado 2026

// apply
const arr = [1, 2, 3];
console.log(add.apply(obj, arr)); // resultado 2026

// bind
const bound = add.bind(obj);
console.log(bound(1, 2, 3)); // resultado 2026
```

Quizás el mayor beneficio de usar las funciones flecha es con los métodos a nivel del DOM (`setTimeout`, `setInterval`, `addEventListener`) que generalmente requieren algún tipo de cierre, llamada, aplicación o vinculación para garantizar que la función se ejecute en el ámbito adecuado.

**Ejemplo tradicional:**

```js
var obj = {
  count: 10,
  doSomethingLater: function () {
    setTimeout(function () {
      // la función se ejecuta en el ámbito de window
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater(); // la consola imprime "NaN", porque la propiedad "count" no está en el ámbito de window.
```

**Ejemplo de flecha:**

```js
var obj = {
  count: 10,
  doSomethingLater: function () {
    // por supuesto, las funciones flecha no son adecuadas para métodos
    setTimeout(() => {
      // dado que la función flecha se creó dentro del "obj", asume el "this" del objeto
      this.count++;
      console.log(this.count);
    }, 300);
  },
};

obj.doSomethingLater();
```

### Sin enlace de `arguments`

Las funciones flecha no tienen su propio objeto {{JSxRef("Funciones/arguments", "arguments")}}. Por tanto, en este ejemplo, `arguments` simplemente es una referencia a los argumentos del ámbito adjunto:

```js
var arguments = [1, 2, 3];
var arr = () => arguments[0];

arr(); // 1

function foo(n) {
  var f = () => arguments[0] + n; // Los argumentos implícitos de foo son vinculantes. arguments[0] es n
  return f();
}

foo(3); // 6
```

En la mayoría de los casos, usar {{JSxRef("Funciones/parametros_rest", "parámetros rest")}} es una buena alternativa a usar un objeto `arguments`.

```js
function foo(n) {
  var f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

### Uso del operador `new`

Las funciones flecha no se pueden usar como constructores y arrojarán un error cuando se usen con `new`.

```js
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo no es un constructor
```

### Uso de la propiedad `prototype`

Las funciones flecha no tienen una propiedad `prototype`.

```js
var Foo = () => {};
console.log(Foo.prototype); // undefined
```

### Uso de la palabra clave `yield`

La palabra clave {{JSxRef("Operadores/yield", "yield")}} no se puede utilizar en el cuerpo de una función flecha (excepto cuando está permitido dentro de las funciones anidadas dentro de ella). Como consecuencia, las funciones flecha no se pueden utilizar como generadores.

### Cuerpo de función

Las funciones flecha pueden tener un "cuerpo conciso" o el "cuerpo de bloque" habitual.

En un cuerpo conciso, solo se especifica una expresión, que se convierte en el valor de retorno implícito. En el cuerpo de un bloque, debes utilizar una instrucción `return` explícita.

```js
var func = (x) => x * x;
// sintaxis de cuerpo conciso, "return" implícito

var func = (x, y) => {
  return x + y;
};
// con cuerpo de bloque, se necesita un "return" explícito
```

### Devolver objetos literales

Ten en cuenta que devolver objetos literales utilizando la sintaxis de cuerpo conciso `params => {object: literal}` no funcionará como se esperaba.

```js
var func = () => { foo: 1 };
// ¡Llamar a func() devuelve undefined!

var func = () => { foo: function() {} };
// SyntaxError: la declaración function requiere un nombre
```

Esto se debe a que el código entre llaves ({}) se procesa como una secuencia de declaraciones (es decir, `foo` se trata como una etiqueta, no como una clave en un objeto literal).

Debes envolver el objeto literal entre paréntesis:

```js
var func = () => ({ foo: 1 });
```

### Saltos de línea

Una función flecha no puede contener un salto de línea entre sus parámetros y su flecha.

```js
var func = (a, b, c)
  => 1;
// SyntaxError: expresión esperada, obtuve '=>'
```

Sin embargo, esto se puede modificar colocando el salto de línea después de la flecha o usando paréntesis/llaves como se ve a continuación para garantizar que el código se mantenga bonito y esponjoso. También puedes poner saltos de línea entre argumentos.

```js
var func = (a, b, c) => 1;

var func = (a, b, c) => 1;

var func = (a, b, c) => {
  return 1;
};

var func = (a, b, c) => 1;

// no se lanza SyntaxError
```

### Orden de procesamiento

Aunque la flecha en una función flecha no es un operador, las funciones flecha tienen reglas de procesamiento especiales que interactúan de manera diferente con {{JSxRef("Operadores/Operator_Precedence", "prioridad de operadores")}} en comparación con las funciones regulares.

```js
let callback;

callback = callback || function() {}; // ok

callback = callback || () => {};
// SyntaxError: argumentos de función flecha no válidos

callback = callback || (() => {});    // bien
```

## Ejemplos

### Uso básico

```js
// Una función flecha vacía devuelve undefinided
let empty = () => {};

(() => "foobar")();
// Devuelve "foobar"
// (esta es una expresión de función invocada inmediatamente)

var simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

let max = (a, b) => (a > b ? a : b);

// Fácil filtrado de arreglos, mapeo, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
// 66

var even = arr.filter((v) => v % 2 == 0);
// [6, 0, 18]

var double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// Cadenas de promesas más concisas
promise
  .then((a) => {
    // ...
  })
  .then((b) => {
    // ...
  });

// Funciones flecha sin parámetros que son visualmente más fáciles de procesar
setTimeout(() => {
  console.log("sucederá antes");
  setTimeout(() => {
    // código más profundo
    console.log("Sucederá más tarde");
  }, 1);
}, 1);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- ["ES6 en profundidad: funciones flecha" en hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)


--- SUBTEMA: default_parameters ---


{{jsSidebar("Functions", "Funciones")}}

**Parámetros predeterminados de función** permiten que los parámetros con nombre se inicien con valores predeterminados si no se pasa ningún valor o `undefined`.

{{InteractiveExample("JavaScript Demo: Functions Default")}}

```js interactive-example
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// Expected output: 10

console.log(multiply(5));
// Expected output: 5
```

## Sintaxis

```
function [name]([param1[ = defaultValue1 ][, ..., paramN[ = defaultValueN ]]]) {
   statements
}
```

## Descripción

En JavaScript, los parámetros de función están predeterminados en {{jsxref("undefined")}}. Sin embargo, a menudo es útil establecer un valor predeterminado diferente. Aquí es donde los parámetros predeterminados pueden ayudar.

En el pasado, la estrategia general para establecer valores predeterminados era probar los valores de los parámetros en el cuerpo de la función y asignar un valor si eran `undefined`.

En el siguiente ejemplo, si no se proporciona ningún valor para `b` cuando se llama a `multiply`, el valor de `b` sería `undefined` al evaluar `a * b` y `multiply` devolvería `NaN`.

```js
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // NaN !
```

Para protegerte contra esto, usarías algo como la segunda línea, donde `b` se establece en `1` si llamas a `multiply` con un solo argumento:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
```

Con los parámetros predeterminados en ES2015, las comprobaciones en el cuerpo de la función ya no son necesarias. Ahora, puedes asignar `1` como valor predeterminado para `b` en el encabezado de la función:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
```

## Ejemplos

### Pasar `undefined` vs. otros valores falsos

En la segunda llamada de este ejemplo, incluso si el primer argumento se establece explícitamente en `undefined` (aunque no `null` u otros valores {{Glossary("falsy", "falsos", "", 1)}} , el valor del argumento `num` sigue siendo el predeterminado.

```js
function test(num = 1) {
  console.log(typeof num);
}

test(); // 'number' (num se establece en 1)
test(undefined); // 'number' (num se establece en 1 también)

// prueba con otros valores falsos:
test(""); // 'string' (num se establece en '')
test(null); // 'object' (num se establece en null)
```

### Evaluado en el momento de la llamada

El argumento predeterminado se evalúa en el _momento de la llamada_. Entonces, a diferencia de (por ejemplo) Python, se crea un nuevo objeto cada vez que se llama a la función.

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // [1]
append(2); // [2], no [1, 2]
```

Esto incluso se aplica a funciones y variables:

```js
function callSomething(thing = something()) {
  return thing;
}

let numberOfTimesCalled = 0;
function something() {
  numberOfTimesCalled += 1;
  return numberOfTimesCalled;
}

callSomething(); // 1
callSomething(); // 2
```

### Los parámetros anteriores están disponibles para los parámetros predeterminados posteriores

Los parámetros definidos anteriormente (a la izquierda) están disponibles para los parámetros predeterminados posteriores:

```js
function greet(name, greeting, message = greeting + " " + name) {
  return [name, greeting, message];
}

greet("David", "Hi"); // ["David", "Hi", "Hi David"]
greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]
```

Esta funcionalidad se puede aproximar de esta manera, lo que demuestra cuántos casos extremos se manejan:

```js
function go() {
  return ":P";
}

function withDefaults(
  a,
  b = 5,
  c = b,
  d = go(),
  e = this,
  f = arguments,
  g = this.value,
) {
  return [a, b, c, d, e, f, g];
}

function withoutDefaults(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
      a;
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
    default:
  }
  return [a, b, c, d, e, f, g];
}

withDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

withoutDefaults.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### Efectos de el ámbito

Si se definen parámetros predeterminados para uno o más parámetros, se crea un [segundo ámbito](https://tc39.es/ecma262/#sec-functiondeclarationinstantiation) (registro de entorno), específicamente para los identificadores dentro de la lista de parámetros. Este ámbito es padre del ámbito creado para el cuerpo de la función.

Esto significa que no se puede hacer referencia a las funciones y variables declaradas en el cuerpo de la función desde los iniciadores de parámetros de valor predeterminado; intentar hacerlo arroja un {{jsxref("ReferenceError")}} en tiempo de ejecución.

También significa que las variables declaradas dentro del cuerpo de la función usando `var` enmascararán los parámetros del mismo nombre, en lugar de que el comportamiento habitual de las declaraciones `var` duplicadas no tenga ningún efecto.

La siguiente función arrojará un `ReferenceError` cuando se invoca, porque el valor del parámetro predeterminado no tiene acceso al ámbito secundario del cuerpo de la función:

```js example-bad
function f(a = go()) {
  // Lanza un `ReferenceError` cuando se invoca a `f`.
  function go() {
    return ":P";
  }
}
```

...y esta función imprimirá `undefined` porque la variable `var a` se eleva solo a la parte superior del ámbito creado para el cuerpo de la función (y no hasta el ámbito principal creado para la lista de parámetros):

```js example-bad
function f(a, b = () => console.log(a)) {
  var a = 1;
  b(); // Imprime `undefined`, porque los valores de los parámetros predeterminados existen en su propio ámbito
}
```

### Parámetros sin valores predeterminados después de los parámetros predeterminados

Los parámetros aún se establecen de izquierda a derecha, sobrescribiendo los parámetros predeterminados incluso si hay parámetros posteriores sin valores predeterminados.

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

### Parámetro desestructurado con asignación de valor predeterminado

Puedes usar la asignación de valor predeterminado con la notación {{jsxref("Operators/Destructuring_assignment", "la desestructuración", "", 1)}}:

```js
function f([x, y] = [1, 2], { z: z } = { z: 3 }) {
  return x + y + z;
}

f(); // 6
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- [Propuesta original en ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values)


--- SUBTEMA: get ---


{{jsSidebar("Funciones")}}

Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.

## Sintaxis

`{get prop() { . . . } }`

## Parámetros

- `prop`
  - : el nombre de la propiedad a unir con la función dada

## Descripción

A veces es deseable permitir acceso a una propiedad que retorna un valor dinámicamente calculado, o si desea mostrar el estado de alguna variable interna sin requerir el uso de llamadas a métodos explícitos. En JavaScript, esto se puede lograr con el uso de un getter (captador). No es posible tener simultáneamente un getter ligado a una propiedad y que dicha propiedad tenga actualmente un valor, aunque es posible usar un getter junto con un setter para crear un tipo de pseudo-propiedad.

Tenga en cuenta lo siguiente al trabajar con la sintaxis `get`:

- Puede tener un identificador que sea un número o una cadena.
- Debe tener exactamente cero parametros (ver [Cambio ES5 incompatible: las funciones getter y setter literal deben tener ahora exactamente cero o un argumento](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) para mas información);
- No debe haber múltiples getters para una misma propiedad (`{ get x() { }, get x() { } }` y `{ x: ..., get x() { } }` están prohibidos).

El getter puede ser removido usando el operador {{jsxref("Operadores/delete", "delete")}}.

## Ejemplos

### Definir un getter con el operador `get`

Esto creará una pseudo-propiedad `latest` (ver ejemplo) del objecto `o` que podría retornar la más reciente entrada dentro de `o.log`:

```js
var o = {
  get latest() {
    if (this.log.length > 0) {
      return this.log[this.log.length - 1];
    } else {
      return null;
    }
  },
  log: [],
};
```

Note que intentar asignar un valor a `latest` no lo cambiará.

### Borrar un getter usando el operador `delete`

```js
delete o.latest;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Consulta también

- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/set", "set")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__defineGetter__()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [Defining Getters and Setters](/es/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) in JavaScript Guide


--- SUBTEMA: functions ---


{{jsSidebar("Functions")}}

En términos generales, una función es un "subprograma" que puede ser _llamado_ por código externo (o interno en caso de recursión) a la función. Al igual que el programa en sí mismo, una función se compone de una secuencia de declaraciones, que conforman el llamado _cuerpo de la función_. Se pueden pasar valores a una función, y la función puede _devolver_ un valor.

En JavaScript, las funciones son objetos de primera clase, es decir, son objetos y se pueden manipular y transmitir al igual que cualquier otro objeto. Concretamente son objetos {{jsxref("Function")}}.

## General

Toda función en JavaScript es un objeto Function. Ver {{jsxref("Function")}} para obtener información sobre las propiedades y métodos de los objetos `Function`.

Las funciones no son lo mismo que los procedimientos. Una función siempre devuelve un valor, pero un procedimiento, puede o no puede devolver un valor.

Para devolver un valor especifico distinto del predeterminado, una función debe tener una sentencia {{jsxref("Sentencias/return", "return")}}, que especifique el valor a devolver. Una función sin una instrucción return devolverá el valor predeterminado. En el caso de un {{jsxref("Object.prototype.constructor", "constructor")}} llamado con la palabra clave {{jsxref("new")}}, el valor predeterminado es el valor de su parametro. Para el resto de funciones, el valor predeterminado es undefined.

Los parámetros en la llamada a una función son los argumentos de la función. Los argumentos se pasan a las funciones _por valor_. Si la función cambia el valor de un argumento, este cambio no se refleja globalmente ni en la llamada de la función. Sin embargo, las referencias a objetos también son valores, y son especiales: si la función cambia las propiedades del objeto referenciado, ese cambio es visible fuera de la función, tal y como se muestra en el siguiente ejemplo:

```js
/* Declarando la función 'myFunc' */
function myFunc(elobjeto) {
  elobjeto.marca = "Toyota";
}

/*
 * Declarando la variable 'mycar';
 * Se crea e inicializa el nuevo objeto;
 * para hacer referencia a él mediante 'mycar'
 */
var mycar = {
  marca: "Honda",
  modelo: "Accord",
  año: 1998,
};

/* Mostrando 'Honda' */
window.alert(mycar.marca);

/* Paso por referencia del objeto 'mycar' a la función 'myFunc'*/
myFunc(mycar);

/*
 * Muestra 'Toyota' como valor de la propiedad 'marca'
 * del objeto, que ha sido cambiado por la función.
 */
window.alert(mycar.marca);
```

La palabra clave [`this`](/es/docs/Web/JavaScript/Reference/Operators/this) no hace referencia a la función que está ejecutandose actualmente, por lo que debes referirte a los objetos Function por nombre, incluso dentro del cuerpo de la función. Como alternativa, puedes utilizar la propiedad [arguments.callee](/es/Referencia_de_JavaScript_1.5/Funciones/arguments/callee) (que no se recomienda).

## Definiendo funciones

Hay varias formas de definir funciones:

### Declaración de una función (La instrucción `function`)

Hay una sintaxis especial para declarar funciones (ver la instrucción {{jsxref("Sentencias/function","function")}} para más detalles):

```js-nolint
function nombre([param[, param[, ...param]]]) {
   instrucciones
}
```

- `nombre`
  - : El nombre de la función.

<!---->

- `param`
  - : El nombre de un argumento que se pasará a la función. Una función puede tener hasta 255 argumentos.

<!---->

- `instrucciones`
  - : Las instruciones que forman el cuerpo de la función.

### Expresión de una función (El operador `function`)

Una expresión function es similar y tiene la misma sintaxis que una declaración de función (ver operador {{jsxref("Operadores/function", "function")}} para más detalles):

```js-nolint
function [nombre]([param[, param[, ...param]]]) {
   instrucciones
}
```

- `nombre`
  - : El nombre de la función, se puede omitir, en ese caso la función se conoce como función anónima.

<!---->

- `param`
  - : El nombre de los argumentos que se pasarán a la función. Una función puede tener hasta 255 argumentos.

<!---->

- `instrucciones`
  - : Las instrucciones que forman el cuerpo de la función.

### La expresión de función flecha (=>)

> [!NOTE]
> Las expresiones de función Flecha son una tecnología experimental, parte de la proposición Harmony (EcmaScript 6) y no son ampliamente implementadas por los navegadores.

Una expresión de función flecha tiene una sintaxis más corta y su léxico se une a este valor (ver {{jsxref("Funciones/Arrow_functions", "arrow functions", "", 1)}} para más detalles):

```js-nolint
([param] [, param]) => { instrucciones }
param => expresión
```

- `param`
  - : El nombre de un argumento. Si no hay argumentos se tiene que indicar con `()`. Para un único argumento no son necesarios los parentesis. (como `foo => 1`)
- `instrucciones o expresión`
  - : Multiples instrucciones deben ser encerradas entre llaves. Una única expresión no necesita llaves. La expresión es, así mismo, el valor de retorno implícito de esa función.

### El constructor `Function`

Como todos los demás objetos, los objetos {{jsxref("Function")}} se pueden crear mediante el operador new:

```html
new Function (arg1, arg2, ... argN, functionBody)
```

- `arg1, arg2, ... argN`
  - : Ningún o varios argumentos son pasados para ser utilizados por la función como nombres de argumentos formales. Cada uno debe ser una cadena que se ajuste a las reglas de identificadores válidos en JavaScript, o a una lista de este tipo de cadenas separadas por comas; por ejemplo "x", "theValue", o "a,b".

<!---->

- `Cuerpo de la función`
  - : Una cadena conteniendo las instrucciones JavaScript que comprenden la definición de la función.

Llamar al contructor Function como una función, sin el operador new, tiene el mismo efecto que llamarlo como un constructor.

> [!NOTE]
> Utilizar el constructor Function no se recomienda, ya que necesita el cuerpo de la función como una cadena, lo cual puede ocasionar que no se optimize correctamente por el motor JS, y puede también causar otros problemas.

## El objeto `arguments`

Puedes referirte a los argumentos de una función dentro de la misma, utilizando el objeto arguments. Ver {{jsxref("Functiones/argument", "Function")}}.

## Ámbito de ejecución y pila de funciones

some section about scope and functions calling other functions

### Repaso

Una función puede referirse y llamarse a sí misma. Hay tres maneras en la que una función puede referirse a sí misma.

1. El nombre de la función
2. {{jsxref("arguments.callee")}}
3. una función dentro del ambito de ejecución que refiere a la función

Por ejemplo, considere la siguiente definición de función:

```js
var foo = function bar() {
  // el cuerpo va aqui
};
```

Dentro del cuerpo de la función, todo lo siguientes son lo mismo:

1. `bar()`
2. `arguments.callee()`
3. `foo()`

Una función que se llama a sí misma es llamada una _función recursiva._ En algunas ocaciones, la recursión es análoga a un bucle. Ambos ejecutan el mismo código múltiples veces, y ambas requieren una condición (para evitar un bucle infinito, o en su lugar, recursión infinita en este caso). Por ejemplo, el siguiente bucle:

```js
var x = 0;
while (x < 10) {
  // "x < 10" es la condición
  // haz algo
  x++;
}
```

puede ser convertida en una función recursiva y una llamada a esa función:

```js
function loop(x) {
  if (x >= 10)
    // "x >= 10" es la condición de salida (equivalente a "!(x < 10)")
    return;
  // haz algo
  loop(x + 1); // la llamada recursiva
}
loop(0);
```

Sin embargo, algunos algoritmos no pueden ser bucles iterativos simples. Por ejemplo, obtener todos los nodos de una estructura de arbol (e.g. el [DOM](/es/docs/Web/API/Document_Object_Model)) es realizado de manera más fácil usando recursión:

```js
function recorrerArbol(nodo) {
  if (nodo == null)
    //
    return;
  // haz algo con el nodo
  for (var i = 0; i < nodo.nodosHijos.length; i++) {
    recorrerArbol(nodo.nodosHijos[i]);
  }
}
```

En comparación con el bucle de la función `loop`, cada llamada recursiva hace muchas llamadas recursivas aquí.

Es posible convertir cualquier algoritmo recursivo en uno no recursivo, pero a menudo la lógica es mucho más compleja y hacerlo requiere el uso de una pila. De hecho, la recursión utiliza una pila: la pila de funciones.

El comportamiento similar a la pila se puede ver en el ejemplo siguiente:

```js
function foo(i) {
  if (i < 0) return;
  document.writeln("inicio:" + i);
  foo(i - 1);
  document.writeln("fin:" + i);
}
foo(3);
```

que produce:

```plain
inicio:3
inicio:2
inicio:1
inicio:0
fin:0
fin:1
fin:2
fin:3
```

## Funciones anidadas y cierres

- Puede anidar una función dentro de una función. La función anidada (inner) es privada a la función que la contiene (outer). También con la forma: aclosure.
  - : Un cierre es una expresión (normalmente una función) que puede tener variables libres junto con un entorno que enlaza esas variables (que "cierra" la expresión).
    Dado que una función anidada es un cierre, esto significa que una función anidada puede "heredar" los argumentos y las variables de su función contenedora. En otras palabras, la función interna contiene el ámbito de la función externa.[](https://jibbering.com/faq/faq_notes/closures.html)

Desde que la función anidada es un cierre (closure), esto significa que una función anidada puede "heredar" los argumentos y variables de su función contenedora. En otras palabras, la función interna contiene un scope (alcance) de la función externa.

Para resumir:

- La función interna se puede acceder sólo a partir de sentencias en la función externa.

<!---->

- La función interna forma un cierre: la función interna puede utilizar los argumentos y las variables de la función externa, mientras que la función externa no puede utilizar los argumentos y las variables de la función interna.

El ejemplo siguiente muestra funciones anidadas:

```js
function addCuadrado(a, b) {
  function cuadrado(x) {
    return x * x;
  }
  return cuadrado(a) + cuadrado(b);
}
a = addCuadrado(2, 3); // retorna 13
b = addCuadrado(3, 4); // retorna 25
c = addCuadrado(4, 5); // retorna 41
```

Dado que la función interna forma un cierre, puede llamar a la función externa y especificar argumentos para la función externa e interna

```js
function fuerade(x) {
  function dentro(y) {
    return x + y;
  }
  return dentro;
}
resultado = fuerade(3)(5); // retorna 8
```

### Consideraciones sobre la eficiencia

Observe cómo se conserva `x` cuando se devuelve dentro. Un cierre conserva los argumentos y las variables en todos los ámbitos que contiene. Puesto que cada llamada proporciona argumentos potencialmente diferentes, debe crearse un cierre para cada llamada a la función externa. En otras palabras, cada llamada a `fuerade` crea un cierre. Por esta razón, los cierres pueden usar una gran cantidad de memoria. La memoria se puede liberar sólo cuando el `dentro` devuelto ya no es accesible. En este caso, el cierre del `dentro` se almacena en `resultado`. Como el `resultado` está en el ámbito global, el cierre permanecerá hasta que se descargue el script (en un navegador, esto sucedería cuando la página que contiene el script esté cerrada).

Debido a esta ineficiencia, evite cierres siempre que sea posible, es decir, evite las funciones de anidamiento siempre que sea posible. Por ejemplo, considere el siguiente ejemplo:

```js
function assignOnclick(elemento) {
  element.onclick = function () {
    this.style.backgroundColor = "blue";
  };
}
```

Esto se puede volver a escribir para evitar el cierre. Sin embargo, la función interna anónima necesitaría ser nombrada y ya no sería privada para `assignOnclick`:

```js
function assignOnclick(elemento) {
  elemento.onclick = elemento_onclick;
}

function elemento_onclick() {
  this.style.backgroundColor = "blue";
}
```

#### Multiples funciones anidadas

Las funciones pueden ser anidadas contigua de la otra, es decir, una función (A) que contiene una función (B) que contiene una función (C), etc. Ambas funciones B y C forman cierres aquí, por lo que B puede acceder a A y C pueden acceder a B. Además, como C puede acceder a B, que puede acceder a A, C también puede acceder a A. Por lo tanto, los cierres pueden contener múltiples ámbitos; contienen recursivamente el alcance de las funciones que lo contienen. Esto es llamado encadenamiento de objetos(_scope chaining_). (Por qué se llama "_chaining_"("encadenamiento") se explicará más adelante.)

Considere el siguiente ejemplo:

```js
function A(x) {
  function B(y) {
    function C(z) {
      alert(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // alerts 6 (1 + 2 + 3)
```

En este ejemplo, `C` accede a las `B` que hayan en `y` y `A` en `x`. Esto se puede hacer porque:

1. `B` forma un cierre que incluye a `A`, es decir, `B` puede acceder a los argumentos y variables de `A`.
2. `C` forma un cierre que incluye a `B`.
3. Como el cierre de `B` incluye a `A`, el cierre de `C` incluye a `A`, `C` puede acceder a los argumentos y variables de la Banda `A`. En otras palabras, codifica los ámbitos de `B` y A en ese orden.

Lo contrario, sin embargo, no es cierto. `A` no puede acceder a `C`, porque `A` no puede acceder a ningún argumento o variable de `B`, que `C` es una variable de. Así, `C` permanece privado de sólo `B`.

### Conflictos de nombre

Cuando dos argumentos o variables en los ámbitos de un cierre tienen el mismo nombre, existe un conflicto de nombres("_name conflict_"). Más alcances internos tienen prioridad, por lo que el alcance más interno tiene la más alta precedencia, mientras que el alcance más externo toma el más bajo. Esta es la cadena de alcance. El primero en la cadena es el alcance más interno, y el último es el alcance más exterior. Considera lo siguiente:

```js
function fuerade() {
  var x = 10;
  function dentro(x) {
    return x;
  }
  return dentro;
}
resultado = fuerade()(20); // retorna 20 en lugar de 10
```

El conflicto de nombres ocurre en la sentencia `return x` y está entre el parámetro `x` de la función `dentro` y la variable `x` de la función `fuerade`. La cadena de alcance aquí es {`dentro`, `fuerade`, global object}. Por lo tanto, la `x` de `dentro` tiene precedentes sobre la `x` de `fuerade`, y 20 (`dentro` de `x`) se devuelve en lugar de 10 (`fuerade` de `x`).

## Constructor vs declaración vs expresión

Diferencias entre la función constructora `Function`, la de declaración y la de expresión.

Compare lo siguiente:

1. Una función definida con el constructor `Function` asignado a la variable `multiply`

   ```js
   var multiply = new Function("x", "y", "return x * y;");
   ```

2. Una declaración de una función denominada `multiply`

   ```js
   function multiply(x, y) {
     return x * y;
   }
   ```

3. Una expresión de función anónima asignada a la variable `multiply`

   ```js
   var multiply = function (x, y) {
     return x * y;
   };
   ```

4. Una declaración de una función denominada `func_name` asignada a la variable `multiply`

   ```js
   var multiply = function func_name(x, y) {
     return x * y;
   };
   ```

Todos hacen aproximadamente la misma cosa, con algunas diferencias sutiles:

- Existe una distinción entre el nombre de la función y la variable a la que se asigna la función:
  - El nombre de la función no se puede cambiar, mientras que la variable a la que se asigna la función puede ser reasignada.
  - El nombre de la función sólo se puede utilizar en el cuerpo de la función. Intentar utilizarlo fuera del cuerpo de la función da como resultado un error (o `undefined` si el nombre de la función se declaró previamente mediante una instrucción `var`). Por ejemplo:

    ```js
    var y = function x() {};
    alert(x); // arroja un error
    ```

    El nombre de la función también aparece cuando la función se serializa vía el método de la `Function` 'toString'.

    Por otro lado, la variable a la que se asigna la función está limitada sólo por su ámbito, que está garantizado para incluir el ámbito en el que se declara la función.

  - Como muestra el ejemplo 4, el nombre de la función puede ser diferente de la variable a la que se asigna la función. No tienen relación entre sí.

- Una declaración de función también crea una variable con el mismo nombre que el nombre de la función. Por lo tanto, a diferencia de las definidas por las expresiones de función, las funciones definidas por las declaraciones de función se puede acceder por su nombre en el ámbito que se definieron en:

  ```js
  function x() {}
  alert(x); // salida x serializado en un string
  ```

  El siguiente ejemplo muestra cómo los nombres de las funciones no están relacionados con las variables a las que están asignadas las funciones. Si una "variable de función" se asigna a otro valor, seguirá teniendo el mismo nombre de función:

  ```js
  function foo() {}
  alert(foo); // el string alterado contiene el nombre
  // de la función "foo"
  var bar = foo;
  alert(bar); // el string todavía contiene el nombre
  // de la función "foo"
  ```

- Una función definida por un `Function` no tiene un nombre de función. Sin embargo, en el [SpiderMonkey](/es/docs/Mozilla/Projetos/SpiderMonkey) en el motor de JavaScript, la forma serializada de la función muestra como si tuviera el nombre "anónimo"("anonymous"). Por ejemplo, `alert(new Function())` salida:

  ```js
  function anonymous() {}
  ```

  Dado que la función en realidad no tiene un nombre, `anonymous` no es una variable que se puede acceder dentro de la función. Por ejemplo, lo siguiente resultaría en un error:

  ```js
  var foo = new Function("alert(anonymous);");
  foo();
  ```

- A diferencia de las funciones definidas por expresiones de función o constructores `Function` se puede utilizar una función definida por una declaración de función antes de la propia declaración de la función. Por ejemplo:

  ```js
  foo(); // alerts FOO!
  function foo() {
    alert("FOO!");
  }
  ```

- Una función definida por una expresión de función hereda el ámbito actual. Es decir, la función forma un cierre. Por otro lado, una función definida por un constructor de `Function` no hereda ningún ámbito que no sea el ámbito global (que todas las funciones heredan).
- Las funciones definidas por expresiones de función y declaraciones de función son analizadas una sola vez, mientras que las definidas por el constructor de `Function` no lo son. Es decir, la cadena de cuerpo de función pasada al constructor de `Function` debe ser analizada cada vez que se evalúa. Aunque una expresión de función crea un cierre cada vez, el cuerpo de la función no es reparsed, por lo que las expresiones de función son aún más rápido que "`new Function(...)`". Por lo tanto, el constructor de la `Function` debe evitarse siempre que sea posible.

Una declaración de función es muy fácilmente (ya menudo involuntariamente) convertida en una expresión de función. Una declaración de función deja de ser una cuando:

- Se convierte en parte de una expresión
- Ya no es un "elemento fuente" de una función o el propio script. Un "elemento de origen" es una sentencia no anidada en el script o un cuerpo de función:

  ```js
  var x = 0; // elemento fuente
  if (x == 0) {
    // elemento fuente
    x = 10; // no es un elemento fuente
    function boo() {} // no es un elemento fuente
  }
  function foo() {
    // elemento fuente
    var y = 20; // elemento fuente
    function bar() {} // elemento fuente
    while (y == 10) {
      // elemento fuente
      function blah() {} // no es un elemento fuente
      y++; // no es un elemento fuente
    }
  }
  ```

Ejemplos:

- ```js
  // function declaración
  function foo() {}

  // expresión de una función
  (function bar() {});

  // expresión de una función
  x = function hello() {};
  ```

- ```js
  if (x) {
    // expresión de la función
    function world() {}
  }
  ```

- ```js
  // instrucción de la función
  function a() {
    // instrucción de la función
    function b() {}
    if (0) {
      // expresión de la función
      function c() {}
    }
  }
  ```

### Definición condicional de una función

Las funciones se pueden definir de forma condicional utilizando expresiones de función o el constructor `Function`.

En la siguiente secuencia de comandos, la función `zero` nunca se define y no se puede invocar, porque '`if (0)`' se evalúa como false:

```js
if (0)
  function zero() {
    document.writeln("Esto es zero.");
  }
```

Si se cambia el script para que la condición se convierta en '`if (1)`', se define la función `zero`.

> [!NOTE]
> Aunque esto parece una declaración de función, ésta es en realidad una expresión de función ya que está anidada dentro de otra instrucción. Ver [las diferencias entre las funciones de declaración y de expresión](#constructor_versus_declaration_versus_expression).

> [!NOTE]
> Algunos motores JavaScript, sin incluir [SpiderMonkey](/es/docs/Mozilla/Projetos/SpiderMonkey), tratan incorrectamente cualquier expresión de función con un nombre como una declaración de función. Esto llevaría a que se definiera `zero` incluso con el siempre-falso("_always-false_") condicional. Una manera más segura de definir funciones condicionalmente es definir la función anónimamente y asignarla a una variable:

```js
if (0)
  var zero = function () {
    document.writeln("Esto es zero.");
  };
```

## Funciones como manejadores de eventos

En JavaScript, los controladores de eventos [DOM](/es/docs/Web/API/Document_Object_Model) son funciones (en oposición a los objetos que contienen un método `handleEvent` en otros enlaces de idioma DOM). Las funciones se pasan un objeto de [evento](/es/docs/Web/API/Event) como el primer y único parámetro. Como cualquier otro parámetro, si el objeto de evento no necesita ser utilizado, puede omitirse en la lista de parámetros formales.

Los posibles objetivos de eventos en un documento [HTML](/es/docs/Web/HTML) incluyen: `window` (`Window` objects("objeto de ventana"), including frames("marcos")), `document` (`HTMLDocument` objects("objetos HTMLDocument")), y elementos (`Element` objects("objetos Elemento")). En el [HTML DOM](https://www.w3.org/TR/DOM-Level-2-HTML/), los destinos de evento tienen propiedades de controlador de eventos. Estas propiedades son nombres de eventos en minúsculas con prefijo "on", e.g. `onfocus`. Los eventos [DOM Level 2 Events](https://www.w3.org/TR/DOM-Level-2-Events/) proporcionan una forma alternativa y más sólida de agregar oyentes de eventos.

> [!NOTE]
> Los eventos son parte del DOM, no de JavaScript. (JavaScript simplemente proporciona un enlace al DOM.)

El ejemplo siguiente asigna una función a un manejador de eventos de "foco"("focus") de ventana.

```js
window.onfocus = function () {
  document.body.style.backgroundColor = "white";
};
```

Si se asigna una función a una variable, puede asignar la variable a un controlador de eventos. El siguiente código asigna una función a la variable `setBGColor`.

```js
var setBGColor = new Function("document.body.style.backgroundColor = 'white';");
```

Puede utilizar esta variable para asignar una función a un controlador de eventos de varias maneras. Aquí hay dos formas:

1. Escritura con propiedades de evento DOM HTML

   ```js
   document.form1.colorButton.onclick = setBGColor;
   ```

2. Atributo de evento HTML

   ```html
   <input
     name="colorBoton"
     type="button"
     value="Cambia color de fondo"
     onclick="setBGColor();" />
   ```

   Un manejador de eventos establecido de esta manera es en realidad una función, denominada después del atributo, envuelta alrededor del código especificado. Esta es la razón por la que los paréntesis en "`setBGColor()`" son necesarios aquí (en lugar de sólo "`setBGColor`").

Es equivalente a:

```js
document.form1.colorButton.onclick = function onclick(event) {
  setBGColor();
};
```

Observe cómo se pasa el objeto de evento a esta función anónima como `event` de parámetro. Esto permite que el código especificado utilice el objeto Evento("Event object)":

```html
<input ... onclick="alert(event.target.tagName);" />
```

Al igual que cualquier otra propiedad que se refiere a una función, el controlador de eventos puede actuar como un método, y `this` se refiere al elemento que contiene el controlador de eventos. En el ejemplo siguiente, se llama a la función referida por `onfocus` con `this` igual a `window`.

```js
window.onfocus();
```

Un error común de principiante de JavaScript es el añadir paréntesis y / o parámetros al final de la variable, es decir, llamar al manejador de eventos cuando lo asigna. La adición de estos paréntesis asignará el _valor devuelto al llamar al manejador de eventos_, que a menudo es `undefined` (si la función no devuelve nada), en lugar del controlador de eventos en sí:

```js
document.form1.button1.onclick = setBGColor();
```

Para pasar parámetros a un manejador de eventos, el manejador debe ser envuelto en otra función de la siguiente manera:

```js
document.form1.button1.onclick = function () {
  setBGColor("Algun valor");
};
```

### Compatibilidad con versiones anteriores

#### JavaScript 1.1 y anteriores

No puede anidar una sentencia de función en otra instrucción o en sí misma.

### Variables locales dentro de las funciones

[arguments](/es/Referencia_de_JavaScript_1.5/Funciones/arguments): Objeto similar a una matriz que contiene los argumentos pasados a la función en ejecución.

[arguments.callee](/es/Referencia_de_JavaScript_1.5/Funciones/arguments/callee): Especifica la función en ejecución.

[arguments.caller](/es/Referencia_de_JavaScript_1.5/Funciones/arguments/caller): Especifica la función que invocó la función en ejecución.

[arguments.length](/es/Referencia_de_JavaScript_1.5/Funciones/arguments/length): Especifica el número de argumentos pasados a la función.

### Ejemplos

#### 1) Devolver un número con formato

La siguiente función devuelve una cadena que contiene la representación formateada de un número rellenado con ceros a la izquierda.

```js
// Esta función devuelve una cadena rellenada con ceros a la izquierda

function padZeros(num, totalLen) {
  let numStr = num.toString(); // Inicializa un valor de retorno como cadena
  let numZeros = totalLen - numStr.length; // Calcula el no. de ceros
  for (let i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
}
```

Las siguientes sentencias llaman a la función padZeros.

```js
var resultado;
resultado = padZeros(42, 4); // retorna "0042"
resultado = padZeros(42, 2); // retorna "42"
resultado = padZeros(5, 4); // retorna "0005"
```

#### 2) Determinar si existe una función

Puede determinar si existe una función utilizando el operador `typeof`. En el ejemplo siguiente, se realiza una prueba para determinar si el objeto `window` tiene una propiedad llamada `noFunc` que es una función. Si es así, se utiliza; de lo contrario, se tomarán otras medidas.

```js
if ("function" == typeof window.noFunc) {
  // utiliza noFunc()
} else {
  // hacer algo mas
}
```

> [!NOTE]
> Tenga en cuenta que en la prueba `if`, e utiliza una referencia a `noFunc` aquí no hay paréntesis "()" después del nombre de la función para que la función real no se llame.

### Ver también

[Function](/es/Referencia_de_JavaScript_1.5/Objetos_globales/Function), [sentencia function](/es/Referencia_de_JavaScript_1.5/Sentencias/function), [operador function](/es/Referencia_de_JavaScript_1.5/Operadores/Operadores_globales/function)


--- SUBTEMA: method_definitions ---


{{JsSidebar("Functions")}}A partir de ECMAScript 2015 (ES6), se introdujo una sintaxis abreviada para la definición de métodos en inicializadores de objetos. Es una forma abreviada para la asignación de una función al nombre del método.

## Sintaxis

```
var obj = {
  property( parameters… ) {},
  *generator( parameters… ) {},
// also with computed keys:
  [property]( parameters… ) {},
  *[generator]( parameters… ) {},
// compare ES5 getter/setter syntax:
  get property() {},
  set property(value) {}
};
```

## Descripción

La sintaxis abreviada es similar a la introducida en ECMAScript 5 con [getter](/es/docs/Web/JavaScript/Reference/Functions/get) y [setter](/es/docs/Web/JavaScript/Reference/Functions/set).

Dado el siguiente código:

```js
var obj = {
  foo: function () {},
  bar: function () {},
};
```

Ahora se puede abreviar esto mismo como:

```js
var obj = {
  foo() {},
  bar() {},
};
```

> [!NOTE]
> La sintaxis abreviada usa funciones con nombre en lugar de funciones anónimas (como en … `foo: function() {}`…). Las funciones con nombre pueden ser llamadas desde el cuerpo de la función (esto es imposible con funciones anónimas, ya que no existe un identificador al que referirse). Para más detalles, ver {{jsxref("Operators/function","function","#Examples")}}.

### Abreviatura de métodos generadores

Los [métodos generadores](/es/docs/Web/JavaScript/Reference/Statements/function*) también pueden definirse usando la sintaxis abreviada. Note que el asterisco (\*) en la sintaxis abreviada debe estar antes del nombre de propiedad del generador. Esto es, `* g(){}` funcionará, pero `g *(){}` no.

```
// Usando una propiedad con nombre (pre-ES6)
var obj2 = {
  g: function*() {
    var index = 0;
    while(true)
      yield index++;
  }
};

// El mismo objeto, usando la sintaxis abreviada
var obj2 = {
  * g() {
    var index = 0;
    while(true)
      yield index++;
  }
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
```

### Las definiciones de métodos no son constructores (instanciables con new)

Las las definiciones de métodos no son constructores y generarán un {{jsxref("TypeError")}} si intenta instanciarlos.

```js example-bad
var obj = {
  method() {},
};
new obj.method(); // TypeError: obj.method no es un constructor

var obj = {
  *g() {},
};
new obj.g(); // TypeError: obj.g no es un constructor (cambiado en ES2016)
```

## Ejemplos

### Caso de prueba simple

```
var obj = {
  a : "foo",
  b(){ return this.a; }
};
console.log(obj.b()); // "foo"
```

### Nombres de propiedad computados

La sintaxis abreviada también soporta nombres de propiedades computados.

```
var bar = {
  foo0 : function (){return 0;},
  foo1(){return 1;},
  ["foo" + 2](){return 2;},
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [`get`](/es/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/es/docs/Web/JavaScript/Reference/Functions/set)
- [Lexica grammatical](/es/docs/Web/JavaScript/Reference/Lexical_grammar)


--- SUBTEMA: rest_parameters ---


{{jsSidebar("Functions")}}

La sintaxis de los **parámetros rest** nos permiten representar un número indefinido de argumentos como un array.

{{InteractiveExample("JavaScript Demo: Functions Rest Parameters")}}

```js interactive-example
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10
```

## Sintaxis

```js
function(a, b, ...theArgs) {
  // ...
}
```

## Descripción

El último parámetro de una función se puede prefijar con `...`, lo que hará que todos los argumentos restantes (suministrados por el usuario) se coloquen dentro de un array de javascript "estándar".

Sólo el último parámetro puede ser un "parámetro rest".

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
```

### Diferencia entre los parámetros rest y el objeto `arguments`

Hay tres principales diferencias entre los parámetros rest y el objeto [`arguments`](/es/docs/Web/JavaScript/Reference/Functions/arguments):

- los parámetros rest son sólo aquellos a los que no se les ha asignado un nombre, mientras que el objeto `arguments` contiene todos los argumentos que se le han pasado a la función;
- el objeto `arguments` no es un array real, mientras que los parámetros rest son instancias de [`Array`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array) , lo que significa que lo los métodos como [`sort`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [`map`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`forEach`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) o [`pop`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) pueden aplicarse directamente;
- el objeto `arguments` tiene una funcionalidad adicional específica para sí mismo (como la propiedad `callee`).

### De argumentos a array

Los parámetros rest han sido agregados para reducir el código repetitivo que se usaba en los parámetros.

```js
// Antes de los parámetros rest, "arguments" se podía convertir en un array usando:

function f(a, b) {
  let normalArray = Array.prototype.slice.call(arguments);
  // -- o  --
  let normalArray = [].slice.call(arguments);
  // -- o  --
  let normalArray = Array.from(arguments);

  let first = normalArray.shift(); // OK, nos da el primer argumento
  let first = arguments.shift(); // ERROR (arguments no es un array)
}

// Ahora, puedes acceder fácilmente a un array usando un parametro rest.

function f(...args) {
  let normalArray = args;
  let first = normalArray.shift(); // OK, gives the first argument
}
```

### Desestructuración de los parametros rest

Los parámetros rest pueden ser desestructurados, eso significa que sus datos pueden ser desempaquetados dentro de distintas variables. Ver [Destructuring assignment](/es/docs/Web/JavaScript/Reference/Operators/Destructuring).

```js
function f(...[a, b, c]) {
  return a + b + c;
}

f(1); // NaN (b y c son indefinidos)
f(1, 2, 3); // 6
f(1, 2, 3, 4); // 6 (el cuarto parámetro no está desestructurado)
```

## Ejemplos

### Usando parámetros rest

En este ejemplo, el primer argumento es mapeado con 'a' y el segundo con 'b', entonces, esos argumentos nombrados, son usados normalmente

De todas formas, el tercer argumento, `manyMoreArgs`, será un array que contendrá tantos argumentos como el usuario incluya (3er, 4to, 5to ...).

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
```

Debajo... incluso si hay solo un valor, el ultimo argumento seguirá siendo colocado dentro de un array.

```js
// usando la misma definición de función del ejemplo anterior
myFun("one", "two", "three");

// a, one
// b, two
// manyMoreArgs, [three]
```

Debajo, el tercer argumento no esta provisto, pero `manyMoreArgs` continúa siendo un array (aunque uno vacío).

```js
//usando la misma definición de función del ejemplo anterior

myFun("one", "two");

// a, one
// b, two
// manyMoreArgs, []
```

### Argument length

Puesto que `theArgs` es un array, su tamaño (un conteo de sus elementos) es dado por la propiedad `length` :

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

### Ordinary parameter and rest parameters

En el siguiente ejemplo, se usa un parámetro rest para agrupar dentro de un array a todos los argumentos despues del primero. Luego cada uno es multiplicado por el primero y el arreglo es retornado:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

let arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

El siguiente ejemplo muestra que se puede usar los métodos de `Array` en los parámetros rest , pero no en el objeto `arguments`:

```js
function sortRestArgs(...theArgs) {
  var sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // muestra 1,3,5,7

function sortArguments() {
  var sortedArgs = arguments.sort();
  return sortedArgs; // esto nunca va a ocurrir
}

// lanza un TypeError: arguments.sort is not a function
console.log(sortArguments(5, 3, 7, 1));
```

Para poder usar los métodos de `Array` en el objeto `arguments`, se debe convertir a un `Array` primero.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Spread Operator](/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Arguments object](/es/docs/Web/JavaScript/Reference/Functions/arguments)
- [Array](/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Functions](/es/docs/Web/JavaScript/Reference/Functions)
- [Original proposal at ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters)
- [JavaScript arguments object and beyond](https://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/)
- [Destructuring assignment](/es/docs/Web/JavaScript/Reference/Operators/Destructuring)


--- SUBTEMA: set ---


{{jsSidebar("Funciones")}}

La sintaxis **`set`** asocia la propiedad de un objeto a una función que será llamada cuando haya un intento de asignar valor a esa propiedad.

## Sintaxis

```
{set prop(val) { . . . }}
{set [expression](val) { . . . }}
```

### Parámetros

- _`prop`_
  - : El nombre de la propiedad a asociar con la función dada.

- _`val`_
  - : Un alias para la variable que contiene el valor a asignar a la propiedad.
- _`expression`_
  - : A partir de ECMAScript 2015, se puede también usar expresiones para nombres de propiedades computados para asociar a la función dada.

## Descripción

En JavaScript, un setter puede ser usado para ejecutar una función donde sea que una propiedad se intente cambiar. Los setters son regularmente usados en conjunto con getters para crear un tipo de pseudo-propiedad. No es posible tener simultáneamente un setter en una propiedad que ya tiene un valor.

Tenga en cuenta lo siguiente al trabajar con setters:

- Puede tener un identificador ya sea number o string;
- Debe tener exactamente un parámentro (ver [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) para más información);
- No debe aparecer en un objeto de notación literal con otro `set` o con otra entrada de datos con la misma propiedad.
  ( `{ set x(v) { }, set x(v) { } }` y `{ x: ..., set x(v) { } }` están prohibidos )

## Ejemplos

### Definiendo un setter en el inicializador de nuevos objetos

En el siguiente ejemplo definimos una pseudo-propiedad `actual` al objeto `lenguaje`. Cuando se le asigne un valor a `actual`, actualiza `log` con ese valor:

```js
var lenguaje = {
  set actual(mensaje) {
    this.log.push(mensaje);
  },
  log: [],
};
lenguaje.actual = "ES";
console.log(lenguaje.log); // ['ES']

lenguaje.actual = "FR";
console.log(lenguaje.log); // ['ES', 'FR']
```

Note que `actual` no está definido y cualquier intento de accederlo devolverá `undefined`.

### Eliminando un setter con el operador `delete`

Si desea eliminar el setter, puede simplemente aplicar [`delete`](/es/docs/Web/JavaScript/Reference/Operators/delete) en él:

```js
delete lenguaje.actual;
```

### Definiendo un setter en un objecto existente usando `defineProperty`

Para añadir un setter a un objeto _existente_, use {{jsxref("Object.defineProperty()")}}

```js
const o = { a: 0 };

Object.defineProperty(o, "b", {
  set: function (x) {
    this.a = x / 2;
  },
});

o.b = 10; // Ejecuta el setter, el cual asigna 10 / 2 (5) a la propiedad 'a'
console.log(o.a); // 5
```

### Usando un nombre de propiedad computado

> [!NOTE]
> Propiedades computadas son 'experimental technology'_,_ parte de la propuesta para ECMAScript 6, y no está soportado en todos los navegadores. Dará error de sintaxis en entornos no soportados.

```js
const expr = "foo";

var obj = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  },
};

console.log(obj.baz); // "bar"
obj.foo = "baz"; // ejecuta el setter
console.log(obj.baz); // "baz"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [getter](/es/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__defineGetter__()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [Definiendo Getters y Setters](/es/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters) en la Guía JavaScript


# TEMA: REFERENCE/CLASSES



--- SUBTEMA: constructor ---


{{jsSidebar("Classes")}}

El método constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.

## Sintaxis

```
constructor([argumentos]) { ... }
```

## Descripción

Sólo puede haber un método especial con el nombre de "constructor" en una clase. Un error de sintaxis será lanzado, si la clase contiene más de una ocurrencia de un método constructor.

Un constructor puede utilizar la palabra clave super para llamar al constructor de una clase padre.

Si no especifica un método constructor, se utiliza un constructor predeterminado.

## Ejemplos

### Usando el método constructor

Este fragmento de código se toma de la [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([live demo](https://googlechrome.github.io/samples/classes-es6/index.html)).

```js
class Square extends Polygon {
  constructor(length) {
    // Aquí, llama al constructor de la clase padre con sus longitudes
    // contemplando la anchura y la altura del Polígono
    super(length, length);
    // Nota: En las clases derivadas, super() se debe llamar primero
    // Se puede utilizar "this". Dejando esto causará un error de
    //referencia.
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}
```

### Constructores por defecto

Si no especifica un método constructor, se utiliza un constructor predeterminado. Para las clases base, el constructor por defecto es:

```js
constructor() {}
```

Para las clases derivadas, el constructor por defecto es:

```js
constructor(...args) {
  super(...args);
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [super()](/es/docs/Web/JavaScript/Reference/Operators/super)
- [`class` expression](/es/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/es/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/es/docs/Web/JavaScript/Reference/Classes)


--- SUBTEMA: extends ---


{{jsSidebar("Classes")}}

La palabra clave **extends** es usada en la [declaración](/es/docs/Web/JavaScript/Reference/Statements/class) o [expresión](/es/docs/Web/JavaScript/Reference/Operators/class) de clases, para crear una clase hija de otra.

## Sintaxis

```
class ChildClass extends ParentClass { ... }
```

## Descripción

La palabra clave `extends` se puede usar para crear una subclase a partir de clases personalizadas, así como sus objetos incorporados.

La propiedad `.prototype` de la nueva subclase debe ser un {{jsxref("Object")}} o {{jsxref("null")}}.

## Ejemplos

### Como usar `extends`

El primer ejemplo crea una clase con el nombre `Square` a partir de una clase llamada `Polygon`. Este ejemplo ha sido extraido del siguiente [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(código fuente)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js
class Square extends Polygon {
  constructor(length) {
    // Aquí se invoca el constructor de la clase padre con longitud
    // proporcionada por el ancho y alto de Polygon
    super(length, length);
    // Nota: En las clases extendidas, se debe llamar a super()
    // antes de poder usar 'this'. El no hacerlo provocará un reference error.
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}
```

### Como usar `extends` con objetos incorporados

Este ejemplo extiende el objeto incorporado {{jsxref("Date")}}. Este ejemplo ha sido extraido del siguiente [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(código fuente)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js
class myDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear()
    );
  }
}
```

### Extendiendo de `null`

Extender de {{jsxref("null")}} es como hacerlo de una clase normal, excepto que el objeto prototype no hereda de {{jsxref("Object.prototype")}}.

```js
class nullExtends extends null {
  constructor() {}
}

Object.getPrototypeOf(nullExtends); // Function.prototype
Object.getPrototypeOf(nullExtends.prototype); // null
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Clases](/es/docs/Web/JavaScript/Reference/Classes)
- [super](/es/docs/Web/JavaScript/Reference/Operators/super)


--- SUBTEMA: classes ---


{{JsSidebar("Classes")}}

Las clases de javascript, introducidas en ECMAScript 2015, son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases **no** introduce un nuevo modelo de herencia orientada a objetos en JavaScript. Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

## Definiendo clases

Las clases son "[funciones](/es/docs/Web/JavaScript/Reference/Functions) especiales", como las [expresiones de funciones](/es/docs/Web/JavaScript/Reference/Operators/function) y [declaraciones de funciones](/es/docs/Web/JavaScript/Reference/Statements/function), la sintaxis de una clase tiene dos componentes: [expresiones de clases](/es/docs/Web/JavaScript/Reference/Operators/class) y [declaraciones de clases](/es/docs/Web/JavaScript/Reference/Statements/class).

### Declaración de clases

Una manera de definir una clase es mediante una **declaración de clase**_._ Para declarar una clase, se utiliza la palabra reservada `class` y un nombre para la clase "Rectangulo".

```js
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}
```

#### Alojamiento

Una importante diferencia entre las **declaraciones de funciones** y las **declaraciones de clases** es que las **declaraciones de funciones** son alojadas y las **declaraciones de clases** no lo son. En primer lugar necesitas declarar tu clase y luego acceder a ella, de otro modo el ejemplo de código siguiente arrojará un {{jsxref("ReferenceError")}}:

```js example-bad
const p = new Rectangle(); // ReferenceError

class Rectangle {}
```

### Expresiones de clases

Una **expresión de clase** es otra manera de definir una clase. Las expresiones de clase pueden ser nombradas o anónimas. El nombre dado a la **expresión de clase** nombrada es local dentro del cuerpo de la misma.

```
// Anonima
let Rectangulo = class {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};

console.log(Rectangulo.name);
// output: "Rectangulo"

// Nombrada
let Rectangulo = class Rectangulo2 {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};
console.log(Rectangulo.name);
// output: "Rectangulo2"
```

> [!NOTE]
> Las **expresiones** de clase están sujetas a las mismas restricciones de elevación que se describen en la sección [Class declarations](#class_declarations).

## Cuerpo de la clase y definición de métodos

El contenido de una **clase** es la parte que se encuentra entre las llaves `{}`. Este es el lugar se definen los **miembros de clase,** como los **métodos** o **constructores.**

### Modo estricto

El cuerpo de las _declaraciones de clase_ y las _expresiones de clase_ son ejecutadas en [modo estricto.](/es/docs/Web/JavaScript/Reference/Strict_mode) En otras palabras, el código escrito aquí está sujeto a una sintaxis más estricta para aumentar el rendimiento, se arrojarán algunos errores silenciosos y algunas palabras clave están reservadas para versiones futuras de ECMAScript.

### Constructor

El método [`constructor`](/es/docs/Web/JavaScript/Reference/Classes/constructor) es un método especial para crear e inicializar un objeto creado con una `clase`. Solo puede haber un método especial con el nombre "constructor" en una clase. Si esta contiene mas de una ocurrencia del método **`constructor`**, se arrojará un _Error_ {{jsxref("SyntaxError")}}

Un **constructor** puede usar la _palabra reservada_ **`super`** para llamar al **constructor** de una _superclase_

### Métodos prototipo

Vea también [métodos definidos](/es/docs/Web/JavaScript/Reference/Functions/Method_definitions).

```js
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Método
  calcArea() {
    return this.alto * this.ancho;
  }
}

const cuadrado = new Rectangulo(10, 10);

console.log(cuadrado.area); // 100
```

### Métodos estáticos

La _palabra clave_ [`static`](/es/docs/Web/JavaScript/Reference/Classes/static) define un método estático para una clase. Los métodos estáticos son llamados sin instanciar su clase y **no** pueden ser llamados mediante una instancia de clase. Los métodos estáticos son a menudo usados para crear funciones de utilidad para una aplicación.

```js
class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distancia(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Punto(5, 5);
const p2 = new Punto(10, 10);

console.log(Punto.distancia(p1, p2)); // 7.0710678118654755
```

### "Boxing" con prototipos y métodos estáticos

Cuando un método estático o método del prototipo es llamado sin un valor para "this" (o con "this" como booleano, cadena, número, undefined o null), entonces el valor de "this" será **undefined** dentro de la funciona llamada. _Autoboxing_ no ocurrirá. El comportamiento será igual inclusive si se escribe el código en modo no estricto.

```
class Animal {
  hablar() {
    return this;
  }
  static comer() {
    return this;
  }
}

let obj = new Animal();
obj.hablar(); // Animal {}
let hablar = obj.hablar;
hablar(); // undefined

Animal.comer() // class Animal
let comer = Animal.comer;
comer(); // undefined
```

Si se escribe el código del cuadro superior usando clases función tradicionales, entonces autoboxing ocurrirara porque tomará valor de "this" sobre la función que es llamada.

```
function Animal() { }

Animal.prototype.hablar = function(){
  return this;
}

Animal.comer = function() {
  return this;
}

let obj = new Animal();
let hablar = obj.hablar;
hablar(); // global object

let hablar = Animal.hablar;
hablar(); // global object
```

## Subclases con `extends`

La palabra clave [`extends`](/es/docs/Web/JavaScript/Reference/Classes/extends) es usada en _declaraciones de clase_ o _expresiones de clase_ para crear una clase hija.

```js
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + " hace un ruido.");
  }
}

class Perro extends Animal {
  hablar() {
    console.log(this.nombre + " ladra.");
  }
}
```

También se pueden extender las clases tradicionales basadas en funciones:

```js
function Animal(nombre) {
  this.nombre = nombre;
}
Animal.prototype.hablar = function () {
  console.log(this.nombre + "hace un ruido.");
};

class Perro extends Animal {
  hablar() {
    super.hablar();
    console.log(this.nombre + " ladra.");
  }
}

var p = new Perro("Mitzie");
p.hablar();
```

Fijarse que las clases no pueden extender objectos regulares (literales). Si se quiere heredar de un objecto regular, se debe user {{jsxref("Object.setPrototypeOf()")}}::

```
var Animal = {
  hablar() {
    console.log(this.nombre + ' hace ruido.');
  },
  comer() {
    console.log(this.nombre + ' se alimenta.');
  }
};

class Perro {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hablar() {
    console.log(this.nombre + ' ladra.');
  }
}

// Solo adjunta los métodos aún no definidos
Object.setPrototypeOf(Perro.prototype, Animal);

var d = new Perro('Mitzie');
d.hablar(); // Mitzie ladra.
d.comer(); // Mitzie se alimenta.
```

## Especies

Quizás se quiera devolver objetos {{jsxref("Array")}} derivados de la clase array MyArray. El patron _species_ permite sobreescribir constructores por defecto.

Por ejemplo, cuando se usan metodos del tipo {{jsxref("Array.map", "map()")}} que devuelven el constructor por defecto, se quiere que esos métodos devuelvan un objeto padre Array, en vez de MyArray. El símbolo {{jsxref("Symbol.species")}} permite hacer:

```js
class MyArray extends Array {
  // Sobreescribe species sobre el constructor padre Array
  static get [Symbol.species]() {
    return Array;
  }
}

var a = new MyArray(1, 2, 3);
var mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## Llamadas a súperclases con `super`

La palabra clave [`super`](/es/docs/Web/JavaScript/Reference/Operators/super) es usada para llamar funciones del objeto padre.

```
class Gato {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + ' hace ruido.');
  }
}

class Leon extends Gato {
  hablar() {
    super.hablar();
    console.log(this.nombre + ' maulla.');
  }
}
```

## Mix-ins

Subclases abstractas or _mix-ins_ son plantillas de clases. Una clase ECMAScript solo puede tener una clase padre, con lo cual la herencia multiple no es posible. La funcionalidad debe ser proporcionada por la clase padre.

Una función con una clase padre como entrada y una subclase extendiendo la clase padre como salida puede ser usado para implementar mix-ins en EMCAScript:

```js
var calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

var randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };
```

Una clase que use este método puede ser escrita tal que así:

```js
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Funciones](/es/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/class", "class declaration")}}
- {{jsxref("Operators/class", "class expression")}}
- {{jsxref("Operators/super", "super")}}


--- SUBTEMA: private_elements ---


{{jsSidebar("Classes")}}

Las propiedades de la clase son públicas de forma predeterminada y se pueden examinar o modificar fuera de la clase. Sin embargo, existe [una propuesta experimental](https://github.com/tc39/proposal-class-fields) para permitir la definición de campos de clase privados utilizando un `#` prefijo hash .

## Syntax

```js
class ClassWithPrivateField {
  #privateField;
}

class ClassWithPrivateMethod {
  #privateMethod() {
    return "hello world";
  }
}

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;
}
```

### Campos estáticos privados

Los campos privados son accesibles en el constructor de clases desde dentro de la propia declaración de clases.

La limitación de las variables estáticas que se llaman solo por métodos estáticos aún se mantiene

```js
class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
  }
}

console.assert(ClassWithPrivateStaticField.publicStaticMethod() === 42);
```

Los campos estáticos privados se agregan al constructor de la clase en el momento de la evaluación de la clase.

Existe una restricción de procedencia en los campos estáticos privados. Solo la clase que define el campo estático privado puede acceder al campo.

Esto puede conducir a un comportamiento inesperado al usar **`this`**.

```js
class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42;
    return this.#PRIVATE_STATIC_FIELD;
  }
}

class SubClass extends BaseClassWithPrivateStaticField {}

let error = null;

try {
  SubClass.basePublicStaticMethod();
} catch (e) {
  error = e;
}

console.assert(error instanceof TypeError);
```

### Campos de instancia privados

Los campos de instancia privados se declaran con **# nombres** (pronunciados " _nombres hash_ "), que son identificadores con el prefijo `#`. El `#` es una parte del nombre propio. También se utiliza para la declaración y el acceso.

La encapsulación es impuesta por el lenguaje. Es un error de sintaxis referirse a `#` nombres que están fuera del alcance.

```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
    this.#randomField = 666; // Syntax error
  }
}

const instance = new ClassWithPrivateField();
instance.#privateField === 42; // Syntax error
```

### Métodos privados

#### Métodos estáticos privados

Al igual que su equivalente público, los métodos estáticos privados se invocan en la propia clase, no en instancias de la clase. Al igual que los campos estáticos privados, solo se puede acceder a ellos desde dentro de la declaración de clase.

Los métodos estáticos privados pueden ser funciones generadoras, asíncronas y asíncronas.

```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod1() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }

  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

console.assert(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42);
console.assert(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42);
```

Esto puede conducir a un comportamiento inesperado al usar **`this`**. En el siguiente ejemplo se `this` hace referencia a la `Derived` clase (no a la `Base` clase) cuando intentamos llamar `Derived.publicStaticMethod2()`, y por lo tanto exhibe la misma "restricción de procedencia" que se mencionó anteriormente:

```js
class Base {
  static #privateStaticMethod() {
    return 42;
  }
  static publicStaticMethod1() {
    return Base.#privateStaticMethod();
  }
  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

class Derived extends Base {}

console.log(Derived.publicStaticMethod1()); // 42
console.log(Derived.publicStaticMethod2()); // TypeError
```

#### Métodos de instancia privada

Los métodos de instancia privada son métodos disponibles en instancias de clase cuyo acceso está restringido de la misma manera que los campos de instancia privada.

```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return "hello world";
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());
// expected output: "hello world"
```

Los métodos de instancia privada pueden ser funciones generadoras, asíncronas o asíncronas. Los getters y setters privados también son posibles:

```js
class ClassWithPrivateAccessor {
  #message;

  get #decoratedMessage() {
    return `✨${this.#message}✨`;
  }
  set #decoratedMessage(msg) {
    this.#message = msg;
  }

  constructor() {
    this.#decoratedMessage = "hello world";
    console.log(this.#decoratedMessage);
  }
}

new ClassWithPrivateAccessor();
// expected output: "✨hello world✨"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Public class fields](/es/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)


--- SUBTEMA: public_class_fields ---


{{JsSidebar("Classes")}}

> [!NOTE]
> Las declaraciones de campos públicos y privados son una [característica experimental (en estado 3)](https://github.com/tc39/proposal-class-fields) propuesta por el [TC39](https://tc39.github.io/beta/), el comite de estandares de JavaScript. El soporte y funcionamiento en navegadores es limitado, pero la funcionalidad puede ser usada a través de un paso durante el proceso del build por medio de sistemas como [Babel](https://babeljs.io/). Revise [compat information](#browser_compatibility) mas abajo.

Los campos públicos y estáticos son propieades editables, enumerables, y configurables. A diferencia de su contraparte privada, estos participan en la herencia de prototipo.

## Sintaxis

```js
class ClassWithInstanceField {
  instanceField = "instance field";
}

class ClassWithStaticField {
  static staticField = "static field";
}

class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
}
```

## Ejemplos

### Campos públicos estáticos

Los campos estáticos públicos son útiles cuando desea que exista un campo solo una vez por clase, no en cada instancia de clase que cree. Esto es útil para cachés, configuración fija o cualquier otro dato que no necesite replicarse en todas las instancias.

Los campos estáticos públicos se declaran utilizando la palabra clave `static`. Se agregan al constructor de la clase en el momento de la evaluación de la clase utilizando {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}}. Se accede nuevamente desde el constructor de la clase.

```js
class ClassWithStaticField {
  static staticField = "static field";
}

console.log(ClassWithStaticField.staticField);
// expected output: "static field"
```

Campos sin inicializadores son inicializados como `undefined`.

```js
class ClassWithStaticField {
  static staticField;
}

console.assert(ClassWithStaticField.hasOwnProperty("staticField"));
console.log(ClassWithStaticField.staticField);
// expected output: "undefined"
```

Los campos estáticos públicos no se reinicializan en las subclases, pero se puede acceder a ellos a través de la cadena de prototipo.

```js
class ClassWithStaticField {
  static baseStaticField = "base field";
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = "sub class field";
}

console.log(SubClassWithStaticField.subStaticField);
// expected output: "sub class field"

console.log(SubClassWithStaticField.baseStaticField);
// expected output: "base field"
```

Cuando se inicializasn campos `this` se refiere al constuctor de clase. Tambien puede ser referenciado por nombre, y se puede usar `super` para obtener el constructor de la superclase si lo tiene.

```js
class ClassWithStaticField {
  static baseStaticField = "base static field";
  static anotherBaseStaticField = this.baseStaticField;

  static baseStaticMethod() {
    return "base static method output";
  }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod();
}

console.log(ClassWithStaticField.anotherBaseStaticField);
// expected output: "base static field"

console.log(SubClassWithStaticField.subStaticField);
// expected output: "base static method output"
```

### Campos de instancia públicos

Los campos de instancia públicos existen en cada instancia de la clase que se ha creado. Al declarar un campo publico podemos asegurarnos que dicho campo siempre esta presente, y la definicion de la clase esta auto-documentada.

Los campos de instancia públicos son agregados with [Object.defineProperty](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) ya sea a la hora de ser construido en la clase base (antes que el metodo constructor corra), o justo despues que `super()` returne en una subclase.

```js
class ClassWithInstanceField {
  instanceField = "instance field";
}

const instance = new ClassWithInstanceField();
console.log(instance.instanceField);
// expected output: "instance field"
```

Campos sin inicializadores son inicilizados en `undefined`.

```js
class ClassWithInstanceField {
  instanceField;
}

const instance = new ClassWithInstanceField();
console.assert(instance.hasOwnProperty("instanceField"));
console.log(instance.instanceField);
// expected output: "undefined"
```

Al igual que las propiedades, los nombres de campos pueden ser calculados (computed)

```js
const PREFIX = "prefix";

class ClassWithComputedFieldName {
  [`${PREFIX}Field`] = "prefixed field";
}

const instance = new ClassWithComputedFieldName();
console.log(instance.prefixField);
// expected output: "prefixed field"
```

Cuando se inicializan campos `this` se refiere a la instancia de clase que esta siendo construida. Al igual que con los metodos publicos de instancia, si usted esta en una subclase puede acceder a al prototypo de la superclase usando `super`.

```js
class ClassWithInstanceField {
  baseInstanceField = "base field";
  anotherBaseInstanceField = this.baseInstanceField;
  baseInstanceMethod() {
    return "base method output";
  }
}

class SubClassWithInstanceField extends ClassWithInstanceField {
  subInstanceField = super.baseInstanceMethod();
}

const base = new ClassWithInstanceField();
const sub = new SubClassWithInstanceField();

console.log(base.anotherBaseInstanceField);
// expected output: "base field"

console.log(sub.subInstanceField);
// expected output: "base method output"
```

### Métodos públicos

#### Métodos públicos estáticos

La palabra reservada **`static`** define un metodo estático para una clase. Los métodos estáticos no son llamads usando una instancia de la clase. En lugar de eso son llamados sobre la clase como tal. Estos metodos estáticos son frecuentemente funciones utilitarias que permiten por ejemplo la creación y clonacion de objetos.

```js
class ClassWithStaticMethod {
  static staticMethod() {
    return "static method has been called.";
  }
}

console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."
```

Los métodos estáticos son agregados al constructor de la clase usando [Object.defineProperty](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) duranten el evaluación de la clase. Estos metodos son "escribibles" (writable), no-enumerables y configurables.

#### Métodos públicos de instancia

Como su nombre lo indica, los métodos publicos de instancia son metodos que estan disponibles para cualquier instancia de una clase.

```js
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
}

const instance = new ClassWithPublicInstanceMethod();
console.log(instance.publicMethod());
// expected output: "hello world"
```

Los métodos públicos de instancia son agregeados al prototipo de clase durante la evaluacón de la clase usando [Object.defineProperty](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty). Estos metodos son "escribibles" (writable), no-enumerables y configurables.

Usted puede usar un generador, async y funciones generadoras asincronas

```js
class ClassWithFancyMethods {
  *generatorMethod() {}
  async asyncMethod() {}
  async *asyncGeneratorMethod() {}
}
```

Dentro de un metodo de instancia, `this` se referie a la instancia como tal. En las subclases, `super` le permite acceder el prototipo de la superclase, permitiendo así llamar métodos de la superclase.

```js
class BaseClass {
  msg = "hello world";
  basePublicMethod() {
    return this.msg;
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod();
  }
}

const instance = new SubClass();
console.log(instance.subPublicMethod());
// expected output: "hello world"
```

Existen metodos especiales llamados "Getters" y "Setters" que se vinculan a una propiedad de una clase, y que son ejecutados o llamados cuando esa propiedad es consultada o moditficada. Puede usar las palabras reservaddas [get](/es/docs/Web/JavaScript/Reference/Functions/get) y [set](/es/docs/Web/JavaScript/Reference/Functions/set) para declarar una instancia pública de "getter" or "setter". [N.T. preferí decir Getter/Setter que decir Consultadores/Mofificadores]

```js
class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg);
// expected output: "hello world"

instance.msg = "cake";
console.log(instance.msg);
// expected output: "hello cake"
```

## Campos privados

### Campos privados estáticos

Private fields are accessible on the class constructor from inside the class declaration itself.

The limitation of static variables being called by only static methods still holds.

```js
class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
  }
}

assert(ClassWithPrivateStaticField.publicStaticMethod() === 42);
```

Private static fields are added to the class constructor at class evaluation time.

There is a provenance restriction on private static fields. Only the class which defines the private static field can access the field. This can lead to unexpected behaviour when using **`this`**

```js
class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42;
    return this.#PRIVATE_STATIC_FIELD;
  }
}

class SubClass extends BaseClassWithPrivateStaticField {}

assertThrows(() => SubClass.basePublicStaticMethod(), TypeError);
```

### Campos privados de instancia

Private instance fields are declared with **# names** ( pronounced "hash names"), which are identifiers prefixed with #. The # is a part of the name itself and is used for declaration and accessing as well.

The encapsulation is enforced by the language. It is a syntax error to refer to # names not in scope.

```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
    this.#randomField = 666; # Syntax error
  }
}

const instance = new ClassWithPrivateField();
instance.#privateField === 42; // Syntax error
```

## Métodos privados

### Métodos privados estáticos

Like their public equivalent, private static methods are called on the class, not instances of the class. Like private static fields, they are only accessible from inside the class declaration.

Private static methods may be generator, async and async generator functions.

```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }
}

assert(ClassWithPrivateStaticField.publicStaticMethod() === 42);
```

### Métodos privados de instancia

Private instance methods are methods available on class instances whose access is restricted in the same manner as private instance fields.

```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world';
  }

  getPrivateMessage() {
      return #privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());
// expected output: "hello world"
```

Private instance methods may be generator, async or async generator functions. Private getters and setters are also possible:

```js
class ClassWithPrivateAccessor {
  #message;

  get #decoratedMessage() {
    return `✨${this.#message}✨`;
  }
  set #decoratedMessage(msg) {
    this.#message = msg;
  }

  constructor() {
    this.#decoratedMessage = "hello world";
    console.log(this.#decoratedMessage);
  }
}

new ClassWithPrivateAccessor();
// expected output: "✨hello world✨"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)


--- SUBTEMA: static ---


{{jsSidebar("Classes")}}

La palabra clave **static** define un método estático para una clase.

## Sintaxis

```
static methodName() { ... }
```

## Descripción

Los métodos estáticos son llamados sin instanciar su clase. Son habitualmente utilizados para crear funciones para una aplicación.

## Ejemplos

El siguiente ejemplo demuestra varias cosas. Una de ellas es cómo un método estático es implementado en una clase, otra es que una clase con un miembro estático puede ser sub-claseada. Finalmente demuestra cómo un método estático puede (y cómo no) ser llamado.

```js
class Tripple {
  static tripple(n) {
    n = n || 1;
    return n * 3;
  }
}

class BiggerTripple extends Tripple {
  static tripple(n) {
    return super.tripple(n) * super.tripple(n);
  }
}

console.log(Tripple.tripple());
console.log(Tripple.tripple(6));
console.log(BiggerTripple.tripple(3));
var tp = new Tripple();
console.log(tp.tripple()); //Logs 'tp.tripple is not a function'.
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [`class` expression](/es/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/es/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/es/docs/Web/JavaScript/Reference/Classes)
