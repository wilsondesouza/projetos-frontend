// Espera até que a página esteja completamente carregada
window.addEventListener("load", () => {
    // Define o tempo de exibição do loader (em milissegundos)
    const loaderDisplayTime = 2000; 

    // Obtém referências ao loader e ao conteúdo principal
    const loader = document.querySelector(".loader");
    const content = document.querySelector("#content");

    // Define um timer para ocultar o loader após o tempo especificado
    setTimeout(() => {
        loader.style.display = "none"; 
        content.style.display = "block"; 
        document.body.style.overflow = "auto"; 
    }, loaderDisplayTime);
});
