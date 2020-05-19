import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, Text } from 'react-native';

class DeckDetail extends Component {

  render() {
      const {id, deck} = this.props;
    return (
      <View>
        <Text>DeckDetail</Text>
        <Text>{deck.title}</Text>
      </View>
    );
  }
}

function mapStateToProps(decks, {route, navigation}) {
    const id = route.params.id;
    const deck = decks[id];
    return {
        id,
        deck,
        navigation
    }
}

export default connect(mapStateToProps)(DeckDetail);
