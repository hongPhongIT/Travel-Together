import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

const url = "https://travel-together-data.herokuapp.com"

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest("FETCH_POSTS_BEGIN", workerSaga);
    yield takeLatest("FETCH_POSTS_DETAIL_BEGIN", workerSagaPostDetail);
    yield takeLatest("FETCH_DESTINATION_BEGIN", workerSagaDestination);
    yield takeLatest("FETCH_PACKAGE_BEGIN", workerSagaPackage);
    yield takeLatest("FETCH_PACKAGE_DETAIL_BEGIN", workerSagaPackageDetail);
    yield takeLatest("FETCH_PACKAGE_DESTINATION_BEGIN", workerSagaPackageDestination);
    yield takeLatest("SEARCH_TOUR_BEGIN", workerSagaSearchTour);
    yield takeLatest("FETCH_POSTS_AREA_BEGIN", workerSagaPostArea);
    yield takeLatest("HANDLE_SUBMIT_FORM_ORDER_BEGIN", workerSagaAddOrder);
}

// function that makes the api request and returns a Promise for response
function fetchPosts() {
    return axios({
        method: "get",
        url: url + "/posts"
    });
}

function fetchDetailPosts(para) {
    return axios({
        method: "get",
        url: url + "/posts/" + para.id
    });
}

function fetchDestinations() {
    return axios({
        method: "get",
        url: url + "/places"
    });
}

function fetchPackage() {
    return axios({
        method: "get",
        url: `${url}/tours`
    });
}

function fetchPackageDetail(id) {
    return axios({
        method: "get",
        url: `${url}/tours/${id}`
    });
}

function fetchPackageIndex() {
    return axios({
        method: "get",
        url: url + "/tours"
    });
}

function searchTour(props) {
    const key_work = props.key_work
    return axios({
        method: "get",
        url: url + "/tours?" + key_work
    });
}

function fetchPostArea() {
    return axios({
        method: "get",
        url: `${url}/posts?_page=1&_limit=6`
    });
}

function handleSubmitOrder(data, tourID) {
    return axios.post(url + '/orders', {
        data, tourID
    })
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(fetchPosts);
        const posts = response.data;

        yield put({ type: "FETCH_POSTS_SUCCESS", posts });

    } catch (error) {
        yield put({ type: "FETCH_POSTS_FAILURE", error });
    }
}

function* workerSagaPostDetail(para) {
    try {
        const response = yield fetchDetailPosts(para);
        const post = response.data;

        yield put({ type: "FETCH_POSTS_DETAIL_SUCCESS", post });

    } catch (error) {
        yield put({ type: "FETCH_POSTS_DETAIL_FAILURE", error });
    }
}

function* workerSagaDestination() {
    try {
        const response = yield call(fetchDestinations);
        const destinations = response.data;

        yield put({ type: "FETCH_DESTINATION_SUCCESS", destinations });

    } catch (error) {
        yield put({ type: "FETCH_DESTIANTION_FAILURE", error });
    }
}

function* workerSagaPackage() {
    try {
        const response = yield call(fetchPackageIndex);
        const packages = response.data;

        yield put({ type: "FETCH_PACKAGE_SUCCESS", packages });

    } catch (error) {
        yield put({ type: "FETCH_PACKAGE_FAILURE", error });
    }
}

function* workerSagaPackageDetail(params) {
    try {
        const response = yield fetchPackageDetail(params.id);
        const packages = response.data;

        yield put({ type: "FETCH_PACKAGE_DETAIL_SUCCESS", packages });

    } catch (error) {
        yield put({ type: "FETCH_PACKAGE_DETAIL_FAILURE", error });
    }
}

function* workerSagaPackageDestination(params) {
    try {
        const id = params.id
        const response = yield call(fetchPackage);
        const packages = response.data;

        yield put({ type: "FETCH_PACKAGE_DESTINATION_SUCCESS", packages, id });

    } catch (error) {
        yield put({ type: "FETCH_PACKAGE_DESTINATION_FAILURE", error });
    }
}

function* workerSagaSearchTour(props) {
    try {
        if (props.key_work !== '') {

            const response = yield searchTour(props);
            const packages = response.data;

            yield put({ type: "SEARCH_TOUR_SUCCESS", packages });
        }

    } catch (error) {
        yield put({ type: "SEARCH_TOUR_FAILURE", error });
    }
}

function* workerSagaPostArea() {
    try {
        const response = yield call(fetchPostArea);
        const posts = response.data;

        yield put({ type: "FETCH_POSTS_AREA_SUCCESS", posts });

    } catch (error) {
        yield put({ type: "FETCH_POSTS_AREA_FAILURE", error });
    }
}

function* workerSagaAddOrder(data) {
    try {
        if (data.data !== '') {
            console.log('data', data)
            const response = yield handleSubmitOrder(data.data, data.tourID);
            const orders = response.data;
        yield put({ type: "HANDLE_SUBMIT_FORM_ORDER_SUCCESS", orders });
        }

    } catch (error) {
        yield put({ type: "HANDLE_SUBMIT_FORM_ORDER_FAILURE", error });
    }
}