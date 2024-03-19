import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";

import User from "../../models/user/User";
import UsersRepository from "../../models/user/UserRepository";

const usersList = new UsersRepository();

let userId = 1; // Inicia o ID do usuário

export default function Users() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const createUser = () => {
    const newUser = new User(userId++, name, email, parseInt(age) || 0); // Incrementa o ID após o uso

    usersList.add(newUser);
    setAllUsers(usersList.getAll());

    return newUser;
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <View style={styles.container}>
      <Title title="Users" />

      <View>
        <TextInput
          placeholder="Digite o nome do aluno"
          style={styles.userInput}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Digite a idade do aluno"
          style={styles.userInput}
          onChangeText={(text) => setAge(text)}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={createUser}>
          <Text>Criar Usuário</Text>
        </TouchableOpacity>
      </View>

      <View>
        {allUsers.length > 0 ? (
          allUsers.map((user) => <Text key={user.id}>{user.name}</Text>)
        ) : (
          <Text>Não há usuários cadastrados</Text>
        )}
      </View>

      <TouchButton route="Category" title="Go to Category" />
      <TouchButton route="Profile" title="Go to Profile" data={user} />
    </View>
  );
}
