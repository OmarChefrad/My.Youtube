import React from "react"
import { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import Videos from "../components/Videos"
import { useParams } from "react-router-dom"

import fetchFromAPI from "../utils/fetchFromApi"

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items)
    })
  }, [searchTerm])

  return (
    <Box p={2} pl={17} sx={{ overflowY: "auto", height: "88vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
        sx={{ color: "#ffecef", textShadow: "4px 4px #ffc6cf;" }}
      >
        Search Results for:
        <span
          style={{ color: "#fd4885", marginRight: "10px", marginLeft: "10px" }}
        >
          {searchTerm}
        </span>
        Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed
