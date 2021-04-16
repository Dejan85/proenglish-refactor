import { put, call, takeLatest } from 'redux-saga/effects';
import { setBlogData, fetchBlogData } from './slice';
import { request } from '~/src/utils/requests';


function* fetchBlogDataGenerator() {
    try {
        const url: string = "blog";
        const response: object = yield call(request, url, "GET");
        yield put(setBlogData(response));
    } catch (error) {
        yield console.log('test', error);
    }
};


export default function* watchBlog() {
    yield takeLatest(fetchBlogData.type, fetchBlogDataGenerator);
}