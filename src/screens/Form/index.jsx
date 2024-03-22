import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./styles";
import Title from "../../components/Title";

import usersRepository from "../../models/user/UserRepository";
import User from "../../models/user/User";

export default function Form({ route }) {
  let { user, edit } = route.params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setName(user.name);
      setEmail(user.email);
      setAge(String(user.age));
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [user, edit]);

  const handleUserAction = () => {
    if (isUpdate) {
      usersRepository.update(user.id, name, email, parseInt(age) || 0);
      clearInputs();
    } else {
      const newUser = new User(name, email, parseInt(age) || 0);
      usersRepository.add(newUser);
      clearInputs();
    }
    navigation.navigate("Users");
  };

  const clearInputs = () => {
    setIsUpdate(false);
    edit = false;
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <View style={styles.container}>
      <Title title={isUpdate ? "Editar Usuário" : "Novo Usuário"} />
      <TextInput
        placeholder="Digite o nome do usuário"
        style={styles.userInput}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="Digite o email do usuário"
        style={styles.userInput}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Digite a idade do usuário"
        style={styles.userInput}
        onChangeText={setAge}
        value={age}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleUserAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Usuário"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
