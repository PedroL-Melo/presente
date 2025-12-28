const slides = document.querySelector(".slides");
    const slideWidth = 300; // largura fixa da imagem
    let index = 0;
    setInterval(() => {
        index = (index + 1) % 3; // 3 imagens
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }, 3000);

const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('audio');

// Lógica original do botão de play (MANTENHA ISSO)
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸';
    } else {
        audio.pause();
        playBtn.textContent = '▶';
    }
});

// Elementos da intro
const introScreen = document.getElementById('intro-screen');
const btnEntrar = document.getElementById('btnEntrar');

// Função para criar a chuva de corações
function criarCoracoes() {
    setInterval(() => {
        const coracao = document.createElement('div');
        coracao.classList.add('coracao');
        coracao.innerHTML = '❤️';

        // Posição aleatória na horizontal
        coracao.style.left = Math.random() * 100 + 'vw';
    
        // Tamanho aleatório
        coracao.style.fontSize = (Math.random() * 20 + 10) + 'px';
        
        // Duração da queda aleatória (entre 2s e 5s)
        coracao.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        document.body.appendChild(coracao);
        
        // Remove o coração do HTML depois que ele cai para não pesar o site
        setTimeout(() => {
            coracao.remove();
        }, 5000);
    }, 300); // Cria um coração a cada 300ms
}

// Evento do botão de entrar
btnEntrar.addEventListener('click', () => {
    // 1. Tocar música
    audio.play().then(() => {
        playBtn.textContent = '⏸'; // Atualiza o botão do player oficial
    }).catch(error => console.log("Erro no play:", error));

    // 2. Esconder a tela de intro
    introScreen.style.opacity = '0';
    setTimeout(() => {
        introScreen.style.display = 'none';
    }, 1000); // Espera o efeito de sumir (fade out)

    // 3. Iniciar chuva de corações
    criarCoracoes();
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
