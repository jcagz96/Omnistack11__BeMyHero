import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> 0 cados</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

        </View>
    );
}