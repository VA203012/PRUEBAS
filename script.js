(function(){
  "use strict";

  const styleTitle = 'font-family: "Cinzel", serif; font-size: 14px; color: #c4b5fd; background: #0b0720; padding: 4px 8px; border-radius: 4px;';
  const styleSub = 'font-family: "Outfit", sans-serif; font-size: 12px; color: #8892aa;';
  console.log('%c✨ STARRY SKY SYSTEM ✨', styleTitle);
  console.log('%cindex.html ↔ style.css ↔ script.js | Comunicación Establecida', styleSub);

  // Fallback para imágenes rotas
  window.addEventListener('error', function(e) {
    const target = e.target;
    if (target.tagName === 'IMG') {
      console.warn(`[Starry Sky] Imagen no encontrada: ${target.src}`);
      target.style.display = 'none';
      const parent = target.parentNode;
      if (parent) {
        const placeholder = parent.querySelector('.gallery-placeholder, .g-ph, .gal-inner');
        if (placeholder) placeholder.style.display = 'flex';
      }
    }
  }, true);

  // ================== NAVEGACIÓN PRINCIPAL ==================
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
      console.log(`%c[NAV] Vista activa: ${targetViewId}`, 'color: #8b5cf6;');
    });
  });

  // ================== TABS DE JERARQUÍA ==================
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
      console.log(`%c[RANK] Mostrando jerarquía: ${rank}`, 'color: #c9a84c;');
    });
  });

  // ================== NUEVA GALERÍA CON PESTAÑAS (TOGGLE) ==================
  const galleryTabs = document.querySelectorAll('.gallery-tab');
  const galleryPanels = document.querySelectorAll('.gallery-panel');
  
  function activateGalleryPanel(panelId) {
    galleryPanels.forEach(p => p.classList.remove('active'));
    const targetPanel = document.getElementById(panelId);
    if (targetPanel) targetPanel.classList.add('active');
  }

  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetGallery = tab.dataset.gallery;
      const panelId = (targetGallery === 'destacados') ? 'gallery-destacados' : 'gallery-victorias';
      
      const currentActivePanel = document.querySelector('.gallery-panel.active');
      if (currentActivePanel && currentActivePanel.id === panelId) {
        currentActivePanel.classList.remove('active');
        tab.classList.remove('active');
        console.log(`%c[GALERIA] Panel ocultado: ${targetGallery}`, 'color: #a78bfa;');
      } else {
        galleryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activateGalleryPanel(panelId);
        console.log(`%c[GALERIA] Mostrando: ${targetGallery}`, 'color: #a78bfa;');
      }
    });
  });

  // ================== MODAL PARA ID DE FREE FIRE Y WHATSAPP ==================
  const modal = document.getElementById('idModal');
  const whatsappBtn = document.getElementById('whatsappBtn');
  const closeModal = document.querySelector('.modal-close');
  const cancelBtn = document.getElementById('modalCancel');
  const continueBtn = document.getElementById('modalContinue');
  const ffIdInput = document.getElementById('ffIdInput');

  // Número de WhatsApp del líder (cambiar por el real)
  const WA_NUMBER = "591 63790452";

  function openModal() {
    modal.style.display = 'flex';
    ffIdInput.value = '';
    continueBtn.disabled = true;
    continueBtn.classList.remove('active');
  }

  function closeModalFunc() {
    modal.style.display = 'none';
  }

  whatsappBtn.addEventListener('click', openModal);
  closeModal.addEventListener('click', closeModalFunc);
  cancelBtn.addEventListener('click', closeModalFunc);
  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFunc();
  });

  ffIdInput.addEventListener('input', () => {
    const value = ffIdInput.value.trim();
    const isValid = /^[a-zA-Z0-9]{10,}$/.test(value);
    if (isValid) {
      continueBtn.disabled = false;
      continueBtn.classList.add('active');
    } else {
      continueBtn.disabled = true;
      continueBtn.classList.remove('active');
    }
  });

  continueBtn.addEventListener('click', () => {
    if (continueBtn.disabled) return;
    const userId = ffIdInput.value.trim();
    if (!userId) return;
    const message = `Hola, estoy interesado en unirme a Starry Sky. Ya revisé los requisitos en la web. Mi ID de Free Fire es: ${userId}. ¿Qué sigue?`;
    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodedMsg}`;
    window.open(waUrl, '_blank');
    closeModalFunc();
    console.log(`%c[WHATSAPP] Enviando solicitud con ID: ${userId}`, 'color: #25D366;');
  });

  // ================== ANIMACIONES DE ENTRADA MEJORADAS ==================
  const activeView = document.querySelector('.view.active');
  if (activeView) {
    const items = activeView.querySelectorAll('.hero, .rules-card, .rank-card, .req-box, .gallery-grid, .coming-card');
    items.forEach((el, idx) => {
      el.style.animationDelay = `${idx * 0.05}s`;
      el.style.animationFillMode = 'backwards';
    });
  }

  if ('IntersectionObserver' in window) {
    const fadeElements = document.querySelectorAll('.gal-slot, .rank-card, .rule-row, .gallery-card, .game-slot');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1, rootMargin: '20px' });
    fadeElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      el.style.transition = 'opacity 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.5s ease';
      observer.observe(el);
    });
  }

  const footerCopy = document.querySelector('.footer-copy');
  if (footerCopy) {
    const currentYear = new Date().getFullYear();
    if (!footerCopy.innerHTML.includes(currentYear)) {
      footerCopy.innerHTML = footerCopy.innerHTML.replace('2025', currentYear);
    }
  }

  const juegosBtn = document.querySelector('[data-view="juegos"]');
  if (juegosBtn) {
    juegosBtn.addEventListener('click', () => {
      setTimeout(() => {
        const comingCard = document.querySelector('.coming-card');
        if (comingCard) {
          comingCard.style.transition = 'box-shadow 0.5s';
          comingCard.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.2)';
          setTimeout(() => comingCard.style.boxShadow = '', 500);
        }
      }, 100);
    });
  }
})();