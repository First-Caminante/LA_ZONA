
Entendido. Vamos directo al grano, sin rodeos teóricos innecesarios para alguien que ya conoce las entrañas del software. Para ti, el pseudocódigo no es más que una representación abstracta de un **Abstract Syntax Tree (AST)** expresada en lenguaje humano (generalmente español).

Aquí tienes el curso intensivo y completo de pseudocódigo estándar (estilo PseInt), diseñado estructuralmente para que domines su sintaxis, sus reglas y sus equivalencias de inmediato.

---

## Módulo 1: Anatomía Externa y Tipos de Datos

En pseudocódigo, todo programa es un bloque cerrado. No existen funciones sueltas ni código flotando en el vacío.

### Estructura Esquelética


```
Algoritmo MiPrimerPrograma
    // Los comentarios se escriben con doble barra
FinAlgoritmo
```


### Tipos de Datos Primitivos

A diferencia de Python (que es de tipado dinámico), el pseudocódigo académico suele exigir la declaración explícita del tipo de dato para forzar al alumno a entender la asignación de memoria.

- **Entero:** Números sin decimales (`10`, `-5`).

- **Real:** Números con punto decimal (`3.14`, `-0.5`).    

- **Caracter / Cadena:** Texto entre comillas (`"Hola"`, `'A'`).

- **Logico:** Valores booleanos (`Verdadero`, `Falso`).    

### Declaración e Inicialización

Se utiliza la palabra clave `Definir`. La asignación estándar no usa el signo `=`, sino la flecha de asignación `<-` (que representa la transferencia de un valor a una dirección de memoria).



```
Algoritmo ManejoVariables
    Definir edad Como Entero
    Definir precio Como Real
    Definir nombre Como Cadena
    Definir esMayor Como Logico
    
    edad <- 25
    precio <- 99.90
    nombre <- "Armando"
    esMayor <- Verdadero
FinAlgoritmo
```


---

## Módulo 2: Flujo IPO (Input, Process, Output)

El núcleo de la lógica algorítmica se basa en cómo interactúa la máquina con el exterior.

### 1. Salida de Datos (Output)

Se utiliza el comando `Escribir`. Puede imprimir literales, variables o combinaciones separadas por comas.


```
Escribir "El usuario se llama: ", nombre
```

### 2. Entrada de Datos (Input)

Se utiliza el comando `Leer`. Detiene la ejecución del hilo principal hasta que el usuario introduce un valor por teclado y presiona Enter.


```
Escribir "Introduce tu edad: "
Leer edad
```

---

## Módulo 3: Estructuras de Control Condicionales

Aquí es donde el flujo de ejecución deja de ser lineal.

### Condicional Simple y Compuesto (`Si-Entonces`)

Evalúa una expresión lógica. Si es verdadera, ejecuta el bloque `Entonces`. Si es falsa, salta al bloque `Sino`.

Plaintext

```
Si edad >= 18 Entonces
    Escribir "Acceso Autorizado."
Sino
    Escribir "Acceso Denegado."
FinSi
```

### Condicional Múltiple (`Segun`)

Es el equivalente al `switch` de C/Java o al `match` de Python moderno. Evalúa una variable y ejecuta la opción coincidente.

Plaintext

```
Segun opcion Hacer
    1:
        Escribir "Seleccionaste la opcion 1"
    2:
        Escribir "Seleccionaste la opcion 2"
    De Otro Modo:
        Escribir "Opcion no valida"
FinSegun
```

---

## Módulo 4: Estructuras Cíclicas (Bucles)

El pseudocódigo maneja tres tipos de bucles fundamentales. Presta especial atención al segundo, que difiere de los lenguajes tradicionales.

### 1. Bucle `Mientras` (Pre-condicional)

Evalúa la condición **antes** de entrar al bucle. Si la condición es falsa desde el inicio, el bloque jamás se ejecuta.

Plaintext

```
Definir contador Como Entero
contador <- 1

Mientras contador <= 5 Hacer
    Escribir "Iteracion numero: ", contador
    contador <- contador + 1 // Control de bucle
FinMientras
```

### 2. Bucle `Repetir-Hasta Que` (Post-condicional)

Ejecuta el bloque de código **al menos una vez** y evalúa la condición al final.

> **Alerta de Compilador:** A diferencia del `do-while` tradicional, este bucle se repite **mientras la condición sea FALSA** y se rompe en el momento exacto en que la condición se vuelve **VERDADERA**.

Plaintext

```
Definir clave Como Cadena

Repetir
    Escribir "Introduce la clave secreta:"
    Leer clave
Hasta Que clave = "1234" 
// Si la clave es "1234", la condicion es VERDADERA y el bucle termina.
```

### 3. Bucle `Para` (Controlado por Contador)

Ideal cuando conoces de antemano el número exacto de iteraciones. Define una variable de control, un límite superior y el tamaño del paso (incremento).

Plaintext

```
Definir i Como Entero

Para i <- 1 Hasta 10 Con Paso 2 Hacer
    Escribir "Valor actual de i: ", i
FinPara
// Imprimira: 1, 3, 5, 7, 9
```

---

## Módulo 5: Estructuras de Datos Lineales (Arreglos)

En pseudocódigo académico, los arreglos (arrays) son estáticos y de un solo tipo de dato. Se debe definir su tamaño explícitamente en memoria usando la palabra `Dimension`.

> **Nota de Indexación:** En la configuración estándar y académica de PseInt, los arreglos suelen comenzar en el **índice 1**, no en el 0. Ten esto en cuenta al explicarlo, aunque menciones que en Python se empieza desde 0.

Plaintext

```
Algoritmo ManejoArreglos
    Definir notas Como Entero
    Dimension notas[3] // Crea un espacio continuo para 3 enteros
    
    // Asignacion de valores
    notas[1] <- 85
    notas[2] <- 90
    notas[3] <- 78
    
    // Recorrido del arreglo
    Definir i Como Entero
    Para i <- 1 Hasta 3 Hacer
        Escribir "Nota ", i, ": ", notas[i]
    FinPara
FinAlgoritmo
```

---

## Matriz de Equivalencia Directa: Pseudocódigo vs Python

Para tu preparación mental, mapea la sintaxis que vas a enseñar (o usar de referencia) con el código real de Python que ellos terminarán escribiendo:

|**Componente Lógico**|**Sintaxis Pseudocódigo (PseInt)**|**Equivalencia en Python**|
|---|---|---|
|**Inicio del programa**|`Algoritmo Nombre`|_(No requiere, flujo directo)_|
|**Declaración**|`Definir x Como Entero`|_(No requiere, tipado dinámico)_|
|**Asignación**|`x <- 10`|`x = 10`|
|**Salida**|`Escribir "Hola"`|`print("Hola")`|
|**Entrada**|`Leer x`|`x = input()` _(o casteado como int/float)_|
|**Condicional**|`Si cond Entonces ... Sino ... FinSi`|`if cond:` ... `else:`|
|**Bucle Mientras**|`Mientras cond Hacer ... FinMientras`|`while cond:`|
|**Bucle Para**|`Para i <- 1 Hasta 10 Con Paso 1`|`for i in range(1, 11):`|
|**Fin del programa**|`FinAlgoritmo`|_(Fin de la indentación)_|

---

## Plantilla de un Algoritmo Completo Integrado

Este es un ejemplo de un script completo que integra Entrada, Proceso, Condicionales y Bucles. Consérvalo como tu código de referencia para entender la armonía del lenguaje.

Plaintext

```
Algoritmo SimuladorCajero
    Definir saldo, retiro Como Real
    Definir intentos Como Entero
    Definir clave Como Cadena
    
    saldo <- 1000.00
    intentos <- 0
    
    // Validacion de acceso
    Repetir
        Escribir "Ingrese su clave de acceso:"
        Leer clave
        intentos <- intentos + 1
    Hasta Que clave = "root" O intentos = 3
    
    Si clave = "root" Entonces
        Escribir "Acceso concedido. Su saldo es de: $", saldo
        Escribir "Cuanto desea retirar?"
        Leer retiro
        
        Si retiro <= saldo Entonces
            saldo <- saldo - retiro
            Escribir "Retiro exitoso. Nuevo saldo: $", saldo
        Sino
            Escribir "Fondos insuficientes."
        FinSi
    Sino
        Escribir "Cuenta bloqueada por exceso de intentos."
    FinSi
FinAlgoritmo
```