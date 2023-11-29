import React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import logo from "../../../public/image/logo.png";
import logo2 from "../../../public/image/logo@2x.png";
import NavBar from "../navBar/NavBar";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const showMenuMobile = (data) => {
    let mobile_menu_wrapper = document.getElementById("mobile_menu_wrapper");
    let close_mobile_menu = document.getElementById("close_mobile_menu");
    if (data == "show") {
      mobile_menu_wrapper.classList.remove("close");
      mobile_menu_wrapper.classList.add("open");
      close_mobile_menu.style.display = "block";
    } else {
      mobile_menu_wrapper.classList.remove("open");
      mobile_menu_wrapper.classList.add("close");
      close_mobile_menu.style.display = "none";
    }
  };
  const [scrollClass, setScrollClass] = useState("scroll_up");
  const [hasbg, setHasbg] = useState("");
  const [logoSrc, setLogoSrc] = useState(logo);
  function scrollDetect() {
    var lastScrollTop = 0;
    window.onscroll = function () {
      let btn_to_top = document.getElementById("btn_to_top");
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setScrollClass("scroll_down");
      } else if (st < lastScrollTop) {
        setScrollClass("scroll_up");
      }
      if (lastScrollTop >= 80) {
        setHasbg("hasbg");
        setLogoSrc(logo2);
        btn_to_top.style.opacity = 1;
      } else {
        btn_to_top.style.opacity = 0;
        setHasbg("");
        setLogoSrc(logo);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };
  }
  useEffect(() => {
    window.onclick = function (event) {
      let target = event.target;
      if (
        !target.closest("#mobile_menu_wrapper") &&
        !target.closest("#menu_nav-icon")
      ) {
        showMenuMobile("open");
      }
    };
    scrollDetect();
    return () => window.removeEventListener("scroll", scrollDetect);
  }, []);
  return (
    <Box className={`header_wrapper ${scrollClass}`}>
      <Box className={`top_bar ${hasbg}`}>
        <Box
          className="standard_wrapper"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box id="logo">
            <img src={logoSrc} width="92" height="22" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <NavBar />
            <a
              id="menu_nav-icon"
              style={{ padding: "18px 10px 15px 0px" }}
              onClick={() => {
                showMenuMobile("show");
              }}
            >
              <MenuIcon></MenuIcon>
            </a>
            <Box className="header_cart">
              <span className="cart_count">0</span>
              <a href="">
                <ShoppingCartIcon></ShoppingCartIcon>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
