import { HIDE_TOAST, SHOW_TOAST } from "../action/actionConstants";

const initialState = {
  message: '',
  type: '',
  isVisible: false,
};

const ToastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        message: action.payload.message,
        type: action.payload.type,
        isVisible: true,
      };
    case HIDE_TOAST:
      return {
        ...state,
        message: "",
        type: '',
        isVisible: false,
      };
    default:
      return state;
  }
};

export default ToastReducer;
