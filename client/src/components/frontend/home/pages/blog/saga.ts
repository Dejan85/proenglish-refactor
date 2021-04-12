import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setBlogData, fetchBlogData } from './slice';

function* fetchBlogDataGenerator() {
    try {
        const url = "/blog/get";

        const response = yield call(axios, url);

        yield put(setBlogData(response));
    } catch (err) {
        yield console.log('test', err);
    }
};


export default takeLatest(fetchBlogData.type, fetchBlogDataGenerator);