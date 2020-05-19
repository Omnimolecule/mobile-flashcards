import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { handleRecieveDecks, handleRecieveDeck, handleAddDeck, handleAddCard } from '../actions';

class Home extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleRecieveDecks());
    }

    render() {
        const { decks } = this.props;
        return (
            <View>
                <Text> Home </Text>
                {decks && Object.keys(decks).map((key) => <Text key={key}>{`${key}: ${decks[key].title} - ${decks[key].cards.length}`}</Text>)}
            </View>
        );
    }
}

function mapStateToProps(decks) {
    console.log(decks);
    return {
        decks
    }
}

export default connect(mapStateToProps)(Home);
