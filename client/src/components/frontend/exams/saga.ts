import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchExamsData, setExamsData } from './slice';
import { request } from '~/src/utils/requests';


function* fetchExamsDataGenerator() {
    try {
        const url: string = "/exams/get";
        const response: object = yield call(request, url, "GET");

        yield put(setExamsData(response));
    } catch (err) {
        yield console.log('test', err);

    }
};

export default function* watchExams() {
    yield takeLatest(fetchExamsData.type, fetchExamsDataGenerator);
};

