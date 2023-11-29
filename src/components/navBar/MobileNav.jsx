import React from "react";
import { useState } from "react";
import { navMenuData } from "../../apis/data";
import Dropdown from "./SubMenu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import CardWrap from "../card/CardWrap";
import { trips } from "../../apis/data";
import { Box, Rating } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import Grid from "@mui/system/Unstable_Grid/Grid";
const MobileNav = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [subIdActive, setSubIdActive] = useState("");
  const handleToggleSubMenu = (index) => {
    let mobile_sub_menu = document.querySelectorAll(".mobile_sub_menu");
    let sub_menu = document.getElementById("sub-menu");
    let mobile_menu_wrapper = document.getElementById("mobile_menu_wrapper");
    let close_mobile_menu = document.getElementById("close_mobile_menu");
    if (index == "close") {
      mobile_menu_wrapper.classList.remove("open");
      mobile_menu_wrapper.classList.add("close");
      close_mobile_menu.style.display = "none";
    } else if (index == "back") {
      setShowSubMenu(false);
      sub_menu.classList.remove("subnav_in");
      sub_menu.classList.add("subnav_out");
      mobile_sub_menu[subIdActive].style.display = "none";
    } else {
      mobile_sub_menu.forEach((item, value) => {
        if (item.dataset.id == index) {
          setShowSubMenu(true);
          sub_menu.classList.remove("subnav_out");
          sub_menu.classList.add("subnav_in");
          mobile_sub_menu[value].style.display = "block";
          setSubIdActive(index);
        }
      });
    }
  };
  return (
    <>
      <a id="close_mobile_menu" className="open"></a>
      <div id="mobile_menu_wrapper" className="close">
        <a
          id="mobile_menu_close"
          className="button"
          onClick={() => handleToggleSubMenu("close")}
        >
          <CloseIcon />
        </a>
        <div id="mobile_menu_content">
          <ul
            id="mobile_main_menu"
            className={showSubMenu ? "mainnav_out" : "mainnav_in"}
          >
            {navMenuData.length > 0
              ? navMenuData.map((item, index) => (
                  <li key={index} className="menu-item">
                    <a
                      style={{ display: showSubMenu ? "none" : "block" }}
                      onClick={() => {
                        handleToggleSubMenu(index);
                      }}
                    >
                      {item.title}
                    </a>
                    <div className="mobile_sub_menu" data-id={index}>
                      <a
                        id="menu_back"
                        onClick={() => {
                          handleToggleSubMenu("back");
                        }}
                      >
                        <ArrowBackIcon
                          fontSize="small"
                          sx={{ marginRight: "4px" }}
                        />{" "}
                        Back
                      </a>
                      <Dropdown submenus={item.submenu}></Dropdown>
                    </div>
                  </li>
                ))
              : ""}
          </ul>
          <div id="grandtour_tour">
            <Box xs={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                {trips.length > 0
                  ? trips.map((item, index) => (
                      <Grid item mobile={12} key={index}>
                        <CardWrap mediaClass="card_img" media={item.image_src}>
                          <a className="tour_link" href={item.url}></a>
                          <div className="portfolio_info_wrapper">
                            <span className="tour_price ">$3,900 </span>
                            <h5 style={{ marginTop: "10px" }}>
                              Swiss Alps Trip
                            </h5>
                            <Rating
                              readOnly
                              name="size-small"
                              size="small"
                              defaultValue={item.rate}
                              style={{ color: "#1EC6B6" }}
                            />
                          </div>
                        </CardWrap>
                      </Grid>
                    ))
                  : ""}
              </Grid>
            </Box>
          </div>
          <ul className="mobile_nav_social">
            <li>
              <a>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a>
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a>
                <YouTubeIcon />
              </a>
            </li>
            <li>
              <a>
                <PinterestIcon />
              </a>
            </li>
            <li>
              <a>
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
