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

function formatarCep(valor) { 
    let cep = deixarSomenteNumeros(valor).slice(0,8); // slice
    if (cep.length > 5) {
        cep = `${cep.slice(0, 5)}-${cep.slice(5)}`;  // template string 
    }
    return cep;
}

// TODO 3: mostre uma mensagem e aplique a classe recebida em tipo.
function mostrarStatus(mensagem, tipo = "") {
    status.textContent = mensagem;
    status.className = "status";  
    if (tipo) {
        status.classList.add(`alert-${tipo}`);
    }
}

// TODO 4: controle o estado e o texto do botão.
function alterarCarregamento(estaCarregando) {
    botaoBuscar.disabled = estaCarregando; 
    if (estaCarregando) {
        botaoBuscar.textContent = "Buscando...";
    } else {
        botaoBuscar.textContent = "Buscar CEP";
    }
}

// TODO 5: esconda o card de resultado.
function esconderResultado() {
    resultado.classList.add("oculto");  
}

// TODO 6: leve os dados da API para os cinco campos e revele o card.
function preencherResultado(dados) {
    resultado.classList.remove("oculto");  
    resultadoCep.textContent = dados.cep || "Não informado";
    logradouro.textContent = dados.logradouro || "Não informado";
    bairro.textContent = dados.bairro || "Não informado";
    cidadeUf.textContent = `${dados.localidade || "Não informado"} - ${dados.uf || "Não informado"}`;
    ddd.textContent = dados.ddd || "Não informado";
}

// TODO 7: transforme buscarCep em uma função assíncrona e impeça o submit.
async function buscarCep(evento) {
    evento.preventDefault();
    
    const ceplimpo = deixarSomenteNumeros(inputCep.value);
    if (ceplimpo.length !== 8) {
        mostrarStatus ("CEP inválido. Deve conter 8 números.", "danger");  // TODO 8: leia, limpe e valide o CEP. Também limpe a interface antiga.
        inputCep.focus();
        return;
    }
    mostrarStatus("Buscando CEP..."); // TODO 9: ative o carregamento e informe que a consulta começou.
    alterarCarregamento(true);
    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${ceplimpo}/json/`);
        if (!resposta.ok) {
            throw new Error("não foi possível consultar o CEP.");
        }
        const dados = await resposta.json();
        if (dados.erro) {
            throw new Error("CEP não encontrado.");
        }
        preencherResultado(dados);
        mostrarStatus("CEP encontrado com sucesso!", "success");
    }   
    
    catch (erro) {
        mostrarStatus( "erro de conexão, verifique sua internet","danger");  // TODO 11: escreva o catch e o finally.
    }
    finally {
        alterarCarregamento(false);
    } 
}

inputCep.addEventListener("input", () => {
    inputCep.value = formatarCep(inputCep.value); // TODO 12: crie os eventos input e submit.
    esconderResultado();
    mostrarStatus("");  
});

formulario.addEventListener("submit", buscarCep);




