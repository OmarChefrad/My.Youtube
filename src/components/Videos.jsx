import React from "react"
import { Stack, Box } from "@mui/material"
import VideoCard from "../components/VideoCard"
import ChannelCard from "../components/ChannelCard"

const Videos = ({ videos }) => {
  return (
    <div>
      <Stack direction="row" flezWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    </div>
  )
}

export default Videos
