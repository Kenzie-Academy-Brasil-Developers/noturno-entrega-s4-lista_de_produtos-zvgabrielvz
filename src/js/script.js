// Selecionando elemento ul do HTML
const ul = document.querySelector('.containerListaProdutos ul');



function montarListaProdutos(listaProdutos) {
    let somaValor = 0; 
    ul.innerHTML = '';
    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');

        // Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;

        // Adicionando o elementos para o li
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);

        // Adicionando li ao HTML
        ul.appendChild(li);

        // Calculando Preço
        let preco = produto.preco;
        somaValor += preco;
        console.log(somaValor)
    });
    const campoPreco = document.getElementById('precoTotal');
    campoPreco.innerHTML = somaValor.toFixed(2);
}

function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });

    montarListaProdutos(listaHortifruti);


}


function filtrarPorLaticinio() {
    const listaLaticinio = produtos.filter((produto) => {
        return produto.secao === 'Laticínio';
    });

    montarListaProdutos(listaLaticinio);

    // Selecionando botao em nosso HTML
   
}
 const botaoMostrarLaticinio = document.querySelector('.estiloGeralBotoes--filtrarLaticinio');

    // Adicionando event listener de clique, e executando a função de filtro
    botaoMostrarLaticinio.addEventListener('click', filtrarPorLaticinio);

const buttonShowAll = document.getElementById('showAll');
const buttonFilterHortifruti = document.getElementById('hortifruti');



buttonShowAll.addEventListener("click", function(){
    montarListaProdutos(produtos)
});


buttonFilterHortifruti.addEventListener("click", filtrarPorHortifruti);

function textoNome() {
    const inputNome = document.getElementById('inputNome');
    const textName = inputNome.value;
    return textName
}


function filtrarPorNome() {
    const inputNome = document.getElementById('inputNome').value.toLowerCase();
    const listaNome = produtos.filter((produto) => {
        return produto.nome === inputNome;
    });
    montarListaProdutos(listaNome);
}
const botaoFiltraNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');

botaoFiltraNome.addEventListener('click', filtrarPorNome);




