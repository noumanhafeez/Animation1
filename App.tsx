import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Basic from './Animations/Basic';
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor:'white' }}>
      <Basic />
    </GestureHandlerRootView>
  );
};

export default App;
