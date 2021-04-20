import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAboutDataAction, setAboutData } from './slice';
import { request } from '~/src/utils/requests';


function* fetchAboutDataGenerator() {
    try {
        const url: string = "about/get";
        const response: object = yield (call(request, url, 'GET'));
        yield put(setAboutData(response));

    } catch (error) {
        yield console.log('test', error);
    }
};


export default function* watchAbout() {
    yield takeLatest(fetchAboutDataAction.type, fetchAboutDataGenerator);
};
