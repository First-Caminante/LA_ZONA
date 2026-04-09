---
Area: INFORMATICA
tema: Markdown Mastery
tags:
  - "#informatica"
  - "#lenguaje"
  - "#Markdown"
fecha: 2026-04-08
---
```insta-toc
---
title:
  name:
  level:
  center:
exclude:
style:
  listType:
omit:
levels:
  min:
  max:
---

# INDICE

- 1.- INSERCION DE CODIGO INLINE, BLOQUES
- 2.-TABLAS
- 3.- ESCAPE DE CARACTERES
```

---

## 1.- INSERCION DE CODIGO INLINE, BLOQUES

COMO PROFESIONALES QUE SOMOS NO PODEMOS MEZCLAR TEXTO COMUN CON CODIGO POR ALGO TODO TIENE FORMATO Y EL CODIGO DE LENGUAJE DE PROGRAMACION LO TIENE

SI SOLO PRECISAS MOSTRAR UN TIPO DE VARIABLE O UNA PALABRA RESERVADA LO HACES CON COMILLA INVERTIDA INLINE 

```markdown

para hacer el codigo en linea usar solo una comilla simple invertida:

`aqui viene tu codigo simple

```

`var
`let
`python

Y EN BLOQUE TRES COMILLAS INVERTIDAS...

```javascript

var hola=1
let 
if
```
---
```python
num = 5
```

## 2.-TABLAS
Para crear tablas requieres logica y presicion visual para que markdown lo haga de forma responsiva si respetas sus delimitadores

* Para construirlas necesitamos separar las columnas con un delimitador barra larga | 
* la primera linea de la tabla siempre sera el encabezado asi que debes colocar una linea separadora por guiones para la primera fila

| hola | nop |
| ---- | --- |
|      |     |
```markdown

ese fue un ejemplo de poner lo siguiente
| hola | nop |
| --- | --- |
```

+ si quieres que el texto se alinee en una direccion debes usar como delimitadores : y ya no la barra vertical |

| HOLA | CAMINANTE |
| :--: | --------- |
|      |           |
```markdown
ese fue el ejemplo para una tabla que esta centrada y el codigo es el siguiente

| HOLA | CAMINANTE |
|:---: | :---: |

```

EN CASO DE QUERER CENTRADO O IZQ O DERECHA:

+ :--- -> PARA QUE ESTE ALINEADO A LA IZQUIERDA
+ ---: -> PARA QUE ESTE ALINEADO A LA DERECHA
+ :---: -> PARA QUE TODO ESTE CENTREADO
+ SI QUIERES UNIR CELDAS ARRIBA O AL COSTADO MARKDOWN SE QUEDA CORTA Y USARAS HTML

## 3.- ESCAPE DE CARACTERES

EL ESCAPE DE CARACTERES COMO EN TODO LENGUAJE DE PROGRAMACION ES USANDO UNA BARRA INVERTIDA \ PARA ESCAPAR DE CARACTERES RESERVADOS DEL LENGUAJE COMO SON 
+ \#
+ \`
+ \\
