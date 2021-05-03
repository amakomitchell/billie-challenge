import React, { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";

export const SideNavData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome className="h-6 w-6" />,
  },
  {
    title: "Integrations",
    path: "/integrations",
    icon: <GrShareOption className="h-6 w-6" />,
  },
  {
    title: "Companies",
    path: "/companies",
    icon: <FaUser className="h-6 w-6" />,
  },
];
