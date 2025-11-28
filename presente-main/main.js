const slides = document.querySelector(".slides");
    const slideWidth = 300; // largura fixa da imagem
    let index = 0;
    setInterval(() => {
        index = (index + 1) % 3; // 3 imagens
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }, 3000);
    
    const playBtn = document.getElementById('playBtn');
    const audio = document.getElementById('audio');
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = '⏸';
        } else {
            audio.pause();
            playBtn.textContent = '▶';
        }
    }); 

    const tempoJuntos = document.getElementById("tempoJuntos");
    const dataInicio = new Date("2022-10-31T00:00:00");
    function atualizarContador() {
        const agora = new Date();
        const diferenca = agora - dataInicio;
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);
        tempoJuntos.textContent = `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
    }

    setInterval(atualizarContador, 1000);
    atualizarContador();