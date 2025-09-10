# 🎁 Challenge · Amigo Secreto (Alura One)

![Alura One License: MIT](https://img.shields.io/badge/License-MIT-green.svg) ![Stack: HTML·CSS·JS](https://img.shields.io/badge/Stack-HTML%C2%B7CSS%C2%B7JS-blue.svg)

## 🔥 Resumen rápido

Challenge Amigo Secreto es un ejercicio práctico del programa Alura One para aprender lógica, eventos y manipulación del DOM en JavaScript. Permite agregar nombres, validar duplicados, y realizar un sorteo aleatorio. Incluye un atajo para añadir nombres pulsando Enter (sin usar mouse).

## 📚 Índice

- [✨ Características](#-características)
- [📷 Demo / Vista rápida](#-demo--vista-rápida)
- [⚙️ Instalación](#️-instalación)
- [▶️ Uso](#️-uso)
- [⌨️ Atajo — Añadir con Enter](#️-atajo--añadir-con-enter)
- [🧩 Explicación del código (app.js)](#-explicación-del-código-appjs)
- [📂 Estructura del proyecto](#-estructura-del-proyecto)
- [♿ Accesibilidad y buenas prácticas](#-accesibilidad-y-buenas-prácticas)
- [🐞 Problemas comunes y soluciones](#-problemas-comunes-y-soluciones)
- [🤝 Contribuciones](#-contribuciones)
- [📜 Licencia](#-licencia)
- [✉️ Contacto](#️-contacto)

## ✨ Características

- ➕ **Añadir nombres** a la lista (validación: no vacío, no duplicados)
- ⌨️ **Atajo** para añadir con la tecla Enter
- 🎲 **Sortear** un amigo secreto aleatoriamente
- 📱 **Interfaz responsive** y accesible (aria-live para resultados)
- 🔧 **Sin dependencias** externas — funciona en cualquier navegador moderno

## 📷 Demo / Vista rápida

1. Abrir `index.html` en tu navegador
2. La UI: campo de texto para añadir nombres, botón Añadir, lista de nombres y botón Sortear amigo con ícono

> 💡 **Tip:** Si quieres, añade capturas en `assets/` y colócalas aquí con `![demo](./assets/demo.png)`

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/badolgm/challenge-amigo-secreto_esp-main.git
cd challenge-amigo-secreto_esp-main

# Abrir index.html (doble clic) o usar Live Server en VS Code para mejor experiencia
```

## ▶️ Uso

1. **Escribe el nombre** en el campo "Escribe un nombre"
2. **Pulsa Enter** o haz clic en **Añadir**
3. Los nombres aparecerán en la lista
4. Cuando quieras, pulsa el botón **Sortear amigo** para obtener el resultado (aparecerá en la sección de resultados)

## ⌨️ Atajo — Añadir con la tecla Enter

Añade este fragmento al final de tu `app.js` (si aún no lo tienes). No cambia nada visual ni el CSS:

```javascript
// --- Habilitar "Enter" para añadir amigo ---
const inputAmigo = document.getElementById('amigo');
if (inputAmigo) {
  inputAmigo.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // evita comportamiento por defecto
      agregarAmigo();         // llama a la función existente que añade el nombre
      inputAmigo.focus();     // mantiene el cursor listo para el siguiente nombre
    }
  });
}
```

**Breve explicación:** escuchamos la tecla Enter en el input con id `amigo`. Si se presiona, prevenimos el comportamiento por defecto (evitar submit/refresh), llamamos a `agregarAmigo()` y dejamos el foco en el campo.

## 🧩 Explicación del código (app.js)

Flujo y funciones clave. A continuación se explica el patrón común usado en este tipo de proyecto. Ajusta nombres si en tu archivo existen variaciones.

### 📊 Flujo de datos

1. El usuario escribe un nombre → input `#amigo`
2. Al pulsar **Añadir** o **Enter**, se valida y se empuja el nombre a un array `amigos`
3. Se actualiza la vista (`renderLista()`), mostrando la lista actualizada
4. Al pulsar **Sortear amigo**, se calcula un índice aleatorio y se muestra el resultado (en `#resultado` o con alert)

### 🔧 Funciones habituales

**`let amigos = [];`**  
Array donde se guardan los nombres.

**`function agregarAmigo()`**
- Lee `document.getElementById('amigo').value.trim()`
- Valida (no vacío, no duplicado)
- Si pasa, hace `amigos.push(nombre)` y llama a `renderLista()` y limpia input
- Muestra mensajes de alerta o toast según corresponda

**`function renderLista()`**
- Toma `amigos` y renderiza `<li>` dentro de `#listaAmigos`
- Actualiza conteos y atributos ARIA si procede

**`function sortearAmigo()`**
- Si `amigos.length === 0`, alerta y sale
- Genera índice: `const idx = Math.floor(Math.random() * amigos.length);`
- Resultado: `const ganador = amigos[idx];`
- Muestra ganador en `#resultado` (o alert) y opcionalmente lo elimina o marca como asignado

**`function limpiarInput()`**
- `input.value = ''` y `input.focus()`

### 💡 Buenas prácticas en el archivo JS

- Mantén todas las referencias por id y evita `onclick` inline
- Centraliza las validaciones (útil si más adelante añades edición/eliminación)
- Si quieres, convierte `alert/prompt` por modales HTML para mejor UX

## 📂 Estructura del proyecto

```
challenge-amigo-secreto_esp-main/
├── index.html         # Interfaz (HTML)
├── app.js             # Lógica JS (agregar, validar, sortear)
├── style.css          # Estilos del proyecto (no modificar por ahora)
├── assets/
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md
```

## ♿ Accesibilidad y buenas prácticas

- ✅ Usa `alt` descriptivos en imágenes (`alt="Imagen representativa de Amigo Secreto"`)
- ✅ Usa `aria-live="polite"` en el contenedor donde aparece el resultado para que los lectores de pantalla anuncien cambios
- ✅ Asegura contraste de color en botones y texto (tu `style.css` ya cuida esto)
- ✅ Mantén el foco en el campo tras añadir un nombre (`input.focus()`)

## 🐞 Problemas comunes y soluciones

| **Problema** | **Solución** |
|--------------|--------------|
| **No se añade nombre al presionar Enter** | Asegúrate de que el snippet del atajo esté agregado y que el id del input sea `amigo` |
| **Nombres duplicados aparecen** | La función `agregarAmigo()` debe comprobar `if (amigos.includes(nombre))` y mostrar mensaje |
| **Sortear con lista vacía** | `if (amigos.length === 0) { alert('Agrega al menos un nombre'); return; }` |

## 🤝 Contribuciones

¿Quieres mejorar el reto?

1. **Fork** del repo
2. **Crear branch:** `git checkout -b feature/tu-mejora`
3. **Commit claro:** `git commit -m "feat: mejora X"`
4. **Push** y abre PR describiendo los cambios

### 🚀 Guía rápida para mantener tu copia local

```bash
git add .
git commit -m "Tu mensaje"
git push origin main
```

## 📜 Licencia

Este proyecto se publica bajo [MIT License](LICENSE). Ver archivo LICENSE para texto completo.

## ✉️ Contacto

**Autor:** Bernardo Gómez (badolfogm)  
**Email:** badolfogm@gmail.com  
**Repo:** [https://github.com/badolgm/challenge-amigo-secreto_esp-main](https://github.com/badolgm/challenge-amigo-secreto_esp-main)

---

⭐ **¡Si te ha servido, dale una estrella al repo!** ⭐