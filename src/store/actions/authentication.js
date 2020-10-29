const baseUrl = "http://localhost:8080";

export const TOKEN_KEY = "discord/authentication/token";
export const SET_TOKEN = "discord/authentication/SET_TOKEN";
export const REMOVE_TOKEN = "discord/authentication/REMOVE_TOKEN";

export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const setToken = (token) => ({ type: SET_TOKEN, token });

export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(setToken(token));
  }
};

export const login = (email, password) => async (dispatch) => {
  const response = await fetch(`${baseUrl}/users/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { token, user } = await response.json();
    console.log(user.id)
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem('userId', user.id)
    dispatch(setToken(token));
  }
};

export const logout = () => async (dispatch, getState) => {

  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem('userId');
  dispatch(removeToken)
  window.location.href = '/'
  // const {
  //   authentication: { token },
  // } = getState();
  // const response = await fetch(`${baseUrl}/users/logout`, {
  //   method: "delete",
  //   headers: { Authorization: `Bearer ${token}` },
  // });

  // if (response.ok) {
  //   window.localStorage.removeItem(TOKEN_KEY);
  //   dispatch(removeToken());
  // }
};

export const register = (username, email, password) => async (dispatch) => {
  const response = await fetch(`http://localhost:8080/users`, {
    method: 'post',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password })
  });
  if (response.ok) {

    const { token, user} = await response.json();
    window.localStorage.setItem(TOKEN_KEY, token)
    window.localStorage.setItem('userId', user.id)
    dispatch(setToken(token));
  }
}