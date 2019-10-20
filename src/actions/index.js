import { IMAGES } from '../constants';

const loadImages = () => ({
  type: IMAGES.LOAD
});

const setImages = images => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
});

const setError = error => ({
  type: IMAGES.LOAD_FAIL,
  error,
});

const loadImageStats = () => ({
  type: IMAGES.LOAD
});

const setImageStats = (id, downloads) => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
  download,
});

const setImageStatsError = error => ({
  type: IMAGES.LOAD_FAIL,
  id,
});

export {
  loadImages,
  setImages,
  setError,
  loadImageStats,
  setImageStats,
  setImageStatsError
}