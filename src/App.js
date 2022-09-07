import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import Feed from "./components/Feed"
import VideoDetail from "./components/VideoDetail"
import SearchFeed from "./components/SearchFeed"
import Navbar from "./components/Navbar"

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#FFFFFF" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App
