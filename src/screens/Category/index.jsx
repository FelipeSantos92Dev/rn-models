import { Text, View } from "react-native";
import { useState } from "react";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";

import usersRepository from "../../models/user/UserRepository";

export default function Category() {
  const [allUsers, setAllUsers] = useState(usersRepository.getAll());
  return (
    <View style={styles.container}>
      <Title title="Category" />

      <TouchButton route="Category" title="Go to Category" />

      <TouchButton route="Profile" title="Go to Profile" data={user} />

      {allUsers ? (
        allUsers.map((user) => (
          <TouchButton
            key={user.id}
            route="Profile"
            title={user.name}
            data={user}
          />
        ))
      ) : (
        <Text>Nenhum usuário cadastrado</Text>
      )}
    </View>
  );
}
