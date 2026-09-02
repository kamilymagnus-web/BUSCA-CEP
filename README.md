# BUSCA-CEP

- deixarSomenteNumeros : Preparar o CEP para a validação e para a API.
    Recebe texto e deve devolver apenas dígitos.

- formatarCep : Exibir a máscara 00000-000 enquanto o usuário digita.
    Recebe o valor do input e devolve o texto formatado.

- mostrarStatus : Centralizar mensagens neutras, de sucesso e de erro.
    Centralizar mensagens neutras, de sucesso e de erro.

- alterarCarregamento : Evitar cliques repetidos e informar que existe uma espera.
    Altera disabled e o texto do botão

- esconderResultado : Não mostrar dados antigos durante uma nova tentativa.
    Adiciona a classe oculto ao card.

- preencherResultado : Levar os campos recebidos da API para a página.
    Recebe o objeto dados e atualiza o DOM.

Fluxo lógico
função assíncrona de busca(evento) impedir o recarregamento do formulário ler, limpar e validar a entrada
ativar o estado de carregamento
tentar
aguardar a requisição
verificar a resposta HTTP
converter o JSON
verificar se o CEP existe
atualizar o DOM
se ocorrer erro
mostrar uma mensagem
ao finalizar
encerrar o carregamento  

elemento.addEventListener("nome-do-evento", nomeDaFuncao);

- try 
Agrupa a requisição e o processamento que podem falhar.

- catch 
Recebe o erro e permite mostrar uma mensagem compreensível.

- finally 
Executa ao final, com sucesso ou erro; é o lugar ideal para restaurar o botão.