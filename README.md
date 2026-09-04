# BUSCA-CEP

- deixarSomenteNumeros : Preparar o CEP para a validação e para a API.
    Recebe texto e deve devolver apenas dígitos. (replace, expressão regular e return)

- formatarCep : Exibir a máscara 00000-000 enquanto o usuário digita.
    Recebe o valor do input e devolve o texto formatado. (slice, length, if e template string.)

- mostrarStatus : Centralizar mensagens neutras, de sucesso e de erro.
    Centralizar mensagens neutras, de sucesso e de erro. (textContent, className, classList e if.)

- alterarCarregamento : Evitar cliques repetidos e informar que existe uma espera.
    Altera disabled e o texto do botão (disabled, textContent e condição.)

- esconderResultado : Não mostrar dados antigos durante uma nova tentativa.
    Adiciona a classe oculto ao card. (classList e classe CSS oculto.)

- preencherResultado : Levar os campos recebidos da API para a página.
    Recebe o objeto dados e atualiza o DOM. (Objeto dados, textContent, valor alternativo e classList.)

-  buscarcep : Transformar a função principal em async e impedir o submit padrão.
(async e preventDefault.)

- 8: Capturar, limpar e validar o CEP; encerrar o fluxo se estiver inválido.
(value, função auxiliar, length, if, focus e return.) 

- 9: Ativar o botão de espera e mostrar a mensagem de consulta (Funções auxiliares e ordem de execução.)

- 10: Construir todo o try: fetch, verificações, JSON e sucesso. (await, fetch, resposta.ok, json, throw e objeto dados)

- 11: catch e finally

- 12: Criar os eventos de máscara e de envio do formulário. (addEventListener, input, submit e referência de função.)

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