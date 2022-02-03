
import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./conta/contaCorrente.js";
import { ContaPoupanca } from "./conta/contaPoupanca.js";
import { Conta } from "./conta/conta.js";
import { ContaSalario } from "./conta/contaSalario.js";


/* Para funcionar foi necessário acrescentar no arquivo package.json 
   a linha "type": "module" */

const cliente1 = new Cliente('Ricardo', '12345678965')

const contaCorrente = new ContaCorrente(1111, cliente1)
contaCorrente.depositar(4000)
 
// poupança
const contaPoupanca = new ContaPoupanca(900, cliente1, 1111)

contaCorrente.transferir(3000, contaPoupanca)

console.log(contaCorrente)
console.log(contaPoupanca)

const contaSalario = new ContaSalario(cliente1)
contaSalario.sacar(30)
console.log(contaSalario)

console.log('Número de Contas da Classe: ', Conta.numeroContas)
