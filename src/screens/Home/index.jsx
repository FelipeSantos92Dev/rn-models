import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />

      <View>
        <Text>Tela de apresentação do app</Text>
      </View>

      {/* <TouchButton route="Profile" title="Go to Profile" data={user} />

      <TouchButton route="Category" title="Go to Category" />

      <TouchButton route="Users" title="Go to Users" /> */}
    </View>
  );
}
