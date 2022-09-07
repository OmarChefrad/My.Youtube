import React from "react"
import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import {
  demoThumbailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants"
import "./style.css"

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{
          height: "106px",
        }}
        style={{
          background: "linear-gradient(190deg,#ffc6cf,#ffedf0)",
        }}
      />
    </Card>
  )
}

export default VideoCard
