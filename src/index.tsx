import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import {applyMiddleware, compose, createStore} from "redux";
import reportWebVitals from './reportWebVitals';
import { reducers } from './store'
import App from './App';
import thunk from 'redux-thunk';

function saveToLocalStorage(state: any) {
    try {

        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);

    } catch (error) {
        console.log(error)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);

const persistedState = loadFromLocalStorage();


const store = createStore(reducers, persistedState, enhancer);

store.subscribe(() => saveToLocalStorage(store.getState()));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
