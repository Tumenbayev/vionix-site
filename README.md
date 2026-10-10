# VIONIX — сайт

Статический сайт (главная + каталог) для GitHub Pages. Без сборки: HTML + CSS + ванильный JS.

- `index.html` — главная
- `catalog.html` — каталог с фильтром по цели (`?goal=women|weight|sleep|energy`), поиском и сортировкой
- `assets/app.js` — данные о товарах (массив `P`), FAQ и рендер карточек
- `assets/style.css` — стили
- `img/` — фото упаковок

Локально: `python -m http.server 8765` и открыть http://localhost:8765

Заглушки, которые нужно заменить: `[ВАША ССЫЛКА WHATSAPP]`, `[ВАША ССЫЛКА INSTAGRAM]` (в обоих HTML) и ответ про магний в `FAQ` в `assets/app.js`.
