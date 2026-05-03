---
tema_principal: FUNDAMENTOS DE MARKDOWN
fecha: 07-04-2026
tags:
  - "#Markdown"
  - "#lenguaje"
  - "#fundamentos"
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

- CONCEPTO FUNDAMENTAL
    - 1.-JERARQUIA DE ENCABEZADOS
        - REGLAS ESTRICTAS DEL USO DE TITULOS
    - 2.- PARRAFOS Y SALTOS DE LINEA
    - 3.- ENFASIS TEXTUAL (TIPOGRAFIA)
        - NEGRITA
        - CURSIVA
        - TACHADO
        - COMBINACIONES
    - 4.- REGLAS HORIZONTALES (SEPARADORES)
        - ADVERTENCIA:
    - encabezado mal hecho
        - INTERPRETE
```

# CONCEPTO FUNDAMENTAL

> ATENCION
> Es un lenguaje de marcado ligero con el proposito de dar formato al texto de forma sencilla e incluso convertirlo en html u otros formatos sin depender de programas especiales de edicion

## 1.-JERARQUIA DE ENCABEZADOS

Para que no sea un caos todo al igual que en html5 tenemos similares que sus etiquetas pero en este caso esta definido por almohadillas siendo una almohadilla la que tiene mas relevancia # dos con menos y asi sucesivamente hasta Titulo de nivel 6 ######

### *REGLAS ESTRICTAS DEL USO DE TITULOS*


Es importante seguir en orden la jerarquia de titulos y usar una sola vez el titulo de nivel 1 que es h1 o una almohadilla #  asi que ni se te ocurra usarla mas de una vez...

## 2.- PARRAFOS Y SALTOS DE LINEA

Si escribes una línea de texto, presionas "Enter" una sola vez y sigues escribiendo, Markdown ignorará ese salto de línea, considerará que todo pertenece al mismo párrafo y unirá el texto en la renderización final

Para separar párrafos correctamente, es obligatorio que dejes una línea completamente en blanco entre ellos

Si lo que necesitas es forzar un salto de línea (quebrar la línea) pero manteniéndote dentro del mismo bloque de párrafo, debes presionar la barra espaciadora dos veces al final de la línea antes de presionar "Enter"
. La indentación y los espacios son vitales para que el motor interprete tus intenciones [interprete](#interprete)


## 3.- ENFASIS TEXTUAL (TIPOGRAFIA)

### NEGRITA
PARA APLICAR ESTE FORMATO A UN PARRAFO O PALABRA SE EMPIEZA EL TEXTO CON ** DOS ASTERISCOS DE TAL MODO QUE QUEDE ASI:
				**TEXTO EN NEGRITA**
### CURSIVA 
PARA ESTE FORMATO SOLO APLICAMOS UN ASTERISCO O UN GUION BAJO EN EL TEXTO QUE QUEREMOS APLICAR ( ** )( __ )
				*TEXTO EN CURSIVA*
				_TEXTO EN CURSIVA CON GUION BAJO_
				
### TACHADO
PARA ESTE FORMATO SE USA DOS BIRIGULILLAS 
				~~texto tachado~~

### COMBINACIONES
Podemos combinar los mismos anteriores 
			**~~_Texto_~~**

## 4.- REGLAS HORIZONTALES (SEPARADORES)

SE REALIZAN PARA HACER SEPARACIONES EN EL TEXTO LAS CUALES SE HACEN CON TRES GUIONES --- O TRES GUIONES BAJOS ___ O TRES ASTERISCOS *** 

---
***
___
### ADVERTENCIA:
ASEGURATE DE QUE HAYA UN SALTO DE LINEA ANTES DE APLICAR ESTE FORMATO PUES SI NO LO HACES MARKDOWN CREERA QUE ESTAS USANDO LA SINTAXIS DE ENCABEZADO #encabezadoMarkdown

encabezado mal hecho
---



***negrita y cursiva a la vez tres asteriscos***


#### INTERPRETE
es como que no compila pero si entiende el codigo es como python java u otros que no son compilados


