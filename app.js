const STORAGE_KEY = 'onepace-facil-es-custom-episodes-current-index-v2';

const sequence = [
  { type: 'fixed', slug: 'romance-dawn', title: 'Romance Dawn', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/RqyRKE4n' },
  { type: 'fixed', slug: 'ciudad-orange', title: 'Ciudad Orange', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/dxhamPZA' },
  { type: 'fixed', slug: 'villa-syrup', title: 'Villa Syrup', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/qXgnj83H' },
  { type: 'fixed', slug: 'gaimon', title: 'Gaimon', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/xWbEfBvd' },
  { type: 'fixed', slug: 'baratie', title: 'Baratie', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/EyuwRaV2' },
  { type: 'fixed', slug: 'arlong-park', title: 'Arlong Park', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/Z9vWXgLV' },
  { type: 'fixed', slug: 'buggy-adventures', title: 'Las aventuras de los Piratas de Buggy', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/fu8mK9pz' },
  { type: 'fixed', slug: 'loguetown', title: 'Loguetown', meta: 'Sub ES · 480p', url: 'https://pixeldrain.net/l/U8HzX43L' },
  { type: 'fixed', slug: 'reverse-mountain', title: 'Reverse Mountain', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/rpGLWoDC' },
  { type: 'fixed', slug: 'whisky-peak', title: 'Whisky Peak', meta: 'Sub ES · 480p', url: 'https://pixeldrain.net/l/MmFeocei' },
  { type: 'fixed', slug: 'koby-meppo', title: 'El diario de la lucha de Koby-Meppo', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/4piuXiCy' },
  { type: 'fixed', slug: 'little-garden', title: 'Little Garden', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/QZLankV1' },
  { type: 'fixed', slug: 'drum-island', title: 'Isla de Drum', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/aF55MzUg' },
  { type: 'fixed', slug: 'arabasta', title: 'Arabasta', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/sMx5HsC8' },
  { type: 'fixed', slug: 'jaya', title: 'Jaya', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/MifrPdu1' },
  { type: 'fixed', slug: 'skypiea', title: 'Skypiea', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/T7oFy8gM' },
  { type: 'missing_arc', slug: 'long-ring-long-land', title: 'Long Ring Long Land', rangeLabel: 'Anime Sources 207-228 en One Pace ES', episodeNumbers: range(207, 228), note: 'One Pace ES lo marca como no disponible en tu idioma. Rellena los enlaces por episodio en custom-links.js.' },
  { type: 'missing_arc', slug: 'water-seven', title: 'Water Seven', rangeLabel: 'Anime Sources 229-263 en One Pace ES', episodeNumbers: range(229, 263), note: 'En One Pace ES hay doblaje, pero no subtitulos en espanol. Rellena los enlaces por episodio en custom-links.js.' },
  { type: 'fixed', slug: 'enies-lobby', title: 'Enies Lobby', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/mRywLHQr' },
  { type: 'missing_arc', slug: 'post-enies-lobby', title: 'Post-Enies Lobby', rangeLabel: 'Anime Sources 313-325 en One Pace ES', episodeNumbers: range(313, 325), note: 'One Pace ES lo marca como no disponible en tu idioma. Rellena los enlaces por episodio en custom-links.js.' },
  { type: 'fixed', slug: 'thriller-bark', title: 'Thriller Bark', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/16gHoWqc' },
  { type: 'fixed', slug: 'sabaody', title: 'Archipielago Sabaody', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/AHejg5kA' },
  { type: 'fixed', slug: 'amazon-lily', title: 'Amazon Lily', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/i3b8qdb5' },
  { type: 'fixed', slug: 'impel-down', title: 'Impel Down', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/hxnfZsPw' },
  { type: 'fixed', slug: 'straw-hat-separation', title: 'Si fueras a salir de viaje... Las aventuras de los Sombrero de Paja', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/Vm4ZALqo' },
  { type: 'fixed', slug: 'marineford', title: 'Marineford', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/jNXrBerQ' },
  { type: 'fixed', slug: '3d2y', title: '3D2Y / Post-War', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/yHhL89hk' },
  { type: 'fixed', slug: 'return-to-sabaody', title: 'Regreso a Sabaody', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/uXjV6Pp6' },
  { type: 'fixed', slug: 'fishman-island', title: 'Isla Gyojin', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/TjsB32wU' },
  { type: 'fixed', slug: 'punk-hazard', title: 'Punk Hazard', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/LunJMVNy' },
  { type: 'fixed', slug: 'dressrosa', title: 'Dressrosa', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/CZo48kqJ' },
  { type: 'fixed', slug: 'zou', title: 'Zou', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/Us9cGESX' },
  { type: 'fixed', slug: 'whole-cake-island', title: 'Whole Cake Island', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/f5Nwx9WC' },
  { type: 'fixed', slug: 'levely', title: 'Levely / Reverie', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/oLLoqQH6' },
  { type: 'fixed', slug: 'wano', title: 'Pais de Wa / Wano', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/tnZteFfr' },
  { type: 'missing_arc', slug: 'egghead', title: 'Egghead', rangeLabel: 'One Pace ES muestra Anime Sources 1086- y la app lo deja preparado hasta 1155', episodeNumbers: range(1086, 1155), note: 'One Pace ES lo marca como no disponible en tu idioma. He dejado la lista preparada episodio a episodio hasta el 1155.' },
  { type: 'missing_special', slug: 'special-fan-letter', title: 'Special: One Piece Fan Letter', rangeLabel: 'Special unico', episodeNumbers: [1], note: 'One Pace ES lo marca como no disponible en tu idioma. Puedes poner un unico enlace en custom-links.js.' },
  { type: 'fixed', slug: 'warship-island', title: 'Special: Warship Island 01 (April Fools 2025)', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/uALoUKpB' }
];

const customEpisodeLinks = window.customEpisodeLinks || {};
const items = buildItems();
let currentIndex = loadIndex();
let deferredPrompt = null;

const progressText = document.getElementById('progressText');
const episodeTitle = document.getElementById('episodeTitle');
const episodeMeta = document.getElementById('episodeMeta');
const episodeNote = document.getElementById('episodeNote');
const openBtn = document.getElementById('openBtn');
const doneBtn = document.getElementById('doneBtn');
const skipBtn = document.getElementById('skipBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.getElementById('resetBtn');
const jumpSelect = document.getElementById('jumpSelect');
const jumpBtn = document.getElementById('jumpBtn');
const unavailableBox = document.getElementById('unavailableBox');
const listContainer = document.getElementById('listContainer');
const installBtn = document.getElementById('installBtn');

function range(start, end) {
  const out = [];
  for (let n = start; n <= end; n += 1) out.push(n);
  return out;
}

function buildItems() {
  const out = [];
  sequence.forEach((entry) => {
    if (entry.type === 'fixed') {
      out.push({
        kind: 'fixed',
        slug: entry.slug,
        title: entry.title,
        displayTitle: entry.title,
        meta: entry.meta,
        note: 'El progreso queda guardado en este movil.',
        url: entry.url,
        available: !!entry.url
      });
      return;
    }

    entry.episodeNumbers.forEach((episodeNumber, index) => {
      const arcLinks = customEpisodeLinks[entry.slug] || {};
      const rawUrl = arcLinks[String(episodeNumber)] || '';
      const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
      const total = entry.episodeNumbers.length;
      const isSpecial = entry.type === 'missing_special';
      const episodeLabel = isSpecial ? 'Especial unico' : `Episodio ${episodeNumber}`;
      const orderLabel = isSpecial ? 'Punto unico editable' : `Episodio ${episodeNumber} · ${index + 1} de ${total}`;
      out.push({
        kind: 'custom_episode',
        slug: `${entry.slug}-${episodeNumber}`,
        arcSlug: entry.slug,
        title: entry.title,
        displayTitle: entry.title,
        meta: `${episodeLabel} · enlace editable`,
        note: `${entry.note} Clave: ${entry.slug} -> ${episodeNumber}.`,
        url,
        available: !!url,
        episodeNumber,
        episodeIndex: index + 1,
        episodeTotal: total,
        groupLabel: entry.rangeLabel,
        orderLabel
      });
    });
  });
  return out;
}

function loadIndex() {
  const saved = Number(localStorage.getItem(STORAGE_KEY));
  if (Number.isInteger(saved) && saved >= 0 && saved < items.length) return saved;
  return 0;
}

function saveIndex() {
  localStorage.setItem(STORAGE_KEY, String(currentIndex));
}

function currentItem() {
  return items[currentIndex] || items[0];
}

function moveTo(index) {
  currentIndex = Math.max(0, Math.min(index, items.length - 1));
  saveIndex();
  render();
}

function nextAvailableIndex(fromIndex) {
  for (let i = fromIndex + 1; i < items.length; i += 1) {
    if (items[i].available && items[i].url) return i;
  }
  return Math.min(fromIndex + 1, items.length - 1);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function fillJumpSelect() {
  jumpSelect.innerHTML = '';
  items.forEach((item, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    const label = item.kind === 'custom_episode'
      ? `${index + 1}. ${item.title} - ${item.orderLabel}`
      : `${index + 1}. ${item.title}`;
    option.textContent = label;
    jumpSelect.appendChild(option);
  });
}

function renderList() {
  listContainer.innerHTML = '';
  items.forEach((item, index) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'list-item';
    if (index === currentIndex) card.classList.add('current');
    if (index < currentIndex) card.classList.add('done');
    if (!item.available || !item.url) card.classList.add('unavailable-item');

    let badge = '';
    if (index === currentIndex) badge = '<span class="badge current">Actual</span>';
    else if (index < currentIndex) badge = '<span class="badge done">Visto</span>';
    else if (!item.available || !item.url) badge = '<span class="badge unavailable">Rellenar</span>';

    const meta = item.kind === 'custom_episode'
      ? `${item.orderLabel} · ${item.groupLabel}`
      : (item.meta || '');

    card.innerHTML = `
      <div class="list-top">
        <strong>${index + 1}. ${escapeHtml(item.displayTitle)}</strong>
        ${badge}
      </div>
      <div class="list-meta">${escapeHtml(meta)}</div>
    `;
    card.addEventListener('click', () => moveTo(index));
    listContainer.appendChild(card);
  });
}

function render() {
  const item = currentItem();
  const isAvailable = !!item.available && !!item.url;
  progressText.textContent = `Punto ${currentIndex + 1} de ${items.length}`;
  episodeTitle.textContent = item.displayTitle;
  if (item.kind === 'custom_episode') {
    episodeMeta.textContent = `${item.orderLabel} · ${item.groupLabel}`;
  } else {
    episodeMeta.textContent = item.meta || '';
  }
  episodeNote.textContent = item.note || 'El progreso queda guardado en este movil.';
  openBtn.classList.toggle('hidden', !isAvailable);
  unavailableBox.classList.toggle('hidden', isAvailable);
  doneBtn.textContent = currentIndex >= items.length - 1 ? 'Terminado' : 'Ya lo he visto';
  jumpSelect.value = String(currentIndex);
  renderList();
}

openBtn.addEventListener('click', () => {
  const item = currentItem();
  if (item.url) window.location.href = item.url;
});

doneBtn.addEventListener('click', () => {
  if (currentIndex < items.length - 1) moveTo(currentIndex + 1);
});

skipBtn.addEventListener('click', () => moveTo(nextAvailableIndex(currentIndex)));
prevBtn.addEventListener('click', () => moveTo(currentIndex - 1));
nextBtn.addEventListener('click', () => moveTo(currentIndex + 1));
jumpBtn.addEventListener('click', () => moveTo(Number(jumpSelect.value)));
resetBtn.addEventListener('click', () => {
  if (window.confirm('Se reiniciara el progreso.')) moveTo(0);
});

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installBtn.classList.remove('hidden');
});

installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.classList.add('hidden');
});

fillJumpSelect();
render();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
