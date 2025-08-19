import React, {useState} from 'react';
import { View, Button, Pressable, Text } from 'react-native';
import passGenerator from '../../services/passwordServices';
import { styles } from './ButtonStyle';
import * as Clipboard from 'expo-clipboard';
import { EntradaTexto } from '../EntradaTexto/EntradaTexto';

export function BatButton() {

  const [password, setPassword] = useState('');


  function handlePasswordGeneration() {
    let newPassword = passGenerator();
    setPassword(newPassword);
  }

  function handleCopyToClipboard() {
    Clipboard.setStringAsync(password);
  }

  return (
    
    <>
      <EntradaTexto password={password} />

        <Pressable
        onPress={handlePasswordGeneration}
        style={styles.button}
        >
          <Text style={styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable
        onPress={handleCopyToClipboard}
        style={styles.button}
        >
          <Text style={styles.text}>✨ COPY</Text>
        </Pressable>
    </>
  );
}