import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { useNavigation } from "@react-navigation/native";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Title title="Profile" />

      <View style={styles.user}>
        <View style={styles.userDetail}>
          <Text style={styles.text}>{data.name}</Text>
          <Text style={styles.text}>{data.email}</Text>
          <Text style={styles.text}>{data.age}</Text>
        </View>

        <View style={styles.userActions}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              navigation.navigate("Form", { user: data, edit: true })
            }
          >
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() =>
              navigation.navigate("Form", { user: data, edit: true })
            }
          >
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
