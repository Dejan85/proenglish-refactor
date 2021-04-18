import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchEventsData, setEventsData, filterEventsAction, filterEvents } from './slice';
import { request } from '~/src/utils/requests';
const eventsDates = [];


function* fetchEventsDataGenerator() {
    try {
        const url: string = 'events/get';
        const response: object = yield call(request, url, 'GET');

        yield put(setEventsData(response));

    } catch (error) {
        yield console.log('test', error);
    }
};

function* filterEventsGenerator(action: any) {
    yield put(filterEvents(action.payload));

}


export default function* watchEvent() {
    yield takeLatest(fetchEventsData.type, fetchEventsDataGenerator);
    yield takeLatest(filterEventsAction.type, filterEventsGenerator);
};
