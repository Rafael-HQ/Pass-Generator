import React from 'react';
import {TextInput} from 'react-native';

import { styles } from './TextInputStyle';

interface EntradaTextoProps 
{
  password: string;
}
export function EntradaTexto(props: EntradaTextoProps) {
  return (
    <>
      <TextInput placeholder="Digite sua senha" style={styles.inputStyle} value={props.password} />
    </>
  );
}