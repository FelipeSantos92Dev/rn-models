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
      <Title title="Filiais" />
      <Text>Tela de listagem de todos as filiais</Text>

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
                  onPress={() => setVisible(true)}
                >
                  <Text>Detalhes</Text>
                </TouchableOpacity>
              </View>
              <Dialog visible={visible} onDismiss={() => setVisible(false)}>
                <DialogHeader title={user.nomeFilial} />
                <DialogContent>
                  <Text>{user.nomeFilial}</Text>
                  <Text>{user.fundacao}</Text>
                  <Text>{user.corPrimaria}</Text>
                  <Text>{user.corSecundaria}</Text>
                  <Text>{user.quantidadeFuncionarios}</Text>
                  <Text>{user.capacidadeAlunosMatriculadosPorAno}</Text>
                  <Text>{user.quantidadeTurmas}</Text>
                  <Text>{user.endereco}</Text>
                  <Text>{user.telefone}</Text>
                  <Text>{user.email}</Text>
                  <Text>{user.nomeResponsavel}</Text>
                  <Text>{user.cargoResponsavel}</Text>
                </DialogContent>
                <DialogActions>
                  <Button
                    title="Cancel"
                    compact
                    variant="text"
                    onPress={() => setVisible(false)}
                  />
                  <Button
                    title="Ok"
                    compact
                    variant="text"
                    onPress={() => setVisible(false)}
                  />
                </DialogActions>
              </Dialog>
            </View>
          ))}
        </View>
      ) : (
        <Text>Não há usuários cadastrados</Text>
      )}
    </View>
  );
};