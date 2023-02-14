import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text  } from 'react-native';
import Home from './src/components/Home';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#702bd4',
    color: '#fff',
    paddingTop: 80,
  },
  textPrimary: {
    color: '#fff',
  },
  boxName: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputName: {
    backgroundColor: '#2a2a2a',
    padding: 10,
    borderRadius: 5,
    width: 300,
    marginBottom: 10,
    color: '#fff',
    
  },
  button: {
    backgroundColor: '#f8ad2a',
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    color: '#2a2a2a',
    fontWeight: 'bold',
  },
});

export default function App() {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  const handleName = (text) => {
    setName(text);
  }
  const handleOpen = () => {
    if(name === '' || name === null){
      alert('Preencha o campo');      
    }else{
      setOpen(true);
    }
  }
  return (
    <View style={styles.container}>
      {open == false?
      <View style={styles.boxName}>        
      <TextInput placeholderTextColor= '#d3d3d3' placeholder='Digite seu nome...' onChangeText={handleName} valeu={name} style={styles.inputName} />
      <TouchableOpacity style={styles.button} onPress={()=>handleOpen()}><Text style={styles.textButton}>Pronto!</Text></TouchableOpacity>
      </View>
      :null}
      {open && <Home name={name} />}
    </View>
  );
}


// #702bd4 roxo
// #f8ad2a amarelo
// #2a2a2a preto
// #2a54d5 azul
