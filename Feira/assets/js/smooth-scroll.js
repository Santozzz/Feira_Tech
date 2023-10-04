const botao = document.querySelector('.btn-vermais');

botao.addEventListener('click', () =>{
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})