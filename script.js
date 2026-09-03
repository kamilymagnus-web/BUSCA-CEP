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

function deixarSomenteNumeros(valor) {
    let cep = valor.replace(/\D/g, "");  // Use replace e expressão regular para remover tudo que não for número. (correto)
    return cep;
}

// TODO 2: construa a máscara 00000-000.
function formatarCep(valor) {  // Limpe o valor, limite a 8 números e decida quando inserir o hífen.
    let cep = deixarSomenteNumeros(valor);
    if (cep.length > 5) {
        cep = cep.slice(0, 5) + "-" + cep.slice(5);
    }
    return cep;
}

// TODO 3: mostre uma mensagem e aplique a classe recebida em tipo.
function mostrarStatus(mensagem, tipo = "") {
    status.textContent = mensagem;
    status.classList.remove("alert-success", "alert-danger");  // Atualize textContent, restaure a classe status e trate o tipo.(VERIFICAR)
    if (tipo) {
        status.classList.add(`alert-${tipo}`);
    }
}

// TODO 4: controle o estado e o texto do botão.

function alterarCarregamento(estaCarregando) {
    botaoBuscar.disabled = estaCarregando;  // Durante a espera: botão desabilitado e texto "Buscando...".
    botaoBuscar.textContent = estaCarregando ? "Buscando..." : "Buscar CEP";  // Depois da espera: botão habilitado e texto "Buscar CEP".
}

// TODO 5: esconda o card de resultado.

function esconderResultado() {
    resultado.classList.add("oculto");  // Use a classe CSS oculto.
}


// TODO 6: leve os dados da API para os cinco campos e revele o card.

function preencherResultado(dados) {
    resultado.classList.remove("oculto");  // Revele o card de resultado.
// Propriedades: cep, logradouro, bairro, localidade, uf e ddd.
// Use "Não informado" quando um campo vier vazio.
    resultadoCep.textContent = dados.cep || "Não informado";
    logradouro.textContent = dados.logradouro || "Não informado";
    bairro.textContent = dados.bairro || "Não informado";
    cidadeUf.textContent = `${dados.localidade || "Não informado"} - ${dados.uf || "Não informado"}`;
    ddd.textContent = dados.ddd || "Não informado";
}


// TODO 7: transforme buscarCep em uma função assíncrona e impeça o submit.

// Impede o submit padrão do formulário.
// TODO 8: leia, limpe e valide o CEP. Também limpe a interface antiga.
// TODO 9: ative o carregamento e informe que a consulta começou.
// TODO 10: crie o try com fetch, verificação HTTP, conversão do JSON,
// verificação de CEP inexistente e exibição do resultado.
// TODO 11: escreva o catch e o finally.

botaoBuscar.addEventListener(
    "click", 
    buscarCep
);

async function buscarCep() {
    const cep = document.getElementById("cep").value;
    }

    resultado.textContent = "Buscando CEP...";
    



inputCep.addEventListener("input", () => {
    inputCep.value = formatarCep(inputCep.value);  // Formate o valor digitado.
});

function validarCep(cep) {
    if (cep.length !== 8) {
        mostrarStatus("CEP inválido. Deve conter 8 números.", "danger");
        esconderResultado();
        return false;
    }
    return true;
}
// TODO 12: crie os eventos input e submit.
// No input, formate o valor digitado. No submit, execute buscarCep.