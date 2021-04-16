import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchEventsData, setEventsData } from './slice';
import { request } from '~/src/utils/requests';


function* fetchEventsDataGenerator() {
    try {
        const url: string = 'events/get';
        const response: object = yield call(request, url, 'GET');

        yield put(setEventsData(response));

    } catch (error) {
        yield console.log('test', error);
    }
};


export default function* watchEvent() {
    yield takeLatest(fetchEventsData.type, fetchEventsDataGenerator);
};
