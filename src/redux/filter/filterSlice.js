// import { createSlice } from '@reduxjs/toolkit';

// // Створення slice для фільтра
// export const filterSlice = createSlice({
//   name: 'filter', // Унікальне ім'я для slice
//   initialState: '', // Початковий стан фільтра
//   reducers: {
//     // Визначення редуктора changeFilter, який змінюватиме стан фільтра на основі переданої дії action
//     changeFilter(state, action) {
//       return (state = action.payload);
//     },
//   },
// });

// // Експорт дії action changeFilter з slice filterSlice
// export const { changeFilter } = filterSlice.actions;

// // Експорт редуктора reducer filterReducer з slice filterSlice
// export const filterReducer = filterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filters: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterSet(state, action) {
      state.filters = action.payload;
    },
  },
});

export const selectContactsFilter = state => state.filters.filters;

export const { filterSet } = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;
