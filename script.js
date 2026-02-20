const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');
const icon = mobileBtn.querySelector('i'); // Seleciona o ícone dentro do botão

mobileBtn.addEventListener('click', () => {
    // 1. Alterna a classe 'open' no menu
    mobileMenu.classList.toggle('open');

    // 2. Alterna o ícone entre Barras e X
    if (mobileMenu.classList.contains('open')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// Seleciona todos os links E botões dentro do menu mobile
const mobileItems = document.querySelectorAll('#mobile-menu a, #mobile-menu button');

mobileItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('open'); // Fecha o menu
        icon.classList.replace('fa-xmark', 'fa-bars'); // Reseta o ícone
    });
});

// Fecha o menu ao clicar fora dele (no resto da página)
window.addEventListener('click', (e) => {
    // Verifica se o menu está aberto e se o clique NÃO foi dentro do menu nem no botão de abrir
    if (mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(e.target) &&
        !mobileBtn.contains(e.target)) {

        mobileMenu.classList.remove('open');
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// Lógica do Carrossel (Hero)
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active'); // Esconde o atual
    currentSlide = (currentSlide + 1) % slides.length; // Vai para o próximo (e volta ao 0 se acabar)
    slides[currentSlide].classList.add('active'); // Mostra o novo
}

// Troca de slide a cada 5 segundos (5000ms)
setInterval(nextSlide, 5000);

// Lógica do Modal de Contato
const contactBtns = document.querySelectorAll('.btn-contact');
const modal = document.getElementById('contact-modal');
const closeBtn = document.querySelector('.close-btn');

// Abre o modal ao clicar em qualquer botão "Fale Conosco"
contactBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('show');
    });
});

// Fecha o modal ao clicar no X
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Fecha o modal ao clicar fora da caixinha branca
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Validação do Formulário
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex simples para validar e-mail

    // Testa se o valor do input NÃO bate com o padrão de e-mail
    if (!emailRegex.test(emailInput.value)) {
        e.preventDefault(); // Impede o envio do formulário
        alert('Por favor, insira um e-mail válido (ex: nome@dominio.com) para continuarmos!');
    }
});

// Botão Voltar ao Topo
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Evita o comportamento padrão do link
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente para o topo
});

// Animação de Scroll (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Se o elemento apareceu na tela
            entry.target.classList.add('scroll-visible'); // Adiciona a classe que faz aparecer
        }
    });
}, { threshold: 0.1 }); // Dispara quando 10% do elemento estiver visível

// Seleciona os elementos que queremos animar
const elementsToAnimate = document.querySelectorAll('.card, .service-card, .testimonial-card, .section-title');

elementsToAnimate.forEach(el => {
    el.classList.add('scroll-hidden'); // Esconde eles inicialmente
    observer.observe(el); // Começa a vigiar
});

// Efeito de Mudança de Cor do Menu ao Rolar
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Se rolar mais de 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
