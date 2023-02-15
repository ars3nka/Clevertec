import { configureStore } from '@reduxjs/toolkit';

import { dataApi } from '../api';

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware),
});

// import { configureStore } from '@reduxjs/toolkit';

// import { booksReducer } from '../reducers/books-reducer';

// export const store = configureStore({
//   reducer: { books: booksReducer },
// });

// console.log('STORE', store.getState());
