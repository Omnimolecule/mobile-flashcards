import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Deck from './Deck';
import { FAB } from 'react-native-paper';
import { handleRecieveDecks } from '../actions/decks';

class Home extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleRecieveDecks());
    }

    navigateToDetail = (id) => {
        const { navigation } = this.props;
        navigation.navigate('DeckDetail', { id });
    }

    navigateToAddDeck = () => {
        const { navigation } = this.props;
        navigation.push('AddDeck');
    }

    render() {
        const { decks, navigation } = this.props;

        if (!decks) {
            return (
                <View style={styles.container}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <ActivityIndicator size='large' animating={true} color='#3236a8' />
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Choose a Deck to start learning</Text>

                <FlatList
                    data={Object.keys(decks)}
                    renderItem={({ item }) => (
                        <Deck deckId={item} navigateToDetail={this.navigateToDetail} />
                    )}
                    keyExtractor={item => item}
                />

                <FAB
                    style={styles.fab}
                    icon="plus"
                    onPress={this.navigateToAddDeck}
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
    },
    fab: {
        backgroundColor: '#3236a8',
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})

function mapStateToProps({ decks }, props) {
    return {
        ...props,
        decks
    }
}

export default connect(mapStateToProps)(Home);
