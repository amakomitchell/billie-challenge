import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Company from "../company/Company";
import CompanyModal from "../company-modal/CompanyModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  setSelectedCompany,
  selectCompanies,
  selectSelectedCompany,
} from "../../app/reducers/companiesSlice";

export function Companies() {
  const companies = useSelector(selectCompanies);
  const selectedCompany = useSelector(selectSelectedCompany);
  const dispatch = useDispatch();
  const notify = () => toast("Budget successfully updates!");

  console.log(companies);
  console.log("selectSelectedCompany: ", selectSelectedCompany);

  return (
    <React.Fragment>
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center mt-16 w-full lg:w-10/12">
            <div className="w-full flex items-center text-gray-500 justify-between mb-5">
              <div className="md:w-12 w-4" />
              <div className="flex-1 mr-4 uppercase text-sm">Company Name</div>
              <div className="flex-1 mr-4 uppercase text-sm">
                First purchase Date
              </div>
              <div className="flex-1 mr-4 uppercase text-sm">Total budget</div>
              <div className="flex-1 mr-4 uppercase text-sm hidden md:block">
                Budget spent
              </div>
              <div className="flex-1 mr-4 uppercase text-sm hidden md:block">
                Budget left
              </div>
            </div>
            {/* items */}
            {companies.map((company) => (
              <Company
                key={company.id}
                company={company}
                onClick={(_company) => dispatch(setSelectedCompany(_company))}
              />
            ))}
          </div>
        </div>
      </div>

      {/* modal */}
      {Boolean(selectedCompany) && (
        <CompanyModal
          company={selectedCompany}
          onModalClose={() => dispatch(setSelectedCompany(null))}
          onClick={notify}
        />
      )}
      <ToastContainer />
    </React.Fragment>
  );
}
export default Companies;
