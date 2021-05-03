import React, { useState } from "react";
import { HiOutlineViewList } from "react-icons/hi";
import classnames from "classnames";
import { SideNavContent } from "../side-nav-content/SideNavContent";

export function SideNavMobile() {
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);

  return (
    <div className="flex items-center px-2 h-12 shadow-sm md:hidden">
      <HiOutlineViewList
        fontSize="24px"
        onClick={() => setShowMobileDrawer(true)}
      />
      <span className="text-xl font-bold ml-8">Billie_Mission</span>
      {/* drawer section */}
      <div
        onClick={() => setShowMobileDrawer(false)}
        className={classnames("fixed inset-0 bg-black opacity-70", {
          hidden: !showMobileDrawer,
        })}
      />
      <div
        className={classnames(
          "transform top-0 left-0 w-8/12 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-500 z-20 pt-8",
          {
            "translate-x-0": showMobileDrawer,
            "-translate-x-full": !showMobileDrawer,
          }
        )}
      >
        <SideNavContent onNavItemClick={() => setShowMobileDrawer(false)} />
      </div>
    </div>
  );
}

export default SideNavMobile;
