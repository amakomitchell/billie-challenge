import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companies: [
    {
      id: 1,
      name: "Martian Firma",
      budget: 10000.0,
      budget_spent: 4500.0,
      date_of_first_purchase: "2119-07-07",
    },
    {
      id: 2,
      name: "Solar Firma",
      budget: 1123.22,
      budget_spent: 451.3754,
      date_of_first_purchase: "2120-01-14",
    },
    {
      id: 42,
      name: "Yellow Corp.",
      budget: 1000000.0,
      budget_spent: 1000.0,
      date_of_first_purchase: "2121-12-24",
    },
  ],
  selectedCompany: null,
};

export const companiesSlice = createSlice({
  name: "company",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addCompany: (state, action) => {
      state.companies.push(action.payload);
    },
    updateCompany: (state, action) => {
      const companyToUpdate = action.payload;
      const updateIndex = state.companies.findIndex(
        (comp) => comp.id === companyToUpdate.id
      );
      if (updateIndex !== -1) {
        state.companies[updateIndex] = action.payload;
      }
    },
    setSelectedCompany: (state, action) => {
      state.selectedCompany = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateBudgetChange: (state, action) => {
      state.companies = action.payload;
    },
  },
});

export const { addCompany, updateCompany, setSelectedCompany } =
  companiesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

// displays the list of companies from the initial state
export const selectCompanies = (state) => state.company.companies;
// displays the selected company on the modal
export const selectSelectedCompany = (state) => state.company.selectedCompany;

export default companiesSlice.reducer;
