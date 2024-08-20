// Exibe uma mensagem de boas-vindas ao carregar a página
window.onload = function() {
    alert("Bem-vindo ao site de Rikelvy Borges!");
};
// Código para efeito de expansão de imagem ao passar o mouse
const images = document.querySelectorAll('#foto1, #foto2'); // Seleciona elementos com id 'foto1' e 'foto2'

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.2)'; // Expande a imagem
        image.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)'; // Adiciona uma sombra
        image.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease'; // Transição suave
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)'; // Volta ao tamanho original
        image.style.boxShadow = 'none'; // Remove a sombra
    });
});
