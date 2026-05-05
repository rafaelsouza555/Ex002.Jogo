const botoesProximo = document.querySelectorAll('.btnproximo');

botoesProximo.forEach(botao => {
    botao.addEventListener('click', function() {
        // Encontra o passo atual (o que está visível)
        const atual = document.querySelector('.passo_ativo');
        
        // Define qual será o próximo passo com base no atributo 'data-proximo'
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        const proximo = document.getElementById(proximoPassoId);

        // Remove a classe ativo do atual e adiciona ao próximo
        if (proximo) {
            atual.classList.remove('passo_ativo');
            atual.classList.add('passo'); // Garante que fique escondido
            
            proximo.classList.add('passo_ativo');
            proximo.classList.remove('passo');
        }
    });
});