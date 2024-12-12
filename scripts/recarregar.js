/* script responsável por a cada 10 segundos recarregar automaticamente minha página
atualizando seus conteúdos e possíveis modificações do desenvolvedor, otimizando
o trabalho de testes sobre a responsividade da interface: */

setTimeout(()=>{    
    window.location.reload();   
},10000);

console.log('Recarregou!')
