import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { handleAddDeck } from '../actions';
import { StackActions } from '@react-navigation/native';

class AddDeck extends Component {
    state = {
        title: '',
    }

    addDeck = () => {
        const { dispatch, navigation } = this.props;
        dispatch(handleAddDeck(this.state.title));
        navigation.goBack();
        /*
        navigation.dispatch(
            StackActions.replace('DeckDetail', {
              id: 'xyz',
            })
          );
          */
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <TextInput
                        label='Deck title'
                        value={this.state.title}
                        onChangeText={title => this.setState({ title })}
                        mode='outlined'
                    />
                    <Button style={styles.button} color='#3236a8' mode="contained" onPress={this.addDeck}>
                        Add Deck
                    </Button>
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
    button: {
        margin: 15,
        marginLeft: 30,
        marginRight: 30,
    },
})

export default connect()(AddDeck);
