import React from "react"
import { Box, CircularProgress, Stack } from "@mui/material"

const Loader = () => (
  <Box minHeight="95vh">
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <CircularProgress style={{ color: "#fd4885" }} />
    </Stack>
  </Box>
)

export default Loader
