import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "../app/reducers/companiesSlice";

export const store = configureStore({
  reducer: {
    company: companyReducer,
  },
});
