import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

import usersRepository from "../../models/user/UserRepository";
import User from "../../models/user/User";

let userId = 1;

export default function Form() {
  const [allUsers, setAllUsers] = useState(usersRepository.getAll());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigation = useNavigation();

  const createUser = () => {
    const newUser = new User(userId++, name, email, parseInt(age) || 0);
    usersRepository.add(newUser);
    setAllUsers(usersRepository.getAll());
    clearInputs();
    navigation.navigate("Users");
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <View style={styles.container}>
      <Title title="Form" />

      {/* <TouchButton route="Category" title="Go to Category" />

      <TouchButton route="Profile" title="Go to Profile" data={user} /> */}

      <View>
        <TextInput
          placeholder="Digite o nome do aluno"
          style={styles.userInput}
          onChangeText={setName}
          value={name}
        />
        <TextInput
          placeholder="Digite o email do aluno"
          style={styles.userInput}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="Digite a idade do aluno"
          style={styles.userInput}
          onChangeText={(text) => setAge(text)}
          value={age}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={createUser}>
          <Text>Criar Usuário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
