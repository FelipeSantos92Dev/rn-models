import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Title from '../../components/Title'

import styles from "./styles";
import usersRepository from "../../models/user/UserRepository";

export default function Details({ route }) {
    const navigation = useNavigation();
    const { data } = route.params;

    const editFilial = () => {
        navigation.navigate("Form", { user: data, edit: true });
    };

    const deleteFilial = () => {
        usersRepository.remove(data.id);
        navigation.navigate("Filiais");
    };


    return (
        <View style={styles.container}>
            <Title title="Details" />

            {data ? (
                <Text>Detalhes da Filial</Text>
            ) : (
                <Text>Selecione uma filial para exibir seus detalhes</Text>
            )}

            <View style={styles.user}>
                <View style={styles.userDetail}>
                    <Text style={styles.txt}>{data.nomeFilial}</Text>
                    <Text style={styles.txt}>{data.fundacao}</Text>
                    <Text style={styles.txt}>{data.corPrimaria}</Text>
                    <Text style={styles.txt}>{data.corSecundaria}</Text>
                    <Text style={styles.txt}>{data.quantidadeFuncionarios}</Text>
                    <Text style={styles.txt}>{data.capacidadeAlunosMatriculadosPorAno}</Text>
                    <Text style={styles.txt}>{data.quantidadeTurmas}</Text>
                    <Text style={styles.txt}>{data.endereco}</Text>
                    <Text style={styles.txt}>{data.telefone}</Text>
                    <Text style={styles.txt}>{data.email}</Text>
                    <Text style={styles.txt}>{data.nomeResponsavel}</Text>
                    <Text style={styles.txt}>{data.cargoResponsavel}</Text>
                </View>

                <View style={styles.userActions}>
                    <TouchableOpacity style={styles.editButton} onPress={editFilial}>
                        <Text style={styles.buttonTxt}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.editButton} onPress={deleteFilial}>
                        <Text style={styles.buttonTxt}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}