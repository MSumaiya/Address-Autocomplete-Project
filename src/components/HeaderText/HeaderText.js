import React from "react";
import Typography from "@mui/material/Typography";

export default function HeaderText(props) {
  return (
    <>
      <Typography
        sx={{
          fontSize: {
            lg: "4rem",
            md: "3rem",
            sm: "3rem",
            xs: "2rem",
          },
        }}
        fontWeight="500"
        color="primary"
        textAlign="center"
      >
        {props.text}
      </Typography>
    </>
  );
}
