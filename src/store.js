import { configureStore } from '@reduxjs/toolkit';
import { todoSlise } from 'redux/TodoSlice/Todoslice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import store from 'store';

const persistConfig = {
  key: 'todos',
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  todoSlise.reducer
);

export default configureStore({
  reducer: {
    todos: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
