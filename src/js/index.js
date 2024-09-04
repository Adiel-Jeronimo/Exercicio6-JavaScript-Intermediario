const pegarItemsPerguntasEResposta = document.querySelectorAll('.item');

pegarItemsPerguntasEResposta.forEach(function (item){
    item.addEventListener('click', () => {
        const itemAtivoAtual = document.querySelector('.ativo');
        
        if (itemAtivoAtual){
            itemAtivoAtual.classList.remove('ativo');
        }   

        item.classList.add('ativo');
        
    })
})