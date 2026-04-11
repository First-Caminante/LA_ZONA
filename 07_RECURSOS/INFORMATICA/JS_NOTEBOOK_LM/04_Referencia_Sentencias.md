

# TEMA: REFERENCE/STATEMENTS



--- SUBTEMA: async_function ---


{{jsSidebar("Statements")}}

La declaración de función **`async`** define una _función asíncrona_, la cual devuelve un objeto {{jsxref("Global_Objects/AsyncFunction","AsyncFunction")}}.

Es posible definir también funciones asíncronas a través de una {{jsxref("Operators/async_function", "expresión de función async", "", 1)}}.

{{InteractiveExample("JavaScript Demo: Statement - Async", "taller")}}

```js interactive-example
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();
```

## Sintaxis

```
async function name([param[, param[, ... param]]]) {
   statements
}
```

### Parámetros

- `name`
  - : El nombre de la función.

<!---->

- `param`
  - : El nombre de un argumento que se debe pasar a la función.

<!---->

- `statements`
  - : Las declaraciones que conforman el cuerpo de la función.

### Valor de retorno

Un objeto {{jsxref("Global_Objects/AsyncFunction","AsyncFunction")}}, que representa una función asíncrona que ejecuta el código contenido dentro de la función.

## Descripción

Cuando se llama a una función `async`, esta devuelve un elemento {{jsxref("Promise")}}. Cuando la función `async` devuelve un valor, `Promise` se resolverá con el valor devuelto. Si la función `async` genera una excepción o algún valor, `Promise` se rechazará con el valor generado.

Una función `async` puede contener una expresión {{jsxref("Operators/await", "await")}}, la cual pausa la ejecución de la función asíncrona y espera la resolución de la `Promise` pasada y, a continuación, reanuda la ejecución de la función `async` y devuelve el valor resuelto.

> [!NOTE]
> La finalidad de las funciones `async`/`await` es simplificar el comportamiento del uso síncrono de promesas y realizar algún comportamiento específico en un grupo de `Promises`. Del mismo modo que las `Promises` son semejantes a las devoluciones de llamadas estructuradas, `async`/`await` se asemejan a una combinación de generadores y promesas.

## Ejemplos

### Ejemplo sencillo

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(10).then((v) => {
  console.log(v); // prints 60 after 4 seconds.
});

async function add2(x) {
  const p_a = resolveAfter2Seconds(20);
  const p_b = resolveAfter2Seconds(30);
  return x + (await p_a) + (await p_b);
}

add2(10).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});
```

> [!WARNING]
> **No se deben confundir `await` y `Promise.all`** En `add1`, la ejecución se suspende durante dos segundos correspondientes al primer operador `await`, y luego durante otros dos segundos correspondientes al segundo `await`. El segundo temporizador no se crea hasta que el primero no se haya disparado ya. En `add2`, ambos temporizadores se crean y, acto seguido, ambos reciben `await`. Esto provoca la resolución en dos segundos y no cuatro, ya que los temporizadores se ejecutaron de manera simultánea. Sin embargo, ambas llamadas `await` aún pueden ejecutarse en series, no en paralelo: esto **no** constituye ninguna aplicación automática de `Promise.all`. Si se desea aplicar `await` a dos o más promesas en paralelo, es preciso utilizar `Promise.all`.

### Reescritura de una cadena de promesas con una función `async`

Una API que devuelva una {{jsxref("Promise")}} tendrá como resultado una cadena de promesas, y dividirá la función en muchas partes. Estudie este código:

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch((e) => {
      return downloadFallbackData(url); // returns a promise
    })
    .then((v) => {
      return processDataInWorker(v); // returns a promise
    });
}
```

Es posible reescribirlo utilizando un solo operador `async` de esta manera:

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

Observe que, en el ejemplo anterior, no hay ninguna instrucción `await` dentro de la instrucción `return`, porque el valor de retorno de una `async function` queda implícitamente dentro de un {{jsxref("Promise.resolve")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Operators/async_function", "Expresión de función async")}}
- Objeto {{jsxref("AsyncFunction")}}
- {{jsxref("Operators/await", "await")}}
- [«Decorar funciones async de JavaScript» en innolitics.com](https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/) (en inglés)


--- SUBTEMA: block ---


{{jsSidebar("Statements")}}

## Resumen

Una sentencia block se utiliza para agrupar cero o más sentencias. Este grupo block se delimita por un par de llaves.

## Sintaxis

```
{ sentencia_1; sentencia_2; ... sentencia_n; }
```

- `sentencia_1`, `sentencia_2`, `sentencia_n`
  - : Sentencias agrupadas dentro de una sentencia block.

## Descripción

Esta sentencia se utiliza comúnmente para controlar sentencias de flujo (es decir `if`, `for`, `while`). Por ejemplo:

```js
while (x < 10) {
  x++;
}
```

Las variables declaradas con `var` **no** tienen alcance de bloque(block scope). Las variables introducidas dentro de un grupo block tienen el alcance de la función que lo contiene o del script, y los efectos de su asignación persisten más allá del grupo block en sí mismo. En otras palabras, las sentencias block no incluyen ningún alcance. Aunque los grupos block "en solitario" (standalone) son una sintaxis válida, usted no querrá utilizar grupos block en solitario en JavaScript, ya que ellos no hacen lo que parecen, si piensa que funcionan de manera similar a los bloques en C o Java. Por ejemplo:

```js
var x = 1;
{
  var x = 2;
}
alert(x); // resultado 2
```

Este obtiene el resultado 2 ya que la sentencia `var x` dentro del grupo block tiene el mismo alcance que la sentencia `var x` antes del mismo. En C o Java, el código equivalente tendría como resultado 1.

#### Con `let` y [const](/es/docs/Web/JavaScript/Reference/Statements/const)

Por el contrario, las variables declaradas con `let` y `const` tienen alcance de bloque.

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // logs 1
```

El alcance `x = 2` es limitado solamente al bloque en el que está definido.

Lo mismo para `const`:

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // logs 1 y no lanza SyntaxError...
```

Tenga en cuenta que la variable `const c = 2 con alcance de bloque`, **_no_ lanza** un `SyntaxError:` El identificador 'c' ya ha sido declarado. Esto es porque **se puede declarar de forma única** dentro del bloque, sin interferir con la otra que tiene un alcance global.

#### Con `function`

La [declaración de una función](/es/docs/Web/JavaScript/Reference/Statements/function) también tiene un alcance limitado dentro del bloque donde se produce la declaración:

```js
nacion("frances"); // TypeError: nacion no es una función
{
  function nacion(nacionalidad) {
    console.log("Yo soy " + nacionalidad);
  }
  nacion("español"); // correcto. logs Yo soy español
}
```

## Vea También

- {{jsxref("Sentencias/while", "while")}}


--- SUBTEMA: break ---


{{jsSidebar("Statements")}}

## Resumen

Termina el bucle actual, sentecia switch o label y transfiere el control del programa a la siguiente sentencia a la sentecia de terminación de éstos elementos.

## Sintaxis

```
break [etiqueta];
```

- `etiqueta`
  - : Identificador asociado con la etiqueta de la sentencia.

## Descripción

La sentencia `break` incluye una etiqueta opcional que permite al programa salir de una sentencia etiquetada. La sentencia `break` necesita estar anidada dentro de la sentencia etiquetada. La sentencia etiquetada puede ser cualquier tipo de sentencia; no tiene que ser una sentencia de bucle.

### Ejemplos

#### Ejemplo: Usando `break`

La siguiente función tiene una sentencia que termina el bucle {{jsxref("Sentencias/while", "while")}} cuando `i` es 3, y entonces devuelve el valor 3 \* `x`.

```js
function comprobarBreak(x) {
  var i = 0;
  while (i < 6) {
    if (i == 3) break;
    i++;
  }
  return i * x;
}
```

## Vea También

- {{jsxref("Sentencias/continue", "continue")}}
- {{jsxref("Sentencias/label", "label")}}
- {{jsxref("Sentencias/switch", "switch")}}


--- SUBTEMA: class ---


{{jsSidebar("Statements")}}

La **declaración class** crea una nueva clase con el nombre proporcionado utilizando la herencia basada en prototipos

También se puede definir una clase usando una {{jsxref("Operators/class", "expresión de clase", "", 1)}}. Pero a diferencia de las expresiones de clases, la declaración de clases no permite que una clase existente sea declarada de nuevo y en caso de hacerse, lanzará un error de tipo.

## Sintaxis

```js
class name [extends] {
  // Contenido de la clase
}
```

## Descripción

De la misma manera que con las expresiones de clase, el contenido de una clase se ejecuta en [modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode).

Las declaraciones de clases no están {{Glossary("Hoisting", "izadas")}} (al contrario que las [declaraciones de funciones](/es/docs/Web/JavaScript/Reference/Statements/function)).

## Ejemplos

### Declaración sencilla de una clase

En el siguiente ejemplo, primero definimos la clase `Polygon`, luego extendemos de ella para crear la clase `Square`. Notar que `super()`, utilizado en el constructor, sólo puede ser llamado dentro del constructor y debe ser llamado antes de que la palabra clave `this` pueda ser usada.

```js
class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [`declaración de funciones`](/es/docs/Web/JavaScript/Reference/Statements/function)
- [`expresión de clases`](/es/docs/Web/JavaScript/Reference/Operators/class)
- [Clases](/es/docs/Web/JavaScript/Reference/Classes)


--- SUBTEMA: const ---


{{jsSidebar("Statements")}}

## Resumen

Las variables constantes presentan un **ámbito de bloque** ([block](/es/docs/Web/JavaScript/Reference/Statements/block) scope) tal y como lo hacen las variables definidas usando la instrucción [let](/es/docs/Web/JavaScript/Reference/Statements/let), con la particularidad de que el valor de una constante no puede cambiarse a través de la reasignación. Las constantes **no se pueden redeclarar**.

> [!WARNING]
> La **redeclaración** de la misma variable bajo un mismo [ámbito léxico](https://www.ecma-international.org/ecma-262/6.0/#sec-lexical-environments) terminaría en un error de tipo [`SyntaxError`](/es/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError). Esto también es **extensible** si usamos `var` dentro del ámbito léxico. Esto nos salvaguarda de redeclarar una variable accidentalmente y que no era posible solo con `var.`

## Sintaxis

```
const varname1 = value1 [, varname2 = value2 [, varname3 = value3 [, ... [, varnameN = valueN]]]];
```

- `varnameN`
  - : Nombre de la constante. Puede ser un identificador legal.

- `valueN`
  - : Valor de la constante. Puede ser cualquier expresión legal.

## Descripción

Esta declaración crea una constante cuyo alcance puede ser **global o local para el bloque en el que se declara**. Es necesario **inicializar** la constante, es decir, se debe especificar su valor en la misma sentencia en la que se declara, lo que tiene sentido, dado que no se puede cambiar posteriormente.

La declaración de una constante crea una referencia de sólo lectura. No significa que el valor que tiene sea inmutable, sino que el identificador de variable no puede ser reasignado, por lo tanto, en el caso de que la asignación a la constante sea un objeto, el objeto sí que puede ser alterado.

Una constante **no puede compartir su nombre** con una función o variable en el mismo ámbito.

Todas las consideraciones acerca de la " [zona muerta temporal](/es/docs/Web/JavaScript/Reference/Statements/let#muerta) " se aplican tanto a [`let`](/es/docs/Web/JavaScript/Reference/Statements/let) y `const`.

> [!WARNING]
> `const` ~~es~~ **fue** una **extensión especifica de Mozilla**, no ~~es~~ **era** soportado en IE, pero ~~tiene~~ **tenia** soporte parcial por Opera desde la versión 9.0 y por Safari.

## Ejemplos

El siguiente ejemplo produce una salida `"a es 7."`

```js
const a = 7;
document.writeln("a es " + a + ".");
```

Las siguientes instrucciones demuestra como se comporta `const`

> [!WARNING]
> Las instrucciones deberán ser ordenadas correctamente para conseguir la salida esperada a los ejemplos

```js
// NOTA: Las constantes pueden ser declaradas en mayusculas o minusculaas,
//pero por convencion para distinguirlas del resto de variables se escribe todo en mayusculas

// definimos MY_FAV como constante y le damos un valor de 7
const MY_FAV = 7;

// lanzara un error: Unkeught TypeError: Asignación a variable constante.
MY_FAV = 20;

// imprimira 7
console.log("my favorite number is: " + MY_FAV);

// lanzara un error: SyntaxError: tratando de redeclarar una constante. El identificador 'MY_FAV' ya ha sido declarado
const MY_FAV = 20;

// el nombre MY_FAV esta reservado para la constante anterior, también fallara y lanzara un SyntaxError por la redeclaración
var MY_FAV = 20;

// el nombre MY_FAV esta reservado para la variable anterior, esto también lanzara un SyntaxError por la redeclaración
let MY_FAV = 20;

// es importante tener en cuenta como funciona el alcance de bloque
if (MY_FAV === 7) {
  // esto esta bien y crea una variable MY_FAV de alcance/ambito de bloque
  // (funciona igual de bien con let para declarar un alcance de bloque/ambito de variable no-constante)
  const MY_FAV = 20;

  // MY_FAV ahora es 20
  console.log("my favorite number is " + MY_FAV);

  // aquín también lanzara un SyntaxError por la redeclaración
  var MY_FAV = 20;
}

// MY_FAV todavia es 7
console.log("my favorite number is " + MY_FAV);

// lanza error, falta el inicializador en la declaracion de const
const FOO;

// const tambien funciona en objetos
const MY_OBJECT = { key: "value" };

// Intentando sobrescribir el objeto nos lanza un error
MY_OBJECT = { OTHER_KEY: "value" };

// Sin embargo, los object keys no estan protegidas,
// por lo que la siguiente sentencia se ejecutara sin problema
MY_OBJECT.key = "otherValue"; // Use Object.freeze() para hacer un objeto inmutable

// Lo mismo se aplica a los arrays
const MY_ARRAY = [];
// es posible empujar elementos en el array
MY_ARRAY.push("A"); // ["A"]
// Sin embargo, asignar un nuevo array a la variable lanza error
MY_ARRAY = ["B"];
```

## Ver también

- {{jsxref("Sentencias/var", "var")}}
- {{jsxref("Sentencias/let", "let")}}
- [Constants in JavaScript Guide](/es/docs/Web/JavaScript/Guide/Grammar_and_types#constants)


--- SUBTEMA: continue ---


{{jsSidebar("Statements")}}

## Resumen

Termina la ejecución de las sentencias de la iteración actual del bucle actual o la etiqueta y continua la ejecución del bucle con la próxima iteración.

## Sintaxis

```
continue [ etiqueta ];
```

- `label`
  - : Identificador asociado con la etiqueta de la sentencia.

### Descripción

En contraste con la sentencia {{jsxref("Sentencias/break", "break")}}, `continue` no termina la ejecución del bucle por completo; en cambio,

- En un bucle {{jsxref("Sentencias/while", "while")}}, salta de regreso a la condición.

- En un bucle {{jsxref("Sentencias/for", "for")}}, salta a la expresión actualizada.

La sentencia `continue` puede incluir una etiqueta opcional que permite al programa saltar a la siguiente iteración del bucle etiquetado en vez del bucle actual. En este caso, la sentencia `continue` necesita estar anidada dentro de esta sentecia etiquetada.

## Ejemplos

### Ejemplo: Usando `continue` con `while`

El siguiente ejemplo muestra un bucle {{jsxref("Sentencias/while", "while")}} que tiene una sentencia `continue` que se ejecuta cuando el valor de `i` es 3. Así, `n` toma los valores 1, 3, 7 y 12.

```js
i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}
```

### Ejemplo: Usando `continue` con una etiqueta

En el siguiente ejemplo, una sentencia etiquetada `checkiandj` contiene una sentencia etiquetada `checkj`. Si se encuentra `continue`, el programa continua hasta encima de la sentencia `checkj`. Cada vez que se encuentra `continue`, `checkj` se reitera hasta que su condición devuelve false. Cuando se devuelve false, el recordatorio de la sentencia `checkiandj` se completa.

Si `continue` tuviese una etiqueta `checkiandj`, el programa continuaría hasta encima de la sentencia `checkiandj`.

```js
checkiandj: while (i < 4) {
  document.write(i + "<br>");
  i += 1;

  checkj: while (j > 4) {
    document.write(j + "<br>");
    j -= 1;
    if (j % 2 == 0) continue checkj;
    document.write(j + " is odd.<br>");
  }
  document.write("i = " + i + "<br>");
  document.write("j = " + j + "<br>");
}
```

## Vea También

- {{jsxref("Sentencias/break", "break")}}
- {{jsxref("Sentencias/label", "label")}}


--- SUBTEMA: debugger ---


{{jsSidebar("Statements")}}

La sentencia **debugger** invoca cualquier funcionalidad de depuración disponible, tiene la misma función que un breakpoint. Si la funcionalidad de depuración no está disponible, esta sentencia no tiene efecto alguno.

## Sintaxis

```
debugger;
```

## Ejemplos

El siguiente ejemplo muestra un bloque de código donde ha sido insertada una sentencia debugger, para invocar el depurador (si existe) cuando la función es ejecutada.

```js
function codigoPotencialmenteDefectuoso() {
  debugger;
  // realizar paso a paso o examinar código que contiene
  // potenciales errores
}
```

Cuando el depurador es invocado, la ejecución se detiene en la sentencia debugger. Es como un punto de interrupción en el script.

![Paused at a debugger statement.](screen_shot_2014-02-07_at_9.14.35_am.png)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- [Debugging JavaScript](/es/docs/Debugging_JavaScript)
- [The Debugger in the Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)


--- SUBTEMA: do...while ---


{{jsSidebar("Statements")}}

La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

{{InteractiveExample("JavaScript Demo: Statement - Do...While")}}

```js interactive-example
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"
```

## Sintaxis

```
do
  sentencia
while (condición);
```

- `sentencia`
  - : Una sentencia que se ejecuta al menos una vez y es reejecutada cada vez que la condición se evalúa a verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utilice la sentencia {{jsxref("Statements/block", "block")}} (`{ ... }`) para agrupar aquellas sentencias.

- `condición`
  - : Una expresión se evalúa después de cada pase del bucle. Si `condición` se evalúa como verdadera, la `sentencia` se re-ejecuta. Cuando `condición` se evalúa como falsa, el control pasa a la siguiente sentencia hacer mientras.

## Ejemplos

### Usando `hacer mientras`

En el siguiente ejemplo, el bucle hacer mientras itera al menos una vez y se reitera hasta que `i` ya no sea menor que 5.

```js
do {
  i += 1;
  document.write(i);
} while (i < 5);
```

## Vea También

- {{jsxref("Sentencias/while", "while")}}
- {{jsxref("Sentencias/for", "for")}}


--- SUBTEMA: empty ---


{{jsSidebar("Statements")}}

Un **empty statement** o sentencia vacía es usada para no proveer una sentencia, incluso si la sintaxis JavaScript esperase una.

## Sintaxis

```
;
```

## Descripción

La sentencia vacía es un punto y coma (;) que indica que no se ejecutará ninguna sentencia, incluso si la sintaxis JavaScript requiere una. El comportamiento opuesto, donde se desean ejecutar varias sentencias pero JavaScript solo permite una sola, es posible usando una [sentencia de bloque](/es/docs/Web/JavaScript/Reference/Statements/block); la cual combina varias declaraciones en una.

## Ejemplos

La sentencia vacía es comúnmente usada en bucles. Por ejemplo, un bucle for sin bloque de sentencias:

```js
var arr = [1, 2, 3];

// Asignar el valor 0 a todos los elementos del array
for (i = 0; i < arr.length; arr[i++] = 0) {
  /* sentencia vacía */
}

console.log(arr);
// [0, 0, 0]
```

**Nota:** Es una buena práctica comentar el uso intencional de la sentencia vacía, ya que no es fácilmente distinguible de un punto y coma normal. Un ejemplo de uso probablemente no intencional:

```js-nolint
if (condicion); // Esta condición no ejerce ningún control!
  borrarTodo(); // Por lo cual esta sentencia será ejecutada siempre!!!
```

Otro ejemplo de uso:

```js
var a = 1,
  b = 1;
if (a == 0 || (b = 0)); // Asigna a 'b' el valor cero si 'a' no es cero.
console.log(b); // 0
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Sentencias/block", "Sentencia de bloque")}}


--- SUBTEMA: export ---


{{jsSidebar("Statements")}}

La declaración **`export`** se utiliza al crear módulos de JavaScript para exportar funciones, objetos o tipos de dato primitivos del módulo para que puedan ser utilizados por otros programas con la sentencia {{jsxref("Statements/import", "import")}}.

Los módulos exportados están en {{jsxref("Strict_mode","strict mode")}} tanto si se declaran así como si no. La sentencia export no puede ser utilizada en scripts embebidos.

## Sintaxis

```js
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // también var
export let name1 = …, name2 = …, …, nameN; // también var, const
export function FunctionName(){...}
export class ClassName {...}

export default expression;
export default function (…) { … } // también class, function*
export default function name1(…) { … } // también class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
```

- `nameN`
  - : Identificador a ser exportado (es posible importarlo a través de {{jsxref("Statements/import", "import")}} en otro script).

## Descripción

Existen dos tipos diferentes de exportación , **nombrada** y **por defecto**. Se pueden tener varias exportaciones nombradas por módulo pero sólo una exportación por defecto. Cada tipo corresponde a una de las sintaxis siguientes:

- Exports con nombre:

  ```js
  // exporta la función previamente declarada
  export { myFunction };

  // exporta una constante
  export const foo = Math.sqrt(2);
  ```

- Exports por defecto (function):

  ```js
  export default function () {}
  ```

- Exports por defecto (class):

  ```js
  export default class {}
  ```

Los export con nombre son útiles cuando se necesitan exportar múltiples valores. Durante el import, es obligatorio usar el mismo nombre que el correspondiente objeto.

Pero un export por defecto puede ser importado con cualquier nombre, por ejemplo:

```js
export default k = 12; // en el archivo test.js

import m from "./test"; // notese que tenemos la libertad de usar import m en lugar de import k, porque k era el export por defecto

console.log(m); // escribirá 12
```

Sólo puede haber un export por defecto.

La siguiente sintaxis no exporta un export por defecto del módulo importado:

```js
export * from …;
```

Si necesita exportar por defecto, escriba lo siguiente en su lugar:

```js
import mod from "mod";
export default mod;
```

## Ejemplos

### Usando exports con nombre

En el módulo, podremos usar el siguiente código:

```js
// module "my-module.js"
function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
var graph = {
  options: {
    color: "white",
    thickness: "2px",
  },
  draw: function () {
    console.log("From graph draw function");
  },
};
export { cube, foo, graph };
```

De esta forma, en otro script, podemos tener:

```js
//You should use this script in html with the type module ,
//eg ''<script type="module" src="demo.js"></script>",
//open the page in a httpserver,otherwise there will be a CORS policy error.
//script demo.js

import { cube, foo, graph } from "my-module";
graph.options = {
  color: "blue",
  thickness: "3px",
};
graph.draw();
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
```

### Usando el export por defecto

Si queremos exportar un sólo valor o tener uno por defecto para nuestro módulo, podemos usar un export por defecto:

```js
// module "my-module.js"
export default function cube(x) {
  return x * x * x;
}
```

De esta forma la importación de un export default será sumamemte sencilla:

```js
import cube from "my-module";
console.log(cube(3)); // 27
```

Tenga en cuenta que no es posible usar `var`, `let` o `const` con `export default`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Sentencias/import", "import")}}
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), publicación del blog de Hacks por Jason Orendorff
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), publicación del blog de Hacks por Lin Clark
- [Libro de Axel Rauschmayer: "Exploring JS: Modules"](https://exploringjs.com/es6/ch_modules.html)


--- SUBTEMA: for-await...of ---


{{jsSidebar("Statements")}}

La **sentencia** **`for await...of`** crea un bucle iterando tanto sobre objetos iterables asincrónicos como sincrónicos, incluyendo: built-in {{jsxref("String")}}, {{jsxref("Array")}}, objetos `Array`-like (por ej., {{jsxref("Functions/arguments", "arguments")}} o {{domxref("NodeList")}}), {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, y async/sync iterables definidos por el usuario. Invoca un hook de iteración personalizada con sentencias a ser ejecutadas por el valor de cada propiedad diferente del objeto.

## Sintaxis

```
for await (variable of iterable) {
  sentencia
}
```

- `variable`
  - : En cada iteración, el valor de una propiedad diferente es asignado a _variable_. _variable_ puede ser declarada con `const`, `let`, o `var`.
- `iterable`
  - : Objeto sobre cuyas propiedades se itera.

### Iterando sobre iterables asincrónicos

También puedes iterar sobre un objeto que explícitamente implementa el protocolo async iterable:

```js
var asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      },
    };
  },
};

(async function () {
  for await (let num of asyncIterable) {
    console.log(num);
  }
})();

// 0
// 1
// 2
```

### Iterando sobre funciones generadoras asincrónicas

Debido a que las funciones generadoras asincrónicas implementan el protocolo async iterator, las mismas pueden ser iteradas utilizando `for await... of`

```js
async function* asyncGenerator() {
  var i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async function () {
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

Para un ejemplo más concreto de iteración sobre una función generadora utilizando `for await... of`, considera iterar sobre datos provistos por una API. Este ejemplo primero crea un iterador asincrónico para un stream de datos, luego lo utiliza para obtener el tamaño de la respuesta desde la API.

```js
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
// Obtiene datos desde url y calcula el tamaño de la respuesta utilizando la función generadora asincrónica.
async function getResponseSize(url) {
  const response = await fetch(url);
  // Almacenará el tamaño de la respuesta en bytes.
  let responseSize = 0;
  // El buble for-await-of. Itera asincrónicamente sobre cada parte de la respuesta.
  for await (const chunk of streamAsyncIterator(response.body)) {
    // Incrementando el tamaño total.
    responseSize += chunk.length;
  }

  console.log(`Tamaño de la respuesta: ${responseSize} bytes`);
  // salida esperada: "Tamaño de la respuesta: 1071472"
  return responseSize;
}
getResponseSize("https://jsonplaceholder.typicode.com/photos");
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Statements/for...of")}}


--- SUBTEMA: for ---


{{jsSidebar("Statements")}}

## Resumen

Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

## Sintaxis

```
for ([expresion-inicial]; [condicion]; [expresion-final])sentencia
```

- `expresion-inicial`
  - : Una expresión (incluyendo las expresiones de asignación) o la declaración de variable. Típicamente se utiliza para usarse como variable contador. Esta expresión puede opcionalmente declarar nuevas variables con la palabra clave `var`. Estas variables no son locales del bucle, es decir, están en el mismo alcance en el que está el bucle `for`. El resultado de esta expresión es descartado.

- `condicion`
  - : Una expresión para ser evaluada antes de cada iteración del bucle. Si esta expresión se evalúa como verdadera, se ejecuta `sentencia`. Esta comprobación condicional es opcional. Si se omite, la condición siempre se evalúa como verdadera. Si la expresión se evalúa como falsa, la ejecución salta a la primera expresión que sigue al constructor de `for`.

- `expresion-final`
  - : Una expresión para ser evaluada al final de cada iteración del bucle. Esto ocurre antes de la siguiente evaluación de la `condicion`. Generalmente se usa para actualizar o incrementar la variable contador.

- `sentencia`
  - : Una sentencia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro del bucle, utilice una sentencia {{jsxref("Sentencias/block", "block")}} (`{ ... }`) para agrupar aquellas sentecias.

### Ejemplos

#### Ejemplo: Usando `for`

La siguiente sentencia `for` comienza mediante la declaración de la variable `i` y se inicializa a `0`. Comprueba que `i` es menor que nueve, realiza las dos sentencias con éxito e incrementa `i` en 1 después de cada pase del bucle.

```js
for (var i = 0; i < 9; i++) {
  n += i;
  mifuncion(n);
}
```

## Vea También

- {{jsxref("Sentencias/break", "break")}}
- {{jsxref("Sentencias/continue", "continue")}}
- {{jsxref("Sentencias/empty", "empty")}}
- {{jsxref("Sentencias/while", "while")}}
- {{jsxref("Sentencias/do...while", "do...while")}}
- {{jsxref("Sentencias/for...in", "for...in")}}
- {{jsxref("Sentencias/for...of", "for...of")}}


--- SUBTEMA: for...in ---


{{jsSidebar("Statements")}}

La instrucción {{JSxRef("Sentencias/for...in", "for-in")}} itera sobre todas las {{JSxRef("../Enumerability_and_ownership_of_properties", "propiedades enumerables")}} de un objeto que está codificado por cadenas (ignorando los codificados por {{JSxRef("Objetos_globales/Symbol", "Símbolos")}}, incluidas las propiedades enumerables heredadas.

{{InteractiveExample("JavaScript Demo: Statement - For...In")}}

```js interactive-example
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

## Sintaxis

```
for (variable in objeto)
  instrucción
```

- `variable`
  - : Asigna un nombre de propiedad diferente a la _variable_ en cada iteración.
- `objeto`
  - : Objeto cuyas propiedades enumerables que no son símbolos se iteran.

## Descripción

Un bucle `for...in` solo itera sobre propiedades enumerables que no son símbolo. Los objetos creados a partir de constructores integrados como `Array` y `Object` han heredado propiedades no enumerables de `Object.prototype` y `String.prototype`, como el método {{JSxRef("String.indexOf", "indexOf()")}} de {{JSxRef("String")}} o el método {{JSxRef("Object.toString", "toString()")}} de {{JSxRef("Object")}}. El bucle iterará sobre todas las propiedades enumerables del objeto en sí y aquellas que el objeto hereda de su cadena de prototipos (las propiedades de los prototipos más cercanos tienen prioridad sobre las de los prototipos más alejados del objeto en su cadena de prototipos).

### Propiedades `deleted`, `added` o `modified`

Un bucle `for...in` itera sobre las propiedades de un objeto en un orden arbitrario (consulta el operador {{JSxRef("Operadores/delete", "delete")}} para obtener más información sobre por qué no puede depender del aparente orden de la iteración, al menos en una configuración entre navegadores).

Si una propiedad se modifica en una iteración y luego se visita en un momento posterior, su valor en el bucle es su valor en ese momento posterior. Una propiedad que se elimina antes de haber sido visitada no se visitará más tarde. Las propiedades agregadas al objeto sobre el que se está produciendo la iteración se pueden visitar u omitir de la iteración.

En general, es mejor no agregar, modificar o eliminar propiedades del objeto durante la iteración, aparte de la propiedad que se está visitando actualmente. No hay garantía de si se visitará una propiedad agregada, si se visitará una propiedad modificada (distinta de la actual) antes o después de que se modifique, o si se visitará una propiedad eliminada antes de eliminarla.

### Iteración en arreglos y `for...in`

> [!NOTE]
> `for...in` no se debe usar para iterar sobre un {{JSxRef("Array")}} donde el orden del índice es importante.

Los índices del arreglo son solo propiedades enumerables con nombres enteros y, por lo demás, son idénticos a las propiedades generales del objeto. No hay garantía de que `for...in` devuelva los índices en un orden en particular. La instrucción de bucle `for...in` devolverá todas las propiedades enumerables, incluidas aquellas con nombres no enteros y aquellas que se heredan.

Debido a que el orden de iteración depende de la implementación, es posible que la iteración sobre un arreglo no visite los elementos en un orden coherente. Por lo tanto, es mejor usar un bucle {{JSxRef("Sentencias/for", "for")}} con un índice numérico (o {{JSxRef("Array.prototype.forEach()")}} o el bucle {{JSxRef("Sentencias/for...of", "for...of")}}) cuando se itera sobre arreglos donde el orden de acceso es importante.

### Iterar solo sobre propiedades directas

Si solo deseas considerar las propiedades adjuntas al objeto en sí mismo, y no sus prototipos, usa {{JSxRef("Object.getOwnPropertyNames", "getOwnPropertyNames()")}} o realiza una {{JSxRef("Object.prototype.hasOwnProperty", "hasOwnProperty()")}} verificación ({{jsxref("Object.prototype.propertyIsEnumerable", "propertyIsEnumerable()")}} también se puede utilizar). Alternativamente, si sabes que no habrá ninguna interferencia de código externo, puedes extender los prototipos incorporados con un método de verificación.

## ¿Por qué usar `for...in`?

Dado que `for...in` está construido para iterar propiedades de objeto, no se recomienda su uso con arreglos y opciones como `Array.prototype.forEach()` y existe `for...of`, ¿cuál podría ser el uso de `for...in`?

Es posible que se utilice de forma más práctica con fines de depuración, ya que es una forma fácil de comprobar las propiedades de un objeto (mediante la salida a la consola o de otro modo). Aunque los arreglos suelen ser más prácticos para almacenar datos, en situaciones en las que se prefiere un par clave-valor para trabajar con datos (con propiedades que actúan como la "clave"), puede haber casos en los que desees comprobar si alguna de esas claves cumple un valor particular.

## Ejemplos

### Utilizar `for...in`

El siguiente bucle `for...in` itera sobre todas las propiedades enumerables que no son símbolos del objeto y registra una cadena de los nombres de propiedad y sus valores.

```js
var obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Produce:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

### Iterar propiedades directas

La siguiente función ilustra el uso de {{JSxRef("Object.prototype.hasOwnProperty", "hasOwnProperty()")}} — las propiedades heredadas no se muestran.

```js
var triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Produce:
// "obj.color = red"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{JSxRef("Sentencias/for...of", "for...of")}} — una declaración similar que itera sobre la propiedad `values`
- {{JSxRef("Sentencias/for_each...in", "for each...in")}} — una declaración similar pero obsoleta que itera sobre los valores de las propiedades de un objeto, en lugar de los nombres de las propiedades en sí
- {{JSxRef("Sentencias/for", "for")}}
- {{JSxRef("../Guide/Iterators_and_Generators", "Expresiones generadoras")}} (usa la sintaxis `for...in`)
- {{JSxRef("../Enumerability_and_ownership_of_properties", "Enumerabilidad y posesión de propiedades")}}
- {{JSxRef("Object.getOwnPropertyNames()")}}
- {{JSxRef("Object.prototype.hasOwnProperty()")}}
- {{JSxRef("Array.prototype.forEach()")}}


--- SUBTEMA: for...of ---


{{jsSidebar("Statements")}}

La sentencia **`for...of`** ejecuta un bucle que opera sobre una secuencia de valores provenientes de un [objeto iterable](/es/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). Los objetos iterables incluyen instancias de objetos nativos como {{jsxref("Array")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{domxref("NodeList")}} (y otras colecciones del DOM), así como el objeto {{jsxref("Functions/arguments", "arguments")}}, [generadores](/es/docs/Web/JavaScript/Reference/Global_Objects/Generator) producidos por [funciones generadoras](/es/docs/Web/JavaScript/Reference/Statements/function*), e iterables definidos por el usuario.

{{InteractiveExample("JavaScript Demo: Statement - For...Of")}}

```js interactive-example
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## Sintaxis

```js-nolint
for (variable of iterable)
  statement
```

- `variable`
  - : Recibe un valor de la secuencia en cada iteración. Puede ser una declaración con [`const`](/es/docs/Web/JavaScript/Reference/Statements/const), [`let`](/es/docs/Web/JavaScript/Reference/Statements/let), o [`var`](/es/docs/Web/JavaScript/Reference/Statements/var), o un objetivo de [asignación](/es/docs/Web/JavaScript/Reference/Operators/Assignment) (p. ej., una variable previamente declarada, una propiedad de objeto o un [patrón de asignación por desestructuración](/es/docs/Web/JavaScript/Reference/Operators/Destructuring)). Las variables declaradas con `var` no son locales al bucle, es decir, están en el mismo ámbito en el que se encuentra el bucle `for...of`.
- `iterable`
  - : Un objeto iterable. La fuente de la secuencia de valores sobre la que opera el bucle.
- `statement`
  - : Una sentencia que se ejecutará en cada iteración. Puede hacer referencia a `variable`. Puedes usar una [sentencia de bloque](/es/docs/Web/JavaScript/Reference/Statements/block) para ejecutar múltiples sentencias.

## Descripción

Un bucle `for...of` opera sobre los valores provenientes de un iterable, uno por uno y en orden secuencial. Cada operación del bucle sobre un valor se denomina _iteración_, y se dice que el bucle _itera sobre el iterable_. Cada iteración ejecuta sentencias que pueden referirse al valor actual de la secuencia.

Cuando un bucle `for...of` itera sobre un iterable, primero llama al método [`[Symbol.iterator]()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) del iterable, que devuelve un [iterador](/es/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol), y luego llama repetidamente al método [`next()`](/es/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) del iterador resultante para producir la secuencia de valores que se asignarán a `variable`.

Un bucle `for...of` finaliza cuando el iterador se ha completado (el resultado de `next()` es un objeto con `done: true`). Al igual que otras sentencias de bucle, puedes usar [sentencias de control de flujo](/es/docs/Web/JavaScript/Reference/Statements#control_flow) dentro de `statement`:

- {{jsxref("Statements/break", "break")}} detiene la ejecución de `statement` y va a la primera sentencia después del bucle.
- {{jsxref("Statements/continue", "continue")}} detiene la ejecución de `statement` y va a la siguiente iteración del bucle.

Si el bucle `for...of` termina prematuramente (p. ej., se encuentra una sentencia `break` o se produce un error), se llama al método [`return()`](/es/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) del iterador para realizar cualquier limpieza.

La parte `variable` de `for...of` acepta cualquier cosa que pueda preceder al operador `=`. Puedes usar {{jsxref("Statements/const", "const")}} para declarar la variable siempre y cuando no se reasigne dentro del cuerpo del bucle (puede cambiar entre iteraciones, porque son dos variables separadas). De lo contrario, puedes usar {{jsxref("Statements/let", "let")}}.

```js
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

> [!NOTE]
> Cada iteración crea una nueva variable. Reasignar la variable dentro del cuerpo del bucle no afecta al valor original en el iterable (un arreglo, en este caso).

Puedes usar [desestructuración](/es/docs/Web/JavaScript/Reference/Operators/Destructuring) para asignar múltiples variables locales, o usar un acceso a propiedades como `for (x.y of iterable)` para asignar el valor a una propiedad de objeto.

Sin embargo, una regla especial prohíbe usar `async` como el nombre de la variable. Esta es una sintaxis inválida:

```js-nolint example-bad
let async;
for (async of [1, 2, 3]); // SyntaxError: The left-hand side of a for-of loop may not be 'async'.
```

Esto es para evitar la ambigüedad sintáctica con el código válido `for (async of => {};;)`, que es un bucle [`for`](/es/docs/Web/JavaScript/Reference/Statements/for).

## Ejemplos

### Iterando sobre un Array

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### Iterando sobre una cadena de texto

Las cadenas de texto son [iteradas por puntos de código Unicode](/es/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator).

```js
const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### Iterando sobre un TypedArray

```js
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255
```

### Iterando sobre un Map

```js
const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Iterando sobre un Set

```js
const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Iterando sobre el objeto arguments

Puedes iterar sobre el objeto {{jsxref("Functions/arguments", "arguments")}} para examinar todos los parámetros pasados a una función.

```js
function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}

foo(1, 2, 3);
// 1
// 2
// 3
```

### Iterando sobre un NodeList

El siguiente ejemplo añade una clase `read` a los párrafos que son descendientes directos del elemento [`<article>`](/es/docs/Web/HTML/Reference/Elements/article) iterando sobre una colección [`NodeList`](/es/docs/Web/API/NodeList) del DOM.

```js
const articleParagraphs = document.querySelectorAll("article > p");
for (const paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### Iterando sobre un iterable definido por el usuario

Iterando sobre un objeto con un método `[Symbol.iterator]()` que devuelve un iterador personalizado:

```js
const iterable = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        if (i <= 3) {
          return { value: i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

Iterando sobre un objeto con un método generador `[Symbol.iterator]()`:

```js
const iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

Los _iteradores iterables_ (iteradores con un método `[Symbol.iterator]()` que devuelve `this`) son una técnica bastante común para hacer que los iteradores sean utilizables en sintaxis que esperan iterables, como `for...of`.

```js
let i = 1;

const iterator = {
  next() {
    if (i <= 3) {
      return { value: i++, done: false };
    }
    return { value: undefined, done: true };
  },
  [Symbol.iterator]() {
    return this;
  },
};

for (const value of iterator) {
  console.log(value);
}
// 1
// 2
// 3
```

### Iterando sobre un generador

```js
function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
}
// 1
// 2
// 3
```

### Salida anticipada

La ejecución de la sentencia `break` en el primer bucle hace que termine prematuramente. El iterador aún no ha terminado, por lo que el segundo bucle continuará desde donde se detuvo el primero.

```js
const source = [1, 2, 3];

const iterator = source[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("Esta cadena no será registrada.");
}
// 1

// Otro bucle usando el mismo iterador
// continúa donde lo dejó el último bucle.
for (const value of iterator) {
  console.log(value);
}
// 2
// 3

// El iterador está agotado.
// Este bucle no ejecutará ninguna iteración.
for (const value of iterator) {
  console.log(value);
}
// [Sin salida]
```

Los generadores implementan el método [`return()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Generator/return), lo que hace que la función generadora regrese anticipadamente cuando el bucle termina. Esto hace que los generadores no sean reutilizables entre bucles.

```js example-bad
function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();

for (const value of generator) {
  console.log(value);
  if (value === 1) {
    break;
  }
  console.log("Esta cadena no será registrada.");
}
// 1

// El generador está agotado.
// Este bucle no ejecutará ninguna iteración.
for (const value of generator) {
  console.log(value);
}
// [Sin salida]
```

### Diferencia entre for...of y for...in

Ambas sentencias `for...in` y `for...of` iteran sobre algo. La principal diferencia entre ellas radica en sobre qué iteran.

La sentencia {{jsxref("Statements/for...in", "for...in")}} itera sobre las [propiedades de cadena enumerables](/es/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) de un objeto, mientras que la sentencia `for...of` itera sobre los valores que el [objeto iterable](/es/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) define para ser iterados.

El siguiente ejemplo muestra la diferencia entre un bucle `for...of` y un bucle `for...in` cuando se utilizan con un {{jsxref("Array")}}.

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const iterable = [3, 5, 7];
iterable.foo = "hello";

for (const i in iterable) {
  console.log(i);
}
// "0", "1", "2", "foo", "arrCustom", "objCustom"

for (const i in iterable) {
  if (Object.hasOwn(iterable, i)) {
    console.log(i);
  }
}
// "0" "1" "2" "foo"

for (const i of iterable) {
  console.log(i);
}
// 3 5 7
```

El objeto `iterable` hereda las propiedades `objCustom` y `arrCustom` porque contiene tanto `Object.prototype` como `Array.prototype` en su [cadena de prototipos](/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

El bucle `for...in` solo registra las [propiedades enumerables](/es/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) del objeto `iterable`. No registra los _elementos_ del array `3`, `5`, `7` o `"hello"` porque no son _propiedades_, sino _valores_. Registra los _índices_ del array, así como `arrCustom` y `objCustom`, que son propiedades reales. Si no estás seguro de por qué se itera sobre estas propiedades, hay una explicación más detallada de cómo funciona la [iteración de arrays y `for...in`](/es/docs/Web/JavaScript/Reference/Statements/for...in#array_iteration_and_for...in).

El segundo bucle es similar al primero, pero utiliza {{jsxref("Object.hasOwn()")}} para comprobar si la propiedad enumerable encontrada es propia del objeto, es decir, no heredada. Si lo es, se registra la propiedad. Las propiedades `0`, `1`, `2` y `foo` se registran porque son propiedades propias. Las propiedades `arrCustom` y `objCustom` no se registran porque son heredadas.

El bucle `for...of` itera y registra los _valores_ que son `iterable`, como un arreglo (que es [iterable](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)), define para ser iterados. Se muestran los _elementos_ del objeto `3`, `5`, `7`, pero ninguna de las _propiedades_ del objeto.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Object.entries()")}}


--- SUBTEMA: function ---


{{jsSidebar("Statements")}}

## Resumen

Declara una función con los parámetros especificados.

Puede también definir funciones usando el constructor {{jsxref("Function")}} y el {{jsxref("Operadors/function", "function")}} (expresión function).

## Sintaxis

```
function nombre([parametro1] [,parametro2] [..., parametroN]) {sentencias}
```

- `nombre`
  - : El nombre de la función.

- `parametroN`
  - : El nombre de un argumento que se pasa a la función. Una función puede tener hasta 255 argumentos.

- `sentencias`
  - : Las sentencias que comprenden el cuerpo de la función.

## Descripción

Para devolver un valor, la función debe tener una sentencia {{jsxref("Sentencias/return", "return")}} que especifica el valor a devolver.

Una función creada con la sentencia `function` es un objeto `Function` y tiene todas las propiedades, métodos, y comportamiento de los objetos `Function`. Vea {{jsxref("Function")}} para información detallada sobre funciones.

Una función puede también ser declarada dentro de una expresión. En este caso la función es normalmente anónima. Vea {{jsxref("Operadores/function", "function expression")}} para más información acerca de `function` (expresión function).

Las funciones pueden declararse condicionalmente. Es decir, una definición de una función puede estar anidada dentro de una sentecia `if`. Técnicamente, tales declaraciones no son en realidad declaraciones de funciones; son expresiones function (expresiones de función).

## Ejemplo

### Ejemplo: Usando `function`

El siguiente código declara una función que devuelve la cantidad total de ventas, cuando se da el número de unidades vendidas de productos `a`, `b`, y `c`.

```js
function calcular_ventas(unidades_a, unidades_b, unidades_c) {
  return unidades_a * 79 + unidades_b * 129 + unidades_c * 699;
}
```

## Vea También

- [Funciones](/es/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Function")}}
- Operadores{{jsxref("Operadores/function", "function")}}


--- SUBTEMA: function_star_ ---


{{jsSidebar("Statements")}}

La declaración **`function*`** (la palabra clave `function` seguida de un asterisco) define una _función generadora_, que devuelve un objeto {{jsxref("Global_Objects/Generator","Generator")}}.

También puedes definir funciones generadoras usando el constructor {{jsxref("GeneratorFunction")}} y una {{jsxref("Operators/function*", "function* expression")}}.

## Sintaxis

```
function* nombre([param[, param[, ... param]]]) {
   instrucciones
}
```

- `nombre`
  - : El nombre de la función.

- `param`
  - : El nombre de los argumentos que se le van a pasar a la función. Una función puede tener hasta 255 argumentos.

- `instrucciones`
  - : Las instrucciones que componen el cuerpo de la función.

## Descripción

Los generadores son funciones de las que se puede salir y volver a entrar. Su contexto (asociación de variables) será conservado entre las reentradas.

La llamada a una función generadora no ejecuta su cuerpo inmediatamente; se devuelve un objeto [iterador](/es/docs/Web/JavaScript/Reference/Iteration_protocols#iterator) para la función en su lugar. Cuando el metodo `next()` del iterador es llamado , el cuerpo de la función generadora es ejecutado hasta la primera expresión {{jsxref("Operators/yield", "yield")}}, la cual especifica el valor que será retornado por el iterador o con, {{jsxref("Operators/yield*", "yield*")}}, delega a otra función generadora. El método `next()` retorna un objeto con una propiedad _value_ que contiene el valor bajo el operador yield y una propiedad _done_ que indica, con un booleano, si la función generadora ha hecho yield al último valor.

## Ejemplos

### Ejemplo simple

```js
function* idMaker() {
  var index = 0;
  while (index < 3) yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
// ...
```

### Ejemplo con yield\*

```js
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}} object
- [The Iterator protocol](/es/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Statements/function", "function declaration")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
- Other web resources:
  - [Regenerator](http://facebook.github.io/regenerator/) an ES2015 generator compiler to ES5
  - [Forbes Lindesay: Promises and Generators: control flow utopia — JSConf EU 2013](https://www.youtube.com/watch?v=qbKWsbJ76-s)
  - [Hemanth.HM: The New gen of \*gen(){}](https://www.youtube.com/watch?v=ZrgEZykBHVo&list=PLuoyIZT5fPlG44bPq50Wgh0INxykdrYX7&index=1)
  - [Task.js](http://taskjs.org/)


--- SUBTEMA: if...else ---


{{jsSidebar("Statements")}}

La sentencia **`if...else`** ejecuta una sentencia, si una condición específicada es evaluada como {{Glossary("truthy", "verdadera")}}. Si la condición es evaluada como {{Glossary("falsy", "falsa")}}, otra sentencia en la clausula opcional `else` será ejecutada.

{{InteractiveExample("JavaScript Demo: Statement - If...Else")}}

```js interactive-example
function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}

console.log(testNum(-5));
// Expected output: "NOT positive"
```

## Sintaxis

```js-nolint
if (condición)
  sentencia1

// Con una clausula else
if (condición)
  sentencia1
else
  sentencia2
```

- `condición`
  - : Una expresión que puede ser evaluada como {{Glossary("truthy", "verdadera")}} o {{Glossary("falsy", "falsa")}}.

- `sentencia1`
  - : Sentencia que se ejecutará si `condición` es evaluada como {{Glossary("truthy", "verdadera")}}. Puede ser cualquier sentencia, incluyendo otras sentenccias `if` anidadas. Para ejecutar múltiples sentencias, use una sentencia [_block_](/es/docs/Web/JavaScript/Reference/Statements/block) ({ ... }) para agruparlas. Para no ejecutar ninguna sentencia, usa una sentencia [vacía](/es/docs/Web/JavaScript/Reference/Statements/Empty).

- `sentencia2`
  - : Sentencia que se ejecutará si `condición` se evalúa como {{Glossary("falsy", "falsa")}}, y existe una cláusula `else`. Puede ser cualquier sentencia, incluyendo sentencias _block_ y otras sentencias `if` anidadas.

## Descripción

Multiples sentencias `if...else` pueden ser anidadas para crear una cláusula `else if`. Note que no hay una palabra clave `elseif` (en una sola palabra) en JavaScript.

```
if (condición1)
   sentencia1
else if (condición2)
   sentencia2
else if (condición3)
   sentencia3
//...
else
   sentenciaN
```

Para entender como esto funciona, así es como se vería si el anidamiento hubiera sido indentado correctamente:

```
if (condición1)
   sentencia1
else
   if (condición2)
      sentencia2
   else
      if (condición3)
      ...
```

Para ejecutar varias sentencias en una cláusula, use una sentencia _block_ (`{/* ... */ }`) para agruparlas.

```js
if (condición) {
  sentencia1;
} else {
  sentencia2;
}
```

No usar _blocks_ puede ocacionar un comportamiento inesperado, especialmente si el código es estructurado manualmente. Por ejemplo:

```js-nolint example-bad
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
  else
    console.log("a is not 1");
}
```

Este código puede parece inocente — sin embargo, si ejecutamos `checkValue(1, 3)` registrara el mensaje "a is not 1". Esto debido a que en el caso de [dangling else](https://en.wikipedia.org/wiki/Dangling_else), la clausula `else` se conectará a la clausula `if` más cercana. Por lo tanto, el código anterior, indentado apropiadamente, se vería así:

```js-nolint
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
    else
      console.log("a is not 1");
}
```

Generalmente, es una buena práctica usar siempre sentencias block, especialmente en código que incluya sentencias if anidadas.

```js example-good
function checkValue(a, b) {
  if (a === 1) {
    if (b === 2) {
      console.log("a is 1 and b is 2");
    }
  } else {
    console.log("a is not 1");
  }
}
```

No confundir los valores booleanos primitivos `true` y `false` con los valores verdadero y falso del objeto {{jsxref("Boolean")}}. Cualquier valor diferente de `undefined`, `null`, `0`, `-0`, `NaN`, o la cadena vacía (`""`), y cualquier objecto, incluso un objeto Boolean cuyo valor es false, se evalúa como {{Glossary("truthy", "verdadero")}} en una sentencia condicional. Por ejemplo:

```js
const b = new Boolean(false);
// Esta condición se evalúa como verdadera
if (b) {
  console.log("b is truthy"); // "b is truthy"
}
```

## Ejemplos

### Uso de `if...else`

Note que no hay sintaxis `elseif` en JavaScript. Sin embargo, puede escribirse con un espacio entre `else` y `if`:

```js
if (cipherChar === fromChar) {
  result += toChar;
  x++;
} else {
  result += clearChar;
}
```

### Using else if

Note que no hay sintaxis `elseif` en JavaScript. Sin embargo, puede escribirse con un espacio entre `else` y `if`:

```js
if (x > 50) {
  /* hace algo */
} else if (x > 5) {
  /* hace algo */
} else {
  /* hace algo */
}
```

### Asignación en una expresión condicional

Casi nunca deberías tener un `if...else` con una asignacion `x = y` como condición:

```js example-bad
if ((x = y)) {
  // …
}
```

Porque a diferencia de los bucles {{jsxref("Statements/while", "while")}}, la condición es evaluada sólo una vez, así que la asignación es ejecutada una vez. El código anterior es equivalente a:

```js example-good
x = y;
if (x) {
  // …
}
```

El cual es mucho más claro. Sin embargo, en el raro caso que te encuentres en la situación de hacer algo como eso, la documentación del bucle [`while`](/es/docs/Web/JavaScript/Reference/Statements/while) tiene una sección llamada [Usando una asignación como una condición](/es/docs/Web/JavaScript/Reference/Statements/while#usando_una_asignacion_como_condicion) con nuestras recomendaciones.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase También

- {{jsxref("Sentencias/block", "block")}}
- {{jsxref("Sentencias/switch", "switch")}}


--- SUBTEMA: import ---


{{jsSidebar("Sentencias")}}

La sentencia **`import`** se usa para importar funciones que han sido exportadas desde un módulo externo.

> [!NOTE]
> Por el momento, esta característica sólo está [comenzando a ser implementada](https://jakearchibald.com/2017/es-modules-in-browsers/) de forma nativa en los navegadores. Está implementada en muchos transpiladores, tales como Typescript y [Babel](https://babeljs.io/), y en empaquetadores como [Rollup](https://github.com/rollup/rollup) y [Webpack](https://webpack.js.org/).

## Sintaxis

```
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

- `defaultExport`
  - : Nombre que se referirá al export por defecto del módulo.
- `module-name`
  - : El módulo desde el que importar. Normalmente es una ruta relativa o absoluta al archivo **`.js`** que contiene el módulo, excluyendo la extensión **`.js`**. Algunos empaquetadores pueden permitir o requerir el uso de la extensión; comprueba tu entorno. Sólo se permiten Strings con comillas simples o dobles.
- `name`
  - : Nombre del objeto del módulo que se utilizará como nombre de dominio al hacer referencia a los imports.
- export, exportN
  - : Nombre de los exports a ser importados.
- `alias, aliasN`
  - : Nombre del objeto que recibirá la propiedad importada.

## Descripción

El parámetro `name` es el nombre del objeto que recibirá los miembros exportados. El parámetro `member` especifica miembros individuales, mientras el parámetro `name` importa todos ellos. name puede también ser una función si el módulo exporta un sólo parámetro por defecto en lugar de una serie de miembros. Abajo hay ejemplos que explican la sintaxis.

### Importa el contenido de todo un módulo

Esto inserta `myModule` en el ámbito actual, que contiene todos los elementos exportados en el archivo ubicado en `/modules/my-module.js`.

```js
import * as myModule from "/modules/my-module.js";
```

Aquí, para acceder a los miembros exportados habrá que usar el alias del módulo ("myModule" en este caso) como namespace. Por ejemplo, si el módulo importado arriba incluye un miembro exportado llamado `doAllTheAmazingThings()`, habría que invocarlo de la siguiente manera:

```js
myModule.doAllTheAmazingThings();
```

### Importa un solo miembro de un módulo

Dado un objeto o valor llamado `myExport` que ha sido exportado del módulo `my-module` ya sea implícitamente (porque todo el módulo ha sido exportado) o explícitamente (usando la sentencia {{jsxref("Sentencias/export", "export")}} ), esto inserta `myExport` en el ámbito actual.

```js
import { myExport } from "/modules/my-module.js";
```

### Importa multiples miembros de un módulo

Esto inserta `foo` y `bar` en el ámbito actual.

```js
import { foo, bar } from "my-module.js";
```

### Importa un miembro con un alias más conveniente

Se puede renombrar un miembro exportado cuando se importa. Por ejemplo, esto inserta `shortName` en el ámbito actual.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

### Renombra multiples miembros durante la importación

Importa múltiples miembros exportados de un módulo con un alias conveniente.

```js
import {
  reallyReallyLongModuleExportName as shortName,
  anotherLongModuleName as short,
} from "/modules/my-module.js";
```

### Importa un módulo entero para efectos secundarios solamente

Importa un módulo entero para efectos secundarios solamente, sin importar ningun elemento. Esto ejecuta el código global del módulo, pero no importa ningún valor.

```js
import "/modules/my-module.js";
```

### Importación de elementos por defecto

Es posible tener una exportación por defecto (tanto si se trata de un objeto, función, clase, etc.). Recíprocamente, es posible usa la instrucción `import` para importar esos elementos establecidos como por defecto.

La versión más sencilla de importar un elemento por defecto es:

```js
import myDefault from "/modules/my-module.js";
```

También es posible usar la sintaxis por defecto con lo que hemos visto anteriormente (importación de espacios de nombres o importaciones con nombre. En esos casos, la importación por defecto se deberá realizar en primer lugar. Por ejemplo:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule used as a namespace
```

o

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
// specific, named imports
```

## Ejemplos

Importar un archivo secundario para asistir en un procesamiento de una petición JSON AJAX.

### El módulo: file.js

```js
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open("GET", url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, (data) => callback(JSON.parse(data)));
}
```

### El programa principal: main.js

```js
import { getUsefulContents } from "/modules/file.js";

getUsefulContents("http://www.example.com", (data) => {
  doSomethingUseful(data);
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Sentencias/export", "export")}}
- [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
- [Axel Rauschmayer's book: "Exploring JS: Modules"](https://exploringjs.com/es6/ch_modules.html)


--- SUBTEMA: statements ---


{{jsSidebar("Statements")}}

Las aplicaciones JavaScript se componen de sentencias con una sintaxis propia. Una sentencia puede estar formada por múltiples líneas. Puede haber varias sentencias en una sola línea si separamos cada una de las sentencias por un punto y coma. No es una palabra clave, sino un grupo de palabras clave.

## Sentencias y declaraciones por categoría

Puedes encontrarlas por orden alfabético en la columna de la izquierda .

### Control de flujo

- {{jsxref("Sentencias/block", "Block")}}
  - : Un bloque de sentencias se utiliza para agrupar cero o mas sentencias. El bloque se delimita por un par de llaves.
- {{jsxref("Sentencias/break", "break")}}
  - : Finaliza la sentencia actual loop, switch, o label y transfiere el control del programa a la siguiente sentencia de la sentencia finalizada.
- {{jsxref("Sentencias/continue", "continue")}}
  - : Finaliza la ejecucion de las sentencias dentro de la iteracion actual del actual bucle, y continua la ejecucion del bucle con la siguiente iteracion.
- {{jsxref("Sentencias/Empty", "Empty")}}
  - : Una sentencia vacía se utiliza para proveer una "no sentencia", aunque la sintaxis de JavaScript esperaba una.
- {{jsxref("Sentencias/if...else", "if...else")}}
  - : Ejecuta una sentencia si una condición especificada es true. Si la condición es false, otra sentencia puede ser ejecutada.
- {{jsxref("Sentencias/switch", "switch")}}
  - : Evalua una expresión, igualando el valor de la expresión a una clausula case y ejecuta las sentencias asociadas con dicho case.
- {{jsxref("Sentencias/throw", "throw")}}
  - : Lanza una excepción definida por el usuario.
- {{jsxref("Sentencias/try...catch", "try...catch")}}
  - : Marca un bloque de sentencias para ser probadas (try) y especifica una respuesta, en caso de que se lance una excepción.

### Declaraciones

- {{jsxref("Sentencias/var", "var")}}
  - : Declara una variable, opcionalmente inicializándola a un valor.
- {{jsxref("Sentencias/let", "let")}}
  - : Declara una variable local de ambito de bloque, opcionalmente inicializándola a un valor.
- {{jsxref("Sentencias/const", "const")}}
  - : Declara una constante de solo lectura.

### Funciones

- {{jsxref("Sentencias/function", "function")}}
  - : Declara una función con los parámetros especificados.
- {{jsxref("Sentencias/function*", "function*")}}
  - : Los generadores de funciones permiten escribir {{jsxref("Iteration_protocols", "iteradores")}} con mas facilidad.
- {{experimental_inline}} {{jsxref("Statements/async_function", "async function")}}
  - : Declara una función asíncrona con los parámetros especificados.
- {{jsxref("Statements/return", "return")}}
  - : Especifica el valor a ser retornado por una función.
- {{jsxref("Statements/class", "class")}}
  - : Declara una clase.

### Iteraciones

- {{jsxref("Sentencias/do...while", "do...while")}}
  - : Crea un bucle que ejecuta una instrucción especificada hasta que la condición de prueba se evalúa como falsa. La condición se evalúa después de ejecutar la instrucción, lo que da como resultado que la instrucción especificada se ejecute al menos una vez.
- {{jsxref("Sentencias/for", "for")}}
  - : Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop.
- {{deprecated_inline()}} {{non-standard_inline()}}{{jsxref("Sentencias/for_each...in", "for each...in")}}
  - : Itera una variable especificada sobre todos los valores de las propiedades del objeto. Para cada propiedad distinta, se ejecuta una instrucción especificada.
- {{jsxref("Sentencias/for...in", "for...in")}}
  - : Itera sobre las propiedades enumerables de un objeto, en orden albitrario. Para cada propiedad distinta, las instrucciones pueden ser ejecutadas.
- {{jsxref("Sentencias/for...of", "for...of")}}
  - : Iterates over iterable objects (including {{jsxref("Array", "array")}}, array-like objects, [iterators and generators](/es/docs/Web/JavaScript/Guide/Iterators_and_generators)), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
- {{jsxref("Sentencias/while", "while")}}
  - : Crea un bucle que ejecuta la instrucción especificada siempre que la condición de prueba se evalúe como verdadera. La condición se evalúa antes de ejecutar la instrucción.

### Otros

- {{jsxref("Sentencias/debugger", "debugger")}}
  - : Invoca cualquier funcionalidad de depuración disponible. Si no hay funcionalidad de depuración disponible, esta isntrucción no tiene efecto.
- {{jsxref("Sentencias/export", "export")}}
  - : Usada para permitir a un script firmada proveer propiedades, funciones y objetos a otros scripts firmada o sin firmar. Esta antigua funcionalidad de Netscape ha sido removida y será redefinida por los modulos de ECMAScript 6
- {{jsxref("Sentencias/import", "import")}}
  - : Usada para permitir a un escript importar propiedades, funciones y objetos desde otro script firmado que ha exportado su información. Esta antigua funcionalidad de Netscape ha sido removida y será redefinida por los modulos de ECMAScript 6.
- {{jsxref("Sentencias/label", "label")}}
  - : Provee una instrucción con un identificador que puedes referir usando una instrucción `break` o `continue` .

- {{deprecated_inline()}} {{jsxref("Sentencias/with", "with")}}
  - : Extiende la cadena de alcance para una instrucción.

## Especificaciones

{{Specifications}}

## Vea También

- [Operadores](/es/docs/Web/JavaScript/Reference/Operators)


--- SUBTEMA: label ---


{{jsSidebar("Statements")}}

## Resumen

Proporciona una sentencia con un identificador al que se puede referir al usar las sentencias {{jsxref("Sentencias/break", "break")}} o {{jsxref("Sentencias/continue", "continue")}}.

Por ejemplo, puede usar una etiqueta para identificar un bucle, y entonces usar las sentencias `break` o `continue` para indicar si un programa debería interrumpir el bucle o continuar su ejecución.

## Sintaxis

```
etiqueta :sentencia
```

- `etiqueta`
  - : Cualquier identificador JavaScript que no sea una palabra reservada.

- `sentencia`
  - : Sentencias. `break` puede ser usado con cualquier sentencia etiquetada, y `continue` puede usarse con bucles etiquetados de sentencias.

## Ejemplos

Para un ejemplo de una sentencia label usando `break`, vea `break`. Para un ejemplo de una sentencia label usando `continue`, vea `continue`.

## Vea También

- {{jsxref("Sentencias/break", "break")}}
- {{jsxref("Sentencias/continue", "continue")}}


--- SUBTEMA: let ---


{{jsSidebar("Statements")}}

La instrucción **`let`** declara una variable de alcance local con ámbito de bloque([block](/es/docs/Web/JavaScript/Reference/Statements/block)scope), la cual, opcionalmente, puede ser inicializada con algún valor.

> [!WARNING]
> La palabra reservada **`let`** en Mozilla Firefox 44 y anteriores, está solo disponible para bloques de código en HTML que esten envueltos en una etiqueta `<script type="application/javascript;version=1.7">` (o de una version mayor). Las etiquetas [XUL](/es/docs/XUL) tienen acceso a esas características sin necesidad de dicho bloque. Es necesario tomar en cuenta que esta es una característica ~~no estándar~~ **que ya se ha hecho actualmente estándar**, ~~esto~~ **pero** puede crear conflictos con otros navegadores, **ya que fue una característica no estándar.**

## Sintaxis

```
let var1 [= valor1] [, var2 [= valor2]] [, ..., varN [= valorN]];
```

### Parámetros

- `var1`, `var2`, …, `varN`
  - : Los nombres de la variable o las variables a declarar. Cada una de ellas debe ser un identificador legal de JavaScript
- `value1`, `value2`, …, `valueN`
  - : Por cada una de las variables declaradas puedes, opcionalmente, especificar su valor inicial como una expresión legal JavaScript.

## Descripción

**`let`** te permite declarar variables limitando su alcance (_scope_) al bloque, declaración, o expresión donde se está usando.a diferencia de la palabra clave `var` la cual define una variable global o local en una función sin importar el ámbito del bloque. La otra diferencia entre `var` y `let` es que este último se inicializa a un valor sólo cuando un analizador lo evalúa (ver abajo).

Al igual que `const`, `let` no crea propiedades del objeto se declara globalmente (en el alcance más alto).

### Alcance (scope) a nivel de bloque con `let`

Usar la palabra reservada `let` para definir variables dentro de un bloque.

```js
if (x > y) {
  let gamma = 12.7 + y;
  i = gamma * x;
}
```

Es posible usar definiciones `let` para asociar código en extensiones con un pseudo-espacio-de-nombre (pseudo-namespace). (Ver [Mejores prácticas de seguridad en extensiones](/es/docs/Security_best_practices_in_extensions).)

```js
let Cc = Components.classes,
  Ci = Components.interfaces;
```

`let` puede ser útil para escribir código más limpio cuando usamos funciones internas.

```js
var list = document.getElementById("list");

for (var i = 1; i <= 5; i++) {
  var item = document.createElement("LI");
  item.appendChild(document.createTextNode("Item " + i));

  let j = i;
  item.onclick = function (ev) {
    console.log("Item " + j + " is clicked.");
  };
  list.appendChild(item);
}
```

El ejemplo anterior trabaja como se espera porque las cinco instancias de la función (anónima) interna hacen referencia a cinco diferentes instancias de la variable `j`. Nótese que esto no funcionaría como se espera si reemplazamos `let` con `var` o si removemos la variable `j` y simplemente usamos la variable `i` dentro de la función interna.

#### Reglas de alcance

Variables declaradas por `let` tienen por alcance el bloque en el que se han definido, así mismo, como en cualquier bloque interno. De esta manera, `let` trabaja muy parecido a `var`. La más notable diferencia es que el alcance de una variable `var` es la función contenedora:

```js
function varTest() {
  var x = 31;
  if (true) {
    var x = 71; // ¡misma variable!
    console.log(x); // 71
  }
  console.log(x); // 71
}

function letTest() {
  let x = 31;
  if (true) {
    let x = 71; // variable diferente
    console.log(x); // 71
  }
  console.log(x); // 31
}
// llamamos a las funciones
varTest();
letTest();
```

En el nivel superior de un programa y funciones, `let` , a diferencia de `var`, **no crea** una propiedad en el objeto global, por ejemplo:

```js
var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(this.y); // undefined
```

La salida de este código desplegaría "global" una vez.

### Zona muerta temporal y errores con `let`

La **redeclaración** de la misma variable bajo un mismo [ámbito léxico](https://www.ecma-international.org/ecma-262/6.0/#sec-lexical-environments) terminaría en un error de tipo [`SyntaxError`](/es/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError). Esto también es **extensible** si usamos `var` dentro del ámbito léxico. Esto nos salvaguarda de redeclarar una variable accidentalmente y que no era posible solo con `var.`

```js
if (x) {
  let foo;
  let foo; // Terminamos con un SyntaxError.
}
if (x) {
  let foo;
  var foo; // Terminamos con un SyntaxError.
}
```

En ECMAScript 2015, `let` [no eleva](/es/docs/Web/JavaScript/Reference/Statements/var#description) la variable a la parte superior del bloque. Si se hace una referencia a la variable declarada con `let` (`let foo`) antes de su declaración, terminaríamos con un error de tipo `ReferenceError` (al contrario de la variable declarada con `var`, que tendrá el valor `undefined`), esto porque la variables vive en una "zona muerta temporal" desde el inicio del bloque hasta que la declaración ha sido procesada.

```
function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError: foo no está definido
  var bar = 1;
  let foo = 2;
}
```

Es posible encontrar errores en bloques de control [`switch`](/es/docs/Web/JavaScript/Reference/Statements/switch) debido a que solamente existe un block subyacente.

```js
switch (x) {
  case 0:
    let foo;
    break;

  case 1:
    let foo; // Terminamos con un error de tipo SyntaxError.
    // esto debido a la redeclaracion
    break;
}
```

### Otro ejemplo de zona muerta temporal combinada con ámbito léxico

Debido al [ámbito léxico](https://www.ecma-international.org/ecma-262/6.0/#sec-lexical-environments), el identificador `num` dentro de la expresión (`num + 55`) se evalúa como `num` del bloque `if`, y no como la variable `num` con el valor 33 que esta por encima

En esa misma línea, el `num` del bloque `if` ya se ha creado en el ámbito léxico, pero aún no ha alcanzado (y **terminado**) su inicialización (que es parte de la propia declaración): todavía está en la zona muerta temporal.

```js
function prueba() {
  var num = 33;
  if (true) {
    let num = num + 55; //ReferenceError: no se puede acceder a la declaración léxica `num'antes de la inicialización
  }
}
prueba();
```

## Ejemplos

### `let` vs `var`

Cuando usamos `let` dentro de un bloque, podemos limitar el alcance de la variable a dicho bloque. Notemos la diferencia con `var`, cuyo alcance reside dentro de la función donde ha sido declarada la variable.

```js
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es global

  console.log(a); // 4
  console.log(b); // 1
}

console.log(a); // 5
console.log(b); // 1
```

### `let` en bucles

Es posible usar la palabra reservada `let` para enlazar variables con alcance local dentro del alcance de un bucle en lugar de usar una variable global (definida usando `var`) para dicho propósito.

```js
for (let i = 0; i < 10; i++) {
  console.log(i); // 0, 1, 2, 3, 4 ... 9
}

console.log(i); // ReferenceError: i is not defined
```

## Extensiones `let` no-estandar

### Bloques `let`

> [!WARNING]
> La **sintaxis del bloque y expresion** `let` es no-estandar y sera deshechado en un futuro. ¡No deben ser usados! ver [error 1023609](https://bugzilla.mozilla.org/show_bug.cgi?id=1023609) y [error 1167029](https://bugzilla.mozilla.org/show_bug.cgi?id=1167029) para mas detalles.

Un **bloque `let`** provee una manera de asociar valores con variables dentro del alcance de un bloque sin afectar el valor de variables con nombre similar fuera del bloque.

#### Sintaxis

```
let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) {declaración};
```

#### Descripción

El bloque `let` provee alcance local para las variables. Funciona enlazando cero o más variables en el alcance léxico de un solo bloque de código; de otra manera, es exactamente lo mismo que una declaración de bloque. Hay que notar particularmente que el alcance de una variable declarada dentro de un bloque `let` usando var es equivalente a declarar esa variable fuera del bloque `let`; dicha variable aún tiene alcance dentro de la función. Al usar la sintaxis de bloque `let`, los paréntesis siguientes a `let` son requeridos. Una falla al incluir dichos paréntesis resultará en un error de sintaxis.

#### Ejemplo

```js
var x = 5;
var y = 0;

let (x = x+10, y = 12) {
  console.log(x+y); // 27
}

console.log(x + y); // 5
```

Las reglas para el bloque de código son las mismas que para cualquier otro bloque de código en JavaScript. Es posible tener sus propias variables locales usando declaraciones `let` en dicho bloque.

#### Reglas de alcance

El alcance de las variables definidas usando `let` es el mismo bloque `let`, así como cualquier bloque interno contenido dentro de el bloque, a menos que esos bloques internos definan variables con el mismo nombre.

### expresiones `let`

> [!WARNING]
> `Soporte de expresiones let` ha sido removido en Gecko 41 ([Error 1023609 en Firefox](https://bugzil.la/1023609)).

Una **expresion `let`** permite establecer variables con alcance dentro de una expresión.

#### Sintaxis

```
let (var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]]) expression;
```

#### Ejemplo

Podemos usar `let` para establecer variables que tienen como alcance solo una expresión:

```js
var a = 5;
let(a = 6) console.log(a); // 6
console.log(a); // 5
```

#### Reglas de alcance

Dada la expresión `let` siguiente:

```
let (decls) expr
```

Existe un bloque implícito creado alrededor de expr.

## Especificaciones

{{Specifications}}

## Compatibilidad en navegadores

{{Compat}}

## Ver también

- [`var`](/es/docs/Web/JavaScript/Reference/Statements/var)
- [`const`](/es/docs/Web/JavaScript/Reference/Statements/const)


--- SUBTEMA: return ---


{{jsSidebar("Statements")}}

## Resumen

La sentencia `return` finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.

## Sintaxis

```
return [[ expresion ]];
```

- expresion
  - : La expresión a retornar. Si se omite, `undefined` es retornado en su lugar.

## Description

Cuando una instrucción de retorno se llama en una función, se detiene la ejecución de esta. Si se especifica un valor dado, este se devuelve a quien llama a la función. Si se omite la expresión, `undefined` se devuelve en su lugar. Todas las siguientes sentencias de retorno rompen la ejecución de la función:

```js
return;
return true;
return false;
return x;
return x + y / 3;
```

## <br>La inserción automática Punto y coma

La instrucción de retorno se ve afectada por la inserción automática de punto y coma (ASI). No se permite el terminador de línea entre la palabra clave de retorno y la expresión.

```js
return;
a + b;
```

se transforma por ASI en:

```html
return; a + b;
```

La consola le advertirá "código inalcanzable después de la declaración de retorno".

> [!NOTE]
> A partir de Gecko 40 (Firefox 40 / Thunderbird 40 / SeaMonkey 2.37), una advertencia es mostrada en la consola si se encuentra código inalcanzable despues de una instrucción return.

## Ejemplos

### Ejemplo: Usando `return`

La siguiente función devuelve el cuadrado de su argumento, `x`, donde `x` es un número.

```js
function cuadrado(x) {
  return x * x;
}
```

## Vea También

- [Funciones](/es/docs/Web/JavaScript/Reference/Functions)


--- SUBTEMA: switch ---


{{jsSidebar("Statements")}}

La **declaración** **`switch`** evalúa una [expresión](/es/docs/Web/JavaScript/Guide/Expressions_and_operators), comparando el valor de esa expresión con una instancia **`case`**, y ejecuta [declaraciones](/es/docs/Web/JavaScript/Reference/Statements) asociadas a ese `case`, así como las declaraciones en los `case` que siguen.

## Syntaxis

```
switch (expresión) {
  case valor1:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    [break;]
  case valor2:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    [break;]
  ...
  case valorN:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
    [break;]
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    [break;]
}
```

- `expresión`
  - : Es una expresión que es comparada con el valor de cada instancia `case`.
- `case valorN`
  - : Una instancia `case valorN` es usada para ser comparada con la `expresión`. Si la `expresión` coincide con el `valorN`, las declaraciones dentro de la instancia `case` se ejecutan hasta que se encuentre el final de la declaración `switch` o hasta encontrar una interrupción `break`.

- `default`
  - : Una instancia `default`, cuando es declarada, es ejecutada si el valor de la `expresión` no coincide con cualquiera de las otras instancias `case valorN`.

## Descripción

Si ocurre una coincidencia, el programa ejecuta las declaraciones asociadas correspondientes. Si la expresión coincide con múltiples entradas, la primera será la seleccionada, incluso si las mayúsculas son tenidas en cuenta.

El programa primero busca la primer instacia `case` cuya expresión se evalúa con el mismo valor de la expresión de entrada (usando [comparación estricta](/es/docs/Web/JavaScript/Reference/Operators), `===)` y luego transfiere el control a esa cláusula, ejecutando las declaraciones asociadas. Si no se encuentra una cláusula de `case` coincidente, el programa busca la cláusula `default` opcional, y si se encuentra, transfiere el control a esa instancia, ejecutando las declaraciones asociadas. Si no se encuentra una instancia `default` el programa continúa la ejecución en la instrucción siguiente al final del `switch`. Por convención, la instancia `default` es la última cláusula, pero no tiene que ser así.

La declaración [`break`](/es/docs/Web/JavaScript/Reference/Statements/break) es opcional y está asociada con cada etiqueta de `case` y asegura que el programa salga del `switch` una vez que se ejecute la instrucción coincidente y continúe la ejecución en la instrucción siguiente. Si se omite el `break` el programa continúa la ejecución en la siguiente instrucción en la declaración de `switch` .

## Ejemplos

### Usando `switch`

En el siguiente ejemplo, si `expresión` se resuelve a "Platanos", el algoritmo compara el valor con el `case` "Platanos" y ejecuta la declaración asociada. Cuando se encuentra un `break`, el programa sale del condicional `switch` y ejecuta la declaración que lo procede. Si se omite el `break`, el `case` "Cerezas" también es ejecutado.

```js
switch (expr) {
  case "Naranjas":
    console.log("El kilogramo de naranjas cuesta $0.59.");
    break;
  case "Manzanas":
    console.log("El kilogramo de manzanas cuesta $0.32.");
    break;
  case "Platanos":
    console.log("El kilogramo de platanos cuesta $0.48.");
    break;
  case "Cerezas":
    console.log("El kilogramo de cerezas cuesta $3.00.");
    break;
  case "Mangos":
  case "Papayas":
    console.log("El kilogramo de mangos y papayas cuesta $2.79.");
    break;
  default:
    console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
}

console.log("¿Hay algo más que te quisiera consultar?");
```

### ¿Qué pasa si olvido un break?

Si olvidas un `break`, el script se ejecutará desde donde se cumple la condición y ejecutará el siguiente `case` independientemente si esta condición se cumple o no. Ver el siguiente ejemplo:

```js
var foo = 0;
switch (foo) {
  case -1:
    console.log("1 negativo");
    break;
  case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
    console.log(0);
  // NOTA: el "break" olvidado debería estar aquí
  case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
    console.log(1);
    break; // Al encontrar un "break", no será ejecutado el 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
```

### ¿Puedo usar un \<default> entre condiciones?

Sí, ¡es posible! JavaScript retornará a la instancia `default` en caso de no encontrar una coincidencia:

```js
var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // al encontrar este 'break' no se continuará con el siguiente 'default:'
  default:
    console.log("default");
  // fall-through
  case 1:
    console.log("1");
}
```

Al estar el `case 1:` a continuación de `default`, y al no haber un `break` de por medio, veremos que la declaración del `case 1:` será ejecutada, apareciendo el resultado `1` en el _log de consola._

### Metodos para casos con múltiple criterio

La fuente de esta técnica esta aquí:

[Switch statement multiple cases in JavaScript (Stack Overflow)](https://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript)

#### Operación única con múltiples casos

Este método toma ventaja del hecho de que, si no hay un `break` debajo de una declaración `case`, continuará la ejecución hasta el siguiente `case`, ignorando si en dicho caso se cumple o no el criterio indicado. Comprobar en la sección _¿Qué pasa si olvido un `break`?_

Este es un ejemplo de operación única con sentencia `switch` secuencial, donde cuatro valores diferentes se comportan exactamente de la misma manera:

```js
var Animal = "Jirafa";
switch (Animal) {
  case "Vaca":
  case "Jirafa":
  case "Perro":
  case "Cerdo":
    console.log("Este animal subirá al Arca de Noé.");
    break;
  case "Dinosaurio":
  default:
    console.log("Este animal no lo hará.");
}
```

#### Operaciones encadenadas con múltiples casos

Este es un ejemplo de una sentencia `switch` secuencial con múltiples operaciones, donde, dependiendo del valor entero dado, se pueden recibir diferentes resultados. Esto demuestra que el algoritmo correrá en el orden en que se coloquen las declaraciones `case`, y que no tiene que ser numéricamente secuencial. En JavaScript, también es posible combinar definiciones con valores `"string"` dentro de estas declaraciones `case`.

```js
var foo = 1;
var output = "Salida: ";
switch (foo) {
  case 10:
    output += "¿Y ";
  case 1:
    output += "Cuál ";
    output += "Es ";
  case 2:
    output += "Tu ";
  case 3:
    output += "Nombre";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Por favor, selecciona un valor del 1 al 6.");
}
```

La salida (output) de este ejemplo:

| Value                                  | Log text                                   |
| -------------------------------------- | ------------------------------------------ |
| foo es NaN o no es 1, 2, 3, 4, 5 ni 10 | Por favor, selecciona un valor del 1 al 6. |
| 10                                     | Salida: ¿Y Cuál Es Tu Nombre?              |
| 1                                      | Salida: Cuál Es Tu Nombre?                 |
| 2                                      | Salida: Tu Nombre?                         |
| 3                                      | Salida: Nombre?                            |
| 4                                      | Salida: ?                                  |
| 5                                      | Salida: !                                  |

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [`if...else`](/es/docs/Web/JavaScript/Reference/Statements/if...else)


--- SUBTEMA: throw ---


{{jsSidebar("Statements")}}

## Resumen

Lanza una excepcion definida por el usuario.

## Sintaxis

```
throw expresion;
```

- `expresion`
  - : Expresión a lanzar.

## Descripción

Utilice la sentencia `throw` para lanzar una excepción. Cuando lanza una excepción, `expresion` especifica el valor de la excepción. Cada uno de los siguientes ejemplos lanza una excepción:

```js
throw "Error2"; // genera una excepción con un valor cadena
throw 42; // genera una excepción con un valor 42
throw true; // genera una excepción con un valor true
```

## Ejemplos

### Ejemplo: Lanzar un objeto

Puede especificar un objeto cuando lanza una excepción. Puede entonces referenciar las propiedades del objeto en el bloque `catch`. El siguiente ejemplo crea un objeto `miExcepcionUsuario` del tipo `ExceptionUsuario` y la utiliza usándola en una sentencia `throw`.

```js
function ExceptionUsuario(mensaje) {
  this.mensaje = mensaje;
  this.nombre = "ExceptionUsuario";
}

function getNombreMes(mes) {
  mes = mes - 1; // Ajustar el número de mes al índice del arreglo (1 = Ene, 12 = Dic)
  var meses = new Array(
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  );
  if (meses[mes] != null) {
    return meses[mes];
  } else {
    miExcepcionUsuario = new ExceptionUsuario("NumeroMesNoValido");
    throw miExcepcionUsuario;
  }
}

try {
  // sentencias para try
  nombreMes = getNombreMes(miMes);
} catch (excepcion) {
  nombreMes = "desconocido";
  registrarMisErrores(excepcion.mensaje, excepcion.nombre); // pasa el objeto exception al manejador de errores
}
```

### Ejemplo: Otro ejemplo sobre lanzar un objeto

El siguiente ejemplo comprueba una cadena de entrada para un código postal de EE.UU. Si el código postal utiliza un formato no válido, la sentencia throw lanza una excepción creando un objeto de tipo `ExcepcionFormatoCodigoPostal`.

```js
/*
 * Creates a ZipCode object.
 *
 * Accepted formats for a zip code are:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * If the argument passed to the ZipCode constructor does not
 * conform to one of these patterns, an exception is thrown.
 */

function ZipCode(zip) {
   zip = new String(zip);
   pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
   if (pattern.test(zip)) {
      // zip code value will be the first match in the string
      this.value = zip.match(pattern)[0];
      this.valueOf = function() {
         return this.value
      };
      this.toString = function() {
         return String(this.value)
      };
   } else {
      throw new ExcepcionFormatoCodigoPostal(zip);
   }
}

function ExcepcionFormatoCodigoPostal(valor) {
   this.valor = valor;
   this.mensaje = "no conforme con el formato esperado de código postal";
   this.toString = function() {
      return this.valor + this.mensaje
   };
}

/*
 * Esto podría estar en un script que valida los datos de una dirección de EE.UU.
 */

var CODIGOPOSTAL_NOVALIDO = -1;
var CODIGOPOSTAL_DESCONOCIDO_ERROR = -2;

function verificarCodigoPostal(codigo) {
   try {
      codigo = new CodigoPostal(codigo);
   } catch (excepcion) {
      if (excepcion instanceof ExcepcionFormatoCodigoPostal) {
         return CODIGOPOSTAL_NOVALIDO;
      } else {
         return CODIGOPOSTAL_DESCONOCIDO_ERROR;
      }
   }
   return codigo;
}

a = verificarCodigoPostal(95060);         // devuelve 95060
b = verificarCodigoPostal(9560;)          // devuelve -1
c = verificarCodigoPostal("a");           // devuelve -1
d = verificarCodigoPostal("95060");       // devuelve 95060
e = verificarCodigoPostal("95060 1234");  // devuelve 95060 1234
```

### Ejemplo: Relanzar una excepción

Puede usar `throw` para volver a lanzar una excepción después de cogerla. El siguiente ejemplo coge una excepción con un valor numérico y la vuelve a lanzar si el valor es superior a 50. La excepción relanzada propaga hacia arriba la función adjunta o a un nivel superior para que el usuario pueda verla.

```js
try {
  throw n; // lanza una excepción con un valor numérico
} catch (excepcion) {
  if (excepcion <= 50) {
    // sentencias para manejar la excepción 1-50
  } else {
    // no se puede manejar esta excepción, así que se vuelve a lanzar
    throw excepcion;
  }
}
```

## Vea También

- {{jsxref("Sentencias/try...catch", "try...catch")}}


--- SUBTEMA: try...catch ---


{{jsSidebar("Statements")}}

La declaración **`try...catch`** señala un bloque de instrucciones a intentar (**`try`**), y especifica una respuesta si se produce una excepción (**`catch`**).

{{InteractiveExample("JavaScript Demo: Statement - Try...Catch")}}

```js interactive-example
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}
```

## Sintaxis

```
try {
    try_statements
}
[catch (exception_var_1 if condition_1) { // non-standard
    catch_statements_1
}]
...
[catch (exception_var_2) {
    catch_statements_2
}]
[finally {
    finally_statements
}]
```

- `try_statements`
  - : Las sentencias que serán ejecutadas.

- `catch_statements_1`, `catch_statements_2`
  - : Sentencias que se ejecutan si una excepción es lanzada en el bloque `try`.

- `exception_var_1`, `exception_var_2`
  - : Identificador que contiene un objeto de excepcion asociado a la cláusula `catch`.

- `condition_1`
  - : Una expresión condicional.

- `finally_statements`
  - : Sentencias que se ejecutan después de que se completa la declaración `try` . Estas sentencias se ejecutan independientemente de si una excepcion fue lanzada o capturada.

## Descripción

La sentencia `try` consiste en un bloque `try` que contiene una o más sentencias. Las llaves `{}` se deben utilizar siempre `,` incluso para una bloques de una sola sentencia. Al menos un bloque `catch` o un bloque `finally` debe estar presente. Esto nos da tres formas posibles para la sentencia `try`:

1. `try...catch`
2. `try...finally`
3. `try...catch...finally`

Un bloque `catch` contiene sentencias que especifican que hacer si una excepción es lanzada en el bloque `try`. Si cualquier sentencia dentro del bloque `try` (o en una funcion llamada desde dentro del bloque `try`) lanza una excepción, el control cambia inmediatamente al bloque `catch` . Si no se lanza ninguna excepcion en el bloque `try`, el bloque `catch` se omite.

La bloque `finally` se ejecuta despues del bloque `try` y el/los bloque(s) `catch` hayan finalizado su ejecución. Éste bloque siempre se ejecuta, independientemente de si una excepción fue lanzada o capturada.

Puede anidar una o más sentencias `try`. Si una sentencia `try` interna no tiene una bloque `catch`, se ejecuta el bloque `catch` de la sentencia `try` que la encierra.

Usted también puede usar la declaración `try` para manejar excepciones de JavaScript. Consulte la [Guía de JavaScript](/es/docs/Web/JavaScript/Guide) para obtener mayor información sobre excepciones de JavaScript.

### Bloque catch incondicional

Cuando solo se utiliza un bloque `catch`, el bloque `catch` es ejecutado cuando cualquier excepción es lanzada. Por ejemplo, cuando la excepción ocurre en el siguiente código, el control se transfiere a la cláusula `catch`.

```js
try {
  throw "myException"; // genera una excepción
} catch (e) {
  // sentencias para manejar cualquier excepción
  logMyErrors(e); // pasa el objeto de la excepción al manejador de errores
}
```

El bloque `catch` especifíca un identificador ( `e` en el ejemplo anterior) que contiene el valor de la excepción. Este valor está solo disponible en el {{Glossary("Scope", "scope")}} de el bloque `catch`.

### Bloques catch condicionales

Tambien se pueden crear "bloques `catch` condicionales", combinando bloques `try...catch` con estructuras `if...else if...else` como estas:

```js
try {
    myroutine();  // puede lanzar tres tipos de excepciones
} catch (e) {
    if (e instanceof TypeError) {
        // sentencias para manejar excepciones TypeError
    } else if (e instanceof RangeError) {
        // sentencias para manejar excepciones RangeError
    } else if (e instanceof EvalError) {
        // sentencias para manejar excepciones EvalError
    } else {
       // sentencias para manejar cualquier excepción no especificada
       logMyErrors(e); // pasa el objeto de la excepción al manejador de errores
}
```

### El identificador de excepciones

Cuando una excepción es lanzada en el bloque `try`, `exception_var` (por ejemplo, la `e` en `catch (e)`) guarda el valor de la excepción. Se puede usar éste identificador para obtener información acerca de la excepción que fue lanzada. Este valor está solo disponible en el {{Glossary("Scope", "scope")}} de el bloque `catch`.

```js
function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
```

### La cláusula `finally`

La cláusula `finally` contiene sentencias a ejecutarse después de que las cláusulas `try` y `catch` se ejecuten, pero antes de las sentencias que le siguen al bloque `try..catch..finally`. Note que la cláusula `finally` se ejecuta sin importar si una excepción es o no lanzada. Si una excepción es lanzada, las instrucciones en la cláusula `finally` se ejecutan incluso si ninguna cláusula `catch` maneja la excepción.

Usted puede usar la cláusula finally para hacer que su script falle plácidamente cuando una excepción ocurra; por ejemplo, para hacer una limpieza general, usted puede necesitar liberar un recurso que su script haya retenido.

Puede parecer extraño tener una cláusula relacionada a una excepción que se ejecuta sin importar si hay una excepción o no, pero esta concepción en realidad sirve a un propósito. El punto importante no es que la cláusula `finally` siempre se ejecuta, si no más bien que el codigo ordinario que le sigue a `try..catch` no.

Por ejemplo, si otra excepción ocurre dentro de un bloque `catch` de una declaración `try`, cualquier codigo restante en el mismo bloque exterior `try` que encierra ese `try..catch` (o en el flujo principal, si no es un bloque `try` exterior) , no será ejecutado, dado que el control es inmediatamente transferido al bloque `catch` del `try` exterior (o el generador de error interno, si no es en un bloque `try`).

Por lo tanto, cualquier rutina de limpieza hecha en esa sección encerrada (o la principal) antes de que exista, será saltada. Sin embargo, si la declaración `try` tiene un bloque `finally`, entonces el código de ese bloque `finally` será ejecutado primero para permitir tal limpieza, y ENTONCES el bloque `catch` de la otra declaración `try` (o el generador de error) tomará el control para manejar la segunda excepción.

Ahora, si esa rutina de limpieza debiera ser hecha ya sea que el código del `try..catch` tenga éxito o no, entonces si el bloque `finally` se ejecutase solo después de una excepción, el mismo código de limpieza tendría que estar presente dentro y fuera del bloque `finally`, y por lo tanto no hay razón para no tener el bloque `finally` solo, y dejarlo ejecutarse sin importar si hay excepciones o no.

El siguiente ejemplo abre un archivo y despues ejecuta sentencias que usan el archivo (JavaScript del lado del servidor permite acceder a archivos). Si una excepción es lanzada mientras el archivo está abierto, la cláusula `finally` cierra el archivo antes de que el script falle. El código en `finally` también se ejecuta después de un retorno explícito de los bloques `try` o `catch`.

```js
openMyFile();
try {
  // retiene un recurso
  writeMyFile(theData);
} finally {
  closeMyFile(); // siempre cierra el recurso
}
```

## Ejemplos

### Bloques try anidados

Primero, veamos que pasa con esto:

```js
try {
  try {
    throw new Error("oops");
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "finally"
// "outer" "oops"
```

Ahora, si nosotros ya capturamos la excepción en una declaración try interna agregando un bloque catch.

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
```

Y ahora vamos a relanzar el error.

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"
```

Cualquier excepción dada será capturada solo una vez por el bloque catch más cercano a menos que sea relanzado. Por supuesto cualquier nueva excepción que se origine en el bloque 'interno' (porque el código en el bloque catch puede hacer algo que lanze un error), será capturado por el bloque 'externo'.

### Retornando de un bloque finally

Si el bloque `finally` retorna un valor, este valor se convierte en el valor de retorno de toda la producción `try-catch-finally`, a pesar de cualquier sentencia `return` en los bloques `try` y `catch`. Esto incluye excepciones lanzadas dentro del bloque catch.

```js
(function () {
  try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
      throw ex;
    } finally {
      console.log("finally");
      return;
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
})();

// Output:
// "inner" "oops"
// "finally"
```

El "oops" externo no es lanzado debido al retorno en el bloque finally. Lo mismo aplicaría para cualquier valor retornado del bloque catch.

Vea los ejemplos para {{jsxref("Sentencias/throw", "throw")}}.

## Vea también

- {{jsxref("Error")}}
- {{jsxref("Sentencias/throw", "throw")}}


--- SUBTEMA: var ---


{{jsSidebar("Statements")}}

## Resumen

La sentencia **`var`** declara una variable, opcionalmente inicializándola con un valor.

## Sintaxis

```
var nombreDeVariable1 [= valor1] [, nombreDeVariable2 [= valor2] ... [, nombreDeVariableN [=valorN]]];
```

- `nombreDeVariableN`
  - : Representa el nombre que el programador da a la variable. Puede ser cualquier identificador legal.

- `valorN`
  - : Valor inicial de la variable. Puede ser cualquier expresión legal. El valor predeterminado es _undefined_ (en español, _indefinida_).

## Descripción

Las declaraciones de variables, donde sea que ocurran, son procesadas antes de que cualquier otro código sea ejecutado. El ámbito de una variable declarada con la palabra reservada **`var`** es su _contexto de ejecución_ en curso*,* que puede ser la función que la contiene o, para las variables declaradas afuera de cualquier función, un ámbito global. Si re-declaras una variable Javascript, esta no perderá su valor.

Asignar un valor a una variable no declarada implica crearla como variable global (se convierte en una propiedad del objeto global) cuando la asignación es ejecutada. Las diferencias entre una variable declarada y otra sin declarar son:

1\. Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales.

```js
function x() {
  y = 1; // Lanza un error de tipo "ReferenceError" en modo estricto ('use strict')
  var z = 2;
}

x();

console.log(y); // Imprime "1"
console.log(z); // Lanza un error de tipo "ReferenceError": z no está definida afuera de x
```

2\. Las variables declaradas son creadas antes de ejecutar cualquier otro código. Las variables sin declarar no existen hasta que el código que las asigna es ejecutado.

```js
console.log(a); // Lanza un error de tipo "ReferenceError".
console.log("trabajando..."); // Nunca se ejecuta.
```

```js
var a;
console.log(a); // Imprime "undefined" o "" dependiendo del navegador.
console.log("trabajando..."); // Imprime "trabajando...".
```

3\. Las variables declaradas son una propiedad no-configurable de su contexto de ejecución (de función o global). Las variables sin declarar son configurables (p. ej. pueden borrarse).

```js
var a = 1;
b = 2;

delete this.a; // Lanza un error de tipo "ReferenceError" en modo estricto ('use strict'), de lo contrario falla silenciosamente.
delete this.b;

console.log(a, b); // Lanza un error de tipo "ReferenceError".
// La propiedad 'b' se eliminó y ya no existe.
```

Debido a esas tres diferencias, fallar al declarar variables muy probablemente llevará a resultados inesperados. Por tanto **se recomienda siempre declarar las variables, sin importar si están en una función o un ámbito global**. Y en el modo estricto ([strict mode](/es/docs/Web/JavaScript/Reference/Strict_mode)) de ECMAScript 5, asignar valor a una variable sin declarar lanzará un error.

### Elevación de variables

Como la declaración de variables (y todas las declaraciones en general) se procesa antes de ejecutar cualquier código, declarar una variable en cualquier parte del código es equivalente a declararla al inicio del mismo. Esto también significa que una variable puede parecer usarse antes de ser declarada. Este comportamiento es llamado _hoisting_ (del inglés "elevación"), ya que la declaración de una variable parecer haber sido movida a la cima de la función o código global.

```js
bla = 2;
var bla;
// ...

// Es entendido implicitamente como:

var bla;
bla = 2;
```

Por esa razón, se recomienda siempre declarar variables al inicio de su ámbito (la cima del código global y la cima del código de función) para que sea claro cuáles variables pertenecen al ámbito de función (local) y cuáles son resueltas en la cadena de ámbito.

Es importante señalar que **la elevación afectará la declaración** de variables, pero **no su inicialización**. El valor será asignado precisamente cuando la sentencia de asignación sea alcanzada:

```js
function haz_algo() {
  console.log(bar); // undefined (valor indefinido)
  var bar = 111;
  console.log(bar); // 111
}

// Se entiende implícitamente como:
function haz_algo() {
  var bar;
  console.log(bar); // undefined (valor indefinido)
  bar = 111;
  console.log(bar); // 111
}
```

## Ejemplos

### Declarando e inicializando dos variables

```js
var a = 0,
  b = 0;
```

### Asignando dos variables con un solo valor de cadena

```js
var a = "A";
var b = a;

// Equivalente a:

var a,
  b = (a = "A");
```

Sé consciente del orden:

```js
var x = y,
  y = "A";
console.log(x + y); // Imprimirá "undefinedA"
```

Aquí, '`x`' & '`y`' son declaradas antes de ejecutarse cualquier código, y la asignación ocurre después. Al momento de evaluar "`x = y`", '`y`' existe así que ningún error "`ReferenceError`" es lanzado y su valor es '`undefined`', de modo que '`x`' también tiene asignada el valor '`undefined`'. Después, a 'y' se le asigna el valor 'A'. Consecuentemente, luego de la primera línea, '`x`' es exactamente igual a `'undefined`' & '`y`' es igual a `'A'`, de ahí el resultado.

### Initialización de muchas variables

```js
var x = 0;

function f() {
  var x = (y = 1); // 'x' es declarada localmente, ¡'y' no lo es!
}
f();

console.log(x, y); // Lanza un error de tipo "ReferenceError" en modo estricto ('y' no está definida). De lo contrario se imprimiría "0, 1".
// En modo no-estricto:
// 'x' es la variable global como se esperaría
// 'y' sin embargo, se sale de la función
```

### Globales implícitas y ámbito externo a una función

Las variables que parecen ser globales implícitas pueden ser referencias a variables en un ámbito externo a la función:

```js
var x = 0; // 'x' es declarada globalmente, luego se le asigna el valor 0.

console.log(typeof z); // Imprime "undefined", pues 'z' aún no existe.

function a() {
  // Cuando 'a()' es invocada,
  var y = 2; // 'y' es declarada localmente en la function 'a()', después se le asigna el valor 2.

  console.log(x, y); // Imprime "0, 2".

  function b() {
    // Cuando 'b()' es invocada,
    x = 3; // Asigna el valor 3 a la global 'x' ya existente, no crea una nueva variable global.
    y = 4; // Asigna 4 a la externa existente 'y', no crea una nueva variable global.
    z = 5; // Crea una nueva variable global 'z' y le asigna un valor de 5.
  } // (Lanza un error de tipo "ReferenceError" en modo estricto.)

  b(); // Invocar 'b()' crea 'z' como variable global.
  console.log(x, y, z); // Imprime "3, 4, 5".
}

a(); // Invocar 'a()' también llama a 'b()'.
console.log(x, z); // Imprime "3, 5", porque 'z' ya es una global.
console.log(typeof y); // Imprime 'undefined' porque 'y' es local en la función 'a()'
```


--- SUBTEMA: while ---


{{jsSidebar("Statements")}}

## Resumen

Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia

## Sintaxis

```
while (condicion)
  sentencia
```

- `condicion`
  - : Una expresión que se evalúa antes de cada paso del bucle. Si esta condición se evalúa como verdadera, se ejecuta `sentencia`. Cuando la condición se evalúa como false, la ejecución continúa con la `sentencia` posterior al bucle `while`.

- `sentencia`
  - : Una sentecia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utiliza una sentencia {{jsxref("Sentencias/block", "block")}} (`{ ... }`) para agrupar esas sentencias.

## Ejemplos

El siguiente bucle `while` itera mientras `n` es menor que tres.

```js
n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

Cada interación, el bucle incrementa `n` y la añade a `x`. Por lo tanto, `x` y `n` toman los siguientes valores:

- Después del primer pase: `n` = 1 y `x` = 1
- Después del segundo pase: `n` = 2 y `x` = 3
- Después del tercer pase: `n` = 3 y `x` = 6

Después de completar el tercer pase, la condición `n` < 3 no será verdadera más tiempo, por lo que el bucle terminará.

## Vea También

- {{jsxref("Sentencias/do...while", "do...while")}}
- {{jsxref("Sentencias/for", "for")}}
