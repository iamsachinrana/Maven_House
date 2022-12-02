import * as types from './actionConstants';

/**
 * Notification Popup
 */
export const showToast = (payload) => ({
  type: types.SHOW_TOAST,
  payload
})

/** WALLET MODAL ACTION */

export const openWalletModal = () => ({
  type: types.OPEN_WALLET_MODAL,
});
export const closeWalletModal = () => ({
  type: types.CLOSE_WALLET_MODAL,

});

/**wallet redux */
export const setWalletId = (payload) => ({
  type: types.SET_WALLET_ID,
  payload
});