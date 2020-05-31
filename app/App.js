import * as React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import 'react-native-gesture-handler';
import { colorConstants } from '@constants';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from '@navigators/MyTabs';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../ReactotronConfig';
import rootSaga from './sagas';

let sagaMiddleware;

const sagaMonitor = Reactotron.createSagaMonitor();
sagaMiddleware = createSagaMiddleware({ sagaMonitor })
const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()));



sagaMiddleware.run(rootSaga);

const MyTheme = {
  dark: false,
  colors: {
    primary: colorConstants.ACCENT_COLOR,
    background: colorConstants.BACK_FIRST,
    card: colorConstants.TEXT,
    text: colorConstants.ACCENT_COLOR,
    border: colorConstants.BORDER_COLOR,
  },
};

const App = () =>
{
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer theme={MyTheme}>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
