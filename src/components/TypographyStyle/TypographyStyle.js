import React from "react";
import Typography from "@mui/material/Typography";

export default function TypographyStyle(props) {
  return (
    <>
      <Typography sx={{ fontSize: { lg: "1.5rem", xs: "1rem" } }}>
        {props.text}
      </Typography>
    </>
  );
}
