const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    const categoriaBtn = elementoBtn.value
    let livrosFiltrados = categoriaBtn == 'disponivel' ? filtrarDisponibilidade() : filtrarCategoria(categoriaBtn);
    exibirLivros(livrosFiltrados);
    if (categoriaBtn == 'disponivel'){
        const valorTotal = calcularTotalLivrosDisponiveis(livrosFiltrados);
        exibirTotalLivrosDisponiveis(valorTotal)
    }
}

function filtrarCategoria(categoriaBtn) {
    return livros.filter(livro => livro.categoria == categoriaBtn);
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirTotalLivrosDisponiveis(valorTotal){
    elementoDisponibilidadeTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}