import { StyleSheet, Text, View} from "react-native";

export default function Tema() {
    return(
        <View style ={styles.container}>
            <Text style={styles.titulo}>
                Informações Sobre o Tema do App:
            </Text>
            <Text style={styles.texto}>
                Os livros clássicos são obras literárias que permanecem relevantes mesmo muitos anos depois
                de serem publicadas. Eles costumam abordar temas universais, como amor, morte, família, 
                sociedade, desigualdade, solidão, conflitos e relações humanas.
                Mesmo sendo escritos em outras épocas, muitos clássicos continuam despertando interesse 
                porque apresentam histórias e personagens que permitem ao leitor refletir sobre diferentes 
                aspectos da vida e da sociedade. Além disso, essas obras tiveram grande importância para a 
                literatura e influenciaram outros escritores e produções culturais.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#f7f3ff'
    },
    titulo: {
        color: '#32156e',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 18
    },
    texto: {
        color: '#3f3a49',
        fontSize: 16,
        lineHeight: 25
    }
});