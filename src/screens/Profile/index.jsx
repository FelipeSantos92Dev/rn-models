import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Title title="Profile" />

      <View style={styles.user}>
        <Title title="User" />
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{data.email}</Text>
        <Text style={styles.text}>{data.age}</Text>
      </View>
    </View>
  );
}
