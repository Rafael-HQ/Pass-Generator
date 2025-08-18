import React from "react";
import {Text, View, StyleSheet} from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from '../Home/Style';
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { EntradaTexto } from "../../components/EntradaTexto/EntradaTexto";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() 
{
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>
            <View style={styles.inputContainer}>
                <EntradaTexto />
            </View>
            <View style={styles.buttonContainer}>
                <BatButton />
            </View>

            <StatusBar style="light" />
        </View>
    )
}