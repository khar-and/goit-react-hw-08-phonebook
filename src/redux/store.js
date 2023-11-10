// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { filtersReducer } from './filterSlice';
// import { contactsReducer } from './contactsSlice';

// const reducers = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
// });

// export const store = configureStore({
//   reducer: reducers,
// });

// import { configureStore } from '@reduxjs/toolkit';
// import { getDefaultMiddleware } from '@reduxjs/toolkit';
// import { authReducer } from 'redux/auth/slice';
// import { contactsReducer } from 'redux/contacts/contactsSlice';
// import { filterReducer } from 'redux/filter/filterSlice';
// import storage from 'redux-persist/lib/storage';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// // Застосування middleware за допомогою getDefaultMiddleware,  який містить стандартні middleware, а також встановлює ігнорування деяких дій для redux-persist.
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// // Конфігурація для redux-persist, вказуємо ключ, зберігання та поля, які треба зберегти.
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// // Створення сховища Redux за допомогою configureStore
// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer, // Редюсер для керування станом контактів
//     filter: filterReducer, // Редюсер для керування станом фільтра
//     auth: persistReducer(authPersistConfig, authReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// // Створюємо persistor для збереження стану Redux у локальному сховищі.
// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { contactsReduser } from './contacts/contactsSlice';
import { filtersReducer } from './filter/filterSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/slice';
import persistReducer from 'redux-persist/es/persistReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReduser,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
