import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

import Videos from "../components/Videos"
import Loader from "./Loader.jsx"
import fetchFromAPI from "../utils/fetchFromApi"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
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
    snippet: { title, channelTitle },
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
              sx={{ color: "#ffc6cf", opacity: 0.7 }}
              style={{ textShadow: "1px 1px #fd4885" }}
              px={2}
              py={1}
            >
              <Typography variant={{ sm: "subtitle1", md: "h6" }}>
                {channelTitle}

                <CheckCircleIcon sx={{ fontSize: "16px", ml: "5px" }} />
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#ffc6cf", opacity: 0.7 }}
              style={{ textShadow: "1px 1px #fd4885" }}
              px={2}
            >
              <Typography variant="h6" fontWeight="bold">
                <RemoveRedEyeIcon
                  style={{ color: "#fd4885", marginRight: "0.5rem" }}
                />
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                style={{ marginBottom: "2rem" }}
              >
                <ThumbUpIcon
                  style={{ color: "#fd4885", marginRight: "0.5rem" }}
                />
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box
          py={{ md: 1, xs: 0 }}
          px={{ md: 0, xs: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
