import {
    combineReducers,
    createStore
} from 'redux';
// import reducers here

// const rootReducer = combineReducers({
// `add reducers here`
// })

const store = createStore(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;