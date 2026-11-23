# STALK

Aplicación estática en español para organizar enlaces a perfiles públicos de redes sociales. Diseño oscuro rojo/negro, adaptable a móviles y lista guardada en `localStorage`.

## Publicar en GitHub Pages

1. Descomprime `stalk-github-pages.zip`.
2. Crea un repositorio en GitHub y sube `index.html`, `styles.css`, `app.js` y este `README.md` a la raíz.
3. En el repositorio, abre **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
6. Espera a que GitHub Pages publique el sitio; aparecerá el enlace en esa misma sección.

No necesita Node, compilación ni claves API.

## Privacidad y alcance

STALK no hace scraping, no inicia sesión en redes sociales, no accede a perfiles privados ni evade controles de acceso. La búsqueda construye enlaces para abrir perfiles por nombre de usuario; la lista se almacena únicamente en el navegador mediante `localStorage`.
