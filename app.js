const STORAGE_KEY = 'onepace-facil-current-index-v1';

const episodes = [
  { title: 'Romance Dawn', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/RqyRKE4n' },
  { title: 'Ciudad Orange', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/dxhamPZA' },
  { title: 'Villa Syrup', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/qXgnj83H' },
  { title: 'Gaimon', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/xWbEfBvd' },
  { title: 'Baratie', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/EyuwRaV2' },
  { title: 'Arlong Park', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/Z9vWXgLV' },
  { title: 'Las aventuras de los Piratas de Buggy', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/fu8mK9pz' },
  { title: 'Loguetown', meta: 'Sub ES · 480p', url: 'https://pixeldrain.net/l/U8HzX43L' },
  { title: 'Reverse Mountain', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/rpGLWoDC' },
  { title: 'Whisky Peak', meta: 'Sub ES · 480p', url: 'https://pixeldrain.net/l/MmFeocei' },
  { title: 'El diario de la lucha de Koby-Meppo', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/4piuXiCy' },
  { title: 'Little Garden', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/QZLankV1' },
  { title: 'Isla de Drum', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/aF55MzUg' },
  { title: 'Arabasta', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/sMx5HsC8' },
  { title: 'Jaya', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/MifrPdu1' },
  { title: 'Skypiea', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/T7oFy8gM' },
  { title: 'Long Ring Long Land', meta: 'Sin subtitulos ES en One Pace', url: '', available: false, note: 'No esta disponible en espanol en la pagina de One Pace ahora mismo.' },
  { title: 'Water Seven', meta: 'Solo doblaje ES en One Pace', url: '', available: false, note: 'En la pagina en espanol aparece doblaje, pero no subtitulos en espanol.' },
  { title: 'Enies Lobby', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/mRywLHQr' },
  { title: 'Post-Enies Lobby', meta: 'Sin subtitulos ES en One Pace', url: '', available: false, note: 'No esta disponible en espanol en la pagina de One Pace ahora mismo.' },
  { title: 'Thriller Bark', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/16gHoWqc' },
  { title: 'Archipielago Sabaody', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/AHejg5kA' },
  { title: 'Amazon Lily', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/i3b8qdb5' },
  { title: 'Impel Down', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/hxnfZsPw' },
  { title: 'Si fueras a salir de viaje... Las aventuras de los Sombrero de Paja', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/Vm4ZALqo' },
  { title: 'Marineford', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/jNXrBerQ' },
  { title: '3D2Y / Post-War', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/yHhL89hk' },
  { title: 'Regreso a Sabaody', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/uXjV6Pp6' },
  { title: 'Isla Gyojin', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/TjsB32wU' },
  { title: 'Punk Hazard', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/LunJMVNy' },
  { title: 'Dressrosa', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/CZo48kqJ' },
  { title: 'Zou', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/Us9cGESX' },
  { title: 'Whole Cake Island', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/f5Nwx9WC' },
  { title: 'Levely / Reverie', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/oLLoqQH6' },
  { title: 'Pais de Wa / Wano', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/tnZteFfr' },
  { title: 'Egghead', meta: 'Sin subtitulos ES en One Pace', url: '', available: false, note: 'No esta disponible en espanol en la pagina de One Pace ahora mismo.' },
  { title: 'Special: One Piece Fan Letter', meta: 'Sin subtitulos ES en One Pace', url: '', available: false, note: 'No esta disponible en espanol en la pagina de One Pace ahora mismo.' },
  { title: 'Special: Warship Island 01 (April Fools 2025)', meta: 'Sub ES · 720p', url: 'https://pixeldrain.net/l/uALoUKpB' }
];

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

function loadIndex() {
  const saved = Number(localStorage.getItem(STORAGE_KEY));
  if (Number.isInteger(saved) && saved >= 0 && saved < episodes.length) return saved;
  return 0;
}

function saveIndex() {
  localStorage.setItem(STORAGE_KEY, String(currentIndex));
}

function currentEpisode() {
  return episodes[currentIndex] || episodes[0];
}

function moveTo(index) {
  currentIndex = Math.max(0, Math.min(index, episodes.length - 1));
  saveIndex();
  render();
}

function nextAvailableIndex(fromIndex) {
  for (let i = fromIndex + 1; i < episodes.length; i += 1) {
    if (episodes[i].available !== false && episodes[i].url) return i;
  }
  return Math.min(fromIndex + 1, episodes.length - 1);
}

function render() {
  const item = currentEpisode();
  const isAvailable = item.available !== false && !!item.url;

  progressText.textContent = `Punto ${currentIndex + 1} de ${episodes.length}`;
  episodeTitle.textContent = item.title;
  episodeMeta.textContent = item.meta || '';
  episodeNote.textContent = item.note || 'El progreso queda guardado en este movil.';

  openBtn.classList.toggle('hidden', !isAvailable);
  doneBtn.classList.toggle('hidden', false);
  unavailableBox.classList.toggle('hidden', isAvailable);
  doneBtn.textContent = currentIndex >= episodes.length - 1 ? 'Terminado' : 'Ya lo he visto';

  jumpSelect.value = String(currentIndex);
  renderList();
}

function renderList() {
  listContainer.innerHTML = '';
  episodes.forEach((item, index) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'list-item';
    if (index === currentIndex) card.classList.add('current');
    if (index < currentIndex) card.classList.add('done');
    if (item.available === false || !item.url) card.classList.add('unavailable-item');

    let badge = '';
    if (index === currentIndex) badge = '<span class="badge current">Actual</span>';
    else if (index < currentIndex) badge = '<span class="badge done">Visto</span>';
    else if (item.available === false || !item.url) badge = '<span class="badge unavailable">No disponible</span>';

    card.innerHTML = `
      <div class="list-top">
        <strong>${index + 1}. ${escapeHtml(item.title)}</strong>
        ${badge}
      </div>
      <div class="list-meta">${escapeHtml(item.meta || '')}</div>
    `;
    card.addEventListener('click', () => moveTo(index));
    listContainer.appendChild(card);
  });
}

function fillJumpSelect() {
  jumpSelect.innerHTML = '';
  episodes.forEach((item, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = `${index + 1}. ${item.title}`;
    jumpSelect.appendChild(option);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

openBtn.addEventListener('click', () => {
  const item = currentEpisode();
  if (item.url) window.location.href = item.url;
});

doneBtn.addEventListener('click', () => {
  if (currentIndex < episodes.length - 1) moveTo(currentIndex + 1);
});

skipBtn.addEventListener('click', () => {
  moveTo(nextAvailableIndex(currentIndex));
});

prevBtn.addEventListener('click', () => moveTo(currentIndex - 1));
nextBtn.addEventListener('click', () => moveTo(currentIndex + 1));

jumpBtn.addEventListener('click', () => moveTo(Number(jumpSelect.value)));

resetBtn.addEventListener('click', () => {
  if (window.confirm('Se reiniciara el progreso.')) {
    moveTo(0);
  }
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
