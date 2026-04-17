(function(){
  "use strict";
  console.log('✅ Starry Store JS - Funcional');

  // ================== TEMAS ==================
  const THEMES = {
    autumn: { name: "🍂 Autumn", vars: { void:"#0f0501", deep:"#1f0f04", card:"#2f1a08", card2:"#40260c", v1:"#b45309", v2:"#d97706", v3:"#f59e0b", v4:"#fbbf24", silver:"#fffbeb", mist:"#fed7aa", gold:"#fcd34d", border:"rgba(217,119,6,.28)", glow:"rgba(180,83,9,.55)", heroGradient1:"rgba(180,83,9,.2)", heroGradient2:"#1f0f04", heroGradient3:"#0f0501", heroGlow:"rgba(217,119,6,0.2)", heroAfter:"rgba(180,83,9,.12)", heroShadow:"rgba(180,83,9,.1)", ruleBorder:"rgba(217,119,6,.07)", rankLeaderBg:"#2f1a08", rankRecruitBorder:"#4a5b3d", rankRecruitSym:"#6b8c5a", perkBg:"rgba(217,119,6,.12)", perkBorder:"rgba(217,119,6,.2)", applyBg:"rgba(180,83,9,.1)", applyBorder:"rgba(180,83,9,.24)", comingBg:"rgba(180,83,9,.16)", gameIconBg:"rgba(217,119,6,.1)", gameInfoColor:"#5a3a25", footerColor:"#3a2515", starColor1:"rgba(251,191,36,.7)", starColor2:"rgba(251,191,36,.5)", starColor3:"rgba(251,191,36,.8)", starColor4:"rgba(251,191,36,.4)", starColor5:"rgba(251,191,36,.6)", starColor6:"rgba(251,191,36,.9)" } },
    sakura: { name: "🌸 Sakura", vars: { void:"#1a0f1a", deep:"#2d1f2a", card:"#3d2a38", card2:"#4f3547", v1:"#d946ef", v2:"#f0abfc", v3:"#f5d0fe", v4:"#fae8ff", silver:"#fff0fa", mist:"#f0abfc", gold:"#fde047", border:"rgba(217,70,239,.22)", glow:"rgba(217,70,239,.4)", heroGradient1:"rgba(217,70,239,.2)", heroGradient2:"#3d2a38", heroGradient3:"#1a0f1a", heroGlow:"rgba(240,171,252,0.2)", heroAfter:"rgba(217,70,239,.12)", heroShadow:"rgba(217,70,239,.1)", ruleBorder:"rgba(240,171,252,.07)", rankLeaderBg:"#4f3547", rankRecruitBorder:"#6b4a6b", rankRecruitSym:"#8c5a8c", perkBg:"rgba(240,171,252,.12)", perkBorder:"rgba(240,171,252,.2)", applyBg:"rgba(217,70,239,.1)", applyBorder:"rgba(217,70,239,.24)", comingBg:"rgba(217,70,239,.16)", gameIconBg:"rgba(240,171,252,.1)", gameInfoColor:"#5a3a5a", footerColor:"#452a45", starColor1:"rgba(250,232,255,.7)", starColor2:"rgba(250,232,255,.5)", starColor3:"rgba(250,232,255,.8)", starColor4:"rgba(250,232,255,.4)", starColor5:"rgba(250,232,255,.6)", starColor6:"rgba(250,232,255,.9)" } },
    ember: { name: "🔥 Ember", vars: { void:"#0a0408", deep:"#140a10", card:"#1a0f16", card2:"#22141e", v1:"#b91c1c", v2:"#dc2626", v3:"#ef4444", v4:"#f87171", silver:"#fef3c7", mist:"#a8a29e", gold:"#fbbf24", border:"rgba(220,38,38,.2)", glow:"rgba(185,28,28,.5)", heroGradient1:"rgba(185,28,28,.2)", heroGradient2:"#1a0f16", heroGradient3:"#0a0408", heroGlow:"rgba(220,38,38,0.2)", heroAfter:"rgba(185,28,28,.12)", heroShadow:"rgba(185,28,28,.1)", ruleBorder:"rgba(220,38,38,.07)", rankLeaderBg:"#22141e", rankRecruitBorder:"#6b3d3d", rankRecruitSym:"#8c5a5a", perkBg:"rgba(220,38,38,.12)", perkBorder:"rgba(220,38,38,.2)", applyBg:"rgba(185,28,28,.1)", applyBorder:"rgba(185,28,28,.24)", comingBg:"rgba(185,28,28,.16)", gameIconBg:"rgba(220,38,38,.1)", gameInfoColor:"#5a3a3a", footerColor:"#3a2525", starColor1:"rgba(248,113,113,.7)", starColor2:"rgba(248,113,113,.5)", starColor3:"rgba(248,113,113,.8)", starColor4:"rgba(248,113,113,.4)", starColor5:"rgba(248,113,113,.6)", starColor6:"rgba(248,113,113,.9)" } },
    frost: { name: "❄️ Frost", vars: { void:"#020617", deep:"#0f172a", card:"#1e293b", card2:"#334155", v1:"#2563eb", v2:"#3b82f6", v3:"#60a5fa", v4:"#93c5fd", silver:"#f1f5f9", mist:"#94a3b8", gold:"#facc15", border:"rgba(59,130,246,.2)", glow:"rgba(37,99,235,.4)", heroGradient1:"rgba(37,99,235,.2)", heroGradient2:"#1e293b", heroGradient3:"#020617", heroGlow:"rgba(59,130,246,0.2)", heroAfter:"rgba(37,99,235,.12)", heroShadow:"rgba(37,99,235,.1)", ruleBorder:"rgba(59,130,246,.07)", rankLeaderBg:"#334155", rankRecruitBorder:"#3d4a6b", rankRecruitSym:"#4a5880", perkBg:"rgba(59,130,246,.12)", perkBorder:"rgba(59,130,246,.2)", applyBg:"rgba(37,99,235,.1)", applyBorder:"rgba(37,99,235,.24)", comingBg:"rgba(37,99,235,.16)", gameIconBg:"rgba(59,130,246,.1)", gameInfoColor:"#3a3a5a", footerColor:"#2a2a45", starColor1:"rgba(147,197,253,.7)", starColor2:"rgba(147,197,253,.5)", starColor3:"rgba(147,197,253,.8)", starColor4:"rgba(147,197,253,.4)", starColor5:"rgba(147,197,253,.6)", starColor6:"rgba(147,197,253,.9)" } },
    carbon: { name: "🖤 Carbon Black", vars: { void:"#050505", deep:"#0f0f0f", card:"#1a1a1a", card2:"#262626", v1:"#d4af37", v2:"#fbbf24", v3:"#fcd34d", v4:"#fde68a", silver:"#f5f5f5", mist:"#a3a3a3", gold:"#d4af37", border:"rgba(212,175,55,.25)", glow:"rgba(212,175,55,.5)", heroGradient1:"rgba(212,175,55,.15)", heroGradient2:"#1a1a1a", heroGradient3:"#050505", heroGlow:"rgba(212,175,55,0.25)", heroAfter:"rgba(212,175,55,.1)", heroShadow:"rgba(212,175,55,.08)", ruleBorder:"rgba(212,175,55,.06)", rankLeaderBg:"#262626", rankRecruitBorder:"#4a4a4a", rankRecruitSym:"#6b6b6b", perkBg:"rgba(212,175,55,.1)", perkBorder:"rgba(212,175,55,.15)", applyBg:"rgba(212,175,55,.08)", applyBorder:"rgba(212,175,55,.18)", comingBg:"rgba(212,175,55,.12)", gameIconBg:"rgba(212,175,55,.08)", gameInfoColor:"#4a4a4a", footerColor:"#3a3a3a", starColor1:"rgba(212,175,55,.6)", starColor2:"rgba(212,175,55,.4)", starColor3:"rgba(212,175,55,.7)", starColor4:"rgba(212,175,55,.3)", starColor5:"rgba(212,175,55,.5)", starColor6:"rgba(212,175,55,.8)" } },
    royalCarbon: { name: "👑 Royal Carbon", vars: { void:"#020105", deep:"#080410", card:"#0f0820", card2:"#160c30", v1:"#ffd700", v2:"#ffed4a", v3:"#fff4a3", v4:"#fff9d6", silver:"#fffdf5", mist:"#ffd700", gold:"#ffd700", border:"rgba(255,215,0,.3)", glow:"rgba(255,215,0,.6)", heroGradient1:"rgba(255,215,0,.18)", heroGradient2:"#0f0820", heroGradient3:"#020105", heroGlow:"rgba(255,215,0,0.3)", heroAfter:"rgba(255,215,0,.12)", heroShadow:"rgba(255,215,0,.1)", ruleBorder:"rgba(255,215,0,.08)", rankLeaderBg:"#160c30", rankRecruitBorder:"#4a2a6b", rankRecruitSym:"#6b4080", perkBg:"rgba(255,215,0,.12)", perkBorder:"rgba(255,215,0,.18)", applyBg:"rgba(255,215,0,.1)", applyBorder:"rgba(255,215,0,.22)", comingBg:"rgba(255,215,0,.14)", gameIconBg:"rgba(255,215,0,.1)", gameInfoColor:"#4a2a6b", footerColor:"#3a1a5a", starColor1:"rgba(255,215,0,.7)", starColor2:"rgba(255,215,0,.5)", starColor3:"rgba(255,215,0,.8)", starColor4:"rgba(255,215,0,.4)", starColor5:"rgba(255,215,0,.6)", starColor6:"rgba(255,215,0,.9)" } }
  };
  function applyTheme(key) {
    const t = THEMES[key]; if(!t) return;
    Object.entries(t.vars).forEach(([k,v]) => document.documentElement.style.setProperty(`--${k}`, v));
    localStorage.setItem('starry-theme', key);
    updateStars(t.vars);
    const toast = document.createElement('div'); toast.className = 'theme-toast'; toast.textContent = `Tema ${t.name}`; document.body.appendChild(toast); setTimeout(() => toast.remove(), 1500);
  }
  function updateStars(v) {
    const s = document.querySelector('.stars-bg'); if(!s) return;
    s.style.backgroundImage = `radial-gradient(1px 1px at 15% 12%, ${v.starColor1} 0%, transparent 100%), radial-gradient(1px 1px at 62% 8%, ${v.starColor2} 0%, transparent 100%), radial-gradient(1.2px 1.2px at 80% 22%, ${v.starColor3} 0%, transparent 100%), radial-gradient(1px 1px at 33% 35%, ${v.starColor4} 0%, transparent 100%), radial-gradient(1px 1px at 91% 47%, ${v.starColor5} 0%, transparent 100%), radial-gradient(1.5px 1.5px at 7% 58%, ${v.starColor6} 0%, transparent 100%), radial-gradient(1px 1px at 55% 65%, ${v.starColor5} 0%, transparent 100%), radial-gradient(1px 1px at 73% 78%, ${v.starColor4} 0%, transparent 100%), radial-gradient(1px 1px at 24% 82%, ${v.starColor2} 0%, transparent 100%), radial-gradient(1.2px 1.2px at 44% 91%, ${v.starColor3} 0%, transparent 100%), radial-gradient(1px 1px at 88% 94%, ${v.starColor1} 0%, transparent 100%), radial-gradient(1px 1px at 3% 97%, ${v.starColor6} 0%, transparent 100%)`;
  }
  function setupTheme() {
    const btn = document.getElementById('themeBtnVertical');
    const dd = document.getElementById('themeDropdownVertical');
    if(!btn||!dd) return;
    btn.addEventListener('click', e => { e.stopPropagation(); dd.classList.toggle('active'); });
    dd.querySelectorAll('[data-theme]').forEach(opt => opt.addEventListener('click', () => { applyTheme(opt.dataset.theme); dd.classList.remove('active'); }));
    document.addEventListener('click', e => { if(!btn.contains(e.target) && !dd.contains(e.target)) dd.classList.remove('active'); });
  }

  // ================== PAÍSES ==================
  const countries = {
    BO: { flag: '🇧🇴', currency: 'BOB', symbol: 'Bs', rate: 1 },
    AR: { flag: '🇦🇷', currency: 'ARS', symbol: 'ARS', rate: 0.002 },
    CL: { flag: '🇨🇱', currency: 'CLP', symbol: 'CLP', rate: 0.0011 },
    PE: { flag: '🇵🇪', currency: 'PEN', symbol: 'PEN', rate: 0.27 }
  };
  let currentCountry = 'BO';
  function formatPrice(usd) {
    const c = countries[currentCountry];
    const conv = usd / c.rate;
    return currentCountry === 'BO' ? `Bs ${conv.toFixed(2)}` : `${c.symbol} ${conv.toFixed(2)}`;
  }
  function setupCountry() {
    const btn = document.getElementById('countryBtnVertical');
    const dd = document.getElementById('countryDropdownVertical');
    const flagSpan = document.getElementById('currentFlagVertical');
    const curSpan = document.getElementById('currentCurrencyVertical');
    function updateUI(code) {
      const c = countries[code];
      flagSpan.textContent = c.flag;
      curSpan.textContent = c.currency;
      renderProducts();
    }
    const saved = localStorage.getItem('starry-country');
    if(saved && countries[saved]) currentCountry = saved;
    updateUI(currentCountry);
    btn.addEventListener('click', e => { e.stopPropagation(); dd.classList.toggle('active'); });
    dd.querySelectorAll('[data-country]').forEach(opt => opt.addEventListener('click', () => {
      currentCountry = opt.dataset.country;
      localStorage.setItem('starry-country', currentCountry);
      updateUI(currentCountry);
      dd.classList.remove('active');
    }));
    document.addEventListener('click', e => { if(!btn.contains(e.target) && !dd.contains(e.target)) dd.classList.remove('active'); });
  }

  // ================== PRODUCTOS Y CATEGORÍAS ==================
  const productsData = [
    { id:'mini', name:'Mini Pack', diamonds:'100 💎', basePriceUSD:1.99, badge:'Básico', icon:'💠', category:'diamonds' },
    { id:'starter', name:'Pack Starter', diamonds:'310 💎', basePriceUSD:4.99, badge:'Popular', icon:'💎', category:'diamonds' },
    { id:'semanal', name:'Pack Semanal', diamonds:'520 💎', basePriceUSD:7.99, badge:'Ahorro', icon:'✨', category:'diamonds' },
    { id:'elite', name:'Pack Élite', diamonds:'1060 💎', basePriceUSD:14.99, badge:'Recomendado', icon:'🌟', category:'diamonds' },
    { id:'pro', name:'Pack Pro', diamonds:'2180 💎', basePriceUSD:29.99, badge:'Mejor valor', icon:'💫', category:'diamonds' },
    { id:'leyenda', name:'Pack Leyenda', diamonds:'5600 💎', basePriceUSD:74.99, badge:'Máximo', icon:'👑', category:'diamonds' },
    { id:'pase1', name:'Pase Elite', diamonds:'Pase + 100 💎', basePriceUSD:9.99, badge:'Temporada', icon:'🎟️', category:'passes' },
    { id:'pase2', name:'Pase Elite Plus', diamonds:'Pase + 300 💎', basePriceUSD:19.99, badge:'Premium', icon:'🎫', category:'passes' },
    { id:'oferta1', name:'Oferta 2x1', diamonds:'520 💎 + 520 💎', basePriceUSD:14.99, badge:'Limitado', icon:'🔥', category:'offers' }
  ];
  let currentCategory = 'diamonds';
  function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const titleSpan = document.querySelector('#categoryTitle span');
    const filtered = productsData.filter(p => p.category === currentCategory);
    const titles = { diamonds:'Paquetes de Diamantes', passes:'Pases de Temporada', offers:'Ofertas Especiales' };
    if(titleSpan) titleSpan.textContent = titles[currentCategory];
    grid.innerHTML = filtered.map(p => {
      const price = formatPrice(p.basePriceUSD);
      return `<div class="product-card">
        <div class="product-icon">${p.icon}</div>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-diamonds">${p.diamonds}</div>
        <div class="product-price">${price}</div>
        <span class="product-badge">${p.badge}</span>
        <button class="buy-btn" data-product="${p.name}" data-diamonds="${p.diamonds}" data-price="${price}">Comprar</button>
      </div>`;
    }).join('');
    grid.querySelectorAll('.buy-btn').forEach(btn => btn.addEventListener('click', function() {
      const msg = `Hola! Quiero el ${this.dataset.product} (${this.dataset.diamonds}) por ${this.dataset.price}. Mi ID: `;
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    }));
  }
  function setupCategories() {
    const chips = document.querySelectorAll('.category-chip-vertical');
    chips.forEach(c => c.addEventListener('click', () => {
      currentCategory = c.dataset.category;
      chips.forEach(ch => ch.classList.remove('active'));
      c.classList.add('active');
      renderProducts();
    }));
  }

  const WA_NUMBER = "5491123456789"; // Reemplazar con número real

  // ================== CONTACTO ==================
  function setupContact() {
    const contactBtn = document.getElementById('contactBtnVertical');
    if (contactBtn) {
      contactBtn.addEventListener('click', () => {
        const msg = "Hola! Quiero información sobre los diamantes de Free Fire. ¿Me pueden ayudar?";
        window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
      });
    }
  }

  // ================== INICIO ==================
  function init() {
    const savedTheme = localStorage.getItem('starry-theme') || 'autumn';
    applyTheme(savedTheme);
    setupTheme();
    setupCountry();
    setupCategories();
    renderProducts();
    setupContact();
  }
  init();
})();