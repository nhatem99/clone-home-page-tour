import React from "react";
import { Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ButtonScrollToTop = () => {
  return (
    <Button
      variant="contained"
      id="btn_to_top"
      size="small"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <KeyboardArrowUpIcon fontSize="small" sx={{}} />
    </Button>
  );
};

export default ButtonScrollToTop;
