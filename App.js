import React from 'react';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import {Navigation} from './src/navigation/rootNavigation';
const App = () => {
  return (
  <Provider store={store}>
   <Navigation/>
   </Provider>
  )
};



export default App;