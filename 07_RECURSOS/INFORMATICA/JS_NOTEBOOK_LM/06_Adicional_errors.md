

# TEMA: REFERENCE/ERRORS



--- SUBTEMA: bad_regexp_flag ---


{{jsSidebar("Errors", "Errores")}}

La excepción de JavaScript "indicador de expresión regular no válido" se produce cuando las indicadores, definidas después de la segunda barra en la expresión regular literal, no son de `g`, `i`, `m`, `s`, `u` o `y`.

## Mensaje

```
SyntaxError: error de sintaxis en la expresión regular (Edge)
SyntaxError: marca de expresión regular no válida "x" (Firefox)
SyntaxError: indicadores de expresión regular no válidos (Chrome)
```

## Tipo `Error`

{{jsxref("SyntaxError")}}

## ¿Qué salió mal?

Hay indicadores de expresión regular no válidos en el código. En una expresión regular literal, que consiste en un patrón encerrado entre barras, los indicadores se definen después de la segunda barra. También se pueden definir en la función constructora del objeto {{jsxref("RegExp")}} (segundo parámetro). Los indicadores de expresión regular se pueden usar por separado o juntos en cualquier orden, pero solo hay seis de ellos en ECMAScript.

Para incluir una bandera con la expresión regular, usa esta sintaxis:

```js
var re = /patrón/indicadores;
```

o

```js
var re = new RegExp("patrón", "indicadores");
```

| Bandera | Descripción                                                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `g`     | Búsqueda global.                                                                                                                                    |
| i       | Búsqueda que no distingue entre mayúsculas y minúsculas.                                                                                            |
| m       | Búsqueda multilínea.                                                                                                                                |
| s       | Permite que el punto (`.`) coincida con las nuevas líneas (agregado en ECMAScript 2018)                                                             |
| u       | Unicode; trata el patrón como una secuencia de puntos de código Unicode                                                                             |
| y       | Realiza una búsqueda "pegajosa" que coincida a partir de la posición actual en la cadena de destino. Consulta {{jsxref("RegExp.sticky", "sticky")}} |

## Ejemplos

Solo hay seis indicadores de expresión regular válidos.

```js example-bad
/foo/bar;

// SyntaxError: indicador de expresión regular no válido "b"
```

¿Tenías la intención de crear una expresión regular? Una expresión que contiene dos barras se interpreta como una expresión regular literal.

```js example-bad
let obj = {
  url: /docs/Web
};

// SyntaxError: indicador de expresión regular no válido "W"
```

¿O pretendías crear una cadena en su lugar? Agrega comillas simples o dobles para crear una cadena literal.

```js example-good
let obj = {
  url: "/docs/Web",
};
```

### Indicadores de expresión regular válidos

Consulta la tabla anterior para ver las seis marcas de expresiones regulares válidas que están permitidas en JavaScript.

```js example-good
/foo/g;
/foo/gims;
/foo/uy;
```

## Ve también

- {{JSxRef("../Guide/Regular_Expressions", "Expresiones regulares")}}
- [Indicadores de RegEx](https://xregexp.com/flags/) – biblioteca de expresiones regulares que proporciona cuatro nuevos indicadores (`n`, `s`, `x`, `A`)


--- SUBTEMA: deprecated_octal_literal ---


{{jsSidebar("Errors")}}

## Mensaje

```
Warning: SyntaxError: 08 is not a legal ECMA-262 octal constant.
Warning: SyntaxError: 09 is not a legal ECMA-262 octal constant.
```

## Tipo de Error

{{jsxref("SyntaxError")}} warning in [strict mode](/es/docs/Web/JavaScript/Reference/Strict_mode) only.

## Que salio mal ?

Los literales decimales pueden comenzar con un cero (0) seguido de otro dígito decimal, pero Si todos los dígitos después del 0 inicial son más pequeños que 8, el número se interpreta como un número octal. Pero este no es el caso con 08 y 09, JavaScript advierte sobre ello.

Tenga en cuenta que las literales octales y las secuencias de escape octal están obsoletas y presentarán una advertencia de depreciación adicional. Con ECMAScript 6 y posteriores, la sintaxis utiliza un cero a la izquierda seguido de una letra latina en minúscula o mayúscula "O" (0o o 0O). Consulte la página sobre gramática léxica para obtener más información.

## Ejemplos

### Numeros octales invalidos

```js example-bad
08;
09;
// SyntaxError: 08 is not a legal ECMA-262 octal constant
// SyntaxError: octal literals and octal escape sequences are deprecated
```

### Números octales válidos

Utilice el cero inicialmente seguido de la letra "o";

```js-nolint example-good
0O755;
0o644;
```

## Ver Tambien

- [Gramatica lexica](/es/docs/Web/JavaScript/Reference/Lexical_grammar#octal)


--- SUBTEMA: deprecated_source_map_pragma ---


{{jsSidebar("Errors")}}

## Mensaje

```
Advertencia: Error de Sintaxis al utilizar //@ para indicar el código fuente de la URL esta obsoleto. En su lugar use //#.

Advertencia: Error de Sintaxis: al utilizar //@ para indicar el mapeo de programas del código fuente de la URL esta obsoleto. En su lugar use //#.
```

## Tipo de error

Una advertencia ocurrida como esta {{jsxref("SyntaxError")}}. JavaScript no se detendrá.

## Descripción del error

Esta es una sintaxis obsoleta del codigo fuente de mapa en JavaScript.

Las sintaxis de código fuente de mapa en JavaScript se suelen combinar y minificar para hacer que la entrega desde el servidor sea más eficiente. Con los códigos de origen de mapas, el depurador puede asignar el código que se está ejecutando a los archivos de origen.

La especificación de mapa de código fuente cambió la sintaxis debido a un conflicto con IE con la versión windows 8.x siempre que se encontró en la página. Despues `//@cc_on` fue interpretado para activar la compilación condicional en el motor IE JScript. [El comentario de compilación condicional](https://docs.microsoft.com/en-us/scripting/javascript/reference/at-cc-on-statement-javascript) en IE es una característica poco conocida, pero rompió mapas de fuente de origen con [jQuery](https://bugs.jquery.com/ticket/13274) y otras bibliotecas.

## Ejemplos

### Sintaxis obsoleta

Sintaxis con el signo obsoleto "@".

```js example-bad
//@ sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

### Sintaxis estándar

En su lugar use el signo "#".

```js example-good
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

O, alternativamente, puede establecer un encabezado en su archivo JavaScript para evitar tener un comentario de error de sintaxis:

```js example-good
X-SourceMap: /path/to/file.js.map
```

## Vea También

- [Como utilizar un mapa de Fuentes - Documentación de Herramientas de Firefox](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
- [Introducción a las fuentes – HTML5 rocks](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)


--- SUBTEMA: illegal_character ---


{{jsSidebar("Errors")}}

## Mensaje

```
SyntaxError: illegal character (Firefox)
SyntaxError: Invalid or unexpected token (Chrome)

ErrorDeSintasix: Carácter ilegal (Firefox)
ErrorDeSintasix: Componente léxico inválido o inesperado (Chrome)
```

## Tipo de error

{{jsxref("SyntaxError")}} {{jsxref("ErrorDeSintaxis")}}

## ¿Qué salió mal?

Hay un componente léxico inválido o inesperado que no pertenece a su posición en el código. Utilice un editor que soporte el resaltado de sintaxis y que revise cuidadosamente su código contra discrepancias como un signo menos (`-`) contra un guion (`–`) o comillas simples (`"`) contra comillas no estándar (`“`).

## Ejemplos

### Caracteres no coincidentes

Algunos caracteres parecen iguales, pero hará que el analizador falle al interpretar su código.

```js example-bad
“Esto parece una cadena de caracteres”;
// SyntaxError: illegal character
// ErrorDeSintaxis: Carácter ilegal

42 – 13;
// SyntaxError: illegal character
// ErrorDeSintaxis: Carácter ilegal
```

Esto debería funcionar:

```js example-good
"Esto en realidad es una cadena de caracteres";

42 - 13;
```

### Caracteres olvidados

Es fácil olvidar caracteres aquí o allí.

```js example-bad
var colors = ['#000', #333', '#666'];
// SyntaxError: illegal character
// ErrorDeSintaxis: Carácter ilegal
```

Agregue la comilla olvidada para `'#333'`.

```js example-good
var colors = ["#000", "#333", "#666"];
```

### Caracteres escondidos

Cuando copia y pega un código de una fuente externa, puede haber caracteres inválidos. ¡Cuidado!

```js example-bad
var foo = 'bar';​
// SyntaxError: illegal character
// ErrorDeSintaxis: Carácter ilegal
```

Al inspeccionar este código en un editor como Vim, puede ver que en realidad hay un carácter de [espacio de ancho cero (ZWSP) (U+200B)](https://en.wikipedia.org/wiki/Zero-width_space).

```js
var foo = 'bar';​<200b>
```

## Vea también

- [Gramática léxica](/es/docs/Web/JavaScript/Reference/Lexical_grammar)


--- SUBTEMA: errors ---


{{jsSidebar("Errors")}}

Abajo encontraras una lista de los errores que son generados por JavaScript. Estos errores pueden ser una ayuda útil al depurar, aunque el problema reportado no siempre es precisamente claro. Las paginas de abajo proporcionan detalles adicionales sobre estos errores. Cada error es un objeto basado en el objeto {{jsxref("Error")}} , y tiene un `nombre` y un `mensaje`.

Los errores mostrados en la consola web pueden incluir un link a la pagina debajo correspondiente para ayudarte a comprender rápidamente el problema en tu código.

## Lista de errores

En esta lista, cada pagina esta ordenada por nombre (el tipo de error) y el mensaje (un mensaje de error mas detallado y legible). Juntos,estas dos propiedades proveen un punto de partida hacia el entendimiento y la resolución del problema. Para mas información, ¡Sigue los links abajo!

{{ListSubPages("/es/docs/Web/JavaScript/Reference/Errors")}}

## Ve también

- [¿Qué salió mal? Solucionando Javascript](/es/docs/Learn_web_development/Core/Scripting/What_went_wrong): El tutorial introductorio para principiantes sobre la reparación en errores de JavaScript.


--- SUBTEMA: in_operator_no_object ---


{{jsSidebar("Errors")}}

## Mensaje

```
TypeError: cannot use 'in' operator to search for 'x' in 'y' (Firefox, Chrome)
```

## Tipo de Error

{{jsxref("TypeError")}}

## ¿Qué salió mal?

El [operador `in`](/es/docs/Web/JavaScript/Reference/Operators/in) puede ser usado sólo para verificar si una propiedad se encuentra en un objeto. No puede buscar en cadenas de caracteres, o en números, u otro tipo primitivo.

## Ejemplos

### Buscando en cadenas de caracteres

A diferencia de otros lenguajes de programación (ej. Python), no puede buscar cadenas de texto usando el [operator `in`](/es/docs/Web/JavaScript/Reference/Operators/in).

```js example-bad
"Hello" in "Hello World";
// TypeError: cannot use 'in' operator to search for 'Hello' in 'Hello World'
```

En su lugar, deberá usar {{jsxref("String.prototype.indexOf()")}}, por ejemplo.

```js example-good
"Hello World".indexOf("Hello") !== -1;
// true
```

### El operando no puede ser `null` o `undefined`

Asegúrese que el objeto que está inspeccionando no sea {{jsxref("null")}} o {{jsxref("undefined")}}.

```js example-bad
var foo = null;
"bar" in foo;
// TypeError: cannot use 'in' operator to search for 'bar' in 'foo'
```

El operador `in` siempre espera un objeto.

```js example-good
var foo = { baz: "bar" };
"bar" in foo; // false

"PI" in Math; // true
"pi" in Math; // false
```

### Buscando en arreglos

Tenga cuidado cuando use el operador `in` para buscar en objetos {{jsxref("Array")}}. El operador `in` verifica el índice numérico, no el valor de dicho índice.

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
3 in trees; // true
"oak" in trees; // false
```

## Vea también

- [`in` operator](/es/docs/Web/JavaScript/Reference/Operators/in)


--- SUBTEMA: invalid_array_length ---


{{jsSidebar("Errors")}}

## Mensaje

```
RangeError: invalid array length (Firefox)
RangeError: Invalid array length (Chrome)
RangeError: Invalid array buffer length (Chrome)
```

## Tipo de error

{{jsxref("RangeError")}}

## ¿Cuál es el problema?

Una longitud de array inválida puede presentarse en éstas situaciones:

- Cuando se crea un {{jsxref("Array")}} o un {{jsxref("ArrayBuffer")}} el cual tiene una longitud negativa o es igual o mayor a 2^32, o
- cuando se define la propiedad {{jsxref("Array.length")}} a un valor el cual es negativo o es igual o mayor a 2^32.

¿Por qué el `Array` y `ArrayBuffer` tienen longitud limitada? La propiedad de longitud de un `Array` o un `ArrayBuffer` está representada con un entero sin signo de 32 bits, el cual sólo puede almacenar valores que estén en el rango de 0 a (2^32)-1.

Si estás creando un `Array` usando el constructor, es mejor que utilices la notación literal, ya que el primer argumento es interpretado como la longitud del `Array`.

De lo contrario, puedes especificar un mínimo y un máximo para la longitud antes de definir la propiedad de longitud, o puedes usarla como el argumento del constructor.

## Ejemplos

### Casos inválidos

```js example-bad
new Array(Math.pow(2, 40));
new Array(-1);
new ArrayBuffer(Math.pow(2, 32));
new ArrayBuffer(-1);

let a = [];
a.length = a.length - 1; // definir la propiedad de longitud a -1

let b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1; // definir la propiedad de longitud a 2^32
```

### Casos válidos

```js example-good
[Math.pow(2, 40)]; // [ 1099511627776 ]
[-1]; // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1);
new ArrayBuffer(0);

let a = [];
a.length = Math.max(0, a.length - 1);

let b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);

// 0xffffffff es la notación hexadecimal de 2^32 - 1
// el cual también se puede especificar como (-1 >>> 0)
```

## Véase también

- {{jsxref("Array")}}
- {{jsxref("Array.length")}}
- {{jsxref("ArrayBuffer")}}


--- SUBTEMA: invalid_date ---


{{jsSidebar("Errors")}}

## Mensaje

```
RangeError: invalid date (Firefox)
RangeError: invalid time value (Chrome)
RangeError: Provided date is not in valid range (Chrome)
```

## Tipo de error

{{jsxref("RangeError")}}

## ¿Cuál es el problema?

Se ha proporcionado una cadena con una fecha no válida para {{jsxref("Date")}} o {{jsxref("Date.parse()")}}.

## Ejemplos

### Casos no válidos

Las cadenas o fechas irreconocibles que contienen valores de elementos ilegales en cadenas con formato ISO suelen devolver {{jsxref("Nan")}}. Sin embargo, dependiendo de la implementación, las cadenas de formato ISO no conformes, también pueden lanzar `RangeError: invalid date`, como los siguientes casos en Firefox:

```js example-bad
new Date("foo-bar 2014");
new Date("2014-25-23").toISOString();
new Date("foo-bar 2014").toString();
```

Esto, sin embargo, devuelve {{jsxref("NaN")}} en Firefox:

```js example-bad
Date.parse("foo-bar 2014"); // NaN
```

Para más información, consulte la documentación de {{jsxref("Date.parse()")}}.

### Casos válidos

```js example-good
new Date("05 October 2011 14:48 UTC");
```

## Véase también

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}


--- SUBTEMA: missing_curly_after_property_list ---


{{jsSidebar("Errors")}}

## Mensaje

```
SyntaxError: missing } after property list
```

## Tipo de error

{{jsxref("SyntaxError")}}

## ¿Que estuvo mal?

Es un error de sinaxis en algún lugar en el [object initializer](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer). Prodría provocarse debido a la falta de una llave, pero, por ejemplo tambien por falta de alguna coma. Tambien verifique si alguna llave o parentesis se encuentra en el orden correcto. Indentar o darle un buen formato al codido puede ayudarlo a observar mejor el error.

## Ejemplos

### Olvido de coma

Algunas veces, hace faltan las comas en codigo inicial del proyecto, he aquí un ejemplo:

```js example-bad
var obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
```

La correción podría ser:

```js example-good
var obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3,
};
```

## Observe Tambien

- [Object initializer](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer)


--- SUBTEMA: missing_formal_parameter ---


{{jsSidebar("Errors")}}

## Mensaje

```
SyntaxError: missing formal parameter (Firefox)
```

## Tipo de error

{{jsxref("SyntaxError")}}

## ¿Que es lo que fue mal?

"Formal parameter" es una forma adornada de decir "parámetro de función". Tu declaración de funcion carece de parámetros válidos. En la declaración de la función, los parámetros deben ser {{Glossary("Identifier", "identifiers")}}, no ningún valor cómo números, cadenas, o objetos. Declarar las funciones y invocarlas son dos pasos distindos. La declaración sólo requiere identificador/es. Es en la invocación que asignas los valores.

En {{glossary("JavaScript")}}, los indentificadosres sólo pueden contener carácteres alfanuméricos (o "$" y "\_"), no pueden comenzar por número. Un identificador difiere de una **cadena** en que la cadena son datos, mientras que lo primero es parte del código.

## Ejemplos

Los parámetros de función deben ser identificadores cuando creas la función. Todas estas declaraciones fallan, ya que proveen parámetros:

```js example-bad
function square(3) {
  return number * number;
};
// SyntaxError: missing formal parameter

function greet("Howdy") {
  return greeting;
};
// SyntaxError: missing formal parameter

function log({ obj: "value"}) {
  console.log(arg)
};
// SyntaxError: missing formal parameter
```

Necesitarás usar identificadores en las funciones:

```js example-good
function square(number) {
  return number * number;
}

function greet(greeting) {
  return greeting;
}

function log(arg) {
  console.log(arg);
}
```

Entonces podrás invocarlas con argumentos a tu gusto:

```js
square(2); // 4

greet("Howdy"); // "Howdy"

log({ obj: "value" }); // Object { obj: "value" }
```

## También interesante

- Otros errores relacionados con parámetros formales:
  - [SyntaxError: Malformed formal parameter](/es/docs/conflicting/Web/JavaScript/Reference/Errors/Missing_formal_parameter)
  - [SyntaxError: redeclaration of formal parameter "x"](/es/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter)


--- SUBTEMA: missing_parenthesis_after_argument_list ---


{{jsSidebar("Errors")}}

## Mensaje

```
SyntaxError: missing ) after argument list
```

## Tipo de error

{{jsxref("SyntaxError")}}.

## ¿Cuál es el problema?

Hay un error en cómo la función es llamada. Esto puede ser un typo, la falta de un operador, o un string no escapado, por ejemplo.

## Ejemplo

Debido a que no se encuentra el operador "`+`" para concatenar el string, JavaScript espera que el argumento de la función `log` sea solo `"PI: "`. En tal caso, debería terminar con el paréntesis de cierre.

```js example-bad
console.log('PI: ' Math.PI);
// SyntaxError: missing ) after argument list
```

Puedes corregir la llamada del `log`, agregando el operador "`+`":

```js example-good
console.log("PI: " + Math.PI);
// "PI: 3.141592653589793"
```

### Strings sin cierre

```js-nolint example-bad
console.log('"Java" + "Script" = "' + 'Java' + 'Script");
// SyntaxError: missing ) after argument list
```

Aquí JavaScript piensa que tienes `);` dentro del string y lo ignora, y termina no sabiendo que quisiste utilizar `);` para cerrar la función `console.log`. Para solucionar esto, podemos poner un `'` después del string "Script":

```js example-good
console.log('"Java" + "Script" = "' + "Java" + 'Script"');
// '"Java" + "Script" = "JavaScript"'
```

## Véase también

- [Funciones](/es/docs/Web/JavaScript/Guide/Functions)


--- SUBTEMA: more_arguments_needed ---


{{jsSidebar("Errors")}}

## Mensage

```
TypeError: argument is not an Object and is not null (Edge)
TypeError: Object.create necesita al menos 1 argumento, pero solo only 0 fueron aprovadas.
TypeError: Object.setPrototypeOf necesita al menos 2 argumentos, pero solo 0 fueron aprovados
TypeError: Object.defineProperties requires at least 1 argument, but only 0 were passed
```

## Tipo de error

{{jsxref("TypeError")}}.

## ¿Qué fué mal?

Hay un error con que una funcion es llamada. Más argumentos necesitan ser dados.

## Ejemplos

El método {{jsxref("Object.create()")}} necesita al menos un argumento y el método {{jsxref("Object.setPrototypeOf()")}} necesita al menos 2 argumentos.

```js example-bad
var obj = Object.create();
// TypeError: Object.create necesita al menos 1 argumento, pero ninguno fue aprovad

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 1 were passed
```

Puedes arreglar esto configurando {{jsxref("null")}} como el prototipo, por ejemplo:

```js example-good
var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);
```

## Ver también

- [Funciones](/es/docs/Web/JavaScript/Guide/Functions)


--- SUBTEMA: not_a_function ---


{{jsSidebar("Errors")}}

## Mensaje

```
TypeError: "x" is not a function
```

## Tipo de error

{{jsxref("TypeError")}}.

## ¿Qué salió mal?

Se ha intentado llamar a un elemento o valor como si fuera una función, pero no lo era. El código esperaba que hubiera una función implementada, pero no la ha encontrado.

¿Está bien escrito el nombre de la función?¿El objeto sobre el que estás haciendo la llamada tiene ese método implementado realmente? Por ejemplo, los objetos tipo Array tienen implementada la función map, pero el resto de tipos no la tienen.

Hay muchas funciones propias de Javascript (built-in) que necesitan una función de callback, por lo que tienes que pasar esa función como parámetro para que estos métodos funcionen correctamente.

- Cuando se usen objetos {{jsxref("Array")}} o {{jsxref("TypedArray")}}:
  - {{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}}, {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.filter()")}}, {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}

- Cuando se usen objetos {{jsxref("Map")}} y {{jsxref("Set")}}:
  - {{jsxref("Map.prototype.forEach()")}} y {{jsxref("Set.prototype.forEach()")}}

## Ejemplos

### Nombre de la función mal escrito

En este caso, que ocurre con mucha frecuencia, el nombre de la función está mal escrito:

```js example-bad
var x = document.getElementByID("foo");
// TypeError: document.getElementByID is not a function
```

El nombre correcto de la función es `getElementById`:

```js example-good
var x = document.getElementById("foo");
```

### Función llamada en el objeto equivocado

Puede que el método que queramos usar no esté implementado en el tipo de objeto que estemos usado. En este ejemplo, queremos usar el método map, que recibe una función de callback como argumento, pero solo lo tienen los objetos {{jsxref("Array")}}.

```js example-bad
var obj = { a: 13, b: 37, c: 42 };

obj.map(function (num) {
  return num * 2;
});

// TypeError: obj.map is not a function
```

Como obj es un diccionario (parejas clave/valor), no tiene método map y se produce el error. Para evitarlo, hay que usar un {{jsxref("Array")}}:

```js example-good
var numeros = [1, 4, 9];

numeros.map(function (num) {
  return num * 2;
});

// Array [ 2, 8, 18 ]
```

### La función comparte un nombre con una propiedad preexistente

A veces, al hacer una clase, puede tener una propiedad y una función con el mismo nombre. Al llamar a la función, el compilador piensa que la función deja de existir.

```js example-bad
var Perro = function () {
  this.edad = 11;
  this.color = "negro";
  this.nombre = "Rafael";
  return this;
};

Perro.prototype.nombre = function (nombre) {
  this.nombre = nombre;
  return this;
};

var miNuevoPerro = new Perro();
miNuevoPerro.nombre("Lilly"); //Uncaught TypeError: myNewDog.name is not a function
```

Utilice un nombre de propiedad diferente en su lugar:

```js example-good
var Perro = function () {
  this.edad = 11;
  this.color = "negro";
  this.nombrePerro = "Rafael"; //Usando this.nombrePerro en vez de .nombre
  return this;
};

Perro.prototype.nombre = function (nombre) {
  this.nombrePerro = nombre;
  return this;
};

var miNuevoPerro = new Perro();
miNuevoPerro.nombre("Lilly"); //Perro { edad: 11, color: 'negro', nombrePerro: 'Lilly' }
```

## Ve también

- [Functions](/es/docs/Web/JavaScript/Reference/Functions)


--- SUBTEMA: not_a_valid_code_point ---


{{jsSidebar("Errors")}}

## Message

```
RangeError: {0} is not a valid code point (Firefox)
RangeError: Invalid code point {0} (Chrome)
```

## Tipo de error

{{jsxref("RangeError")}}

## ¿Qué estuvo mal?

El metodo {{jsxref("String.fromCodePoint()")}} acepta solamente _**code point**_ validos.

Un [code point](https://en.wikipedia.org/wiki/Code_point) es un valor en el conjunto de caracteres [Unicode](/es/docs/Web); esto es, un rango de enteros que va desde `0` a `0x10FFFF`.

Usando valores {{jsxref("NaN")}}, enteros negativos (`-1`), no enteros (`3.14`), o valores mayores a `0x10FFFF` (`1114111`) no trabajarian con este metodo.

## Ejemplos

### Casos invalidos

```js example-bad
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### Casos validos

```js example-good
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
```

## Observe tambien

- {{jsxref("String.fromCodePoint()")}}


--- SUBTEMA: not_defined ---


{{jsSidebar("Errors")}}

```
ReferenceError: "x" no está definida.
```

## Tipo de error

{{jsxref("ReferenceError")}}

## ¿Qué está mal?

Hay una variable no existente que está siendo referida en algún lugar. Esta variable necesita ser declarada o se debe comprobar su disponibilidad en el {{Glossary("ámbito")}} actual del script.

> [!NOTE]
> Cuando una librería es cargada (como por ejemplo jQuery) asegúrese de que se haya cargado antes de intentar acceder a sus variables, como por ejemplo "$". Ponga la etiqueta {{HTMLElement("script")}}, que carga la librería antes del código que la utiliza.

## Ejemplo

### Variable no declarada

```js example-bad
foo.substring(1); // ReferenceError: foo no está declarada.
```

La variable "foo" no está declarada en ninguna parte. La variable debe ser alguna cadena para que el método {{jsxref("String.prototype.substring()")}} funcione correctamente.

```js example-good
var foo = "bar";
foo.substring(1); // "ar"
```

### Contexto erróneo

Una variable necesita estar disponible en el contexto actual de ejecución. No se puede acceder a las variables definidas dentro de una [función](/es/docs/Web/JavaScript/Reference/Functions) desde fuera de dicha función, debido a que la variable está definida solamente dentro de la función.

```js example-bad
function numbers() {
  var num1 = 2,
    num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 sin definir.
```

Sin embargo, una función puede acceder a todas las variables y funciones definidas dentro del ámbito en la cual ha sido definida. Es decir, una función en el contexto global puede acceder a todas las variables definidas en el contexto global.

```js example-good
var num1 = 2,
  num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(num1); // 2
```

## Temas relacionados

- {{Glossary("Ámbito")}}
- [Guía; declarando variables en JavaScript](/es/docs/Web/JavaScript/Guide/Grammar_and_types#declaring_variables)
- [Guía; contexto de la función en Java Script](/es/docs/Web/JavaScript/Guide/Functions#ámbito_de_function)


--- SUBTEMA: no_variable_name ---


{{jsSidebar("Errors")}}

## Mensaje

```
SyntaxError: missing variable name (Firefox)
SyntaxError: Unexpected token = (Chrome)
```

## Error

{{jsxref("SyntaxError")}}

## ¿Qué anda mal?

Una variable no tiene nombre. Esto es un error recurrente en el código. Probablemente una coma está mal colocada en algún lugar o nombraste mal una variable. Completamente entendible. Nombrar cosas es difícil.

## Ejemplos

### Missing a variable name

```js example-bad
var = "foo";
```

Es bueno nombrar buenas variables. Todos hemos estado así.

```js example-good
var ohGodWhy = "foo";
```

### Palabras reservadas no pueden ser nombre de variables

Hay algunas palabras que son reservadas. No puedes usarlas para nombrar variables, lo siento :(

```js example-bad
var debugger = "whoop";
// SyntaxError: missing variable name
```

### Declarar multiples variables

Toma especial atención a las comas cuando declaras multiples variables. ¿Hay un exceso de comas? ¿Accidentalmente añadiste comas en vez de punto y coma?

```js example-bad
var x, y = "foo",
var x, = "foo"

var first = document.getElementById('one'),
var second = document.getElementById('two'),

// SyntaxError: missing variable name
```

La versión arreglada:

```js example-good
var x,
  y = "foo";
var x = "foo";

var first = document.getElementById("one");
var second = document.getElementById("two");
```

### Arrays

{{jsxref("Array")}} literales en JavaScript necesitan corchetes alrededor de los valores. Esto no funciona:

```js example-bad
var arr = 1, 2, 3, 4, 5;
// SyntaxError: missing variable name
```

Esto es correcto:

```js example-good
var arr = [1, 2, 3, 4, 5];
```

## Ver también

- [Good variable names](https://wiki.c2.com/?GoodVariableNames)
- [`var`](/es/docs/Web/JavaScript/Reference/Statements/var)
- [Variable declarations in the JavaScript Guide](/es/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)


--- SUBTEMA: property_access_denied ---


{{jsSidebar("Errors")}}

## Mensaje

```
Error: Permission denied to access property "x"
```

## Tipo de error

{{jsxref("Error")}}.

## ¿Cuál es el problema?

Se ha intentado acceder a un objeto al cual no tienes permiso. Probablemente es un elemento {{HTMLElement("iframe")}} cargado de otro dominio en el cual violaste la [política del mismo origen](/es/docs/Web/Security/Defenses/Same-origin_policy).

## Ejemplos

```html
<!doctype html>
<html>
  <head>
    <iframe
      id="myframe"
      src="http://www1.w3c-test.org/common/blank.html"></iframe>
    <script>
      onload = function () {
        console.log(frames[0].document);
        // Error: Permission denied to access property "document"
      };
    </script>
  </head>
  <body></body>
</html>
```

## Véase también

- {{HTMLElement("iframe")}}
- [Política del mismo origen](/es/docs/Web/Security/Defenses/Same-origin_policy)


--- SUBTEMA: stmt_after_return ---


{{jsSidebar("Errors")}}

## Mensaje

```
Warning: unreachable code after return statement (Firefox)
```

## Tipo de error

Advertencia

## Qué va mal?

Código inalcanzable después de una sentencia de retorno puede ocurrir en estas situaciones:

- Cuando se usa una expresión despues de una sentencia {{jsxref("Statements/return", "return")}}
- Cuando se usa una sentencia de retorno sin punto y coma pero inluye una expresion directamente despues.

Cuando una expresion existe después de una sentencia de retorno válida, se da una advertencia para indicar que el código después de la sentencia de retorno es inalcanzable, lo que significa que nunca será ejecutado.

¿Porqué deberia tener un punto y coma despues de la sentencia de retorno? En el caso de sentencias sin punto y coma, estas pueden no ser claras, puede que el desarrollador intentara retornar el resultado de la sentencia en la siguiente línea, o detener la ejecución y retornar. La advertencia indica que hay una ambiguedad en la forma en la que la sentencia de retorno está escrita.

Advertencias no seran mostradas por retornos sin punto y coma si la sentencia lo sigue:

- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/function", "function")}}

## Ejemplos

### Casos invalidos

```js example-bad
function f() {
  var x = 3;
  x += 4;
  return x; // return sale de la funcion inmediatamente
  x -= 3; // esta linea nunca se ejecutara ; es inalcanzable
}

function f() {
  return; // es tratado como `return;`
  3 + 4; //la funcion regresa, y esta linea nunca es alcanzada
}
```

### Casos validos

```js example-good
function f() {
  var x = 3;
  x += 4;
  x -= 3;
  return x; // OK: regreso despues de todas las otras declaraciones
}

function f() {
  return 3 + 4; // OK: sin punto y coma regresa la expresion en la misma linea
}
```

## Ve tambien

- {{jsxref("Statements/return", "Automatic Semicolon Insertion", "#Automatic_Semicolon_Insertion", 1)}}


--- SUBTEMA: strict_non_simple_params ---


{{jsSidebar("Errors", "Errores")}}

La excepción de JavaScript: "`'use strict' no permitida en función`" ocurre cuando se usa una directiva `"use strict"` en la parte superior de una función con {{jsxref("Functions/Default_parameters", "parámetros predeterminados", "", 1)}}, {{jsxref("Functions/rest_parameters", "parámetros rest", "", 1)}} o {{jsxref("Operators/Destructuring_assignment" , "Desestructuración de parámetros", "", 1)}}.

## Mensaje

Edge:

```
No se puede aplicar el modo estricto en funciones con una lista de parámetros complejos
```

Firefox:

```
SyntaxError: "use strict" no permitido en la función con parámetro predeterminado
SyntaxError: "use strict" no permitido en la función con parámetro rest
SyntaxError: "use strict" no permitido en la función con parámetro de desestructuración
```

Chrome:

```
SyntaxError: directiva ilegal 'use strict' en función con una lista de parámetros complejos
```

## Tipo `Error`

{{jsxref("SyntaxError")}}.

## ¿Qué salió mal?

Se escribió una directiva `"use strict"` en la parte superior de una función que tiene uno de los siguientes parámetros:

- {{jsxref("Functions/Default_parameters", "Parámetros predeterminados", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Parámetros rest", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "Desestructuración de parámetros", "", 1)}}

No está permitida una directiva `"use strict"` en la parte superior de dichas funciones según la especificación ECMAScript.

## Ejemplos

### Declaración de función

En este caso, la función `sum` tiene los parámetros predeterminados `a = 1` y `b = 2`:

```js example-bad
function sum(a = 1, b = 2) {
  SyntaxError: 'use strict' no permitida en la función con parámetros predeterminados
  'use strict';
  return a + b;
}
```

Si la función debe estar en [modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode), y todo el script o la función adjunta también está bien que esté en modo estricto, puedes mover la directiva `"use strict"` fuera de la función:

```js example-good
"use strict";
function sum(a = 1, b = 2) {
  return a + b;
}
```

### Expresión `Function`

Una expresión `function` puede usar otra solución alternativa:

```js example-bad
var sum = function sum([a, b]) {
  // SyntaxError: "use strict" no permitido en función con parámetros de desestructuración
  'use strict';
  return a + b;
};
```

Esta se puede convertir a la siguiente expresión:

```js example-good
var sum = (function () {
  "use strict";
  return function sum([a, b]) {
    return a + b;
  };
})();
```

### Función de flecha

Si una función de flecha necesita acceder a la variable `this`, puedes usar la función de flecha como función circundante:

```js example-bad
var callback = (...args) => {
  SyntaxError: "use strict" no permitido en la función con parámetro rest
  'use strict';
  return this.run(args);
};
```

Esta se puede convertir a la siguiente expresión:

```js example-good
var callback = (() => {
  "use strict";
  return (...args) => {
    return this.run(args);
  };
})();
```

## Ve también

- {{jsxref("Strict_mode", "Modo estricto", "", 1)}}
- {{jsxref("Statements/function", "Declaración de función", "", 1)}}
- {{jsxref("Operators/function", "Expresión function", "", 1)}}
- {{jsxref("Functions/Default_parameters", "Parámetros predeterminados", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Parámetros rest", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "Desestructuración de parámetros", "", 1)}}


--- SUBTEMA: too_much_recursion ---


{{jsSidebar("Errors")}}

## Mensaje

```
InternalError: too much recursion
```

## Tipo de error

{{jsxref("InternalError")}}.

## ¿Qué ha ido mal?

Una función que se llama a sí misma es una función recursiva. Podemos decir que la recursión es análoga a un bucle. Ambos ejecutan el mismo código varias veces y ambos requieren de una condición de fin (para evitar un bucle infinito o recursión infinita). Cuando hay recursión infinita o mucha recursión, JavaScript lanza este error.

## Ejemplos

Esta función recursiva se ejecuta 10 veces, debido a la condición de salida.

```js
function loop(x) {
  if (x >= 10) {
    // "x >= 10" es la condición de salida
    return;
  }
  // hacer cosas
  loop(x + 1); // llamada recursiva
}
loop(0);
```

Si establecemos esta condición para un valor muy alto, no funcionará:

```js example-bad
function loop(x) {
  if (x >= 1000000000000) {
    return;
  }
  // hacer cosas
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion (demasiada recursión)
```

## See also

- {{Glossary("Recursion")}}
- [Recursive functions](/es/docs/Web/JavaScript/Guide/Functions#recursion)


--- SUBTEMA: unexpected_token ---


{{jsSidebar("Errors")}}

## Mensaje

```
SyntaxError: expected expression, got "x"
SyntaxError: expected property name, got "x"
SyntaxError: expected target, got "x"
SyntaxError: expected rest argument name, got "x"
SyntaxError: expected closing parenthesis, got "x"
SyntaxError: expected '=>' after argument list, got "x"
```

## Tipo de error

{{jsxref("SyntaxError")}}

## ¿Que significa el error?

Se esperaba un constructor específico de JavaScript pero se recibió algo diferente. Puede ser un simple error de tipeo.

## Ejemplos

### Se espera expresión

Cuando se llama a una función, no se permiten comas al final de los argumentos. JavaScript espera un argumento que puede ser en realidad cualquier tipo de expresión.

```js-nolint example-bad
Math.max(2, 42,);
// SyntaxError: expected expression, got ')'
```

El error se corrije omitiendo la coma o agregando otro argumento:

```js example-good
Math.max(2, 42);
Math.max(2, 42, 13 + 37);
```

## See also

- {{jsxref("Math.max()")}}


--- SUBTEMA: unexpected_type ---


{{jsSidebar("Errors")}}

## Mensaje

```
TypeError: "x" is (not) "y"

Examples:
TypeError: "x" is undefined
TypeError: "x" is null
TypeError: "undefined" is not an object
TypeError: "x" is not an object or null
TypeError: "x" is not a symbol
```

## Tipo de error

{{jsxref("TypeError")}}.

## ¿Qué salió mal?

Tipo inesperado. Esto ocurre amenudo con valores {{jsxref("undefined")}} o {{jsxref("null")}} .

Además, ciertos métodos, como {{jsxref ("Object.create ()")}} o {{jsxref("Symbol.keyFor()")}}, requieren de un tipo específico, que debe ser proporcionado, ejemplos

### Casos inválidos

```js example-bad
// undefined and null cases on which the substring method won't work
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null

// Certain methods might require a specific type
var foo = {};
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = "bar";
Object.create(foo); // TypeError: "foo" is not an object or null
```

### Cómo solucionar el problema

Para fijar un puntero nulo a indefinidos o valores nulos, puede utilizar el operador typeof, por ejemplo

```js
if (typeof foo !== "undefined") {
  // Ahora sabemos que foo está definido, ahora podemos continuar.
}
```

## Ver también

- {{jsxref("undefined")}}
- {{jsxref("null")}}
