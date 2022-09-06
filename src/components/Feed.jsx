import React from "react"
import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import SideBar from "../components/SideBar"

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #ff9c8c",
          px: { sx: 0, md: 6 },
        }}
      >
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1.5,
            color: "#ffc6cf",
          }}
        >
          <SideBar />
          copyright © Umar 2022
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed
