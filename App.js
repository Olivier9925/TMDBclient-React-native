import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'
import thunk from 'redux-thunk';
import 'react-native-gesture-handler';
import
{
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import
{
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './components/MyTabs'

const store = createStore(reducers, applyMiddleware(thunk))


const App = () =>
{
  return (
    <Provider store={store} >
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider >
  );
};


export default App;
