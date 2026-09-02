const formulario = document.querySelector("#form-cep");
const inputCep = document.querySelector("#cep");
const botaoBuscar = document.querySelector("#botao-buscar");
const status = document.querySelector("#status");
const resultado = document.querySelector("#resultado");
const resultadoCep = document.querySelector("#resultado-cep");
const logradouro = document.querySelector("#logradouro");
const bairro = document.querySelector("#bairro");
const cidadeUf = document.querySelector("#cidade-uf");
const ddd = document.querySelector("#ddd");

// TODO 1: complete a função para devolver apenas os números.

function deixarSomenteNumeros(valor) {

// Pista: replace e expressão regular.

}


// TODO 2: construa a máscara 00000-000.

function formatarCep(valor) {

// Limpe o valor, limite a 8 números e decida quando inserir o hífen.

}


// TODO 3: mostre uma mensagem e aplique a classe recebida em tipo.

function mostrarStatus(mensagem, tipo = "") {

// Atualize textContent, restaure a classe status e trate o tipo.

}


// TODO 4: controle o estado e o texto do botão.

function alterarCarregamento(estaCarregando) {

// Durante a espera: botão desabilitado e texto "Buscando...".

// Depois da espera: botão habilitado e texto "Buscar CEP".

}


// TODO 5: esconda o card de resultado.

function esconderResultado() {

// Use a classe CSS oculto.

}


// TODO 6: leve os dados da API para os cinco campos e revele o card.

function preencherResultado(dados) {

// Propriedades: cep, logradouro, bairro, localidade, uf e ddd.

// Use "Não informado" quando um campo vier vazio.

}


// TODO 7: transforme buscarCep em uma função assíncrona e impeça o submit.

function buscarCep(evento) {

// TODO 8: leia, limpe e valide o CEP. Também limpe a interface antiga.


// TODO 9: ative o carregamento e informe que a consulta começou.


// TODO 10: crie o try com fetch, verificação HTTP, conversão do JSON,

// verificação de CEP inexistente e exibição do resultado.


// TODO 11: escreva o catch e o finally.

}


// TODO 12: crie os eventos input e submit.

// No input, formate o valor digitado. No submit, execute buscarCep.