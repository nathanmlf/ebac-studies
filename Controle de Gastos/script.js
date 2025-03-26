const matrizGastos = [
  ["Alimentação", 0],
  ["Transporte", 0],
  ["Lazer", 0],
  ["Outros", 0],
  ["Total", 0],
];

//Funções utilitárias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;
const limparCampos = () => (obterElemento("valor").value = "");
const formataMoeda = (valor) => valor.toFixed(2).replace(".", ",");

//Obter valores do formulário
const obterValorInformado = () => parseFloat(obterElemento("valor").value);
const obterCategoriaInformada = () => obterElemento("categoria").value;

//Obter categoria da matriz

const obterCategoria = (matriz, nomeCategoria) =>
  matriz.find((item) => item[0] === nomeCategoria);

//Atualizar valores da matriz

const atualizaValorCategoria = (categoria, valor) =>
  (categoria[1] = somaValor(categoria[1], valor));

const atualizarInterface = () => {
  matrizGastos.forEach(([nome, valor]) => {
    const elemento = obterElemento(nome);
    elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`;
  });
};

function adicionarGasto() {
  const valorInformado = obterValorInformado();
  const categoriaInformada = obterCategoriaInformada();

  if (valorNegativo(valorInformado)) {
    alert("alor inválido. O valor não pode ser negativo.");
    return;
  }
  const categoria = obterCategoria(matrizGastos, categoriaInformada);
  const total = obterCategoria(matrizGastos, "Total");

  atualizaValorCategoria(categoria, valorInformado);
  atualizaValorCategoria(total, valorInformado);
  atualizarInterface();
  limparCampos();
}
