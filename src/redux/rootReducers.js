import { combineReducers } from 'redux';
import ToastReducer from "./reducers/ToastReducer";
import WalletReducer from './reducers/WalletReducer';
import WalletModalReducer from './reducers/WalletModalReducer';

const rootReducer = combineReducers({
  toastReducer: ToastReducer,
  walletReducer: WalletReducer,
  walletModalReducer: WalletModalReducer,
});

export default rootReducer;

