(function(){
  "use strict";
  
  console.log('✅ Starry Sky JS cargado correctamente - GitHub Pages ready');

  // ================== SISTEMA DE TEMAS (6 VARIANTES PREMIUM) ==================
  const THEMES = {
    autumn: {
      name: "🍂 Autumn",
      vars: {
        void: "#0f0501", deep: "#1f0f04", card: "#2f1a08", card2: "#40260c",
        v1: "#b45309", v2: "#d97706", v3: "#f59e0b", v4: "#fbbf24",
        silver: "#fffbeb", mist: "#fed7aa", gold: "#fcd34d",
        border: "rgba(217,119,6,.28)", glow: "rgba(180,83,9,.55)",
        heroGradient1: "rgba(180,83,9,.2)", heroGradient2: "#1f0f04", heroGradient3: "#0f0501",
        heroGlow: "rgba(217,119,6,0.2)", heroAfter: "rgba(180,83,9,.12)", heroShadow: "rgba(180,83,9,.1)",
        ruleBorder: "rgba(217,119,6,.07)",
        rankLeaderBg: "#2f1a08", rankRecruitBorder: "#4a5b3d", rankRecruitSym: "#6b8c5a",
        perkBg: "rgba(217,119,6,.12)", perkBorder: "rgba(217,119,6,.2)",
        applyBg: "rgba(180,83,9,.1)", applyBorder: "rgba(180,83,9,.24)",
        comingBg: "rgba(180,83,9,.16)", gameIconBg: "rgba(217,119,6,.1)", gameInfoColor: "#5a3a25",
        footerColor: "#3a2515",
        starColor1: "rgba(251,191,36,.7)", starColor2: "rgba(251,191,36,.5)", starColor3: "rgba(251,191,36,.8)",
        starColor4: "rgba(251,191,36,.4)", starColor5: "rgba(251,191,36,.6)", starColor6: "rgba(251,191,36,.9)"
      }
    },
    sakura: {
      name: "🌸 Sakura",
      vars: {
        void: "#1a0f1a", deep: "#2d1f2a", card: "#3d2a38", card2: "#4f3547",
        v1: "#d946ef", v2: "#f0abfc", v3: "#f5d0fe", v4: "#fae8ff",
        silver: "#fff0fa", mist: "#f0abfc", gold: "#fde047",
        border: "rgba(217,70,239,.22)", glow: "rgba(217,70,239,.4)",
        heroGradient1: "rgba(217,70,239,.2)", heroGradient2: "#3d2a38", heroGradient3: "#1a0f1a",
        heroGlow: "rgba(240,171,252,0.2)", heroAfter: "rgba(217,70,239,.12)", heroShadow: "rgba(217,70,239,.1)",
        ruleBorder: "rgba(240,171,252,.07)",
        rankLeaderBg: "#4f3547", rankRecruitBorder: "#6b4a6b", rankRecruitSym: "#8c5a8c",
        perkBg: "rgba(240,171,252,.12)", perkBorder: "rgba(240,171,252,.2)",
        applyBg: "rgba(217,70,239,.1)", applyBorder: "rgba(217,70,239,.24)",
        comingBg: "rgba(217,70,239,.16)", gameIconBg: "rgba(240,171,252,.1)", gameInfoColor: "#5a3a5a",
        footerColor: "#452a45",
        starColor1: "rgba(250,232,255,.7)", starColor2: "rgba(250,232,255,.5)", starColor3: "rgba(250,232,255,.8)",
        starColor4: "rgba(250,232,255,.4)", starColor5: "rgba(250,232,255,.6)", starColor6: "rgba(250,232,255,.9)"
      }
    },
    ember: {
      name: "🔥 Ember",
      vars: {
        void: "#0a0408", deep: "#140a10", card: "#1a0f16", card2: "#22141e",
        v1: "#b91c1c", v2: "#dc2626", v3: "#ef4444", v4: "#f87171",
        silver: "#fef3c7", mist: "#a8a29e", gold: "#fbbf24",
        border: "rgba(220,38,38,.2)", glow: "rgba(185,28,28,.5)",
        heroGradient1: "rgba(185,28,28,.2)", heroGradient2: "#1a0f16", heroGradient3: "#0a0408",
        heroGlow: "rgba(220,38,38,0.2)", heroAfter: "rgba(185,28,28,.12)", heroShadow: "rgba(185,28,28,.1)",
        ruleBorder: "rgba(220,38,38,.07)",
        rankLeaderBg: "#22141e", rankRecruitBorder: "#6b3d3d", rankRecruitSym: "#8c5a5a",
        perkBg: "rgba(220,38,38,.12)", perkBorder: "rgba(220,38,38,.2)",
        applyBg: "rgba(185,28,28,.1)", applyBorder: "rgba(185,28,28,.24)",
        comingBg: "rgba(185,28,28,.16)", gameIconBg: "rgba(220,38,38,.1)", gameInfoColor: "#5a3a3a",
        footerColor: "#3a2525",
        starColor1: "rgba(248,113,113,.7)", starColor2: "rgba(248,113,113,.5)", starColor3: "rgba(248,113,113,.8)",
        starColor4: "rgba(248,113,113,.4)", starColor5: "rgba(248,113,113,.6)", starColor6: "rgba(248,113,113,.9)"
      }
    },
    frost: {
      name: "❄️ Frost",
      vars: {
        void: "#020617", deep: "#0f172a", card: "#1e293b", card2: "#334155",
        v1: "#2563eb", v2: "#3b82f6", v3: "#60a5fa", v4: "#93c5fd",
        silver: "#f1f5f9", mist: "#94a3b8", gold: "#facc15",
        border: "rgba(59,130,246,.2)", glow: "rgba(37,99,235,.4)",
        heroGradient1: "rgba(37,99,235,.2)", heroGradient2: "#1e293b", heroGradient3: "#020617",
        heroGlow: "rgba(59,130,246,0.2)", heroAfter: "rgba(37,99,235,.12)", heroShadow: "rgba(37,99,235,.1)",
        ruleBorder: "rgba(59,130,246,.07)",
        rankLeaderBg: "#334155", rankRecruitBorder: "#3d4a6b", rankRecruitSym: "#4a5880",
        perkBg: "rgba(59,130,246,.12)", perkBorder: "rgba(59,130,246,.2)",
        applyBg: "rgba(37,99,235,.1)", applyBorder: "rgba(37,99,235,.24)",
        comingBg: "rgba(37,99,235,.16)", gameIconBg: "rgba(59,130,246,.1)", gameInfoColor: "#3a3a5a",
        footerColor: "#2a2a45",
        starColor1: "rgba(147,197,253,.7)", starColor2: "rgba(147,197,253,.5)", starColor3: "rgba(147,197,253,.8)",
        starColor4: "rgba(147,197,253,.4)", starColor5: "rgba(147,197,253,.6)", starColor6: "rgba(147,197,253,.9)"
      }
    },
    carbon: {
      name: "🖤 Carbon Black",
      vars: {
        void: "#050505", deep: "#0f0f0f", card: "#1a1a1a", card2: "#262626",
        v1: "#d4af37", v2: "#fbbf24", v3: "#fcd34d", v4: "#fde68a",
        silver: "#f5f5f5", mist: "#a3a3a3", gold: "#d4af37",
        border: "rgba(212,175,55,.25)", glow: "rgba(212,175,55,.5)",
        heroGradient1: "rgba(212,175,55,.15)", heroGradient2: "#1a1a1a", heroGradient3: "#050505",
        heroGlow: "rgba(212,175,55,0.25)", heroAfter: "rgba(212,175,55,.1)", heroShadow: "rgba(212,175,55,.08)",
        ruleBorder: "rgba(212,175,55,.06)",
        rankLeaderBg: "#262626", rankRecruitBorder: "#4a4a4a", rankRecruitSym: "#6b6b6b",
        perkBg: "rgba(212,175,55,.1)", perkBorder: "rgba(212,175,55,.15)",
        applyBg: "rgba(212,175,55,.08)", applyBorder: "rgba(212,175,55,.18)",
        comingBg: "rgba(212,175,55,.12)", gameIconBg: "rgba(212,175,55,.08)", gameInfoColor: "#4a4a4a",
        footerColor: "#3a3a3a",
        starColor1: "rgba(212,175,55,.6)", starColor2: "rgba(212,175,55,.4)", starColor3: "rgba(212,175,55,.7)",
        starColor4: "rgba(212,175,55,.3)", starColor5: "rgba(212,175,55,.5)", starColor6: "rgba(212,175,55,.8)"
      }
    },
    royalCarbon: {
      name: "👑 Royal Carbon",
      vars: {
        void: "#020105", deep: "#080410", card: "#0f0820", card2: "#160c30",
        v1: "#ffd700", v2: "#ffed4a", v3: "#fff4a3", v4: "#fff9d6",
        silver: "#fffdf5", mist: "#ffd700", gold: "#ffd700",
        border: "rgba(255,215,0,.3)", glow: "rgba(255,215,0,.6)",
        heroGradient1: "rgba(255,215,0,.18)", heroGradient2: "#0f0820", heroGradient3: "#020105",
        heroGlow: "rgba(255,215,0,0.3)", heroAfter: "rgba(255,215,0,.12)", heroShadow: "rgba(255,215,0,.1)",
        ruleBorder: "rgba(255,215,0,.08)",
        rankLeaderBg: "#160c30", rankRecruitBorder: "#4a2a6b", rankRecruitSym: "#6b4080",
        perkBg: "rgba(255,215,0,.12)", perkBorder: "rgba(255,215,0,.18)",
        applyBg: "rgba(255,215,0,.1)", applyBorder: "rgba(255,215,0,.22)",
        comingBg: "rgba(255,215,0,.14)", gameIconBg: "rgba(255,215,0,.1)", gameInfoColor: "#4a2a6b",
        footerColor: "#3a1a5a",
        starColor1: "rgba(255,215,0,.7)", starColor2: "rgba(255,215,0,.5)", starColor3: "rgba(255,215,0,.8)",
        starColor4: "rgba(255,215,0,.4)", starColor5: "rgba(255,215,0,.6)", starColor6: "rgba(255,215,0,.9)"
      }
    }
  };

  function applyTheme(themeKey) {
    const theme = THEMES[themeKey];
    if (!theme) return;
    const root = document.documentElement;
    const vars = theme.vars;
    Object.keys(vars).forEach(key => root.style.setProperty(`--${key}`, vars[key]));
    localStorage.setItem('starry-theme', themeKey);
    updateStars(vars);
    updateLogoFilter(themeKey);
    const toast = document.createElement('div');
    toast.className = 'theme-toast';
    toast.textContent = `Tema ${theme.name} aplicado`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1500);
  }

  function updateLogoFilter(themeKey) {
    const logo = document.querySelector('.logo-filter');
    if (logo) logo.setAttribute('data-theme', themeKey);
  }

  function updateStars(vars) {
    const starsBefore = document.querySelector('.stars-bg');
    if (!starsBefore) return;
    const starGradients = `radial-gradient(1px 1px at 15% 12%, ${vars.starColor1} 0%, transparent 100%), radial-gradient(1px 1px at 62% 8%, ${vars.starColor2} 0%, transparent 100%), radial-gradient(1.2px 1.2px at 80% 22%, ${vars.starColor3} 0%, transparent 100%), radial-gradient(1px 1px at 33% 35%, ${vars.starColor4} 0%, transparent 100%), radial-gradient(1px 1px at 91% 47%, ${vars.starColor5} 0%, transparent 100%), radial-gradient(1.5px 1.5px at 7% 58%, ${vars.starColor6} 0%, transparent 100%), radial-gradient(1px 1px at 55% 65%, ${vars.starColor5} 0%, transparent 100%), radial-gradient(1px 1px at 73% 78%, ${vars.starColor4} 0%, transparent 100%), radial-gradient(1px 1px at 24% 82%, ${vars.starColor2} 0%, transparent 100%), radial-gradient(1.2px 1.2px at 44% 91%, ${vars.starColor3} 0%, transparent 100%), radial-gradient(1px 1px at 88% 94%, ${vars.starColor1} 0%, transparent 100%), radial-gradient(1px 1px at 3% 97%, ${vars.starColor6} 0%, transparent 100%)`;
    starsBefore.style.setProperty('background-image', starGradients);
  }

  function createThemeSelector() {
    const themeBtn = document.getElementById('themeBtn');
    const themeDropdown = document.getElementById('themeDropdown');
    const themeOptions = document.querySelectorAll('.theme-opt');
    if (themeBtn && themeDropdown) {
      themeBtn.addEventListener('click', (e) => { e.stopPropagation(); themeDropdown.classList.toggle('active'); });
      themeOptions.forEach(opt => { opt.addEventListener('click', () => { const themeKey = opt.dataset.theme; applyTheme(themeKey); themeDropdown.classList.remove('active'); }); });
      document.addEventListener('click', (e) => { if (!themeBtn.contains(e.target) && !themeDropdown.contains(e.target)) themeDropdown.classList.remove('active'); });
    }
  }

  // ================== CONTADOR DE GUERRA ==================
  const warTabBtn = document.getElementById('warTabBtn');
  const warStatusBadge = document.getElementById('warStatusBadge');
  const warTimer = document.getElementById('warTimer');
  const warNextInfo = document.getElementById('warNextInfo');
  
  const warDays = [0, 3, 6];
  const warStartHour = 18;
  const warEndHour = 22;
  
  function getBoliviaTime() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * -4));
  }
  
  function updateWarCountdown() {
    const now = getBoliviaTime();
    const currentDay = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeMinutes = currentHour * 60 + currentMinute;
    
    const isWarDay = warDays.includes(currentDay);
    const isWithinTime = (currentTimeMinutes >= warStartHour*60 && currentTimeMinutes < warEndHour*60);
    const isActiveWar = isWarDay && isWithinTime;
    
    if (warTabBtn) {
      if (isActiveWar) warTabBtn.classList.add('war-glow');
      else warTabBtn.classList.remove('war-glow');
    }
    
    if (isActiveWar) {
      if (warStatusBadge) warStatusBadge.innerHTML = "⚔️ ¡GUERRA ACTIVA AHORA! ⚔️";
      const endTime = new Date(now);
      endTime.setHours(warEndHour, 0, 0, 0);
      let remainingMs = endTime - now;
      if (remainingMs < 0) remainingMs = 0;
      const remHours = Math.floor(remainingMs / 3600000);
      const remMinutes = Math.floor((remainingMs % 3600000) / 60000);
      if (warTimer) warTimer.innerHTML = `${remHours.toString().padStart(2,'0')}h ${remMinutes.toString().padStart(2,'0')}m`;
      if (warNextInfo) warNextInfo.innerHTML = "La guerra termina en";
    } else {
      if (warStatusBadge && !isActiveWar) warStatusBadge.innerHTML = "⚔️ PRÓXIMA GUERRA ⚔️";
      let nextWarDate = new Date(now);
      let found = false;
      for (let i = 0; i <= 7; i++) {
        const checkDate = new Date(now);
        checkDate.setDate(now.getDate() + i);
        const checkDay = checkDate.getDay();
        if (warDays.includes(checkDay)) {
          let warStart = new Date(checkDate);
          warStart.setHours(warStartHour, 0, 0, 0);
          if (checkDate.getTime() === now.getTime() && currentTimeMinutes >= warStartHour*60) continue;
          nextWarDate = warStart;
          found = true;
          break;
        }
      }
      if (!found) {
        let daysUntilSunday = (7 - currentDay) % 7;
        if (daysUntilSunday === 0 && currentTimeMinutes >= warStartHour*60) daysUntilSunday = 7;
        nextWarDate = new Date(now);
        nextWarDate.setDate(now.getDate() + daysUntilSunday);
        nextWarDate.setHours(warStartHour, 0, 0, 0);
      }
      const diffMs = nextWarDate - now;
      if (diffMs > 0) {
        const diffDays = Math.floor(diffMs / (1000*60*60*24));
        const diffHours = Math.floor((diffMs % (86400000)) / (3600000));
        const diffMinutes = Math.floor((diffMs % 3600000) / 60000);
        if (warTimer) warTimer.innerHTML = `${diffDays}d ${diffHours.toString().padStart(2,'0')}h ${diffMinutes.toString().padStart(2,'0')}m`;
      }
      if (warNextInfo) warNextInfo.innerHTML = "Próxima guerra en";
    }
  }
  
  setInterval(updateWarCountdown, 1000);
  updateWarCountdown();

  window.addEventListener('error', function(e) {
    const target = e.target;
    if (target.tagName === 'IMG') {
      target.style.display = 'none';
      const parent = target.parentNode;
      if (parent) {
        const placeholder = parent.querySelector('span');
        if (placeholder) placeholder.style.display = 'flex';
      }
    }
  }, true);

  // Navegación
  const tabs = document.querySelectorAll('.tab-btn');
  const views = document.querySelectorAll('.view');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetViewId = btn.dataset.view;
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      views.forEach(v => v.classList.remove('active'));
      const activeView = document.getElementById('view-' + targetViewId);
      if (activeView) activeView.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Jerarquía tabs
  const rtabs = document.querySelectorAll('.rtab');
  const rpanels = document.querySelectorAll('.rank-panel');
  rtabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const rank = btn.dataset.rank;
      rtabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      rpanels.forEach(p => p.classList.remove('active'));
      const activePanel = document.getElementById('rp-' + rank);
      if (activePanel) activePanel.classList.add('active');
    });
  });

  // Guerras toggles
  const warToggles = document.querySelectorAll('.war-toggle-btn');
  warToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const warSection = btn.closest('.war-section');
      const panel = warSection.querySelector('.war-panel');
      if (panel.classList.contains('active')) {
        panel.classList.remove('active');
        btn.classList.remove('active');
      } else {
        panel.classList.add('active');
        btn.classList.add('active');
      }
    });
  });

  // Modal WhatsApp
  const modal = document.getElementById('idModal');
  const whatsappBtn = document.getElementById('whatsappBtn');
  const closeModal = document.querySelector('.modal-close');
  const cancelBtn = document.getElementById('modalCancel');
  const continueBtn = document.getElementById('modalContinue');
  const ffIdInput = document.getElementById('ffIdInput');
  const WA_NUMBER = "5491123456789";
  function openModal() { modal.style.display = 'flex'; ffIdInput.value = ''; continueBtn.disabled = true; continueBtn.classList.remove('active'); }
  function closeModalFunc() { modal.style.display = 'none'; }
  if (whatsappBtn) whatsappBtn.addEventListener('click', openModal);
  if (closeModal) closeModal.addEventListener('click', closeModalFunc);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModalFunc);
  window.addEventListener('click', (e) => { if (e.target === modal) closeModalFunc(); });
  if (ffIdInput) {
    ffIdInput.addEventListener('input', () => {
      const value = ffIdInput.value.trim();
      const isValid = /^[a-zA-Z0-9]{10,}$/.test(value);
      if (isValid) { continueBtn.disabled = false; continueBtn.classList.add('active'); }
      else { continueBtn.disabled = true; continueBtn.classList.remove('active'); }
    });
  }
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      if (continueBtn.disabled) return;
      const userId = ffIdInput.value.trim();
      if (!userId) return;
      const message = `Hola, estoy interesado en unirme a Starry Sky. Ya revisé los requisitos en la web. Mi ID de Free Fire es: ${userId}. ¿Qué sigue?`;
      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodedMsg}`;
      window.open(waUrl, '_blank');
      closeModalFunc();
    });
  }

  // Animaciones de entrada
  const activeView = document.querySelector('.view.active');
  if (activeView) {
    const items = activeView.querySelectorAll('.hero, .rules-card, .rank-card, .req-box, .coming-card, .war-section');
    items.forEach((el, idx) => { el.style.animationDelay = `${idx * 0.05}s`; el.style.animationFillMode = 'backwards'; });
  }
  if ('IntersectionObserver' in window) {
    const fadeElements = document.querySelectorAll('.rank-card, .rule-row, .game-slot, .war-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } });
    }, { threshold: 0.1, rootMargin: '20px' });
    fadeElements.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(12px)'; el.style.transition = 'opacity 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.5s ease'; observer.observe(el); });
  }

  // Iniciar tema
  const savedTheme = localStorage.getItem('starry-theme');
  if (savedTheme && THEMES[savedTheme]) applyTheme(savedTheme);
  else applyTheme('autumn');
  createThemeSelector();
})();