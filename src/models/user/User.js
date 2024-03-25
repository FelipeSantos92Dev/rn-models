export default class User {
  constructor(nomeFilial, fundacao, corPrimaria, corSecundaria, quantidadeFuncionarios, capacidadeAlunosMatriculadosPorAno, quantidadeTurmas, endereco, telefone, email, nomeResponsavel, cargoResponsavel) {
    this.id = this.generateId();
    this.nomeFilial = nomeFilial;
    this.fundacao = fundacao;
    this.corPrimaria = corPrimaria;
    this.corSecundaria = corSecundaria;
    this.quantidadeFuncionarios = quantidadeFuncionarios;
    this.capacidadeAlunosMatriculadosPorAno = capacidadeAlunosMatriculadosPorAno;
    this.quantidadeTurmas = quantidadeTurmas;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.nomeResponsavel = nomeResponsavel;
    this.cargoResponsavel = cargoResponsavel;
  }

  generateId() {
    return Math.floor(Math.random() * 1000);
  }
}
