import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Profile({ route }) {
  const { data, edit } = route.params;

  return (
    <View style={styles.container}>
      <Title title="Profile" />

      <TouchButton route="Home" title="Go to Home" />

      <TouchButton route="Category" title="Go to Category" />

      {edit ? <Text>Editando</Text> : <Text>Não estou Editando</Text>}

      <View style={styles.user}>
        <Title title="User" />
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{data.email}</Text>
        <Text style={styles.text}>{data.age}</Text>
      </View>
    </View>
  );
}
