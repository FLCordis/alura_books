let livros = [];
const endpointDataAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosAPI()

async function getBuscarLivrosAPI(){
    const res = await fetch(endpointDataAPI);
    livros = await res.json();
    livros = aplicarDesconto(livros);
    exibirLivros(livrosDesconto);
}