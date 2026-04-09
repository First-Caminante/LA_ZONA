---
tema: Markdown Mastery
nivel: Base Estructural
estado: 🟢 aprendiendo
prioridad: CRÍTICA
tags:
  - documentación
  - herramientas
  - "#Markdown"
  - "#lenguaje"
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

- ✍️ Markdown: El Lenguaje de la Zona
    - 🟢 Fase 1: Fundamentos y Estructura
        - Jerarquía de Encabezados
        - Énfasis y Párrafos
        - Divisiones Visuales
    - 🟡 Fase 2: Organización de la Información
        - Listas y Tareas
        - Citas (Blockquotes)
    - 🔵 Fase 3: Integración de Vínculos y Multimedia
        - Hipervínculos
        - Imágenes
    - 🔴 Fase 4: Código y Estructuras Complejas
        - Incrustación de Código
        - TABLAS
        - ESCAPE DE CARACTERES
    - FASE 5: INCRUSTACION HTML
    - FASE 6: MATEMATICAS LATEX
```
```
```

# ✍️ Markdown: El Lenguaje de la Zona

> [!IMPORTANT] Regla de Oro
> La maestría no se logra leyendo, se logra aplicando. Este documento es la especificación técnica de cómo se escribe en este Vault.

---

## 🟢 Fase 1: Fundamentos y Estructura

[[FASE_1 FUNDAMENTOS_MARKDOWN]]


### Jerarquía de Encabezados
Usa `#` seguido de un espacio. **Regla estricta:** Un solo H1 por documento.
- `# H1` → Título del documento.
- `## H2` → Secciones principales.
- `### H3` → Sub-secciones.

### Énfasis y Párrafos
- **Negrita**: `**texto**` o `__texto__`
- *Cursiva*: `*texto*` o `_texto_`
- ~~Tachado~~: `~~texto~~`
- **Combinado**: `**_Texto_**`

> [!TIP] Saltos de Línea
> Para un nuevo párrafo, deja una línea en blanco. 
> Para un salto de línea simple (forzado), deja **dos espacios** al final de la línea.  

### Divisiones Visuales
Usa tres guiones `---` para separar secciones lógicamente.

---

## 🟡 Fase 2: Organización de la Información
[[FASE_2_MARKDOWN]]
### Listas y Tareas
- **No ordenadas**: Usar `-`, `*` o `+`.
- **Ordenadas**: `1.`, `2.`, `3.`
- **Anidamiento**: Tabular o usar espacios antes del símbolo en la línea inferior.
- **Listas de Tareas**:
	- [ ] Pendiente: `[ ]`
	- [x] Completada: `[x]`

### Citas (Blockquotes)
Usa `>` para destacar info. Para anidar citas: `>> texto citado dentro de cita`.

---

## 🔵 Fase 3: Integración de Vínculos y Multimedia
[[FASE_3 MARKDOWN]]
### Hipervínculos
- **Estándar**: `[Texto](URL)`
- **Referencia**: (Mantiene el texto limpio)
  `[Texto][variable]` ... al final del doc: `[variable]: URL`

### Imágenes
`![Texto alternativo](Ruta_o_URL)`

---

## 🔴 Fase 4: Código y Estructuras Complejas

[[FASE_4 MARKDOWN]]
### Incrustación de Código
- **Inline**: ` `variable` ` para comandos cortos.
- **Bloques de código**: Usar tres comillas invertidas y especificar el lenguaje.

```javascript
// Ejemplo de resaltado de sintaxis
function exito() {
  console.log("Maestría en Markdown lograda.");
}
```

### TABLAS
APRENDERAS A REALIZAR TABLAS APARTIR DE --- Y ***

### ESCAPE DE CARACTERES
POR SI GUSTAS PONER EJEMPLOS Y SE CONVIERTEN EN MARKDOWN PERO NO ES LO QUE QUIERES...

## FASE 5: INCRUSTACION HTML

[[FASE_5 MARKDOWN]]

GFM TIPS [!CAUTION]

OTROS NO USADOS...

## FASE 6: MATEMATICAS LATEX

DIAGRAMAS MERMAID

[[FASE_6 MARKDOWN]]

	