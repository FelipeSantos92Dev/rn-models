import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import styles from "./styles";
import Title from "../../components/Title";

export default function Users({ route }) {
  const { users } = route.params;
  const navigation = useNavigation();

  const [allUsers, setAllUsers] = useState(users);

  return (
    <View style={styles.container}>
      <Title title="Users" />

      <Text>Tela de listagem de todos usuários</Text>

      <View>
        {allUsers.length > 0 ? (
          allUsers.map((user) => (
            <View key={user.id}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Profile", { data: user, edit: false })
                }
              >
                <Text>{user.name}</Text>
              </TouchableOpacity>
              {/* <View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Profile", { data: user, edit: true })
                  }
                >
                  <Text>Editar: {user.name}</Text>
                </TouchableOpacity>
              </View> */}
            </View>
          ))
        ) : (
          <Text>Não há usuários cadastrados</Text>
        )}
      </View>

      {/* <TouchButton route="Category" title="Go to Category" />
      <TouchButton route="Profile" title="Go to Profile" data={user} /> */}
    </View>
  );
}
