// classe abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        // aqui estamos definindo uma classe abstrata, que não pode ser instanciada!
        if (this.constructor == Conta) {
            throw new Error("Não instanciar essa classe diretamente, pois é uma classe abstrata!")
        }

        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
        Conta.numeroContas++
    }

    static numeroContas = 0 // atributo de classe

    // acessor set para atribuir e proteger o atributo relacionado
    set cliente(novoCliente){
        if (novoCliente instanceof _cliente) {
            this._cliente = novoCliente
        }
    }

    get saldo() {
        return this._saldo
    }

    // método abstrato, quem herda deverá implementar esse método
    sacar(valor) {
        throw new Error("O método sacar da conta é abstrato e precisa ser implementado!")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado
            return valorSacado
        }    
    }

    depositar(valor) {
        this._saldo += valor
    }

    transferir(valor, conta) {
        this.sacar(valor)
        conta.depositar(valor)
    }

}