---
Area: INFORMATICA
tema: " MARKDOWN HIPERVINCULOS"
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

- 1.- HIPERVINCULOS BASICOS Y AUTOMATICOS
    - ENLACES AUTOMATICOS
- 2.- ENLACES DE REFERENCIA
- 3.- INSERCION DE IMAGENES
- 4.- IMAGENES COMO ENLACES (ANIDAMIENTO)
```


## 1.- HIPERVINCULOS BASICOS Y AUTOMATICOS

hipervinculo no es mas que una forma de referenciar hacia otra parte llevandolo o indexando el contenido en el mismo lugar

Para crear un enlace debes seguir este formato corchetes seguidos de parentesis `[ir a google](https://www.google.com)

como notaras esto te llevara a google.com

[ir a google](https://google.com)

### ENLACES AUTOMATICOS

si solo necesitas mostrar la url directa o correo lo encierras entre signos de mayor y menor que

<https://google.com>

esto ya no te muestra un texto que te diga ir a tal lugar es un poco menos amigable como podras ver

## 2.- ENLACES DE REFERENCIA

SI LLEGAS A HACER UN TEXTO Y AL REALIZARLO OCURRE QUE PUEDES INSERTAR UN URL ENORME POR EJEMPLO UN VIDEO DE TIKTOK QUE AVECES TE DA UN TEXTO ENORME Y ESO HARA ILEGIBLE EL TEXTO QUE ESTAS REDACTANDO ASI QUE TE EXIJO QUE APRENDAS ENLACES POR REFERENCIA QUE LO QUE HACE ES [Google]
: https://google.com

## 3.- INSERCION DE IMAGENES

MARKDOWN NO INCRUSTA IMG DIRECTAMENTE EN EL ARCHIVO SINO QUE LOS LLAMA DESDE UNA DIRECCION LOCAL EN TU PC O UNA URL EN INTERNET

LA SINTAXIS ES IGUAL A LOS HIPERVINCULOS DE WEB CON NOMBRE A LA URL 
`![texto alternatico de la imagen](url de internet de la img)`
pero al principio tiene un singo de exclamacion:

```
[HACKER PRO GENIO](https://static.vecteezy.com/system/resources/previews/025/463/773/non_2x/hacker-logo-design-a-mysterious-and-dangerous-hacker-illustration-vector.jpg)
```

![HACKER GENIO|479](https://static.vecteezy.com/system/resources/previews/025/463/773/non_2x/hacker-logo-design-a-mysterious-and-dangerous-hacker-illustration-vector.jpg)

## 4.- IMAGENES COMO ENLACES (ANIDAMIENTO)

SI LO QUE DESEAS ES QUE AL HACER CLICK EN UNA IMAGEN VAYA A UNA WEB ES USAR AMBOS QUE APRENDIMOS DE HIPERVINCULO E IMAGENES

`[![HACKER PRO GENIO](https://static.vecteezy.com/system/resources/previews/025/463/773/non_2x/hacker-logo-design-a-mysterious-and-dangerous-hacker-illustration-vector.jpg)](https://www.hackthebox.com/)`

[![HACKER PRO GENIO|560](https://static.vecteezy.com/system/resources/previews/025/463/773/non_2x/hacker-logo-design-a-mysterious-and-dangerous-hacker-illustration-vector.jpg)](https://www.hackthebox.com/)
