import { takeEvery, take, put, call } from 'redux-saga/effects';

import { IMAGES } from '../constants';

function* handleImagesLoad() {
  console.log('fetching images');
}

// watcher saga
function* rootSaga() {
  takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default rootSaga;