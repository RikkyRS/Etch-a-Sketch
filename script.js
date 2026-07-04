function criarGrid(tamanho) {
    const container = document.getElementById('container');
    const pixelSize = 960 / tamanho;
    
    // limpa o container
    container.innerHTML = '';
    
    // cria tamanho * tamanho pixels
    for (let i = 0; i < tamanho * tamanho; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.style.width = `${pixelSize}px`;
        div.style.height = `${pixelSize}px`;
        div.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
        container.appendChild(div);
    }
}

// inicia com 16x16
criarGrid(16);

// botão mudar tamanho — FORA da função
document.getElementById('btn-grid').addEventListener('click', () => {
    const tamanho = parseInt(prompt('Digite o número de quadrados por lado (1-100):'));
    if (tamanho >= 1 && tamanho <= 100) {
        criarGrid(tamanho);
    }
});

// botão reset
document.getElementById('btn-reset').addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = '';
    });
});