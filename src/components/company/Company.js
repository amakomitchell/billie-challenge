import React from "react";
import { formatMoney, transformDate } from "../../utility";

export function Company({ company, onClick }) {
  return (
    <div
      onClick={() => onClick(company)}
      className="w-full flex items-center justify-between mb-5 bg-white py-6 rounded shadow-sm cursor-pointer"
    >
      <div className="md:w-12 w-4" />
      <div className="flex-1 mr-4 text-sm truncate">{company.name}</div>
      <div className="flex-1 mr-4 text-sm truncate">
        {transformDate(company.date_of_first_purchase)}
      </div>
      <div className="flex-1 mr-4 text-sm truncate">
        {formatMoney(company.budget)}
      </div>
      <div className="flex-1 mr-4 text-sm hidden md:block">
        {formatMoney(company.budget_spent)}
      </div>
      <div className="flex-1 mr-4 text-sm hidden md:block">
        {formatMoney(company.budget - company.budget_spent)}
      </div>
    </div>
  );
}

export default Company;
