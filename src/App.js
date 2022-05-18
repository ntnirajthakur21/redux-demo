import { createStore } from "redux";

import { Provider } from 'react-redux';
import MyRoutes from "./Routes";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'
import RootReducer from "./redux-demo/reducer/index";
 


function App() {

  const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, RootReducer)

  const stores = createStore(persistedReducer)

  const persistor = persistStore(stores)



  return (
    <>
    
    
      <Provider store={stores}>
        <PersistGate persistor={persistor}>
            <MyRoutes/>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
