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
        <View>
            <Title title="Details" />

            {data ? (
                <Text>Detalhes da Filial</Text>
            ) : (
                <Text>Selecione uma filial para exibir seus detalhes</Text>
            )}

            <View style={styles.user}>
                <View style={styles.userDetail}>
                    <Text>{data.nomeFilial}</Text>
                    <Text>{data.fundacao}</Text>
                    <Text>{data.corPrimaria}</Text>
                    <Text>{data.corSecundaria}</Text>
                    <Text>{data.quantidadeFuncionarios}</Text>
                    <Text>{data.capacidadeAlunosMatriculadosPorAno}</Text>
                    <Text>{data.quantidadeTurmas}</Text>
                    <Text>{data.endereco}</Text>
                    <Text>{data.telefone}</Text>
                    <Text>{data.email}</Text>
                    <Text>{data.nomeResponsavel}</Text>
                    <Text>{data.cargoResponsavel}</Text>
                </View>

                <View style={styles.userActions}>
                    <TouchableOpacity style={styles.editButton} onPress={editFilial}>
                        <Text>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={deleteFilial}>
                        <Text>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}