# Challenge Amigo Secreto

![Amigo Secreto](assets/amigo-secreto.png)

## Tópicos
- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Dependencias](#dependencias)
- [Contribuciones](#contribuciones)
- [Problemas Conocidos y Soluciones](#problemas-conocidos-y-soluciones)
- [Licencia](#licencia)
- [Agradecimientos](#agradecimientos)
- [Contacto](#contacto)


¡Bienvenido al proyecto "Challenge Amigo Secreto"! Este es un ejercicio educativo diseñado para practicar conceptos fundamentales de lógica de programación utilizando HTML, CSS y JavaScript. La aplicación permite a los usuarios agregar nombres de amigos a una lista y realizar un sorteo aleatorio para seleccionar un "amigo secreto". Perfecto para aprender variables, condicionales, funciones y manipulación del DOM.

## Descripción

Este proyecto forma parte de un desafío de Alura One, enfocado en reforzar habilidades de desarrollo web. La interfaz está prediseñada con HTML y CSS, mientras que la lógica se implementa en JavaScript. Es una herramienta sencilla pero efectiva para organizar un juego de amigo secreto de manera interactiva.

## Características

Agregar nombres: Se Ingresa nombres de amigos y son añádidos  a una lista visible.
Validación: Alerta si el campo está vacío o si el nombre ya existe.
Sorteo aleatorio: Selecciona un amigo secreto de forma aleatoria desde la lista.
Interfaz amigable: Diseño limpio y responsive adaptado a cualquier dispositivo.


## Instalación

Clona el repositorio:
Abre una terminal y ejecuta:git clone https://github.com/badolgm/challenge-amigo-secreto_esp-main.git


Navega al directorio:
Usa:  cd challenge-amigo-secreto_esp-main


No requiere dependencias externas: Solo necesitas un navegador moderno (Chrome, Firefox, Edge).
Abre el proyecto:
Haga doble clic en index.html o ábralo desde un servidor local (e.g., Live Server en VS Code) para una experiencia optimizada.


## Uso

Ingresa un nombre en el campo de texto "Escribe un nombre".
Haz clic en "Añadir" para agregar el nombre a la lista.
Repite el proceso para agregar más amigos.
Haz clic en "Sortear amigo" para ver el resultado aleatorio.
Los nombres y el resultado se muestran dinámicamente en la página.


## Estructura del Proyecto
challenge-amigo-secreto_esp-main/
├── index.html         # Estructura y contenido de la página
├── app.js            # Lógica de programación (JavaScript)
├── style.css         # Estilos prediseñados
├── assets/           # Imágenes y recursos (amigo-secreto.png, play_circle_outline.png)
└── README.md         # Este archivo


## Dependencias

Google Fonts: Fuentes Inter y Merriweather cargadas vía CDN.
No se requieren bibliotecas adicionales ni paquetes NPM.


##Contribuciones
¡Este proyecto está abierto a mejoras! Si deseas contribuir:

Haz un fork del repositorio.
Crea una rama (git checkout -b feature/nueva-funcionalidad).
Comitea tus cambios (git commit -m "Descripción del cambio").
Haz push a tu rama (git push origin feature/nueva-funcionalidad).
Abre un Pull Request en GitHub.


## Problemas Conocidos y Soluciones

Alerta de lista vacía: Si intentas sortear sin amigos, aparecerá una alerta. Asegúrate de agregar al menos un nombre.
Duplicados: La validación impide agregar nombres repetidos; ignora esta alerta si es intencional.

Para reportar otros problemas, crea un issue en el repositorio.

## Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE).  
Eres libre de usar, modificar y distribuir este software, siempre que se mantenga el aviso de copyright y la misma licencia en las copias.


## Agradecimientos

Gracias a Alura One por el desafío y los recursos proporcionados.
Inspirado en la comunidad de aprendizaje y desarrollo web.


## Contacto

Autor: Bernardo Gómez 
Correo: badolfogm@gmail.com 
¿Dudas? Abre un issue o contáctame directamente.
