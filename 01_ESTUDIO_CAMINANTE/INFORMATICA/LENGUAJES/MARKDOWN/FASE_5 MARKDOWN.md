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

- 1.- LOS LIMITES DE MARKDOWN Y LA INCRUSTACION DE HTML
    - 2.- GITHUB FLAVORED MARKDOWN (GFM)
        - NOTAS AL PIE DE PAGINA
        - ALERTAS TIPOGRAFICAS
        - MENCIONES Y REFERENCIAS DE REPOSITORIOS
```

# 1.- LOS LIMITES DE MARKDOWN Y LA INCRUSTACION DE HTML

Markdown es un lenguaje de marcado que fue diseñado para ser ligero y sencillo de tal manera que carece de poder poner una estilizacion muy especifica o a gusto asi que para hacer esto tendremos que hacer uso de html

markdown es suficientemente lista para incrustar codigo simple de html sin romper el formato del documento con `div span p h1 etc...`

```
AQUI ESTOY PONIENDO EL CODIGO DE UN IFRAME INCRUSTACION DE VIDEO DE YOUTUBE


<iframe width="560" height="315" src="https://www.youtube.com/embed/OqjX2v_JBRA?si=K1Yd4qTSB1LRXnRa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```
#MUSICASTUDY
<iframe width="560" height="315" src="https://www.youtube.com/embed/OqjX2v_JBRA?si=K1Yd4qTSB1LRXnRa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
```MARKDOWN
TAMBIEN USARE ESTE EJEMPLO:

`<p style="text-align: center; color: red;">Este texto estará centrado y en rojo.</p>`
```

<p style="text-align: center; color: red;">Este texto estará centrado y en rojo.</p>
>[!TIP] NOTA CLAVE 
>ES RECOMENDABLE USAR LO MAS POCO POSIBLE HTML
>

## 2.- GITHUB FLAVORED MARKDOWN (GFM)

EL MARKDOWN CLASICO NO FUE SUFICIENTE PARA DOCUMENTAR PROYECTOS DE PROGRAMACION ASI QUE SE OPTO POR CREAR SU PROPIA VERSION EXTENDIDA (GFM)

### NOTAS AL PIE DE PAGINA
SI AGREGAMOS LO SIGUIENTE LO HIPERVINCULARA A UNA NOTA AL FINAL DEL PIE DE PAGINA:

  nota al pie de pagina[^1]

```markdown
nota al pie de pagina[^1]

---------------------------------------------------------------------------------


[^1]: aqui estara a detalle ese punto....
```


### ALERTAS TIPOGRAFICAS

SI EN TU INFORMACION HAY TEXTOS IMPORTANTES QUE SI EL USUARIO IGNORA PODRIA SER TERRIBLE ENTONCES LO QUE SE DEBE HACER ES DESTACARLA VISUALMENTE 
`TODO DEBE IR DENTRO DE [!TIPO_ALERTA]`

+ WARNING 
+ CAUTION
+ NOTE
+ TIP
+ IMPORTANT

EL RENDERIZADOR APLICA COLORES AUTOMATICAMENTE

>[!WARNING] MENSAJE WARNING 

>[!DANGER] MENSAJE DANGER

>[!NOTE] MENSAJE NOTA

>[!TIP] MENSAJE TIP

>[!IMPORTANT] MENSAJE IMPORTANT

#INVESTIGAR_MAS

### MENCIONES Y REFERENCIAS DE REPOSITORIOS

USADOS PARA CRUZAR INFORMACION

+ @USUARIO
+ EL NUMERAL PARA UN ISSUE #ISSUE

:smile:

>[!important] NO TODO FUNCIONA EN TODO LUGAR
>AL PARECER ESTOS ULTIMOS DE GFM NO FUNCIONAN MUY BIEN EN OBSIDIAN 















[^1]:AQUI ESTA LA EXPLICACION DE NOTAS AL PIE DE PAGINA


