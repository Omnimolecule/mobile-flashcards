import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { handleRecieveDecks } from '../actions';
import Card from './Card';

class Home extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleRecieveDecks());
    }

    render() {
        const { decks } = this.props;

        if (!decks) {
            return (
                <View style={styles.container}>
                    <Text>Loading</Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Choose a Deck to start learning</Text>

                <FlatList
                    data={Object.keys(decks)}
                    renderItem={({ item }) => (
                        <Card key={item} deckId={item} />
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faf9f7',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginTop: 16
    }
})

function mapStateToProps(decks) {
    console.log(decks);
    return {
        decks
    }
}

export default connect(mapStateToProps)(Home);
