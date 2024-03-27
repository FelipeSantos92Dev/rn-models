import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import { FontAwesome5, Ionicons, FontAwesome6, SimpleLineIcons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />
      <ScrollView>
      <View style={styles.card}>
        <Image style={styles.img} source={require('../../../assets/papelada.avif')} />
        <View style={styles.cardTxt}>
          <Text style={styles.subTitle}>Filiais Pablito</Text>
          <Text style={styles.txt}>A filial de escolas, localizada em uma área de rápido crescimento urbano, representa um marco na educação da região. Esta instituição, que se destaca pela qualidade de ensino e pela inovação pedagógica, tem como objetivo principal formar cidadãos conscientes e comprometidos com o desenvolvimento sustentável. </Text>
        </View>
        <View style={styles.icons}>
          <ScrollView horizontal>
            <FontAwesome5 style={styles.icon} name="school" size={85} color="#fff" />
            <Ionicons style={styles.icon} name="school-outline" size={85} color="#fff" />
            <FontAwesome6 style={styles.icon} name="school-flag" size={85} color="#fff" />
            <SimpleLineIcons style={styles.icon} name="notebook" size={85} color="#fff" />
          </ScrollView>
        </View>
        <View style={styles.resumo}>
          <Image style={styles.imageResumo} source={require('../../../assets/escola.jpg')}/>
          <Text style={styles.txtResumo}>Em resumo, a filial de escolas é uma instituição que se compromete com a formação de cidadãos críticos, conscientes e capazes de contribuir para o desenvolvimento sustentável da sociedade. Através de uma abordagem educacional inovadora e inclusiva, a filial de escolas busca preparar os alunos para enfrentar os desafios do futuro com confiança e competência.</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}
