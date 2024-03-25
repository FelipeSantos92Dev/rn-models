import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./styles";
import Title from "../../components/Title";

import usersRepository from "../../models/user/UserRepository";
import User from "../../models/user/User";

export default function Form({ route }) {
  let { user, edit } = route.params;

  const [nomeFilial, setNomeFilial] = useState('')
  const [fundacao, setFundacao] = useState('')
  const [corPrimaria, setCorPrimaria] = useState('')
  const [corSecundaria, setCorSecundaria] = useState('')
  const [quantidadeFuncionarios, setQuantidadeFuncionarios] = useState('')
  const [capacidadeAlunosMatriculadosPorAno, setCapacidadeAlunosMatriculadosPorAno] = useState('')
  const [quantidadeTurmas, setQuantidadeTurmas] = useState('')
  const [endereco, setEndereco] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [nomeResponsavel, setNomeResponsavel] = useState('')
  const [cargoResponsavel, setCargoResponsavel] = useState('')
  const [isUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation();

  const clearInputs = () => {
    setNomeFilial('')
    setFundacao('')
    setCorPrimaria('')
    setCorSecundaria('')
    setQuantidadeFuncionarios('')
    setCapacidadeAlunosMatriculadosPorAno('')
    setQuantidadeTurmas('')
    setEndereco('')
    setTelefone('')
    setEmail('')
    setNomeResponsavel('')
    setCargoResponsavel('')
  }

  useEffect(() => {
    if (edit) {
      setNomeFilial(user.nomeFilial)
      setFundacao(user.fundacao)
      setCorPrimaria(user.corPrimaria)
      setCorSecundaria(user.corSecundaria)
      setQuantidadeFuncionarios(user.quantidadeFuncionarios)
      setCapacidadeAlunosMatriculadosPorAno(user.capacidadeAlunosMatriculadosPorAno)
      setQuantidadeTurmas(user.quantidadeTurmas)
      setEndereco(user.endereco)
      setTelefone(user.telefone)
      setEmail(user.email)
      setNomeResponsavel(user.nomeResponsavel)
      setCargoResponsavel(user.cargoResponsavel)
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [user, edit]);

  const handleUserAction = () => {
    if (isUpdate) {
      usersRepository.update(user.id, nomeFilial, fundacao, corPrimaria, corSecundaria, quantidadeFuncionarios, capacidadeAlunosMatriculadosPorAno, quantidadeTurmas, endereco, telefone, email, nomeResponsavel, cargoResponsavel);
      clearInputs();
    } else {
      const newUser = new User(nomeFilial, fundacao, corPrimaria, corSecundaria, quantidadeFuncionarios, capacidadeAlunosMatriculadosPorAno, quantidadeTurmas, endereco, telefone, email, nomeResponsavel, cargoResponsavel);
      usersRepository.add(newUser);
      clearInputs();
    }
    navigation.navigate("Filiais");
  };

  return (
    <View style={styles.container}>
      <Title title="Form" />
      <TextInput
        placeholder="Digite o nome da filial"
        style={styles.inputText}
        onChangeText={setNomeFilial}
        value={nomeFilial}
      />
      <TextInput
        placeholder="Digite a data de fundação"
        style={styles.inputText}
        onChangeText={setFundacao}
        value={fundacao}
      />
      <TextInput
        placeholder="Digite a cor primária"
        style={styles.inputText}
        onChangeText={setCorPrimaria}
        value={corPrimaria}
      />
      <TextInput
        placeholder="Digite a cor secundária"
        style={styles.inputText}
        onChangeText={setCorSecundaria}
        value={corSecundaria}
      />
      <TextInput
        placeholder="Digite a quantidade de funcionários"
        style={styles.inputText}
        onChangeText={setQuantidadeFuncionarios}
        value={quantidadeFuncionarios}
      />
      <TextInput
        placeholder="Digite a capacidade de alunos matriculados por ano"
        style={styles.inputText}
        onChangeText={setCapacidadeAlunosMatriculadosPorAno}
        value={capacidadeAlunosMatriculadosPorAno}
      />
      <TextInput
        placeholder="Digite a quantidade de turmas"
        style={styles.inputText}
        onChangeText={setQuantidadeTurmas}
        value={quantidadeTurmas}
      />
      <TextInput
        placeholder="Digite o endereço"
        style={styles.inputText}
        onChangeText={setEndereco}
        value={endereco}
      />
      <TextInput
        placeholder="Digite o telefone"
        style={styles.inputText}
        onChangeText={setTelefone}
        value={telefone}
      />
      <TextInput
        placeholder="Digite o email"
        style={styles.inputText}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Digite o nome do responsável"
        style={styles.inputText}
        onChangeText={setNomeResponsavel}
        value={nomeResponsavel}
      />
      <TextInput
        placeholder="Digite o cargo do responsável"
        style={styles.inputText}
        onChangeText={setCargoResponsavel}
        value={cargoResponsavel}
      />

      <TouchableOpacity style={styles.button} onPress={handleUserAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Filial"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
