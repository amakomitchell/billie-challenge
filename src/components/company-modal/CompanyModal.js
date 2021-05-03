import React from "react";
import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { updateCompany } from "../../app/reducers/companiesSlice";
import { formatMoney } from "../../utility";
import { toast } from "react-toastify";

export function CompanyModal({ company, onModalClose }) {
  const [budget, setBudget] = React.useState(undefined);
  const [error, setError] = React.useState();

  const dispatch = useDispatch();

  const onSave = () => {
    const updatedBudget = Number(budget);
    const isNewBudgetInvalid = updatedBudget < company.budget;

    if (isNaN(updatedBudget) || isNewBudgetInvalid) {
      setError(
        `Invalid Budget. Please enter a valid number not less than ${formatMoney(
          company.budget
        )}`
      );
      return;
    }

    dispatch(updateCompany({ ...company, budget }));
    onModalClose();
    // trigger success toast message
    toast.success("Company Updated.");
  };

  React.useEffect(() => {
    setBudget(company.budget);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-70 z-20" />
      <div className="p-6 bg-white z-40 rounded w-screen h-screen lg:w-2/5 lg:h-auto">
        <div className="p-2 flex justify-between">
          <h4 className="font-bold text-lg">{company.name}</h4>
          <FaTimes
            className="cursor-pointer"
            onClick={() => onModalClose(company)}
          />
        </div>
        <div className="p-3 border-t flex flex-col">
          {/* Show company detail on mobile */}
          <div className="block md:hidden">
            <div className="flex items-center mb-4">
              <div className="flex-1 font-semibold">Company Budget: </div>
              <div className="flex-1">{formatMoney(company.budget)}</div>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex-1 font-semibold">Budget Spent: </div>
              <div className="flex-1">{formatMoney(company.budget_spent)}</div>
            </div>

            <div className="flex items-center mb-6">
              <div className="flex-1 font-semibold">Budget left: </div>
              <div className="flex-1">
                {formatMoney(company.budget - company.budget_spent)}
              </div>
            </div>
          </div>

          {/* show company name and budget on desktop */}
          <div className="mb-4">Company Budget</div>
          <div>
            <input
              type="text"
              className="rounded bg-white h-12 w-full border outline-none px-2 focus:border-blue-700"
              value={budget}
              onChange={(event) => {
                setError("");
                setBudget(event.currentTarget.value);
              }}
            />
            {error && (
              <div className="text-sm text-red-700 m-4 text-center">
                {error}
              </div>
            )}
          </div>
        </div>
        <div className="p-2 flex flex-row-reverse">
          <div
            className="bg-blue-700 flex items-center h-10 px-5 rounded text-white cursor-pointer text-sm hover:bg-blue-900"
            onClick={onSave}
          >
            Save
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyModal;
