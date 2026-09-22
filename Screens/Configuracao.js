import { StyleSheet, Text, View} from "react-native";
export default function Configuracao() {
    return(
        <View style ={styles.container}>
            <Text style={styles.titulo}>
                Configuração
            </Text>
            <Text style={styles.texto}>
                Desenvolvido por: Isabelle P. Matielo </Text>
            <Text style={styles.texto}>  Data: 09/2026 </Text>
            <Text style={styles.texto}>  Versão: 1.0.0 </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: '#f7f3ff'
    },
    titulo: {
        color: '#32156e',
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 20,
        textAlign: 'center'
    },
    texto: {
        color: '#3f3a49',
        fontSize: 17,
        lineHeight: 28,
        textAlign: 'center',
    }
});