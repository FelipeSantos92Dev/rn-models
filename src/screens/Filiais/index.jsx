import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import {
  Provider,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
} from "@react-native-material/core";

import styles from "./styles";
import Title from "../../components/Title";
import usersRepository from "../../models/user/UserRepository";

export default function Filiais() {
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const users = usersRepository.getAll();
      setAllUsers(users);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Title style={styles.title} title="Filiais" />
      <Text style={styles.title}>Tela de listagem de todos as filiais</Text>

      {allUsers.length > 0 ? (
        <View style={styles.userList}>
          {allUsers.map((user) => (
            <View key={user.id} style={styles.userItem}>
              <View>
                <Text style={styles.nome}>{user.nomeFilial}</Text>
              </View>

              <View style={styles.userActions}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => navigation.navigate('Details', {data: user})}
                >
                  <Text>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <Text>Não há usuários cadastrados</Text>
      )}
    </View>
  );
};