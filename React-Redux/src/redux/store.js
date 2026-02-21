import { createStore } from 'redux'
import {productReducer} from './products'
import { persistStore,persistReducer } from 'redux-persist';
import local from 'redux-persist/lib/storage'
const persistConifg={
    key:'root',
    storage:local,
}
const persistReducers=persistReducer(persistConifg,productReducer)
const store=createStore(
    persistReducers,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //This line to enable redux dev tool
);
const persistedStore=persistStore(store)
export {store,persistedStore}; 