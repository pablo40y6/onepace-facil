# One Pace Facil

Mini app web para movil con un boton grande para abrir el siguiente enlace de One Pace y guardar el progreso en el propio telefono.

## Que hace

- Muestra el siguiente punto a ver.
- Abre el enlace directo con un toque.
- Guarda el progreso en el movil.
- Se puede instalar en la pantalla de inicio como PWA.
- Incluye una lista precargada con enlaces de la pagina en espanol de One Pace.

## Como usar

1. Sube esta carpeta a cualquier hosting estatico:
   - GitHub Pages
   - Netlify
   - Vercel
   - tu propio servidor web
2. Abre la URL desde el movil.
3. Usa "Anadir a pantalla de inicio" o el boton "Instalar" si aparece.

## Uso diario

- Toca `Ver ahora`.
- Cuando termine, vuelve a la app.
- Toca `Ya lo he visto`.

## Notas

- El progreso se guarda en `localStorage`, asi que si se borra la cache o se cambia de movil, el progreso no se transfiere.
- Algunos puntos de la lista no tienen subtitulos en espanol disponibles en One Pace y se marcan como no disponibles.
- Water Seven figura sin subtitulos en espanol en la pagina revisada; aparece solo doblaje en espanol.

## Personalizar

Si quieres, puedes editar `app.js` y cambiar el array `episodes` para:

- modificar nombres
- cambiar enlaces
- quitar especiales
- poner tu propio orden
