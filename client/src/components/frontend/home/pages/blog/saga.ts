import { put, call, takeLatest } from 'redux-saga/effects';
import { setBlogData, fetchBlogData } from './slice';
import { request } from '~/src/utils/requests';


function* fetchBlogDataGenerator() {
    try {
        const url: string = "blog";
        const response: object = yield call(request, url, "GET");
        yield put(setBlogData(response));
    } catch (err) {
        yield console.log('test', err);
    }
};


export default function* watchBlog() {
    yield takeLatest(fetchBlogData.type, fetchBlogDataGenerator);
}