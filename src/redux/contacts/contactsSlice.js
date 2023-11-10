// import { createSlice, isAnyOf } from '@reduxjs/toolkit';

// // Імпорт асинхронних Thunk-дій fetchContacts, addContacts, deleteContacts з файлу 'operations'
// import {
//   fetchContacts,
//   addContacts,
//   deleteContacts,
// } from 'redux/contacts/operations';

// // Визначення функції getActions, яка повертає умову isAnyOf для зазначеного типу дії
// const getActions = type =>
//   isAnyOf(fetchContacts[type], addContacts[type], deleteContacts[type]);

// // Початковий стан для slice contactsSlice
// const initialState = { items: [], isLoading: false, error: null };
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: builder =>
//     builder
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.items = action.payload; // Оновлення списку контактів
//       })
//       .addCase(addContacts.fulfilled, (state, action) => {
//         state.items.unshift(action.payload); // Додавання нового контакту на початок списку контактів
//       })
//       .addCase(deleteContacts.fulfilled, (state, action) => {
//         const index = state.items.findIndex(
//           contact => contact.id === action.payload.id
//         );
//         state.items.splice(index, 1); // Видалення контакту зі списку контактів
//       })
//       .addMatcher(getActions('pending'), state => {
//         state.isLoading = true;
//       })
//       .addMatcher(getActions('rejected'), (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addMatcher(getActions('fulfilled'), state => {
//         state.isLoading = false;
//         state.error = null;
//       }),
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initial';
import {
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './operations';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunk = [getContactsThunk, createContactsThunk, deleteContactsThunk];

const arrTypeThunk = type => arrThunk.map(el => el[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handleFulfilledCreate = (state, { payload }) => {
  state.items.push(payload);
};

const handleFulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload.id);
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(createContactsThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...arrTypeThunk(PENDING)), handlePending)
      .addMatcher(isAnyOf(...arrTypeThunk(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...arrTypeThunk(REJECTED)), handleRejected);
  },
});

export const contactsReduser = contactsSlice.reducer;
