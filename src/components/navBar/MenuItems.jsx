import React from "react";
import SubMenu from "./SubMenu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const MenuItems = ({ items }) => {
  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <a href={items.url}>
            {items.title}{" "}
            <ExpandMoreIcon
              sx={{
                fontSize: "16px",
                marginLeft:'4px'
              }}
            />{" "}
          </a>
          <SubMenu submenus={items.submenu}></SubMenu>
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
