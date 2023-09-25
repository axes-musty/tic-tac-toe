import React from 'react';
import {AppProvider} from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <p> Template </p>
    </AppProvider>
  );
};

export default App;
