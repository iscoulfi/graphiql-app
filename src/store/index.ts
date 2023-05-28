import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from 'store/api';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
