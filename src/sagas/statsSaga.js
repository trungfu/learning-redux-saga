import { IMAGES } from '../constants';

function* watchStatsRequest() {
  while (true) {
    yield take(IMAGES.LOAD_SUCCESS);
  }
}