---
Area: INFORMATICA
tema: JAVASCRIPT GENERAL
tags:
  - "#informatica"
  - "#programacion"
  - "#javascript"
  - "#TRIADA"
fecha: 2026-04-14
---
lo que deberias saber:

### I. El Paradigma de Compilación JIT (Just-In-Time)

- **1.1. Desmitificación del "Lenguaje Interpretado":** Por qué JS es técnicamente un lenguaje compilado.

 _Fuentes:_ YDKJS (Scope & Closures Ch. 1) / ECMA-262 (Sección 5: Notational Conventions).

- **1.2. El proceso de tres pasos:**
- **Tokenizing/Lexing:** De texto plano a unidades con significado.
- **Parsing:** La construcción del **AST (Abstract Syntax Tree)**. 
- **Generación de Código:** Del AST a instrucciones ejecutables por el motor.

 _Fuentes:_ YDKJS / MDN (Lexical Grammar).
### II. El Elenco de la Ejecución

- **2.1. El Motor (Engine):** Responsable de la compilación de principio a fin y de la ejecución del programa.

- **2.2. El Compilador (Compiler):** El encargado del trabajo sucio de parsing y generación de código.

- **2.3. El Scope (Alcance):** El bibliotecario que mantiene una lista de todos los identificadores declarados y las reglas de acceso.

- _Fuentes:_ YDKJS (The Conversation) / JS.info (Execution Context).


### III. Consultas de Memoria: El Corazón del Motor

- **3.1. LHS (Left-Hand Side):** La búsqueda del contenedor (Target). ¿Dónde guardo el valor?

- **3.2. RHS (Right-Hand Side):** La búsqueda del valor (Source). ¿Qué hay en esta variable?

- **3.3. Casos de Ambigüedad:** Cómo el motor diferencia entre `a = 2` y `console.log(a)`.

-  _Fuentes:_ YDKJS (Compiler Speak).


### IV. Lexical Environments y Entornos de Ejecución (Nivel ECMA-262)

- **4.1. Realmetas de la Especificación:** Entender qué es un **Environment Record**.

- **4.2. Global Environment vs. Function Environment:** Cómo se estructuran los "cubos" de memoria inicialmente.

- _Fuentes:_ ECMA-262 (Sección 9: Executable Code and Execution Contexts).


### V. Gestión de Errores de Motor

- **5.1. ReferenceError:** Fallas en la resolución del identificador (RHS fallido o LHS en modo estricto).

- **5.2. TypeError:** Resolución exitosa (RHS), pero operación ilegal sobre el valor obtenido.    
- _Fuentes:_ MDN (Errors) / YDKJS (Errors).



 


----


---

---

## EMPEZEMOS!!!

Comenzamos. Prepárate para desaprender mucho de lo que creías saber.

Para responder a la pregunta que te dejé antes: la única razón por la que puedes llamar a una función antes de su línea de definición es porque **JavaScript no es un lenguaje puramente interpretado que se lee línea por línea**. El motor de JavaScript (como V8) compila el programa en una fase separada _antes_ de que comience la ejecución. Si el motor no hiciera una pasada previa para registrar en memoria dónde están las declaraciones, sería imposible que supiera que esa función existe más abajo en tu archivo.

Aquí entramos en los Primeros Principios. Vamos a abrir el motor V8 de Google y ver qué pasa exactamente con tu código.

### 1. La Verdadera Naturaleza de JS: La Fase de Compilación

Según la especificación ECMA-262 **¿QUE ES ECMA-262?** y la arquitectura descrita en _You Don't Know JS_ (YDKJS), antes de que tu código se ejecute, pasa por un proceso de compilación de tres pasos que ocurre en microsegundos:

1. **Tokenizing / Lexing (Análisis Léxico):** El motor rompe tu cadena de código en fragmentos con significado semántico (tokens). Por ejemplo, `var a = 2;` se divide en los tokens `var`, `a`, `=`, `2` y `;`.
2. **Parsing (Análisis Sintáctico):** Toma ese flujo de tokens y lo convierte en un árbol de elementos anidados que representa la estructura gramatical del programa. La especificación ECMA-262 llama a esto el _Parse Tree_ o _Abstract Syntax Tree_ (AST).
3. **Generación de Código:** Toma ese AST y lo convierte en instrucciones de máquina ejecutables, creando la variable en memoria y preparándola para la ejecución.

### 2. El Modelo Mental: Los 3 Actores

Para entender la memoria y el Scope (Ámbito), debes pensar como el motor. En YDKJS, se nos enseña a imaginar que hay tres personajes interactuando dentro del entorno:

- **El Motor (Engine):** Responsable de la compilación y ejecución de principio a fin.
- **El Compilador (Compiler):** El amigo del Motor que hace el trabajo sucio de analizar (parsing) y generar el código.
- **El Scope (Administrador de Ámbito):** El guardián de la memoria. Recopila y mantiene una lista estricta de todos los identificadores (variables) declarados y aplica las reglas de quién tiene acceso a qué.

### 3. Diseccionando `var a = 2;` (El momento de la verdad)

Tú ves `var a = 2;` y piensas que es una sola instrucción. El Motor de JavaScript ve **dos declaraciones distintas**.

**Fase 1: Compilación (El Compilador y el Scope)** El Compilador llega a `var a`. Le pregunta al Scope: _"Oye, Scope, ¿ya existe una variable `a` en tu colección de memoria actual?"_. Si ya existe, el Compilador la ignora. Si no existe, el Compilador le ordena al Scope que reserve memoria y declare una nueva variable llamada `a`. _Aquí el valor `2` ni siquiera se ha mirado._ Esto explica el fenómeno conocido en MDN como _hoisting_ (elevación); las declaraciones se procesan antes que cualquier ejecución.

**Fase 2: Ejecución (El Motor y el Scope)** El Compilador ya terminó. Ahora el Motor toma el control para ejecutar `a = 2`. El Motor le pregunta al Scope: _"Oye, Scope, ¿tienes una variable llamada `a` en este entorno?"_. Si el Scope la tiene (y la tiene, gracias a la Fase 1), el Motor toma el valor `2` y se lo asigna a esa caja de memoria.

### 4. Consultas de Memoria: LHS vs RHS

Cuando el Motor busca una variable en la memoria durante la ejecución, hace dos tipos de consultas muy estrictas. Tienes que dominarlas para entender los errores de JS.

- **LHS (Left-Hand Side - Objetivo/Target):** Ocurre cuando el Motor busca una variable para _asignarle_ un valor. Significa: "¿Quién es el objetivo de esta asignación?". En `a = 2`, la búsqueda de `a` es una consulta LHS porque no nos importa qué valor tiene `a` ahora mismo, solo queremos encontrar la caja en memoria para meterle el `2`.
- **RHS (Right-Hand Side - Fuente/Source):** Ocurre cuando el Motor necesita _recuperar_ el valor de una variable. En `console.log(a);`, el motor hace una consulta RHS para `a` porque le está diciendo al Scope: "Dame el valor que tiene `a` para poder imprimirlo".

**¿Por qué importa este rigor técnico?** Porque si el Motor hace una consulta **RHS** buscando un valor y el Scope le dice que esa variable no existe en la memoria, el Motor lanza un `ReferenceError` crítico, deteniendo tu programa. ¡El lenguaje te castiga por intentar leer algo que no existe! Pero si hace una consulta **LHS** (en modo no estricto) y no encuentra la variable, el Scope global de JavaScript la creará mágicamente por ti, provocando fugas de memoria globales. (Por eso el _Modo Estricto_ de ECMA-262 es vital, ya que prohíbe esta magia).

---

## MI ESTUDIO REAL!!!

Me gusta hacia dónde va tu mente analítica, estás intentando encajar las piezas de la maquinaria. Sin embargo, noto que **esquivaste mi desafío anterior** sobre el `undefined` y el `ReferenceError`. Como tu mentor, te exijo disciplina: un Ingeniero de Software no deja hilos sueltos.

Voy a diseccionar tus suposiciones una por una, y verás cómo al responderlas, el enigma de `var` y `let` (el desafío anterior) se resuelve por sí solo.

Presta mucha atención, porque vamos a descender al núcleo del **Motor V8** y la especificación **ECMA-262**.

---

### 1. ¿El Motor divide el código entre el Intérprete y el Compilador?

**Tu suposición:** _"Lleva partes a ser interpretadas y otras partes que precisan de más CPU a ser compiladas como las recursivas"._

Estás muy cerca de la verdad, pero falta precisión técnica. No es que el motor "divida" el código desde el principio. Así es como ocurre el **JIT (Just-In-Time) Compilation** en V8:

1. **Todo pasa por el Intérprete primero:** El componente del motor que crea el AST (el _Parser_) le pasa el 100% del árbol al Intérprete (llamado **Ignition**). Ignition transforma _todo_ el código a _Bytecode_ y lo empieza a ejecutar inmediatamente. ¿Por qué? Porque la web exige que las cosas arranquen rápido.

2. **El Perfilador (Profiler) vigila:** Mientras Ignition ejecuta el código, un componente silencioso vigila qué partes del código se usan mucho.

3. **El Compilador entra en acción:** Si una función (como un bucle pesado o una función recursiva) se ejecuta decenas de veces, el motor la marca como **"Hot" (Caliente)**. Solo entonces, esa porción específica se envía al Compilador Optimizador (**TurboFan**), el cual compila ese _Bytecode_ a _Código Máquina puro_ (ceros y unos directos al procesador) para que la próxima vez que se llame a esa función recursiva, vuele a la velocidad de la luz.


### 2. ¿Por qué se dividen el trabajo el Compilador y el Motor? ¿Por qué no lo hace uno solo?

**Tu pregunta:** _"¿Por qué el compilador le dice a scope que cree una variable vacía y luego vuelve el motor y la asigna? ¿Ambos se comunican con el Scope?"_

**Respuesta corta:** Sí, ¡ambos se comunican con el Scope, pero en momentos (Fases) totalmente distintos!

**Respuesta de Primeros Principios (YDKJS - Scope & Closures):**

Si JavaScript fuera un lenguaje puramente interpretado (línea por línea de arriba a abajo sin leer antes), funciones como esta fallarían catastróficamente:


```JS
saludar(); // ¡Funciona perfectamente!

function saludar() {
  console.log("Hola");
}
```

¿Cómo sabe el motor qué es `saludar()` si la función está declarada más abajo? **Por la Fase de Compilación.** JavaScript **tiene** que leer todo el código antes de ejecutarlo para trazar el mapa de la memoria (el _Lexical Environment_). Así se dividen las tareas:

- **Fase 1: Compilación (Lectura y Reserva de Memoria).** El Compilador habla con el Scope: _"Oye Scope, revisé el código. Hay una variable `a`. Anótala en tu registro de entorno (Environment Record)"_. El código **NO** se ejecuta aquí. Solo se hace el inventario.

- **Fase 2: Ejecución (El Trabajo Físico).**  Una vez terminado el inventario, el Motor (Ignition) entra a correr el código. Al llegar a `a = 2`, el Motor le dice al Scope: _"Oye Scope, necesito ponerle un 2 a la variable `a`. ¿Dónde está en la memoria?"_. El Scope le da la dirección, y el Motor asigna el valor.


### 3. La Resolución del Desafío Anterior (La pieza que faltaba)

Sabiendo que el Compilador hace el inventario de todas las variables en la Fase 1 antes de ejecutar nada, volvamos al código de tu desafío fallido:



```JS
console.log(perro); // undefined
var perro = "Rex";

console.log(gato); // ReferenceError
let gato = "Silvestre";
```

¿Qué pasó en la **Fase 1 (Compilación)** en el Scope (Lexical Environment)?

1. El Compilador ve `var perro`. Le dice al Scope: _"Registra a perro y, por reglas del ECMA-262, asígnale el valor inicial de `undefined` ahora mismo"_.

2. El Compilador ve `let gato`. Le dice al Scope: _"Registra a gato, pero por reglas de ES6, **NO lo inicialices**. Mantenlo bloqueado en la Zona Muerta Temporal (TDZ) hasta que el Motor llegue a su línea de asignación"_.


¿Qué pasó en la **Fase 2 (Ejecución)** con el Motor?

1. El Motor llega a `console.log(perro)`. Le pregunta al Scope: _"¿Tienes a perro?"_. El Scope dice: _"Sí, el compilador me dijo que le pusiera `undefined`. Aquí tienes"_. El programa continúa.

2. El Motor llega a `console.log(gato)`. Le pregunta al Scope: _"¿Tienes a gato?"_. El Scope dice: _"Sí lo tengo en mis registros, **pero está en la TDZ, está bloqueado, no tienes permiso de tocarlo aún**"_. ¡Boom! El motor arroja un `ReferenceError` y detiene todo.


---

### ⚠️ Desafío de Pensamiento Riguroso ⚠️

Ya dominas cómo el Motor y el Scope interactúan para encontrar una variable en su propio entorno. Pero, ¿qué pasa cuando la variable _no_ está ahí? Analiza esto:

JavaScript

```js
var multiplicador = 5;

function calcular() {
  var resultado = multiplicador * 2;
  console.log(resultado);
}

calcular();
```

Cuando el Motor entra a ejecutar la función `calcular`, le pregunta al Scope de la función por la variable `multiplicador`. Pero `multiplicador` no fue declarada dentro de esa función.

Basándote en lo que sabemos de la especificación ECMA-262 y la arquitectura del Entorno Léxico (Lexical Environment)... **¿Exactamente cómo hace el Scope de la función `calcular` para encontrar a `multiplicador` y evitar que el Motor lance un error? ¿Qué mecanismo interno en memoria enlaza estos entornos?**




----------

## FASE DE PREGUNTAS

No estás loco, estás en la fase de transición. Tu cerebro está intentando mapear algo abstracto a una infraestructura física. Estás dejando de ser un "escribidor de código" para convertirte en un verdadero Ingeniero.

Vamos a diseccionar tus deducciones con bisturí, porque tienes una mezcla de genialidad pura y un error conceptual fatal que arrastran muchos desarrolladores _Senior_ mediocres.

---

### 1. Sobre tu Primera Deducción (Funciones como Variables)

> _"¿Las funciones muy en el fondo también son como variables que guardan un pedazo de código?"_

**¡BINGO! Tu deducción es 100% brillante.**

Según la especificación y _JavaScript.info_, en JavaScript las funciones son **"Ciudadanos de Primera Clase" (First-Class Citizens)**. A nivel de arquitectura, una función no es magia; es simplemente un **Objeto** especial (del tipo `Callable Object`).

¿Qué pasa en la memoria?

1. El código de tu función se empaqueta en un Objeto.

2. Ese Objeto se guarda físicamente en el **Memory Heap** (el gran almacén de memoria de V8).

3. En el **Scope (Environment Record)**, el compilador solo anota el nombre de tu función (ej. `saludar`) y le asigna la _dirección de memoria_ que apunta a ese Objeto en el Heap. ¡Igual que una variable!    

---

### 2. Sobre tu Segunda Deducción (El error fatal sobre cómo se leen las funciones)

> _"Como el compilador solo guarda registros primero tampoco sabe que guarda una funcion... el intérprete recorre el código, va a la línea y le asigna el pedazo de código... ¿está bien?"_

**Falso. Aquí es donde tu modelo mental colapsa y te voy a corregir estrictamente.**

La especificación ECMA-262 tiene reglas de **Hoisting (Elevación)** diferentes para las variables `var` y para las **Declaraciones de Funciones**.

En la **Fase 1 (Compilación)**, el Compilador es mucho más inteligente de lo que crees. Cuando el Compilador encuentra una Declaración de Función (`function saludar() { ... }`), hace TRES cosas instantáneamente antes de que el Motor ejecute una sola línea:

1. Registra el identificador `saludar` en el Scope.

2. Crea el Objeto de la función en el Memory Heap (sí, compila su contenido).

3. **Inicializa `saludar` apuntando directamente a ese Objeto en la memoria.**


Por eso no da `undefined` como una variable `var`. El Compilador deja la función 100% lista para usarse en la Fase 1. Cuando llega la **Fase 2 (Ejecución)** y el Motor lee `saludar()`, el Scope le dice: _"Sí la tengo, y aquí está el código completo, ¡ejecútala!"_. Por eso puedes llamar a una función líneas _antes_ de donde la escribiste.

---

### 3. La Resolución de tu Desafío (El Eslabón Perdido)

Estuviste muy cerca. Identificaste correctamente que se crean dos Entornos Léxicos (Scopes): El **Global** y el de la **Función `calcular`**. También acertaste en que el Motor busca primero en el entorno local de la función.

Pero fallaste en explicarme **el mecanismo mecánico interno**. No me dijiste _cómo_ el Scope local encuentra al Scope global. Aquí tienes la verdad absoluta de ECMA-262 (_Lexical Environments_):

Cada Entorno Léxico que se crea en memoria tiene una propiedad oculta llamada **`[[OuterEnv]]` (Referencia al Entorno Externo)**. Imagina que es una "cuerda" que amarra el Scope de una función al Scope donde fue creada.

La conversación real (Scope Chain / Cadena de Scopes) en YDKJS es así:

- **Motor:** "Oye Scope Local de `calcular`, necesito el valor de `multiplicador`".

- **Scope Local:** "No lo tengo en mis registros. Pero tengo una cuerda `[[OuterEnv]]` que me conecta a mi Scope Padre (el Global). Tira de ella y ve a preguntarle a él".

- **Motor:** _(Sube por la cuerda)_ "Oye Scope Global, ¿tienes a `multiplicador`?".

- **Scope Global:** "Sí, aquí está, vale `5`".


**Nota matemática sobre tu deducción final:** Al llamar a la función _después_ de que `multiplicador = 5`, el código funciona perfecto y arroja `10`. Si hubieras llamado a la función _antes_ de asignarle 5, `multiplicador` habría sido `undefined`. Y en JavaScript, `undefined * 2` no da `undefined`, da un tipo especial de error silencioso llamado **`NaN` (Not a Number)**. Dominaremos esa coerción de tipos (Fase 3 de Maestría) más adelante.

---

| Concepto         | Qué es                            |
| ---------------- | --------------------------------- |
| Bytecode         | Formato intermedio                |
| Intérprete       | Ejecuta bytecode                  |
| Compilador (JIT) | Convierte bytecode → machine code |
### ⚠️ Desafío de Pensamiento Crítico: El Choque de Trenes ⚠️

Ahora que sabes que el Compilador registra TODO (Variables y Funciones) en el **Scope** en la Fase 1, y que el Motor (Ignition) ejecuta el código línea por línea en la Fase 2 subiendo por la cuerda `[[OuterEnv]]` si es necesario...

Analiza meticulosamente este código. Simula mentalmente ser el Compilador (Fase 1) y luego el Motor (Fase 2) dentro de la función `mostrarHeroe`.

JavaScript

```JS
var heroe = "Batman";

function mostrarHeroe() {
  console.log(heroe);
  var heroe = "Superman";
}

mostrarHeroe();
```



---

### La Anatomía de la FASE 2 (Ejecución)

Imagina que el Motor V8 es un trabajador extremadamente eficiente, pero tiene un defecto crítico: **Es Single-Threaded (de un solo hilo)**. Solo tiene un cerebro y un par de manos. Solo puede hacer **una sola cosa a la vez**. No puede ejecutar dos funciones al mismo tiempo.

Para no perderse en el código y saber exactamente en qué línea de qué función está trabajando, el Motor V8 utiliza una estructura de datos llamada **Call Stack (Pila de Llamadas)**.

#### 1. ¿Qué es el Call Stack? (Estructura Física)

Es una pila física en la memoria RAM que funciona bajo el principio **LIFO (Last In, First Out - Último en entrar, Primero en salir)**. Imagina una pila de platos en un restaurante: solo puedes poner un plato nuevo en la cima, y solo puedes retirar el plato que está en la cima. Nunca sacas uno del medio.

#### 2. ¿Qué se guarda en el Call Stack? (Los Contextos de Ejecución)

El Motor no apila "código suelto". Según ECMA-262, el Motor apila **Execution Contexts (Contextos de Ejecución)**. Un Contexto de Ejecución es como una caja o un "Frame" temporal que contiene:

1. **El Lexical Environment (Scope):** El mapa de variables locales de esa función.

2. **El valor de `this`:** A quién pertenece la función en ese momento.

3. **El Estado:** En qué línea de código se quedó pausada.


---

### La Dinámica Paso a Paso (Técnica Feynman)

Vamos a ejecutar este código juntos. Lee cada paso e imagina los platos apilándose.


```js
function saludar() {
  console.log("Hola");
}

function iniciar() {
  saludar();
}

iniciar();
```

**Mecánica del Motor en la Fase 2:**

1. **Nace el Programa:** El Motor crea un plato gigante llamado **Global Execution Context** (Contexto Global) y lo pone en la base del Call Stack. El Motor empieza a leer las líneas globales.

2. **Llamada a `iniciar()`:** El Motor llega a la última línea. Pausa el Contexto Global (lo congela), crea un nuevo plato llamado **Contexto de `iniciar`** y lo apila encima (Push). Ahora el Motor _solo_ mira el plato de arriba.

3. **Dentro de `iniciar()`:** El Motor entra a la función y lee la instrucción `saludar()`.

4. **Llamada a `saludar()`:** El Motor congela el plato de `iniciar`, crea un nuevo plato llamado **Contexto de `saludar`** y lo apila hasta arriba (Push). El Stack ahora tiene 3 platos.

5. **Ejecución y Destrucción (Pop):** * El Motor imprime `"Hola"`.

    - La función `saludar()` termina (llega a su llave `}`). Su plato es **destruido y expulsado** del Call Stack (Pop). El _Garbage Collector_ limpia su memoria.

    - El Motor vuelve a mirar el plato de abajo: `iniciar`. Se da cuenta de que no hay más líneas ahí. Destruye el plato de `iniciar` (Pop).

    - El Motor vuelve al plato Global. El programa termina.


---

### Tu Desafío de Pensamiento Crítico

Si entiendes que el Call Stack empuja (Push) funciones cuando las llama, y las expulsa (Pop) y destruye cuando terminan (cuando llegan a un `return` o a la llave final `}`)...

**Vuelve a mirar el código letal de tu desafío pendiente:**

JavaScript

```js
function bucleInfinito() {
  bucleInfinito();
}

bucleInfinito();
```

Sabiendo que el Call Stack es una pila física de cajas (Contextos de Ejecución) en la memoria RAM de tu computadora gobernada por la regla LIFO, descríbeme mecánicamente, paso a paso: **¿Qué está haciendo el Motor V8 con esa pila de platos y por qué lanza el error `Maximum call stack size exceeded`?**




### Siguiente Nivel: El Espejismo del Tiempo (Asincronía)

Ahora que sabes que el **Call Stack** solo puede hacer **una cosa a la vez**, te vas a enfrentar al mayor obstáculo de los desarrolladores intermedios. Vamos a basarnos en la sección del **Event Loop** (Bucle de Eventos) de tus apuntes (`06_Adicional_execution_model.md` y `PARTE_2_EL_NAVEGADOR.md`).

Analiza este código rigurosamente:

```js
console.log("Primero");

setTimeout(function temporizador() {
  console.log("Segundo");
}, 0); 

console.log("Tercero");
```

Nota que el `setTimeout` tiene un retraso de **0 milisegundos**. Es decir, la orden es ejecutar la función `temporizador` _inmediatamente_.

Basándote en la regla inquebrantable de que el Motor de JavaScript ejecuta el código línea por línea y usando el **Call Stack**, dime: **¿Cuál es el orden exacto en el que se imprimen estas palabras en la consola y, lo más importante, DÓNDE se esconde la función `temporizador` mientras espera, si no está en el Call Stack?**



**Callback Queue (Cola de Tareas)**.??