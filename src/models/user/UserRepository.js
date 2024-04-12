import { user } from "../../data/Profile";
import User from "./User";

class UsersRepository {
  constructor() {
    this.users = [];
  }

  getAll() {
    return this.users;
  }

  get(id) {
    return this.users.find((user) => user.id === id);
  }

  add(user) {
    this.users.push(user);
  }

  remove(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  update(id, nomeFilial, fundacao, corPrimaria, corSecundaria, quantidadeFuncionarios, capacidadeAlunosMatriculadosPorAno, quantidadeTurmas, endereco, telefone, email, nomeResponsavel, cargoResponsavel) {
    const user = this.get(id);

    if(user) {
      user.nomeFilial = nomeFilial;
      user.fundacao = fundacao;
      user.corPrimaria = corPrimaria;
      user.corSecundaria = corSecundaria;
      user.quantidadeFuncionarios = quantidadeFuncionarios;
      user.capacidadeAlunosMatriculadosPorAno = capacidadeAlunosMatriculadosPorAno;
      user.quantidadeTurmas = quantidadeTurmas;
      user.endereco = endereco;
      user.telefone = telefone;
      user.email = email;
      user.nomeResponsavel = nomeResponsavel;
      user.cargoResponsavel = cargoResponsavel;
  }
  return user
  }
}

const usersRepository = new UsersRepository();
const newUser = new User(user.nomeFilial, user.fundacao, user.corPrimaria, user.corSecundaria, user.quantidadeFuncionarios, user.capacidadeAlunosMatriculadosPorAno, user.quantidadeTurmas, user.endereco, user.telefone, user.email, user.nomeResponsavel, user.cargoResponsavel);

usersRepository.add(newUser);

export default usersRepository;
