import React from 'react';
import {TextInput} from 'react-native';

import { styles } from './TextInputStyle';

export function EntradaTexto() {
  return (
    <>
      <TextInput placeholder="Digite sua senha" secureTextEntry style={styles.inputStyle} />
    </>
  );
}