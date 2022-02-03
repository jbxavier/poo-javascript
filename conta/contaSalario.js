import { Conta } from "./conta.js";

export class ContaSalario extends Conta {
    constructor(cliente) {
        super(300, cliente, 100)
    }

    sacar(valor) {
        const taxa = 1.01
        return this._sacar(valor, taxa)
    }

}