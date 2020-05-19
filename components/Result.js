import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Result(props) {
    const {max, title, correct, wrong} = props;
    const result = (correct / max * 100).toFixed();
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={{textAlign: 'center'}}>{title}</Text>
                <Text style={[styles.detail, {marginTop: 20}]}>Success rate</Text>
                <Text style={styles.result}>{result}%</Text>
                <Text style={styles.detail}>Correct: {correct}</Text>
                <Text style={styles.detail}>Incorrect: {wrong}</Text>
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
    }
})