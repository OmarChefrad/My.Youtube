import React from "react"
import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import SideBar from "../components/SideBar"
import Vidoes from "../components/Videos"

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "88vh" },
          borderRight: "1px solid #F89880",
          px: { sx: 0, md: 4 },
        }}
      >
        <SideBar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1.5,
            color: "#fd4885",
          }}
        >
          copyright © Umar 2022
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#ffecef", textShadow: "4px 4px #ffc6cf;" }}
        >
          New <span style={{ color: "#fd4885" }}>videos</span>
        </Typography>
        <Vidoes />
      </Box>
    </Stack>
  )
}

export default Feed
