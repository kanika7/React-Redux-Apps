import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects'
import axios from 'axios';


function fetchData(){
    return axios.get('http://localhost:3200/projects')
}
function postTasksData(data) {
    return axios.post('http://localhost:3200/projects',data.data)
}
function* addTask(data) {
    const postresponse = yield call(postTasksData,data)
    const postpayload = postresponse ? postresponse.data : {}
    yield call(delay, 500)
    const response = yield call(fetchData)
    const payload = response ? response.data : {}
    yield put({type: 'ADDED_TASK', payload});
}

function newStatus(data){
    return axios.put('http://localhost:3200/projects/'+data.data.pid,
        data.data
    )
}

function* statusChanged(data) {
    const putresponse = yield call(newStatus,data)
    const putpayload = putresponse ? putresponse.data : {}
    yield call(delay, 500)
    const response = yield call(fetchData)
    const payload = response ? response.data : {}
    yield put({type: 'ADDED_TASK', payload});
}

function* watchEveryRequest(){
    yield all([
        takeEvery('ADD_TASK',addTask),
        takeEvery('STATUS_CHANGED',statusChanged)
    ])
}

export default function* projectSaga() {
    yield watchEveryRequest();
}