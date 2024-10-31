/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import Routes from './src/routes/Routes';
import todoStore, { persistor } from './src/redux/rtk/todoStore';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';



function App(): React.JSX.Element {
 
  return (
    <Provider store={todoStore}>
      <PersistGate loading={null} persistor={persistor}>
   <Routes/>
   </PersistGate>
   </Provider>
  );
}



export default App;
