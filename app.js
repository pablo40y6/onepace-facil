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
const expandedArcSlugs = new Set();

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
const currentCard = document.querySelector('.current-card');

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

  requestAnimationFrame(() => {
    currentCard?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
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

function buildListGroups() {
  const groups = [];
  const seenArcSlugs = new Set();

  items.forEach((item, index) => {
    if (item.kind === 'custom_episode') {
      if (seenArcSlugs.has(item.arcSlug)) return;

      const children = items
        .map((entry, entryIndex) => ({ entry, entryIndex }))
        .filter(({ entry }) => entry.kind === 'custom_episode' && entry.arcSlug === item.arcSlug);

      groups.push({
        type: 'custom_arc',
        arcSlug: item.arcSlug,
        title: item.title,
        rangeLabel: item.groupLabel,
        children
      });

      seenArcSlugs.add(item.arcSlug);
      return;
    }

    groups.push({
      type: 'single',
      item,
      index
    });
  });

  return groups;
}

function renderList() {
  listContainer.innerHTML = '';

  const current = currentItem();

  if (current.kind === 'custom_episode' && current.arcSlug) {
    expandedArcSlugs.add(current.arcSlug);
  }

  const groups = buildListGroups();

  groups.forEach((group) => {
    if (group.type === 'single') {
      const { item, index } = group;

      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'list-item';
      if (index === currentIndex) card.classList.add('current');
      if (index < currentIndex) card.classList.add('done');
      if (!item.available) card.classList.add('unavailable-item');

      let badge = '';
      if (index === currentIndex) badge = '<span class="badge current">Actual</span>';
      else if (index < currentIndex) badge = '<span class="badge done">Visto</span>';
      else if (!item.available) badge = '<span class="badge unavailable">No disponible</span>';

      card.innerHTML = `
        <div class="list-top">
          <strong>${escapeHtml(item.title)}</strong>
          ${badge}
        </div>
        <div class="list-meta">${escapeHtml(item.meta || '')}</div>
      `;

      card.addEventListener('click', () => moveTo(index));
      listContainer.appendChild(card);
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'arc-group';

    const firstIndex = group.children[0].entryIndex;
    const lastIndex = group.children[group.children.length - 1].entryIndex;
    const configuredCount = group.children.filter(({ entry }) => entry.available).length;
    const isCurrentArc = current.kind === 'custom_episode' && current.arcSlug === group.arcSlug;
    const isArcDone = currentIndex > lastIndex;
    const isExpanded = expandedArcSlugs.has(group.arcSlug);

    const header = document.createElement('button');
    header.type = 'button';
    header.className = 'arc-header';
    if (isCurrentArc) header.classList.add('current');
    if (isArcDone) header.classList.add('done');

    let headerBadge = '';
    if (isCurrentArc) headerBadge = '<span class="badge current">Actual</span>';
    else if (isArcDone) headerBadge = '<span class="badge done">Visto</span>';
    else headerBadge = `<span class="badge">${configuredCount}/${group.children.length} enlaces</span>`;

    header.innerHTML = `
      <div class="arc-header-top">
        <strong>${escapeHtml(group.title)}</strong>
        ${headerBadge}
      </div>
      <div class="arc-subtitle">${escapeHtml(group.rangeLabel || '')}</div>
      <div class="arc-subtitle">${isExpanded ? 'Ocultar episodios' : 'Ver episodios'}</div>
    `;

    header.addEventListener('click', () => {
      if (expandedArcSlugs.has(group.arcSlug)) expandedArcSlugs.delete(group.arcSlug);
      else expandedArcSlugs.add(group.arcSlug);
      renderList();
    });

    wrapper.appendChild(header);

    if (isExpanded) {
      const childrenBox = document.createElement('div');
      childrenBox.className = 'arc-children';

      group.children.forEach(({ entry, entryIndex }) => {
        const child = document.createElement('button');
        child.type = 'button';
        child.className = 'child-item';

        if (entryIndex === currentIndex) child.classList.add('current');
        if (entryIndex < currentIndex) child.classList.add('done');
        if (!entry.available) child.classList.add('unavailable-item');

        let childBadge = '';
        if (entryIndex === currentIndex) childBadge = '<span class="badge current">Actual</span>';
        else if (entryIndex < currentIndex) childBadge = '<span class="badge done">Visto</span>';
        else if (!entry.available) childBadge = '<span class="badge unavailable">Sin enlace</span>';

        child.innerHTML = `
          <div class="list-top">
            <span class="child-title">Episodio ${escapeHtml(String(entry.episodeNumber || ''))}</span>
            ${childBadge}
          </div>
          <div class="child-meta">${escapeHtml(entry.available ? 'Enlace configurado' : 'Sin enlace configurado')}</div>
        `;

        child.addEventListener('click', () => moveTo(entryIndex));
        childrenBox.appendChild(child);
      });

      wrapper.appendChild(childrenBox);
    }

    listContainer.appendChild(wrapper);
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
  const hideNote = item.kind === 'custom_episode';
episodeNote.textContent = hideNote ? '' : (item.note || 'El progreso queda guardado en este movil.');
episodeNote.classList.toggle('hidden', hideNote);
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
