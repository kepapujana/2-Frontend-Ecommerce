import { createContext, useReducer } from 'react';
import axios from 'axios';
import UserReducer from './UserReducer';

const token = JSON.parse(localStorage.getItem('token'));

const initialState = {
  token: token ? token : null,
  user: null,
};

const API_URL = 'http://localhost:3000';

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (user) => {
    const res = await axios.post(`${API_URL}/user/login`, user);
    dispatch({
      type: 'LOGIN',
      payload: res.data,
    });
    if (res.data) {
      console.log(res.data);
      localStorage.setItem('token', JSON.stringify(res.data.token));
    }
  };

  const getUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    const res = await axios.get(`${API_URL}/user/id/`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: 'GET_USER_INFO',
      payload: res.data,
    });
    return res;
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        getUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext(initialState);
