import React from "react"
import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import SideBar from "../components/SideBar"
import Videos from "../components/Videos"

import fetchFromAPI from "../utils/fetchFromApi"

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items)
    })
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "88vh" },
          borderRight: "1px solid #F89880",
          px: { sx: 0, md: 2 },

          borderBottom: "0.2px solid #fd4885",
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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
      <Box p={2} sx={{ overflowY: "auto", height: "88vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#ffecef", textShadow: "4px 4px #ffc6cf;" }}
        >
          {selectedCategory} <span style={{ color: "#fd4885" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
