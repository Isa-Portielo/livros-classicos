import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import * as Speech from  'expo-speech';

export default function Detalhes({ route, navigation }) {

  const {livros} = route.params;

  const lerDescricao = ()=> {

       const texto = ` ${livros.titulo}. ${livros.descricao}.`;
       Speech.speak(texto, {
        language: 'pt-BR',
        rate: 0.9,
        pitch: 1.0
        });
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >

      <Image
        source={livros.imagem}
        style={styles.imagem}/>


      <Text style={styles.titulo}>
        {livros.titulo}
      </Text>

      <Text style={styles.informacao}>
        Descrição: {livros.descricao}
      </Text>

      <Text style={styles.informacao}>
        Por que as pessoas leem: {livros.pqleem}
      </Text>

<View style={styles.botoesSpeech}>
      <TouchableOpacity
        style={styles.botaoSpeech}
        onPress={lerDescricao}
      >
        <Text style={styles.textoBotao}>
          Escutar Descrição
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSpeech}
        onPress={() => Speech.stop()}
      >
        <Text style={styles.textoBotao}>
          Parar Escuta 
           </Text>
      </TouchableOpacity>
</View>
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>
          Voltar
        </Text>
      </TouchableOpacity>

    </ScrollView>

  );

}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#f7f3ff'
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f7f3ff'
  },
  imagem: {
    width: 220,
    height: 220,
    marginBottom: 18,
    resizeMode: 'contain'
  },
  titulo: {
    color: '#32156e',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16
  },
  informacao: {
    color: '#3f3a49',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 14
  },
  botaoSpeech: {
    flex: 1,
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#673ab7',
    marginTop: 8,
    marginHorizontal: 4,
    alignItems: 'center'
  },
  botoesSpeech: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  botaoVoltar: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#32156e',
    marginTop: 12
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: '700'
  }
});

