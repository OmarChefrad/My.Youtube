import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

import Videos from "../components/Videos"
import Loader from "./Loader.jsx"
import fetchFromAPI from "../utils/fetchFromApi"
import "./style.css"

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  if (!videoDetail?.snippet) return <Loader />

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail

  return (
    <Box minHeight="88vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#ffacb9"
              variant="h5"
              fontWeight="bold"
              pt={2}
              pl={2}
              style={{ textShadow: "2px 1px #fd4885" }}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#ffc6cf" }}
              style={{ textShadow: "1px 1px #fd4885" }}
              px={2}
            >
              <Typography variant="h6" fontWeight="bold">
                {viewCount} views
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
