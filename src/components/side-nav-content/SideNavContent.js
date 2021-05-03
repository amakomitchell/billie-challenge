import React from "react";
import { Link } from "react-router-dom";
import { FaBloggerB } from "react-icons/fa";
import { SideNavData } from "../side-nav/SideNavData";

export function SideNavContent({ onNavItemClick }) {
  return (
    <React.Fragment>
      <a href="#" className="text-gray-700 flex items-center space-x-2 px-4">
        <FaBloggerB className="" />
        <span className="text-xl font-bold">Billie_Mission</span>
      </a>
      <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto md:">
        {SideNavData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center text-gray-500 border-1 hover:border-pink-600"
            >
              <Link
                className="flex flex-row space-x-4 p-5"
                to={item.path}
                onClick={onNavItemClick}
              >
                {item.icon}
                <h4 className="">{item.title}</h4>
              </Link>
            </div>
          );
        })}
      </nav>
    </React.Fragment>
  );
}

export default SideNavContent;
