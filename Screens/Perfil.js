import { StyleSheet, Text, View, Image} from "react-native";
export default function Configuracao() {
    return(
        <View style ={styles.container}>
            <Text style={styles.titulo}>
                Perfil Principal
            </Text>
            <Image source ={require('../assets/isinha.jpg')} style = {styles.listImg}/>
            <Text style={styles.textoF}> Aluna: </Text>
            <Text style={styles.textoN}> Isabelle Porto Matielo</Text>
            <Text style={styles.textoF}> Matéria: </Text>
            <Text style={styles.textoN}> Desenvolvimento de Dispositivos Móveis</Text>
            <Text style={styles.textoF}> App Tema: </Text>
            <Text style={styles.textoN}> Pensando em leituras recentes, decidi dedicar 
                esse app a estes livros classicos da literatura.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#f7f3ff'
    },
    titulo: {
        color: '#32156e',
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 20
    },
    listImg: {
        width: 102,
        height: 135,
        marginBottom: 20,
        resizeMode: 'contain',
        borderRadius: 80,
        border: 'dashed 4px #32156e',
    },
    textoF: {
        color: '#32156e',
        fontSize: 16,
        fontWeight: '700',
        marginTop: 10
    },
    textoN: {
        color: '#3f3a49',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center'
    }
});