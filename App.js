import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStore } from "redux";
import reducer from './reducers';
import { Provider } from "react-redux";
import middleware from './middleware';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import DeckDetail from './components/DeckDetail';
import { createStackNavigator } from '@react-navigation/stack';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';


const Stack = createStackNavigator();

class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ title: 'Mobile Flashcards' }} />
            <Stack.Screen name="DeckDetail" component={DeckDetail} options={{ title: 'Deck Overview' }}/>
            <Stack.Screen name="AddDeck" component={AddDeck} options={{title: 'Add new Deck'}} />
            <Stack.Screen name="AddCard" component={AddCard} options={{title: 'Add new Card'}} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App