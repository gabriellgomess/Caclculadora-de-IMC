import React from 'react';
import { View } from 'react-native';
import Title from '../Title';
import Main from '../Main';
import styles from './style.js';

export default function Home(props) {
  return (
    <View>
      <Title name={props.name} />
      <Main />
    </View>
  );
}



// #702bd4 roxo
// #f8ad2a amarelo
// #2a2a2a preto
// #2a54d5 azul
