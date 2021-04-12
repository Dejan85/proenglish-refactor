import { put, call, takeLatest } from 'redux-saga/effects';
import { setBlogData, fetchBlogData } from './slice';
import { request } from '~/src/utils/requests';


function* fetchBlogDataGenerator() {
    try {
        const url = "blog/get";

        const response = yield call(request, url, "GET");

        console.log('test', response);


        yield put(setBlogData(response));
    } catch (err) {
        yield console.log('test', err);
    }
};


export default function* watchBlog() {
    yield takeLatest(fetchBlogData.type, fetchBlogDataGenerator);
}