import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import rootReducer from './redux-demo/reducer';
import Routes from './Routes';

const ProjectApp = () => {

    const persistConfig = {
        key: 'root',
        storage
    }

    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store = createStore(persistedReducer)
    const persistor = persistStore(store)

  return (
      <>
        <Provider>
            <PersistGate persistor={persistor}>
                <Routes/>
            </PersistGate>
        </Provider>
      </>
  )
}

export default ProjectApp