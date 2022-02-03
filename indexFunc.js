import { Cliente } from "./cliente.js";
import { Diretor } from "./funcionario/diretor.js";
import { Gerente } from "./funcionario/gerente.js";
import { SistemaAutenticacao } from "./sistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900)
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricardo", 5000, 12345612345)
gerente.cadastrarSenha("555555")

const cliente = new Cliente("Lais", 88888896, "12345")

// aqui temos ocorrência do polimorfismo, está recebendo um funcionário
// tanto faz gerente ou diretor, ambos são Funcionario
const estaLogado = SistemaAutenticacao.login(diretor, "123456")

const clienteLogado = SistemaAutenticacao.login(cliente, "12345")

console.log(clienteLogado, estaLogado)