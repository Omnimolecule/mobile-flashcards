import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { FAB, Button } from 'react-native-paper';

class DeckDetail extends Component {

    navigateToAddCard = () => {
        const { id, navigation } = this.props;
        navigation.push('AddCard', { id });
    }

    navigateToQuiz = () => {
        const { id, navigation } = this.props;
        navigation.push('Quiz', { id });
    }

    render() {
        const { deck } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View>
                        <Text style={styles.title}>{deck.title}</Text>
                        <Text style={styles.detail}>Contains {deck.cards.length} cards</Text>
                        <Button style={styles.button} color='#3236a8' mode="outlined" onPress={this.navigateToAddCard}>
                            Add Card
                        </Button>
                    </View>

                    {deck.cards.length > 0 && <FAB
                        style={styles.fab}
                        label='Start Game'
                        icon="gamepad-variant"
                        onPress={this.navigateToQuiz}
                    />}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faf9f7',
    },
    card: {
        flex: 1,
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
        justifyContent: 'space-between'
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    detail: {
        fontSize: 24,
        textAlign: 'center'
    },
    button: {
        margin: 15,
        marginLeft: 30,
        marginRight: 30,
    },
    fab: {
        backgroundColor: '#3236a8',
        marginLeft: 50,
        marginRight: 50
    },
})

function mapStateToProps({decks}, { route, navigation }) {
    const id = route.params.id;
    const deck = decks[id];
    return {
        id,
        deck,
        navigation
    }
}

export default connect(mapStateToProps)(DeckDetail);
