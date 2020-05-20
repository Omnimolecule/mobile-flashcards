import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export function Result(props) {
    const { max, title, correct, wrong, restart } = props;
    const result = (correct / max * 100).toFixed();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={{ textAlign: 'center' }}>{title}</Text>
                <Text style={[styles.detail, { marginTop: 20 }]}>Success rate</Text>
                <Text style={styles.result}>{result}%</Text>
                <Text style={styles.detail}>Correct: {correct}</Text>
                <Text style={styles.detail}>Incorrect: {wrong}</Text>

                <View style={{ marginTop: 50 }}>
                    <Button
                        style={styles.button}
                        color='#3236a8'
                        mode="contained"
                        onPress={restart}>Restart</Button>
                    <Button
                        style={styles.button}
                        color='#3236a8'
                        mode="contained"
                        onPress={navigation.goBack}>Back to Deck</Button>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faf9f7',
    },
    card: {
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
        padding: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: 'white',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black'
    },
    detail: {
        textAlign: 'center',
        fontSize: 20,
    },
    result: {
        textAlign: 'center',
        fontSize: 60,
        color: '#3236a8',
        fontWeight: 'bold',
        marginBottom: 30
    },
    button: {
        margin: 5,
        marginLeft: 15,
        marginRight: 15,
    },
})