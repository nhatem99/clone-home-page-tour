import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import { recent_trips, footer_nav } from "../../apis/data";
const Footer = () => {
  return (
    <div id="footer">
      <Box sx={{ flexGrow: 1 }} className="standard_wrapper">
        <Grid container spacing={2}>
          <Grid mobile={12} tablet={4}>
            <Box className="widget">
              <Box component="h2" className="widget_title">
                Our Awards
              </Box>
            </Box>
            <Box className="widget_text">
              <p>
                London is a megalopolis of people, ideas and frenetic energy.
                The capital and largest city of the United Kingdom.
              </p>
              <img
                width="246px"
                style={{ marginTop: "30px" }}
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
              />
            </Box>
          </Grid>
          <Grid mobile={12} tablet={4}>
            <Box className="widget">
              <Box component="h2" className="widget_title">
                Contact Info
              </Box>
            </Box>
            <Box className="widget_text">
              <p>
                <SmartphoneIcon sx={{ marginRight: "5px" }} /> 1-567-124-44227
              </p>
              <p>
                <LocationOnIcon sx={{ marginRight: "5px" }} /> 184 Main Street
                East Perl Habour 8007
              </p>
              <p>
                <AccessAlarmIcon sx={{ marginRight: "5px" }} /> Mon - Sat 8.00 -
                18.00 Sunday CLOSED
              </p>
            </Box>
            <ul className="social_wrapper">
              <li>
                <a>
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a style={{ background: "#00C3F3" }}>
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a style={{ background: "#cc181e" }}>
                  <YouTubeIcon />
                </a>
              </li>
              <li>
                <a style={{ background: "#bd081c" }}>
                  <PinterestIcon />
                </a>
              </li>
              <li>
                <a style={{ background: "#405de6" }}>
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </Grid>
          <Grid mobile={12} tablet={4}>
            <Box className="widget">
              <Box component="h2" className="widget_title">
                Recent Trips
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                {recent_trips
                  ? recent_trips.map((item, index) => (
                      <Grid mobile={4} key={index}>
                        <a href={item.url}>
                          <img
                            src={item.image_src}
                            style={{ borderRadius: "5px" }}
                          />
                        </a>
                      </Grid>
                    ))
                  : ""}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="standard_wrapper" sx={{ marginTop: "35px" }}>
        <div id="footer_bar_wrapper">
          <ul id="footer_menu" className="footer_nav">
            {footer_nav.length > 0
              ? footer_nav.map((item, index) => (
                  <li key={index} className="menu-item">
                    <a href={item.url}>{item.name}</a>
                  </li>
                ))
              : ""}
          </ul>

          <div id="copyright">
            © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Footer;
