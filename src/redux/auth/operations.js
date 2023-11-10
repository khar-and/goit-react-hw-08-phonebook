// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// // axios.defaults.baseURL = 'https://phonebook-db-2lk4.onrender.com/';

// const setAuthHeader = token => {
//   // Встановлення заголовка авторизації у вихідних параметрах запиту
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   // Очищення заголовка авторизації
//   axios.defaults.headers.common.Authorization = '';
// };

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       // Виконання POST-запиту на реєстрацію користувача
//       const res = await axios.post('/users/register', credentials); //signup
//       console.log(res.data);
//       setAuthHeader(res.data.token); // Встановлення отриманого токена авторизації у заголовок
//       return res.data; // Повернення даних з відповіді сервера
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message); // Обробка помилки із викликом rejectWithValue
//     }
//   }
// );

// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       // Виконання POST-запиту на авторизацію користувача
//       const res = await axios.post('/users/login', credentials);
//       setAuthHeader(res.data.token); // Встановлення отриманого токена авторизації у заголовок
//       return res.data; // Повернення даних з відповіді сервера
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message); // Обробка помилки із викликом rejectWithValue
//     }
//   }
// );

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     // Виконання POST-запиту на виход користувача
//     await axios.post('/users/logout');
//     clearAuthHeader(); // Очищення заголовка авторизації
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message); // Обробка помилки із викликом rejectWithValue
//   }
// });

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user'); // Помилка, якщо токен не збережений у стані
//     }

//     try {
//       setAuthHeader(persistedToken); // Встановлення збереженого токена авторизації у заголовок
//       const res = await axios.get('/users/current'); // Виконання GET-запиту для отримання інформації про користувача
//       return res.data; // Повернення даних з відповіді сервера
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message); // Обробка помилки із викликом rejectWithValue
//     }
//   }
// );



import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', newUser);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.failure(`We're sorry, something went wrong`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (logInUser, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', logInUser);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.failure(`You entered an incorrect login or password`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    deleteToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null)
      return thunkAPI.rejectWithValue('Unable to fetch user');
    try {
      setToken(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);