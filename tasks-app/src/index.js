import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import registerServiceWorker from './registerServiceWorker';
import tasksReducer from './reducers/tasksReducer'

let store = createStore(tasksReducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root'));

