import { GET_ERRORS } from "../actions/types";

const initialState = {
  msg: {},
  status: null,
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
      };

    default:
      return state;
  }
};

export default error;
