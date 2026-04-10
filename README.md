# One Pace Facil ES Editable por episodios

Mini app web para movil.

- Usa One Pace ES donde ya hay subtitulos en espanol.
- En los huecos de One Pace ES, avanza episodio a episodio.
- Solo tienes que editar `custom-links.js` para pegar tus propios enlaces.

## Huecos que deja preparados esta version

Segun la pagina de One Pace ES:

- Long Ring Long Land: Anime Sources 207-228, no disponible en tu idioma.
- Water Seven: Anime Sources 229-263, solo doblaje ES, no subtitulos ES.
- Post-Enies Lobby: Anime Sources 313-325, no disponible en tu idioma.
- Egghead: Anime Sources 1086- en la pagina; aqui queda preparado hasta el 1155.
- Special: One Piece Fan Letter: no disponible en tu idioma.

## Que editar

Abre `custom-links.js` y pega tus URLs.

Ejemplo:

```js
window.customEpisodeLinks = {
  "water-seven": {
    "229": "https://tu-enlace-aqui"
  }
};
```

## Uso diario

1. Toca `Ver ahora`.
2. Cuando termine, vuelve a la app.
3. Toca `Ya lo he visto`.

En los arcos rellenables, la app avanzara al siguiente episodio del mismo arco, no al siguiente arco.
