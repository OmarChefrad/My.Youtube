import React from "react"
import { Stack, Box } from "@mui/material"
import VideoCard from "../components/VideoCard"
import "./style.css"

const Videos = ({ videos, direction }) => {
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
          <Box key={idx}>{item.id.videoId && <VideoCard video={item} />}</Box>
        ))}
      </Stack>
    </div>
  )
}

export default Videos
