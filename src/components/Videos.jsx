import React from "react"
import { Stack, Box } from "@mui/material"
import VideoCard from "../components/VideoCard"
import Loader from "../components/Loader"
import "./style.css"

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />
  return (
    <div>
      <Stack
        direction={direction || "row"}
        flexWrap="wrap"
        justifyContent="start"
        alignItems="start"
        gap={6}
        className="videos"
      >
        {videos.map((item, idx) => (
          <Box key={idx}>{item?.id?.videoId && <VideoCard video={item} />}</Box>
        ))}
      </Stack>
    </div>
  )
}

export default Videos
