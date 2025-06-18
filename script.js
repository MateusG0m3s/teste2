document.addEventListener('DOMContentLoaded', function() {
    // === BOTÃO DE SURPRESA ===
    const surpriseBtn = document.getElementById('surpresaBtn');
    
    if (surpriseBtn) {
        surpriseBtn.addEventListener('click', function() {
            alert("Te amo, minha princesa! ❤");
            const heartInterval = setInterval(createHeart, 100);
            setTimeout(() => clearInterval(heartInterval), 10000);
        });
    }
    // === BOTÃO DE SURPRESA COM MÚSICA ===
surpriseBtn.addEventListener('click', function() {
    const musica = document.getElementById('musicaRomantica');
    
    // 1. Mostra mensagem
    alert("Aqui estamos nós, mais uma vez ❤");
    
    // 2. Toca a música
    musica.currentTime = 0; // Reinicia se já estiver tocando
    musica.play().catch(e => console.log("Erro ao reproduzir:", e));
    
    // 3. Ativa chuva de corações
    const heartInterval = setInterval(createHeart, 100);
    
    // 4. Para tudo após 1 minuto (opcional)
    setTimeout(() => {
        musica.pause();
        clearInterval(heartInterval);
    }, 30000);
});

    // === CHUVA DE CORAÇÕES ===
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-rain');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.top = '-20px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    // === CARROSSEL DE FOTOS ===
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.querySelector('.carousel-dots');

    // Cria os indicadores (bolinhas)
    if (slides.length > 0 && dotsContainer) {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function updateCarousel() {
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentSlide);
            });
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateCarousel();
        }

        // Botões de navegação
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
                updateCarousel();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
                updateCarousel();
            });
        }

        // Troca automática
        setInterval(() => {
            currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
            updateCarousel();
        }, 5000);

        // Inicializa o carrossel
        updateCarousel();
    }
});