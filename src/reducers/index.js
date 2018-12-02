import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { fetchPost } from './fetchPost';
import { fetchDetailPost } from "./fetchDetailPost";
import {fetchPostArea} from './fetchPostArea'
import { fetchDestination } from "./fetchDestination";
import { fetchPackage } from "./fetchPackage";
import { fetchPackageDestination } from "./fetchPackageDestination";
import { searchTour } from "./searchTour"
import { addOrder } from "./addOrder"
import {fetchPackageDetail} from "./fetchPackageDetail"

export default combineReducers({
  form: reduxFormReducer, // mounted under "form"
  fetchPost,
  fetchDetailPost,
  fetchPostArea,
  fetchDestination,
  fetchPackage,
  fetchPackageDestination,
  searchTour,
  addOrder,
  fetchPackageDetail
});
