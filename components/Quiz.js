import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';
import { Result } from './Result';

class Quiz extends Component {
    state = {
        index: 0,
        showQuestion: true,
        correctCount: 0,
        wrongCount: 0,
    }

    toggleCard = () => {
        this.setState((prevState) => ({
            showQuestion: !prevState.showQuestion
        }));
    }

    logCorrect = () => {
        this.setState((prevState) => ({
            correctCount: prevState.correctCount + 1,
            index: prevState.index + 1
        }));
    }

    logWrong = () => {
        this.setState((prevState) => ({
            wrongCount: prevState.wrongCount + 1,
            index: prevState.index + 1
        }));
    }

    restart = () => {
        this.setState(() => ({
            index: 0,
            showQuestion: true,
            correctCount: 0,
            wrongCount: 0
        }));
    }

    showQuestions = (card) => {
        return (
            <View>
                <Text style={styles.state}>Question</Text>
                <Text style={styles.questanswer}>{card.question}</Text>
                <Button
                    style={styles.button}
                    color='#3236a8'
                    mode="text"
                    onPress={this.toggleCard}>Show Answer</Button>
            </View>
        );
    }

    showAnswer = (card) => {
        return (
            <View>
                <Text style={styles.state}>Answer</Text>
                <Text style={styles.questanswer}>{card.answer}</Text>
                <Button
                    style={styles.button}
                    color='#3236a8'
                    mode="text"
                    onPress={this.toggleCard}>Show Question</Button>
            </View>
        );
    }

    render() {
        const { deck } = this.props;
        const { index, correctCount, wrongCount, showQuestion } = this.state;
        const card = deck.cards[index];

        if (index === deck.cards.length) {
            return (
                <Result
                    title={deck.title}
                    max={deck.cards.length}
                    correct={correctCount}
                    wrong={wrongCount}
                    restart={this.restart}
                />
            );
        }

        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={{ textAlign: 'center' }}>Topic: {deck.title}</Text>
                    <Text style={{ textAlign: 'center' }}>{index + 1}/{deck.cards.length}</Text>
                    {showQuestion
                        ? this.showQuestions(card)
                        : this.showAnswer(card)
                    }
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.button}
                            color='#3236a8'
                            mode="contained"
                            onPress={this.logCorrect}>CorrecT</Button>
                        <Button
                            style={styles.button}
                            color='#3236a8'
                            mode="contained"
                            onPress={this.logWrong}>Incorrect</Button>
                    </View>
                </View >
            </View >
        );
    }
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        margin: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    state: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 40
    },
    questanswer: {
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        color: 'black'
    }
})

function mapStatesToProps(decks, { navigation, route }) {
    const { id } = route.params;
    const deck = decks[id];
    return {
        deck,
        navigation,
        id
    }
}

export default connect(mapStatesToProps)(Quiz);