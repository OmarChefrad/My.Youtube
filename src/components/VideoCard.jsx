import React from "react"
import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoVideoUrl, demoVideoTitle } from "../utils/constants"
import "./style.css"

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: {
          md: "358px",
          xs: "100%",
          borderRadius: 10,
          boxShadow:
            "rgba(255, 105, 180, 0.35) 0px 5px 15px, rgba(255, 20, 147, 0.19) 0px 3px 3px",
        },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: 358,
            height: 180,
          }}
        />
      </Link>
      <CardContent
        sx={{
          height: "106px",
        }}
        style={{
          background: "linear-gradient(190deg,#ffc6cf,#ffedf0)",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitile"
            fontSize="1.15rem"
            color="#FFFFFF"
            className="title"
          >
            <CheckCircle sx={{ fontSize: 25, color: "white", mr: "5px" }} />
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
