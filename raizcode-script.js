// ============================================
//  RAIZCODE — Script Principal
// ============================================

// --- 1. MENU MOBILE (Hambúrguer) ---
const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = mobileBtn.querySelector('i');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  if (mobileMenu.classList.contains('open')) {
    menuIcon.classList.replace('fa-bars', 'fa-xmark');
  } else {
    menuIcon.classList.replace('fa-xmark', 'fa-bars');
  }
});

// Fecha menu ao clicar em um link ou botão interno
document.querySelectorAll('#mobile-menu a, #mobile-menu button').forEach(item => {
  item.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuIcon.classList.replace('fa-xmark', 'fa-bars');
  });
});

// Fecha menu ao clicar fora
window.addEventListener('click', (e) => {
  if (
    mobileMenu.classList.contains('open') &&
    !mobileMenu.contains(e.target) &&
    !mobileBtn.contains(e.target)
  ) {
    mobileMenu.classList.remove('open');
    menuIcon.classList.replace('fa-xmark', 'fa-bars');
  }
});


// --- 2. HEADER: Efeito de scroll (fundo escuro ao rolar) ---
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// --- 3. BOTÃO VOLTAR AO TOPO ---
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// --- 4. ANIMAÇÃO DE SCROLL (Intersection Observer) ---
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Atraso escalonado para cards em grid
      const siblings = entry.target.parentElement
        ? Array.from(entry.target.parentElement.children).filter(el => el.classList.contains('scroll-hidden') || el.classList.contains('scroll-visible'))
        : [];
      const index = siblings.indexOf(entry.target);
      const delay = index * 80; // ms de atraso por item

      setTimeout(() => {
        entry.target.classList.add('scroll-visible');
      }, delay);

      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-hidden').forEach(el => {
  scrollObserver.observe(el);
});


// --- 5. FORMULÁRIO DE CONTATO ---
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');

function showToast(message) {
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const whatsapp = document.getElementById('whatsapp').value.trim();
  const servico = document.getElementById('servico').value;

  // Validação simples
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Por favor, insira um e-mail válido.`;
    toast.style.background = '#e74c3c';
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => { toast.style.background = ''; }, 400);
    }, 3500);
    return;
  }

  // Monta mensagem pré-formatada pro WhatsApp
  const servicoTexto = servico || 'Não especificado';
  const msg = `Olá! Vim pelo site da RaizCode e gostaria de uma análise gratuita.%0A%0A👤 *Nome:* ${encodeURIComponent(nome)}%0A📧 *E-mail:* ${encodeURIComponent(email)}%0A📱 *WhatsApp:* ${encodeURIComponent(whatsapp)}%0A🛠️ *Serviço:* ${encodeURIComponent(servicoTexto)}`;
  const waUrl = `https://wa.me/5521973767603?text=${msg}`;

  // Abre WhatsApp em nova aba
  window.open(waUrl, '_blank');

  // Reset e toast de sucesso
  contactForm.reset();
  showToast('Abrindo WhatsApp... Aguardamos sua mensagem!');
});


// --- 6. SMOOTH SCROLL para âncoras ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const headerHeight = header.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});


// --- 7. DESTAQUE DO LINK ATIVO NO MENU ---
const sections = document.querySelectorAll('section[id], main > section[id]');
const navLinks = document.querySelectorAll('.nav-item a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? '#ffffff'
          : 'rgba(255,255,255,0.7)';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => activeObserver.observe(section));


// --- 8. PARTÍCULA DECORATIVA NO HERO (Parallax leve) ---
const floatingCodes = document.querySelectorAll('.floating-code');

window.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const mx = (e.clientX / innerWidth - 0.5) * 20;
  const my = (e.clientY / innerHeight - 0.5) * 20;

  floatingCodes.forEach((el, i) => {
    const factor = (i + 1) * 0.3;
    el.style.transform = `translate(${mx * factor}px, ${my * factor}px)`;
  });
});
