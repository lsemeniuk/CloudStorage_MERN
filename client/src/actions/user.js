import axios from 'axios';
import { API_URL } from '../config';
import { hideLoader, showLoader } from '../reducers/appReducer';
import { setUser } from '../reducers/userReducer';

export const registration = async (email, password, fullName, history) => {
  try {
    const response = await axios.post(`${API_URL}api/auth/registration`, {
      email,
      password,
      fullName,
    });
    console.log(response?.data?.message);
    history.push('/login');
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const login = (email, password, history) => {
  return async dispatch => {
    try {
      const response = await axios.post(`${API_URL}api/auth/login`, {
        email,
        password,
      });
      dispatch(setUser(response.data.user));
      history.push('/files');
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  };
};

export const auth = () => {
  return async dispatch => {
    try {
      dispatch(showLoader());
      const response = await axios.get(`${API_URL}api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.log(e.response?.data?.message);
      localStorage.removeItem('token');
    } finally {
      dispatch(hideLoader());
    }
  };
};

export const uploadAvatar = file => {
  return async dispatch => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post(`${API_URL}api/files/avatar`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      dispatch(setUser(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteAvatar = () => {
  return async dispatch => {
    try {
      const response = await axios.delete(`${API_URL}api/files/avatar`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      dispatch(setUser(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
