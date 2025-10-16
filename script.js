const imagemVisualizacao = document.querySelector("#visualizacao img");

let numImagemSelecionada = 1;

function atualizarImagemSelecionada() {
  const opcaoImagemSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.charAt(0);

  numImagemSelecionada = opcaoImagemSelecionada;

  imagemVisualizacao.src =
    "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" +
    numImagemSelecionada +
    ".jpeg";
}
