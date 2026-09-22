import { StyleSheet, Text, View} from "react-native";



export default function Home () {
    return(
        <View style ={styles.container}>

            <Text style={styles.nome}>
                Livros Classicos - Literatura
            </Text>
            <Text style={styles.texto}>
                Conheça alguns livros da Literatura Classica Brasileira e Estrangeira
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#f7f3ff'
    },
    nome: {
        color: '#32156e',
        fontSize: 26,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 16
    },
    texto: {
        color: '#3f3a49',
        fontSize: 17,
        lineHeight: 26,
        textAlign: 'center'
    }
});
