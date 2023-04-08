import { configureStore } from '@reduxjs/toolkit'
import countryReducer from '../features/countrySlice'
import storage from 'redux-persist/lib/storage';
import {persistReducer,persistStore} from 'redux-persist';
import thunk from 'redux-thunk'

const persistConfig={
  key: 'root',
  storage
}

const persistedReducer=persistReducer(persistConfig,countryReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor=persistStore(store)