
const entries = {
  turian: "<h2>Турианцы</h2><p>Турианцы — одна из главных рас Цитадели. Известны дисциплиной, милитаризмом и чувством долга.</p>",
  citadel: "<h2>Цитадель</h2><p>Цитадель — массивная космическая станция, служащая центром политической жизни галактики.</p>",
  mass_effect: "<h2>Эффект массы</h2><p>Фундаментальное явление, позволяющее манипулировать гравитацией и перемещаться быстрее света.</p>"
};

function openEntry(key) {
  document.getElementById('card-container').style.display = 'none';
  document.getElementById('codex-content').style.display = 'block';
  document.getElementById('codex-text').innerHTML = entries[key];
}

function goBack() {
  document.getElementById('card-container').style.display = 'flex';
  document.getElementById('codex-content').style.display = 'none';
}
