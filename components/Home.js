import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { handleRecieveDecks } from '../actions';
import Deck from './Deck';
import FAB from 'react-native-fab';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class Home extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleRecieveDecks());
    }

    navigateToDetail = (id) => {
        const {navigation} = this.props;
        navigation.navigate('DeckDetail', {id});
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
                        <Deck deckId={item} navigateToDetail={this.navigateToDetail} />
                    )}
                    keyExtractor={item => item}
                />
                <FAB
                    buttonColor="#3236a8"
                    iconTextColor="#FFFFFF"
                    onClickAction={() => { console.log("FAB pressed") }}
                    visible={true}
                    iconTextComponent={
                        <MaterialCommunityIcons name="plus" size={24} color="white" />
                    }
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

function mapStateToProps(decks, props) {
    console.log(decks);
    return {
        ...props,
        decks
    }
}

export default connect(mapStateToProps)(Home);
