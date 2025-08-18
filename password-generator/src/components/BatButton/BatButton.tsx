import React from 'react';
import { View, Button, Pressable, Text } from 'react-native';

import { styles } from './ButtonStyle';

export function BatButton() {
  return (
    <>
        <Pressable
        onPress={() => console.log('Senha Gerada')}
        style={styles.button}
        >
          <Text style={styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable
        onPress={() => console.log('Senha Copiada')}
        style={styles.button}
        >
          <Text style={styles.text}>✨ COPY</Text>
        </Pressable>
    </>
  );
}