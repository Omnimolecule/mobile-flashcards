import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import { TextInput, Button } from 'react-native-paper';
import { handleAddCard } from '../actions';

class AddCard extends Component {
    state = {
        question: '',
        answer: '',
    }

    addCard = () => {
        const {dispatch, navigation, route} = this.props;
        const {id} = route.params;
        const {question, answer} = this.state;
        dispatch(handleAddCard(id, question, answer));
        navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <TextInput
                        label='Question'
                        value={this.state.question}
                        onChangeText={question => this.setState({ question })}
                        mode='outlined'
                    />
                    <TextInput
                        label='Answer'
                        value={this.state.answer}
                        onChangeText={answer => this.setState({ answer })}
                        mode='outlined'
                    />
                    <Button style={styles.button} color='#3236a8' mode="contained" onPress={this.addCard}>
                            Add Card
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

export default connect()(AddCard);
