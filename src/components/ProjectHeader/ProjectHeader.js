import React from "react";
import Box from "@mui/material/Box";
import HeaderText from "../HeaderText/HeaderText";

export default function ProjectHeader() {
  return (
    <>
      <Box p={1} m={2}>
        <HeaderText text="Google Map Address Auto-complete Project" />
      </Box>
    </>
  );
}
