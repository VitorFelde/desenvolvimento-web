/**
 * Função que recebe uma string e a devolve em letras maiúsculas.
 * @param {string} texto - O conteúdo vindo do input de digitação.
 */
function converteMaiusculo(texto) {
  // Exibe no console o que está sendo processado no momento
  console.log("convertendo texto:", texto);

  // toUpperCase(): Transforma todos os caracteres em maiúsculos
  // Se o texto estiver vazio ou nulo, retornamos uma string vazia para evitar erros
  return texto ? texto.toUpperCase() : "";
}

// Removi a chamada isolada 'converteMaiusculo()' que estava no final do arquivo,
// pois agora a função só deve rodar quando o usuário interagir com o input.
