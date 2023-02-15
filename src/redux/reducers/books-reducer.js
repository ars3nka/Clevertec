/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { service } from '../../service';

const initialState = {
  books: [],
  booksCategories: [],
  loading: false,
  loadingCategories: true,
  error: null,
};

export const getBooks = createAsyncThunk('books/getBooks', async (_, { rejectWithValue }) => {
  try {
    const responce = await service.get('/api/books');

    return responce.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getBooksCategories = createAsyncThunk('books/getBooksCategories', async (_, { rejectWithValue }) => {
  try {
    const responce = await service.get('/api/categories');

    return responce.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getBooksCategories.pending, (state) => {
        state.loadingCategories = true;
        state.error = null;
      })
      .addCase(getBooksCategories.fulfilled, (state, action) => {
        state.loadingCategories = false;
        state.booksCategories = action.payload;
      })
      .addCase(getBooksCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.loadingCategories = false;
      });
  },
});

export const { addBooks } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
