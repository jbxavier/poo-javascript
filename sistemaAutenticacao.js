/* ser autenticável significa ter o método autenticar 
   ducky type: teste do pato, se anda como pato, age como pato então é 
   um pato independente do tipo!
   Utilizamos isso aqui no ehAutenticavel, sendo cliente, diretor ou gerente, todos
   tem o método autenticar, então todos são tratados da mesma forma chamando o método
   autenticar. 
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha)
        }
        return false
    }

    // se a chave "autenticar" estiver dentro do objeto autenticavel E 
    // essa chave é uma Função, então retornará true!
    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && 
            autenticavel.autenticar instanceof Function
    }
}