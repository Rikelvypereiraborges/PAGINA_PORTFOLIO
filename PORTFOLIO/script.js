// Exibe uma mensagem de boas-vindas ao carregar a página
window.onload = function() {
    alert("Bem-vindo ao site de Rikelvy Borges!");
};

// Seleciona a imagem pela ID
const imagem = document.getElementById('minhafoto');

// Adiciona o efeito ao passar o mouse sobre a imagem
imagem.addEventListener('mouseover', (minhafoto) => {
    imagem.classList.add('expandir');
});

// Remove o efeito quando o mouse sai da imagem
imagem.addEventListener('mouseout', (minhafoto) => {
    imagem.classList.remove('expandir');
});
