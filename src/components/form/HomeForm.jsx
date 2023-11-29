import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VerticalAlignCenterIcon from "@mui/icons-material/VerticalAlignCenter";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import {
  any_month as anyMonth,
  sort_by as sortBy,
  tours,
  destination,
} from "../../apis/data";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const FormContent = () => {
  const [advanceSearch, setAdvanceSearch] = useState(false);
  return (
    <div className="center_wrapper">
      <div className="inner_content">
        <div className="standard_wrapper">
          <h2 className="ppb_title">Where do you want to go?</h2>
          <div className="page_tagline">
            Trips, experiences, and places. All in one service.
          </div>

          <form id="tour_search_form">
            <Box className="tour_search_wrapper" sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid item mobile={12} tablet={3}>
                  <FormInput icon={<SearchIcon sx={{ fontSize: "large" }} />}>
                    <input type="text" placeholder="Destination, city" />
                  </FormInput>
                </Grid>
                <Grid item mobile={12} tablet={3}>
                  <FormInput
                    icon={<CalendarTodayIcon sx={{ fontSize: "large" }} />}
                  >
                    <select>
                      <option>Any Month</option>
                      {anyMonth.map((item, index) => (
                        <option key={index} value={item}>
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </option>
                      ))}
                    </select>
                  </FormInput>
                </Grid>
                <Grid item mobile={12} tablet={3}>
                  <FormInput
                    icon={
                      <VerticalAlignCenterIcon sx={{ fontSize: "large" }} />
                    }
                  >
                    <select>
                      {sortBy.map((item, index) => (
                        <option value={item.value} key={index}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </FormInput>
                </Grid>
                <Grid item mobile={12} tablet={3}>
                  <FormInput className="last">
                    <input
                      type="submit"
                      className="button"
                      value="Search"
                      onClick={(even) => {
                        even.preventDefault();
                      }}
                    />
                  </FormInput>
                </Grid>
              </Grid>
            </Box>
            <Box
              className="tour_advance_search_wrapper"
              sx={{
                display: advanceSearch ? "block" : "none",
                flexGrow:1,
                marginTop:'5px'
              }}
         
            >
              <Grid container spacing={1}>
                <Grid item mobile={12} tablet={3}>
                  <FormInput
                    icon={
                      <VerticalAlignCenterIcon sx={{ fontSize: "large" }} />
                    }
                  >
                    <select>
                      {tours.map((item, index) => (
                        <option value={item} key={index}>
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </option>
                      ))}
                    </select>
                  </FormInput>
                </Grid>
                <Grid item mobile={12} tablet={3}>
                  <FormInput
                    icon={
                      <VerticalAlignCenterIcon sx={{ fontSize: "large" }} />
                    }
                  >
                    <select>
                      <option>Any Destinations</option>
                      {destination.map((item, index) => (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </FormInput>
                </Grid>
                <Grid item mobile={12} tablet={3}>
                  <FormInput
                    icon={
                      <VerticalAlignCenterIcon sx={{ fontSize: "large" }} />
                    }
                  >
                    <input
                      type="text"
                      id="budget"
                      placeholder="Max budget ex. 500"
                    />
                  </FormInput>
                </Grid>
              </Grid>
            </Box>
            <div className="tour_advance_search_wrapper_link">
              <a
                href="#"
                id="tour_advance_search_toggle"
                onClick={(event) => {
                  event.preventDefault();
                  setAdvanceSearch(!advanceSearch);
                }}
              >
                {advanceSearch ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
                Advanced Search
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContent;
