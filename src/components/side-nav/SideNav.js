import React from "react";
import { SideNavContent } from "../side-nav-content/SideNavContent";
import { SideNavMobile } from "../side-nav-mobile/SideNavMobile";

export function SideNav() {
  return (
    <React.Fragment>
      {/* Mobile Sidebar */}
      <SideNavMobile />

      {/* Desktop Sidebar */}
      <div className="relative min-h-screen hidden md:flex">
        <div className="sidebar bg-white text-gray-700 w-64 space-y-6 py-7 px-2">
          <SideNavContent />
        </div>
      </div>
    </React.Fragment>
  );
}

export default SideNav;
