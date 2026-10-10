(function () {
  'use strict';

  var KASPI_ALL = 'https://kaspi.kz/shop/search/?text=vionix&q=%3Acategory%3ACategories%3AmanufacturerName%3AVIONIX&sort=relevance&filteredByCategory=false';
  var kaspi = function (s) { return 'https://kaspi.kz/shop/search/?text=' + encodeURIComponent('VIONIX ' + s); };

  var GOALS = [
    { id: 'women', label: 'Женское здоровье', text: 'Гормональный баланс, цикл, фертильность', icon: '<path d="M12 21c-4-2.5-7-6-7-10a7 7 0 0 1 14 0c0 4-3 7.5-7 10z"/><path d="M12 7c-1.5 1.8-1.5 4.2 0 6 1.5-1.8 1.5-4.2 0-6z"/>' },
    { id: 'weight', label: 'Похудение', text: 'Контроль аппетита, поддержка обмена', icon: '<path d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3 0-6 1-8.5z"/>' },
    { id: 'sleep', label: 'Сон и стресс', text: 'Спокойствие, сон, восстановление', icon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/><path d="M16 4h3l-3 3h3"/>' },
    { id: 'energy', label: 'Энергия', text: 'Выносливость, фокус, продуктивность', icon: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>' }
  ];

  var P = [
    { id: 'inopro', img: 'img/inositol-pro.jpg', name: 'Инозитол PRO', bottle: 'INOSITOL\nPRO', dose: '1000 MG', desc: '1000 мг инозитола в порции + фолиевая кислота, витамины E и A. 30 порций.', goals: ['women'], hit: true, link: 'https://kaspi.kz/shop/p/vionix-inozitol-pro-inositol-1000-mg-s-folievoi-kislotoi-i-vitaminami-a-e-kapsuly-90-sht-146438845/', v: [{ l: '90 капсул', p: 4990, o: 7990 }] },
    { id: 'ino', img: 'img/inositol.jpg', name: 'Инозитол', bottle: 'INOSITOL', dose: '1000 MG', desc: 'Женская формула баланса: 1000 мг в порции, снижение стресса, баланс гормонов.', goals: ['women'], kq: 'Инозитол 1000 мг', v: [{ l: '90 капсул', p: 4470, o: 4970 }] },
    { id: 'mgchel', img: 'img/magnesium-chelate.jpg', name: 'Магний хелат + B6', bottle: 'MAGNESIUM\nCHELATE', dose: '400 MG', desc: 'Глицинат: 2190 мг хелата и 438 мг чистого магния. Нервный баланс, мягкое усвоение.', goals: ['sleep'], hit: true, kq: 'Магний B6 Хелат 400 мг', v: [{ l: '120 капсул', p: 4080 }, { l: '240 капсул', p: 7990 }] },
    { id: 'mgcit', img: 'img/magnesium-b6.jpg', name: 'Магний + витамин B6', bottle: 'MG + B6', dose: 'CITRATE', desc: '1800 мг в одной порции, 288 мг чистого магния. Сон, стресс, мышцы.', goals: ['women', 'sleep'], kq: 'Магний цитрат B6', v: [{ l: '120 капсул', p: 2990, o: 3490 }, { l: '240 капсул', p: 4490 }] },
    { id: 'omega', img: 'img/omega-3.jpg', name: 'Омега‑3 1000 мг', bottle: 'OMEGA-3', dose: '1000 MG', desc: 'EPA + DHA для сердца и сосудов, мозга, зрения и иммунитета. 30 дней приёма.', goals: ['women'], kq: 'Омега 3 1000 мг', v: [{ l: '90 капсул', p: 2970, o: 3890 }] },
    { id: 'wom', img: 'img/daily-women.jpg', name: 'Daily Women — витамины для женщин', bottle: 'DAILY\nWOMEN', dose: '60 TABS', desc: '27 витаминов и минералов в составе: красота, баланс, здоровье. Halal, ISO.', goals: ['women', 'energy'], kq: 'Женские витамины', v: [{ l: '60 таблеток', p: 3740, o: 4990 }] },
    { id: 'berb', img: 'img/berberine.jpg', name: 'Берберин комплекс', bottle: 'BERBERINE', dose: '120 CAPS', desc: 'Берберин + хром пиколинат: метаболизм и контроль сахара. 60 порций.', goals: ['weight'], kq: 'Берберин', v: [{ l: '120 капсул', p: null }] },
    { id: 'chrom', img: 'img/chromium.jpg', name: 'Хром пиколинат + витамин C', bottle: 'CHROMIUM', dose: '60 CAPS', desc: 'Баланс сахара и веса, поддержка обмена веществ. 60 порций.', goals: ['weight'], kq: 'Хром пиколинат', v: [{ l: '60 капсул', p: null }] },
    { id: 'probio', img: 'img/probiotic.jpg', name: 'Пробиотик комплекс', bottle: 'PROBIOTIC', dose: '60 CAPS', desc: '8 штаммов полезных бактерий, 5 млрд КОЕ в капсуле. Подходит детям от 3 лет.', goals: [], tag: 'Микробиом', kq: 'Пробиотик', v: [{ l: '60 капсул', p: null }] },
    { id: 'cmz', name: 'Кальций Магний Цинк + D3 + K2', bottle: 'CA · MG · ZN\nD3 + K2', dose: '90 TABS', desc: 'Для костей, суставов и иммунитета. 90 таблеток.', goals: ['sleep', 'energy'], kq: 'Кальций Магний Цинк D3 K2', v: [{ l: '90 таблеток', p: 4890, o: 6990 }] },
    { id: 'htp', name: '5‑HTP с магнием и инозитолом', bottle: '5-HTP\nCOMPLEX', dose: '+ MG · B6 · B12', desc: 'Гидрокситриптофан, магний, инозитол, витамины B6 и B12.', goals: ['women', 'sleep'], kq: '5-HTP', v: [{ l: '60 капсул', p: 2970 }, { l: '120 капсул', p: 4999 }] },
    { id: 'carn', name: 'L‑Карнитин', bottle: 'L-CARNITINE', dose: 'ENERGY', desc: 'Для похудения, выносливости и энергии.', goals: ['weight'], kq: 'L-Carnitine', v: [{ l: '90 капсул', p: 3390 }, { l: '120 капсул', p: 4280 }] },
    { id: 'ala', name: 'Альфа‑липоевая кислота 100 мг', bottle: 'ALPHA\nLIPOIC ACID', dose: '100 MG', desc: 'Поддержка обмена веществ при снижении веса.', goals: ['weight'], kq: 'Альфа-липоевая кислота', v: [{ l: '60 капсул', p: 2999 }, { l: '120 капсул', p: 4790 }] },
    { id: 'taupro', name: 'Таурин PRO', bottle: 'TAURINE\nPRO', dose: '+ CAFFEINE · Q10', desc: 'Таурин с кофеином и коэнзимом Q10. 90 капсул.', goals: ['energy'], kq: 'Таурин PRO', v: [{ l: '90 капсул', p: 2970, o: 4990 }] },
    { id: 'tau', name: 'Таурин', bottle: 'TAURINE', dose: '90 CAPS', desc: 'Для повышения энергии и выносливости. 90 капсул.', goals: ['energy'], kq: 'Таурин 90 капсул', v: [{ l: '90 капсул', p: 2999, o: 3970 }] },
    { id: 'men', name: 'Мужские витамины', bottle: 'MEN\nMULTI', dose: '60 TABS', desc: 'Магний, цинк и биотин. 60 таблеток.', goals: ['energy'], kq: 'Мужские витамины', v: [{ l: '60 таблеток', p: 2980, o: 4990 }] },
    { id: 'bio', name: 'Биотин 5000', bottle: 'BIOTIN\n5000', dose: 'B7 · 60 CAPS', desc: 'Биотин (B7) для волос. 60 капсул.', goals: ['women'], kq: 'Биотин 5000', v: [{ l: '60 капсул', p: 2980 }] }
  ];

  var FAQ = [
    { q: 'Где купить продукты VIONIX?', a: 'Вся линейка представлена на Kaspi.kz — нажмите «Купить на Kaspi» на карточке продукта или откройте полный каталог бренда.' },
    { q: 'Как выбрать добавку?', a: 'Начните с цели: женское здоровье, похудение, сон и стресс или энергия. Каталог покажет подходящие продукты. Перед приёмом лучше проконсультироваться со специалистом.' },
    { q: 'Чем отличается Инозитол PRO от обычного Инозитола?', a: 'В обоих — 1000 мг инозитола. В PRO‑версию дополнительно входят фолиевая кислота, витамины A и E.' },
    { q: 'Какой магний выбрать: хелат или цитрат?', a: '[ОТВЕТ БРЕНДА — опишите разницу между бисглицинатом и цитратом магния своими словами]' }
  ];

  var WORDS = ['Инозитол', 'Магний хелат', 'Омега‑3 EPA + DHA', 'Берберин', 'Пробиотики', 'Хром пиколинат', 'Таурин', 'L‑карнитин', '5‑HTP', 'D3 + K2'];

  var ARROW_UP = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>';

  var sel = {};
  var state = { goal: 'all', query: '', sort: 'pop' };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₸'; }
  function plural(n) {
    var a = n % 10, b = n % 100;
    return (a === 1 && b !== 11) ? 'продукт' : (a >= 2 && a <= 4 && (b < 10 || b >= 20)) ? 'продукта' : 'продуктов';
  }
  function goalLabel(id) { var g = GOALS.filter(function (x) { return x.id === id; })[0]; return g ? g.label : ''; }
  function count(id) { return id === 'all' ? P.length : P.filter(function (p) { return p.goals.indexOf(id) >= 0; }).length; }
  function byId(id) { return P.filter(function (p) { return p.id === id; })[0]; }
  function priceOf(p) { var v = p.v[sel[p.id] || 0]; return v.p == null ? null : v.p; }

  function cardHTML(p) {
    var i = sel[p.id] || 0;
    var v = p.v[i];
    var sale = !!(v.o && v.p && v.o > v.p);
    var g = p.tag || goalLabel(state.goal !== 'all' && p.goals.indexOf(state.goal) >= 0 ? state.goal : p.goals[0]);
    var media = p.img
      ? '<img class="card-img" src="' + p.img + '" alt="' + esc('VIONIX ' + p.name + ', ' + v.l) + '" loading="lazy" width="600" height="600">'
      : '<div class="btl-wrap" aria-hidden="true"><div class="btl"><div class="btl-cap"></div><div class="btl-body"><div class="btl-label"><div class="btl-text"><div class="btl-brand">VIONIX</div><div class="btl-name">' + esc(p.bottle) + '</div><div class="btl-dose">' + esc(p.dose) + '</div></div><div class="btl-strip"><div class="btl-dot"></div><div class="btl-dot"></div><div class="btl-dot"></div></div></div><div class="btl-shine"></div></div></div></div>';
    var variants = p.v.length > 1
      ? '<div class="variants" role="group" aria-label="Размер упаковки">' + p.v.map(function (x, j) {
          return '<button type="button" class="pill' + (j === i ? ' is-on' : '') + '" aria-pressed="' + (j === i) + '" data-pid="' + p.id + '" data-v="' + j + '">' + esc(x.l) + '</button>';
        }).join('') + '</div>'
      : '';
    var price = v.p != null
      ? '<span class="price">' + fmt(v.p) + '</span>' + (sale ? '<s class="price-old">' + fmt(v.o) + '</s>' : '')
      : '<span class="price-new">Новинка · цена на Kaspi</span>';
    return '<article class="card">' +
      '<div class="card-media">' +
        (sale ? '<span class="tag-sale">−' + Math.round((1 - v.p / v.o) * 100) + '%</span>' : '') +
        (p.hit ? '<span class="tag-hit">Хит</span>' : '') +
        media +
      '</div>' +
      '<div class="card-body">' +
        '<span class="card-goal">' + esc(g) + '</span>' +
        '<h3>' + esc(p.name) + '</h3>' +
        '<p class="card-desc">' + esc(p.desc) + '</p>' +
        variants +
        '<div class="price-row">' + price + '</div>' +
        '<a class="buy" href="' + esc(p.link || kaspi(p.kq || p.name)) + '" target="_blank" rel="noopener">Купить на Kaspi ' + ARROW_UP + '</a>' +
      '</div>' +
    '</article>';
  }

  function bindVariants(root) {
    root.addEventListener('click', function (e) {
      var b = e.target.closest('.pill[data-pid]');
      if (!b) return;
      sel[b.dataset.pid] = +b.dataset.v;
      var card = b.closest('.card');
      card.insertAdjacentHTML('afterend', cardHTML(byId(b.dataset.pid)));
      card.nextElementSibling.style.animation = 'none';
      card.nextElementSibling.querySelector('[data-v="' + b.dataset.v + '"]').focus();
      card.remove();
    });
  }

  // Shared
  document.querySelectorAll('[data-kaspi-all]').forEach(function (a) { a.href = KASPI_ALL; });
  var total = document.getElementById('total-count');
  if (total) total.textContent = P.length + ' ' + plural(P.length);

  // Home: marquee
  var mq = document.getElementById('marquee');
  if (mq) {
    mq.innerHTML = WORDS.concat(WORDS).map(function (w) {
      return '<div class="mq-i">' + esc(w) + '<span class="mq-dot"></span></div>';
    }).join('');
  }

  // Home: goal cards
  var goalsEl = document.getElementById('goals-grid');
  if (goalsEl) {
    goalsEl.innerHTML = GOALS.map(function (g) {
      var n = count(g.id);
      return '<a class="goal" href="catalog.html?goal=' + g.id + '">' +
        '<div class="goal-ico"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7FE3B4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + g.icon + '</svg></div>' +
        '<h3>' + g.label + '</h3><p>' + g.text + '</p>' +
        '<div class="goal-foot"><span class="goal-count">' + n + ' ' + plural(n) + '</span><span class="goal-arrow">' + ARROW_UP.replace(/16/g, '18') + '</span></div>' +
      '</a>';
    }).join('');
  }

  // Home: featured
  var featEl = document.getElementById('featured');
  if (featEl) {
    featEl.innerHTML = ['inopro', 'mgchel', 'omega', 'wom'].map(byId).map(cardHTML).join('');
    bindVariants(featEl);
  }

  // Home: FAQ
  var faqEl = document.getElementById('faq-list');
  if (faqEl) {
    faqEl.innerHTML = FAQ.map(function (f, i) {
      var open = i === 0;
      return '<div class="faq-item">' +
        '<button type="button" class="faq-q" aria-expanded="' + open + '" aria-controls="faq-a-' + i + '">' + esc(f.q) +
          '<span class="faq-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></span>' +
        '</button>' +
        '<p class="faq-a" id="faq-a-' + i + '"' + (open ? '' : ' hidden') + '>' + esc(f.a) + '</p>' +
      '</div>';
    }).join('');
    faqEl.addEventListener('click', function (e) {
      var b = e.target.closest('.faq-q');
      if (!b) return;
      var wasOpen = b.getAttribute('aria-expanded') === 'true';
      faqEl.querySelectorAll('.faq-q').forEach(function (q) {
        q.setAttribute('aria-expanded', 'false');
        document.getElementById(q.getAttribute('aria-controls')).hidden = true;
      });
      if (!wasOpen) {
        b.setAttribute('aria-expanded', 'true');
        document.getElementById(b.getAttribute('aria-controls')).hidden = false;
      }
    });
  }

  // Catalog
  var catEl = document.getElementById('catalog-grid');
  if (catEl) {
    var tabsEl = document.getElementById('tabs');
    var sortsEl = document.getElementById('sorts');
    var searchEl = document.getElementById('vx-search');
    var emptyEl = document.getElementById('empty');
    var shownEl = document.getElementById('shown-text');
    var SORTS = [{ id: 'pop', label: 'Популярные' }, { id: 'asc', label: 'Сначала дешевле' }, { id: 'desc', label: 'Сначала дороже' }];

    var params = new URLSearchParams(location.search);
    if (GOALS.some(function (g) { return g.id === params.get('goal'); })) state.goal = params.get('goal');

    var syncUrl = function () {
      var url = state.goal === 'all' ? location.pathname : location.pathname + '?goal=' + state.goal;
      history.replaceState(null, '', url);
    };

    var render = function () {
      var q = state.query.trim().toLowerCase();
      var list = P.filter(function (p) {
        return (state.goal === 'all' || p.goals.indexOf(state.goal) >= 0) &&
          (!q || (p.name + ' ' + p.desc + ' ' + p.bottle).toLowerCase().indexOf(q) >= 0);
      });
      if (state.sort !== 'pop') {
        list = list.slice().sort(function (x, y) {
          var a = priceOf(x), b = priceOf(y);
          if (a == null && b == null) return 0; if (a == null) return 1; if (b == null) return -1;
          return state.sort === 'asc' ? a - b : b - a;
        });
      }
      tabsEl.innerHTML = [{ id: 'all', label: 'Все' }].concat(GOALS).map(function (t) {
        var on = state.goal === t.id;
        return '<button type="button" class="tab' + (on ? ' is-on' : '') + '" aria-pressed="' + on + '" data-goal="' + t.id + '">' + t.label + '<span class="tab-n">' + count(t.id) + '</span></button>';
      }).join('');
      sortsEl.innerHTML = SORTS.map(function (o) {
        var on = state.sort === o.id;
        return '<button type="button" class="pill' + (on ? ' is-on' : '') + '" aria-pressed="' + on + '" data-sort="' + o.id + '">' + o.label + '</button>';
      }).join('');
      catEl.innerHTML = list.map(cardHTML).join('');
      emptyEl.hidden = list.length !== 0;
      var n = list.length + ' ' + plural(list.length);
      shownEl.textContent = q ? 'Найдено: ' + n : state.goal === 'all' ? 'Вся линейка · ' + n : goalLabel(state.goal) + ' · ' + n;
    };

    tabsEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-goal]');
      if (!b) return;
      state.goal = b.dataset.goal; syncUrl(); render();
    });
    sortsEl.addEventListener('click', function (e) {
      var b = e.target.closest('[data-sort]');
      if (!b) return;
      state.sort = b.dataset.sort; render();
    });
    searchEl.addEventListener('input', function () { state.query = searchEl.value; render(); });
    document.getElementById('reset').addEventListener('click', function () {
      state = { goal: 'all', query: '', sort: 'pop' }; searchEl.value = ''; syncUrl(); render();
    });
    bindVariants(catEl);
    render();
  }
})();
