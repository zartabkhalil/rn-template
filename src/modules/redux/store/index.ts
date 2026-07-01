/**
 * Redux Store
 *
 * Configured with redux-persist for state persistence
 * across app restarts using AsyncStorage.
 *
 * ─── Persisted slices ───────────────────────────────────────────
 *  app  → theme, language, isOnboarded persisted
 *  user → user data persisted
 *
 * ─── Adding a new slice ─────────────────────────────────────────
 *  1. Create slice in src/modules/redux/slices/
 *  2. Import reducer here
 *  3. Add to rootReducer
 *  4. Add to persistConfig whitelist if it should persist
 *
 * ─── Setup (app/_layout.tsx) ────────────────────────────────────
 *  import { Provider } from 'react-redux'
 *  import { PersistGate } from 'redux-persist/integration/react'
 *  import { store, persistor } from '@/modules/redux'
 *
 *  <Provider store={store}>
 *    <PersistGate loading={null} persistor={persistor}>
 *      <App />
 *    </PersistGate>
 *  </Provider>
 *
 * ─── Usage anywhere ─────────────────────────────────────────────
 *  import { useAppSelector, useAppDispatch } from '@/modules/redux'
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import appReducer from "../slices/appSlice";
import userReducer from "../slices/userSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["app", "user"],
};

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
          "persist/FLUSH",
        ],
      },
    }),
});

export const persistor = persistStore(store);
