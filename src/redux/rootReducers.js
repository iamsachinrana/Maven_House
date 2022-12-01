import { combineReducers } from 'redux';
import ToastReducer from "./reducers/ToastReducer";

const rootReducer = combineReducers({
  toastReducer: ToastReducer,  
});

export default rootReducer;

