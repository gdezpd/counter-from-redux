import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: counterReducer
})
// непосредственно создаём store
// export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
export const store = createStore(rootReducer);
store.subscribe(() => {
    localStorage.setItem('value', JSON.stringify(store.getState()))
})

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// export const AppStoreType = typeof store

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;