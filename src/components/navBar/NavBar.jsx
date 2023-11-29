import React from "react";
import { navMenuData } from "../../apis/data";
import { Box } from "@mui/system";
import MenuItems from "./MenuItems";

const NavBar = () => {
  return (
    <>
      <ul id="main_menu">
        {navMenuData.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </>
  );
};

export default NavBar;
