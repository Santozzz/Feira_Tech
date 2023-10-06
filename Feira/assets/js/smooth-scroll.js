const botao = document.querySelector('.btn-vermais');

botao.addEventListener('click', () =>{
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})

const inicio = document.querySelector('.navbar-item');

inicio.addEventListener('click', () =>{
    window.scroll({top: window.innerHeight, behavior: "smooth"})
}) 