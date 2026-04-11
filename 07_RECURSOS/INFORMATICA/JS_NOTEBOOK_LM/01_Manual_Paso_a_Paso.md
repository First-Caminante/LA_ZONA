# MANUAL DE APRENDIZAJE JAVASCRIPT


# TEMA: GUIDE/INTRODUCTION



--- SUBTEMA: introduction ---


{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Este capítulo presenta JavaScript y analiza algunos de sus conceptos fundamentales.

## ¿Qué debes conocer previamente?

Esta guía presume que tienes los siguientes antecedentes básicos:

- Comprensión general de Internet y la ({{Glossary("WWW", "World Wide Web")}}).
- Buen conocimiento práctico del {{Glossary("HTML", "lenguaje de marcado de hipertexto (HTML)")}}.
- Alguna experiencia en programación. Si eres nuevo en la programación, prueba uno de los tutoriales vinculados en la página principal sobre {{JSxRef("JavaScript", "JavaScript")}}.

## Dónde encontrar información sobre JavaScript

La documentación de JavaScript en MDN incluye lo siguiente:

- [Aprende desarrollo web](/es/docs/Learn_web_development) proporciona información para principiantes e introduce conceptos básicos de programación e Internet.
- La [Guía de JavaScript](/es/docs/Web/JavaScript/Guide) (esta guía) proporciona una descripción general sobre el lenguaje JavaScript y sus objetos.
- La [Referencia de JavaScript](/es/docs/Web/JavaScript/Reference) proporciona material de referencia detallado para JavaScript.

Si eres nuevo en JavaScript, comienza con los artículos en el [área de aprendizaje](/es/docs/Learn_web_development) y la [Guía de JavaScript](/es/docs/Web/JavaScript/Guide). Una vez que tengas una firme comprensión de los fundamentos, puedes usar la [Referencia de JavaScript](/es/docs/Web/JavaScript/Reference) para obtener más detalles sobre objetos y declaraciones individuales.

## ¿Qué es JavaScript?

JavaScript es un lenguaje de programación multiplataforma orientado a objetos que se utiliza para hacer que las páginas web sean interactivas (p. ej., Que tienen animaciones complejas, botones en los que se puede hacer clic, menús emergentes, etc.). También hay versiones de JavaScript de lado del servidor más avanzadas, como Node.js, que te permiten agregar más funcionalidad a un sitio web que simplemente descargar archivos (como la colaboración en tiempo real entre varias computadoras). Dentro de un entorno (por ejemplo, un navegador web), JavaScript se puede conectar a los objetos de su entorno para proporcionar control programático sobre ellos.

JavaScript contiene una biblioteca estándar de objetos, como `Array`, `Date` y `Math`, y un conjunto básico de elementos del lenguaje como operadores, estructuras de control y declaraciones. El núcleo de JavaScript se puede extender para una variedad de propósitos completándolo con objetos adicionales; por ejemplo:

- _JavaScript de lado del cliente_ extiende el núcleo del lenguaje al proporcionar objetos para controlar un navegador y su _Modelo de objetos de documento_ (DOM por _Document Object Model_). Por ejemplo, las extensiones de lado del cliente permiten que una aplicación coloque elementos en un formulario HTML y responda a eventos del usuario, como clics del mouse, formularios para ingreso de datos y navegación de páginas.
- _JavaScript de lado del servidor_ amplía el núcleo del lenguaje al proporcionar objetos relevantes para ejecutar JavaScript en un servidor. Por ejemplo, las extensiones de lado del servidor permiten que una aplicación se comunique con una base de datos, brinde continuidad de información de una invocación a otra de la aplicación o realice manipulación de archivos en un servidor.

Esto significa que en el navegador, JavaScript puede cambiar la apariencia de la página web (DOM). Y, del mismo modo, el JavaScript de Node.js en el servidor puede responder a solicitudes personalizadas desde el código escrito en el navegador.

## JavaScript y Java

JavaScript y Java son similares en algunos aspectos, pero fundamentalmente diferentes en otros. El lenguaje JavaScript se parece a Java, pero no tiene el tipado estático ni la fuerte verificación de tipos de Java. JavaScript sigue la mayoría de la sintaxis de las expresiones de Java, convenciones de nomenclatura y construcciones de control de flujo básicas, razón por la cual se cambió el nombre de LiveScript a JavaScript.

A diferencia del sistema de clases en tiempo de compilación de Java creado por declaraciones, JavaScript admite un sistema de tiempo de ejecución basado en una pequeña cantidad de tipos de datos que representan valores numéricos, booleanos y de cadena. JavaScript tiene un modelo de objetos basado en prototipos en lugar del modelo de objetos basado en clases más común. El modelo basado en prototipos proporciona herencia dinámica; es decir, lo que se hereda puede variar en objetos individuales. JavaScript también admite funciones sin requisitos declarativos especiales. Las funciones pueden ser propiedades de objetos, ejecutándose como métodos débilmente tipados.

JavaScript es un lenguaje de forma muy libre en comparación con Java. No es necesario declarar todas las variables, clases y métodos. No tienes que preocuparte por si los métodos son públicos, privados o protegidos, y no tienes que implementar interfaces. Las variables, los parámetros y los tipos de retorno de función no se tipifican explícitamente.

Java es un lenguaje de programación basado en clases diseñado para una ejecución rápida y con seguridad de tipos. La seguridad de tipos significa, por ejemplo, que no puedes convertir un entero de Java en una referencia de objeto o acceder a la memoria privada corrompiendo el código de bytes de Java. El modelo basado en clases de Java significa que los programas constan exclusivamente de clases y sus métodos. La herencia de clases de Java y la tipificación fuerte generalmente requieren jerarquías de objetos estrechamente acopladas. Estos requisitos hacen que la programación Java sea más compleja que la programación JavaScript.

Por el contrario, JavaScript desciende en espíritu de una línea de lenguajes más pequeños de tipado dinámico como HyperTalk y dBASE. Estos lenguajes de «_scripting_» ofrecen herramientas de programación a una audiencia mucho más amplia debido a su sintaxis más sencilla, funcionalidad especializada incorporada y requisitos mínimos para la creación de objetos.

| JavaScript                                                                                                                                                                                                     | Java                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Orientado a objetos. No hay distinción entre tipos de objetos. La herencia se realiza a través del mecanismo de prototipo, y las propiedades y métodos se pueden agregar a cualquier objeto de forma dinámica. | Basado en clases. Los objetos se dividen en clases e instancias con toda la herencia a través de la jerarquía de clases. Las clases y las instancias no pueden tener propiedades o métodos agregados dinámicamente. |
| Los tipos de datos de las variables no se declaran (tipado dinámico, tipado flexible).                                                                                                                         | Los tipos de datos de las variables se deben declarar (tipado estático, fuertemente tipado).                                                                                                                        |
| No se puede escribir automáticamente en el disco duro.                                                                                                                                                         | Puede escribir automáticamente en el disco duro.                                                                                                                                                                    |

## JavaScript y la especificación ECMAScript

JavaScript está estandarizado en [Ecma International](https://www.ecma-international.org/), la asociación europea para estandarizar los sistemas de información y comunicación (ECMA antes era un acrónimo para la Asociación Europea de Fabricantes de Computadoras) para ofrecer un lenguaje de programación internacional estandarizado basado en JavaScript. Esta versión estandarizada de JavaScript, denominada ECMAScript, se comporta de la misma manera en todas las aplicaciones que admiten el estándar. Las empresas pueden utilizar el lenguaje estándar abierto para desarrollar su implementación de JavaScript. El estándar ECMAScript está documentado en la especificación ECMA-262.

El estándar ECMA-262 también está aprobado por [ISO](https://www.iso.org/home.html) (Organización Internacional de Normalización) como ISO-16262. También puedes encontrar la especificación en [el sitio web de Ecma International](https://www.ecma-international.org/publications/standards/Ecma-262.htm). La especificación ECMAScript no describe el modelo de objetos de documento (DOM), que está estandarizado por el [World Wide Web Consortium (W3C)](https://www.w3.org/) y/o [WHATWG (Grupo de trabajo de tecnología de aplicaciones de hipertexto web)](https://whatwg.org). El DOM define la forma en que los objetos de documentos HTML se exponen a tu «script». Para tener una mejor idea de las diferentes tecnologías que se utilizan al programar con JavaScript, consulta el artículo [Descripción de las Tecnologías JavaScript](/es/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

### Documentación de JavaScript versus especificación de ECMAScript

La especificación ECMAScript es un conjunto de requisitos para implementar ECMAScript. Es útil si deseas implementar funciones del lenguaje compatibles con los estándares en tu implementación o motor ECMAScript (como SpiderMonkey en Firefox o V8 en Chrome).

El documento ECMAScript _no_ está destinado a ayudar a los programadores de scripts. Utiliza la documentación de JavaScript para obtener información al escribir tus scripts.

La especificación ECMAScript utiliza terminología y sintaxis que puede resultar desconocida para un programador de JavaScript. Aunque la descripción del lenguaje puede diferir en ECMAScript, el lenguaje en sí sigue siendo el mismo. JavaScript admite todas las funciones descritas en la especificación ECMAScript.

La documentación de JavaScript describe aspectos del lenguaje que son apropiados para un programador de JavaScript.

## Cómo empezar con JavaScript

Comenzar con JavaScript es fácil: todo lo que necesitas es un navegador web moderno. Esta guía incluye algunas funciones de JavaScript que solo están disponibles actualmente en las últimas versiones de Firefox, por lo que se recomienda utilizar la versión más reciente de Firefox.

La herramienta _Consola web_ integrada en Firefox es útil para experimentar con JavaScript; Puedes usarla en dos modos: modo de entrada unilínea y modo de entrada multilínea.

### Entrada unilínea en la consola web

La [Consola web](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) te muestra información sobre la página web cargada actualmente, y también incluye un intérprete de JavaScript que puedes usar para ejecutar expresiones de JavaScript en la página actual.

Para abrir la Consola web (<kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>I</kbd> en Windows y Linux o <kbd>Cmd</kbd>-<kbd>Opción</kbd>-<kbd>K</kbd> en Mac), abre el menú **Herramientas** en Firefox y selecciona "**Desarrollador ▶ Consola web**".

La consola web aparece en la parte inferior de la ventana del navegador. En la parte inferior de la consola hay una línea de entrada que puedes usar para ingresar JavaScript, y la salida aparece en el panel de arriba:

![Consola web](2019-04-04_00-15-29.png)

La consola funciona exactamente de la misma manera que `eval`: devuelve la última expresión ingresada. En aras de la simplicidad, te puedes imaginar que cada vez que ingresas algo en la consola, en realidad estás rodeado por `console.log` alrededor de `eval`, así:

```js
function greetMe(tuNombre) {
  alert("Hola " + tuNombre);
}
console.log(eval("3 + 5"));
```

### Entrada multilínea en la consola web

El modo de entrada unilínea de la consola web es ideal para realizar pruebas rápidas de expresiones JavaScript, pero aunque puedes ejecutar varias líneas, no es muy conveniente para eso. Para JavaScript más complejo, puedes utilizar el [modo de entrada multilínea](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line_mode).

### Hola mundo

Para comenzar a escribir JavaScript, abre la Consola web en modo multilínea y escribe tu primer código "Hola mundo" en JavaScript:

```js
(function () {
  "use strict";
  /* Inicio de tu código */
  function greetMe(tuNombre) {
    alert("Hola " + tuNombre);
  }

  greetMe("Mundo");
  /* Fin de tu código */
})();
```

Presiona <kbd>Cmd</kbd>+<kbd>Intro</kbd> o <kbd>Ctrl</kbd>+<kbd>Intro</kbd> (o haz clic en el botón **Ejecutar**), ¡para ver cómo se desarrolla en tu navegador!

En las siguientes páginas, esta guía te presenta la sintaxis de JavaScript y las características del lenguaje, de modo que puedas escribir aplicaciones más complejas.

Pero por ahora, recuerda incluir siempre el `(function() { "use strict";` antes de tu código, y agrega `})();` al final de tu código. Aprenderás {{Glossary("IIFE", "qué significa IIFE")}} , pero por ahora puedes pensar que hacen lo siguiente:

1. Mejoran enormemente el rendimiento.
2. Evitan la semántica estúpida en JavaScript que hace tropezar a los principiantes.
3. Evitan que los fragmentos de código ejecutados en la consola interactúen entre sí (por ejemplo, que algo creado en una ejecución de consola se utilice para una ejecución de consola diferente).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}


# TEMA: GUIDE/GRAMMAR_AND_TYPES



--- SUBTEMA: grammar_and_types ---


{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Este capítulo analiza la gramática básica de JavaScript, la declaración de variables, los tipos de datos y literales.

## Conceptos básicos

JavaScript está influenciado sobre todo por la sintaxis de Java, C y C++, pero también ha sido influenciado por Awk, Perl y Python.

JavaScript distingue entre mayúsculas y minúsculas (es **case-sensitive**) y utiliza el conjunto de caracteres **Unicode**. Por ejemplo, la palabra «Früh» (que significa "temprano" en Alemán) se podría usar como el nombre de una variable.

```js
let Früh = "foobar";
```

Pero, la variable `früh` no es la misma que `Früh` porque JavaScript distingue entre mayúsculas y minúsculas.

En JavaScript, las instrucciones se denominan {{Glossary("Statement", "declaraciones")}} y están separadas por punto y coma (;).

No es necesario un punto y coma después de una declaración si está escrita en su propia línea. Pero si se deseas más de una declaración en una línea, entonces _debes_ separarlas con punto y coma.

> [!NOTE]
> ECMAScript también tiene reglas para la inserción automática del punto y coma —{{JSxRef("Gramatica_lexica", "IAPC", "#Insercion_automatica_de_punto_y_coma")}}— (_ASI_ en inglés, por sus siglas «_Automatic Semicolon Insertion_») al final de las declaraciones. (Para obtener más información, consulta la referencia detallada sobre la {{JSxRef("Gramatica_lexica", "gramática léxica")}} de JavaScript).

Sin embargo, se considera una buena práctica escribir siempre un punto y coma después de una declaración, incluso cuando no sea estrictamente necesario. Esta práctica reduce las posibilidades de que se introduzcan errores en el código.

El texto fuente del script JavaScript se escanea de izquierda a derecha y se convierte en una secuencia de elementos de entrada que son _fragmentos_, _caracteres de control_, _terminadores de línea_, _comentarios_ o {{Glossary("Espacio en blanco", "espacios en blanco")}}. (Los espacios, tabulaciones y caracteres de nueva línea se consideran espacios en blanco).

## Comentarios

La sintaxis de los **comentarios** es la misma que en C++ y en muchos otros lenguajes:

```js
// un comentario de una línea

/* este es un comentario
 * más largo, de varias líneas
 */

/* Sin embargo, no puedes /* anidar comentarios */ SyntaxError */
```

Los comentarios se comportan como espacios en blanco y se descartan durante la ejecución del script.

> [!NOTE]
> También puedes ver un tercer tipo de sintaxis de comentario al comienzo de algunos archivos JavaScript, que se parece a esto: `#!/usr/bin/env node`.Esto se denomina sintaxis de **comentario hashbang** y es un comentario especial que se utiliza para especificar la ruta a un motor JavaScript en particular que debe ejecutar el script. Consulta {{JSxRef("Gramatica_lexica", "Comentarios Hashbang", "#Comentarios_hashbang")}} para obtener más detalles.

## Declaraciones

JavaScript tiene tres tipos de declaraciones de variables.

- {{JSxRef("Sentencias/var", "var")}}
  - : Declara una variable, opcionalmente la inicia a un valor.
- {{JSxRef("Sentencias/let", "let")}}
  - : Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
- {{JSxRef("Sentencias/const", "const")}}
  - : Declara un nombre de constante de solo lectura y ámbito de bloque.

### Variables

Utiliza variables como nombres simbólicos para valores en tu aplicación. Los nombres de las variables, llamados {{Glossary("Identifier", "identificadores")}}, se ajustan a ciertas reglas.

Un identificador de JavaScript debe comenzar con una letra, un guión bajo (`_`) o un signo de dólar (`$`). Los siguientes caracteres también pueden ser dígitos (`0`-`9`).

Dado que JavaScript distingue entre mayúsculas y minúsculas, las letras incluyen los caracteres "`A`" a "`Z`" (mayúsculas), así como "`a`" a "z" (minúsculas).

Puedes utilizar la mayoría de las letras ISO 8859-1 o Unicode como `å` y `ü` en los identificadores. (Para obtener más detalles, consulta [esta publicación del blog](https://mathiasbynens.be/notes/javascript-identifiers-es6)). También puedes usar {{JSxRef("Gramatica_lexica", "Secuencias de escape Unicode", "#Cadenas_literales")}} como caracteres en identificadores.

Algunos ejemplos de nombres legales son `Number_hits`, `temp99`, `$credit` y `_name`.

### Declaración de variables

Puedes declarar una variable de dos formas:

- Con la palabra clave {{JSxRef("Sentencias/var", "var")}}. Por ejemplo, `var x = 42`. Esta sintaxis se puede utilizar para declarar variables **locales** y **globales**, dependiendo del _contexto de ejecución_.
- Con la palabra clave {{JSxRef("Sentencias/const", "const")}} o {{JSxRef("Sentencias/let", "let")}}. Por ejemplo, `let y = 13`. Esta sintaxis se puede utilizar para declarar una variable local con ámbito de bloque. (Ve el [Ámbito de variables](#ambito_de_variables) abajo.)

También puedes simplemente asignar un valor a una variable. Por ejemplo, `x = 42`. Este formulario crea una variable {{JSxRef("Sentencias/var", "global no declarada", "#Descripción")}}. También genera una advertencia estricta de JavaScript. Las variables globales no declaradas a menudo pueden provocar un comportamiento inesperado. Por lo tanto, se desaconseja utilizar variables globales no declaradas.

### Evaluar variables

Una variable declarada usando la instrucción `var` o `let` sin un valor asignado especificado tiene el valor de {{JSxRef("undefined")}}.

Un intento de acceder a una variable no declarada da como resultado el disparo de una excepción {{JSxRef("ReferenceError")}}:

```js
var a;
console.log("El valor de a es " + a); // El valor de a es undefined

console.log("El valor de b es " + b); // El valor de b es undefined
var b;
// Esto puede desconcertarte hasta que leas 'Elevación de variable' a continuación

console.log("El valor de c es " + c); // Error de referencia no detectado: c no está definida

let x;
console.log("El valor de x es " + x); // El valor de x es undefined

console.log("El valor de y es " + y); // Error de referencia no detectada: y no está definida
let y;
```

Puedes usar `undefined` para determinar si una variable tiene un valor. En el siguiente código, a la variable `input` no se le asigna un valor y la declaración {{JSxRef("Sentencias/if...else", "if")}} evalúa a `true`.

```js
var input;
if (input === undefined) {
  doThis();
} else {
  doThat();
}
```

El valor `undefined` se comporta como `false` cuando se usa en un contexto booleano. Por ejemplo, el siguiente código ejecuta la función `myFunction` porque el elemento `myArray` es `undefined`:

```js
var myArray = [];
if (!myArray[0]) myFunction();
```

El valor `undefined` se convierte en `NaN` cuando se usa en contexto numérico.

```js
var a;
a + 2; // Evalúa a NaN
```

Cuando evalúas una variable {{JSxRef("null")}}, el valor nulo se comporta como `0` en contextos numéricos y como `false` en contextos booleanos. Por ejemplo:

```js
var n = null;
console.log(n * 32); // Registrará 0 en la consola
```

### Ámbito de variables

Cuando declaras una variable fuera de cualquier función, se denomina variable _global_, porque está disponible para cualquier otro código en el documento actual. Cuando declaras una variable dentro de una función, se llama variable _local_, porque solo está disponible dentro de esa función.

JavaScript anterior a ECMAScript 2015 no tiene el ámbito de la {{jsxref("Guide/Control_de_flujo_y_manejo_de_errores", "declaración de bloque", "#Block_statement", 1)}}. Más bien, una variable declarada dentro de un bloque es local a la _función (o ámbito global)_ en el que reside el bloque.

Por ejemplo, el siguiente código registrará `5`, porque el ámbito de `x` es el contexto global (o el contexto de la función si el código es parte de una función). El ámbito de `x` no se limita al bloque de instrucciones `if` inmediato.

```js
if (true) {
  var x = 5;
}
console.log(x); // x es 5
```

Este comportamiento cambia cuando se usa la declaración `let` (introducida en ECMAScript 2015).

```js
if (true) {
  let y = 5;
}
console.log(y); // ReferenceError: y no está definida
```

### Elevación de variables (`hoisting`)

Otra cosa inusual acerca de las variables en JavaScript es que puedes hacer referencia a una variable declarada más tarde, sin obtener una excepción.

Este concepto se conoce como **elevación.** Las variables en JavaScript son, en cierto sentido, "elevadas" (o "izadas") a la parte superior de la función o declaración. Sin embargo, las variables que se elevan devuelven un valor de `undefined`. Entonces, incluso si la declaras e inicias después de usarla o hacer referencia a esta variable, todavía devuelve `undefined`.

```js
/**
 * Ejemplo 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Ejemplo 2
 */
// devolverá un valor de undefined
var myVar = "my value";

(function () {
  console.log(myVar); // undefined
  var myVar = "valor local";
})();
```

Los ejemplos anteriores se interpretarán de la misma manera que:

```js
/**
 * Ejemplo 1
 */
var x;
console.log(x === undefined); // true
x = 3;

/**
 * Ejemplo 2
 */
var myVar = "my value";

(function () {
  var myVar;
  console.log(myVar); // undefined
  myVar = "valor local";
})();
```

Debido a la elevación, todas las declaraciones `var` en una función se deben colocar lo más cerca posible de la parte superior de la función. Esta buena práctica aumenta la claridad del código.

En ECMAScript 2015, `let` y `const` **se elevan pero no se inician**. Hacer referencia a la variable en el bloque antes de la declaración de la variable da como resultado un {{JSxRef("ReferenceError")}}, porque la variable está en una "zona muerta temporal" desde el inicio del bloque hasta que se procesa la declaración.

```js
console.log(x); // ReferenceError
let x = 3;
```

### Elevación de función

En el caso de las funciones, solo se incluyen _declaraciones_ de función, pero _no_ las _expresiones_ de la función.

```js
/* Declaración de función */

foo(); // "bar"

function foo() {
  console.log("bar");
}

/* Expresión de función */

baz(); // TypeError: baz no es una función

var baz = function () {
  console.log("bar2");
};
```

### Variables globales

Las variables globales, de hecho, son propiedades del _objeto global_.

En las páginas web, el objeto global es {{domxref("window")}}, por lo que puedes establecer y acceder a variables globales utilizando la sintaxis `window.variable`.

En consecuencia, puedes acceder a las variables globales declaradas en una «ventana» o «marco» desde otra «ventana» o «marco» especificando el nombre de la `window` o el `frame`. Por ejemplo, si declaras una variable llamada `phoneNumber` en un documento, puedes hacer referencia a esta variable desde un `iframe` como `parent.phoneNumber`.

### Constantes

Puedes crear una constante de solo lectura con nombre con la palabra clave {{JSxRef("Sentencias/const", "const")}}.

La sintaxis de un identificador de constante es la misma que la de cualquier identificador de variable: debe comenzar con una letra, un subrayado o un signo de dólar (`$`) y puede contener caracteres alfabéticos, numéricos o de subrayado.

```js
const PI = 3.14;
```

Una constante no puede cambiar el valor a través de la asignación o volver a declararla mientras se ejecuta el script. Se debe iniciar a un valor.

Las reglas de ámbito para las constantes son las mismas que las de ámbito de bloque de las variables `let`. Si se omite la palabra clave `const`, se asume que el identificador representa una variable.

No puedes declarar una constante con el mismo nombre que una función o una variable en el mismo ámbito. Por ejemplo:

```js
// ESTO CAUSARÁ UN ERROR
function f() {}
const f = 5;

// ESTO TAMBIÉN CAUSARÁ UN ERROR
function f() {
  const g = 5;
  var g;

  // expresiones
}
```

Sin embargo, las propiedades de los objetos asignados a constantes no son protegidas, es por esto que la siguiente declaración se ejecuta sin problemas.

```js
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
```

Además, el contenido de los arreglos tampoco está protegido cuando es asignado a una constante, es por esto que la siguiente declaración se ejecuta sin problemas.

```js
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // registra ['HTML','CSS','JAVASCRIPT'];
```

## Estructuras y tipos de datos

### Tipos de datos

El último estándar ECMAScript define ocho tipos de datos:

- Siete tipos de datos que son {{Glossary("Primitive", "primitivos")}}:
  1. {{Glossary("Boolean", "Booleano")}}. `true` y `false`.
  2. {{Glossary("null")}}. Una palabra clave especial que denota un valor nulo. (Dado que JavaScript distingue entre mayúsculas y minúsculas, `null` no es lo mismo que `Null`, `NULL` o cualquier otra variante).
  3. {{Glossary("undefined")}}. Una propiedad de alto nivel cuyo valor no está definido.
  4. {{Glossary("Number")}}. Un número entero o un número con coma flotante. Por ejemplo: `42` o `3.14159`.
  5. {{Glossary("BigInt")}}. Un número entero con precisión arbitraria. Por ejemplo: `9007199254740992n`.
  6. {{Glossary("String")}}. Una secuencia de caracteres que representan un valor de texto. Por ejemplo: "Hola"
  7. {{Glossary("Symbol")}} (nuevo en ECMAScript 2015). Un tipo de dato cuyas instancias son únicas e inmutables

- y {{Glossary("Object")}}

Aunque estos tipos de datos son una cantidad relativamente pequeña, permiten realizar funciones útiles con tus aplicaciones. Los otros elementos fundamentales en el lenguaje son los {{JSxRef("Object", "Objetos", "", 1)}} y las {{JSxRef("Function", "funciones", "", 1)}}. Puedes pensar en objetos como contenedores con nombre para los valores, y las funciones como procedimientos que puedes programar en tu aplicación.

### Conversión de tipos de datos

JavaScript es un lenguaje _tipado dinámicamente_. Esto significa que no tienes que especificar el tipo de dato de una variable cuando la declaras. También significa que los tipos de datos se convierten automáticamente según sea necesario durante la ejecución del script.

Así, por ejemplo, puedes definir una variable de la siguiente manera:

```js
var answer = 42;
```

Y luego, puedes asignarle una cadena a esa misma variable, por ejemplo:

```js
answer = "Gracias por todo el pescado...";
```

Debido a que JavaScript se tipifica dinámicamente, esta asignación no genera un mensaje de error.

### Números y el operador '+'

En expresiones que involucran valores numéricos y de cadena con el operador `+`, JavaScript convierte los valores numéricos en cadenas. Por ejemplo, considera las siguientes declaraciones:

```js
x = "La respuesta es " + 42; // "La respuesta es 42"
y = 42 + " es la respuesta"; // "42 es la respuesta"
```

Con todos los demás operadores, JavaScript _no_ convierte valores numéricos en cadenas. Por ejemplo:

```js
"37" - 7; // 30
"37" + 7; // "377"
```

### Convertir texto a números

En el caso que un valor representando un número está en memoria como texto, hay métodos para la conversión.

- {{JSxRef("parseInt", "parseInt()")}}
- {{JSxRef("parseFloat", "parseFloat()")}}

`parseInt` solo devuelve números enteros, por lo que su uso se reduce para decimales.

> [!NOTE]
> Además, una práctica recomendada para `parseInt` es incluir siempre el parámetro _radix_. El parámetro `radix` se utiliza para especificar qué sistema numérico se utilizará.

```js
parseInt("101", 2); // 5
```

Un método alternativo para recuperar un número de una cadena es con el operador `+` (más unario):

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Nota: los paréntesis se agregan para mayor claridad, no son necesarios.
```

## Literales

Los _literales_ representan valores en JavaScript. Estos son valores fijos, no variables, que _literalmente_ proporcionas en tu script. Esta sección describe los siguientes tipos de literales:

- [Arreglos literales](#arreglos_literales)
- [Booleanos literales](#booleanos_literales)
- [Literales de coma flotante](#literales_de_coma_flotante)
- [Literales numéricos](#literales_numericos)
- [Objetos literales](#objetos_literales)
- [RegExp literales](#regexp_literales)
- [Cadenas literales](#cadenas_literales)

### Arreglos literales

Un arreglo literal es una lista de cero o más expresiones, cada una de las cuales representa un elemento del arreglo, encerrada entre corchetes (`[]`). Cuando creas un arreglo utilizando un arreglo literal, se inicia con los valores especificados como sus elementos, y su `length` se establece en el número de argumentos especificado.

El siguiente ejemplo crea el arreglo `coffees` con tres elementos y `length` de tres:

```js
let coffees = ["French Roast", "Colombian", "Kona"];
```

> [!NOTE]
> Un arreglo literal es un tipo de _iniciador de objeto_. Consulta {{JSxRef("Guide/Trabajando_con_objectos", "Uso de iniciadores de objetos", "#Uso_de_iniciadores_de_objeto")}}.

Si creas un arreglo utilizando un literal en un script de nivel superior, JavaScript interpreta el arreglo cada vez que evalúa la expresión que contiene el arreglo literal. Además, cada vez que llamas a una función se crea un literal usado en ella.

> [!NOTE]
> Los arreglos literales también son objetos `Array`. Consulta {{JSxRef("Array")}} y {{JSxRef("Guide/colecciones_indexadas", "Colecciones indexadas")}} para obtener detalles sobre los objetos `Array`.

#### Comas adicionales en arreglos literales

No tienes que especificar todos los elementos en un arreglo literal. Si colocas dos comas en una fila, el arreglo completa el valor `undefined` para los elementos no especificados. El siguiente ejemplo crea el arreglo `fish`:

```js
let fish = ["Lion", , "Angel"];
```

Este arreglo tiene dos elementos con valores y un elemento vacío:

- `fish[0]` es "Lion"
- `fish[1]` es `undefined`
- `fish[2]` es "Angel"

Si incluyes una coma al final de la lista de los elementos, la coma es ignorada.

En el siguiente ejemplo, el `length` del arreglo es tres. No hay `myList[3]`. Todas las demás comas de la lista indican un nuevo elemento.

> [!NOTE]
> Las comas finales pueden crear errores en versiones anteriores del navegador y se recomienda eliminarlas.

```js-nolint
let myList = ["home", , "school", ];
```

En el siguiente ejemplo, el `length` del arreglo es cuatro, y faltan `myList[0]` y `myList[2]`.

```js
let myList = [, "home", , "school"];
```

En el siguiente ejemplo, el `length` del arreglo es cuatro, y faltan `myList[1]` y `myList[3]`. **Solo se ignora la última coma.**

```js
let myList = ["home", , "school", ,];
```

Entender el comportamiento de las comas adicionales es importante para comprender JavaScript como lenguaje.

Sin embargo, al escribir tu propio código, debes declarar explícitamente los elementos que faltan como `undefined`. Hacerlo así aumenta la claridad y la facilidad de mantenimiento de tu código.

### Booleanos literales

El tipo booleano tiene dos valores literales: `true` y `false`.

> [!NOTE]
> No confundas los valores booleanos primitivos `true` y `false` con los valores `true` y `false` del objeto {{JSxRef("Boolean")}}.El objeto `Boolean` es un contenedor alrededor del tipo de dato primitivo `Boolean`. Consulta {{JSxRef("Boolean")}} para obtener más información.

### Literales numéricos

Los tipos {{JSxRef("Number")}} y {{JSxRef("BigInt")}} se pueden escribir en decimal (base 10), hexadecimal (base 16), octal (base 8) y binario (base 2).

- Un literal numérico _decimal_ es una secuencia de dígitos sin un `0` (cero) inicial.
- Un `0` (cero) inicial en un literal numérico, o un `0o` inicial (o `0O`) indica que está en _octal_. Los números octales pueden incluir solo los dígitos `0`-`7`.
- Un `0x` inicial (o `0X`) indica un tipo numérico _hexadecimal_. Los números hexadecimales pueden incluir los dígitos (`0`-`9`) y las letras `a`-`f` y `A`-`F`. (Si un caracter está en mayúscula o minúscula no cambia su valor. Por lo tanto: `0xa` = `0xA` = `10` y `0xf` = `0xF` = `15`).
- Un `0b` inicial (o `0B`) indica un literal numérico _binario_. Los números binarios solo pueden incluir los dígitos `0` y `1`.

Aquí tienes algunos ejemplos de literales numéricos:

```
0, 117, -345, 123456789123456789n             (decimal, base 10)
015, 0001, -0o77, 0o777777777777n             (octal, base 8)
0x1123, 0x00111, -0xF1A7, 0x123456789ABCDEFn  (hexadecimal, "hex" o base 16)
0b11, 0b0011, -0b11, 0b11101001010101010101n  (binario, base 2)
```

Para obtener más información, consulta {{JSxRef("Gramatica_lexica", "Literales numéricos en la referencia gramatical léxica", "#Literales_numericos")}}.

### Literales de coma flotante

Un literal de coma flotante puede tener las siguientes partes:

- Un entero decimal que puede tener un signo (precedido por "`+`" o "`-`"),
- Un punto decimal ("`.`"),
- Una fracción (otro número decimal),
- Un exponente.

La parte del exponente es una "`e`" o "`E`" seguida de un número entero, que puede tener signo (precedido por "`+`" o "`-`"). Un literal de coma flotante debe tener al menos un dígito y un punto decimal o "`e`" (o "`E`").

Específicamente, la sintaxis es:

```
[(+|-)][dígitos].[dígitos][(E|e)[(+|-)]dígitos]
```

Por ejemplo:

```
3.1415926
-.123456789
-3.1E+12
.1e-23
```

### Objetos literales

Un objeto literal es una lista de cero o más pares de nombres de propiedad y valores asociados de un objeto, entre llaves (`{}`).

> [!WARNING]
> **¡No uses un objeto literal al comienzo de una declaración!** Esto dará lugar a un error (o no se comportará como esperabas), porque la `{` se interpretará como el comienzo de un bloque.

El siguiente es un ejemplo de un objeto literal. El primer elemento del objeto `car` define una propiedad, `myCar`, y le asigna una nueva cadena, "`Saturn`"; al segundo elemento, la propiedad `getCar`, se le asigna inmediatamente el resultado de invocar a la función `(carTypes("Honda"));` el tercer elemento, la propiedad `special`, utiliza una variable (`sales`) existente.

```js
var sales = "Toyota";

function carTypes(name) {
  if (name === "Honda") {
    return name;
  } else {
    return "Lo sentimos, no vendemos " + name + ".";
  }
}

var car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
```

Además, puedes utilizar un literal numérico o de cadena para el nombre de una propiedad o anidar un objeto dentro de otro. El siguiente ejemplo usa estas opciones.

```js
var car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Los nombres de propiedad de los objetos pueden ser cualquier cadena, incluida la cadena vacía. Si el nombre de la propiedad no fuera un {{Glossary("Identifier", "identificador")}} o un número JavaScript válido, debe ir entre comillas.

No se puede acceder a los nombres de propiedad que no sean identificadores válidos como un punto (`.`), propiedad, pero _se pueden_ acceder y configurar con la notación tipo arreglo ("`[]`").

```js
var unusualPropertyNames = {
  '': 'Una cadena vacía',
  '!': '¡Bang!'
}
console.log(inusualPropertyNames.'');   // SyntaxError: Cadena inesperada
console.log(inusualPropertyNames['']);  // Una cadena vacía
console.log(unusualPropertyNames.!);    // SyntaxError: símbolo inesperado !
console.log(unusualPropertyNames['!']); // ¡Bang!
```

#### Objetos literales mejorados

En ES2015, los objeto literales se amplían para admitir la configuración del prototipo en la construcción, la abreviatura para asignaciones `foo: foo`, la definición de métodos, la realización de llamadas a `super` y el cálculo de nombres de propiedades con expresiones.

Juntos, estos también acercan los objetos literales y las declaraciones de clase, y permiten que el diseño basado en objetos se beneficie de algunas de las mismas conveniencias.

```js
var obj = {
  // __proto__
  __proto__: theProtoObj,
  // Abreviatura de "handler: handler"
  handler,
  // Métodos
  toString() {
    // Llamadas a super
    return "d " + super.toString();
  },
  // Nombres de propiedad calculados (dinámicos)
  ["prop_" + (() => 42)()]: 42,
};
```

### Expresiones regulares («RegExp») literales

Un expresión regular literal (que se define en detalle {{JSxRef("Guide/Regular_Expressions", "más adelante")}}) es un patrón incluido entre barras. El siguiente es un ejemplo de una expresión regular literal.

```js
var re = /ab+c/;
```

### Cadenas literales

Una cadena literal consta de cero o más caracteres encerrados entre comillas dobles (`"`) o simples (`'`). Una cadena debe estar delimitada por comillas del mismo tipo (es decir, ambas comillas simples o, ambas comillas dobles).

Los siguientes son ejemplos de cadenas literales:

```js-nolint
'foo';
"bar";
'1234';
"una linea \n otra linea";
"John's cat";
```

Puedes llamar a cualquiera de los métodos del objeto {{JSxRef("String")}} en un valor de cadena literal. JavaScript automáticamente convierte la cadena literal en un objeto `String` temporal, llama al método y luego descarta el objeto `String` temporal. También puedes usar la propiedad `String.length` con una cadena literal:

```js
// Imprimirá el número de símbolos en la cadena, incluidos los espacios en blanco.
console.log("John's cat".length); // En este caso, 10.
```

En ES2015, también están disponibles las _plantillas literales_. Las plantillas literales están encerradas por la comilla invertida (`` ` ``) ([Acento_grave](https://es.wikipedia.org/wiki/Acento_grave)) en lugar de comillas simples o dobles.

Las cadenas de las plantillas literales proporcionan azúcar sintáctica para construir cadenas. (Esto es similar a las funciones de interpolación de cadenas en Perl, Python y más).

Opcionalmente, puedes agregar una etiqueta para permitirte personalizar la construcción de la cadena, evitando ataques de inyección o construyendo estructuras de datos de nivel superior a partir del contenido de la cadena.

```js
// Creación de cadenas literales básicas
`en JavaScript '\n' es un avance de línea.`;

// Cadenas multilínea
`En JavaScript, las cadenas de plantilla pueden ocupar
 varias líneas, pero las cadenas entrecomillas dobles o
 simples no pueden.`;

// Interpolación de cadenas
var name = "Bob",
  time = "hoy";
`Hola ${name}, ¿cómo estás ${time}?`;

// Construye un prefijo de petición HTTP utilizado para interpretar los reemplazos y la construcción
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);
```

Debes usar cadenas literales a menos que específicamente necesites usar un objeto `String`. Consulta {{JSxRef("String")}} para obtener detalles sobre los objetos `String`.

#### Uso de caracteres especiales en cadenas

Adicionalmente a los caracteres normales, también puedes incluir caracteres especiales en las cadenas, como muestra el siguiente ejemplo:

```js
"una linea \n otra linea";
```

La siguiente tabla enumera los caracteres especiales que se pueden usar en una cadena JavaScript.

| Caracter    | Significado                                                                                                                                                                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Byte nulo                                                                                                                                                                                                                                                |
| `\b`        | Retroceso                                                                                                                                                                                                                                                |
| `\f`        | Avance de Página                                                                                                                                                                                                                                         |
| `\n`        | Nueva Línea                                                                                                                                                                                                                                              |
| `\r`        | Retorno de carro                                                                                                                                                                                                                                         |
| `\t`        | Tabulación                                                                                                                                                                                                                                               |
| `\v`        | Tabulación vertical                                                                                                                                                                                                                                      |
| `\'`        | Apóstrofo o comilla simple                                                                                                                                                                                                                               |
| `\"`        | Comilla doble                                                                                                                                                                                                                                            |
| `\\`        | Caracter de barra invertida                                                                                                                                                                                                                              |
| `\XXX`      | El caracter con la codificación Latin-1 especificada por hasta tres dígitos octales _XXX_ entre `0` y `377`. Por ejemplo, `\251` es la secuencia octal del símbolo de copyright.                                                                         |
|             |                                                                                                                                                                                                                                                          |
| `\xXX`      | El caracter con la codificación Latin-1 especificada por los dos dígitos hexadecimales _XX_ entre `00` y `FF`. Por ejemplo, `\xA9` es la secuencia hexadecimal del símbolo de copyright.                                                                 |
|             |                                                                                                                                                                                                                                                          |
| `\uXXXX`    | El caracter Unicode especificado por los cuatro dígitos hexadecimales _XXXX_. Por ejemplo, `\u00A9` es la secuencia Unicode para el símbolo de copyright. Consulta {{JSxRef("Gramatica_lexica", "Secuencias de escape Unicode", "#Cadenas_literales")}}. |
| `\u{XXXXX}` | El punto de código escape Unicode. Por ejemplo, `\u{2F804}` es el mismo que el escape Unicode simple `\uD87E\uDC04`.                                                                                                                                     |

#### Escapar caracteres

Para caracteres no enumerados en la tabla, la precedencia de la barra inversa es ignorada, pero su uso esta desaconsejado y se debe evitar.

Puedes insertar comillas dobles dentro de una cadena anteponiendo un caracter de barra inversa. Esto se conoce como _escapar_ las comillas. Por ejemplo:

```js-nolint
var quote = "Él leyó \"La cremación de Sam McGee\" de R.W. Service.";
console.log(quote);
```

El resultado de esto sería:

```
El leyó "La cremación de Sam McGee" de R.W. Service.
```

Para incluir una barra invertida literal dentro de una cadena, debes escapar el caracter de barra invertida. Por ejemplo, para asignar la ruta del archivo `c:\temp` a una cadena, usa lo siguiente:

```js
var home = "c:\\temp";
```

También puedes escapar los saltos de línea precediéndolos con una barra invertida. La barra invertida y el salto de línea se eliminan del valor de la cadena.

```js
var str =
  "esta cadena \
se divide \
en múltiples \
líneas.";
console.log(str); // esta cadena se divide en múltiples líneas.
```

Aunque JavaScript no tiene sintaxis "«heredoc»" se puede acercar insertando una barra inversa y un salto de linea al final de cada linea:

```js
var poem =
  "Las rosas son rojas,\n\
Las violetas son azules.\n\
El azúcar es dulce,\n\
y foo también.";
```

ECMAScript 2015 introduce un nuevo tipo de literal, a saber, {{JSxRef("template_strings", "plantillas literales")}}. Esto permite muchas nuevas funciones, ¡incluidas cadenas multilínea!

```js
var poem = `Las rosas son rojas,
Las violetas son azules.
El azúcar es dulce,
y foo también.`;
```

## Mas información

Este capítulo se enfoca en la sintaxis básica para los tipos y las declaraciones. Para aprender mas acerca de las construcciones en el lenguaje JavaScript, ve también los siguientes capítulos en esta guía:

- {{JSxRef("Guide/Control_de_flujo_y_manejo_de_errores", "Control de flujo y manejo de errores")}}
- {{JSxRef("Guide/Bucles_e_iteracion", "Bucles e iteración")}}
- {{JSxRef("Guide/Funciones", "Funciones")}}
- {{JSxRef("Guide/Expressions_and_Operators", "Expresiones y operadores")}}

En el próximo capítulo, veremos las construcciones de control de flujo y el manejo de errores.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}


# TEMA: GUIDE/CONTROL_FLOW_AND_ERROR_HANDLING



--- SUBTEMA: control_flow_and_error_handling ---


{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript admite un compacto conjunto de declaraciones, específicamente declaraciones de control de flujo, que puedes utilizar para incorporar una gran cantidad de interactividad en tu aplicación. Este capítulo proporciona una descripción de estas declaraciones.

La {{JSxRef("Sentencias", "referencia de JavaScript")}} contiene detalles exhaustivos sobre las declaraciones de este capítulo. El carácter de punto y coma (`;`) se utiliza para separar declaraciones en código JavaScript.

Todas las expresiones e instrucciones de JavaScript también son una declaración. Consulta {{JSxRef("Guide/Expressions_and_Operators", "Expresiones y operadores")}} para obtener información completa sobre las expresiones.

## Declaración de bloque

La declaración más básica es una _declaración de bloque_, que se utiliza para agrupar instrucciones. El bloque está delimitado por un par de llaves:

```
{
  statement_1;
  statement_2;
  ⋮
  statement_n;
}
```

### Ejemplo

Las declaraciones de bloque se utilizan comúnmente con declaraciones de control de flujo (`if`, `for`, `while`).

```js
while (x < 10) {
  x++;
}
```

Aquí, `{ x++; }` es la declaración de bloque.

> [!NOTE]
> JavaScript anterior a ECMAScript2015 (6a edición) **no** tiene ámbito de bloque. En JavaScript más antiguo, las variables introducidas dentro de un bloque tienen como ámbito la función o script que las contiene, y los efectos de establecerlas persisten más allá del bloque en sí mismo. En otras palabras, las _declaraciones de bloque no definen un ámbito_.
>
> Los bloques "independientes" en JavaScript pueden producir resultados completamente diferentes de los que producirían en C o Java. Por ejemplo:
>
> ```js
> js var x = 1; {
>   var x = 2;
> }
> console.log(x); // muestra 2
> ```
>
> Esto muestra `2` porque la instrucción `var x` dentro del bloque está en el mismo ámbito que la instrucción `var x` anterior del bloque. (En C o Java, el código equivalente habría generado `1`).
>
> **A partir de ECMAScript2015**, las declaraciones de variables `let` y `const` tienen un ámbito de bloque. Consulta las páginas de referencia de {{JSxRef("Sentencias/let", "let")}} y {{JSxRef("Sentencias/const", "const")}} para obtener más información.

## Expresiones condicionales

Una expresión condicional es un conjunto de instrucciones que se ejecutarán si una condición especificada es verdadera. JavaScript admite dos expresiones condicionales: `if...else` y `switch`.

### Expresión `if...else`

Utiliza la expresión `if` para ejecutar una instrucción si una condición lógica es `true`. Utiliza la cláusula opcional `else` para ejecutar una instrucción si la condición es `false`.

Una declaración `if` se ve así:

```
if (condition) {
  statement_1;
} else {
  statement_2;
}
```

Aquí, la `condition` puede ser cualquier expresión que se evalúe como `true` o `false`. (Consulta {{JSxRef("Objetos_globales/Boolean", "Boolean", "#Description")}} para obtener una explicación de lo que se evalúa como `true` y `false`).

Si `condition` se evalúa como `true`, se ejecuta `statement_1`. De lo contrario, se ejecuta `statement_2`. `statement_1` y `statement_2` pueden ser cualquier declaración, incluidas otras declaraciones `if` anidadas.

También puedes componer las declaraciones usando `else if` para que se prueben varias condiciones en secuencia, de la siguiente manera:

```
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
}
```

En el caso de múltiples condiciones, solo se ejecutará la primera condición lógica que se evalúe como `true`. Para ejecutar múltiples declaraciones, agrúpalas dentro de una declaración de bloque (`{ … }`).

#### Mejores prácticas

En general, es una buena práctica usar siempre declaraciones de bloque, _especialmente_ al anidar declaraciones `if`:

```
if (condition) {
  statement_1_runs_if_condition_is_true;
  statement_2_runs_if_condition_is_true;
} else {
  statement_3_runs_if_condition_is_false;
  statement_4_runs_if_condition_is_false;
}
```

No es aconsejable utilizar asignaciones simples en una expresión condicional, porque la asignación se puede confundir con la igualdad al mirar el código.

Por ejemplo, _no_ escribas un código como este:

```js example-bad
// Propenso a ser mal interpretado como "x == y"
if ((x = y)) {
  /* expresiones aquí */
}
```

Si necesitas usar una tarea en una expresión condicional, una práctica común es poner paréntesis adicionales alrededor de la asignación, así:

```js example-good
if ((x = y)) {
  /* expresiones aquí */
}
```

#### Valores falsos

Los siguientes valores se evalúan como `false` (también conocidos como valores {{Glossary("Falsy")}}:

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- la cadena vacía (`""`)

Todos los demás valores, incluidos todos los objetos, se evalúan como `true` cuando se pasan a una declaración condicional.

> [!NOTE]
> ¡No confundas los valores booleanos primitivos `true` y `false` con los valores `true` y `false` del objeto {{JSxRef("Boolean")}}!.Por ejemplo:```js
> var b = new Boolean(false);
> if (b) // esta condición se evalúa como verdadera
> if (b == true) // esta condición se evalúa como false
>
> ```
>
> ```

#### Ejemplo

En el siguiente ejemplo, la función `checkData` devuelve `true` si el número de caracteres en un objeto `Text` es tres. De lo contrario, muestra una alerta y devuelve `false`.

```js
function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert(
      "Introduce exactamente tres caracteres. " +
        `${document.form1.threeChar.value} no es válido.`,
    );
    return false;
  }
}
```

### Declaración `switch`

Una instrucción `switch` permite que un programa evalúe una expresión e intente hacer coincidir el valor de la expresión con una etiqueta `case`. Si la encuentra, el programa ejecuta la declaración asociada.

Una instrucción `switch` se ve así:

```
switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    …
  default:
    statements_def
    [break;]
}
```

JavaScript evalúa la instrucción `switch` anterior de la siguiente manera:

- El programa primero busca una cláusula `case` con una etiqueta que coincida con el valor de expresión y luego transfiere el control a esa cláusula, ejecutando las declaraciones asociadas.
- Si no se encuentra una etiqueta coincidente, el programa busca la cláusula opcional `default`:
  - Si se encuentra una cláusula `default`, el programa transfiere el control a esa cláusula, ejecutando las declaraciones asociadas.
  - Si no se encuentra una cláusula `default`, el programa reanuda la ejecución en la declaración que sigue al final de `switch`.
  - (Por convención, la cláusula `default` está escrita como la última cláusula, pero no es necesario que sea así).

#### Declaraciones `break`

La declaración opcional `break` asociada con cada cláusula `case` asegura que el programa salga de `switch` una vez que se ejecuta la instrucción coincidente, y luego continúa la ejecución en la declaración que sigue a `switch`. Si se omite `break`, el programa continúa la ejecución dentro de la instrucción `switch` (y evaluará el siguiente `case`, y así sucesivamente).

##### Ejemplo

En el siguiente ejemplo, si `fruittype` se evalúa como '`Bananas`', el programa hace coincidir el valor con el caso '`Bananas`' y ejecuta la declaración asociada. Cuando se encuentra `break`, el programa sale del `switch` y continúa la ejecución de la instrucción que sigue a `switch`. Si se omitiera `break`, también se ejecutará la instrucción para `case 'Cherries'`.

```js
switch (fruittype) {
  case "Oranges":
    console.log("Las naranjas cuestan $0.59 la libra.");
    break;
  case "Apples":
    console.log("Las manzanas cuestan $0.32 la libra.");
    break;
  case "Bananas":
    console.log("Los plátanos cuestan $0.48 la libra.");
    break;
  case "Cherries":
    console.log("Las cerezas cuestan $3.00 la libra.");
    break;
  case "Mangoes":
    console.log("Los mangos cuestan $0.56 la libra.");
    break;
  case "Papayas":
    console.log("Los mangos y las papayas cuestan $2.79 la libra.");
    break;
  default:
    console.log(`Lo sentimos, no tenemos ${fruittype}.`);
}
console.log("¿Hay algo más que quieras?");
```

## Expresiones de manejo de excepciones

Puedes lanzar excepciones usando la instrucción `throw` y manejarlas usando las declaraciones `try...catch`.

- [Expresión throw](#expresion_throw)
- [Declaración try...catch](#declaracion_try...catch)

### Tipos de excepciones

Casi cualquier objeto se puede lanzar en JavaScript. Sin embargo, no todos los objetos lanzados son iguales. Si bien es común lanzar números o cadenas como errores, con frecuencia es más efectivo usar uno de los tipos de excepción creados específicamente para este propósito:

- {{JSxRef("Objetos_globales/Error", "excepciones ECMAScript", "#Tipos_Error")}}
- La interfaz [DOMException](/es/docs/Web/API/DOMException) representa un evento anormal (llamado excepción) que ocurre como resultado de llamar a un método o acceder a una propiedad de una API web y la interfaz [DOMError](/es/docs/Web/API/DOMError) describe un objeto de error que contiene un nombre de error.

### Expresión `throw`

Utiliza la expresión `throw` para lanzar una excepción. Una expresión `throw` especifica el valor que se lanzará:

```
throw expression;
```

Puedes lanzar cualquier expresión, no solo expresiones de un tipo específico. El siguiente código arroja varias excepciones de distintos tipos:

```js
throw "Error2"; // tipo String
throw 42; // tipo Number
throw true; // tipo Boolean
throw {
  toString: function () {
    return "¡Soy un objeto!";
  },
};
```

> [!NOTE]
> Puedes especificar un objeto cuando lanzas una excepción. A continuación, puedes hacer referencia a las propiedades del objeto en el bloque `catch`.

```js
// Crea un objeto tipo de UserException
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}

// Hacer que la excepción se convierta en una bonita cadena cuando se usa como cadena
// (por ejemplo, por la consola de errores)
UserException.prototype.toString = function () {
  return `${this.name}: "${this.message}"`;
};

// Crea una instancia del tipo de objeto y tírala
throw new UserException("Valor muy alto");
```

### Declaración `try...catch`

La declaración `try...catch` marca un bloque de expresiones para probar y especifica una o más respuestas en caso de que se produzca una excepción. Si se lanza una excepción, la declaración `try...catch` la detecta.

La declaración `try...catch` consta de un bloque `try`, que contiene una o más declaraciones, y un bloque `catch`, que contiene declaraciones que especifican qué hacer si se lanza una excepción en el bloque `try`.

En otras palabras, deseas que el bloque `try` tenga éxito, pero si no es así, deseas que el control pase al bloque `catch`. Si alguna instrucción dentro del bloque `try` (o en una función llamada desde dentro del bloque `try`) arroja una excepción, el control _inmediatamente_ cambia al bloque `catch`. Si no se lanza ninguna excepción en el bloque `try`, se omite el bloque `catch`. El bloque `finalmente` se ejecuta después de que se ejecutan los bloques `try` y `catch`, pero antes de las declaraciones que siguen a la declaración `try...catch`.

El siguiente ejemplo usa una instrucción `try...catch`. El ejemplo llama a una función que recupera el nombre de un mes de un arreglo en función del valor pasado a la función. Si el valor no corresponde a un número de mes (`1`-`12`), se lanza una excepción con el valor "`InvalidMonthNo`" y las declaraciones en el bloque `catch` establezca la variable `monthName` en '`unknown`'.

```js
function getMonthName(mo) {
  mo = mo - 1; // Ajusta el número de mes para el índice del arreglo (1 = Ene, 12 = Dic)
  let months = [
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
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; // aquí se usa la palabra clave throw
  }
}

try {
  // declaraciones para try
  monthName = getMonthName(myMonth); // la función podría lanzar una excepción
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
}
```

#### El bloque `catch`

Puedes usar un bloque `catch` para manejar todas las excepciones que se puedan generar en el bloque `try`.

```
catch (catchID) {
  instrucciones
}
```

El bloque `catch` especifica un identificador (`catchID` en la sintaxis anterior) que contiene el valor especificado por la expresión `throw`. Puedes usar este identificador para obtener información sobre la excepción que se lanzó.

JavaScript crea este identificador cuando se ingresa al bloque `catch`. El identificador dura solo la duración del bloque `catch`. Una vez que el bloque `catch` termina de ejecutarse, el identificador ya no existe.

Por ejemplo, el siguiente código lanza una excepción. Cuando ocurre la excepción, el control se transfiere al bloque `catch`.

```js
try {
  throw "myException"; // genera una excepción
} catch (err) {
  // declaraciones para manejar cualquier excepción
  logMyErrors(err); // pasa el objeto exception al controlador de errores
}
```

> [!NOTE]
> Cuando se registran errores en la consola dentro de un bloque `catch`, se usa `console.error()` en lugar de `console.log()` aconsejado para la depuración. Formatea el mensaje como un error y lo agrega a la lista de mensajes de error generados por la página.

#### El bloque `finally`

El bloque `finally` contiene instrucciones que se ejecutarán _después_ que se ejecuten los bloques `try` y `catch`. Además, el bloque `finally` ejecuta _antes_ el código que sigue a la declaración `try...catch...finally`.

También es importante notar que el bloque `finally` se ejecutará _independientemente de que_ se produzca una excepción. Sin embargo, si se lanza una excepción, las declaraciones en el bloque `finally` se ejecutan incluso si ningún bloque `catch` maneje la excepción que se lanzó.

Puedes usar el bloque `finally` para hacer que tu script falle correctamente cuando ocurra una excepción. Por ejemplo, es posible que debas liberar un recurso que tu script haya inmovilizado.

El siguiente ejemplo abre un archivo y luego ejecuta declaraciones que usan el archivo. (JavaScript de lado del servidor te permite acceder a los archivos). Si se lanza una excepción mientras el archivo está abierto, el bloque `finally` cierra el archivo antes de que falle el script. Usar `finally` aquí _asegura_ que el archivo nunca se deje abierto, incluso si ocurre un error.

```js
openMyFile();
try {
  writeMyFile(theData); // Esto puede arrojar un error
} catch (e) {
  handleError(e); // Si ocurrió un error, manéjalo
} finally {
  closeMyFile(); // Siempre cierra el recurso
}
```

Si el bloque `finally` devuelve un valor, este valor se convierte en el valor de retorno de toda la producción de `try…catch…finally`, independientemente de las declaraciones `return` en los bloques `try` y `catch`:

```js
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    return true; // esta declaración de retorno está suspendida
    // hasta que el bloque finally se haya completado
    console.log(2); // no alcanzable
  } finally {
    console.log(3);
    return false; // sobrescribe el "return" anterior
    console.log(4); // no alcanzable
  }
  // "return false" se ejecuta ahora
  console.log(5); // inalcanzable
}
console.log(f()); // 0, 1, 3, false
```

La sobrescritura de los valores devueltos por el bloque `finally` también se aplica a las excepciones lanzadas o relanzadas dentro del bloque `catch`:

```js
function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('captura "falso" interno');
    throw e; // esta instrucción throw se suspende hasta
    // que el bloque finally se haya completado
  } finally {
    return false; // sobrescribe el "throw" anterior
  }
  // "return false" se ejecuta ahora
}

try {
  console.log(f());
} catch (e) {
  // ¡esto nunca se alcanza!
  // mientras se ejecuta f(), el bloque `finally` devuelve false,
  // que sobrescribe el `throw` dentro del `catch` anterior
  console.log('"falso" externo capturado');
}

// Produce
// "falso" interno capturado
// false
```

#### Declaraciones `try...catch` anidadas

Puedes anidar una o más declaraciones `try...catch`.

Si un bloque `try` interno _no_ tiene un bloque `catch` correspondiente:

1. _debe_ contener un bloque `finally`, y
2. el bloque `catch` adjunto de la declaración `try...catch` se comprueba para una coincidencia.

Para obtener más información, consulta {{JSxRef("Sentencias/try...catch", "bloques try anidados", "#Nested_try-blocks")}} en la una página de referencia {{JSxRef("Sentencias/try...catch", "try...catch")}}.

### Utilizar objetos `Error`

Dependiendo del tipo de error, es posible que puedas utilizar las propiedades `name` y `message` para obtener un mensaje más refinado.

La propiedad `name` proporciona la clase general de `Error` (tal como `DOMException` o `Error`), mientras que `message` generalmente proporciona un mensaje más conciso que el que se obtendría al convertir el objeto error en una cadena.

Si estás lanzando tus propias excepciones, para aprovechar estas propiedades (por ejemplo, si tu bloque `catch` no discrimina entre tus propias excepciones y las del sistema), puedes usar el constructor `Error`.

Por ejemplo:

```js
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('El mensaje'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
⋮
try {
  doSomethingErrorProne();
} catch (e) {               // AHORA, en realidad usamos `console.error()`
  console.error(e.name);    // registra 'Error'
  console.error(e.message); // registra 'The message' o un mensaje de error de JavaScript
}
```

{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}


# TEMA: GUIDE/LOOPS_AND_ITERATION



--- SUBTEMA: loops_and_iteration ---


{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}

Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente. Este capítulo de la {{JSxRef("Guide", "Guía de JavaScript")}} presenta las diferentes declaraciones de iteración disponibles para JavaScript.

Puedes pensar en un bucle como una versión computarizada del juego en la que le dices a alguien que dé _X_ pasos en una dirección y luego _Y_ pasos en otra. Por ejemplo, la idea "Ve cinco pasos hacia el este" se podría expresar de esta manera como un bucle:

```js
for (let step = 0; step < 5; step++) {
  // Se ejecuta 5 veces, con valores del paso 0 al 4.
  console.log("Camina un paso hacia el este");
}
```

Hay muchos diferentes tipos de bucles, pero esencialmente, todos hacen lo mismo: repiten una acción varias veces. (¡Ten en cuenta que es posible que ese número sea cero!).

Los diversos mecanismos de bucle ofrecen diferentes formas de determinar los puntos de inicio y terminación del bucle. Hay varias situaciones que son fácilmente atendidas por un tipo de bucle que por otros.

Las declaraciones para bucles proporcionadas en JavaScript son:

- [Declaración for](#declaracion_for)
- [Declaración do...while](#declaracion_do...while)
- [Declaración while](#declaracion_while)
- [Declaración labeled](#declaracion_labeled)
- [Declaración break](#declaracion_break)
- [Declaración continue](#declaracion_continue)
- [Declaración for...in](#declaracion_for...in)
- [Declaración for...of](#declaracion_for...of)

## Declaración `for`

Un ciclo {{JSxRef("Statements/for", "for")}} se repite hasta que una condición especificada se evalúe como `false`. El bucle `for` de JavaScript es similar al bucle `for` de Java y C.

Una declaración `for` tiene el siguiente aspecto:

```
for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
  instrucción
```

Cuando se ejecuta un bucle `for`, ocurre lo siguiente:

1. Se ejecuta la expresión de iniciación `expresiónInicial`, si existe. Esta expresión normalmente inicia uno o más contadores de bucle, pero la sintaxis permite una expresión de cualquier grado de complejidad. Esta expresión también puede declarar variables.
2. Se evalúa la expresión `expresiónCondicional`. Si el valor de `expresiónCondicional` es verdadero, se ejecutan las instrucciones del bucle. Si el valor de `condición` es falso, el bucle `for` termina. (Si la expresión `condición` se omite por completo, se supone que la condición es verdadera).
3. Se ejecuta la `instrucción`. Para ejecutar varias instrucciones, usa una declaración de bloque (`{ ... }`) para agrupar esas declaraciones.
4. Si está presente, se ejecuta la expresión de actualización `expresiónDeActualización`.
5. El control regresa al paso 2.

### Ejemplo

En el siguiente ejemplo, la función contiene una instrucción `for` que cuenta el número de opciones seleccionadas en una lista de desplazamiento (el elemento {{HTMLElement("select")}} de HTML representa un control que proporciona un menú de opciones que permite múltiples selecciones). La instrucción `for` declara la variable `i` y la inicia a `0`. Comprueba que `i` es menor que el número de opciones en el elemento `<select>`, realiza la siguiente instrucción `if` e incrementa `i` después de cada pasada por el bucle.

```html
<form name="selectForm">
  <p>
    <label for="musicTypes"
      >Elija algunos tipos de música, luego haga clic en el botón de
      abajo:</label
    >
    <select id="musicTypes" name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classical</option>
      <option>Opera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="¿Cuántos están seleccionados?" /></p>
</form>

<script>
  function howMany(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }

  let btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    alert(
      "Número de opciones seleccionadas: " +
        howMany(document.selectForm.musicTypes),
    );
  });
</script>
```

## Declaración `do...while`

La instrucción {{JSxRef("Statements/do...while", "do...while")}} se repite hasta que una condición especificada se evalúe como falsa.

Una declaración `do...while` tiene el siguiente aspecto:

```
do
  expresión
while (condición);
```

`exposición` siempre se ejecuta una vez antes de que se verifique la condición. (Para ejecutar varias instrucciones, usa una declaración de bloque (`{ ... }`) para agrupar esas declaraciones).

Si `condición` es `true`, la declaración se ejecuta de nuevo. Al final de cada ejecución, se comprueba la condición. Cuando la condición es `false`, la ejecución se detiene y el control pasa a la declaración que sigue a `do...while`.

### Ejemplo

En el siguiente ejemplo, el bucle `do` itera al menos una vez y se repite hasta que `i` ya no sea menor que `5`.

let i = 0; do { i += 1; console.log(i); } while (i < 5);

## Declaración `while`

Una declaración {{JSxRef("Statements/while", "while")}} ejecuta sus instrucciones siempre que una condición especificada se evalúe como `true`. Una instrucción `while` tiene el siguiente aspecto:

```
while (condición)
  expresión
```

Si la `condición` se vuelve `false`, la `instrucción` dentro del bucle se deja de ejecutar y el control pasa a la instrucción que sigue al bucle.

La prueba de condición ocurre _antes_ de que se ejecute la `expresión` en el bucle. Si la condición devuelve `true`, se ejecuta la `expresión` y la `condición` se prueba de nuevo. Si la condición devuelve `false`, la ejecución se detiene y el control se pasa a la instrucción que sigue a `while`.

Para ejecutar varias instrucciones, usa una declaración de bloque (`{ ... }`) para agrupar esas declaraciones.

### Ejemplo 1

El siguiente ciclo del `while` se repite siempre que `n` sea menor que `3`:

```js
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

Con cada iteración, el bucle incrementa `n` y agrega ese valor a `x`. Por lo tanto, `x` y `n` toman los siguientes valores:

- Después de la primera pasada: `n` = `1` y `x` = `1`
- Después de la segunda pasada: `n` = `2` y `x` = `3`
- Después de la tercera pasada: `n` = `3` y `x` = `6`

Después de completar la tercera pasada, la condición `n < 3` ya no es `true`, por lo que el bucle termina.**Ejemplo 2**

Evita los bucles infinitos. Asegúrate de que la condición en un bucle eventualmente se convierta en `false`; de lo contrario, el bucle nunca terminará. Las declaraciones en el siguiente bucle `while` se ejecutan indefinidamente porque la condición nunca se vuelve `false`:

```js example-bad
// ¡Los bucles infinitos son malos!
while (true) {
  console.log("¡Hola, mundo!");
}
```

## Declaración `labeled`

Una {{JSxRef("Statements/label", "label")}} proporciona una instrucción con un identificador que te permite hacer referencia a ella en otra parte de tu programa. Por ejemplo, puedes usar una etiqueta para identificar un bucle y luego usar las declaraciones `break` o `continue` para indicar si un programa debe interrumpir el bucle o continuar su ejecución.La sintaxis de la instrucción etiquetada es similar a la siguiente:label : instrucción

El valor de `label` puede ser cualquier identificador de JavaScript que no sea una palabra reservada. La `declaración` que identifica a una etiqueta puede ser cualquier enunciado.

## Ejemplo

En este ejemplo, la etiqueta `markLoop` identifica un bucle `while`.

markLoop: while (theMark === true) { doSomething(); }

Declaración `break`

Usa la instrucción {{JSxRef("Statements/break", "break")}} para terminar un bucle, `switch` o junto con una declaración etiquetada.

- Cuando usas `break` sin una etiqueta, inmediatamente termina el `while`, `do-while`, `for` o `switch` y transfiere el control a la siguiente declaración.
- Cuando usas `break` con una etiqueta, termina la declaración etiquetada especificada.

La sintaxis de la instrucción `break` se ve así:

```
break;
break [label];
```

1. La primera forma de la sintaxis termina el bucle envolvente más interno o el `switch.`
2. La segunda forma de la sintaxis termina la instrucción etiquetada específica.

### Ejemplo 1

El siguiente ejemplo recorre en iteración los elementos de un arreglo hasta que encuentra el índice de un elemento cuyo valor es `theValue`:

```js
for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}
```

### Ejemplo 2: romper una etiqueta

```js
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Bucles externos: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Bucles internos: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```

## Declaración `continue`

La instrucción {{JSxRef("Statements/continue", "continue")}} se puede usar para reiniciar un `while`, `do-while`, `for`, o declaración `label`.

- Cuando utilizas `continue` sin una etiqueta, finaliza la iteración actual del `while`, `do-while` o `for` y continúa la ejecución del bucle con la siguiente iteración. A diferencia de la instrucción `break`, `continue` no termina la ejecución del bucle por completo. En un bucle `while`, vuelve a la condición. En un bucle `for`, salta a la `expresión-incremento`.
- Cuando usas `continue` con una etiqueta, se aplica a la declaración de bucle identificada con esa etiqueta.

La sintaxis de la instrucción `continue` se parece a la siguiente:

```
continue [label];
```

### Ejemplo 1

El siguiente ejemplo muestra un bucle `while` con una instrucción `continue` que se ejecuta cuando el valor de `i` es `3`. Por lo tanto, `n` toma los valores `1`, `3`, `7` y `12`.

```js
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12

let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    // continue;
  }
  n += i;
  console.log(n);
}
// 1,3,6,10,15
```

### Ejemplo 2

Una declaración etiquetada `checkiandj` contiene una declaración etiquetada `checkj`. Si se encuentra `continue`, el programa termina la iteración actual de `checkj` y comienza la siguiente iteración. Cada vez que se encuentra `continue`, `checkj` reitera hasta que su condición devuelve `false`. Cuando se devuelve `false`, el resto de la instrucción `checkiandj` se completa y `checkiandj` reitera hasta que su condición devuelve `false`. Cuando se devuelve `false`, el programa continúa en la declaración que sigue a `checkiandj`.

Si `continue` tuviera una etiqueta de `checkiandj`, el programa continuaría en la parte superior de la declaración `checkiandj`.

let i = 0; let j = 10; checkiandj: while (i < 4) { console.log(i); i += 1; checkj: while (j > 4) { console.log(j); j -= 1; if ((j % 2) === 0) { continue checkj; } console.log(j + 'es impar.'); } console.log('i = ' + i); console.log('j = ' + j); }

## Declaración `for...in`

La instrucción {{JSxRef("Statements/for...in", "for...in")}} itera una variable especificada sobre todas las propiedades enumerables de un objeto. Para cada propiedad distinta, JavaScript ejecuta las instrucciones especificadas. Una declaración `for...in` tiene el siguiente aspecto:

```
for (variable in objeto)
  instrucción
```

### Ejemplo

La siguiente función toma como argumento un objeto y el nombre del objeto. Luego itera sobre todas las propiedades del objeto y devuelve una cadena que enumera los nombres de las propiedades y sus valores.

```js
function dump_props(obj, obj_name) {
  let result = "";
  for (let i in obj) {
    result += obj_name + "." + i + " = " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}
```

Para un objeto `car` con propiedades `make` y `model`, `result` sería:

```js
car.make = Ford;
car.model = Mustang;
```

### Arrays

Aunque puede ser tentador usar esto como una forma de iterar sobre los elementos {{JSxRef("Array")}}, la instrucción `for...in` devolverá el nombre de sus propiedades definidas por el usuario además de los índices numéricos.

Por lo tanto, es mejor usar un bucle {{JSxRef("Statements/for", "for")}} tradicional con un índice numérico cuando se itera sobre arreglos, porque la instrucción `for...in` itera sobre las propiedades definidas por el usuario además de los elementos del arreglo, si modificas el objeto `Array` (tal como agregar propiedades o métodos personalizados).

## Declaración `for...of`

La declaración {{JSxRef("Statements/for...of", "for...of")}} crea un bucle que se repite sobre [objetos iterables](/es/docs/Web/JavaScript/Reference/Iteration_protocols) (incluidos {{JSxRef("Array")}}, {{JSxRef("Map")}}, {{JSxRef("Set")}}, objetos {{JSxRef("Functions/arguments", "arguments")}} y así sucesivamente), invocando un bucle de iteración personalizado con declaraciones que se ejecutarán para el valor de cada distinta propiedad.

```
for (variable of objeto)
  expresión
```

El siguiente ejemplo muestra la diferencia entre un bucle `for...of` y un bucle {{JSxRef("Statements/for...in", "for...in")}}. Mientras que `for...in` itera sobre los nombres de propiedad, `for...of` itera sobre los valores de propiedad:

```js
const arr = [3, 5, 7];
arr.foo = "hola";

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // logs 3, 5, 7
}
```

{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}


# TEMA: GUIDE/FUNCTIONS



--- SUBTEMA: functions ---


{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.

Consulta también el {{JSxRef("Funciones", "capítulo de referencia exhaustivo sobre funciones de JavaScript")}} para conocer los detalles.

## Definir funciones

### Declaración de función

Una **definición de función** (también denominada **declaración de función** o **expresión de función**) consta de la palabra clave {{JSxRef("Sentencias/function", "function")}}, seguida de:

- El nombre de la función.
- Una lista de parámetros de la función, entre paréntesis y separados por comas.
- Las declaraciones de JavaScript que definen la función, encerradas entre llaves, `{ ... }`.

Por ejemplo, el siguiente código define una función simple llamada `square` ("cuadrado"):

```js
function square(number) {
  return number * number;
}
```

La función `square` toma un parámetro, llamado `number`. La función consta de una declaración que dice devuelva el parámetro de la función (es decir, `number`) multiplicado por sí mismo. La instrucción {{JSxRef("Sentencias/return", "return")}} especifica el valor devuelto por la función:

```js
return number * number;
```

Los parámetros primitivos (como un `number`) se pasan a las funciones **por valor**; el valor se pasa a la función, pero si la función cambia el valor del parámetro, **este cambio no se refleja globalmente ni en la función que llama**.

Si pasas un objeto (es decir, un valor no primitivo, como {{JSxRef("Array")}} o un objeto definido por el usuario) como parámetro y la función cambia las propiedades del objeto, ese cambio es visible fuera de la función, como se muestra en el siguiente ejemplo:

```js
function myFunc(theObject) {
  theObject.make = 'Toyota';
}

[parcial]var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
var x, y;

x = mycar.make; // x obtiene el valor "Honda"

myFunc(mycar);
y = mycar.make; // y obtiene el valor "Toyota"
                // (la propiedad make fue cambiada por la función)
```

### Expresiones `function`

Si bien la declaración de función anterior sintácticamente es una declaración, las funciones también se pueden crear mediante una {{JSxRef("Operadores/function", "expresión function")}}.

Esta función puede ser **anónima**; no tiene por qué tener un nombre. Por ejemplo, la función `square` se podría haber definido como:

```js
const square = function (number) {
  return number * number;
};
var x = square(4); // x obtiene el valor 16
```

Sin embargo, _puedes_ proporcionar un nombre con una expresión `function`. Proporcionar un nombre permite que la función se refiera a sí misma y también facilita la identificación de la función en el seguimiento de la pila de un depurador:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));
```

Las expresiones `function` son convenientes cuando se pasa una función como argumento a otra función. El siguiente ejemplo muestra una función `map` que debería recibir una función como primer argumento y un arreglo como segundo argumento.

```js
function map(f, a) {
  let result = []; // Crea un nuevo arreglo
  let i; // Declara una variable
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
```

En el siguiente código, la función recibe una función definida por una expresión de función y la ejecuta por cada elemento del arreglo recibido como segundo argumento.

```js
function map(f, a) {
  let result = []; // Crea un nuevo arreglo
  let i; // Declara una variable
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
const f = function (x) {
  return x * x * x;
};
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);
```

La función devuelve: `[0, 1, 8, 125, 1000]`.

En JavaScript, una función se puede definir en función de una condición. Por ejemplo, la siguiente definición de función define `myFunc` solo si `num` es igual a `0`:

```js
var myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

Además de definir funciones como se describe aquí, también puedes usar el constructor {{JSxRef("Function")}} para crear funciones a partir de una cadena en tiempo de ejecución, muy al estilo de {{JSxRef("eval", "eval()")}}.

Un **método** es una función que es propiedad de un objeto. Obten más información sobre objetos y métodos en {{JSxRef("Guide/Working_with_Objects", "Trabajar con objetos")}}.

## Llamar funciones

_Definir_ una función no la _ejecuta_. Definirla simplemente nombra la función y especifica qué hacer cuando se llama a la función.

**Llamar** a la función en realidad lleva a cabo las acciones especificadas con los parámetros indicados. Por ejemplo, si defines la función `square`, podrías llamarla de la siguiente manera:

```js
square(5);
```

La declaración anterior llama a la función con un argumento de `5`. La función ejecuta sus declaraciones y devuelve el valor `25`.

Las funciones deben estar _dentro del ámbito_ cuando se llaman, pero la declaración de la función se puede elevar (cuando aparece debajo de la llamada en el código), como en este ejemplo:

```js
console.log(square(5));
/* ... */
function square(n) {
  return n * n;
}
```

El ámbito de una función es la función en la que se declara (o el programa completo, si se declara en el nivel superior).

> [!NOTE]
> Esto solo trabaja cuando se define la función usando la sintaxis anterior (es decir, `function funcName() {}`). El siguiente código no trabajará.Esto significa que la elevación de función solo trabaja con _declaraciones_ de función, no con _expresiones_ de función.
>
> ```js example-bad
> console.log(square) // square se eleva con un valor inicial undefined.
> console.log(square(5)) // Error de tipo no detectado: square no es una función
> const square = function(n) {
> return n \* n;
> }
> ```

Los argumentos de una función no se limitan a cadenas y números. Puedes pasar objetos completos a una función. La función `show_props()` (definida en {{JSxRef("Guide/Working_with_Objects", "Trabajar con objetos", "#Objetos_y_propiedades")}} es un ejemplo de una función que toma un objeto como argumento.

Una función se puede llamar a sí misma. Por ejemplo, aquí hay una función que calcula factoriales de forma recursiva:

```js
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
}
```

Luego, podrías calcular los factoriales de `1` a `5` de la siguiente manera:

```js
var a, b, c, d, e;
a = factorial(1); // a obtiene el valor 1
b = factorial(2); // b obtiene el valor 2
c = factorial(3); // c obtiene el valor 6
d = factorial(4); // d obtiene el valor 24
e = factorial(5); // e obtiene el valor 120
```

Hay otras formas de llamar funciones. A menudo hay casos en los que una función se tiene que llamar dinámicamente, o el número de argumentos de una función varía, o en los que el contexto de la llamada a la función se tiene que establecer en un determinado objeto específico en tiempo de ejecución.

Resulta que las _funciones en sí mismas son objetos_ y, a su vez, estos objetos tienen métodos. (Consulta el objeto {{JSxRef("Function")}}. Uno de estos, el método {{JSxRef("Function.apply", "apply()")}}, se puede utilizar para lograr este objetivo.

## Ámbito de `function`

No se puede acceder a las variables definidas dentro de una función desde cualquier lugar fuera de la función, porque la variable se define solo en el ámbito de la función. Sin embargo, una función puede acceder a todas las variables y funciones definidas dentro del ámbito en el que está definida.

En otras palabras, una función definida en el ámbito global puede acceder a todas las variables definidas en el ámbito global. Una función definida dentro de otra función también puede acceder a todas las variables definidas en su función principal y a cualquier otra variable a la que tenga acceso la función principal.

```js
// Las siguientes variables se definen en el ámbito global
var num1 = 20,
  num2 = 3,
  name = "Chamahk";

// Esta función está definida en el ámbito global
function multiply() {
  return num1 * num2;
}

multiply(); // Devuelve 60

// Un ejemplo de función anidada
function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return name + " anotó " + (num1 + num2);
  }

  return add();
}

getScore(); // Devuelve "Chamahk anotó 5"
```

## Ámbito y la pila de funciones

### Recursión

Una función se puede referir y llamarse a sí misma. Hay tres formas de que una función se refiera a sí misma:

1. El nombre de la función
2. {{JSxRef("Funciones/arguments/callee", "arguments.callee")}}
3. Una variable dentro del ámbito que se refiere a la función

Por ejemplo, considera la siguiente definición de función:

```js
var foo = function bar() {
  // las instrucciones van aquí
};
```

Dentro del cuerpo de la función, todos los siguientes son equivalentes:

1. `bar()`
2. `arguments.callee()`
3. `foo()`

Una función que se llama a sí misma se conoce como una _función recursiva_. En cierto modo, la recursividad es análoga a un bucle. Ambas ejecutan el mismo código varias veces y ambas requieren una condición (para evitar un bucle infinito, o más bien, una recursividad infinita en este caso).

Por ejemplo, el siguiente bucle...

```js
var x = 0;
while (x < 10) {
  // "x < 10" es la condición del bucle
  // hacer cosas
  x++;
}
```

...se puede convertir en una declaración de función recursiva, seguida de una llamada a esa función:

```js
function loop(x) {
  if (x >= 10)
    // "x >= 10" es la condición de salida (equivalente a "!(x < 10)")
    return;
  // hacer cosas
  loop(x + 1); // la llamada recursiva
}
loop(0);
```

Sin embargo, algunos algoritmos no pueden ser simples bucles iterativos. Por ejemplo, obtener todos los nodos de una estructura de árbol (como [DOM](/es/docs/Web/API/Document_Object_Model)) es más fácil a través de la recursividad:

```js
function walkTree(node) {
  if (node == null)
    //
    return;
  // hacer algo con el nodo
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
```

En comparación con la función `loop`, cada llamada recursiva en sí misma hace muchas llamadas recursivas aquí.

Es posible convertir cualquier algoritmo recursivo en uno no recursivo, pero la lógica suele ser mucho más compleja, y hacerlo requiere el uso de una pila.

De hecho, la recursividad en sí misma usa una pila: la pila de funciones. El comportamiento similar a una pila se puede ver en el siguiente ejemplo:

```js
function foo(i) {
  if (i < 0) return;
  console.log("inicio: " + i);
  foo(i - 1);
  console.log("fin: " + i);
}
foo(3);

// Produce:

// inicio: 3
// inicio: 2
// inicio: 1
// inicio: 0
// fin: 0
// fin: 1
// fin: 2
// fin: 3
```

### Funciones anidadas y cierres

Puedes anidar una función dentro de otra función. La función anidada (interna) es privada de su función contenedora (externa).

También forma un _cierre_. Un cierre es una expresión (comúnmente, una función) que puede tener variables libres junto con un entorno que une esas variables (que "cierra" la expresión).

Dado que una función anidada es un cierre, significa que una función anidada puede "heredar" los argumentos y variables de su función contenedora. En otras palabras, la función interna contiene el ámbito de la función externa.

Para resumir:

- Solo se puede acceder a la función interna desde declaraciones en la función externa.

- La función interna forma un cierre: la función interna puede usar los argumentos y variables de la función externa, mientras que la función externa no puede usar los argumentos y variables de la función interna.

El siguiente ejemplo muestra funciones anidadas:

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // devuelve 13
b = addSquares(3, 4); // devuelve 25
c = addSquares(4, 5); // devuelve 41
```

Dado que la función interna forma un cierre, puedes llamar a la función externa y especificar argumentos tanto para la función externa como para la interna:

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Piensa en ello como: dame una función que agregue 3 a lo que sea que le des
// eso
result = fn_inside(5); // devuelve 8

result1 = outside(3)(5); // devuelve 8
```

### Preservación de variables

Observa cómo se conserva `x` cuando se devuelve `inside`. Un cierre debe conservar los argumentos y variables en todos los ámbitos a los que hace referencia. Dado que cada llamada proporciona argumentos potencialmente diferentes, se crea un nuevo cierre para cada llamada a `outside`. La memoria se puede liberar solo cuando el `inside` devuelto ya no es accesible.

Esto no es diferente de almacenar referencias en otros objetos, pero a menudo es menos obvio porque uno no establece las referencias directamente y no las puede inspeccionar.

### Funciones multianidadas

Las funciones se pueden anidar de forma múltiple. Por ejemplo:

- Una función (`A`) contiene una función (`B`), que a su vez contiene una función (`C`).
- Ambas funciones `B` y `C` forman cierres aquí. Por tanto, `B` puede acceder a `A` y `C` puede acceder a `B`.
- Además, dado que `C` puede acceder a `B` que puede acceder a `A`, `C` también puede acceder a `A`.

Por tanto, los cierres pueden contener múltiples ámbitos; contienen de forma recursiva el ámbito de las funciones que la contienen. Esto se llama _encadenamiento de alcance_. (La razón por la que se llama "encadenamiento" se explica más adelante).

Considera el siguiente ejemplo:

```js
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // registra 6 (1 + 2 + 3)
```

En este ejemplo, `C` accede a `y` de `B` y a `x` de `A`.

Esto se puede hacer porque:

1. `B` forma un cierre que incluye a `A` (es decir, `B` puede acceder a los argumentos y variables de `A`).
2. `C` forma un cierre que incluye a `B`.
3. Debido a que el cierre de `B` incluye a `A`, el cierre de `C` incluye a `A`, `C` puede acceder a los argumentos _y variables_ de `B` _y_ de `A`. En otras palabras, `C` _encadena_ los ámbitos de `B` y `A`, _en ese orden_.

Sin embargo, lo contrario no es cierto. `A` no puede acceder a `C`, porque `A` no puede acceder a ningún argumento o variable de `B`, del que `C` es una variable. Por lo tanto, `C` permanece privado solo para `B`.

### Conflictos de nombres

Cuando dos argumentos o variables en el ámbito de un cierre tienen el mismo nombre, hay un _conflicto de nombres_. Tiene más prioridad el ámbito anidado. Entonces, el ámbito más interno tiene la mayor prioridad, mientras que el ámbito más externo tiene la más baja. Esta es la cadena de ámbito. El primero de la cadena es el ámbito más interno y el último es el ámbito más externo. Considera lo siguiente:

```js
function outside() {
  var x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

outside()(10); // devuelve 20 en lugar de 10
```

El conflicto de nombre ocurre en la declaración `return x` y está entre el parámetro `x` de `inside` y la variable `x` de `outside`. La cadena de ámbito aquí es {`inside`, `outside`, objeto global}. Por lo tanto, `x` de `inside` tiene precedencia sobre `x` de `outside` y `20` (`x`) de `inside` se devuelve en lugar de `10` (`x` de `outside`).

## Cierres

Los cierres son una de las características más poderosas de JavaScript. JavaScript permite el anidamiento de funciones y otorga a la función interna acceso completo a todas las variables y funciones definidas dentro de la función externa (y todas las demás variables y funciones a las que la función externa tiene acceso).

Sin embargo, la función externa _no_ tiene acceso a las variables y funciones definidas dentro de la función interna. Esto proporciona una especie de encapsulación para las variables de la función interna.

Además, dado que la función interna tiene acceso a el ámbito de la función externa, las variables y funciones definidas en la función externa vivirán más que la duración de la ejecución de la función externa, si la función interna logra sobrevivir más allá de la vida de la función externa. Se crea un cierre cuando la función interna de alguna manera se pone a disposición de cualquier ámbito fuera de la función externa.

```js
var pet = function (name) {
  // La función externa define una variable llamada "name"
  var getName = function () {
    return name; // La función interna tiene acceso a la variable
    // "name" de la función externa
  };
  return getName; // Devuelve la función interna, exponiéndola así a ámbitos externos
};
myPet = pet("Vivie");

myPet(); // Devuelve "Vivie"
```

Puede ser mucho más complejo que el código anterior. Se puede devolver un objeto que contiene métodos para manipular las variables internas de la función externa.

```js
var createPet = function (name) {
  var sex;

  return {
    setName: function (newName) {
      name = newName;
    },

    getName: function () {
      return name;
    },

    getSex: function () {
      return sex;
    },

    setSex: function (newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };
};

var pet = createPet("Vivie");
pet.getName(); // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex(); // male
pet.getName(); // Oliver
```

En el código anterior, la variable `name` de la función externa es accesible para las funciones internas, y no hay otra forma de acceder a las variables internas excepto a través de las funciones internas. Las variables internas de las funciones internas actúan como almacenes seguros para los argumentos y variables externos. Contienen datos "persistentes" y "encapsulados" para que trabajen las funciones internas. Las funciones ni siquiera tienen que estar asignadas a una variable o tener un nombre.

```js
var getCode = (function () {
  var apiCode = "0]Eal(eh&2"; // Un código que no queremos que los externos puedan modificar...

  return function () {
    return apiCode;
  };
})();

getCode(); // Devuelve el apiCode
```

> [!NOTE]
> ¡Hay una serie de trampas a tener en cuenta al usar cierres!
>
> Si una función encerrada define una variable con el mismo nombre que una variable en el ámbito externo, entonces no hay forma de hacer referencia a la variable en el ámbito externo nuevamente. (La variable de ámbito interno "anula" la externa, hasta que el programa sale de el ámbito interno).
>
> ```js example-bad
> var createPet = function (name) {
>   // La función externa define una variable llamada "name".
>   return {
>     setName: function (name) {
>       // La función envolvente también define una variable llamada "name".
>       name = name; // ¿Cómo accedemos al "name" definido por la función externa?
>     },
>   };
> };
> ```

## Usar el objeto `arguments`

El `arguments` de una función se mantiene en un objeto similar a un arreglo. Dentro de una función, puedes abordar los argumentos que se le pasan de la siguiente manera:

```js
arguments[i];
```

donde `i` es el número ordinal del argumento, comenzando en `0`. Entonces, el primer argumento que se pasa a una función sería `arguments[0]`. El número total de argumentos se indica mediante `arguments.length`.

Usando el objeto `arguments`, puedes llamar a una función con más argumentos de los que formalmente declara aceptar. Esto suele ser útil si no sabes de antemano cuántos argumentos se pasarán a la función. Puedes usar `arguments.length` para determinar el número de argumentos que realmente se pasan a la función, y luego acceder a cada argumento usando el objeto `arguments`.

Por ejemplo, considera una función que concatena varias cadenas. El único argumento formal para la función es una cadena que especifica los caracteres que separan los elementos a concatenar. La función se define de la siguiente manera:

```js
function myConcat(separator) {
  var result = ""; // inicia list
  var i;
  // itera a través de arguments
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
```

Puedes pasar cualquier número de argumentos a esta función, y concatena cada argumento en una "lista" de cadenas:

```js
// devuelve "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

// devuelve "elephant; giraffe; lion; cheetah"
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// devuelve "sage. basil. oregano. pepper. perejil. "
myConcat(". ", "salvia", "albahaca", "orégano", "pimienta", "perejil");
```

> [!NOTE]
> La variable `arguments` es "similar a un arreglo", pero no es un arreglo. Es similar a un arreglo en el sentido de que tiene un índice numerado y una propiedad `length`. Sin embargo, _no_ posee todos los métodos de manipulación de arreglos.

Consulta el objeto {{JSxRef("Function")}} en la referencia de JavaScript para obtener más información.

## Parámetros de función

A partir de ECMAScript 2015, hay dos nuevos tipos de parámetros: _parámetros predeterminados_ y _parámetros resto_.

### Parámetros predeterminados

En JavaScript, los parámetros de las funciones están predeterminados en `undefined`. Sin embargo, en algunas situaciones puede resultar útil establecer un valor predeterminado diferente. Esto es exactamente lo que hacen los parámetros predeterminados.

#### Sin parámetros predeterminados (preECMAScript 2015)

En el pasado, la estrategia general para establecer valores predeterminados era probar los valores de los parámetros en el cuerpo de la función y asignar un valor si eran `undefined`.

En el siguiente ejemplo, si no se proporciona ningún valor para `b`, su valor sería `undefined` al evaluar `a * b`, y una llamada a `multiply` normalmente habría devuelto `NaN`. Sin embargo, esto se evita con la segunda línea de este ejemplo:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;

  return a * b;
}

multiply(5); // 5
```

#### Con parámetros predeterminados (posECMAScript 2015)

Con _parámetros predeterminados_, ya no es necesaria una verificación manual en el cuerpo de la función. Simplemente puedes poner `1` como valor predeterminado para `b` en el encabezado de la función:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5
```

Para obtener más detalles, consulta {{JSxRef("Funciones/Parametros_predeterminados", "parámetros predeterminados")}} en la referencia.

### Parámetros `rest`

La sintaxis del {{JSxRef("Funciones/Parametros_rest", "parámetro rest")}} nos permite representar un número indefinido de argumentos como un arreglo.

En el siguiente ejemplo, la función `multiply` usa _parámetros `rest`_ para recopilar argumentos desde el segundo hasta el final. Luego, la función los multiplica por el primer argumento.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Funciones Flecha

Una {{JSxRef("Funciones/Funciones_flecha", "expresión de función flecha")}} (anteriormente, y ahora conocida incorrectamente como **función de flecha gruesa**) tiene una sintaxis más corta en comparación con las expresiones de función y no tiene su propio {{JSxRef("Operadores/this", "this")}}, {{JSxRef("Funciones/arguments", "arguments")}}, {{JSxRef("Operadores/super", "super")}} o {{JSxRef("Operadores/new.target", "new.target")}}. Las funciones flecha siempre son anónimas. Consulta también esta publicación del blog hacks.mozilla.org: "[ES6 en profundidad: funciones flecha](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)".

Dos factores influyeron en la introducción de las funciones flecha: _funciones más cortas_ y _no vinculantes_ de `this`.

### Funciones más cortas

En algunos patrones funcionales, las funciones más cortas son bienvenidas. Compara:

```js
var a = ["Hidrógeno", "Helio", "Litio", "Berilio"];

var a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map((s) => s.length);

console.log(a3); // logs [8, 6, 7, 9]
```

### Sin `this` separado

Hasta las funciones flecha, cada nueva función definía su propio valor {{JSxRef("Operadores/this", "this")}} (un nuevo objeto en el caso de un constructor, indefinido en llamadas a funciones en {{JSxRef("Strict_mode", "modo estricto")}}, el objeto base si la función se llama como un "método de objeto", etc.). Esto resultó ser poco menos que ideal con un estilo de programación orientado a objetos.

```js
function Person() {
  // El constructor Person() define `this` como él mismo.
  this.age = 0;

  setInterval(function growUp() {
    // En modo no estricto, la función growUp() define `this`
    // como el objeto global, que es diferente del `this`
    // definido por el constructor Person().
    this.age++;
  }, 1000);
}

var p = new Person();
```

En ECMAScript 3/5, este problema se solucionó asignando el valor en `this` a una variable que se podría cerrar.

```js
function Person() {
  var self = this; // Algunos eligen `that` en lugar de` self`.
  // Elige uno y se congruente.
  self.age = 0;

  setInterval(function growUp() {
    // La retrollamada se refiere a la variable `self` de la cual
    // el valor es el objeto esperado.
    self.age++;
  }, 1000);
}
```

Alternativamente, podrías crear una {{JSxRef("Objetos_globales/Function/bind", "función vinculada")}} para que el valor `this` adecuado se pasara a la función `growUp()`.

Una función flecha no tiene su propio `this` se utiliza el valor de `this` del contexto de ejecución adjunto. Por lo tanto, en el siguiente código, `this` dentro de la función que se pasa a `setInterval` tiene el mismo valor que `this` en la función adjunta:

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| propiamente se refiere al objeto person
  }, 1000);
}

var p = new Person();
```

## Funciones predefinidas

JavaScript tiene integradas varias funciones de nivel superior:

- {{JSxRef("Objetos_globales/eval", "eval()")}}
  - : El método **`eval()`** evalúa el código JavaScript representado como una cadena.
- {{JSxRef("Objetos_globales/uneval", "uneval()")}}
  - : El método **`uneval()`** crea una representación de cadena del código fuente de un {{JSxRef("Object")}}.
- {{JSxRef("Objetos_globales/isFinite", "isFinite()")}}
  - : La función global **`isFinite()`** determina si el valor pasado es un número finito. Si es necesario, el parámetro, primero se convierte en un número.
- {{JSxRef("Objetos_globales/isNaN", "isNaN()")}}
  - : La función **`isNaN()`** determina si un valor es {{JSxRef("Objetos_globales/NaN", "NaN")}} o no. **Nota**: La coerción dentro de la función `isNaN` tiene {{JSxRef("Objetos_globales/isNaN", "interesantes", "#Descripcion")}} reglas; también puedes querer usar {{JSxRef("Number.isNaN()")}}, como se define en ECMAScript 2015, o puedes usar {{JSxRef("Operadores/typeof", "typeof")}} para determinar si el valor no es un número (`NaN`).
- {{JSxRef("Objetos_globales/parseFloat", "parseFloat()")}}
  - : La función **`parseFloat()`** procesa un argumento de cadena y devuelve un número de punto flotante.
- {{JSxRef("Objetos_globales/parseInt", "parseInt()")}}
  - : La función **`parseInt()`** procesa un argumento de cadena y devuelve un número entero de la base especificada (la base en los sistemas numéricos matemáticos).
- {{JSxRef("Objetos_globales/decodeURI", "decodeURI()")}}
  - : La función **`decodeURI()`** decodifica un identificador uniforme de recursos (URI) creado previamente por {{JSxRef("Objetos_globales/encodeURI", "encodeURI")}} o por una rutina similar.
- {{JSxRef("Objetos_globales/decodeURIComponent", "decodeURIComponent()")}}
  - : El método **`decodeURIComponent()`** decodifica un componente Identificador uniforme de recursos (URI) creado previamente por {{JSxRef("Objetos_globales/encodeURIComponent", "encodeURIComponent")}} o por un rutina similar.
- {{JSxRef("Objetos_globales/encodeURI", "encodeURI()")}}
  - : El método **`encodeURI()`** codifica un identificador uniforme de recursos (URI) reemplazando cada instancia de ciertos caracteres por una, dos, tres o cuatro secuencias de escape que representan la codificación UTF-8 del caracter (solo habrá cuatro secuencias de escape para caracteres compuestos por dos caracteres "sustitutos").
- {{JSxRef("Objetos_globales/encodeURIComponent", "encodeURIComponent()")}}
  - : El método **`encodeURIComponent()`** codifica un componente Identificador uniforme de recursos (URI) reemplazando cada instancia de ciertos caracteres por una, dos, tres o cuatro secuencias de escape que representan la codificación UTF-8 del caracter (solo habrá cuatro secuencias de escape para caracteres compuestos por dos caracteres "sustitutos").
- {{JSxRef("Objetos_globales/escape", "escape()")}}
  - : El método obsoleto **`escape()`** calcula una nueva cadena en la que ciertos caracteres han sido reemplazados por una secuencia de escape hexadecimal. En su lugar usa {{JSxRef("Objetos_globales/encodeURI", "encodeURI")}} o {{JSxRef("Objetos_globales/encodeURIComponent", "encodeURIComponent")}}.
- {{JSxRef("Objetos_globales/unescape", "unescape()")}}
  - : El método obsoleto **`unescape()`** calcula una nueva cadena en la que las secuencias de escape hexadecimales se reemplazan con el caracter que representan. Las secuencias de escape se pueden introducir por medio de una función como {{JSxRef("Objetos_globales/escape", "escape")}}. Debido a que `unescape()` está en desuso, usa {{JSxRef("Objetos_globales/decodeURI", "decodeURI()")}} o {{JSxRef("Objetos_globales/decodeURIComponent", "decodeURIComponent")}} en su lugar.

{{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}


# TEMA: GUIDE/EXPRESSIONS_AND_OPERATORS



--- SUBTEMA: expressions_and_operators ---


{{jsSidebar("JavaScript Guide", "Guía JavaScript")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}

Este capítulo describe las expresiones y los operadores de JavaScript, incluyendo los de asignación, comparación, aritméticos, bit a bit, lógicos, ternarios, de cadena y otros.

También se encuentra disponible una lista completa y detallada de operadores y expresiones en la {{JSxRef("Operadores", "referencia")}}.

## Operadores

JavaScript tiene los siguientes tipos de operadores. Esta sección describe los operadores y contiene información sobre la precedencia de los mismos.

- [Operadores de asignación](#asignacion)
- [Operadores de comparación](#comparacion)
- [Operadores aritméticos](#aritmeticos)
- [Operadores bit a bit](#bit_a_bit)
- [Operadores lógicos](#logico)
- [Operadores de cadena](#cadena)
- [Operador condicional (ternario)](#condicional)
- [Operador coma](#coma)
- [Operadores unarios](#unario)
- [Operadores relacionales](#relational)

JavaScript tiene ambos operadores _binarios_ y _unarios_, y un operador ternario especial, el operador condicional. Un operador binario requiere dos operandos, uno antes del operando y otro después del operador:

```
operando1 operador operando2
```

Por ejemplo, `3+4` o `x*y`.

Un operador unario requiere un solo operando, ya sea antes o después del operador:

```
operador operando
```

o

```
operando operador
```

Por ejemplo, `x++` o `++x`.

### Operadores de asignación

Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho. El operador de asignación simple es igual (`=`), que asigna el valor de su operando derecho a su operando izquierdo. Es decir, `x = y` asigna el valor de `y` a `x`.

También hay operadores de asignación compuestos que son una abreviatura de las operaciones enumeradas en la siguiente tabla:

| Nombre                                                                                                          | Operador abreviado | Significado      |
| --------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------- |
| {{JSxRef("Operadores/Assignment", "Asignación")}}                                                               | `x = y`            | `x = y`          |
| {{JSxRef("Operadores/Addition_assignment", "Asignación de adición")}}                                           | `x += y`           | `x = x + y`      |
| {{JSxRef("Operadores/Subtraction_assignment", "Asignación de resta")}}                                          | `x -= y`           | `x = x - y`      |
| {{JSxRef("Operadores/Multiplication_assignment", "Asignación de multiplicación")}}                              | `x *= y`           | `x = x * y`      |
| {{JSxRef("Operadores/Division_assignment", "Asignación de división")}}                                          | `x /= y`           | `x = x / y`      |
| {{JSxRef("Operadores/Remainder_assignment", "Asignación de residuo")}}                                          | `x %= y`           | `x = x % y`      |
| {{JSxRef("Operadores/Exponentiation_assignment", "Asignación de exponenciación")}}                              | `x **= y`          | `x = x ** y`     |
| {{JSxRef("Operadores/Left_shift_assignment", "Asignación de desplazamiento a la izquierda")}}                   | `x <<= y`          | `x = x << y`     |
| {{JSxRef("Operadores/Right_shift_assignment", "Asignación de desplazamiento a la derecha")}}                    | `x >>= y`          | `x = x >> y`     |
| {{JSxRef("Operadores/Unsigned_right_shift_assignment", "Asignación de desplazamiento a la derecha sin signo")}} | `x >>>= y`         | `x = x >>> y`    |
| {{JSxRef("Operadores/Bitwise_AND_assignment", "Asignación AND bit a bit")}}                                     | `x &= y`           | `x = x & y`      |
| {{JSxRef("Operadores/Bitwise_XOR_assignment", "Asignación XOR bit a bit")}}                                     | `x ^= y`           | `x = x ^ y`      |
| {{JSxRef("Operadores/Bitwise_OR_assignment", "Asignación OR bit a bit")}}                                       | `x \|= y`          | `x = x \| y`     |
| {{JSxRef("Operadores/Logical_AND_assignment", "Asignación AND lógico")}}                                        | `x &&= y`          | `x && (x = y)`   |
| {{JSxRef("Operadores/Logical_OR_assignment", "Asignación OR lógico")}}                                          | `x \|\|= y`        | `x \|\| (x = y)` |
| {{JSxRef("Operadores/Logical_nullish_assignment", "Asignación de anulación lógica")}}                           | `x ??= y`          | `x ?? (x = y)`   |

#### Valor de retorno y encadenamiento

Como la mayoría de las expresiones, asignaciones como `x = y` tienen un valor de retorno. Se puede recuperar p. ej. asignando la expresión o registrándola:

```bash
const z = (x = y); // O de forma equivalente: const z = x = y;

console.log(z); // Registra el valor de retorno de la asignación x = y.
console.log(x = y); // O registra el valor de retorno directamente.
```

El valor de retorno coincide con la expresión a la derecha del signo `=` en la columna "Significado" de la tabla anterior. Eso significa que `(x = y)` devuelve `y`, `(x += y)` devuelve la suma resultante `x + y`, `(x **= y)` devuelve la potencia resultante `x ** y`, y así sucesivamente.

En el caso de asignaciones lógicas, `(x &&= y)`, `(x || = y)` y `(x ??= y)`, el valor de retorno es el de la operación lógica sin la asignación, entonces `x && y`, `x || y` y `x ?? y`, respectivamente.

Ten en cuenta que los valores de retorno siempre se basan en los valores de los operandos _antes_ de la operación.

Al encadenar estas expresiones, cada asignación se evalúa de **derecha a izquierda**. Considera estos ejemplos:

- `w = z = x = y` es equivalente a `w = (z = (x = y))` o `x = y; z = y; w = y`
- `z += x *= y` es equivalente e `z += (x *= y)` o `tmp = x * y; x *= y; z += tmp` (salvo que sin `tmp`).

#### Desestructuración

Para asignaciones más complejas, la sintaxis de {{JSxRef("Operadores/Destructuring_assignment", "asignación de desestructuración")}} es una expresión de JavaScript que hace posible extraer datos de arreglos u objetos usando una sintaxis que refleja la construcción de arreglos y objetos literales.

```js
var foo = ["one", "two", "three"];

// sin desestructurar
var one = foo[0];
var two = foo[1];
var three = foo[2];

// con desestructuración
var [one, two, three] = foo;
```

### Operadores de comparación

Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (`true`) o falsa (`false`). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente. Las únicas excepciones a la conversión de tipos dentro de las comparaciones involucran a los operadores `===` y `!==`, que realizan comparaciones estrictas de igualdad y desigualdad. Estos operadores no intentan convertir los operandos a tipos compatibles antes de verificar la igualdad. La siguiente tabla describe los operadores de comparación en términos de este código de ejemplo:

```js
var var1 = 3;
var var2 = 4;
```

| Operador                                                                                                 | Descripción                                                                                                                                                                   | Ejemplos que devuelven `true`              |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| {{JSxRef("Operadores/Comparison_Operators", "Igual", "#Igualdad")}} (`==`)                               | Devuelve `true` si los operandos son iguales.                                                                                                                                 | `3 == var1`<br>`"3" == var1`<br>`3 == '3'` |
| {{JSxRef("Operadores/Comparison_Operators", "No es igual", "#Desigualdad")}} (`!=`)                      | Devuelve `true` si los operandos _no_ son iguales.                                                                                                                            | `var1 != 4`<br>`var2 != "3"`               |
| {{JSxRef("Operadores/Comparison_Operators", "Estrictamente igual", "#Identidad")}} (`===`)               | Devuelve `true` si los operandos son iguales y del mismo tipo. Consulta también {{JSxRef("Object.is")}} y {{JSxRef("Equality_comparisons_and_sameness", "similitud en JS")}}. | `3 === var1`                               |
| {{JSxRef("Operadores/Comparison_Operators", "Desigualdad estricta", "#No_Identidad")}} (`!==`)           | Devuelve `true` si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.                                                                                 | `var1 !== "3"`<br>`3 !== '3'`              |
| {{JSxRef("/Operadores/Comparison_Operators", "Mayor que", "#Mayor_que_el_operador")}} (`>`)              | Devuelve `true` si el operando izquierdo es mayor que el operando derecho.                                                                                                    | `var2 > var1 "12" > 2`                     |
| {{JSxRef("Operadores/Comparison_Operators", "Mayor o igual que", "#Operador_mayor_que_o_igual")}} (`>=`) | Devuelve `true` si el operando izquierdo es mayor o igual que el operando derecho.                                                                                            | `var2 >= var1 var1 >= 3`                   |
| {{JSxRef("Operadores/Comparison_Operators", "Menor que", "#Operador_menor_que")}} (`<`)                  | Devuelve `true` si el operando izquierdo es menor que el operando derecho.                                                                                                    | `var1 < var2`<br>`"2" < 12`                |
| {{JSxRef("Operadores/Comparison_Operators", "Menor o igual", "#Operador_menor_que_o_igual")}} (`<=`)     | Devuelve `true` si el operando izquierdo es menor o igual que el operando derecho.                                                                                            | `var1 <= var2 var2 <= 5`                   |

> [!NOTE]
> (**=>**) no es un operador, sino la notación para {{JSxRef("Funciones/Arrow_functions", "Funciones flecha")}}.

### Operadores aritméticos

Un operador aritmético toma valores numéricos (ya sean literales o variables) como sus operandos y devuelve un solo valor numérico. Los operadores aritméticos estándar son suma (`+`), resta (`-`), multiplicación (`*`) y división (`/`). Estos operadores funcionan como lo hacen en la mayoría de los otros lenguajes de programación cuando se usan con números de punto flotante (en particular, ten en cuenta que la división entre cero produce {{JSxRef("Infinity")}}). Por ejemplo:

```js
1 / 2; // 0.5
1 / 2 == 1.0 / 2.0; // Esto es true
```

Además de las operaciones aritméticas estándar (`+`, `-`, `*`, `/`), JavaScript proporciona los operadores aritméticos enumerados en la siguiente tabla:

| Operador                                                                     | Descripción                                                                                                                                                                                                                                 | Ejemplo                                                                                                                          |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| {{JSxRef("Operadores/Remainder", "Residuo")}} (`%`)                          | Operador binario. Devuelve el resto entero de dividir los dos operandos.                                                                                                                                                                    | 12 % 5 devuelve 2.                                                                                                               |
| {{JSxRef("Operadores/Increment", "Incremento")}} (`++`)                      | Operador unario. Agrega uno a su operando. Si se usa como operador prefijo (`++x`), devuelve el valor de su operando después de agregar uno; si se usa como operador sufijo (`x++`), devuelve el valor de su operando antes de agregar uno. | Si `x` es 3, `++x` establece `x` en 4 y devuelve 4, mientras que `x++` devuelve 3 y , solo entonces, establece `x` en 4.         |
| {{JSxRef("Operadores/Decrement", "Decremento")}} (`--`)                      | Operador unario. Resta uno de su operando. El valor de retorno es análogo al del operador de incremento.                                                                                                                                    | Si `x` es 3, entonces `--x` establece `x` en 2 y devuelve 2, mientras que `x--` devuelve 3 y, solo entonces, establece `x` en 2. |
| {{JSxRef("Operadores/Unary_negation", "Negación unaria")}} (`-`)             | Operador unario. Devuelve la negación de su operando.                                                                                                                                                                                       | Si `x` es 3, entonces `-x` devuelve -3.                                                                                          |
| {{JSxRef("Operadores/Unary_plus", "Positivo unario")}} (`+`)                 | Operador unario. Intenta convertir el operando en un número, si aún no lo es.                                                                                                                                                               | `+"3"` devuelve `3`. `+true` devuelve `1.`                                                                                       |
| {{JSxRef("Operadores/Exponentiation", "Operador de exponenciación")}} (`**`) | Calcula la `base` a la potencia de `exponente`, es decir, `baseexponente`                                                                                                                                                                   | `2 ** 3` returns `8`. `10 ** -1` returns `0.1`.                                                                                  |

### Operadores bit a bit

Un operador bit a bit trata a sus operandos como un conjunto de 32 bits (ceros y unos), en lugar de números decimales, hexadecimales u octales. Por ejemplo, el número decimal nueve tiene una representación binaria de 1001. Los operadores bit a bit realizan sus operaciones en tales representaciones binarias, pero devuelven valores numéricos estándar de JavaScript.

La siguiente tabla resume los operadores bit a bit de JavaScript.

| Operador                                                                                     | Uso       | Descripción                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{JSxRef("Operadores/Bitwise_AND", "AND a nivel de bits")}}                                  | `a & b`   | Devuelve un uno en cada posición del bit para los que los bits correspondientes de ambos operandos son unos.                                                                             |
| {{JSxRef("Operadores/Bitwise_OR", "OR a nivel de bits")}}                                    | `a \| b`  | Devuelve un cero en cada posición de bit para el cual los bits correspondientes de ambos operandos son ceros.                                                                            |
| {{JSxRef("Operadores/Bitwise_XOR", "XOR a nivel de bits")}}                                  | `a ^ b`   | Devuelve un cero en cada posición de bit para la que los bits correspondientes son iguales. [Devuelve uno en cada posición de bit para la que los bits correspondientes son diferentes]. |
| {{JSxRef("Operadores/Bitwise_NOT", "NOT a nivel de bits")}}                                  | `~ a`     | Invierte los bits de su operando.                                                                                                                                                        |
| {{JSxRef("Operadores/Left_shift", "Desplazamiento a la izquierda")}}                         | `a << b`  | Desplaza `a` en representación binaria `b` bits hacia la izquierda, desplazándose en ceros desde la derecha.                                                                             |
| {{JSxRef("Operadores/Right_shift", "Desplazamiento a la derecha de propagación de signo")}}  | `a >> b`  | Desplaza `a` en representación binaria `b` bits a la derecha, descartando los bits desplazados.                                                                                          |
| {{JSxRef("Operadores/Unsigned_right_shift", "Desplazamiento a la derecha de relleno cero")}} | `a >>> b` | Desplaza `a` en representación binaria `b` bits hacia la derecha, descartando los bits desplazados y desplazándose en ceros desde la izquierda.                                          |

#### Operadores lógicos bit a bit

Conceptualmente, los operadores lógicos bit a bit funcionan de la siguiente manera:

- Los operandos se convierten en enteros de treinta y dos bits y se expresan mediante una serie de bits (ceros y unos). A los números con más de 32 bits se les descartan los bits más significativos. Por ejemplo, el siguiente número entero con más de 32 bits se convertirá en un número entero de 32 bits:

  ```bash
  Antes:  1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  Después:               1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Cada bit en el primer operando se empareja con el bit correspondiente en el segundo operando: primer bit al primer bit, segundo bit al segundo bit, y así sucesivamente.
- El operador se aplica a cada par de bits y el resultado se construye bit a bit.

Por ejemplo, la representación binaria de nueve es 1001 y la representación binaria de quince es 1111. Entonces, cuando los operadores bit a bit se aplican a estos valores, los resultados son los siguientes:

| Expresión | Resultado | Descripción binaria                                   |
| --------- | --------- | ----------------------------------------------------- |
| `15 & 9`  | `9`       | `1111 & 1001 = 1001`                                  |
| `15 \| 9` | `15`      | `1111 \| 1001 = 1111`                                 |
| `15 ^ 9`  | `6`       | `1111 ^ 1001 = 0110`                                  |
| `~15`     | `-16`     | `~ 0000 0000 ... 0000 1111 = 1111 1111 ... 1111 0000` |
| `~9`      | `-10`     | `~ 0000 0000 ... 0000 1001 = 1111 1111 ... 1111 0110` |

Ten en cuenta que los 32 bits se invierten utilizando el operador `NOT` a nivel de bits y que los valores con el bit más significativo (más a la izquierda) establecido en 1 representan números negativos (representación en complemento a dos). `~x` evalúa al mismo valor que evalúa `-x - 1`.

#### Operadores de desplazamiento de bits

Los operadores de desplazamiento bit a bit toman dos operandos: el primero es una cantidad que se va a desplazar y el segundo especifica el número de posiciones de bit por las que se va a desplazar el primer operando. La dirección de la operación de desplazamiento es controlada por el operador utilizado.

Los operadores de desplazamiento convierten sus operandos en enteros de treinta y dos bits y devuelven un resultado del mismo tipo que el operando izquierdo.

Los operadores de desplazamiento se enumeran en la siguiente tabla.

| Operador                                                                                             | Descripción                                                                                                                                                                                                                 | Ejemplo                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{JSxRef("Operadores/Left_shift", "Desplazamiento a la izquierda")}} (`<<`)                          | Este operador desplaza el primer operando el número especificado de bits a la izquierda. Los bits desplazados en exceso hacia la izquierda se descartan. Los bits cero se desplazan desde la derecha.                       | `9<<2` produce 36, porque 1001 desplazado 2 bits a la izquierda se convierte en 100100, que es 36.                                                                                                                                                                   |
| {{JSxRef("Operadores/Right_shift", "Desplazamiento a la derecha de propagación de signo")}} (`>>`)   | Este operador desplaza el primer operando el número especificado de bits a la derecha. Los bits desplazados en exceso hacia la derecha se descartan. Las copias del bit más a la izquierda se desplazan desde la izquierda. | `9>>2` produce 2, porque 1001 desplazado 2 bits a la derecha se convierte en 10, que es 2. Del mismo modo, `-9>>2` produce -3, porque el signo se conserva.                                                                                                          |
| {{JSxRef("Operadores/Unsigned_right_shift", "Desplazamiento a la derecha de relleno cero")}} (`>>>`) | Este operador desplaza el primer operando el número especificado de bits a la derecha. Los bits desplazados en exceso hacia la derecha se descartan. Los bits cero se desplazan desde la izquierda.                         | `19>>>2` produce 4, porque 10011 desplazado 2 bits a la derecha se convierte en 100, que es 4. Para números no negativos, el desplazamiento a la derecha de relleno con ceros y el desplazamiento a la derecha de propagación del signo producen el mismo resultado. |

### Operadores lógicos

Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelven un valor booleano. Sin embargo, los operadores `&&` y `||` en realidad devuelven el valor de uno de los operandos especificados, por lo que si estos operadores se utilizan con valores no booleanos, pueden devolver un valor no booleano. Los operadores lógicos se describen en la siguiente tabla.

| Operador                                                  | Uso                | Descripción                                                                                                                                                                                                                                |
| --------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{JSxRef("Operadores/Logical_AND", "AND Lógico")}} (`&&`) | `expr1 && expr2`   | Devuelve `expr1` si se puede convertir a `false`; de lo contrario, devuelve `expr2`. Por lo tanto, cuando se usa con valores booleanos, `&&` devuelve `true` si ambos operandos son `true`; de lo contrario, devuelve `false`.             |
| {{JSxRef("Operadores/Logical_OR", "OR lógico")}} (`\|\|`) | `expr1 \|\| expr2` | Devuelve `expr1` si se puede convertir a `true`; de lo contrario, devuelve `expr2`. Por lo tanto, cuando se usa con valores booleanos, `\|\|` devuelve `true` si alguno de los operandos es `true`; si ambos son falsos, devuelve `false`. |
| {{JSxRef("Operadores/Logical_NOT", "NOT lógico")}} (`!`)  | `!expr`            | Devuelve `false` si su único operando se puede convertir a `true`; de lo contrario, devuelve `true`.                                                                                                                                       |

Ejemplos de expresiones que se pueden convertir a `false` son aquellos que se evalúan como `null`, 0, `NaN`, la cadena vacía ("") o `undefined`.

El siguiente código muestra ejemplos del operador `&&` (`AND` lógico).

```js
var a1 = true && true; // t && t devuelve true
var a2 = true && false; // t && f devuelve false
var a3 = false && true; // f && t devuelve false
var a4 = false && 3 == 4; // f && f devuelve false
var a5 = "Cat" && "Dog"; // t && t devuelve Dog
var a6 = false && "Cat"; // f && t devuelve false
var a7 = "Cat" && false; // t && f devuelve false
```

El siguiente código muestra ejemplos del operador || (`OR` lógico).

```js
var o1 = true || true; // t || t devuelve true
var o2 = false || true; // f || t devuelve true
var o3 = true || false; // t || f devuelve true
var o4 = false || 3 == 4; // f || f devuelve false
var o5 = "Cat" || "Dog"; // t || t devuelve Cat
var o6 = false || "Cat"; // f || t devuelve Cat
var o7 = "Cat" || false; // t || f devuelve Cat
```

El siguiente código muestra ejemplos de el operador ! (`NOT` lógico).

```js
var n1 = !true; // !t devuelve false
var n2 = !false; // !f devuelve true
var n3 = !"Cat"; // !t devuelve false
```

#### Evaluación de cortocircuito

Debido a que las expresiones lógicas se evalúan de izquierda a derecha, se prueban para una posible evaluación de "cortocircuito" utilizando las siguientes reglas:

- `false` && _anything_ se evalúa en cortocircuito como `false`.
- `true` || _anything_ se evalúa en cortocircuito como `true`.

Las reglas de la lógica garantizan que estas evaluaciones sean siempre correctas. Ten en cuenta que la parte _anything_ de las expresiones anteriores no se evalúa, por lo que los efectos secundarios de hacerlo no surten efecto.

Ten en cuenta que para el segundo caso, en el código moderno puedes usar el nuevo {{JSxRef("Operadores/Nullish_coalescing_operator", "operador de fusión nulo")}} (`??`) que funciona como `||`, pero solo devuelve la segunda expresión, cuando la primera es "{{Glossary("Nullish", "nullish")}}", es decir, {{JSxRef("Objetos_globales/null", "null")}}, el valor nulo representa la ausencia intencional de cualquier valor de objeto. Es uno de los valores primitivos de JavaScript y se trata como falso para las operaciones booleanas. o {{JSxRef("Objetos_globales/undefined", "undefined")}} la propiedad global undefined representa el valor "`undefined`" primitivo. Es uno de los tipos primitivos de JavaScript. Por tanto, es la mejor alternativa para proporcionar valores predeterminados, cuando valores como `''` o `0` también son valores válidos para la primera expresión.

### Operadores de cadena

Además de los operadores de comparación, que se pueden usar en valores de cadena, el operador de concatenación (+) concatena dos valores de cadena, devolviendo otra cadena que es la unión de los dos operandos de cadena.

Por ejemplo,

```js
console.log("mi " + "cadena"); // la consola registra la cadena "mi cadena".
```

El operador de asignación abreviada `+=` también se puede utilizar para concatenar cadenas.

Por ejemplo,

```js
var mystring = "alpha";
mystring += "bet"; // se evalúa como "alphabet" y asigna este valor a mystring.
```

### Operador condicional (ternario)

El {{JSxRef("Operadores/Conditional_Operator", "operador condicional")}} es el único operador de JavaScript que toma tres operandos. El operador puede tener uno de dos valores según una condición. La sintaxis es:

```
condition ? val1 : val2
```

Si `condition` es `true`, el operador tiene el valor de `val1`. De lo contrario, tiene el valor de `val2`. Puedes utilizar el operador condicional en cualquier lugar donde normalmente utilizas un operador estándar.

Por ejemplo,

```js
var status = age >= 18 ? "adult" : "minor";
```

Esta declaración asigna el valor "`adult`" a la variable `status` si `age` es de dieciocho años o más. De lo contrario, asigna el valor "`minor`" a `status`.

### Operador coma

El {{JSxRef("Operadores/Comma_Operator", "operador coma")}} (`,`) simplemente evalúa ambos operandos y devuelve el valor del último operando. Este operador se utiliza principalmente dentro de un bucle `for`, para permitir que se actualicen múltiples variables cada vez a través del bucle. Se considera de mal estilo usarlo en otros lugares, cuando no es necesario. A menudo, en su lugar pueden y se deben utilizar dos declaraciones independientes.

Por ejemplo, si `a` es un arreglo bidimensional con 10 elementos en un lado, el siguiente código usa el operador `coma` para actualizar dos variables a la vez. El código imprime los valores de los elementos diagonales en el arreglo:

```js
var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)
  //                              ^
  console.log("a[" + i + "][" + j + "]= " + a[i][j]);
```

### Operadores unarios

Una operación unaria es una operación con un solo operando.

#### `delete`

El operador {{JSxRef("Operadores/delete", "delete")}} elimina la propiedad de un objeto. La sintaxis es:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
delete property; // legal solo dentro de una declaración with
```

donde `object` es el nombre de un objeto, `property` es una propiedad existente y `propertyKey` es una cadena o símbolo que hace referencia a una propiedad existente.

La cuarta forma es legal solo dentro de una declaración {{JSxRef("Sentencias/with", "with")}}, para eliminar una propiedad de un objeto, y también para las propiedades del objeto global.

Si el operador `delete` tiene éxito, elimina la propiedad del objeto. Intentar acceder a él después dará como resultado `undefined`. El operador `delete` devuelve `true` si la operación es posible; devuelve `false` si la operación no es posible.

```js
x = 42; // implícitamente crea window.x
var y = 43;
var myobj = { h: 4 }; // crea un objeto con la propiedad h

delete x; // devuelve true (se puede eliminar si se crea implícitamente)
delete y; // devuelve false (no se puede borrar si se declara con var)
delete Math.PI; // devuelve false (no se pueden eliminar propiedades no configurables)
delete myobj.h; // devuelve true (puede eliminar propiedades definidas por el usuario)
```

##### Eliminar elementos de un arreglo

Dado que los arreglos solo son objetos, técnicamente es posible `delete` elementos de ellos. Sin embargo, esto se considera una mala práctica, trata de evitarlo. Cuando eliminas una propiedad de arreglo, la longitud del arreglo no se ve afectada y otros elementos no se vuelven a indexar. Para lograr ese comportamiento, es mucho mejor simplemente sobrescribir el elemento con el valor `undefined`. Para manipular realmente el arreglo, usa los diversos métodos de arreglo, como {{JSxRef("Objetos_globales/Array/splice", "splice")}}.

#### `typeof`

El {{JSxRef("Operadores/typeof", "operador typeof")}} se utiliza de cualquiera de las siguientes formas:

```
typeof operand
typeof (operand)
```

El operador `typeof` devuelve una cadena que indica el tipo de operando no evaluado. `operando` es la cadena, variable, palabra clave u objeto para el que se devolverá el tipo. Los paréntesis son opcionales.

Supón que defines las siguientes variables:

```js
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var foo = ["Apple", "Mango", "Orange"];
var today = new Date();
```

El operador `typeof` devuelve los siguientes resultados para estas variables:

```js
typeof myFun; // devuelve "function"
typeof shape; // devuelve "string"
typeof size; // devuelve "number"
typeof foo; // devuelve "object"
typeof today; // devuelve "object"
typeof doesntExist; // devuelve "undefined"
```

Para las palabras clave `true` y `null`, el operador `typeof` devuelve los siguientes resultados:

```js
typeof true; // devuelve "boolean"
typeof null; // devuelve "object"
```

Para un número o cadena, el operador `typeof` devuelve los siguientes resultados:

```js
typeof 62; // devuelve "number"
typeof "Hola mundo"; // devuelve "string"
```

Para los valores de propiedad, el operador `typeof` devuelve el tipo de valor que contiene la propiedad:

```js
typeof document.lastModified; // devuelve "string"
typeof window.length; // devuelve "number"
typeof Math.LN2; // devuelve "number"
```

Para métodos y funciones, el operador `typeof` devuelve los siguientes resultados:

```js
typeof blur; // devuelve "function"
typeof eval; // devuelve "function"
typeof parseInt; // devuelve "function"
typeof shape.split; // devuelve "function"
```

Para objetos predefinidos, el operador `typeof` devuelve los siguientes resultados:

```js
typeof Date; // devuelve "function"
typeof Function; // devuelve "function"
typeof Math; // devuelve "object"
typeof Option; // devuelve "function"
typeof String; // devuelve "function"
```

#### `void`

El {{JSxRef("Operadores/void", "operador void")}} se utiliza de cualquiera de las siguientes formas:

```
void (expression)
void expression
```

El operador `void` especifica una expresión que se evaluará sin devolver un valor. `expression` es una expresión de JavaScript para evaluar. Los paréntesis que rodean la expresión son opcionales, pero es un buen estilo usarlos.

### Operadores relacionales

Un operador relacional compara sus operandos y devuelve un valor `Boolean` basado en si la comparación es verdadera.

#### `in`

El {{JSxRef("Operadores/in", "operador in")}} devuelve `true` si la propiedad especificada está en el objeto especificado. La sintaxis es:

```js
propNameOrNumber in objectName;
```

donde `propNameOrNumber` es una expresión de cadena, numérica o de símbolo que representa un nombre de propiedad o índice de arreglo, y `objectName` es el nombre de un objeto.

Los siguientes ejemplos muestran algunos usos del operador `in`.

```js
// Arreglos
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // devuelve true
3 in trees;        // devuelve true
6 in trees;        // devuelve false
'bay' in trees;    // devuelve false (debes especificar el número del índice,
                   // no el valor en ese índice)
'length' en trees; // devuelve true (la longitud es una propiedad de Array)

// objetos integrados
'PI' in Math;          // devuelve true
var myString = new String('coral');
'length' in myString;  // devuelve true

// Objetos personalizados
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // devuelve true
'model' in mycar; // devuelve true
```

#### `instanceof`

El {{JSxRef("Operadores/instanceof", "operador instanceof")}} devuelve `true` si el objeto especificado es del tipo de objeto especificado. La sintaxis es:

```
objectName instanceof objectType
```

donde `objectName` es el nombre del objeto para comparar con `objectType`, y `objectType` es un tipo de objeto, como {{JSxRef("Date")}} o {{JSxRef("Array")}}.

Utiliza `instanceof` cuando necesites confirmar el tipo de un objeto en tiempo de ejecución. Por ejemplo, al detectar excepciones, puedes ramificar a diferentes controladores según el tipo de excepción lanzada.

Por ejemplo, el siguiente código usa `instanceof` para determinar si `theDay` es un objeto `Date`. Debido a que `theDay` es un objeto `Date`, las instrucciones de la expresión `if` se ejecutan.

```js
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // instrucciones a ejecutar
}
}
```

### Precedencia de los operadores

La _precedencia_ de los operadores determina el orden en que se aplican al evaluar una expresión. Puedes redefinir la precedencia de los operadores mediante el uso de paréntesis.

La siguiente tabla describe la precedencia de los operadores, de mayor a menor.

| Tipo de operador         | Operadores individuales                                 |
| ------------------------ | ------------------------------------------------------- |
| miembro                  | `. []`                                                  |
| llamar / crear instancia | `() new`                                                |
| negación / incremento    | `! ~ - + ++ -- typeof void delete`                      |
| multiplicar / dividir    | `* / %`                                                 |
| adición / sustracción    | `+ -`                                                   |
| desplazamiento bit a bit | `<< >> >>>`                                             |
| relacional               | `< <= > >= in instanceof`                               |
| igualdad                 | `== != === !==`                                         |
| `AND` bit a bit          | `&`                                                     |
| `XOR` bit a bit          | `^`                                                     |
| `OR` bit a bit           | `\|`                                                    |
| `AND` lógico             | `&&`                                                    |
| `OR` lógico              | `\|\|`                                                  |
| condicional              | `?:`                                                    |
| asignación               | `= += -= *= /= %= <<= >>= >>>= &= ^= \|= &&= \|\|= ??=` |
| coma                     | `,`                                                     |

Puedes encontrar una versión más detallada de esta tabla, completa con enlaces a detalles adicionales sobre cada operador, en {{JSxRef("Operadores/Operator_Precedence", "Referencia de JavaScript", "#Table")}}.

## Expresiones

Una _expresión_ es cualquier unidad de código válida que se resuelve en un valor.

Toda expresión sintácticamente válida se resuelve en algún valor, pero conceptualmente, hay dos tipos de expresiones: con efectos secundarios (por ejemplo: las que asignan valor a una variable) y las que en algún sentido evalúan y por lo tanto se resuelven en un valor.

La expresión `x = 7` es un ejemplo del primer tipo. Esta expresión usa el _operador_ = para asignar el valor siete a la variable `x`. La expresión en sí se evalúa como siete.

El código `3 + 4` es un ejemplo del segundo tipo de expresión. Esta expresión usa el operador + para sumar tres y cuatro sin asignar el resultado, siete, a una variable.

JavaScript tiene las siguientes categorías de expresión:

- Aritméticas: se evalúa como un número, por ejemplo 3.14159. (Generalmente usa [operadores aritméticos](##aritméticos)).
- Cadenas: se evalúa como una cadena de caracteres, por ejemplo, "Fred" o "234". (Generalmente usa [operadores de cadena](#cadena)).
- Lógicas: se evalúan como `true` o `false`. (A menudo implica [operadores lógicos](#logico)).
- Expresiones primarias: palabras clave básicas y expresiones generales en JavaScript.
- Expresiones del lado izquierdo: los valores del lado izquierdo son el destino de una asignación.

### Expresiones primarias

Palabras clave básicas y expresiones generales en JavaScript.

#### `this`

Utiliza la {{JSxRef("Operadores/this", "palabra clave this")}} para hacer referencia al objeto actual. En general, `this` se refiere al objeto que llama en un método. Usa `this` con la notación de punto o entre corchetes:

```
this['propertyName']
this.propertyName
```

Supongamos que una función llamada `validate` valida la propiedad `value` de un objeto, dado el objeto y los valores alto y bajo:

```js
function validate(obj, lowval, hival) {
  if (obj.value < lowval || obj.value > hival) {
    console.log("¡Valor no válido!");
  }
}
```

Puedes llamar a `validate` en el controlador de eventos `onChange` de cada elemento de formulario, utilizando `this` para pasarlo al elemento de formulario, como en el siguiente ejemplo:

```html
<p>Ingresa un número entre 18 y 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

#### Operador de agrupación

El operador de agrupación `()` controla la precedencia de la evaluación en las expresiones. Por ejemplo, puedes redefinir la multiplicación y la división primero, luego la suma y la resta para evaluar la suma primero.

```js-nolint;
var a = 1;
var b = 2;
var c = 3;

// precedencia predeterminada
a + b * c;     // 7
// evaluado por omisión así
a + (b * c);   // 7

// ahora prevalece sobre la precedencia
// suma antes de multiplicar
(a + b) * c;   // 9

// que es equivalente a
a * c + b * c; // 9
```

### Expresiones del lado izquierdo

Los valores de la izquierda son el destino de una asignación.

#### `new`

Puedes utilizar el {{JSxRef("Operadores/new", "operador new")}} para crear una instancia de un tipo de objeto definido por el usuario o de uno de los tipos de objeto integrados. Utiliza `new` de la siguiente manera:

```js
var objectName = new objectType([param1, param2, ..., paramN]);
```

#### `super`

La {{JSxRef("Operadores/super", "palabra clave super")}} se utiliza para llamar a funciones en el padre de un objeto. Es útil con {{JSxRef("Classes", "clases")}} llamar al constructor padre, por ejemplo.

```
super([arguments]); // llama al constructor padre.
super.functionOnParent([arguments]);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_strings")}}


# TEMA: GUIDE/INDEXED_COLLECTIONS



--- SUBTEMA: indexed_collections ---


{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}

Este capítulo presenta colecciones de datos ordenados por un valor de índice. Esto incluye arreglos y construcciones similares a arreglos tal como objetos {{jsxref("Array")}} y objetos {{jsxref("TypedArray")}}.

## El objeto `Array`

Un **array** es una lista ordenada de valores a los que te refieres con un nombre y un índice.

Por ejemplo, considera un arreglo llamado `emp`, que contiene los nombres de los empleados indexados por su id de empleado numérico. De tal modo que `emp[0]` sería el empleado número cero, `emp[1]` el empleado número uno, y así sucesivamente.

JavaScript no tiene un tipo de dato `array` explícito. Sin embargo, puedes utilizar el objeto `Array` predefinido y sus métodos para trabajar con arreglos en tus aplicaciones. El objeto `Array` tiene métodos para manipular arreglos de varias formas, tal como unirlos, invertirlos y ordenarlos. Tiene una propiedad para determinar la longitud del arreglo y otras propiedades para usar con expresiones regulares.

### Crear un arreglo

Las siguientes declaraciones crean arreglos equivalentes:

```js
let arr = new Array(element0, element1, ..., elementN)
let arr = Array(element0, element1, ..., elementN)
let arr = [element0, element1, ..., elementN]
```

`element0, element1, ..., elementN` es una lista de valores para los elementos del arreglo. Cuando se especifican estos valores, el arreglo se inicia con ellos como elementos del arreglo. La propiedad `length` del arreglo se establece en el número de argumentos.

La sintaxis de corchetes se denomina "arreglo literal" o "iniciador de arreglo". Es más corto que otras formas de creación de arreglos, por lo que generalmente se prefiere. Consulta [Arreglos literales](/es/docs/Web/JavaScript/Guide/Grammar_and_types#arreglos_literales) para obtener más detalles.

Para crear un arreglo con una longitud distinta de cero, pero sin ningún elemento, se puede utilizar cualquiera de las siguientes:

```js
// Esta...
let arr = new Array(arrayLength);

// ...da como resultado el mismo arreglo que este
let arr = Array(arrayLength);

// Esto tiene exactamente el mismo efecto
let arr = [];
arr.length = arrayLength;
```

> [!NOTE]
> En el código anterior, `arrayLength` debe ser un `Número`. De lo contrario, se creará un arreglo con un solo elemento (el valor proporcionado). Llamar a `arr.length` devolverá `arrayLength`, pero el arreglo no contiene ningún elemento. Un bucle {{jsxref("Statements/for...in", "for...in")}} no encontrarás ninguna propiedad en el arreglo.

Además de una variable recién definida como se muestra arriba, los arreglos también se pueden asignar como una propiedad a un objeto nuevo o existente:

```js
let obj = {}
// ...
obj.prop = [element0, element1, ..., elementN]

// O
let obj = {prop: [element0, element1, ...., elementN]}
```

Si deseas iniciar un arreglo con un solo elemento, y el elemento resulta ser un `Número`, debes usar la sintaxis de corchetes. Cuando se pasa un solo valor `Number` al constructor o función `Array()`, se interpreta como un `arrayLength`, no como un solo elemento.

```js
let arr = [42]; // Crea un arreglo con un solo elemento:
// el número 42.

let arr = Array(42); // Crea un arreglo sin elementos
// y arr.length establecidos en 42.
//
// Esto es equivalente a:
let arr = [];
arr.length = 42;
```

Llamar a `Array(N)` da como resultado un `RangeError`, si `N` no es un número entero cuya porción fraccionaria no es cero. El siguiente ejemplo ilustra este comportamiento.

```js
let arr = Array(9.3); // RangeError: Longitud de arreglo no válida
```

Si tu código necesita crear arreglos con elementos únicos de un tipo de dato arbitrario, es más seguro utilizar arreglos literales. Alternativamente, crea un arreglo vacío primero antes de agregarle el único elemento.

En ES2015, puedes utilizar el método estático {{jsxref("Array.of")}} para crear arreglos con un solo elemento.

```js
let wisenArray = Array.of(9.3); // wisenArray contiene solo un elemento 9.3
```

### Refiriéndose a elementos del arreglo

Dado que los elementos también son propiedades, puedes acceder a ellos usando la [propiedad `accessors`](/es/docs/Web/JavaScript/Reference/Operators/Property_accessors). Supongamos que defines el siguiente arreglo:

```js
let myArray = ["Wind", "Rain", "Fire"];
```

Puedes referirte al primer elemento del arreglo como `myArray[0]`, al segundo elemento del arreglo como `myArray[1]`, etc… El índice de los elementos comienza en cero.

> [!NOTE]
> También puedes utilizar la [propiedad `accessors`](/es/docs/Web/JavaScript/Reference/Operators/Property_accessors) para acceder a otras propiedades del arreglo, como con un objeto.
>
> ```js
> let arr = ["one", "two", "three"];
> arr[2]; // three
> arr["length"]; // 3
> ```

### Llenar un arreglo

Puedes llenar un arreglo asignando valores a sus elementos. Por ejemplo:

```js
let emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
```

> [!NOTE]
> Si proporcionas un valor no entero al operador `array` en el código anterior, se creará una propiedad en el objeto que representa al arreglo, en lugar de un elemento del arreglo.
>
> ```js
> let arr = [];
> arr[3.4] = "Oranges";
> console.log(arr.length); // 0
> console.log(arr.hasOwnProperty(3.4)); // true
> ```

También puedes rellenar un arreglo cuando lo creas:

```js
let myArray = new Array("Hello", myVar, 3.14159);
// OR
let myArray = ["Mango", "Apple", "Orange"];
```

### Entendiendo `length`

A nivel de implementación, los arreglos de JavaScript almacenan sus elementos como propiedades de objeto estándar, utilizando el índice del arreglo como nombre de propiedad.

La propiedad `length` es especial. Siempre devuelve el índice del último elemento más uno. (En el siguiente ejemplo, `'Dusty'` está indexado en `30`, por lo que `cats.length` devuelve `30 + 1`).

Recuerda, los índices del Array JavaScript están basados en 0: comienzan en `0`, no en `1`. Esto significa que la propiedad `length` será uno más que el índice más alto almacenado en el arreglo:

```js
let cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31
```

También puedes asignar la propiedad `length`.

Escribir un valor que sea más corto que el número de elementos almacenados trunca el arreglo. Escribir `0` lo vacía por completo:

```js
let cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty, Misty" - Twiggy se ha eliminado

cats.length = 0;
console.log(cats); // logs []; el arreglo cats está vacío

cats.length = 3;
console.log(cats); // logs [ <3 elementos vacíos> ]
```

### Iterando sobre arreglos

Una operación común es iterar sobre los valores de un arreglo, procesando cada uno de alguna manera. La forma más sencilla de hacerlo es la siguiente:

```js
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

Si sabes que ninguno de los elementos de tu arreglo se evalúa como `false` en un contexto booleano, si tu arreglo consta solo de nodos [DOM](/es/docs/Web/API/Document_Object_Model), por ejemplo, puedes usar un lenguaje eficiente:

```js
let divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  /* Procesar div de alguna manera */
}
```

Esto evita la sobrecarga de verificar la longitud del arreglo y garantiza que la variable `div` se reasigne al elemento actual cada vez que se realiza el bucle para mayor comodidad.

El método {{jsxref("Array.forEach", "forEach()")}} proporciona otra forma de iterar sobre un arreglo:

```js
let colors = ["red", "green", "blue"];
colors.forEach(function (color) {
  console.log(color);
});
// red
// green
// blue
```

Alternativamente, puedes acortar el código para el parámetro `forEach` con las funciones de flecha ES2015:

```js
let colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue
```

La función pasada a `forEach` se ejecuta una vez por cada elemento del arreglo, con el elemento de arreglo pasado como argumento de la función. Los valores no asignados no se iteran en un bucle `forEach`.

Ten en cuenta que los elementos de un arreglo que se omiten cuando se define el arreglo no se enumeran cuando lo itera `forEach`, pero _se enumeran_ cuando `undefined` se ha asignado manualmente al elemento:

```js
let array = ["first", "second", , "fourth"];

array.forEach(function (element) {
  console.log(element);
});
// first
// second
// fourth

if (array[2] === undefined) {
  console.log("array[2] is undefined"); // true
}

array = ["first", "second", undefined, "fourth"];

array.forEach(function (element) {
  console.log(element);
});
// first
// second
// undefined
// fourth
```

Dado que los elementos de JavaScript se guardan como propiedades de objeto estándar, no es recomendable iterar a través de arreglos de JavaScript usando bucles {{jsxref("Statements/for...in", "for...in")}}, porque se enumerarán los elementos normales y todas las propiedades enumerables.

### Métodos de array

El objeto {{jsxref("Array")}} tiene los siguientes métodos:

{{jsxref("Array.concat", "concat()")}} une dos o más arreglos y devuelve un nuevo arreglo.

```js
let myArray = new Array("1", "2", "3");
myArray = myArray.concat("a", "b", "c");
// myArray is now ["1", "2", "3", "a", "b", "c"]
```

{{jsxref("Array.join", "join(delimiter = ',')")}} une todos los elementos de un arreglo en una cadena.

```js
let myArray = new Array("Viento", "Lluvia", "Fuego");
let list = myArray.join("-"); // la lista es "Viento - Lluvia - Fuego"
```

{{jsxref("Array.push", "push()")}} agrega uno o más elementos al final de un arreglo y devuelve la `longitud` resultante del arreglo.

```js
let myArray = new Array("1", "2");
myArray.push("3"); // myArray ahora es ["1", "2", "3"]
```

{{jsxref("Array.pop", "pop()")}} elimina el último elemento de un arreglo y devuelve ese elemento.

```js
let myArray = new Array("1", "2", "3");
let last = myArray.pop();
// myArray ahora es ["1", "2"], last = "3"
```

{{jsxref("Array.shift", "shift()")}} elimina el primer elemento de un arreglo y devuelve ese elemento.

```js
let myArray = new Array("1", "2", "3");
let first = myArray.shift();
// myArray ahora es ["2", "3"], first es "1"
```

{{jsxref("Array.unshift", "unshift()")}} agrega uno o más elementos al frente de un arreglo y devuelve la nueva longitud del arreglo.

```js
let myArray = new Array("1", "2", "3");
myArray.unshift("4", "5");
// myArray se convierte en ["4", "5", "1", "2", "3"]
```

{{jsxref("Array.slice", "slice(start_index, upto_index)")}} extrae una sección de un arreglo y devuelve un nuevo arreglo.

```js
let myArray = new Array("a", "b", "c", "d", "e");
myArray = myArray.slice(1, 4); // comienza en el índice 1 y extrae todos los elementos
// hasta el índice 3, devuelve ["b", "c", "d"]
```

{{jsxref("Array.splice", "splice(index, count_to_remove, addElement1, addElement2, ...)")}} elimina elementos de un arreglo y (opcionalmente) los reemplaza. Devuelve los elementos que se eliminaron del arreglo.

```js
let myArray = new Array("1", "2", "3", "4", "5");
myArray.splice(1, 3, "a", "b", "c", "d");
// myArray ahora es ["1", "a", "b", "c", "d", "5"]
// Este código comenzó en el índice uno (o donde estaba el "2"),
// eliminó 3 elementos allí, y luego insertó todos los consecutivos
// elementos en su lugar.
```

{{jsxref("Array.reverse", "reverse()")}} transpone los elementos de un arreglo, en su lugar: el primer elemento del arreglo se convierte en el último y el último en el primero. Devuelve una referencia al arreglo.

```js
let myArray = new Array("1", "2", "3");
myArray.reverse();
// transpone el arreglo para que myArray = ["3", "2", "1"]
```

{{jsxref("Array.sort", "sort()")}} ordena los elementos de un arreglo en su lugar y devuelve una referencia al arreglo.

```js
let myArray = new Array("Viento", "Lluvia", "Fuego");
myArray.sort();
// ordena el arreglo para que myArray = ["Fuego", "Lluvia", "Viento"]
```

`sort()` también puede tomar una función retrollamada para determinar cómo se comparan los elementos del arreglo.

El método `sort` (y otros a continuación) que reciben una retrollamada se conocen como _métodos iterativos_, porque iteran sobre todo el arreglo de alguna manera. Cada uno toma un segundo argumento opcional llamado `thisObject`. Si se proporciona, `thisObject` se convierte en el valor de la palabra clave `this` dentro del cuerpo de la función retrollamada. Si no se proporciona, como en otros casos en los que se invoca una función fuera de un contexto de objeto explícito, `this` se referirá al objeto global ([`window`](/es/docs/Web/API/Window)) cuando se usa la función de flecha como retrollamada, o `undefined` cuando se usa una función normal como retrollamada.

La función retrollamada se invoca con dos argumentos, que son elementos del arreglo.

La siguiente función compara dos valores y devuelve uno de tres valores:

Por ejemplo, lo siguiente se ordenará por la última letra de una cadena:

```js
let sortFn = function (a, b) {
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
};
myArray.sort(sortFn);
// ordena el arreglo para que myArray = ["Viento", "Fuego", "Lluvia"]
```

- si `a` es menor que `b` por el sistema de clasificación, devuelve `-1` ( o cualquier número negativo)
- si `a` es mayor que `b` por el sistema de clasificación, devuelve `1` (o cualquier número positivo)
- si `a` y `b` se consideran equivalentes, devuelve `0`.

{{jsxref("Array.indexOf", "indexOf (searchElement[, fromIndex])")}} busca en el arreglo `searchElement` y devuelve el índice de la primera coincidencia.

```js
let a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // registros 1

// Ahora inténtalo de nuevo, comenzando después de la última coincidencia
console.log(a.indexOf("b", 2)); // registra 3
console.log(a.indexOf("z")); // logs -1, porque no se encontró 'z'
```

{{jsxref("Array.lastIndexOf", "lastIndexOf(searchElement [, fromIndex])")}} funciona como `indexOf`, pero comienza al final y busca hacia atrás.

```js
let a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // registra 5

// Ahora inténtalo de nuevo, comenzando desde antes de la última coincidencia
console.log(a.lastIndexOf("b", 4)); // registra 1
console.log(a.lastIndexOf("z")); // registra -1
```

{{jsxref("Array.forEach", "forEach(callback[, thisObject])")}} ejecuta `callback` en cada elemento del arreglo y devuelve `undefined`.

```js
let a = ["a", "b", "c"];
a.forEach(function (elemento) {
  console.log(elemento);
});
// registra cada elemento por turno
```

{{jsxref("Array.map", "map(callback [, thisObject])")}} devuelve un nuevo arreglo del valor de retorno de ejecutar `callback` en cada elemento del arreglo.

```js
let a1 = ["a", "b", "c"];
let a2 = a1.map(function (item) {
  return item.toUpperCase();
});
console.log(a2); // registra ['A', 'B', 'C']
```

{{jsxref("Array.filter", "filter(callback [, thisObject])")}} devuelve un nuevo arreglo que contiene los elementos para los cuales `callback` devolvió `true`.

```js
let a1 = ["a", 10, "b", 20, "c", 30];
let a2 = a1.filter(function (item) {
  return typeof item === "number";
});
console.log(a2); // registra [10, 20, 30]
```

{{jsxref("Array.every", "every(callback [, thisObject])")}} devuelve `true` si `callback` devuelve `true` para cada elemento del arreglo.

```js
function isNumber(value) {
  return typeof value === "number";
}
let a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // registra true
let a2 = [1, "2", 3];
console.log(a2.every(isNumber)); // registra false
```

{{jsxref("Array.some", "some(callback[, thisObject])")}} devuelve `true` si `callback` devuelve `true` para al menos un elemento del arreglo.

```js
function isNumber(value) {
  return typeof value === "number";
}
let a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // registra true
let a2 = [1, "2", 3];
console.log(a2.some(isNumber)); // registra true
let a3 = ["1", "2", "3"];
console.log(a3.some(isNumber)); // registra false
```

{{jsxref("Array.reduce", "reduce(callback[, initialValue])")}} aplica `callback(acumulador, currentValue[, currentIndex[,array]])` para cada valor en el arreglo con el fin de reducir la lista de elementos a un solo valor. La función `reduce` devuelve el valor final devuelto por la función `callback`.

Si se especifica `initialValue`, entonces `callback` se llama con `initialValue` como primer valor de parámetro y el valor del primer elemento del arreglo como segundo valor de parámetro.

Si `initialValue` _no_ es especificado, entonces `callback` los primeros dos valores de parámetro deberán ser el primer y segundo elemento del arreglo. En _cada_ llamada subsiguiente, el valor del primer parámetro será el valor de `callback` devuelto en la llamada anterior, y el valor del segundo parámetro será el siguiente valor en el arreglo.

Si `callback` necesita acceso al índice del elemento que se está procesando, al acceder al arreglo completo, están disponibles como parámetros opcionales.

```js
let a = [10, 20, 30];
let total = a.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(total); // Imprime 60
```

{{jsxref("Array.reduceRight", "reduceRight(callback[, initialValue])")}} funciona como `reduce()`, pero comienza con el último elemento.

`reduce` y `reduceRight` son los menos obvios de los métodos de arreglo iterativos. Se deben utilizar para algoritmos que combinan dos valores de forma recursiva para reducir una secuencia a un solo valor.

### Arreglos multidimensionales

Los arreglos se pueden anidar, lo cual significa que un arreglo puede contener otro arreglo como elemento. Usando esta característica de los arreglos de JavaScript, se pueden crear arreglos multidimensionales.

El siguiente código crea un arreglo bidimensional.

```js
let a = new Array(4);
for (let i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (let j = 0; j < 4; j++) {
    a[i][j] = "[" + i + ", " + j + "]";
  }
}
```

Este ejemplo crea un arreglo con las siguientes filas:

```
Row 0: [0, 0] [0, 1] [0, 2] [0, 3]
Row 1: [1, 0] [1, 1] [1, 2] [1, 3]
Row 2: [2, 0] [2, 1] [2, 2] [2, 3]
Row 3: [3, 0] [3, 1] [3, 2] [3, 3]
```

### Usar arreglos para almacenar otras propiedades

Los arreglos también se pueden utilizar como objetos para almacenar información relacionada.

```js
const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property); // Registra "value"
```

### Arreglos y expresiones regulares

Cuando un arreglo es el resultado de una coincidencia entre una expresión regular y una cadena, el arreglo devuelve propiedades y elementos que proporcionan información sobre la coincidencia. Un arreglo es el valor de retorno de {{jsxref("Global_Objects/RegExp/exec", "RegExp.exec()")}}, {{jsxref("Global_Objects/String/match", "String.match()")}} y {{jsxref("Global_Objects/String/split", "String.split()")}}. Para obtener información sobre el uso de arreglos con expresiones regulares, consulta [Expresiones regulares](/es/docs/Web/JavaScript/Guide/Regular_expressions).

### Trabajar con objetos tipo array

Algunos objetos JavaScript, como [`NodeList`](/es/docs/Web/API/NodeList) devueltos por [`document.getElementsByTagName()`](/es/docs/Web/API/Document/getElementsByTagName) o un objeto {{jsxref("Functions/arguments", "arguments")}} disponible dentro del cuerpo de una función, se ven y se comportan como arreglos en la superficie pero no comparten todos sus métodos. El objeto `arguments` proporciona un atributo {{jsxref("Global_Objects/Function/length", "length")}} pero no implementa el método {{jsxref("Array.forEach", "forEach()")}}, por ejemplo.

Los métodos de arreglo no se pueden llamar directamente en objetos similares a un arreglo.

```js example-bad
function printArguments() {
  arguments.forEach(function (item) {
    // TypeError: arguments.forEach no es una función
    console.log(item);
  });
}
```

Pero puedes llamarlos indirectamente usando {{jsxref("Global_Objects/Function/call", "Function.prototype.call()")}}.

```js example-good
function printArguments() {
  Array.prototype.forEach.call(arguments, function (item) {
    console.log(item);
  });
}
```

Los métodos de prototipos de arreglos también se pueden utilizar en cadenas, ya que proporcionan acceso secuencial a sus caracteres de forma similar a los arreglos:

```js
Array.prototype.forEach.call("a string", function (chr) {
  console.log(chr);
});
```

## Arrays tipados

[Los arreglos tipados en JavaScript](/es/docs/Web/JavaScript/Guide/Typed_arrays) son objetos similares a arreglos y proporcionan un mecanismo para acceder a datos binarios sin procesar. Como ya sabes, los objetos {{jsxref("Array")}} crecen y se encogen dinámicamente y pueden tener cualquier valor de JavaScript. Los motores de JavaScript realizan optimizaciones para que estos arreglos sean rápidos. Sin embargo, a medida que las aplicaciones web se vuelven cada vez más poderosas, agregando características como manipulación de audio y video, acceso a datos sin procesar usando [WebSockets](/es/docs/Web/API/WebSockets_API), y así sucesivamente, ha quedado claro que hay momentos en los que sería útil para que el código JavaScript pueda manipular rápida y fácilmente datos binarios sin procesar en arreglos tipados.

### Búferes y vistas: arquitectura de los arreglos con tipo

Para lograr la máxima flexibilidad y eficiencia, los arreglos de JavaScript dividen la implementación en **búferes** y **vistas**. Un búfer (implementado por el objeto {{jsxref("ArrayBuffer")}} es un objeto que representa una porción de datos; no tiene un formato del que hablar y no ofrece ningún mecanismo para acceder a su contenido. Para acceder a la memoria contenida en un búfer, necesitas usar una vista. Una vista proporciona un **contexto** , es decir, un tipo de datos, un desplazamiento inicial y un número de elementos, que convierte los datos en un arreglo con tipo real.

![Arreglos tipados en un <code>ArrayBuffer</code>](typed_arrays.png)

### `ArrayBuffer`

{{jsxref("ArrayBuffer")}} es un tipo de dato que se utiliza para representar un búfer de datos binarios genérico de longitud fija. No puedes manipular directamente el contenido de un `ArrayBuffer`; en su lugar, creas una vista de arreglo con tipo o un {{jsxref("DataView")}} que representa el búfer en un formato específico, y lo usa para leer y escribir el contenido del búfer.

### Vistas de arreglos tipados

Las vistas de arreglos tipados tienen nombres autodescriptivos y proporcionan vistas para todos los tipos numéricos habituales como `Int8`, `Uint32`, `Float64` y así sucesivamente. Hay una vista de arreglo con tipo especial, {jsxref("Uint8ClampedArray")}}, que fija los valores entre `0` y `255`. Esto es útil para [procesamiento de datos de Canvas](/es/docs/Web/API/ImageData), por ejemplo.

| Tipo                            | Rango de valores               | Tamaño en bytes | Descripción                                                                                      | Tipo de IDL web            | Tipo C equivalente               |
| ------------------------------- | ------------------------------ | --------------- | ------------------------------------------------------------------------------------------------ | -------------------------- | -------------------------------- |
| {{jsxref("Int8Array")}}         | `-128` a `127`                 | 1               | Dos enteros complementarios de 8 bits con signo                                                  | `byte`                     | `int8_t`                         |
| {{jsxref("Uint8Array")}}        | `0` a `255`                    | 1               | Entero de 8-bit sin signo                                                                        | `octeto`                   | `uint8_t`                        |
| {{jsxref("Uint8ClampedArray")}} | `0` a `255`                    | 1               | Entero de 8 bits sin signo (sujeto)                                                              | `octeto`                   | `uint8_t`                        |
| {{jsxref("Int16Array")}}        | `-32768` a `32767`             | 2               | Dos enteros complementarios de 16 bits con signo                                                 | `short`                    | `int16_t`                        |
| {{jsxref("Uint16Array")}}       | `0` a `65535`                  | 2               | Entero de 16 bits sin signo                                                                      | `short sin signo`          | `uint16_t`                       |
| {{jsxref("Int32Array")}}        | `-2147483648` a `2147483647`   | 4               | dos enteros complementarios de 32 bits con signo                                                 | `long`                     | `int32_t`                        |
| {{jsxref("Uint32Array")}}       | `0` a `4294967295`             | 4               | Enteros de 32 bits sin signo                                                                     | `long sin signo`           | `uint32_t`                       |
| {{jsxref("Float32Array")}}      | `1.2`×`10-38` a `3.4`×`1038`   | 4               | Número de coma flotante IEEE de 32 bits (7 dígitos significativos, p. ej., `1.1234567`)          | `float sin restricciones`  | `float`                          |
| {{jsxref("Float64Array")}}      | `5.0`×`10-324` a `1.8`×`10308` | 8               | Número de coma flotante IEEE de 64 bits (16 dígitos significativos, por ejemplo, `1.123 ... 15`) | `double sin restricciones` | `double`                         |
| {{jsxref("BigInt64Array")}}     | `-263` a `263-1`               | 8               | Dos enteros complementarios de 64 bits con signo                                                 | `bigint`                   | `int64_t (long long con signo)`  |
| {{jsxref("BigUint64Array")}}    | `0` a `264-1`                  | 8               | Entero de 64 bits sin signo                                                                      | `bigint`                   | `uint64_t (long long sin signo)` |

Para obtener más información, consulta [Arreglos tipados en JavaScript](/es/docs/Web/JavaScript/Guide/Typed_arrays) y la documentación de referencia para los diferentes objetos {{jsxref("TypedArray")}}.

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "Web/JavaScript/Guide/Keyed_collections")}}


# TEMA: GUIDE/KEYED_COLLECTIONS



--- SUBTEMA: keyed_collections ---


{{jsSidebar("JavaScript Guide", "Guía de JavaScript")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}

Este capítulo presenta colecciones de datos que están indexadas por una clave; los objetos `Map` y `Set` contienen elementos que son iterables en el orden de inserción.

## Mapas

### Objeto `map`

ECMAScript 2015 introduce una nueva estructura de datos para asociar claves con valores. Un objeto {{JSxRef("Map")}} es un mapa de clave/valor simple y puedes iterar sobre sus elementos en el orden en que fueron insertados.

El siguiente código muestra algunas operaciones básicas con un `Map`. Consulta también la página de referencia de {{JSxRef("Map")}} para obtener más ejemplos y la API completa. Puedes usar un bucle {{JSxRef("Sentencias/for...of", "for...of")}} para devolver un arreglo de `[key, value]` para cada iteración.

```js
let sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (let [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```

### Comparar `Object` y `map`

Tradicionalmente, los {{JSxRef("Object", "objetos", "", 1)}} se han utilizado para asignar cadenas a valores. Los objetos te permiten establecer claves a valores, recuperar esos valores, eliminar claves y detectar si algo está almacenado en una clave. Los objetos `Map`, sin embargo, tienen algunas ventajas más que los hacen mejores mapas.

- Las claves de un `Object` son {{JSxRef("Global_Objects/String", "Cadenas")}} o {{JSxRef("Global_Objects/Symbol", "Símbolos")}}, donde pueden tener cualquier valor para un `Map`.
- Puedes obtener el `size` de un `Map` fácilmente, mientras que tienes que realizar un seguimiento manual del tamaño de un `Object`.
- La iteración de mapas está en el orden de inserción de los elementos.
- Un `Object` tiene un prototipo, por lo que hay claves predeterminadas en el mapa. (Esto se puede omitir usando `map = Object.create(null)`).

Estos tres consejos te pueden ayudar a decidir si usar un `Map` o un `Object`:

- Usa mapas sobre objetos cuando las claves sean desconocidas hasta el momento de la ejecución, y cuando todas las claves sean del mismo tipo y todos los valores sean del mismo tipo.
- Utiliza mapas si es necesario almacenar valores primitivos como claves porque el objeto trata cada clave como una cadena, ya sea un valor numérico, un valor booleano o cualquier otro valor primitivo.
- Usa objetos cuando haya lógica que opere en elementos individuales.

### El objeto `WeakMap`

El objeto {{JSxRef("WeakMap")}} es una colección de pares clave/valor en la que las **claves solo son objetos** y los valores pueden ser valores arbitrarios. Las referencias de objeto en las claves se mantienen _débilmente_, lo que significa que son un objetivo de recolección de basura (GC por _Garbage Collection_) si ya no hay otra referencia al objeto. La API de `WeakMap` es la misma que la API de `Map`.

Una diferencia con los objetos `Map` es que las claves en `WeakMap` no son enumerables (es decir, no hay ningún método que te proporcione una lista de las claves). Si lo hubiera, la lista dependería del estado de la recolección de basura, introduciendo el no determinismo.

Para obtener más información y código de ejemplo, consulta también "¿Por qué mapa _Débil_?" en la página de referencia de {{JSxRef("WeakMap")}}.

Un caso de uso de los objetos `WeakMap` es almacenar datos privados para un objeto u ocultar detalles de implementación. El siguiente ejemplo es de la publicación del blog de Nick Fitzgerald ["Ocultar detalles de implementación con WeakMaps de ECMAScript 6"](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html). Los datos y métodos privados pertenecen al objeto y se almacenan en `privates` del objeto `WeakMap`. Todo lo expuesto en la instancia y el prototipo es público; todo lo demás es inaccesible desde el mundo exterior porque `privates` no se exporta desde el módulo.

```js
const privates = new WeakMap();

function Public() {
  const me = {
    // Los datos privados van aquí
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Hacer cosas con datos privados en `me`...
};

module.exports = Public;
```

## `Sets`

### El objeto `Set`

Los objetos {{JSxRef("Set")}} son colecciones de valores. Puedes iterar sus elementos en el orden en que se insertaron. Un valor en un `Set` solo puede aparecer una vez; es único en la colección del `Set`.

El siguiente código muestra algunas operaciones básicas con un `Set`. Además, consulta la página de referencia de {{JSxRef("Set")}} para obtener más ejemplos y la API completa.

```js
let mySet = new Set();
mySet.add(1);
mySet.add("algún texto");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "algún texto"
```

### Conversión entre arreglo y `Set`

Puedes crear un {{JSxRef("Array")}} a partir de un `Set` usando {{JSxRef("Array.from")}} o el {{JSxRef("Operators/Spread_operator", "operador de propagación")}}. Además, el constructor `Set` acepta un `Array` para convertirlo en la otra dirección.

> [!NOTE]
> Recuerda que los objetos `Set` almacenan _valores únicos_, por lo que cualquier elemento duplicado de un arreglo se elimina al realizar la conversión.

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### Comparar `Array` y `Set`

Tradicionalmente en muchas situaciones, un conjunto de elementos se ha almacenado en arreglos de JavaScript. Sin embargo, el nuevo objeto `Set` tiene algunas ventajas:

- Eliminar elementos `Array` por valor (`arr.splice(arr.indexOf(val), 1)`) es muy lento.
- Los objetos `Set` te permiten eliminar elementos por su valor. Con un arreglo, tendrías que empalmar (con `splice`) en función del índice de un elemento.
- El valor {{JSxRef("NaN")}} no se puede encontrar con `indexOf` en un arreglo.
- Los objetos `Set` almacenan valores únicos. No es necesario que realices un seguimiento manual de los duplicados.

### El objeto `WeakSet`

Los objetos {{JSxRef("WeakSet")}} son colecciones de objetos. Un objeto en el `WeakSet` solo puede aparecer una vez. Es único en la colección `WeakSet` y los objetos no son enumerables.

Las principales diferencias con el objeto {{JSxRef("Set")}} son:

- A diferencia de los `Sets`, los `WeakSets` son **colecciones _únicamente_ de _objetos_** y no de valores arbitrarios de cualquier tipo.
- El `WeakSet` es _débil_: Las referencias a los objetos de la colección se mantienen débiles. Si no hay otra referencia a un objeto almacenado en el `WeakSet`, pueden ser recolectados como basura. Eso también significa que no hay una lista de objetos actualmente almacenados en la colección. Los `WeakSets` no se pueden enumerar.

Los casos de uso de los objetos `WeakSet` son limitados. No perderán memoria, por lo que puede ser seguro usar elementos DOM como clave y marcarlos con fines de seguimiento, por ejemplo.

## Igualdad de clave y valor de `Map` y `Set`

Tanto la igualdad de claves de los objetos `Map` como la igualdad de valores de los objetos `Set` se basan en "[algoritmo del mismo valor cero](https://tc39.github.io/ecma262/#sec-samevaluezero)":

- La igualdad funciona como el operador de comparación de identidad `===`.
- `-0` y `+0` se consideran iguales.
- {{JSxRef("NaN")}} se considera igual a sí mismo (al contrario de `===`).

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}


# TEMA: GUIDE/WORKING_WITH_OBJECTS



--- SUBTEMA: working_with_objects ---


{{jsSidebar("Guía de JavaScript")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "conflicting/Web/JavaScript/Inheritance_and_the_prototype_chain")}}

JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o _clave_) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos. Este capítulo describe cómo usar objetos, propiedades, funciones y métodos; y cómo crear tus propios objectos.

## Visión general sobre Objetos

Los objetos en JavaScript, como en tantos otros lenguajes de programación, se pueden comparar con objetos de la vida real. El concepto de Objetos en JavaScript se puede entender con objetos tangibles de la vida real.

En JavaScript, un objeto es un entidad independiente con propiedades y tipos. Compáralo con una taza, por ejemplo. Una taza es un objeto con propiedades. Una taza tiene un color, un diseño, un peso, un material del que está hecha, etc. Del mismo modo, los objetos de JavaScript pueden tener propiedades que definan sus características.

## Objetos y propiedades

Un objeto de JavaScript tiene propiedades asociadas a él. Una propiedad de un objeto se puede explicar como una variable adjunta al objeto. Las propiedades de un objeto básicamente son lo mismo que las variables comunes de JavaScript, excepto por el nexo con el objeto. Las propiedades de un objeto definen las características del objeto. Accedes a las propiedades de un objeto con una simple notación de puntos:

```js
objectName.propertyName;
```

Como todas las `variables` de JavaScript, tanto el nombre del objeto (que puede ser una variable normal) como el nombre de la propiedad son sensibles a mayúsculas y minúsculas. Puedes definir propiedades asignándoles un valor. Por ejemplo, vamos a crear un objeto llamado `myCar` y le vamos a asignar propiedades denominadas `make`, `model`, y `year` de la siguiente manera:

```js
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
```

El ejemplo anterior también se podría escribir usando un **[iniciador de objeto](#object_initializers)**, que es una lista delimitada por comas de cero o más pares de nombres de propiedad y valores asociados de un objeto, encerrados entre llaves (`{}`):

```js
var myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};
```

Las propiedades no asignadas de un objeto son {{jsxref("undefined")}} (y no {{jsxref("null")}}).

```js
myCar.color; // undefined
```

También puedes acceder o establecer las propiedades de los objetos en JavaScript mediante la notación de corchetes ↑[]↓ (Para más detalle ve [Accesores de propiedades](/es/docs/Web/JavaScript/Reference/Operators/Property_accessors)). Los objetos, a veces son llamados _arreglos asociativos_, debido a que cada propiedad está asociada con un valor de cadena que se puede utilizar para acceder a ella. Por lo tanto, por ejemplo, puedes acceder a las propiedades del objeto `myCar` de la siguiente manera:

```js
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;
```

El nombre de la propiedad de un objeto puede ser cualquier cadena válida de JavaScript, o cualquier cosa que se pueda convertir en una cadena, incluyendo una cadena vacía. Sin embargo, cualquier nombre de propiedad que no sea un identificador válido de JavaScript (por ejemplo, el nombre de alguna propiedad que tenga un espacio o un guión, o comience con un número) solo se puede acceder utilizando la notación de corchetes. Esta notación es muy útil también cuando los nombres de propiedades son determinados dinámicamente (cuando el nombre de la propiedad no se determina hasta el tiempo de ejecución). Ejemplos de esto se muestran a continuación:

```js
// Se crean y asignan cuatro variables de una sola vez,
// separadas por comas
var myObj = new Object(),
  str = "myString",
  rand = Math.random(),
  obj = new Object();

myObj.type = "Sintaxis de puntos";
myObj["fecha de creación"] = "Cadena con espacios";
myObj[str] = "Valor de cadena";
myObj[rand] = "Número aleatorio";
myObj[obj] = "Object";
myObj[""] = "Incluso una cadena vacía";

console.log(myObj);
```

Por favor, ten en cuenta que todas las claves con notación en corchetes se convierten a cadenas a menos que estas sean símbolos, ya que los nombres de las propiedades (claves) en Javascript pueden solo pueden ser cadenas o símbolos (en algún momento, los nombres privados también serán agregados a medida que progrese la [propuesta de los campos de clase](https://github.com/tc39/proposal-class-fields), pero no las usarás con el formato `[]`). Por ejemplo, en el código anterior, cuando la clave `obj` se añadió a `myObj`, Javascript llamará al método {{jsxref("Object.toString", "obj.toString()")}}, y usará la cadena resultante de esta llamada como la nueva clave.

También puedes acceder a las propiedades mediante el uso de un valor de cadena que se almacena en una variable:

```js
var propertyName = "make";
myCar[propertyName] = "Ford";

propertyName = "model";
myCar[propertyName] = "Mustang";
```

Puedes usar la notación de corchetes con [`for...in`](/es/docs/Web/JavaScript/Reference/Statements/for...in) para iterar sobre todas las propiedades enumerables de un objeto. Para ilustrar cómo funciona esto, la siguiente función muestra las propiedades del objeto cuando pasas el objeto y el nombre del objeto como argumentos a la función:

```js
function showProps(obj, objName) {
  var result = ``;
  for (var i in obj) {
    // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}
```

Por lo tanto, la llamada a la función `showProps(myCar, "myCar")` devolverá lo siguiente:

```js
myCar.make = Ford;
myCar.model = Mustang;
myCar.year = 1969;
```

## Enumerar las propiedades de un objeto

A partir de [ECMAScript 5](/es/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla), hay tres formas nativas para enumerar/recorrer las propiedades de objetos:

- [`bucles for...in`](/es/docs/Web/JavaScript/Reference/Statements/for...in)
  Este método recorre todas las propiedades enumerables de un objeto y su cadena de prototipos
- {{jsxref("Object.keys", "Object.keys(o)")}}
  Este método devuelve un arreglo con todos los nombres de propiedades enumerables ("`claves`") propias (no en la cadena de prototipos) de un objeto `o`.
- {{jsxref("Object.getOwnPropertyNames", "Object.getOwnPropertyNames(o)")}}
  Este método devuelve un arreglo que contiene todos los nombres (enumerables o no) de las propiedades de un objeto `o`.

Antes de ECMAScript 5, no existía una manera nativa para enumerar todas las propiedades de un objeto. Sin embargo, esto se puede lograr con la siguiente función:

```js
function listAllProperties(o) {
  var objectToInspect;
  var result = [];

  for (
    objectToInspect = o;
    objectToInspect !== null;
    objectToInspect = Object.getPrototypeOf(objectToInspect)
  ) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
  }

  return result;
}
```

Esto puede ser útil para revelar propiedades "ocultas" (propiedades de la cadena de prototipos a las que no se puede acceder a través del objeto, porque otra propiedad tiene el mismo nombre en la cadena de prototipos). Enumerar las propiedades accesibles solo es posible eliminando los duplicados en el arreglo.

## Creación de nuevos objetos

JavaScript tiene una colección de objetos predefinidos. Además, puedes crear tus propios objetos. En JavaScript 1.2 y versiones posteriores, puedes crear un objeto usando un [iniciador de objeto](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer). Como alternativa, puedes crear primero una función constructora y luego crear una instancia de un objeto invocando esa función con el operador `new`.

### Uso de iniciadores de objeto

Además de la creación de objetos utilizando una función constructora, puedes crear objetos utilizando un [iniciador de objeto](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer). El uso de iniciadores de objetos a veces se denomina crear objetos con notación literal. "Iniciador de objeto" es consistente con la terminología utilizada por C++.

La sintaxis para un objeto usando un iniciador de objeto es:

```js
var obj = {
  property_1: value_1, // property_# puede ser un identificador...
  2: value_2, // o un número...
  // ...,
  "property n": value_n,
}; // o una cadena
```

donde `obj` es el nombre del nuevo objeto, cada `property_i` es un identificador (ya sea un nombre, un número o una cadena literal), y cada `value_i` es una expresión cuyo valor se asigna a la `property_i`. El `obj` y la asignación es opcional; si no necesitas hacer referencia a este objeto desde otro lugar, no necesitas asignarlo a una variable. (Ten en cuenta que tal vez necesites envolver el objeto literal entre paréntesis si el objeto aparece donde se espera una declaración, a fin de no confundir el literal con una declaración de bloque).

Los iniciadores de objetos son expresiones, y cada iniciador de objeto da como resultado un nuevo objeto donde la instrucción de creación sea ejecutada. Los iniciadores de objetos idénticos crean objetos distintos que no se compararán entre sí como iguales. Los objetos se crean como si se hiciera una llamada a `new Object()`; es decir, los objetos hechos a partir de expresiones literales de objeto son instancias de `Object`.

La siguiente declaración crea un objeto y lo asigna a la variable `x` si y solo si la expresión `cond` es `true`.

```js
if (cond) var x = { greeting: "¡Hola!" };
```

El siguiente ejemplo crea `myHonda` con tres propiedades. Observa que la propiedad `engine` también es un objeto con sus propias propiedades.

```js
var myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };
```

También puedes utilizar iniciadores de objetos para crear arreglos. Consulta [arreglos literales](/es/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals).

### Usar una función constructora

Como alternativa, puedes crear un objeto con estos dos pasos:

1. Definir el tipo de objeto escribiendo una función constructora. Existe una fuerte convención, con buena razón, para utilizar en mayúscula la letra inicial.
2. Crear una instancia del objeto con el operador `new`.

Para definir un tipo de objeto, crea una función para el objeto que especifique su nombre, propiedades y métodos. Por ejemplo, supongamos que deseas crear un tipo de objeto para coches. Quieres llamar `Car` a este tipo de objeto, y deseas que tenga las siguientes propiedades: `make`, `model` y `year`. Para ello, podrías escribir la siguiente función:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Observa el uso de `this` para asignar valores a las propiedades del objeto en función de los valores pasados a la función.

Ahora puedes crear un objeto llamado `myCar` de la siguiente manera:

```js
var mycar = new Car("Eagle", "Talon TSi", 1993);
```

Esta declaración crea `myCar` y le asigna los valores especificados a sus propiedades. Entonces el valor de `myCar.make` es la cadena "Eagle", para `myCar.year` es el número entero 1993, y así sucesivamente.

Puedes crear cualquier número de objetos `Car` con las llamadas a `new`. Por ejemplo,

```js
var kenscar = new Car("Nissan", "300ZX", 1992);
var vpgscar = new Car("Mazda", "Miata", 1990);
```

\<s0>Un objeto puede tener una propiedad que en sí misma es otro objeto. Por ejemplo, supongamos que defines un objeto llamado `person` de la siguiente manera:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

y luego instancias dos nuevos objetos `person` de la siguiente manera:

```js
var rand = new Person("Rand McKinnon", 33, "M");
var ken = new Person("Ken Jones", 39, "M");
```

Entonces, puedes volver a escribir la definición de `Car` para incluir una propiedad `owner` que tomará el objeto `person`, de la siguiente manera:

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

Nota que en lugar de pasar un valor de cadena o entero cuando se crean los nuevos objetos, las declaraciones anteriores pasan al objetos `rand` y `ken` como argumentos para los `owner`s. Si luego quieres averigüar el nombre del propietario del `car2`, puedes acceder a la propiedad de la siguiente manera:

```js
car2.owner.name;
```

Ten en cuenta que siempre se puede añadir una propiedad a un objeto previamente definido. Por ejemplo, la declaración

```js
car1.color = "black";
```

agrega la propiedad `color` a `car1`, y le asigna el valor "`black`". Sin embargo, esto no afecta a ningún otro objeto. Para agregar la nueva propiedad a todos los objetos del mismo tipo, tienes que añadir la propiedad a la definición del tipo de objeto `Car`.

### Usar el método `Object.create`

Los objetos también se pueden crear por medio del método {{jsxref("Object.create()")}}. Este método puede ser muy útil, ya que te permite elegir el prototipo del objeto que deseas crear, sin tener que definir una función constructora.

```js
// Propiedades y método de encapsulación para Animal
var Animal = {
  type: "Invertebrates", // Valor predeterminado de las propiedades
  displayType: function () {
    // Método que mostrará el tipo de Animal
    console.log(this.type);
  },
};

// Crea un nuevo tipo de animal llamado animal1
var animal1 = Object.create(Animal);
animal1.displayType(); // Muestra: Invertebrates

// Crea un nuevo tipo de animal llamado Fishes
var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Muestra: Fishes
```

## Herencia

Todos los objetos en JavaScript heredan de al menos otro objeto. El objeto del que se hereda se conoce como el prototipo, y las propiedades heredadas se pueden encontrar en el objeto `prototype` del constructor. Para más información consulta [Herencia y cadena prototipos](/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

## Propiedades del objeto indexado

En \<s0>JavaScript 1.0\</s0>, puedes hacer referencia a una propiedad de un objeto, ya sea por el nombre de la propiedad o por su índice ordinal. Si inicialmente defines una propiedad por su nombre, siempre debes referirte a ella por su nombre, y si inicialmente defines una propiedad por un índice, siempre debes referirte a ella por su índice.

Esta restricción se aplica cuando creas un objeto y sus propiedades con una función constructora (como hicimos anteriormente con el tipo de objeto `Car`) y cuando defines propiedades individuales explícitamente (por ejemplo, `myCar.color = "red"`). Si inicialmente defines una propiedad de objeto con un índice, como `myCar[5] = "25 mpg"`, posteriormente te refiere a la propiedad solo como `myCar[5]`.

La excepción a esta regla son los objetos HTML, como por ejemplo los objetos contenidos en `formularios`. Siempre puedes hacer referencia a los objetos en estos objetos en forma de arreglo por su número ordinal (según el lugar en el que aparecen en el documento) o por su nombre (si está definido). Por ejemplo, si la segunda etiqueta `<FORM>` en un documento tiene un atributo `NAME` con valor "`myForm`", puedes hacer referencia al formulario como `document.forms[1]` o `document.forms["myForm"]` o `document.forms.myForm`.

## Definición de las propiedades de un tipo de objeto

Puedes agregar una propiedad a un tipo de objeto definido previamente mediante el uso de la propiedad `prototype`. Esto define una propiedad que es compartida por todos los objetos del tipo especificado, en lugar de por una sola instancia del objeto. El siguiente código agrega una propiedad `color` a todos los objetos del tipo `Car`, y luego asigna un valor a la propiedad `color` del objeto `car1`.

```js
Car.prototype.color = null;
car1.color = "black";
```

Para más información, consulta la [propiedad `prototype`](/es/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) del objeto `Function` en la [Referencia de JavaScript](/es/docs/Web/JavaScript/Reference).

## Definición de métodos

Un _método_ es una función asociada a un objeto, o, simplemente, un método es una propiedad de un objeto que es una función. Los métodos se definen normalmente como una función, con excepción de que tienen que ser asignados como la propiedad de un objeto. Consulte también [definiciones de métodos](/es/docs/Web/JavaScript/Reference/Functions/Method_definitions) para obtener más detalles. Un ejemplo puede ser:

```js
objectName.methodname = functionName;

var myObj = {
  myMethod: function(params) {
    // ...hacer algo
  }

  // O ESTO TAMBIÉN FUNCIONA

  myOtherMethod(params) {
    // ...hacer algo más
  }
};
```

\<s0>donde `objectName` es un objeto existente, `methodname` es el nombre que se le va a asignar al método, y `functionName` es el nombre de la función.

Entonces puedes llamar al método en el contexto del objeto de la siguiente manera:

```js
object.methodname(params);
```

Puedes definir métodos para un tipo de objeto incluyendo una definición del método en la función constructora del objeto. Podrías definir una función que formateé y muestre las propiedades de los objetos del tipo `Car` previamente definidas; por ejemplo:

```js
function displayCar() {
  var result = `Un hermoso ${this.year} ${this.make} ${this.model}`;
  pretty_print(result);
}
```

donde `pretty_print` es una función para mostrar una línea horizontal y una cadena. Observa el uso de `this` para referirse al objeto al que pertenece el método.

Puedes hacer de esta función un método de `Car` agregando la declaración

```js
this.displayCar = displayCar;
```

a la definición del objeto. Por lo tanto, la definición completa de `Car` ahora se verá así:

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.displayCar = displayCar;
}
```

Entonces puedes llamar al método `displayCar` para cada uno de los objetos de la siguiente manera:

```js
car1.displayCar();
car2.displayCar();
```

## Usar `this` para referencias a objetos

JavaScript tiene una palabra clave especial, `this`, que puedes usar dentro de un método para referirte al objeto actual. Por ejemplo, supongamos que tienes 2 objetos, `Manager` e `Intern`. Cada objeto tiene su propio `name`, `age` y `job`. En la función `sayHi()`, observa que hay `this.name`. Cuando se agregan a los 2 objetos, se pueden llamar y devuelve el `'Hola, mi nombre es'` y luego agrega el valor `name` de ese objeto específico. Como se muestra abajo.

```js
const Manager = {
  name: "John",
  age: 27,
  job: "Software Engineer",
};

const Intern = {
  name: "Ben",
  age: 21,
  job: "Software Engineer Intern",
};

function sayHi() {
  console.log("Hola, mi nombre es ", this.name);
}

// agrega la función sayHi a ambos objetos
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hola, mi nombre es John'
Intern.sayHi(); // Hola, mi nombre es Ben'
```

`this` se refiere al objeto en el que se encuentra. Puedes crear una nueva función llamada `howOldAmI()` que registra una oración que dice cuántos años tiene la persona.

```js
function howOldAmI() {
  console.log("Tengo " + this.age + " años.");
}
Manager.howOldAmI = howOldAmI;
Manager.howOldAmI(); // Tengo 27 años.
```

## Definición de captadores (`getters`) y establecedores (`setters`)

Un captador ([getter](/es/docs/Web/JavaScript/Reference/Functions/get)) es un método que obtiene el valor de una propiedad específica. Un establecedor ([setter](/es/docs/Web/JavaScript/Reference/Functions/set)) es un método que establece el valor de una propiedad específica. Puedes definir captadores y establecedores en cualquier objeto principal predefinido o en un objeto definido por el usuario que admita la adición de nuevas propiedades.

En principio, los captadores y establecedores pueden ser

- definido usando [iniciadores de objeto](#iniciadores_de_objeto), o
- agregado posteriormente a cualquier objeto en cualquier momento usando un método de adición para el captador o el establecedor.

Al definir captadores y establecedores usando [iniciadores de objeto](#iniciadores_de_objeto), todo lo que necesitas hacer es prefijar un método captador con `get` y un método establecedor con `set`. Por supuesto, el método captador no debe esperar un parámetro, mientras que el método establecedor espera exactamente un parámetro (el nuevo valor a establecer). Por ejemplo:

```js
var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(o.a); // 7
console.log(o.b); // 8 <-- En este punto se inicia el método get b().
o.c = 50; // <-- En este punto se inicia el método set c(x)
console.log(o.a); // 25
```

var o = {

- a: 7,
- `o.b` — un captador que devuelve `o.a` más 1
- `o.c` — un establecedor que establece el valor de `o.a` en la mitad del valor que se establece en `o.c`

Ten en cuenta que los nombres de función de los captadores y establecedores definidos en un objeto literal usando "[gs]et _propiedad_()" (en contraposición a `__define [GS]etter__`) no son los nombres de los captadores en sí, aunque la sintaxis `[gs]et propertyName() {}` te puede inducir a pensar lo contrario.

Los captadores y establecedores también se pueden agregar a un objeto en cualquier momento después de la creación usando el método `Object.defineProperties`. El primer parámetro de este método es el objeto sobre el que se quiere definir el captador o establecedor. El segundo parámetro es un objeto cuyo nombre de propiedad son los nombres `getter` o `setter`, y cuyos valores de propiedad son objetos para la definición de las funciones `getter` o `setter`. Aquí hay un ejemplo que define el mismo `getter` y `setter` utilizado en el ejemplo anterior:

```js
var o = { a: 0 };

Object.defineProperties(o, {
  b: {
    get: function () {
      return this.a + 1;
    },
  },
  c: {
    set: function (x) {
      this.a = x / 2;
    },
  },
});

o.c = 10; // Ejecuta el establecedor, que asigna 10/2 (5) a la propiedad 'a'
console.log(o.b); // Ejecuta el captador, que produce un + 1 o 6
```

¿Cuál de las dos formas elegir? depende de tu estilo de programación y de la tarea que te ocupa. Si ya utilizas el iniciador de objeto al definir un prototipo probablemente escojas la primer forma la mayoría de las veces. Esta forma es más compacta y natural. Sin embargo, si más tarde necesitas agregar captadores y establecedores — porque no lo escribiste en el objeto prototipo o particular — entonces la segunda forma es la única forma posible. La segunda forma, probablemente representa mejor la naturaleza dinámica de JavaScript — pero puede hacer que el código sea difícil de leer y entender.\</s6>

## Eliminar propiedades

Puedes eliminar una propiedad no heredada mediante el operador `delete`. El siguiente código muestra cómo eliminar una propiedad.

```js
//Crea un nuevo objeto, myobj, con dos propiedades, a y b.
var myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// Elimina la propiedad a, dejando a myobj solo con la propiedad b.
delete myobj.a;
console.log("a" in myobj); // muestra: "false"
```

También puedes utilizar `delete` para eliminar una variable global siempre y cuando no se haya utilizado la palabra clave `var` para declarar la variable:

```js
g = 17;
delete g;
```

## Comparar objetos

Como sabemos los objetos son de tipo referencia en JavaScript. Dos distintos objetos nunca son iguales, incluso aunque tengan las mismas propiedades. Solo comparar la misma referencia de objeto consigo misma arroja verdadero.

```js
// Dos variables, dos distintos objetos con las mismas propiedades
var fruit = { name: "apple" };
var fruitbear = { name: "apple" };

fruit == fruitbear; // devuelve false
fruit === fruitbear; // devuelve false
```

```js
// Dos variables, un solo objeto
var fruit = { name: "apple" };
var fruitbear = fruit; // Asigna la referencia del objeto fruit a fruitbear

// Aquí fruit y fruitbear apuntan al mismo objeto
fruit == fruitbear; // devuelve true
fruit === fruitbear; // devuelve true

fruit.name = "grape";
console.log(fruitbear); // Produce: { name: "grape" }, en lugar de { name: "apple" }
```

Para obtener más información sobre los operadores de comparación, consulta [Operadores de comparación](/es/docs/Web/JavaScript/Reference/Operators).

## Ve también

- Para profundizar más, lee sobre los [detalles del modelo de objetos de JavaScript](/es/docs/conflicting/Web/JavaScript/Inheritance_and_the_prototype_chain).
- Para obtener más información sobre las clases de ECMAScript 2015 (una forma alternativa de crear objetos), lee el capítulo [Clases de JavaScript](/es/docs/Web/JavaScript/Reference/Classes).

{{PreviousNext("Web/JavaScript/Guide/Regular_expressions", "conflicting/Web/JavaScript/Inheritance_and_the_prototype_chain")}}


# TEMA: GUIDE/ITERATORS_AND_GENERATORS



--- SUBTEMA: iterators_and_generators ---


{{jsSidebar("JavaScript Guide")}} {{PreviousNext("conflicting/Web/JavaScript/Inheritance_and_the_prototype_chain", "Web/JavaScript/Guide/Meta_programming")}}

Procesar cada uno de los elementos en una colección es una operación muy común. JavaScript proporciona diversas formas de iterar sobre una colección, desde simples bucles {{jsxref("Sentencias/for","for")}} hasta métodos como {{jsxref("Objetos_globales/Array/map","map()")}} y {{jsxref("Objetos_globales/Array/filter","filter()")}}. Los iteradores y los generadores traen el concepto de iteración al centro del lenguaje y proporcionan un mecanismo para personalizar el comportamiento de los bucles {{jsxref("Sentencias/for...of","for...of")}}.

Para más información, véase:

- {{jsxref("Iteration_protocols", "Protocolos de iteración")}}
- {{jsxref("Sentencias/for...of","for...of")}}
- {{jsxref("Sentencias/function*","function*")}} y {{jsxref("Objetos_globales/Generador","Generador")}}
- {{jsxref("Operadores/yield","yield")}} y {{jsxref("Operadores/yield*","yield*")}}

## Iteradores

En JavaScript, un **iterador** es un objeto que permite recorrer una colección y devolver un valor al terminar.

Específicamente, un iterador es un objeto que implementa el [protocolo de iteración](/es/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) a través del método `next()`, el cual devuelve un objeto con dos propiedades:

- `value`
  - : El siguiente valor en la secuencia de iteración.
- `done`
  - : Es `true` si el último valor en la secuencia ya ha sido consumido. Si `value` está presente junto con `done`, es el valor de retorno del iterador.

Un iterador se considera ya terminado/finalizado cuando la invocación de `next()` regresa un objeto donde la propiedad `done` es `verdadero`.

Una vez creado, un objeto iterador puede utilizarse explícitamente llamando repetidamente al método `next()`.

```js
function crearIterador(arreglo) {
  var siguienteIndice = 0;

  return {
    next: function () {
      return siguienteIndice < arreglo.length
        ? { value: arreglo[siguienteIndice++], done: false }
        : { done: true };
    },
  };
}
```

Una vez inicializado, se puede invocar al método `next()` para acceder a las parejas llave-valor del objeto en cuestión:

```js
var it = crearIterador(["yo", "ya"]);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

## Generadores

Aunque los iteradores personalizados son una herramienta útil, su creación require una programación meticulosa ya que necesitan mantener su estado interno explícitamente. Los **{{jsxref("Objetos_globales/Generador","generadores","",1)}}** son una alternativa poderosa: permiten definir un algoritmo iterativo al escribir una sola función que puede mantener su propio estado.

Una función generadora (constructor GeneratorFunction) es un tipo especial de función que sirve como una fábrica de iteradores. Cuando se ejecuta, regresa un nuevo objeto Generador. Una función se convierte en una Función Generadora si utiliza la sintáxis {{jsxref("Sentencias/function*","function*")}}.

```js
function* hacedorIds() {
  var indice = 0;
  while (true) {
    yield indice++;
  }
}

var gen = hacedorIds();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...
```

## Iterables

Un objeto es **iterable** si define cómo se itera. Un ejemplo son los valores que se iteran en un bucle {{jsxref("Sentencias/for...of", "for...of")}}. Algunos tipos integrados de datos, como {{jsxref("Array")}} o {{jsxref("Map")}}, tienen una forma de iteración ya definida, mientras que otras no (como {{jsxref("Object")}}).

Con el fin de ser **iterable**, un objeto debe implementar el método **@@iterator**. Esto quiere decir que dicho objeto (o alguno en su [cadena de prototipos](/es/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) debe tener una propiedad definida usando la llave {{jsxref("Symbol.iterator")}}. Esta función debería regresar un nuevo iterador en cada invocación, pero no es obligatorio.

### Iterables definidos por el usuario

Podemos hacer nuestros propios objetos iterables de este modo:

```js
var miIterable = {};
miIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

for (let valor of miIterable) {
  console.log(valor);
}
// 1
// 2
// 3

// ó

[...miIterable]; // [1, 2, 3]
```

### Iterables integrados

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Objetos_globales/TypedArray")}}, {{jsxref("Map")}} y {{jsxref("Set")}} son iterables ya integrados, porque todos sus objetos prototipo tienen un método definido con la llave {{jsxref("Symbol.iterator")}}.

### Sintaxis que esperan objetos iterables

Algunas sentencias y expresiones esperan objetos iterables, por ejemplo los bucles {{jsxref("Sentencias/for...of","for-of")}}, {{jsxref("Operadores/Spread_operator","el operador de propagación")}}, {{jsxref("Operadores/yield*","yield*")}}, y {{jsxref("Operadores/Destructuring_assignment","la asignación por desestructuración","",1)}}.

```js
for (let valor of ["a", "b", "c"]) {
  console.log(valor);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next(); // { value:"a", done:false }

[a, b, c] = new Set(["a", "b", "c"]);
a; // "a"
```

## Generadores avanzados

Los generadores calculan los valores devueltos bajo demanda, lo que les permite representar eficientemente secuencias que son costosas de calcular, o incluso secuencias infinitas como se explicó anteriormente.

El método {{jsxref("Objetos_globales/Generador/next","next()")}} también acepta un valor que puede ser utilizado para modificar el estado interno del generador. El valor recibido por `next()` es utilizado como si fuera el resultado de la iteración anterior (último valor entregado por `yield`) el cual detuvo al generador.

A continuación se muestra un generador de Fibonacci usando `next(x)` para reiniciar la secuencia:

```js
function* fibonacci() {
  var fn1 = 1;
  var fn2 = 1;
  while (true) {
    var actual = fn2;
    fn2 = fn1;
    fn1 = fn1 + actual;
    var reset = yield actual;
    if (reset) {
      fn1 = 1;
      fn2 = 1;
    }
  }
}

var secuencia = fibonacci();
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 2
console.log(secuencia.next().value); // 3
console.log(secuencia.next().value); // 5
console.log(secuencia.next().value); // 8
console.log(secuencia.next().value); // 13
console.log(secuencia.next(true).value); // 1
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 2
console.log(secuencia.next().value); // 3
```

Es posible forzar a un generador a lanzar una excepción cuando se invoca al método {{jsxref("Objetos_globales/Generador/throw","throw()")}} y se pasa el valor de excepción a lanzar. Esta excepción será lanzada desde el contexto actual suspendido del generador, como si en vez del estado suspendido actualmente de `yield` se tuviera una sentencia `throw valor`.

Si la excepción no es atrapada dentro del generador, se propagará a la invocación de `throw()`, y las siguientes llamadas a `next()` tendrán a la propiedad `done` en `verdadero`.

Los generadores tienen un método {{jsxref("Objetos_globales/Generador/return","return(valor)")}} que regresa el valor enviado y finalizan al generador.

{{PreviousNext("conflicting/Web/JavaScript/Inheritance_and_the_prototype_chain", "Web/JavaScript/Guide/Meta_programming")}}


# TEMA: GUIDE/META_PROGRAMMING



--- SUBTEMA: meta_programming ---


{{jsSidebar("Guía de JavaScript")}}{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Modules")}}

A partir de ECMAScript 2015, JavaScript gana soporte para los objetos {{jsxref("Proxy")}} y {{jsxref("Reflect")}} lo cual te permite interceptar y definir un comportamiento personalizado para las operaciones fundamentales del lenguaje (por ejemplo, búsqueda de propiedades, asignación, enumeración, invocación de funciones, etc.). Con la ayuda de estos dos objetos, puedes programar en el metanivel de JavaScript.

## Proxies

Introducidos en ECMAScript 6, los objetos {{jsxref("Proxy")}} te permiten interceptar ciertas operaciones e implementar comportamientos personalizados.

Por ejemplo, obtener una propiedad sobre un objeto:

```js
let handler = {
  get: function (target, name) {
    return name in target ? target[name] : 42;
  },
};

let p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
```

El objeto `Proxy` define un `target` (un objeto vacío aquí) y un objeto `handler`, en el que se implementa un `get` _trap_. Aquí, un objeto que es proxy no devolverá `undefined` cuando obtenga propiedades indefinidas, sino que devolverá el número `42`.

Hay ejemplos adicionales disponibles en la página de referencia {{jsxref("Proxy")}}.

### Terminología

Los siguientes términos se utilizan cuando se habla de la funcionalidad de los proxies.

- {{jsxref("Global_Objects/Proxy/handler","handler","",1)}}
  - : Objeto marcador de posición que contiene trampas.
- traps
  - : Los métodos que proporcionan acceso a la propiedad. (Esto es análogo al concepto de _trampas_ en los sistemas operativos).
- target
  - : Objeto que virtualiza el proxy. A menudo se utiliza como interfaz de administración de almacenamiento para el proxy. Las invariantes (semántica que permanece sin cambios) con respecto a la no extensibilidad del objeto o las propiedades no configurables se verifican con el `target`.
- invariants
  - : La semántica que permanece sin cambios al implementar operaciones personalizadas se denominan _invariants_. Si violas las invariantes de un controlador, se lanzará un {{jsxref("TypeError")}}.

## Controladores y trampas

La siguiente tabla resume las trampas disponibles para los objetos `Proxy`. Ve las [páginas de referencia](/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) para explicaciones detalladas y ejemplos.

<table class="standard-table">
    <thead>
     <tr>
      <th>Controlador/Trampa</th>
      <th>Intercepciones</th>
      <th>Invariantes</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/getPrototypeOf", "handler.getPrototypeOf()")}}</td>
      <td>{{jsxref("Object.getPrototypeOf()")}}<br>
       {{jsxref("Reflect.getPrototypeOf()")}}<br>
       {{jsxref("Object/proto", "__proto__")}}<br>
       {{jsxref("Object.prototype.isPrototypeOf()")}}<br>
       {{jsxref("Operators/instanceof", "instanceof")}}</td>
      <td>
       <ul>
        <li>El método <code>getPrototypeOf</code> regresa un objeto o <code>null</code>.</li>
        <li>Si <code><var>target</var></code> no es extensible, el método <code>Object.getPrototypeOf(<var>proxy</var>)</code> debe devolver el mismo valor que <code>Object.getPrototypeOf(<var>target</var>)</code>.</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/setPrototypeOf", "handler.setPrototypeOf()")}}</td>
      <td>{{jsxref("Object.setPrototypeOf()")}}<br>
       {{jsxref("Reflect.setPrototypeOf()")}}</td>
      <td>Si <code><var>target</var></code> no es extensible, el parámetro <code>prototype</code> debe tener el mismo valor que <code>Object.getPrototypeOf(<var>target</var>)</code>.</td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/is Extensible", "handler.isExtensible()")}}</td>
      <td>{{jsxref("Object.isExtensible()")}}<br>
       {{jsxref("Reflect.isExtensible()")}}</td>
      <td><code>Object.isExtensible(<var>proxy</var>)</code> debe devolver el mismo valor que <code>Object.isExtensible(<var>target</var>)</code>.</td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/preventExtensions", "handler.preventExtensions()")}}</td>
      <td>{{jsxref("Object.preventExtensions()")}}<br>
       {{jsxref("Reflect.preventExtensions()")}}</td>
      <td><code>Object.preventExtensions(<var>proxy</var>)</code> solo devuelve <code>true</code> si <code>Object.isExtensible(<var>proxy</var>)</code> es <code>false</code>.</td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}</td>
      <td>{{jsxref("Object.getOwnPropertyDescriptor()")}}<br>
       {{jsxref("Reflect.getOwnPropertyDescriptor()")}}</td>
      <td>
       <ul>
        <li><code>getOwnPropertyDescriptor</code> debe devolver un objeto o <code>undefined</code>.</li>
        <li>Una propiedad no se puede reportar como inexistente si existe como una propiedad propia no configurable de <code><var>target</var></code>.</li>
        <li>Una propiedad no se puede reportar como inexistente si existe como propiedad propia de <code><var>target</var></code> y <code><var>target</var></code> no es extensible.</li>
        <li>Una propiedad no se puede reportar como existente si no existe como una propiedad propia de <code><var>target</var></code> y <code><var>target</var></code> no es extensible.</li>
        <li>No se puede reportar una propiedad como no configurable si no existe como propiedad propia de <code><var>target</var></code> o si existe como propiedad propia configurable de <code><var>target</var></code>.</li>
        <li>El resultado de <code>Object.getOwnPropertyDescriptor(<var>target</var>)</code> se puede aplicar a <code><var>target</var></code> usando <code>Object.defineProperty</code> y no lanzará una excepción.</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty()")}}</td>
      <td>{{jsxref("Object.defineProperty()")}}<br>
       {{jsxref("Reflect.defineProperty()")}}</td>
      <td>
       <ul>
        <li>No se puede agregar una propiedad si <code><var>target</var></code> no es extensible.</li>
        <li>Una propiedad no se puede agregar como (o modificar para ser) no configurable si no existe como una propiedad propia no configurable de <code><var>target</var></code>.</li>
        <li>Una propiedad no puede ser no configurable si existe una propiedad configurable correspondiente de <code><var>target</var></code>.</li>
        <li>Si una propiedad tiene una propiedad de objeto <code>target</code> correspondiente, entonces <code>Object.defineProperty(<var>target</var>, <var>prop</var>, <var>descriptor</var>)</code> no lanzará una excepción.</li>
        <li>En modo estricto, un valor <code>false</code> devuelto por el controlador <code>defineProperty</code> lanzará una excepción {{jsxref("TypeError")}}.</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/has", "handler.has()")}}</td>
      <td>
       <dl>
        <dt>Consulta de propiedad</dt>
        <dd><code>foo in proxy</code></dd>
        <dt>Consulta de propiedad heredada</dt>
        <dd><code>foo in Object.create(<var>proxy</var>)</code><br>
        {{jsxref("Reflect.has()")}}</dd>
       </dl>
      </td>
      <td>
       <ul>
        <li>Una propiedad no se puede reportar como inexistente, si existe como una propiedad propia no configurable de <code><var>target</var></code>.</li>
        <li>Una propiedad no se puede reportar como inexistente si existe como propiedad propia de <code><var>target</var></code> y <code><var>target</var></code> no es extensible.</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/get", "handler.get()")}}</td>
      <td>
       <dl>
        <dt>Acceso a la propiedad</dt>
        <dd><code><var>proxy</var>[foo]</code><br>
        <code><var>proxy</var>.bar</code></dd>
        <dt>Acceso a propiedad heredada</dt>
        <dd><code>Object.create[<var>proxy</var>](foo)</code><br>
        {{jsxref("Reflect.get()")}}</dd>
       </dl>
      </td>
      <td>
       <ul>
        <li>El valor reportado para una propiedad debe ser el mismo que el valor de la propiedad <code><var>target</var></code> correspondiente si la propiedad de <code><var>target</var></code> es una propiedad de datos de solo lectura y no es configurable.</li>
        <li>El valor reportado para una propiedad debe ser <code>undefined</code> si la propiedad <code><var>target</var></code> correspondiente es una propiedad de acceso no configurable que tiene <code>undefined</code> como su atributo <code>[[Get]]</code>.</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/set", "handler.set()")}}</td>
      <td>
       <dl>
        <dt>Asignación de propiedad</dt>
        <dd><code><var>proxy</var>[foo] = bar</code><br>
        <code><var>proxy</var>.foo = bar</code></dd>
        <dt>Asignación de propiedad heredada</dt>
        <dd><code>Object.create[<var>proxy</var>](foo) = bar</code><br>
        {jsxref("Reflect.set()")}}</dd>
       </dl>
      </td>
      <td>
       <ul>
        <li>No se puede cambiar el valor de una propiedad para que sea diferente del valor de la propiedad <code><var>target</var></code> correspondiente si la propiedad <code><var>target</var></code> correspondiente es una propiedad de datos de solo lectura y no es configurable.</li>
        <li>No se puede establecer el valor de una propiedad si la propiedad <code><var>target</var></code> correspondiente es una propiedad de acceso no configurable que tiene <code>undefined</code> como su atributo <code>[[Get]]</code>.</li>
        <li>En modo estricto, un valor de retorno <code>false</code> del controlador <code>set</code> arrojará una excepción {{jsxref("TypeError")}}.</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/deleteProperty", "handler.deleteProperty()")}}</td>
      <td>
       <dl>
        <dt>Eliminación de propiedad</dt>
        <dd><code>delete <var>proxy</var>[foo]</code><br>
        <code>delete <var>proxy</var>.foo</code><br>
        {{jsxref("Reflect.deleteProperty()")}}</dd>
       </dl>
      </td>
      <td>Una propiedad no se puede eliminar si existe como una propiedad propia no configurable de <code><var>target</var></code>.</td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/enumerate", "handler.enumerate()")}}</td>
      <td>
       <dl>
        <dt>Enumeración de propiedad/<code>for...in</code>:</dt>
        <dd><code>for (let name in <var>proxy</var>) {...}</code><br>
        {{jsxref("Reflect.enumerate()")}}</dd>
       </dl>
      </td>
      <td>El método <code>enumerate</code> debe devolver un objeto.</td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/ownKeys", "handler.ownKeys()")}}</td>
      <td>{{jsxref("Object.getOwnPropertyNames()")}}<br>
       {{jsxref("Object.getOwnPropertySymbols()")}}<br>
       {{jsxref("Object.keys()")}}<br>
       {{jsxref("Reflect.ownKeys()")}}</td>
      <td>
       <ul>
        <li>El resultado de <code>ownKeys</code> es una lista.</li>
        <li>El Tipo de cada elemento de la Lista de resultados es {{jsxref("String")}} o {{jsxref("Symbol")}}.</li>
        <li>La Lista de resultados debe contener las claves de todas las propiedades propias no configurables de <code><var>target</var></code>.</li>
        <li>Si el objeto <code><var>target</var></code> no es extensible, entonces la Lista de resultados debe contener todas las claves de las propiedades propias de <code><var>target</var></code> y ningún otro valor.</li>
       </ul>
      </td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/apply", "handler.apply()")}}</td>
      <td><code>proxy(..args)</code><br>
       {{jsxref("Function.prototype.apply()")}} y {{jsxref("Function.prototype.call()")}}<br>
       {{jsxref("Reflect.apply()")}}</td>
      <td>No hay invariantes para el método <code><var>handler</var>.apply</code>.</td>
     </tr>
     <tr>
      <td>{{jsxref("Global_Objects/Proxy/handler/construct", "handler.construct()")}}</td>
      <td><code>new proxy(...args)</code><br>
       {{jsxref("Reflect.construct()")}}</td>
      <td>El resultado debe ser un <code>Objeto</code>.</td>
     </tr>
    </tbody>
   </table>

## `Proxy` revocable

El método {{jsxref ("Proxy.revocable()")}} se usa para crear un objeto `Proxy` revocable. Esto significa que el proxy se puede revocar mediante la función `revoke` y apagar el proxy.

Posteriormente, cualquier operación en el proxy conduce a un {{jsxref("TypeError")}}.

```js
let revocable = Proxy.revocable(
  {},
  {
    get: function (target, name) {
      return "[[" + name + "]]";
    },
  },
);
let proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // Lanza TypeError
proxy.foo = 1; // TypeError nuevamente
delete proxy.foo; // todavía TypeError
typeof proxy; // "object", typeof no activa ninguna trampa
```

## Reflexión

{{jsxref("Reflect")}} es un objeto integrado que proporciona métodos para operaciones JavaScript interceptables. Los métodos son los mismos que los de {{jsxref ("Global_Objects/Proxy/handler", "proxy handlers", "", "true")}}.

`Reflect` no es un objeto función.

`Reflect` ayuda con el reenvío de las operaciones predeterminadas del controlador al `target`.

Con {{jsxref("Reflect.has()")}} por ejemplo, obtienes el operador [`in`](/es/docs/Web/JavaScript/Reference/Operators/in) como función:

```js
Reflect.has(Object, "assign"); // true
```

### Una mejor función `apply`

En ES5, normalmente usas el método {{jsxref("Function.prototype.apply()")}} para llamar a una función con un valor `this` y `arguments` proporcionado como un arreglo (o un [objeto similar a un arreglo](/es/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)).

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

Con {{jsxref("Reflect.apply")}} esto se vuelve menos detallado y más fácil de entender:

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hola"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

### Comprobando si la definición de la propiedad ha sido exitosa

Con {{jsxref("Object.defineProperty")}}, que devuelve un objeto si tiene éxito, o arroja un {{jsxref("TypeError")}} de lo contrario, usaría un bloque {{jsxref("Statements/try...catch", "try...catch")}} para detectar cualquier error que haya ocurrido al definir una propiedad. Debido a que {{jsxref("Reflect.defineProperty")}} devuelve un estado de éxito booleano, aquí puedes usar un bloque {{jsxref("Statements/if...else", "if...else")}}:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // éxito
} else {
  // fracaso
}
```

{{Previous("Web/JavaScript/Guide/Iterators_and_generators")}}


# TEMA: GUIDE/MODULES



--- SUBTEMA: modules ---


{{JSSidebar("Guía de JavaScript")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Esta guía te brinda todo lo que necesitas para comenzar con la sintaxis de los módulos JavaScript.

## Un antecedente sobre módulos

Los programas JavaScript comenzaron siendo bastante pequeños — la mayor parte de su uso en los primeros días era para realizar tareas de scripting aisladas, proporcionando un poco de interactividad a tus páginas web donde fuera necesario, por lo que generalmente no se necesitaban grandes scripts. Avancemos unos años y ahora tenemos aplicaciones completas que se ejecutan en navegadores con mucho JavaScript, JavaScript ahora se usa en otros contextos ([Node.js](/es/docs/Glossary/Node.js), por ejemplo).

Por lo tanto, en los últimos años se ha comenzado a pensar en proporcionar mecanismos para dividir programas JavaScript en módulos separados que se puedan importar cuando sea necesario. Node.js ha tenido esta capacidad durante mucho tiempo, y hay una serie de bibliotecas y marcos de JavaScript que permiten el uso de módulos (por ejemplo, [CommonJS](https://en.wikipedia.org/wiki/CommonJS) y [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) otros basados en sistemas de módulos como [RequireJS](https://requirejs.org/), y recientemente [Webpack](https://webpack.github.io/) y [Babel](https://babeljs.io/)).

La buena noticia es que los navegadores modernos han comenzado a admitir la funcionalidad de los módulos de forma nativa, y de esto se trata este artículo. Esto solo puede ser algo bueno — los navegadores pueden optimizar la carga de módulos, haciéndolo más eficiente que tener que usar una biblioteca y hacer todo ese procesamiento adicional de lado del cliente, ahorrando viajes de ida y vuelta adicionales.

## Compatibilidad con navegadores

{{Compat}}

## Introducción — un ejemplo

Para demostrar el uso de módulos, hemos creado un [sencillo conjunto de ejemplos](https://github.com/mdn/js-examples/tree/master/module-examples) que puedes encontrar en GitHub. Estos ejemplos demuestran un sencillo conjunto de módulos que crean un elemento [`<canvas>`](/es/docs/Web/HTML/Reference/Elements/canvas) en una página web, y luego dibujan (y reportan información sobre) diferentes formas en el lienzo.

Estos son bastante triviales, pero se han mantenido deliberadamente simples para demostrar los módulos con claridad.

> [!NOTE]
> Si deseas descargar los ejemplos y ejecutarlos localmente, deberás ejecutarlos a través de un servidor web local.

## Estructura básica de los ejemplos

En nuestro primer ejemplo (ve [basic-modules](https://github.com/mdn/js-examples/tree/master/module-examples/basic-modules)) tenemos la siguiente estructura de archivos:

```
index.html
main.js
modules/
    canvas.js
    square.js
```

> [!NOTE]
> Todos los ejemplos de esta guía básicamente tienen la misma estructura; lo anterior debería empezar a resultarte bastante familiar.

Los dos módulos del directorio `modules` se describen a continuación:

- `canvas.js` — contiene funciones relacionadas con la configuración del lienzo (`canvas`):
  - `create()` — crea un lienzo (`canvas`) con un `width` y `height` especificados dentro de un contenedor [`<div>`](/es/docs/Web/HTML/Reference/Elements/div) con un ID especificado, que a su vez se añade dentro de un elemento padre especificado. Devuelve un objeto que contiene el contexto 2D del lienzo y el ID del contenedor.
  - `createReportList()` — crea una lista desordenada adjunta dentro de un elemento contenedor específico, que se puede usar para generar datos de informes. Devuelve el ID de la lista.

- `square.js` — contiene:
  - `name` — una constante que contiene la cadena 'square'.
  - `draw()` — dibuja una figura cuadrada en un lienzo específico, con un tamaño, posición y color específicos. Devuelve un objeto que contiene el tamaño, la posición y el color del cuadrado.
  - `reportArea()` — escribe el área de un cuadrado en una lista de informes específica, dada su longitud.
  - `reportPerimeter()` — escribe el perímetro de un cuadrado en una lista de informes específica, dada su longitud.

## Reflexión — `.mjs` versus `.js`

A través de este artículo, usaremos extensiones `.js` para nuestros archivos de módulo, pero en otros recursos, puedes ver que en su lugar se usa la extensión `.mjs`. [La documentación de V8 recomienda esto](https://v8.dev/features/modules#mjs), por ejemplo. Las razones dadas son:

- Es bueno por claridad, es decir, deja claro qué archivos son módulos y cuáles JavaScript.
- Asegura que tus archivos de módulo sean analizados como un módulo por los entornos de ejecución como [Node.js](https://nodejs.org/api/esm.html#esm_enabling) y herramientas de compilación como [Babel](https://babeljs.io/docs/en/options#sourcetype).

Sin embargo, decidimos seguir usando `.js`, al menos por el momento. Para que los módulos funcionen correctamente en un navegador, debes asegurarte de que tu servidor los esté sirviendo con un encabezado `Content-Type` que contenga un tipo MIME de JavaScript como `text/javascript`. Si no lo haces, obtendrás un estricto error de verificación de tipo MIME como "El servidor respondió con un tipo MIME que no es JavaScript" y el navegador no ejecutará tu JavaScript. La mayoría de los servidores ya configuran el tipo correcto para archivos `.js`, pero todavía no para archivos `.mjs`. Los servidores que ya sirven archivos `.mjs` incluyen [GitHub Pages](https://pages.github.com/) y [`http-server`](https://github.com/http-party/http-server#readme) para Node.js.

Esto está bien si ya estás utilizando un entorno de este tipo, o si no, pero sabes lo que estás haciendo y tiene acceso (es decir, puedes configurar tu servidor para establecer el [`Content-Type`](/es/docs/Web/HTTP/Reference/Headers/Content-Type) para archivos `.mjs`). Sin embargo, podría causar confusión si no controlas el servidor desde el que estás sirviendo archivos, o si estás publicando archivos para uso público, como lo hacemos aquí.

Por motivos de aprendizaje y portabilidad, decidimos mantenernos en `.js`.

Si realmente valoras la claridad de usar `.mjs` para módulos en lugar de usar `.js` para archivos JavaScript "normales", pero no quieres encontrarte con el problema descrito anteriormente, siempre puedes usar `.mjs` durante el desarrollo y convertirlos a `.js` durante tu paso de compilación.

También vale la pena señalar que:

- Es posible que algunas herramientas nunca admitan `.mjs`, tal como [TypeScript](https://www.typescriptlang.org/).
- El atributo `<script type="module">` se usa para indicar cuándo se está apuntando a un módulo, como verás a continuación.

## Exportar características del módulo

Lo primero que debes hacer para acceder a las funciones del módulo es exportarlas. Esto se hace usando la declaración {{jsxref("Statements/export", "export")}}.

La forma más sencilla de utilizarla es colocarla delante de cualquier elemento que desees exportar fuera del módulo, por ejemplo:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color,
  };
}
```

Puedes exportar funciones, `var`, `let`, `const` y, como veremos más adelante — clases. Deben ser elementos de nivel superior; no puedes usar `export` dentro de una función, por ejemplo.

Una forma más conveniente de exportar todos los elementos que deseas exportar es usar una sola declaración de exportación al final de tu archivo de módulo, seguida de una lista separada por comas de las características que deseas exportar entre llaves. Por ejemplo:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importación de características en tu script

Una vez que hayas declarado las funciones y características que deseas exportar de tu módulo, debes importarlas en tu script para poder usarlas. La forma más sencilla de hacerlo es la siguiente:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Utiliza la declaración {{jsxref("Statements/import", "import")}}, seguida de una lista separada por comas de las características que deseas importar entre llaves, seguida de la palabra clave `from`, seguida de la ruta al archivo del módulo — una ruta relativa a la raíz del sitio, que para nuestro ejemplo de `basic-modules` sería `/js-examples/modules/basic-modules`.

Sin embargo, hemos escrito la ruta de manera un poco diferente — estamos usando la sintaxis de punto (`.`) para significar "la ubicación actual", seguida de la ruta más allá del archivo que estamos tratando de encontrar. Esto es mucho mejor que escribir la ruta relativa completa cada vez, ya que es más corta y hace que la URL sea portátil — el ejemplo seguirá funcionando si lo mueve a una ubicación diferente en la jerarquía del sitio.

Así por ejemplo:

```
/js-examples/modules/basic-modules/modules/square.js
```

se convierte en

```
./modules/square.js
```

Puedes ver estas líneas en acción en [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/basic-modules/main.js).

> [!NOTE]
> En algunos sistemas de módulos, puedes omitir la extensión del archivo y el punto (por ejemplo, `'/modules/square'`). Esto no funciona en módulos de JavaScript nativos.

Una vez que hayas importado las funciones a tu script, las puedes usar tal como se definieron dentro del mismo archivo. Lo siguiente se encuentra en `main.js`, debajo de las líneas `import`:

```js
let myCanvas = create("myCanvas", document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Aunque las funciones importadas están disponibles en el archivo, son vistas de solo lectura de la función que se exportó. No puedes cambiar la variable que se importó, pero aún puedes modificar propiedades similares a `const`. Además, estas características se importan como enlaces activos, lo cual significa que pueden cambiar de valor incluso si no puedes modificar el enlace a diferencia de `const`.

## Aplicar el módulo a tu HTML

Ahora solo necesitamos aplicar el módulo `main.js` a nuestra página HTML. Esto es muy similar a cómo aplicamos un script normal a una página, con algunas diferencias notables.

En primer lugar, debes incluir `type="module"` en el elemento [`<script>`](/es/docs/Web/HTML/Reference/Elements/script), para declarar este script como un módulo. Para importar el script `main.js`, usamos esto:

```html
<script type="module" src="main.js"></script>
```

También puedes incrustar el script del módulo directamente en el archivo HTML colocando el código JavaScript dentro del cuerpo del elemento `<script>`:

```js
<script type="module">/* El código del módulo JavaScript va aquí */</script>
```

El script en el que importas las características del módulo básicamente actúa como el módulo de nivel superior. Si lo omite, Firefox, por ejemplo, te da un error de "SyntaxError: Las declaraciones import solo pueden aparecer en el nivel superior de un módulo".

Solo puede usar instrucciones `import` y `export` dentro de los módulos, no en scripts normales.

## Otras diferencias entre módulos y scripts estándar

- Debes prestar atención a las pruebas locales — si intentas cargar el archivo HTML localmente (es decir, con una URL `file:///`), te encontrarás con errores de CORS debido a los requisitos de seguridad del módulo JavaScript. Necesitas hacer tus pruebas a través de un servidor.
- Además, ten en cuenta que puedes obtener un comportamiento diferente de las secciones del script definidas dentro de los módulos en comparación con los scripts estándar. Esto se debe a que los módulos automáticamente usan {{jsxref("Strict_mode", "strict mode", "", 1)}}.
- No es necesario utilizar el atributo `defer` (ve [atributos de `<script>`](/es/docs/Web/HTML/Reference/Elements/script#Attributes)) al cargar un script de módulo; los módulos se difieren automáticamente.
- Los módulos solo se ejecutan una vez, incluso si se les ha hecho referencia en varias etiquetas `<script>`.
- Por último, pero no menos importante, dejemos esto en claro — las características del módulo se importan al alcance de un solo script — no están disponibles en el alcance global. Por lo tanto, solo podrás acceder a las funciones importadas en el script en el que se importan y no podrás acceder a ellas desde la consola de JavaScript, por ejemplo. Seguirás recibiendo errores de sintaxis en DevTools, pero no podrás utilizar algunas de las técnicas de depuración que esperabas utilizar.

## Exportaciones predeterminadas vs. exportaciones con nombre

La funcionalidad que hemos exportado hasta ahora se compone de **exportaciones con nombre** — cada elemento (ya sea una función, `const`, etc.) se ha denominado por su nombre en `export`, y ese nombre también se ha utilizado para referirse a él en `import`.

También hay un tipo de exportación llamado **exportación predeterminada** — está diseñado para facilitar que un módulo proporcione una función predeterminada, y también ayuda a los módulos JavaScript a interoperar con los sistemas de módulos CommonJS y AMD existentes (como se explica muy bien en [ES6 en profundidad: módulos](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) de Jason Orendorff; busca "Exportaciones predeterminadas").

Veamos un ejemplo mientras explicamos cómo funciona. En nuestros ↑basic-modules↓ `square.js` puedes encontrar una función llamada `randomSquare()` que crea un cuadrado con un color, tamaño y posición aleatorios. Lo queremos exportar como nuestro predeterminado, por lo que en la parte inferior del archivo escribimos esto:

```js
export default randomSquare;
```

Ten en cuenta la falta de llaves.

En su lugar, podríamos anteponer `export default` a la función y definirla como una función anónima, así:

```js
export default function(ctx) {
  ...
}
```

En nuestro archivo `main.js`, importamos la función predeterminada usando esta línea:

```js
import randomSquare from "./modules/square.js";
```

Una vez más, ten en cuenta la falta de llaves. Esto se debe a que solo se permite una exportación predeterminada por módulo, y sabemos que `randomSquare` lo es. La línea anterior es básicamente una abreviatura de:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> La sintaxis as para cambiar el nombre de los elementos exportados se explica a continuación en la sección [Renombrar importaciones y exportaciones](#renombrar_impotaciones_y_exportaciones).

## Evitar conflictos de nombres

Hasta ahora, nuestros módulos de dibujo de formas en el lienzo parecen estar funcionando bien. Pero, ¿qué pasa si intentamos agregar un módulo que se ocupa de dibujar otra forma, como un círculo o un triángulo? Estas formas probablemente también tendrían funciones asociadas como `draw()`, `reportArea()`, etc.; si intentáramos importar diferentes funciones del mismo nombre en el mismo archivo de módulo de nivel superior, terminaríamos con conflictos y errores.

Afortunadamente, hay varias formas de evitar esto. Los veremos en las siguientes secciones.

## Renombrar importaciones y exportaciones

Dentro de las llaves de tu instrucciones `import` y `export`, puedes usar la palabra clave `as` junto con un nuevo nombre de función, para cambiar el nombre de identificación que utilizará una función dentro del módulo de nivel superior.

Entonces, por ejemplo, ambos de los siguientes harían el mismo trabajo, aunque de una manera ligeramente diferente:

```js
// dentro de module.js
export { function1 as newFunctionName, function2 as anotherNewFunctionName };

// dentro de main.js
import { newFunctionName, anotherNewFunctionName } from "./modules/module.js";
```

```js
// dentro de module.js
export { function1, function2 };

// dentro de main.js
import {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName,
} from "./modules/module.js";
```

Veamos un ejemplo real. En nuestro directorio [renaming](https://github.com/mdn/js-examples/tree/master/module-examples/renaming), verás el mismo sistema de módulos que en el ejemplo anterior, excepto que hemos agregado los módulos `circle.js` y `triangle.js` para dibujar e informar sobre círculos y triángulos.

Dentro de cada uno de estos módulos, tenemos características con los mismos nombres que se exportan y, por lo tanto, cada una tiene la misma instrucción `export` en la parte inferior:

```js
export { name, draw, reportArea, reportPerimeter };
```

Al importarlos a `main.js`, si intentamos usar esto:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

El navegador arrojará un error como "SyntaxError: redeclaración de nombre import" (Firefox).

En su lugar, necesitamos cambiar el nombre de las importaciones para que sean únicas:

```js
import {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
} from "./modules/square.js";

import {
  name as circleName,
  draw as drawCircle,
  reportArea as reportCircleArea,
  reportPerimeter as reportCirclePerimeter,
} from "./modules/circle.js";

import {
  name as triangleName,
  draw as drawTriangle,
  reportArea as reportTriangleArea,
  reportPerimeter as reportTrianglePerimeter,
} from "./modules/triangle.js";
```

Ten en cuenta que podrías resolver el problema en los archivos del módulo, p. ej.

```js
// en square.js
export {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
};
```

```js
// en main.js
import {
  squareName,
  drawSquare,
  reportSquareArea,
  reportSquarePerimeter,
} from "./modules/square.js";
```

Y funcionaría igual. El estilo que uses depende de ti, sin embargo, podría decirse que tiene más sentido dejar el código de tu módulo tal cual y realizar los cambios en las importaciones. Esto tiene sentido especialmente cuando estás importando desde módulos de terceros sobre los que no tienes ningún control.

## Crear un objeto `module`

El método anterior funciona bien, pero es un poco complicado y largo. Una solución aún mejor es importar las características de cada módulo dentro de un objeto `module`. La siguiente forma de sintaxis hace eso:

```js
import * as Module from "./modules/module.js";
```

Esto toma todas las exportaciones disponibles dentro de `module.js` y las hace disponibles como miembros de un objeto `Module`, dándole efectivamente su propio espacio de nombres. Así por ejemplo:

```js
Module.function1()
Module.function2()
etc.
```

De nuevo, veamos un ejemplo real. Si vas a nuestro directorio [module-objects](https://github.com/mdn/js-examples/tree/master/module-examples/module-objects), verás el mismo ejemplo nuevamente, pero reescrito para aprovechar esta nueva sintaxis. En los módulos, las exportaciones están todas en la siguiente forma simple:

```js
export { name, draw, reportArea, reportPerimeter };
```

Las importaciones, por otro lado, se ven así:

```js
import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";
```

En cada caso, ahora puedes acceder a las importaciones del módulo debajo del nombre del objeto especificado, por ejemplo:

```js
let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

Por lo tanto, ahora puedes escribir el código de la misma manera que antes (siempre que incluyas los nombres de los objetos donde sea necesario), y las importaciones son mucho más ordenadas.

## Módulos y clases

Como dijimos antes, también puedes exportar e importar clases; esta es otra opción para evitar conflictos en tu código, y especialmente es útil si ya tienes el código de tu módulo escrito en un estilo orientado a objetos.

Puedes ver un ejemplo de nuestro módulo de dibujo de formas reescrito con clases ES en nuestro directorio [classes](https://github.com/mdn/js-examples/tree/master/module-examples/classes). Como ejemplo, el archivo [`square.js`](https://github.com/mdn/js-examples/blob/master/module-examples/classes/modules/square.js) ahora contiene toda su funcionalidad en una sola clase:

```js
class Square {
  constructor(ctx, listId, length, x, y, color) {
    ...
  }

  draw() {
    ...
  }

  ...
}
```

que luego exportamos:

```js
export { Square };
```

En [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/classes/main.js), lo importamos así:

```js
import { Square } from "./modules/square.js";
```

Y luego usas la clase para dibujar nuestro cuadrado:

```js
let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## Carga estática de módulos

Habrá ocasiones en las que querrás agregar módulos juntos. Es posible que tengas varios niveles de dependencias, donde desees simplificar las cosas, combinando varios submódulos en un módulo principal. Esto es posible utilizando la sintaxis de exportación de los siguientes formas en el módulo principal:

```js
export * from "x.js";
export { name } from "x.js";
```

Para ver un ejemplo, ve nuestro directorio [module-aggregation](https://github.com/mdn/js-examples/tree/master/module-examples/module-aggregation). En este ejemplo (basado en nuestro ejemplo de clases anterior) tenemos un módulo adicional llamado `shapes.js`, que reúne toda la funcionalidad de `circle.js`, `square.js` y `triangle.js`. También hemos movido nuestros submódulos dentro de un subdirectorio dentro del directorio `modules` llamado `shapes`. Entonces, la estructura del módulo en este ejemplo es:

```
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

En cada uno de los submódulos, la exportación es de la misma forma, p. ej.

```js
export { Square };
```

Luego viene la parte de agregación. Dentro de [`shapes.js`](https://github.com/mdn/js-examples/blob/master/module-examples/module-aggregation/modules/shapes.js), incluimos las siguientes líneas:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Estas toman las exportaciones de los submódulos individuales y las ponen a disposición de manera efectiva desde el módulo `shapes.js`.

> [!NOTE]
> Las exportaciones a las que se hace referencia en `shapes.js` básicamente se redirigen a través del archivo y realmente no existen allí, por lo que no podrás escribir ningún código relacionado útil dentro del mismo archivo.

Entonces, ahora en el archivo `main.js`, podemos obtener acceso a las tres clases de módulos reemplazando

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

con la siguiente única línea:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Carga dinámica de módulos

La parte más nueva de la funcionalidad de los módulos de JavaScript que estará disponible en los navegadores es la carga dinámica de módulos. Esto te permite cargar módulos dinámicamente solo cuando son necesarios, en lugar de tener que cargar todo por adelantado. Esto tiene algunas obvias ventajas de rendimiento; sigue leyendo y veamos cómo funciona.

Esta nueva funcionalidad te permite llamar a {{jsxref("Statements/import", "import()", "#Importaciones_Dinámicas")}} como una función, pasándole la ruta al módulo como parámetro. Devuelve una {{jsxref("Promise")}}, que se cumple con un objeto `module` (consulta [Crear un objeto `module`](#crear_un_objeto_module)) que te da acceso a las exportaciones de ese objeto, p. ej.

```js
import("./modules/myModule.js").then((module) => {
  // Haz algo con el módulo.
});
```

Veamos un ejemplo. En el directorio [dynamic-module-import](https://github.com/mdn/js-examples/tree/master/module-examples/dynamic-module-imports) tenemos otro ejemplo basado en nuestro ejemplo de clases. Esta vez, sin embargo, no dibujamos nada en el lienzo cuando se carga el ejemplo. En su lugar, incluimos tres botones — "Círculo", "Cuadrado" y "Triángulo" — que, cuando se presionan, cargan dinámicamente el módulo requerido y luego lo usan para dibujar la forma asociada.

En este ejemplo, solo hemos realizado cambios en nuestros archivos [`index.html`](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/index.html) y [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/main.mjs) — el módulo `exports` sigue siendo el mismo que antes.

En `main.js` hemos tomado una referencia a cada botón usando una llamada a [`Document.querySelector()`](/es/docs/Web/API/Document/querySelector), por ejemplo:

```js
let squareBtn = document.querySelector(".square");
```

Luego adjuntamos un escucha de eventos a cada botón para que cuando se presione, el módulo relevante se cargue dinámicamente y se use para dibujar la forma:

```js
squareBtn.addEventListener("click", () => {
  import("./modules/square.js").then((Module) => {
    let square1 = new Module.Square(
      myCanvas.ctx,
      myCanvas.listId,
      50,
      50,
      100,
      "blue",
    );
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  });
});
```

Ten en cuenta que, debido a que el cumplimiento de la promesa devuelve un objeto `module`, la clase se convierte en una subfunción del objeto, por lo que ahora necesitamos acceder al constructor prefijado con `Module.`, p. ej. `Module.Square(...)`.

## Solución de problemas

Aquí hay algunos consejos que te pueden ayudar si tienes problemas para hacer que tus módulos funcionen. ¡No dude en agregarlos a la lista si descubres más!

- Mencionamos esto antes, pero para reiterar: los archivos `.js` se deben cargar con un tipo MIME de `text/javascript` (u otro tipo MIME compatible con JavaScript, pero se recomienda `text/javascript`), de lo contrario, obtendrás un error de comprobación de tipo MIME estricto como "El servidor respondió con un tipo MIME no JavaScript".
- Si intentas cargar el archivo HTML localmente (es decir, con una URL `file:///`), encontrarás errores CORS debido a los requisitos de seguridad del módulo JavaScript. Necesitas hacer tus pruebas a través de un servidor. Las páginas de GitHub son ideales ya que también sirven archivos `.js` con el tipo MIME correcto.
- Debido a que `.mjs` es una extensión de archivo no estándar, es posible que algunos sistemas operativos no la reconozcan o intenten reemplazarla por otra. Por ejemplo, descubrimos que macOS silenciosamente agregaba `.js` al final de los archivos `.mjs` y luego, automáticamente ocultaba la extensión del archivo. Entonces, todos nuestros archivos salían realmente como `x.mjs.js`. Una vez que desactivamos la acción de ocultar automáticamente las extensiones de archivo y lo entrenamos para aceptar `.mjs`, todo estuvo bien.

## Ve también

- [Uso de módulos JavaScript en la web](https://developers.google.com/web/fundamentals/primers/modules#mjs), por Addy Osmani y Mathias Bynens
- [Módulos ES: un análisis profundo de dibujos animados](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), publicación en el blog Hacks de Lin Clark
- [ES6 en profundidad: Módulos](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), publicación en el blog Hacks de Jason Orendorff
- Libro de Axel Rauschmayer [Explorando JS: Módulos](https://exploringjs.com/es6/ch_modules.html)

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
