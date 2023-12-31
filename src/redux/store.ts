import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/book/bookSlice";
import userReducer from "./features/user/userSlice";
import { api } from "./api/apiSlice";

const store = configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
		[api.reducerPath]: api.reducer,
	},
	// devTools: true
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
