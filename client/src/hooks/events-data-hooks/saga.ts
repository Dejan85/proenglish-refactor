import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchEventsData, setEventsData, filterEventsAction, filterEvents, filterDailyEvents, filterDailyEventsAction } from './slice';
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

function* filterEventsGenerator(action: any) {
    yield put(filterEvents(action.payload));

}

function* filterDailyEventsGenerator(action: any) {
    yield put(filterDailyEvents(action.payload));
};



export default function* watchEvent() {
    yield takeLatest(fetchEventsData.type, fetchEventsDataGenerator);
    yield takeLatest(filterEventsAction.type, filterEventsGenerator);
    yield takeLatest(filterDailyEventsAction.type, filterDailyEventsGenerator);
};
