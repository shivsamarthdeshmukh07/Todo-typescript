import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
 //import { persistStore, persistReducer } from "redux-persist";
import {
  persistStore,
  persistReducer,
  PersistConfig,
} from 'redux-persist'

import EncryptedStorage from 'react-native-encrypted-storage';

const persistConfig:PersistConfig<any> = {
  key: "root",
  storage:EncryptedStorage
};


const persistedReducer = persistReducer(persistConfig, todoSlice);

const todoStore= configureStore({

 

    reducer:{
      todo : persistedReducer,
       
    },
    middleware: (
      getDefaultMiddleware, 
    ) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),

  
   
})

export type RootState = ReturnType<typeof todoStore.getState>;
export type AppDispatch = typeof todoStore.dispatch;

export default todoStore;

export const persistor = persistStore(todoStore);