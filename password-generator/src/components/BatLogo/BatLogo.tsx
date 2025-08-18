import React from 'react';
import { View, Text, Image} from 'react-native';
import BatLogoImage from '../../../assets/bat-logo.png';
import { styles } from './BatLogoStyle';

export function BatLogo() {
  return (
    <>
      <Text style={styles.textStyle}>Bat Generator Password</Text>
        <Image
          source={BatLogoImage}
          style={styles.imageStyle}
        />
    </>
  );
}