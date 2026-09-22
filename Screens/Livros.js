import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

const livros = [
    {
        id: 1,
        titulo: 'Dom Casmurro',
        autor: 'Machado de Assis',
        ano: 1899,
        tema: 'Drama',
         imagem: require('../assets/dom.jpg'),
        descricao:'Bentinho conta sua história e seu relacionamento com Capitu, mas começa a desconfiar que ela o traiu com seu amigo Escobar. A obra explora principalmente ciúme, dúvida e desconfiança.',
        pqleem: 'Capitu traiu Bentinho?'
    },
    {
        id: 2,
        titulo: 'Memórias Póstumas de Brás Cubas',
        autor: 'Machado de Assis',
        ano: 1881,
        tema: 'Comédia',
         imagem: require('../assets/cubas.jpg'),
        descricao:'Brás Cubas, depois de morto, decide contar sua própria história. Com muita ironia, relembra sua vida e critica os costumes, o egoísmo e a hipocrisia da sociedade.',
        pqleem: 'Ao verme que primeiro roeu as frias carnes do meu cadáver dedico como saudosa lembrança estas memórias póstumas.'
    },
    {
        id: 3,
        titulo: 'A Hora da Estrela',
        autor: 'Clarisse Lispector',
        ano: 1977,
        tema: 'Drama',
        imagem: require('../assets/estrela.jpg'),
        descricao:'A história acompanha Macabéa, uma jovem nordestina que vive no Rio de Janeiro em condições simples e enfrenta uma vida marcada pela pobreza, solidão e invisibilidade social.',
        pqleem: '“Qual é o valor de uma pessoa que quase ninguém percebe?” A história de Macabéa faz o leitor refletir sobre pobreza, solidão, desigualdade e invisibilidade social, além de mostrar como uma pessoa aparentemente simples também possui sonhos, sentimentos e desejos.'
    },
    {
        id: 4,
        titulo: 'A Metamorfose',
        autor: 'Franz Kafka',
        ano: 1915,
        tema: 'Drama',
        imagem: require('../assets/metamorfose.jpg'),
        descricao:'Gregor Samsa acorda transformado em um inseto e passa a enfrentar o isolamento e a rejeição da própria família. A obra aborda solidão, rejeição e desumanização.',
        pqleem: 'O que significa a transformação de Gregor?'
    },
]

export default function Lista({navigation}){
    const criaItem =({item}) => (
      <TouchableOpacity 
        style={styles.itemList}
        onPress = { () =>
            navigation.navigate('Detalhes',{
              livros: item
            })
        }
      >
        <Text style={styles.textoC}>Clique para ver detalhes  </Text>
        <Image source = {item.imagem} style = {styles.listImg}/>
        <View style={styles.listaDetalhes}>
        <Text style={styles.textoF}>Titulo:
        <Text style={styles.textoN}> {item.titulo}</Text></Text>
        <Text style={styles.textoF}>Autor:
        <Text style={styles.textoN}> {item.autor}</Text></Text>
        <Text style={styles.textoF}>Ano:
        <Text style={styles.textoN}> {item.ano}</Text></Text>
        <Text style={styles.textoF}>Tema:
        <Text style={styles.textoN}> {item.tema}</Text></Text>
      </View>
      </TouchableOpacity>
    )
     return (
      <View style={styles.listaContainer}>
      <FlatList
        data={livros}
        renderItem={criaItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contemFlatList}
      />
    </View>
    );
}

  const styles = StyleSheet.create({
    listaContainer: {
      flex: 1,
      backgroundColor: '#f7f3ff',
      height: 200,
    },
    contemFlatList: {
      alignItems: 'center',
      padding: 20,

    },
    itemList: {
      width: 280,
      height: 390,
      marginRight: 16,
      padding: 16,
      borderRadius: 12,
      backgroundColor: '#ffffff',
      overflow: 'hidden'
    },
    listImg: {
      width: '100%',
      height: 170,
      marginBottom: 14,
      resizeMode: 'contain'
    },
    listaDetalhes: {
      gap: 6,
      flex: 1
    },
    textoC: {
      color: '#32156e',
      fontSize: 20,
      fontWeight: '700',
      height: 30,
      marginBottom: 10
    },
    textoF: {
      color: '#32156e',
      fontWeight: '700'
    },
    textoN: {
      color: '#3f3a49',
      fontWeight: '400'
    }
  });