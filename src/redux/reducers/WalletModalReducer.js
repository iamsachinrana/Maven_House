import {
  CLOSE_WALLET_MODAL,
  OPEN_WALLET_MODAL
} from "../action/actionConstants";

const initialState = {
  isWalletOpen: false
};

const WalletModalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_WALLET_MODAL:
      return {
        ...state,
        isWalletOpen: true
      };
    case CLOSE_WALLET_MODAL:
      return {
        ...state,
        isWalletOpen: false
      };
    default:
      return state;
  }
};

export default WalletModalReducer;
