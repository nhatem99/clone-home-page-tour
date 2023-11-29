import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardWrap = ({
  children,
  media = "",
  mediaClass = "",
  cardClass = "",
}) => {
  return (
    <Card
      sx={{ position: "relative" }}
      variant="outlined"
      className={cardClass}
    >
      {media ? (
        <CardMedia
          className={mediaClass}
          component="img"
          alt="green iguana"
          image={media}
        />
      ) : (
        ""
      )}
      {children}
    </Card>
  );
};

export default CardWrap;
