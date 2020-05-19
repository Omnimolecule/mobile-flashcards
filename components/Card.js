import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';

class Card extends Component {

    render() {
        const { deck, deckId } = this.props;
        const { title, cards } = deck;
        return (
            <TouchableNativeFeedback onPress={() => console.log('pressed')}>
                <View style={styles.card}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.detail}>({cards.length} cards)</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 16,
        marginRight: 16,
        padding: 30,
        paddingTop: 50,
        paddingBottom: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        color: 'black'
    },
    detail: {
        fontSize: 18,
        textAlign: 'center',
        color: 'gray'
    }
})

function mapStateToProps(decks, { deckId }) {
    const deck = decks[deckId];
    return {
        deck,
        deckId
    }
}

export default connect(mapStateToProps)(Card)
