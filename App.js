// Imports: Dependencies
import React from 'react';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';

// Imports: Screens
import Counter from './src/screens/Counter';

// Imports: Redux Persist Persister
import {store, persistor} from './src/redux/store/store';

// React Native: App
export default App = () => {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Counter />
      </PersistGate>
    </Provider>
  );
};
