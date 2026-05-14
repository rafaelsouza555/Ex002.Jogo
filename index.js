// Seleciona todos os botões de "Próximo"
const botoesProximo = document.querySelectorAll('.btnproximo');

botoesProximo.forEach(botao => {
    botao.addEventListener('click', function() {
        // Encontra o passo atual (o que está visível)
        const atual = document.querySelector('.passo_ativo');
        
        // Define qual será o próximo passo com base no atributo 'data-proximo'
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        const proximo = document.getElementById(proximoPassoId);

        // Troca as classes se o próximo elemento existir
        if (proximo && atual) {
            atual.classList.remove('passo_ativo');
            // Opcional: Adicionar a classe 'passo' garante que o CSS aplique display:none
            atual.classList.add('passo'); 
            
            proximo.classList.add('passo_ativo');
            proximo.classList.remove('passo');
            
            // Rola a tela para o topo para melhor experiência
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Seleciona todos os botões de "Voltar"
const botoesVoltar = document.querySelectorAll('.btnvoltar');

botoesVoltar.forEach(botao => {
    botao.addEventListener('click', function() {
        const atual = document.querySelector('.passo_ativo');
        const anteriorPassoId = 'passo-' + this.getAttribute('data-anterior');
        const anterior = document.getElementById(anteriorPassoId);
        
        if (anterior && atual) {
            atual.classList.remove('passo_ativo');
            atual.classList.add('passo');
            
            anterior.classList.add('passo_ativo');
            anterior.classList.remove('passo');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});