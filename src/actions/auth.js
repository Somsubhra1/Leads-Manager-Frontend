import axios from "../axios";

import { returnErrors } from "./messages";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "./types";

// CHECK TOKEN AND LOAD USER:

export const loadUser = () => (dispatch, getState) => {
  // User Loading

  dispatch({ type: USER_LOADING });

  const config = tokenConfig(getState);

  axios
    .get("/api/auth/user", config)
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));

      dispatch({ type: AUTH_ERROR });
    });
};

// LOGIN USER:

export const login = (username, password) => (dispatch) => {
  // Headers

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // Request body

  const body = JSON.stringify({ username, password });

  axios
    .post("/api/auth/login", body, config)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));

      dispatch({ type: LOGIN_FAIL });
    });
};

// LOGOUT USER

export const logout = () => (dispatch, getState) => {
  const config = tokenConfig(getState);
  axios
    .post("/api/auth/logout", null, config)
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Setup config with token for axios - helper function
export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  // Headers

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
