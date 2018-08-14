import {createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AppReducer from './client/reducers/AppReducer'
import TasksReducer from './client/reducers/TasksReducer'
import projectSaga from './client/sagas/ProjectSaga'

const sagaApp = createSagaMiddleware()

const reducer = combineReducers({
    AppReducer,
    TasksReducer
})

const store = createStore(reducer, applyMiddleware(sagaApp))

sagaApp.run(projectSaga)

export default store;