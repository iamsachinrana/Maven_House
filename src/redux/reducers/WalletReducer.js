import {
  SET_WALLET_ID,
} from "../action/actionConstants";

const initialState = {
  walletId: null,
};

const WalletReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_WALLET_ID:
      return {
        ...state,
        walletId: action.payload
      };
    default:
      return state;
  }
};

export default WalletReducer;
