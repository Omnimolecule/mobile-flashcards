import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { handleAddDeck } from '../actions/shared';
import { StackActions } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import { removeNewDeckId } from '../actions/newDeckId';

class AddDeck extends Component {
    state = {
        title: '',
        goToDetail: false
    }

    addDeck = () => {
        const { dispatch } = this.props;
        const { title } = this.state;
        dispatch(handleAddDeck(title));

        this.setState(() => ({
            goToDetail: true
        }))
    }

    goToDetail = () => {
        const { newDeckId, navigation, dispatch } = this.props;
        if (newDeckId) {
            navigation.dispatch(
                StackActions.replace('DeckDetail', {
                    id: newDeckId,
                })
            );

            dispatch(removeNewDeckId());
        }
    }

    render() {
        const { goToDetail, title } = this.state;
        if (goToDetail) {
            this.goToDetail();
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
                <View style={styles.card}>
                    <TextInput
                        label='Deck title'
                        value={title}
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

export default connect((state) => ({ newDeckId: state.newDeckId }))(AddDeck);
